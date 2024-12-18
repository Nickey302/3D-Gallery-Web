import { create } from 'zustand'

export const useControlsStore = create((set) => ({
  isControlsEnabled: true,
  disableControls: () => set({ isControlsEnabled: false }),
  enableControls: () => set({ isControlsEnabled: true })
})) 