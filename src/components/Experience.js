'use client'

import { Environment, OrbitControls, PointerLockControls, Sky, TransformControls } from "@react-three/drei"
import { Gallery } from "./Gallery"
import Lights from "./Lights"
import { useTransformStore } from '@/stores/transformStore'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Controller from "./Controller"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GALLERY_OFFSET } from '@/constants/galleryOffset'

export default function Experience() {
  const { 
    isPreviewMode, 
    previewModel, 
    mode,
    modelTransform, 
    setModelTransform,
    isTransforming,
    setIsTransforming,
    selectedPedestalPosition
  } = useTransformStore()

  const orbitControlsRef = useRef()
  const { camera } = useThree()

  useEffect(() => {
    if (isPreviewMode && selectedPedestalPosition) {
      const targetPosition = new THREE.Vector3(
        selectedPedestalPosition.position[0] + GALLERY_OFFSET.x,
        selectedPedestalPosition.position[1] + GALLERY_OFFSET.y,
        selectedPedestalPosition.position[2] + GALLERY_OFFSET.z
      )
      
      camera.position.set(
        targetPosition.x + 2,
        targetPosition.y + 1,
        targetPosition.z + 2
      )
      
      if (orbitControlsRef.current) {
        orbitControlsRef.current.target.copy(targetPosition)
        orbitControlsRef.current.update()
      }
    }
  }, [isPreviewMode, selectedPedestalPosition])

  return (
    <>
      <Environment preset="night" background />
      <Sky sunPosition={[-1, -0.1, 0]} />

      {isPreviewMode && (
        <>
          <OrbitControls 
            ref={orbitControlsRef}
            makeDefault
          />
          {previewModel && (
            <primitive 
              object={useLoader(GLTFLoader, previewModel.url).scene}
              position={[
                modelTransform.position.x,
                modelTransform.position.y,
                modelTransform.position.z
              ]}
              rotation={[
                modelTransform.rotation.x,
                modelTransform.rotation.y,
                modelTransform.rotation.z
              ]}
              scale={[
                modelTransform.scale.x,
                modelTransform.scale.x,
                modelTransform.scale.x
              ]}
            />
          )}
        </>
      )}

      {!isPreviewMode && (
        <>
          <PointerLockControls />
          <Controller />
        </>
      )}

      <Lights />
      <Gallery position={GALLERY_OFFSET} />
      <PostPro />
    </>
  )
}

function PostPro() {
  return (
    <EffectComposer enableNormalPass multisampling={1}>
      <Bloom luminanceSmoothing={1} intensity={0.3} luminanceThreshold={0.5} />
    </EffectComposer>
  )
}

