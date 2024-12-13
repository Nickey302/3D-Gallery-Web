'use client'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'
import { useUploadStore } from '@/stores/uploadStore'

export function Navbar() {
  const { user, openModal: openAuthModal, signOut } = useAuthStore()
  const { openModal: openUploadModal } = useUploadStore()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">3D Gallery</h1>
        <div className="space-x-2">
          {user ? (
            <>
              <Button onClick={openUploadModal}>작품 업로드</Button>
              <Button variant="outline" onClick={signOut}>로그아웃</Button>
            </>
          ) : (
            <Button onClick={openAuthModal}>로그인</Button>
          )}
        </div>
      </div>
    </nav>
  )
} 