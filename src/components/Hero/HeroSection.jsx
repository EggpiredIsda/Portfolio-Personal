import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SoulGemButton from './SoulGemButton'
import MagicCanvas from './MagicCanvas'
import MadokamiTransition from '../Transition/MadokamiTransition'
import styles from './HeroSection.module.css'

function HeroSection() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [showTransition, setShowTransition] = useState(false)
  const navigate = useNavigate()
  const [auraGlow, setAuraGlow] = useState(null)

  // Handle Madokami transition completion
  const handleTransitionComplete = () => {
    navigate('/portfolio')
  }

  // Magical aura effect on hover
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      if (!auraGlow) {
        const aura = document.createElement('div')
        aura.className = styles.aura
        container.appendChild(aura)
        setAuraGlow(aura)
      }

      if (auraGlow) {
        auraGlow.style.left = `${e.clientX - 200}px`
        auraGlow.style.top = `${e.clientY - 200}px`
        auraGlow.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (auraGlow) {
        auraGlow.style.opacity = '0'
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [auraGlow])

  return (
    <>
      {showTransition && (
        <MadokamiTransition onComplete={handleTransitionComplete} />
      )}

      <section ref={containerRef} className={styles.heroSection}>
        <div className={styles.starfield} id="starfield"></div>
        <MagicCanvas canvasRef={canvasRef} />

        <div className={styles.heroTitleTopLeft}>
          <motion.h1
            className={styles.magicalTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className={styles.glitchText} data-text="Jericho B. Quitoras">
              Jericho B. Quitoras
            </span>
          </motion.h1>
          <motion.h2
            className={styles.magicalSubtitle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className={styles.shimmerText}>Portfolio Website</span>
          </motion.h2>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.soulGemContainer}>
            <SoulGemButton
              onClick={() => setShowTransition(true)}
              aria-label="Enter Portfolio"
            />
            <div className={styles.soulGemGlow}></div>
          </div>
        </div>

        <motion.div
          className={styles.japaneseQuote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          「僕と契約して、魔法少女になってよ!」
          <br />
          (Boku to keiyaku shite, mahō shōjo ni natte yo!)
          <br />
          — Kyubey
        </motion.div>
      </section>
    </>
  )
}

export default HeroSection
