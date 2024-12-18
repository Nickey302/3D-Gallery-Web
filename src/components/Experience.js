'use client'

import { Environment, PointerLockControls, Sky } from "@react-three/drei"
import { Gallery } from "./Gallery"
import Lights from "./Lights"
import Controller from './Controller'
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useControlsStore } from '@/stores/controlsStore'

export default function Experience() {
  const { isControlsEnabled } = useControlsStore()

  return (
    <>
      {/* <Perf /> */}
    
      <Environment
        preset="night"
        background
        backgroundBlurriness={0.5}
        environmentIntensity={0.7}
        blur={0.2}
      />

      <Sky
        sunPosition={[-1, -0.1, 0]}
      />

      {isControlsEnabled && (
        <>
          <PointerLockControls />
          <Controller />
        </>
      )}

      <Lights />
      <Gallery position={[-50, -20.5, 50]} />
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
