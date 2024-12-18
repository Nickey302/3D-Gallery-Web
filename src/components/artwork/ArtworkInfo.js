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
      distanceFactor={5}
      zIndexRange={[100, 0]}
    >
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
          className="sm:max-w-[425px] text-white/90"
          aria-describedby="artwork-description"
          hideClose
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              {artwork.title || '제목 없음'}
            </DialogTitle>
            <DialogDescription 
              id="artwork-description"
              className="text-white/80 text-base mt-2"
            >
              작품 상세 정보
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-white/90 text-base leading-relaxed">
              {artwork.description || '설명 없음'}
            </p>
            <div className="text-base">
              <span className="font-semibold text-white">아티스트: </span>
              <span className="text-white/90">{artwork.medium || '정보 없음'}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Html>
  )
} 