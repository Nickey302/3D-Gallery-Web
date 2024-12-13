import { create } from 'zustand'

export const useUploadStore = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false })
})) 