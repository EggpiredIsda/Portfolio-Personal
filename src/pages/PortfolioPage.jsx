import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import AboutSection from '../components/Portfolio/AboutSection'
import LessonsGrid from '../components/Portfolio/LessonsGrid'
import ContactSection from '../components/Portfolio/ContactSection'
import styles from './PortfolioPage.module.css'

function PortfolioPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.portfolioPage}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className={styles.backButton}
            title="Return to Landing Page"
          >
            ← Back
          </button>
          <h1>Portfolio</h1>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* About Section */}
        <AboutSection />

        {/* Lessons Grid */}
        <LessonsGrid />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © 2025 Jericho B. Quitoras. All rights reserved.
          </p>
          <p className={styles.theme}>
            Made with 💖 and ✨ magical girl aesthetics
          </p>
        </motion.div>
      </footer>
    </div>
  )
}

export default PortfolioPage
