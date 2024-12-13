'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useUploadStore } from '@/stores/uploadStore'
import { ArtworkUploadForm } from './ArtworkUploadForm'

export function UploadArtworkModal() {
  const { isOpen, closeModal } = useUploadStore()

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>작품 업로드</DialogTitle>
        </DialogHeader>
        <ArtworkUploadForm />
      </DialogContent>
    </Dialog>
  )
} 