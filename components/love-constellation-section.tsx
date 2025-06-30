"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

interface StarPoint {
  id: number
  x: number
  y: number
  message: string
  connected: boolean
}

const constellationMessages = [
  "Constellations of stars\nMurals on city walls\nI don't see nobody but youuu",
  "I've got my eye on you",
  "We got that love, the crazy kind",
  "Baby, you're like lightning in a bottle\nI can't let you go now that I got it\nAnd all I need is to be struck\nBy your electric love",
  "Only you, my girl, only you, babe\nOnly you, darling, only you",
  "Cause my love is mine, all mine\nMy love mine, mine, mine",
  "We're beautiful like diamonds in the sky",
  "Birds of a feather, we should stick together",
  "Take me into your loving arms\nKiss me under the light of a thousand stars\nPlace your head on my beating heart\nI'm thinking out loud\nMaybe we found love right where we are",
  "'Cause you're a sky, you're a sky full of stars\nSuch a heavenly view\nYou're such a heavenly view",
]

export default function LoveConstellationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [stars, setStars] = useState<StarPoint[]>([])
  const [connections, setConnections] = useState<Array<[number, number]>>([])
  // const [selectedStar, setSelectedStar] = useState<number | null>(null)
  const [showMessage, setShowMessage] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  const handleCanvasClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (stars.length >= 10) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      const newStar: StarPoint = {
        id: Date.now(),
        x,
        y,
        message: constellationMessages[stars.length] || "Our love shines eternal ✨",
        connected: false,
      }

      setStars((prev) => [...prev, newStar])

      // Auto-connect stars to form constellation
      if (stars.length > 0) {
        const lastStarIndex = stars.length - 1
        setConnections((prev) => [...prev, [lastStarIndex, stars.length]])
      }

      // Show completion message when constellation is complete
      if (stars.length === 9) {
        setTimeout(() => setIsComplete(true), 1000)
      }
    },
    [stars],
  )

  const handleStarClick = (starId: number, message: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setShowMessage(message)
    setTimeout(() => {
      setShowMessage(null)
    }, 3000)
  }

  const resetConstellation = () => {
    setStars([])
    setConnections([])
    setIsComplete(false)
    setShowMessage(null)
  }

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Gentle gradient transition from lavender theme to night sky */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(230, 230, 250, 0.1) 0%, 
              rgba(176, 224, 230, 0.15) 20%,
              rgba(255, 182, 193, 0.1) 40%,
              rgba(30, 58, 138, 0.2) 70%,
              rgba(15, 23, 42, 0.3) 100%
            )
          `,
        }}
      >
        {/* Subtle floating elements that blend with the theme */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 10, -10, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 && <Heart className="w-6 h-6 text-blush fill-current" />}
            {i % 3 === 1 && <Star className="w-5 h-5 text-peach-puff fill-current" />}
            {i % 3 === 2 && <Sparkles className="w-5 h-5 text-powder-blue" />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - Keeping lavender theme colors */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold text-navy mb-6"
            style={{
              textShadow: "0 4px 20px rgba(44, 62, 80, 0.1)",
            }}
          >
            Our Love Constellation
          </motion.h2>
          <motion.p
            className="font-script text-xl md:text-2xl text-dark-gray max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Click anywhere in the night sky to create our constellation of love. Each star holds a special message 💫
          </motion.p>

          <motion.div
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Star className="w-5 h-5 text-peach-puff fill-current" />
            <span className="text-navy font-medium">{stars.length}/10 stars created</span>
          </motion.div>
        </motion.div>

        {/* Constellation Canvas - ONLY this area has night sky */}
        <motion.div
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 cursor-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={handleCanvasClick}
          style={{
            background: `
              radial-gradient(ellipse at top, #1e3a8a 0%, #1e40af 25%, #1d4ed8 50%),
              linear-gradient(180deg, 
                #0f172a 0%, 
                #1e293b 20%, 
                #334155 40%, 
                #1e40af 60%, 
                #1d4ed8 80%, 
                #2563eb 100%
              )
            `,
          }}
        >


          {/* Twinkling Stars Background */}
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Larger Bright Stars */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`bright-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.9))",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Shooting Stars */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 1))",
              }}
              animate={{
                x: [0, 200],
                y: [0, 100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                delay: i * 10 + Math.random() * 5,
                repeatDelay: 20,
              }}
            />
          ))}

          {/* Subtle Nebula Effect */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                radial-gradient(ellipse 600px 300px at 30% 40%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse 400px 200px at 70% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
              `,
            }}
          />

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(([start, end], index) => {
              const startStar = stars[start]
              const endStar = stars[end]
              if (!startStar || !endStar) return null

              return (
                <motion.line
                  key={index}
                  x1={`${startStar.x}%`}
                  y1={`${startStar.y}%`}
                  x2={`${endStar.x}%`}
                  y2={`${endStar.y}%`}
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))",
                  }}
                />
              )
            })}
          </svg>

          {/* Interactive Stars */}
          {stars.map((star, index) => (
            <motion.div
              key={star.id}
              className="absolute cursor-pointer"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              onClick={(e) => handleStarClick(star.id, star.message, e)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
              >
                {/* Star Glow */}
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-yellow-300/40 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Star Icon */}
                <Star
                  className="w-6 h-6 text-yellow-300 fill-current relative z-10"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))",
                  }}
                />

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Floating Message */}
          {showMessage && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: -20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border border-white/50 max-w-sm text-center">
                <p className="text-dark-gray font-medium text-lg">{showMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Instructions */}
          {stars.length === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-12 h-12 text-white/70 fill-current mx-auto mb-4" />
                </motion.div>
                <p className="text-white/70 font-medium">Click anywhere to place your first star</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Controls - Back to lavender theme */}
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            className="bg-white/50 hover:bg-white/70 text-navy px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/30"
            onClick={resetConstellation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🌟 Create New Constellation
          </motion.button>
        </motion.div>

        {/* Completion Celebration */}
        {isComplete && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md rounded-3xl p-12 max-w-2xl text-center shadow-2xl border border-white/50"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-20 h-20 text-peach-puff fill-current mx-auto mb-6" />
              </motion.div>

              <h3 className="font-script text-4xl text-navy mb-6">Constellation is Created!!!!</h3>

              <p className="text-dark-gray text-lg leading-relaxed mb-8">
                Just like the stars above, our love creates its own beautiful pattern in the universe. Each point of
                light represents a moment, a feeling, a promise that connects us across infinite space. 💫
              </p>

              <motion.button
                className="bg-gradient-to-r from-blush to-peach-puff text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsComplete(false)}
              >
                Continue Our Journey ✨
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
