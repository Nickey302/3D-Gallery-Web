export default function Lights() {
  return (
    <>
      <directionalLight 
        position={[5, 1, 0]} 
        intensity={0.7}
        color="#FFECDA"
        castShadow
      />
      
      <directionalLight 
        position={[-5, 0.4, -5]} 
        intensity={1.2}
        rotation={[0, Math.PI / 2, 0]}
        color="#FFB395"
        castShadow
      />

      <spotLight 
        position={[0.77, 1.55, -1.15]}
        angle={Math.PI / 3}
        penumbra={0.4}
        decay={1}
        intensity={1.8}
        color="#FF7B00"
        castShadow
        shadow-mapSize={[256, 256]}
      />

      <directionalLight 
        position={[0, 1, 10]}
        rotation={[0, -Math.PI / 2, 0]}
        intensity={0.3}
        color="#FFECDA"
        castShadow
      />

      <directionalLight 
        position={[0, 1, -10]}
        intensity={0.3}
        color="#FFECDA"
        castShadow
      />

      <pointLight 
        position={[-3.3, 1.5, 21.1]}
        intensity={3.0}
        color="#E1ccff"
        castShadow
        distance={20}
        decay={2}
      />

      <directionalLight
        position={[3, 1.5, 21.1]}
        intensity={0.3}
        color="#FFECDA"
        castShadow
      />

      <ambientLight intensity={0.3} />
    </>
  )
}
