import React from 'react'
import { motion } from 'framer-motion'
import { lessons } from '../../data/lessons.js'
import LessonCard from './LessonCard'
import styles from './Portfolio.module.css'

function LessonsGrid() {
  return (
    <motion.section
      className={styles.lessonsSection}
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
        <h2 className={styles.sectionTitle}>Intro to Computing - Lesson Summaries</h2>
        <p className={styles.sectionSubtitle}>
          Explore 14 comprehensive computing lessons covering foundations and advanced topics
        </p>
      </motion.div>

      <div className={styles.lessonsGrid}>
        {lessons.map((lesson, index) => (
          <LessonCard key={lesson.id} lesson={lesson} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default LessonsGrid
