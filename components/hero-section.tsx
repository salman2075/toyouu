"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Flower, Heart, Sparkles } from "lucide-react"

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const bloomVariants = {
    animate: {
      rotate: [0, 8, -8, 0],
      scale: [1, 1.15, 1],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      {/* Enhanced Corner Bloom Icons */}
      <motion.div
        className="absolute top-8 left-8 text-peach-puff"
        variants={bloomVariants}
        animate="animate"
        style={{ filter: "drop-shadow(0 4px 12px rgba(255, 218, 185, 0.4))" }}
      >
        <Heart className="w-14 h-14 fill-current" />
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-blush"
        variants={bloomVariants}
        animate="animate"
        style={{
          animationDelay: "1.5s",
          filter: "drop-shadow(0 4px 12px rgba(255, 182, 193, 0.4))",
        }}
      >
        <Flower className="w-14 h-14 fill-current" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8 text-mint"
        variants={bloomVariants}
        animate="animate"
        style={{
          animationDelay: "3s",
          filter: "drop-shadow(0 4px 12px rgba(240, 255, 240, 0.4))",
        }}
      >
        <Flower className="w-14 h-14 fill-current" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 text-peach-puff"
        variants={bloomVariants}
        animate="animate"
        style={{
          animationDelay: "4.5s",
          filter: "drop-shadow(0 4px 12px rgba(255, 218, 185, 0.4))",
        }}
      >
        <Heart className="w-14 h-14 fill-current" />
      </motion.div>

      {/* Main Content with 3D effect */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-navy mb-6"
          variants={itemVariants}
          style={{
            textShadow: "0 4px 20px rgba(44, 62, 80, 0.2)",
            transform: "translateZ(50px)",
          }}
        >
          Aaliaa Sarfarzz Wadkar
        </motion.h1>

        <motion.p
          className="font-script text-2xl md:text-4xl text-dark-gray mb-12"
          variants={itemVariants}
          style={{
            transform: "translateZ(30px)",
          }}
        >
          My Precious, Sweet, Pretty Smartt Gurll...
        </motion.p>

        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-blush via-peach-puff to-powder-blue mx-auto rounded-full"
          variants={itemVariants}
          style={{
            transform: "translateZ(20px)",
            boxShadow: "0 4px 20px rgba(255, 182, 193, 0.3)",
          }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute -top-4 -right-4 text-blush/60"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-8 h-8 fill-current" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 text-peach-puff/60"
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
