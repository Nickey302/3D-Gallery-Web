import { create } from 'zustand'

export const usePopupCooldownStore = create((set, get) => ({
  lastPopupTime: 0,
  setLastPopupTime: () => set({ lastPopupTime: Date.now() }),
  canShowPopup: () => {
    const currentTime = Date.now()
    const cooldownPeriod = 10000 // 10초
    return currentTime - get().lastPopupTime > cooldownPeriod
  }
})) 