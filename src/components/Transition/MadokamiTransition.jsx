import React, { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import styles from './MadokamiTransition.module.css'

function MadokamiTransition({ onComplete }) {
  // Wrap onComplete in useCallback to maintain stable reference
  const handleTransitionComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  useEffect(() => {
    // Auto-complete transition after 3 seconds
    const timer = setTimeout(() => {
      handleTransitionComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [handleTransitionComplete])

  return (
    <motion.div
      className={styles.transitionOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background overlay */}
      <motion.div
        className={styles.backgroundGradient}
        animate={{ scale: 3 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      />

      {/* Madokami image */}
      <motion.img
        src="/images/madokami-full.png"
        alt="Ultimate Madoka - Madokami"
        className={styles.madokamiImage}
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 100
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.34, 1.56, 0.64, 1]
        }}
      />

      {/* Bobbing animation */}
      <motion.div
        className={styles.bobContainer}
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 1.5,
          delay: 1.7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Particle burst effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.particle}
          initial={{
            x: 0,
            y: 0,
            opacity: 1
          }}
          animate={{
            x: Math.cos((i / 20) * Math.PI * 2) * (100 + Math.random() * 50),
            y: Math.sin((i / 20) * Math.PI * 2) * (100 + Math.random() * 50),
            opacity: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
        />
      ))}
    </motion.div>
  )
}

export default MadokamiTransition
