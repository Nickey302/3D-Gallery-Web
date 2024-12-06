'use client'

import { Environment, PointerLockControls, Sky } from "@react-three/drei"
import { Gallery } from "./Gallery"
import Lights from "./Lights"
import Controller from './Controller'
import { Bloom, EffectComposer } from "@react-three/postprocessing"

export default function Experience() {
  return (
    <>
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

      <PointerLockControls />

      <Lights />
      <Gallery position={[-50, -20.5, 50]} />
      <Controller />
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
