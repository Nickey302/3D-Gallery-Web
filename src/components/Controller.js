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
    direction.y = 0 // y축 움직임 제거
    direction.normalize()

    // 카메라가 바라보는 방향의 수직 벡터 계산
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

    // 카메라 위치 업데이트
    camera.position.addScaledVector(moveDirection, speed)
    camera.position.y += velocity.current.y

    // 바닥에 닿으면 점프 상태 해제
    if (camera.position.y <= 0) {
      camera.position.y = 0
      velocity.current.y = 0
      isJumping.current = false
    }
  })

  return null
} 