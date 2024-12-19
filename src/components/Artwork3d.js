'use client'

import { useState, useEffect, useMemo } from 'react'
import { supabase } from '@/lib/supabase'
import { useUpload3dStore } from '@/stores/upload3dStore'
import { ArtworkInfo3d } from './artwork/ArtworkInfo3d'
import { Upload3dArtworkModal } from './artwork/Upload3dArtworkModal'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { usePopupCooldownStore } from '@/stores/popupCooldownStore'
import { useControlsStore } from '@/stores/controlsStore'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'

export function Artwork3d() {
  const [artworks, setArtworks] = useState([])
  const [hoveredPedestal, setHoveredPedestal] = useState(null)
  const [showArtworkInfo, setShowArtworkInfo] = useState(false)
  const [currentArtwork, setCurrentArtwork] = useState(null)
  const [debugInfo, setDebugInfo] = useState({ distance: 0, position: [0, 0, 0] })
  const { camera } = useThree()
  const { openModal, isOpen, closeModal, selectedPedestalIndex } = useUpload3dStore()
  const { isOnCooldown } = usePopupCooldownStore()
  const { disableControls, enableControls } = useControlsStore()

  // Gallery의 bench 위치를 기반으로 설정
  const pedestalPositions = useMemo(() => [
    { position: [44.036, 19.457, -64.051], rotation: [0, 0, 0], index: 0 },
    { position: [52.787, 19.457, -66.608], rotation: [0, 1.571, 0], index: 1 },
    { position: [35.076, 19.457, -63.701], rotation: [0, 1.571, 0], index: 2 },
    { position: [49.925, 19.457, -57.507], rotation: [-Math.PI, 0, -Math.PI], index: 3 },
    { position: [51.455, 19.457, -40.801], rotation: [-Math.PI, 0, -Math.PI], index: 4 },
    { position: [45.456, 19.457, -40.801], rotation: [-Math.PI, 0, -Math.PI], index: 5 },
    { position: [46.631, 19.457, -35.022], rotation: [-Math.PI, 0, -Math.PI], index: 6 },
    { position: [46.631, 19.457, -28.886], rotation: [-Math.PI, 0, -Math.PI], index: 7 },
    { position: [48.455, 19.502, -49.681], rotation: [-Math.PI, 0, -Math.PI], index: 8 },
    { position: [52.107, 19.502, -46.375], rotation: [-Math.PI, 0, -Math.PI], index: 9 },
    { position: [52.107, 19.502, -52.987], rotation: [-Math.PI, 0, -Math.PI], index: 10 },
    { position: [44.804, 19.502, -46.375], rotation: [-Math.PI, 0, -Math.PI], index: 11 },
    { position: [44.804, 19.502, -52.987], rotation: [-Math.PI, 0, -Math.PI], index: 12 }
  ], [])

  // Gallery의 position 프셋 정의
  const GALLERY_OFFSET = useMemo(() => new THREE.Vector3(-50, -20.5, 50), [])

  useEffect(() => {
    async function fetchArtworks() {
      const { data, error } = await supabase
        .from('artworks_3d')
        .select('*')
        .eq('is_displayed', true)
      
      if (error) {
        console.error('Error fetching artworks:', error)
        return
      }
      
      setArtworks(data || [])
    }
    fetchArtworks()
  }, [])

  useFrame(() => {
    if (hoveredPedestal && !isOnCooldown) {
      const position = pedestalPositions.find(p => p.index === hoveredPedestal.index)?.position || [0, 0, 0]
      const pedestalWorldPos = new THREE.Vector3(...position).add(GALLERY_OFFSET)
      const distance = camera.position.distanceTo(pedestalWorldPos)
      
      setDebugInfo({
        distance: distance.toFixed(2),
        cameraPos: [
          camera.position.x.toFixed(2),
          camera.position.y.toFixed(2),
          camera.position.z.toFixed(2)
        ],
        pedestalPos: [
          pedestalWorldPos.x.toFixed(2),
          pedestalWorldPos.y.toFixed(2),
          pedestalWorldPos.z.toFixed(2)
        ],
        originalPos: [
          position[0].toFixed(2),
          position[1].toFixed(2),
          position[2].toFixed(2)
        ]
      })
      
      if (distance < 3) {
        const artwork = artworks.find(a => a.pedestal_index === hoveredPedestal.index)
        if (!artwork) {
          openModal(hoveredPedestal.index)
          setHoveredPedestal(null)
        }
      }
    }
  })

  return (
    <>
      {/* 디버그 UI에 원본 위치 정보 추가 */}
      {/* <Html position={[0, 2, 0]} center>
        <div style={{ 
          background: 'rgba(0,0,0,0.7)', 
          color: 'white', 
          padding: '10px',
          borderRadius: '5px',
          display: hoveredPedestal ? 'block' : 'none'
        }}>
          <div>Distance: {debugInfo.distance}</div>
          <div>Camera: [{debugInfo.cameraPos?.join(', ')}]</div>
          <div>World Pos: [{debugInfo.pedestalPos?.join(', ')}]</div>
          <div>Original Pos: [{debugInfo.originalPos?.join(', ')}]</div>
        </div>
      </Html> */}

      <group>
        {pedestalPositions.map(({ position, rotation, index }) => {
          const artwork = artworks.find(a => a.pedestal_index === index)
          
          return (
            <group 
              key={index}
              position={position}
              rotation={rotation}
              onPointerOver={() => setHoveredPedestal({ index })}
              onPointerOut={() => setHoveredPedestal(null)}
            >
              {/* 디버그용 표시 sphere */}
              <mesh visible={hoveredPedestal?.index === index}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="red" transparent opacity={0} />
              </mesh>
              
              {artwork && (
                <primitive 
                  object={useLoader(GLTFLoader, artwork.file_url).scene}
                  position={[artwork.position_x, artwork.position_y, artwork.position_z]}
                  scale={[artwork.scale_x, artwork.scale_y, artwork.scale_z]}
                  rotation={[artwork.rotation_x, artwork.rotation_y, artwork.rotation_z]}
                />
              )}
            </group>
          )
        })}
      </group>

      {showArtworkInfo && currentArtwork && (
        <ArtworkInfo3d 
          artwork={currentArtwork}
          isOpen={showArtworkInfo}
          onClose={() => {
            setShowArtworkInfo(false)
            setCurrentArtwork(null)
            setHoveredPedestal(null)
          }}
        />
      )}
    </>
  )
} 