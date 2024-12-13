import { create } from 'zustand'

export const useUploadStore = create((set) => ({
  isOpen: false,
  selectedFrame: null,
  openModal: (frameIndex) => set({ isOpen: true, selectedFrame: frameIndex }),
  closeModal: () => set({ isOpen: false, selectedFrame: null })
})) 