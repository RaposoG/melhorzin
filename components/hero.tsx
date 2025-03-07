"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Linkedin } from "lucide-react"

interface HeroProps {
  name: string
  title: string
  photoUrl: string
}

export default function Hero({ name, title, photoUrl }: HeroProps) {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)

    // Configuração do canvas para efeito de partículas
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        } else {
          this.x = 0
          this.y = 0
        }
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function initParticles() {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      if (!ctx) return
      const maxDistance = 100

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx) return
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas para efeito de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${photoUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.7)",
        }}
      />

      {/* Overlay for better text visibility with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-slate-900/60 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-block"
        >
          <div className="text-xs md:text-sm tracking-widest text-blue-200 uppercase font-medium mb-2">
            {t("welcome")}
          </div>
          <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto"></div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl text-blue-100 font-light">
            <span className="text-blue-300">&lt;</span> {title} <span className="text-blue-300">/&gt;</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full font-medium transition-all"
          >
            {t("viewWork")}
          </a>

          <a
            href="https://github.com/vinirossado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            <Linkedin size={18} />
            <span>{t("checkoutMyLinkedIn")}</span>
          </a>

          {/* <a
            href="https://github.com/vinirossado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-all shadow-lg"
          >
            <Github size={18} />
            <span>{t("seeMoreGithub")}</span>
          </a> */}
        </motion.div>
      </div>

      {/* Tech keywords floating */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {["Bicep", "Azure", "SqlServer", "Ionic", "StencilJS", "Angular", ".Net", "TypeScript", "Go", "MongoDB", "Git", "SwiftUI"].map(
          (tech, index) => (
            <motion.div
              key={tech}
              className="absolute text-blue-200/30 font-mono text-sm md:text-base"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
            >
              {tech}
            </motion.div>
          ),
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

