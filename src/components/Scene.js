'use client'

import { Canvas } from '@react-three/fiber'
import {
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
  Loader
} from '@react-three/drei'
import Experience from './Experience';
import { Suspense, useState } from 'react';

export default function Scene() {
  const [dpr, setDpr] = useState(1)

  return (
    <>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        frameloop="always"
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 45, near: 1, far: 1000 }}
        shadows
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <PerformanceMonitor
              onIncline={() => {
                setDpr(Math.min(2, window.devicePixelRatio))
              }}
              onDecline={() => {
            setDpr(1)
          }}>

          {/* <color attach="background" args={['#000000']} /> */}

          <Suspense fallback={"Loading"}>
            <Experience />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      <Loader />
    </>
  );
}
