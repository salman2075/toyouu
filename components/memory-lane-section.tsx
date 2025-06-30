"use client"

import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, MapPin, Heart, Camera, Music, Star } from "lucide-react"

const memories = [
  {
    id: 1,
    date: "First Meeting",
    location: "Coffee Shop on 5th Street",
    title: "When Our Eyes First Met",
    description:
      "I still remember the exact moment you walked in. Time stopped, and I knew my life was about to change forever.",
    emotion: "Nervous butterflies, instant connection",
    icon: Heart,
    color: "blush",
    season: "spring",
  },
  {
    id: 2,
    date: "First Date",
    location: "Riverside Park",
    title: "Our Perfect First Date",
    description:
      "We talked for hours like old friends. You laughed at my terrible jokes, and I fell a little deeper with each smile.",
    emotion: "Pure joy, comfortable excitement",
    icon: Calendar,
    color: "peach-puff",
    season: "spring",
  },
  {
    id: 3,
    date: "First 'I Love You'",
    location: "Under the Stars",
    title: "Three Words That Changed Everything",
    description:
      "It slipped out so naturally, like my heart couldn't hold it in anymore. Your eyes sparkled brighter than the stars above.",
    emotion: "Overwhelming love, perfect peace",
    icon: Star,
    color: "lavender",
    season: "summer",
  },
  {
    id: 4,
    date: "Moving In Together",
    location: "Our First Home",
    title: "Building Our Little World",
    description:
      "Unpacking boxes became treasure hunting. Every item found its place, just like we found our place in each other's lives.",
    emotion: "Excitement, belonging, home",
    icon: MapPin,
    color: "mint",
    season: "autumn",
  },
  {
    id: 5,
    date: "Quiet Sunday Morning",
    location: "Our Kitchen",
    title: "Dancing in Pajamas",
    description:
      "No music playing, just us swaying together while coffee brewed. These simple moments are my favorite kind of magic.",
    emotion: "Pure contentment, everyday love",
    icon: Music,
    color: "powder-blue",
    season: "winter",
  },
  {
    id: 6,
    date: "Today & Forever",
    location: "Everywhere We Go",
    title: "Our Never-Ending Story",
    description:
      "Every day with you is a new page in our beautiful story. I can't wait to write a thousand more chapters together.",
    emotion: "Infinite love, endless possibilities",
    icon: Camera,
    color: "blush",
    season: "eternal",
  },
]

export default function MemoryLaneSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [activeMemory, setActiveMemory] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const backgroundX = useTransform(mouseX, [-300, 300], [-10, 10])
  const backgroundY = useTransform(mouseY, [-300, 300], [-10, 10])

  // Auto-advance through memories
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveMemory((prev) => (prev + 1) % memories.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getSeasonalBackground = (season: string) => {
    switch (season) {
      case "spring":
        return "linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(240, 255, 240, 0.2) 100%)"
      case "summer":
        return "linear-gradient(135deg, rgba(255, 218, 185, 0.1) 0%, rgba(230, 230, 250, 0.2) 100%)"
      case "autumn":
        return "linear-gradient(135deg, rgba(255, 218, 185, 0.2) 0%, rgba(255, 182, 193, 0.1) 100%)"
      case "winter":
        return "linear-gradient(135deg, rgba(176, 224, 230, 0.1) 0%, rgba(230, 230, 250, 0.2) 100%)"
      default:
        return "linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(255, 218, 185, 0.1) 100%)"
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          x: backgroundX,
          y: backgroundY,
          background: getSeasonalBackground(memories[activeMemory]?.season),
        }}
        animate={{
          background: getSeasonalBackground(memories[activeMemory]?.season),
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Floating Memory Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
            {i % 3 === 2 && <Camera className="w-5 h-5 text-powder-blue" />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h2
            className="font-display text-4xl md:text-6xl font-bold text-navy mb-6"
            style={{
              textShadow: "0 4px 20px rgba(44, 62, 80, 0.1)",
            }}
          >
            Our Memory Lane
          </motion.h2>
          <motion.p
            className="font-script text-xl md:text-2xl text-dark-gray max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Every moment with you becomes a treasured memory, a golden thread in the tapestry of our love story 💕
          </motion.p>
        </motion.div>

        {/* Memory Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blush via-peach-puff to-powder-blue rounded-full opacity-30" />

          {/* Memory Cards */}
          <div className="space-y-24">
            {memories.map((memory, index) => {
              const IconComponent = memory.icon
              const isActive = activeMemory === index
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={memory.id}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      boxShadow: isActive ? `0 0 30px rgba(255, 182, 193, 0.6)` : `0 0 10px rgba(255, 182, 193, 0.3)`,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-${memory.color} border-4 border-white shadow-lg cursor-pointer`}
                      onClick={() => {
                        setActiveMemory(index)
                        setIsAutoPlaying(false)
                      }}
                    />
                  </motion.div>

                  {/* Memory Card */}
                  <motion.div
                    className={`w-full max-w-md ${isLeft ? "mr-8" : "ml-8"}`}
                    whileHover={{
                      scale: 1.02,
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.div
                      className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden cursor-pointer"
                      onClick={() => {
                        setActiveMemory(index)
                        setIsAutoPlaying(false)
                      }}
                      animate={{
                        boxShadow: isActive ? `0 20px 60px rgba(255, 182, 193, 0.3)` : `0 10px 30px rgba(0, 0, 0, 0.1)`,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Decorative Corner */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-${memory.color}/20 to-transparent rounded-bl-3xl`}
                      />

                      {/* Icon */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-${memory.color}/20 rounded-2xl mb-4`}
                        animate={{
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                      >
                        <IconComponent
                          className={`w-6 h-6 text-${memory.color === "peach-puff" ? "navy" : memory.color}`}
                        />
                      </motion.div>

                      {/* Date & Location */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-navy text-lg mb-1">{memory.date}</h3>
                        <p className="text-dark-gray/70 text-sm flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {memory.location}
                        </p>
                      </div>

                      {/* Title */}
                      <h4 className="font-script text-2xl text-navy mb-4">{memory.title}</h4>

                      {/* Description */}
                      <p className="text-dark-gray leading-relaxed mb-4">{memory.description}</p>

                      {/* Emotion */}
                      <motion.div
                        className={`inline-block bg-${memory.color}/10 px-4 py-2 rounded-full`}
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1,
                        }}
                        transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                      >
                        <span className="text-dark-gray/80 text-sm font-medium italic">"{memory.emotion}"</span>
                      </motion.div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 border-2 border-blush/30 rounded-3xl pointer-events-none"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Memory Navigation */}
        <motion.div
          className="flex justify-center mt-16 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isAutoPlaying ? "bg-blush text-white shadow-lg" : "bg-white/50 text-navy hover:bg-white/70"
            }`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? "⏸️ Pause Journey" : "▶️ Continue Journey"}
          </motion.button>

          <motion.button
            className="bg-white/50 hover:bg-white/70 text-navy px-6 py-3 rounded-full font-medium transition-all duration-300"
            onClick={() => {
              setActiveMemory(0)
              setIsAutoPlaying(true)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔄 Restart Journey
          </motion.button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <motion.div
              className="h-2 bg-gradient-to-r from-blush via-peach-puff to-powder-blue rounded-full"
              animate={{ width: `${((activeMemory + 1) / memories.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="text-center text-dark-gray/70 text-sm mt-2">
            Memory {activeMemory + 1} of {memories.length}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
