'use client'

import { Environment, PointerLockControls } from "@react-three/drei"
import { Gallery } from "./Gallery"
import Lights from "./Lights"
import Controller from './Controller'
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"

export default function Experience() {
  return (
    <>
      <PointerLockControls />
      {/* <Environment
        preset="dawn"
        environmentIntensity={0.12}
        backgroundIntensity={0.3}
        backgroundBlurriness={0.45}
      /> */}

      <Lights />
      <Gallery position={[-50, -20.5, 50]} />
      <Controller />
      <PostPro />
    </>
  )
}

function PostPro() {
  return (
    <EffectComposer enableNormalPass multisampling={4}>
      <Bloom intensity={0.3} luminanceThreshold={0.5} />
      {/* <Noise opacity={0.02} /> */}
    </EffectComposer>
  )
}
