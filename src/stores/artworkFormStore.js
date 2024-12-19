import { create } from 'zustand'

export const useArtworkFormStore = create((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
  resetFormData: () => set({ formData: null })
})) 