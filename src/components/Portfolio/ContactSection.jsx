import React from 'react'
import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

function ContactSection() {
  return (
    <motion.section
      className={styles.contactSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Contact & Location</h2>
        <p className={styles.sectionSubtitle}>Get in touch or find me online</p>
      </motion.div>

      <motion.div
        className={styles.contactGrid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Email */}
        <motion.div
          className={styles.contactCard}
          whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255, 0, 136, 0.4)' }}
        >
          <div className={styles.contactIcon}>✉</div>
          <h3>Email</h3>
          <a href="mailto:jericho.quitoras@example.com" className={styles.contactLink}>
            jericho.quitoras@example.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          className={styles.contactCard}
          whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255, 0, 136, 0.4)' }}
        >
          <div className={styles.contactIcon}>📱</div>
          <h3>Phone</h3>
          <a href="tel:+1234567890" className={styles.contactLink}>
            +1 (234) 567-890
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          className={styles.contactCard}
          whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255, 0, 136, 0.4)' }}
        >
          <div className={styles.contactIcon}>📍</div>
          <h3>Location</h3>
          <p className={styles.contactText}>
            Technology Hub University<br />
            San Francisco, CA
          </p>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className={styles.socialLinks}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3>Follow Me</h3>
        <div className={styles.socialGrid}>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            Twitter
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            Instagram
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default ContactSection
