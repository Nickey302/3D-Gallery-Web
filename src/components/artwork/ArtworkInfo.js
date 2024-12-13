'use client'

import { Html } from '@react-three/drei'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'

export function ArtworkInfo({ artwork, isOpen, onClose }) {
  if (!artwork) return null

  return (
    <Html
      position={[0, 0, 0]}
      center
      distanceFactor={10}
      zIndexRange={[100, 0]}
    >
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
          className="sm:max-w-[425px]"
          aria-describedby="artwork-description"
        >
          <DialogHeader>
            <DialogTitle>{artwork.title || '제목 없음'}</DialogTitle>
            <DialogDescription id="artwork-description">
              작품 상세 정보
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {artwork.description || '설명 없음'}
            </p>
            <div className="text-sm">
              <span className="font-semibold">매체: </span>
              {artwork.medium || '정보 없음'}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Html>
  )
} 