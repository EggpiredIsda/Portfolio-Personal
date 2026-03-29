import React from 'react'
import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

function AboutSection() {
  return (
    <motion.section
      className={styles.aboutSection}
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
        <h2 className={styles.sectionTitle}>About Me</h2>
      </motion.div>

      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutText}>
          <p>
            Hello, I'm Jericho B. Quitoras, a passionate IT student dedicated to exploring the transformative power of computing technology. My academic journey has brought me through diverse areas of computer science—from foundational concepts like data structures and algorithms to cutting-edge topics including artificial intelligence and cybersecurity.
          </p>
          <p>
            I am deeply interested in how technology shapes our world and the ethical considerations that come with it. Throughout my studies, I've developed skills in web development, database design, networking, and system security. I believe in continuous learning and staying updated with industry trends to contribute meaningfully to the field of Information Technology.
          </p>
          <p>
            This portfolio showcases my understanding of computing fundamentals through 14 comprehensive lessons that cover essential IT concepts. Beyond academics, I'm committed to applying this knowledge practically—whether through personal projects, collaborative work, or emerging technology research. My goal is to become an IT professional who not only builds innovative solutions but also promotes responsible and ethical technology practices.
          </p>
        </div>

        <div className={styles.skillsHighlight}>
          <h3>Key Skills & Interests</h3>
          <ul className={styles.skillsList}>
            <li>Web Development (HTML, CSS, React)</li>
            <li>Database Design & SQL</li>
            <li>Network Architecture & Security</li>
            <li>Algorithm Design & Data Structures</li>
            <li>AI & Machine Learning Foundations</li>
            <li>IT Ethics & Data Privacy</li>
            <li>System Analysis & Design</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection
