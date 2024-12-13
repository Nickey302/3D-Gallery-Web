import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

export const useAuthStore = create((set) => ({
  isOpen: false,
  user: null,
  
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setUser: (user) => set({ user }),
  
  signOut: async () => {
    try {
      await supabase.auth.signOut()
      set({ user: null })
    } catch (error) {
      console.error('Error signing out:', error)
    }
  },

  initializeAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        set({ user: session.user })
      }
    } catch (error) {
      console.error('Error initializing auth:', error)
    }
  }
})) 