'use client'

import { useEffect } from 'react'
import Scene from '@/components/Scene'
import { Navbar } from '@/components/Navbar'
import { AuthModal } from '@/components/auth/AuthModal'
import { UploadArtworkModal } from '@/components/artwork/UploadArtworkModal'
import { Toaster } from 'sonner'
import { useAuthStore } from '@/stores/authStore'

export default function Page() {
  const { initializeAuth } = useAuthStore()

  useEffect(() => {
    initializeAuth()
  }, [])

  return (
    <div className='relative w-full h-full m-0 p-0 overflow-hidden left-0 top-0 bg-black'>
      <Navbar />
      <Scene />
      <AuthModal />
      <UploadArtworkModal />
      <Toaster />
    </div>
  )
}