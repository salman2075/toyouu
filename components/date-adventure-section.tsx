"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Bike, Car, Coffee, Waves } from "lucide-react"

export default function DateAdventureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentScene, setCurrentScene] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState("sunset") // sunset -> dusk -> night

  const scenes = [
    { id: 0, title: "Carrom Cafe", icon: Coffee, color: "peach-puff" },
    { id: 1, title: "Go to Waigani", icon: Bike, color: "blush" },
    { id: 2, title: "Beach Sunset", icon: Waves, color: "powder-blue" },
  ]

  // Auto-cycle through time of day when beach scene is active
  useEffect(() => {
    if (currentScene === 2) {
      const timeSequence = ["sunset", "dusk", "night"]
      let currentIndex = 0

      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % timeSequence.length
        setTimeOfDay(timeSequence[currentIndex])
      }, 4000) // Change every 4 seconds

      return () => clearInterval(interval)
    }
  }, [currentScene])

  // Reset to sunset when switching to beach scene
  useEffect(() => {
    if (currentScene === 2) {
      setTimeOfDay("sunset")
    }
  }, [currentScene])

  const getSkyGradient = () => {
    switch (timeOfDay) {
      case "sunset":
        return "linear-gradient(180deg, #FFB6C1 0%, #FFDAB9 30%, #FF6B6B 60%, #4ECDC4 100%)"
      case "dusk":
        return "linear-gradient(180deg, #6B73FF 0%, #9B59B6 30%, #E74C3C 60%, #3498DB 100%)"
      case "night":
        return "linear-gradient(180deg, #0F0F23 0%, #1A1A3A 30%, #2C3E50 60%, #34495E 100%)"
      default:
        return "linear-gradient(180deg, #FFB6C1 0%, #FFDAB9 30%, #FF6B6B 60%, #4ECDC4 100%)"
    }
  }

  const getSunMoonElement = () => {
    if (timeOfDay === "sunset") {
      return (
        <motion.div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, #FFD700 0%, #FF6B6B 70%, #FF4757 100%)",
            filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 0.8))",
            top: "15%",
            right: "15%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 10, 0],
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
      )
    } else if (timeOfDay === "dusk") {
      return (
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: "radial-gradient(circle, #FF6B6B 0%, #E74C3C 50%, #8E44AD 100%)",
            filter: "drop-shadow(0 0 30px rgba(231, 76, 60, 0.6))",
            top: "25%",
            right: "20%",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
            transition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
      )
    } else {
      return (
        <motion.div
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: "radial-gradient(circle, #F8F9FA 0%, #E9ECEF 50%, #DEE2E6 100%)",
            filter: "drop-shadow(0 0 25px rgba(248, 249, 250, 0.9))",
            top: "10%",
            right: "25%",
          }}
          animate={{
            scale: [1, 1.08, 1],
            transition: {
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />
      )
    }
  }

  const generateStars = () => {
    if (timeOfDay !== "night") return null

    return [...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 60}%`, // Keep stars in upper part of sky
          filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0.7, 1],
          scale: [0, 1, 1.2, 1],
          transition: {
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          },
        }}
      />
    ))
  }

  const getCloudColor = () => {
    switch (timeOfDay) {
      case "sunset":
        return "rgba(255, 182, 193, 0.7)"
      case "dusk":
        return "rgba(155, 89, 182, 0.6)"
      case "night":
        return "rgba(52, 73, 94, 0.8)"
      default:
        return "rgba(255, 182, 193, 0.7)"
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-4 relative"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(230, 230, 250, 0.15) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold text-navy text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            textShadow: "0 4px 20px rgba(44, 62, 80, 0.1)",
          }}
        >
          Our Perfect Date Adventure
        </motion.h2>

        {/* Enhanced Scene Navigation */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex space-x-6 bg-white/60 backdrop-blur-md rounded-2xl p-3 shadow-xl">
            {scenes.map((scene, index) => {
              const IconComponent = scene.icon
              return (
                <motion.button
                  key={scene.id}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 ${
                    currentScene === index
                      ? "bg-white text-navy shadow-lg scale-105"
                      : "text-navy/70 hover:bg-white/50 hover:text-navy"
                  }`}
                  onClick={() => setCurrentScene(index)}
                  whileHover={{ scale: currentScene === index ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="font-semibold text-lg">{scene.title}</span>
                  {currentScene === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blush/20 to-peach-puff/20 rounded-xl -z-10"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Time of Day Indicator for Beach Scene */}
        {currentScene === 2 && (
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
              <span className="text-navy font-medium capitalize">
                {timeOfDay === "sunset" && "🌅 Golden Sunset"}
                {timeOfDay === "dusk" && "🌆 Romantic Dusk"}
                {timeOfDay === "night" && "🌙 Starlit Night"}
              </span>
            </div>
          </motion.div>
        )}

        {/* Enhanced Scene Content */}
        <motion.div
          className="relative h-[500px] bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Café Scene */}
          {currentScene === 0 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center space-y-8">
                <motion.div
                  className="bg-gradient-to-br from-peach-puff/30 to-blush/20 rounded-3xl p-12 max-w-md backdrop-blur-sm border border-white/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-script text-3xl text-navy mb-8">What we Get</h3>
                  <div className="space-y-4">
                    <motion.button
                      className="block w-full bg-mint/40 hover:bg-mint/60 px-8 py-4 rounded-2xl text-navy font-semibold transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      🥟  Momos
                    </motion.button>
                    <motion.button
                      className="block w-full bg-blush/40 hover:bg-blush/60 px-8 py-4 rounded-2xl text-navy font-semibold transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ☕ Chai 
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Enhanced Driving Scene */}
          {currentScene === 1 && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full bg-gradient-to-b from-powder-blue/40 to-mint/30">
                {/* Enhanced Road */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-gray/30 to-dark-gray/10 rounded-t-[50px]">
                  <motion.div
                    className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{
                      x: [-100, window.innerWidth + 100],
                      transition: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                  />
                </div>

                {/* Enhanced Car Animation */}
                <motion.div
                  className="absolute bottom-20 text-blush"
                  animate={{
                    x: [100, window.innerWidth - 200],
                    transition: {
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    filter: "drop-shadow(0 8px 16px rgba(255, 182, 193, 0.4))",
                  }}
                >
                  <Car className="w-16 h-16 fill-current" />
                </motion.div>

                {/* Clouds */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/60 text-4xl"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 5}%`,
                    }}
                    animate={{
                      x: [0, 50, 0],
                      transition: {
                        duration: 8 + i * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    ☁️
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Enhanced Beach Scene with Sunset to Night Transition */}
          {currentScene === 2 && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative h-full"
                animate={{
                  background: getSkyGradient(),
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {/* Sun/Moon */}
                {getSunMoonElement()}

                {/* Stars (only visible at night) */}
                {generateStars()}

                {/* Animated Clouds */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${15 + i * 8}%`,
                      color: getCloudColor(),
                      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))",
                    }}
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -10, 0],
                      transition: {
                        duration: 8 + i * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 1.5,
                      },
                    }}
                  >
                    ☁️
                  </motion.div>
                ))}

                {/* Enhanced Waves with different colors based on time */}
                <div className="absolute bottom-0 left-0 right-0">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 left-0 right-0 h-12 rounded-t-full"
                      style={{
                        bottom: i * 8,
                        background:
                          timeOfDay === "night"
                            ? "rgba(52, 73, 94, 0.6)"
                            : timeOfDay === "dusk"
                              ? "rgba(155, 89, 182, 0.4)"
                              : "rgba(176, 224, 230, 0.5)",
                      }}
                      animate={{
                        x: [0, 30, 0],
                        scaleX: [1, 1.1, 1],
                        transition: {
                          duration: 3 + i * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        },
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced Palm Trees */}
                <motion.div
                  className="absolute bottom-24 left-12 text-7xl"
                  style={{
                    filter:
                      timeOfDay === "night"
                        ? "drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))"
                        : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                  }}
                  animate={{
                    rotate: [-2, 2, -2],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  🌴
                </motion.div>
                <motion.div
                  className="absolute bottom-32 right-20 text-5xl"
                  style={{
                    filter:
                      timeOfDay === "night"
                        ? "drop-shadow(0 0 10px rgba(0, 0, 0, 0.8))"
                        : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                  }}
                  animate={{
                    rotate: [2, -2, 2],
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  🌴
                </motion.div>

                {/* Seagulls (only during sunset and dusk) */}
                {timeOfDay !== "night" && (
                  <>
                    <motion.div
                      className="absolute top-20 left-1/4 text-2xl"
                      animate={{
                        x: [0, 200, 0],
                        y: [0, -20, 0],
                        transition: {
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      🕊️
                    </motion.div>
                    <motion.div
                      className="absolute top-32 right-1/3 text-xl"
                      animate={{
                        x: [0, -150, 0],
                        y: [0, -15, 0],
                        transition: {
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: 3,
                        },
                      }}
                    >
                      🕊️
                    </motion.div>
                  </>
                )}

                {/* Romantic couple silhouette (appears during all times) */}
                <motion.div
                  className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{
                    filter:
                      timeOfDay === "night"
                        ? "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))"
                        : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                  }}
                >
                  👫
                </motion.div>

                {/* Fireflies (only at night) */}
                {timeOfDay === "night" &&
                  [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${40 + Math.random() * 40}%`,
                        filter: "drop-shadow(0 0 4px rgba(255, 255, 0, 0.8))",
                      }}
                      animate={{
                        x: [0, Math.random() * 40 - 20, 0],
                        y: [0, Math.random() * 30 - 15, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        transition: {
                          duration: 3 + Math.random() * 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: Math.random() * 4,
                        },
                      }}
                    />
                  ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
