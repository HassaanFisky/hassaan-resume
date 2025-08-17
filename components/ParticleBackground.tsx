'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // TypeScript guards to ensure canvas and ctx are not null
    const context = ctx!
    const canvasElement = canvas!

    canvasElement.width = window.innerWidth
    canvasElement.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvasElement.width,
        y: Math.random() * canvasElement.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    function animate() {
      context.clearRect(0, 0, canvasElement.width, canvasElement.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvasElement.width) particle.x = 0
        if (particle.x < 0) particle.x = canvasElement.width
        if (particle.y > canvasElement.height) particle.y = 0
        if (particle.y < 0) particle.y = canvasElement.height

        // Draw particle
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`
        context.fill()

        // Draw connections
        particles.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          )

          if (distance < 100) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(otherParticle.x, otherParticle.y)
            context.strokeStyle = `rgba(14, 165, 233, ${0.1 * (1 - distance / 100)})`
            context.lineWidth = 1
            context.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}
