import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './SoulGemButton.module.css'

function SoulGemButton({ onClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className={styles.soulGemButtonContainer}>
      <motion.button
        {...props}
        className={styles.soulGemButton}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.15,
          boxShadow: '0 0 30px #ff0088, 0 0 60px #f7a3ff'
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Glass background layer */}
        <motion.span
          className={styles.glassBack}
          animate={isHovered ? { rotate: 25, y: -8, x: -8 } : { rotate: 15, y: 0, x: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glass front layer with icon */}
        <motion.span
          className={styles.glassFront}
          animate={isHovered ? { z: 20, y: -4 } : { z: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/images/soul-gem.png"
            alt="Soul Gem"
            className={styles.gemIcon}
          />
        </motion.span>

        {/* Label with glow */}
        <motion.span
          className={styles.label}
          animate={isHovered ? { opacity: 1, y: '20%' } : { opacity: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Enter Portfolio
        </motion.span>

        {/* Hover glow effect */}
        {isHovered && (
          <motion.div
            className={styles.glowEffect}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </div>
  )
}

export default SoulGemButton
