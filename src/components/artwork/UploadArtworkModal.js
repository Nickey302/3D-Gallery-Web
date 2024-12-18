'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useUploadStore } from '@/stores/uploadStore'
import { useControlsStore } from '@/stores/controlsStore'
import { usePopupCooldownStore } from '@/stores/popupCooldownStore'
import { ArtworkUploadForm } from './ArtworkUploadForm'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export function UploadArtworkModal() {
  const { isOpen, closeModal } = useUploadStore()
  const { enableControls, disableControls } = useControlsStore()
  const { canShowPopup, setLastPopupTime } = usePopupCooldownStore()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      if (!canShowPopup()) {
        closeModal()
        return
      }
      setLastPopupTime()
    } else {
      enableControls()
    }
  }, [isOpen, enableControls, canShowPopup, setLastPopupTime, closeModal])

  // 로그인 상태 확인 및 세션 모니터링
  useEffect(() => {
    // 초기 로그인 상태 확인
    checkAuth()

    // 인증 상태 변경 모니터링
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session?.user)
      setIsLoading(false)
    })

    return () => {
      // 구독 정리
      subscription.unsubscribe()
    }
  }, [])

  // 로그인 상태 확인 함수
  async function checkAuth() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      setIsLoggedIn(!!session?.user)
    } catch (error) {
      console.error('Auth check error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // 로그인하지 않은 상태에서 모달이 열리면 알림
  useEffect(() => {
    if (isOpen && !isLoading && !isLoggedIn) {
      // toast.error('로그인이 필요한 서비스입니다')
      closeModal()
    }
  }, [isOpen, isLoggedIn, closeModal, isLoading])

  const handleConfirm = () => {
    setShowConfirm(true)
    disableControls()
  }

  const handleCancel = () => {
    closeModal()
    setShowConfirm(false)
  }

  // 로딩 중이거나 로그인하지 않은 경우 렌더링하지 않음
  if (isLoading || !isLoggedIn) return null

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent 
        className="sm:max-w-[425px]"
        showClose={false}
      >
        {!showConfirm ? (
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-lg font-semibold text-center">
              작품을 업로드 하시겠습니까?
            </h2>
            <div className="flex justify-center gap-4">
              <Button onClick={handleCancel}>
                취소
              </Button>
              <Button onClick={handleConfirm}>
                확인
              </Button>
            </div>
          </div>
        ) : (
          <ArtworkUploadForm />
        )}
      </DialogContent>
    </Dialog>
  )
} 