'use client'

import { useGLTF, useTexture, Plane } from '@react-three/drei'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import * as THREE from 'three'

export function Artwork2d() {
  const { nodes, materials } = useGLTF('/models/ModernArtGalleryandPhotoStudioNIGHT.glb')
  const [artworks, setArtworks] = useState([])

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
      console.log('Fetched artworks:', data)
      setArtworks(data)
    }
    fetchArtworks()
  }, [])

  const textureUrls = useMemo(() => {
    const urls = artworks
      .filter(artwork => artwork?.file_url)
      .map(artwork => artwork.file_url)
    console.log('Texture URLs:', urls)
    return urls
  }, [artworks])

  const texture = useTexture('/image/cordive.png')
  console.log('Loaded texture:', texture)

  const createMaterial = useCallback((texture) => {
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    })
    console.log('Created material:', material)
    return material
  }, [])

  return (
    <group>
      <Plane 
        args={[5, 5]} 
        position={[0, 5, 0]}
        material={createMaterial(texture)}
      />

      {Object.entries(nodes).map(([key, node], index) => {
        if (key.startsWith('SHC_Modern_Procedural_Art')) {
          console.log(`Rendering mesh ${key}`)
          return (
            <mesh
              key={key}
              geometry={node.geometry}
              material={createMaterial(texture)}
              position={node.position}
              scale={1.873}
            />
          )
        }
        return null
      })}
    </group>
  )
}

useGLTF.preload('/models/ModernArtGalleryandPhotoStudioNIGHT.glb')