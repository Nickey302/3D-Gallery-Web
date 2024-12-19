'use client'

import { useTransformStore } from '@/stores/transformStore'
import { useArtworkFormStore } from '@/stores/artworkFormStore'

export function ModelTransformControls() {
  const { 
    isPreviewMode,
    modelTransform, 
    setModelTransform
  } = useTransformStore()

  if (!isPreviewMode) return null

  const handleComplete = () => {
    const form = document.getElementById('upload-form')
    if (form) {
      const submitButton = form.querySelector('button[type="submit"]')
      if (submitButton) submitButton.click()
    }
  }

  return (
    <div 
      className="fixed top-4 right-4 z-[9999]" 
      style={{ 
        pointerEvents: 'auto',
        position: 'fixed',
        isolation: 'isolate'
      }}
    >
      <div 
        className="bg-zinc-900/90 border border-zinc-800 shadow-xl rounded-xl p-6 space-y-6 w-[300px]"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="text-zinc-100 text-lg font-medium">모델 조정</div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-zinc-300 text-sm font-medium">높이 조정</label>
            <div className="relative">
              <input
                type="range"
                min="-0.5"
                max="0.5"
                step="0.05"
                value={modelTransform.position.y - (modelTransform.position.y | 0)}
                onChange={(e) => {
                  const value = parseFloat(e.target.value)
                  setModelTransform({
                    ...modelTransform,
                    position: { 
                      ...modelTransform.position,
                      y: (modelTransform.position.y | 0) + value
                    }
                  })
                }}
                className="w-full appearance-none bg-zinc-700 h-2 rounded-full outline-none 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:bg-zinc-100"
              />
              <div className="text-zinc-400 text-xs text-center mt-1">
                {(modelTransform.position.y - (modelTransform.position.y | 0)).toFixed(2)}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-zinc-300 text-sm font-medium">크기 조정</label>
            <div className="relative">
              <input
                type="range"
                min="0.1"
                max="2"
                step="0.1"
                value={modelTransform.scale.x}
                onChange={(e) => {
                  const value = parseFloat(e.target.value)
                  setModelTransform({
                    ...modelTransform,
                    scale: { x: value, y: value, z: value }
                  })
                }}
                className="w-full appearance-none bg-zinc-700 h-2 rounded-full outline-none 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:bg-zinc-100"
              />
              <div className="text-zinc-400 text-xs text-center mt-1">
                {modelTransform.scale.x.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <button
          className="w-full px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors 
          rounded-lg text-zinc-100 font-medium border border-zinc-600"
          onClick={handleComplete}
          style={{ pointerEvents: 'auto' }}
        >
          완료
        </button>
      </div>
    </div>
  )
} 