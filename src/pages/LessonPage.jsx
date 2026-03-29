import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getLessonById, getAdjacentLessons } from '../data/lessons.js'
import styles from './LessonPage.module.css'

function LessonPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const lesson = useMemo(() => getLessonById(id), [id])
  const { previous, next } = useMemo(() => getAdjacentLessons(id), [id])

  if (!lesson) {
    return (
      <div className={styles.container}>
        <motion.div
          className={styles.notFound}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>Lesson Not Found</h1>
          <p>The lesson you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/portfolio')}>
            Return to Portfolio
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Navigation */}
      <button
        className={styles.backButton}
        onClick={() => navigate('/portfolio')}
        aria-label="Return to portfolio"
      >
        ← Back to Portfolio
      </button>

      {/* Lesson Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.lessonNumber}>{lesson.number}</div>
        <h1 className={styles.title}>{lesson.title}</h1>
        {lesson.subtitle && (
          <p className={styles.subtitle}>{lesson.subtitle}</p>
        )}
      </motion.div>

      {/* Main Content with Side Images */}
      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Left Image */}
        <img
          src={lesson.imageLeft}
          alt={`${lesson.title} character - left`}
          className={styles.sideImage}
          loading="lazy"
        />

        {/* Main Content */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />

        {/* Right Image */}
        <img
          src={lesson.imageRight}
          alt={`${lesson.title} character - right`}
          className={styles.sideImage}
          loading="lazy"
        />
      </motion.div>

      {/* Navigation Between Lessons */}
      <motion.div
        className={styles.navigation}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {previous && (
          <button
            className={styles.navButton}
            onClick={() => navigate(`/portfolio/lessons/${previous.id}`)}
            aria-label={`Go to previous lesson: ${previous.title}`}
          >
            ← {previous.title}
          </button>
        )}

        <button
          className={styles.navButton}
          onClick={() => navigate('/portfolio')}
        >
          All Lessons
        </button>

        {next && (
          <button
            className={styles.navButton}
            onClick={() => navigate(`/portfolio/lessons/${next.id}`)}
            aria-label={`Go to next lesson: ${next.title}`}
          >
            {next.title} →
          </button>
        )}
      </motion.div>
    </motion.div>
  )
}

export default LessonPage
