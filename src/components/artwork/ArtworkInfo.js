'use client'

import { Html } from '@react-three/drei'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function ArtworkInfo({ artwork, isOpen, onClose }) {
  if (!artwork) return null

  return (
    <Html
      position={[0, 0, 0]}
      center
      distanceFactor={10}
    >
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{artwork.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{artwork.description}</p>
            <div className="text-sm">
              <span className="font-semibold">매체: </span>
              {artwork.medium}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Html>
  )
} 