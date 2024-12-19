'use client'

import { useState } from 'react'
import { ArtworkUpload3dForm } from './ArtworkUpload3dForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useControlsStore } from '@/stores/controlsStore'
import { useTransformStore } from '@/stores/transformStore'

export function Upload3dArtworkModal({ pedestalIndex, onClose }) {
  const [showForm, setShowForm] = useState(false)
  const { disableControls } = useControlsStore()
  const { isPreviewMode } = useTransformStore()

  const handleConfirm = () => {
    setShowForm(true)
    disableControls()
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOpenChange = (open) => {
    if (!isPreviewMode) {
      if (!open) onClose()
    }
  }

  return (
    <>
      {!showForm ? (
        <>
          <DialogHeader>
            <DialogTitle>작품 업로드</DialogTitle>
            <DialogDescription>
              이 받침대에 3D 작품을 업로드하시겠습니까?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={handleCancel}>
              취소
            </Button>
            <Button onClick={handleConfirm}>
              확인
            </Button>
          </div>
        </>
      ) : (
        <ArtworkUpload3dForm pedestalIndex={pedestalIndex} onClose={onClose} />
      )}
      {isPreviewMode && (
        <style jsx global>{`
          .fixed[data-state="open"] {
            pointer-events: none !important;
          }
          .fixed[data-state="open"] > * {
            pointer-events: auto;
          }
        `}</style>
      )}
    </>
  )
} 