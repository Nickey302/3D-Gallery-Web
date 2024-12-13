'use client'

import { useGLTF, useTexture } from '@react-three/drei'
import { useState, useEffect, useMemo, useCallback, Suspense } from 'react'
import { supabase } from '@/lib/supabase'
import * as THREE from 'three'
import { useUploadStore } from '@/stores/uploadStore'
import { ArtworkInfo } from './artwork/ArtworkInfo'
import { useFrame, useThree } from '@react-three/fiber'

export function Artwork2d() {
  const { nodes, materials } = useGLTF('/models/ModernArtGalleryandPhotoStudioNIGHT.glb')
  const [artworks, setArtworks] = useState([])
  const [hoveredFrame, setHoveredFrame] = useState(null)
  const [showArtworkInfo, setShowArtworkInfo] = useState(false)
  const { camera } = useThree()
  const { openModal } = useUploadStore()

  useEffect(() => {
    async function fetchArtworks() {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .eq('is_displayed', true)
      
      if (error) {
        console.error('Error fetching artworks:', error)
        return
      }
      setArtworks(data)
    }
    fetchArtworks()
  }, [])

  const textureUrls = useMemo(() => {
    return artworks
      .filter(artwork => artwork?.file_url)
      .map(artwork => artwork.file_url)
  }, [artworks])

  const textures = useTexture(textureUrls)

  const createMaterial = useCallback((texture) => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
      texture.minFilter = texture.magFilter = THREE.LinearFilter
      texture.colorSpace = THREE.SRGBColorSpace
    //   texture.flipY = false
    }

    return new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    //   transparent: true
    })
  }, [])

  const planeGeometry = useMemo(() => new THREE.PlaneGeometry(1, 1), [])

  // 디버깅용 회전값과 normal 벡터 방향 추가
  const debugFrameSettings = {
    'SHC_Modern_Procedural_Art218': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1280': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1281': { rotation: [0, 0, 0], normal: [0, 0, 1] },
    'SHC_Modern_Procedural_Art1282': { rotation: [0, 0, 0], normal: [0, 0, 1] },
    'SHC_Modern_Procedural_Art1283': { rotation: [0, 0, 0], normal: [0, 0, -1.5] },
    'SHC_Modern_Procedural_Art1284': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1285': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1286': { rotation: [0, 0, 0], normal: [0, 0, 2] },
    'SHC_Modern_Procedural_Art1287': { rotation: [0, 0, 0], normal: [0, 0, 2] },
    'SHC_Modern_Procedural_Art1288': { rotation: [0, 0, 0], normal: [0, 0, 2] },
    'SHC_Modern_Procedural_Art1289': { rotation: [0, 0, 0], normal: [0, 0, -2] },
    'SHC_Modern_Procedural_Art1290': { rotation: [0, 0, 0], normal: [0, 0, -2] },
    'SHC_Modern_Procedural_Art1291': { rotation: [0, 0, 0], normal: [0, 0, -2] },
    'SHC_Modern_Procedural_Art1292': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1293': { rotation: [0, 0, 0], normal: [0, 0, 1.8] },
    'SHC_Modern_Procedural_Art1294': { rotation: [0, 0, 0], normal: [0, 0, 1.8] },
    'SHC_Modern_Procedural_Art1295': { rotation: [0, 0, 0], normal: [0, 0, 1.8] },
    'SHC_Modern_Procedural_Art1296': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1297': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1298': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1299': { rotation: [0, 0, 0], normal: [0, 0, 1.8] },
    'SHC_Modern_Procedural_Art1300': { rotation: [0, 0, 0], normal: [0, 0, 1.8] },
    'SHC_Modern_Procedural_Art1301': { rotation: [0, 0, 0], normal: [0, 0, -1.8] },
    'SHC_Modern_Procedural_Art1302': { rotation: [0, 0, 0], normal: [0, 0, -1.8] },
    'SHC_Modern_Procedural_Art1303': { rotation: [0, 0, 0], normal: [0, 0, -3] },
    'SHC_Modern_Procedural_Art1304': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1305': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1306': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1307': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1308': { rotation: [0, 0, 0], normal: [0, 0, -1.2] },
    'SHC_Modern_Procedural_Art1309': { rotation: [0, 0, 0], normal: [0, 0, -1.2] },
    'SHC_Modern_Procedural_Art1310': { rotation: [0, 0, 0], normal: [0, 0, 1.5] },
    'SHC_Modern_Procedural_Art1311': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1312': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1313': { rotation: [0, 0, 0], normal: [0, 0, -1.5] },
    'SHC_Modern_Procedural_Art1314': { rotation: [0, 0, 0], normal: [0, 0, -1.5] },
    'SHC_Modern_Procedural_Art1315': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1316': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1317': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1318': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1319': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1320': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1321': { rotation: [0, Math.PI / 2, 0], normal: [2, 0, 0] },
    'SHC_Modern_Procedural_Art1322': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1323': { rotation: [0, Math.PI / 2, 0], normal: [-1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1324': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1325': { rotation: [0, Math.PI / 2, 0], normal: [1.5, 0, 0] },
    'SHC_Modern_Procedural_Art1326': { rotation: [0, 0, 0], normal: [0, 0, -2] },
    'SHC_Modern_Procedural_Art1327': { rotation: [0, 0, 0], normal: [0, 0, 1.5] },
    'SHC_Modern_Procedural_Art1328': { rotation: [0, 0, 0], normal: [0, 0, 1.5] },
    'SHC_Modern_Procedural_Art1329': { rotation: [0, 0, 0], normal: [0, 0, 1.5] },
    'SHC_Modern_Procedural_Art1330': { rotation: [0, 0, 0], normal: [0, 0, 1.5] },
    'SHC_Modern_Procedural_Art1331': { rotation: [0, 0, 0], normal: [0, 0, -2] },
    'SHC_Modern_Procedural_Art1332': { rotation: [0, 0, 0], normal: [0, 0, -2] }
  }
  
  // 레이캐스터를 사용하여 프레임과의 거리 확인
  useFrame(() => {
    if (hoveredFrame) {
      // Gallery의 position을 고려한 실제 프레임 위치 계산
      const galleryOffset = new THREE.Vector3(-50, -20.5, 50)
      const absoluteFramePosition = hoveredFrame.position.clone().add(galleryOffset)
      
      // 카메라와 프레임 사이의 실제 거리 계산
      const distance = camera.position.distanceTo(absoluteFramePosition)
      
      // 거리가 임계값보다 작으면 상호작용 활성화
      if (distance < 3) { // 임계값 조정 가능
        const artwork = artworks[hoveredFrame.frameIndex]
        console.log('Artwork at frame:', artwork) // 작품 데이터 디버깅
        
        if (artwork) {
          setShowArtworkInfo(true)
        } else {
          openModal(hoveredFrame.frameIndex)
        }
      } else {
        setShowArtworkInfo(false)
      }
    }
  })

  return (
    <Suspense fallback={null}>
      <group>
        {Object.entries(nodes).map(([key, node]) => {
          if (key.includes('SHC_Modern_Procedural_Art')) {
            const frameIndex = artworks.findIndex((_, index) => {
              if (index === 0) return key === 'SHC_Modern_Procedural_Art218'
              return key === `SHC_Modern_Procedural_Art${1280 + index}`
            })
            
            const texture = textures[frameIndex]
            const frameSettings = debugFrameSettings[key] || { rotation: [0, 0, 0], normal: [0, 0, 1] }

            // 프레임보다 살짝 앞에 위치하도록 조정
            const planePosition = new THREE.Vector3().copy(node.position)
            
            // 설정된 normal 벡터 방향으로 이동
            const normal = new THREE.Vector3(...frameSettings.normal)
            planePosition.add(normal.multiplyScalar(0.025))

            // 프레임 크기 계산을 위한 임시 박스
            const frameSize = new THREE.Box3().setFromObject(node)
            let width, height

            // 측면을 바라보는 프레임인 경우 (x축 방향 normal)
            if (Math.abs(frameSettings.normal[0]) >= 0.999) {
              // z와 y 크기를 사용
              width = frameSize.max.z - frameSize.min.z
              height = frameSize.max.y - frameSize.min.y
            } else {
              // 정면이나 후면을 바라보는 프레임
              width = frameSize.max.x - frameSize.min.x
              height = frameSize.max.y - frameSize.min.y
            }

            const artwork = artworks[frameIndex]
            
            return (
              <group 
                key={key}
                onClick={(e) => { // onClick 이벤트 추가
                  e.stopPropagation()
                  setHoveredFrame({ position: node.position, frameIndex })
                }}
                onPointerEnter={(e) => {
                  e.stopPropagation()
                  setHoveredFrame({ position: node.position, frameIndex })
                }}
                onPointerLeave={(e) => {
                  e.stopPropagation()
                  setHoveredFrame(null)
                  setShowArtworkInfo(false)
                }}
              >
                {/* 원본 프레임 메시 */}
                <mesh
                  geometry={node.geometry}
                  material={node.material}
                  position={node.position}
                  rotation={node.rotation}
                  scale={node.scale}
                />
                {/* DB 텍스처가 있는 경우 해당 텍스처로 Plane 추가 */}
                {texture && (
                  <mesh
                    geometry={planeGeometry}
                    material={createMaterial(texture)}
                    position={planePosition}
                    rotation={new THREE.Euler(...frameSettings.rotation)}
                    scale={[width, height, 1]}
                  />
                )}
              </group>
            )
          }
          return null
        })}
      </group>
      {/* UI 컴포넌트들을 group 밖으로 이동 */}
      {hoveredFrame && (
        <ArtworkInfo 
          artwork={artworks[hoveredFrame.frameIndex]}
          isOpen={showArtworkInfo}
          onClose={() => {
            setShowArtworkInfo(false)
            setHoveredFrame(null)
          }}
        />
      )}
    </Suspense>
  )
}

useGLTF.preload('/models/ModernArtGalleryandPhotoStudioNIGHT.glb')