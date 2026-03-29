import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import styles from './CircularGallery.module.css'

// Gallery data with character images
const galleryItems = [
  {
    id: 1,
    image: '/images/madokami-full.png',
    text: 'Ultimate Madoka',
    description: 'The Law of Cycles',
    character: 'Madoka Kaname'
  },
  {
    id: 2,
    image: '/images/homura-witch.png',
    text: 'Homulilly',
    description: 'Witch Form',
    character: 'Homura Akemi'
  },
  {
    id: 3,
    image: '/images/mami-action.png',
    text: 'Mami Tomoe',
    description: 'Veteran Magical Girl',
    character: 'Mami Tomoe'
  },
  {
    id: 4,
    image: '/images/sayaka-peace.png',
    text: 'Sayaka Miki',
    description: 'Knight of Justice',
    character: 'Sayaka Miki'
  },
  {
    id: 5,
    image: '/images/kyoko-spear.png',
    text: 'Kyoko Sakura',
    description: 'Spear of Rebellion',
    character: 'Kyoko Sakura'
  },
  {
    id: 6,
    image: '/images/madoka-full.png',
    text: 'Madoka',
    description: 'Hope Incarnate',
    character: 'Madoka Kaname'
  }
]

// Individual gallery item component
function GalleryItemMesh({
  item,
  position,
  rotation,
  scale,
  index,
  totalItems,
  scrollValue
}) {
  const meshRef = useRef()
  const texture = useTexture(item.image)
  const distortionAmount = useRef(0)

  // Apply distortion based on scroll
  useFrame(() => {
    if (meshRef.current) {
      // Calculate position in carousel
      const angle = (index / totalItems) * Math.PI * 2
      const targetX = Math.cos(angle) * 4
      const targetY = Math.sin(angle) * 2.5

      // Smooth movement
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1

      // Rotation effect
      meshRef.current.rotation.z += 0.002
    }
  })

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Image plane with distortion */}
      <mesh rotation={rotation}>
        <planeGeometry args={[2.5, 3.5, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.2}
          roughness={0.8}
          emissive={0xff0088}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Glow layer */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[2.6, 3.6]} />
        <meshBasicMaterial
          emissive={0xf7a3ff}
          emissiveIntensity={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

// 3D Scene component
function GalleryScene({ scrollValue }) {
  const { camera } = useThree()
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      // Rotate based on scroll
      groupRef.current.rotation.y = scrollValue.current * 0.01
      groupRef.current.rotation.x = Math.sin(scrollValue.current * 0.005) * 0.1
    }

    // Camera movement
    camera.position.z = 5 + Math.sin(scrollValue.current * 0.005) * 0.5
  })

  return (
    <group ref={groupRef}>
      {galleryItems.map((item, index) => (
        <GalleryItemMesh
          key={item.id}
          item={item}
          position={[
            Math.cos((index / galleryItems.length) * Math.PI * 2) * 3.5,
            Math.sin((index / galleryItems.length) * Math.PI * 2) * 2,
            0
          ]}
          rotation={[0, 0, 0]}
          scale={1}
          index={index}
          totalItems={galleryItems.length}
          scrollValue={scrollValue}
        />
      ))}

      {/* Center light */}
      <pointLight position={[0, 0, 5]} intensity={1.5} color={0xff0088} />
      <pointLight position={[0, 0, -2]} intensity={0.8} color={0xa300a3} />
      <ambientLight intensity={0.6} />
    </group>
  )
}

// Main CircularGallery component
function CircularGallery({
  bend = 1.5,
  textColor = '#ffb3d9',
  borderRadius = 0.15,
  scrollSpeed = 1,
  scrollEase = 'easeOut'
}) {
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const [scrollValue, setScrollValue] = useState(0)
  const scrollValueRef = useRef(0)
  const containerRef = useRef(null)
  const velocityDecay = 0.95

  // Handle scroll with momentum
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()

      // Update velocity
      const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed
      setScrollVelocity((prev) => prev + delta)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    // Apply velocity decay
    const velocityInterval = setInterval(() => {
      setScrollVelocity((prev) => {
        const newVelocity = prev * velocityDecay
        if (Math.abs(newVelocity) < 0.1) return 0
        return newVelocity
      })

      setScrollValue((prev) => {
        scrollValueRef.current = prev + scrollVelocity
        return scrollValueRef.current
      })
    }, 16)

    return () => {
      clearInterval(velocityInterval)
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [scrollSpeed])

  return (
    <div className={styles.galleryContainer} ref={containerRef}>
      <motion.div
        className={styles.galleryContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* 3D Canvas */}
        <Canvas
          className={styles.canvas}
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <GalleryScene scrollValue={scrollValueRef} />
        </Canvas>

        {/* Gallery info */}
        <div className={styles.galleryInfo}>
          <h2 className={styles.galleryTitle}>Character Showcase</h2>
          <p className={styles.gallerySubtitle}>
            Scroll to explore the magical girls of Puella Magi Madoka Magica
          </p>
        </div>

        {/* Character items display */}
        <div className={styles.itemsList}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.itemCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.character} className={styles.thumbnail} />
              <h3 className={styles.itemName}>{item.text}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CircularGallery
