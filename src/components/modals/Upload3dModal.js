'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useUpload3dStore } from '@/stores/upload3dStore'
import { useControlsStore } from '@/stores/controlsStore'
import { usePopupCooldownStore } from '@/stores/popupCooldownStore'
import { useTransformStore } from '@/stores/transformStore'
import { Upload3dArtworkModal } from '../artwork/Upload3dArtworkModal'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

export function Upload3dModal() {
  const { isOpen, closeModal, selectedPedestalIndex } = useUpload3dStore()
  const { enableControls } = useControlsStore()
  const { canShowPopup, setLastPopupTime } = usePopupCooldownStore()
  const { isPreviewMode } = useTransformStore()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session?.user)
      setIsLoading(false)
    }
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session?.user)
      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (isOpen && !isLoading && !isLoggedIn) {
      closeModal()
    }
  }, [isOpen, isLoggedIn, closeModal, isLoading])

  if (isLoading || !isLoggedIn) return null

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent 
        className="sm:max-w-[425px]"
        showClose={!isPreviewMode}
        onEscapeKeyDown={(e) => {
          if (isPreviewMode) {
            e.preventDefault()
          }
        }}
        onPointerDownOutside={(e) => {
          if (isPreviewMode) {
            e.preventDefault()
          }
        }}
      >
        <Upload3dArtworkModal 
          pedestalIndex={selectedPedestalIndex} 
          onClose={closeModal}
        />
      </DialogContent>
    </Dialog>
  )
} 