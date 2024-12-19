import { create } from 'zustand'

export const useTransformStore = create((set) => ({
  mode: 'translate',
  setMode: (mode) => set({ mode }),
  isPreviewMode: false,
  setIsPreviewMode: (isPreviewMode) => set({ isPreviewMode }),
  previewModel: null,
  setPreviewModel: (model) => set({ previewModel: model }),
  selectedPedestalPosition: null,
  setSelectedPedestalPosition: (position) => set({ selectedPedestalPosition: position }),
  modelTransform: {
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 }
  },
  setModelTransform: (transform) => set({ modelTransform: transform }),
  resetTransformStore: () => set({
    mode: 'translate',
    isPreviewMode: false,
    previewModel: null,
    selectedPedestalPosition: null,
    modelTransform: {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 }
    }
  })
})) 