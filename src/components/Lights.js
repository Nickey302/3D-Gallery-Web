import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLightHelper, SpotLightHelper } from 'three'

export default function Lights() {
  // 조명에 대한 ref 생성
  const directionalRef1 = useRef()
  const directionalRef2 = useRef()
  const spotRef1 = useRef()
  const spotRef2 = useRef()

  const colors = [
    '#FFECDA', // 1-4
    '#0040FF', // 5-8
    '#FFB395', // 9-12
    '#FF7B00', // 13-16
    '#FFECDA', // 17-18
    '#E100FF'  // 19-20
  ]

  // Helper 추가
  useHelper(directionalRef1, DirectionalLightHelper, 1, '#FFECDA')
  useHelper(directionalRef2, DirectionalLightHelper, 1, '#FFB395')
  useHelper(spotRef1, SpotLightHelper, '#FF7B00')
  useHelper(spotRef2, SpotLightHelper, '#0040FF')

  return (
    <>
      <directionalLight 
        ref={directionalRef1}
        position={[5, 1, 0]} 
        intensity={0.7}
        color="#FFECDA"
        castShadow
        shadow-mapSize={[256, 256]}
      />
      
      <directionalLight 
        ref={directionalRef2}
        position={[-5, 0.4, -5]} 
        intensity={1.2}
        rotation={[0, Math.PI / 2, 0]}
        color="#FFB395"
        castShadow
        shadow-mapSize={[256, 256]}
      />

      <spotLight 
        ref={spotRef1}
        position={[0.77, 1.55, -1.15]}
        angle={Math.PI / 3}
        penumbra={0.4}
        decay={1}
        intensity={1.8}
        color="#FF7B00"
        castShadow
        shadow-mapSize={[256, 256]}
      />

      <spotLight 
        ref={spotRef2}
        position={[3.7, 1.73, 5]}
        angle={Math.PI / 2}
        penumbra={0.5}
        decay={1}
        intensity={1.0}
        color="#0040FF"
        castShadow
        shadow-mapSize={[256, 256]}
      />

      <ambientLight intensity={0.3} />
    </>
  )
}
