import { create } from 'zustand'

export const useUpload3dStore = create((set) => ({
  isOpen: false,
  selectedPedestalIndex: null,
  openModal: (index) => {
    console.log('Opening modal with index:', index)
    set({ isOpen: true, selectedPedestalIndex: index })
  },
  closeModal: () => {
    console.log('Closing modal')
    set({ isOpen: false, selectedPedestalIndex: null })
  }
})) 