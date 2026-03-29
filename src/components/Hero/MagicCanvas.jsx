import React, { useEffect, useRef } from 'react'

const colors = [
  'rgba(255, 0, 136, 0.9)',   // Pink
  'rgba(255, 179, 217, 0.9)', // Light pink
  'rgba(163, 0, 163, 0.9)',   // Purple
  'rgba(247, 163, 255, 0.9)'  // Lavender
]

class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.size = Math.random() * 5 + 1
    this.color = color
    this.velocity = {
      x: (Math.random() - 0.5) * 5.0,
      y: (Math.random() - 0.5) * 5.0
    }
    this.life = 150
  }

  update() {
    this.x += this.velocity.x
    this.y += this.velocity.y
    this.size *= 0.98
    this.life -= 1
    this.velocity.y -= 0.01
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.shadowBlur = this.size * 8
    ctx.shadowColor = this.color.replace(/0.9/g, '1')
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.shadowColor = 'transparent'
  }

  isDead() {
    return this.size < 0.2 || this.life < 0
  }
}

function MagicCanvas({ canvasRef }) {
  const ctxRef = useRef(null)
  const animationFrameIdRef = useRef(null)
  const particlesRef = useRef([])
  const isAnimatingRef = useRef(true)
  const mouseMoveTimeoutRef = useRef(null)
  const mouseMoveHandlerRef = useRef(null)

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.error('[MagicCanvas] Canvas ref is null')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.error('[MagicCanvas] Failed to get 2D context from canvas')
      return
    }

    ctxRef.current = ctx

    const initCanvas = () => {
      try {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      } catch (err) {
        console.error('[MagicCanvas] Error initializing canvas dimensions:', err)
      }
    }

    initCanvas()

    const animate = () => {
      try {
        if (!isAnimatingRef.current) {
          animationFrameIdRef.current = null
          return
        }

        animationFrameIdRef.current = requestAnimationFrame(animate)

        ctx.fillStyle = 'rgba(13, 0, 26, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          particlesRef.current[i].update()
          particlesRef.current[i].draw(ctx)

          if (particlesRef.current[i].isDead()) {
            particlesRef.current.splice(i, 1)
          }
        }
      } catch (err) {
        console.error('[MagicCanvas] Error in animation loop:', err)
      }
    }

    animate()

    // Mouse move handler
    mouseMoveHandlerRef.current = (event) => {
      try {
        // Clear previous timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current)
        }

        // Set new timeout
        mouseMoveTimeoutRef.current = setTimeout(() => {
          const particleCount = Math.floor(Math.random() * 4) + 5
          for (let i = 0; i < particleCount; i++) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            particlesRef.current.push(
              new Particle(event.clientX, event.clientY, randomColor)
            )
          }
        }, 16)
      } catch (err) {
        console.error('[MagicCanvas] Error in mouse move handler:', err)
      }
    }

    canvas.addEventListener('mousemove', mouseMoveHandlerRef.current)

    // Handle resize
    const handleResize = () => {
      try {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      } catch (err) {
        console.error('[MagicCanvas] Error handling resize:', err)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // Properly remove the event listener using the stored function reference
      if (mouseMoveHandlerRef.current) {
        canvas.removeEventListener('mousemove', mouseMoveHandlerRef.current)
      }
      // Clear any pending timeout
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current)
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      isAnimatingRef.current = false
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5
      }}
    />
  )
}

export default MagicCanvas
