import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './PortfolioPage.module.css'

function PortfolioPage() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')

  // Check if we came from landing page transition
  useEffect(() => {
    const transitionActive = sessionStorage.getItem('madokamiTransition')
    if (transitionActive) {
      sessionStorage.removeItem('madokamiTransition')
    }
  }, [])

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
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Portfolio Content</h2>

          <div className={styles.comingSoon}>
            <div className={styles.gemIcon}>✨</div>
            <h3>Portfolio Content Coming Soon</h3>
            <p>
              This page is being migrated from vanilla HTML to React.
              The original content is still available in portfolio.html
            </p>

            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
            >
              Return to Landing Page
            </motion.button>
          </div>

          {/* Original Portfolio Content Reference */}
          <div className={styles.contentInfo}>
            <h4>Originally Included:</h4>
            <ul>
              <li>14 Computing Lessons with essays</li>
              <li>Lesson cards with magical hover effects</li>
              <li>About section with profile info</li>
              <li>Contact section with social links</li>
              <li>Sidebar navigation</li>
            </ul>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          © 2025 Jericho B. Quitoras. All rights reserved.
        </p>
        <p className={styles.theme}>
          Made with 💖 and ✨ magical girl aesthetics
        </p>
      </footer>
    </div>
  )
}

export default PortfolioPage
