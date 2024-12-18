'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Controller() {
  const { camera } = useThree()
  const velocity = useRef({ x: 0, y: 0, z: 0 })
  const speed = 0.1
  const jumpSpeed = 0.15
  const gravity = 0.01
  const isJumping = useRef(false)

  // 카메라 이동 제한 설정
  const getBoundaries = (position) => {
    // 기본 경계값
    let minX = -8
    let maxX = 5
    const minZ = -20
    let maxZ = 22.5

    // Z 위치에 따른 X 경계값 조정 (기역자 형태)
    if (position.z < -6) {  // z축이 -5를 넘어가면
      minX = -22.5  // x축의 왼쪽 경계를 -22.5로 제한
      maxX = 5  // x축의 오른쪽 경계는 그대로 5
      
      // x축이 -8과 -22.5 사이에 있으면 z축의 최대값을 -5로 제한
      if (position.x < -8 && position.x > -22.5) {
        maxZ = -7
      }
    }

    return { minX, maxX, minZ, maxZ }
  }

  // 위치 제한 적용 함수
  const clampPosition = (position) => {
    const boundaries = getBoundaries(position)
    
    return {
      x: Math.max(boundaries.minX, Math.min(boundaries.maxX, position.x)),
      y: position.y,
      z: Math.max(boundaries.minZ, Math.min(boundaries.maxZ, position.z))
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w':
        case 'ㅈ':
        case 'ArrowUp':
          velocity.current.z = -1
          break
        case 's':
        case 'ㄴ':
        case 'ArrowDown':
          velocity.current.z = 1
          break
        case 'a':
        case 'ㅁ':
        case 'ArrowLeft':
          velocity.current.x = -1
          break
        case 'd':
        case 'ㅇ':
        case 'ArrowRight':
          velocity.current.x = 1
          break
        case ' ':
          if (!isJumping.current) {
            velocity.current.y = jumpSpeed
            isJumping.current = true
          }
          break
      }
    }

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'w':
        case 'ㅈ':
        case 'ArrowUp':
        case 's':
        case 'ㄴ':
        case 'ArrowDown':
          velocity.current.z = 0
          break
        case 'a':
        case 'ㅁ':
        case 'ArrowLeft':
        case 'd':
        case 'ㅇ':
        case 'ArrowRight':
          velocity.current.x = 0
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [camera])

  useFrame(() => {
    // 카메라의 방향 벡터 계산
    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)
    direction.y = 0
    direction.normalize()

    const rightVector = new THREE.Vector3()
    rightVector.crossVectors(direction, camera.up)
    rightVector.normalize()

    // 이동 방향 계산
    const moveDirection = new THREE.Vector3()
    moveDirection.addScaledVector(direction, -velocity.current.z)
    moveDirection.addScaledVector(rightVector, velocity.current.x)
    moveDirection.normalize()

    // 카력 적용
    if (isJumping.current) {
      velocity.current.y -= gravity
    }

    // 새로운 위치 계산
    const newPosition = camera.position.clone()
    newPosition.addScaledVector(moveDirection, speed)
    newPosition.y += velocity.current.y

    // 경계 제한 적용
    const clampedPosition = clampPosition(newPosition)
    
    // 카메라 위치 업데이트
    camera.position.set(clampedPosition.x, clampedPosition.y, clampedPosition.z)

    // 바닥에 닿으면 점프 상태 해제
    if (camera.position.y <= 0) {
      camera.position.y = 0
      velocity.current.y = 0
      isJumping.current = false
    }
  })

  return null
} 