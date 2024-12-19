'use client'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TransformControls, PivotControls } from '@react-three/drei'
import { useTransformStore } from '@/stores/transformStore'
import { useEffect, useState } from 'react'

export function Model3dPreview({ 
  url, 
  position,
  scale,
  rotation,
  onPositionChange,
  onScaleChange,
  onRotationChange
}) {
  const { mode, setIsTransforming } = useTransformStore()
  const [model, setModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(url, (gltf) => {
      setModel(gltf.scene)
    })
  }, [url])

  if (!model) return null

  return (
    <PivotControls
      activeAxes={[true, true, true]}
      matrix={model.matrix}
      depthTest={false}
      fixed={true}
      scale={150}
    >
      <TransformControls
        mode={mode}
        object={model}
        position={position}
        scale={scale}
        rotation={rotation}
        onMouseDown={() => setIsTransforming(true)}
        onMouseUp={() => setIsTransforming(false)}
        onChange={(e) => {
          const obj = e.target.object
          if (mode === 'translate') onPositionChange([obj.position.x, obj.position.y, obj.position.z])
          if (mode === 'scale') onScaleChange([obj.scale.x, obj.scale.y, obj.scale.z])
          if (mode === 'rotate') onRotationChange([obj.rotation.x, obj.rotation.y, obj.rotation.z])
        }}
      >
        <primitive object={model} />
      </TransformControls>
    </PivotControls>
  )
} 