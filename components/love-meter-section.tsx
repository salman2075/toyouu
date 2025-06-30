"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

export default function LoveMeterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [lovePercentage, setLovePercentage] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setLovePercentage(100)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Love Letter */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden"
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blush/10 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-peach-puff/10 to-transparent rounded-tr-3xl" />

              {/* Sparkle decorations */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-5 h-5 text-peach-puff" />
              </motion.div>

              <motion.h2
                className="font-script text-4xl text-navy mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                My Precious Girll!
              </motion.h2>

              <div className="space-y-6 text-dark-gray leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  I am sooo cooked and deeply in love with you you have no ideaa how much  mostest you are loved by meee...
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  You are in my heart and you have all of my heart all 100% of it, And You you you&nbsp;&rsquo;re on my mindddd...24/7 you are on my mind
                  No matter how much i tell you i miss you it wont be enough to justifyy how much i miss my babbyy!!
                </motion.p>
                <motion.p
                  className="font-script text-xl text-blush text-center pt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Forever yours, and only yourss Salman Mhaskarrr.. 💜
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Love Meter */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              {/* Main Heart Container */}
              <div
                className="relative w-80 h-80"
                style={{ filter: "drop-shadow(0 15px 35px rgba(220, 20, 60, 0.25))" }}
              >
                {/* Perfect Heart Shape SVG - Like ❤️ emoji */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 10px 30px rgba(220, 20, 60, 0.4))" }}
                >
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF69B4" />
                      <stop offset="30%" stopColor="#FF1493" />
                      <stop offset="70%" stopColor="#DC143C" />
                      <stop offset="100%" stopColor="#B22222" />
                    </linearGradient>
                    <linearGradient id="heartFill" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#DC143C" stopOpacity="0.95" />
                      <stop offset="30%" stopColor="#FF1493" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#FF69B4" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0.8" />
                    </linearGradient>
                    <radialGradient id="heartGlow" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FF1493" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#DC143C" stopOpacity="0.4" />
                    </radialGradient>
                    <radialGradient id="leftHighlight" cx="35%" cy="30%" r="25%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                    <radialGradient id="rightHighlight" cx="65%" cy="30%" r="25%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                  </defs>

                  {/* Perfect Heart Shape - Two perfect circles at top, smooth curves to point */}
                  <path
                    d="M50,85 
                       C50,85 20,65 20,45 
                       C20,35 25,25 35,25 
                       C45,25 50,35 50,35
                       C50,35 55,25 65,25
                       C75,25 80,35 80,45
                       C80,65 50,85 50,85 Z"
                    fill="none"
                    stroke="url(#heartGradient)"
                    strokeWidth="2"
                    className="opacity-30"
                  />

                  {/* Animated heart fill */}
                  <motion.path
                    d="M50,85 
                       C50,85 20,65 20,45 
                       C20,35 25,25 35,25 
                       C45,25 50,35 50,35
                       C50,35 55,25 65,25
                       C75,25 80,35 80,45
                       C80,65 50,85 50,85 Z"
                    fill="url(#heartFill)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{
                      pathLength: { duration: 2, ease: "easeInOut", delay: 0.5 },
                      opacity: { duration: 0.5, delay: 0.5 },
                    }}
                  />

                  {/* Heart glow effect */}
                  <motion.path
                    d="M50,85 
                       C50,85 20,65 20,45 
                       C20,35 25,25 35,25 
                       C45,25 50,35 50,35
                       C50,35 55,25 65,25
                       C75,25 80,35 80,45
                       C80,65 50,85 50,85 Z"
                    fill="url(#heartGlow)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.6 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  />

                  {/* Left lobe highlight */}
                  <motion.ellipse
                    cx="35"
                    cy="35"
                    rx="12"
                    ry="10"
                    fill="url(#leftHighlight)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                  />

                  {/* Right lobe highlight */}
                  <motion.ellipse
                    cx="65"
                    cy="35"
                    rx="12"
                    ry="10"
                    fill="url(#rightHighlight)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.7 }}
                  />

                  {/* Animated fill level */}
                  <motion.rect
                    x="20"
                    y="85"
                    width="60"
                    height="0"
                    fill="url(#heartFill)"
                    clipPath="url(#heartClip)"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 60, y: 25 } : {}}
                    transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
                  />

                  <clipPath id="heartClip">
                    <path
                      d="M50,85 
                         C50,85 20,65 20,45 
                         C20,35 25,25 35,25 
                         C45,25 50,35 50,35
                         C50,35 55,25 65,25
                         C75,25 80,35 80,45
                         C80,65 50,85 50,85 Z"
                    />
                  </clipPath>
                </svg>

                {/* Percentage Display */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-white mb-2"
                      style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.5)" }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 2 }}
                      >
                        {lovePercentage}%
                      </motion.span>
                    </motion.div>
                    <motion.p
                      className="text-lg font-medium text-white"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.5 }}
                    >
                      Onlyy Yours
                    </motion.p>
                  </div>
                </motion.div>

                {/* Floating particles around heart */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: `${45 + Math.cos((i * Math.PI * 2) / 8) * 45}%`,
                      top: `${45 + Math.sin((i * Math.PI * 2) / 8) * 45}%`,
                      background: i % 2 === 0 ? "#FF69B4" : "#DC143C",
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2 + 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Love Labels */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-navy shadow-lg">
                  💕 98 & 97 💕
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-navy shadow-lg">
                   Aaliaa Darlinggg!!🥰
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
