import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

function LessonCard({ lesson, index }) {
  const navigate = useNavigate()

  return (
    <motion.div
      className={styles.lessonCard}
      onClick={() => navigate(`/portfolio/lessons/${lesson.id}`)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <img
        src="/images/symbol-lessons.jpg"
        alt={`${lesson.title} icon`}
        className={styles.cardIcon}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardNumber}>Lesson {lesson.id}</h3>
        <h2 className={styles.cardTitle}>{lesson.title}</h2>
        <p className={styles.cardDesc}>{lesson.description}</p>
      </div>
      <div className={styles.cardGlow} />
    </motion.div>
  )
}

export default LessonCard
