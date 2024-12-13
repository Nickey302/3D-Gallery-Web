'use client'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/authStore'
import { useUploadStore } from '@/stores/uploadStore'

export function Navbar() {
  const { user, openModal: openAuthModal, signOut } = useAuthStore()
  const { openModal: openUploadModal } = useUploadStore()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">3D Gallery</h1>
        <div className="space-x-2">
          {user ? (
            <>
              <Button variant="outline" onClick={signOut}>Logout</Button>
            </>
          ) : (
            <Button onClick={openAuthModal}>Login</Button>
          )}
        </div>
      </div>
    </nav>
  )
} 