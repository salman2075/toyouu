"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import HeroSection from "@/components/hero-section"
import LoveMeterSection from "@/components/love-meter-section"
import DateAdventureSection from "@/components/date-adventure-section"
import InfiniteLoveSection from "@/components/infinite-love-section"
import LoveConstellationSection from "@/components/love-constellation-section"
import LetterPickingSection from "@/components/letter-picking-section"
import HeartCursor from "@/components/heart-cursor"

export default function LavenderLoveStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 0.7, 0.5, 0.3])

  return (
    <>
      <HeartCursor />
      <div ref={containerRef} className="relative min-h-screen overflow-hidden cursor-none">
        {/* Ultra-Smooth Animated Background */}
        <motion.div
          className="fixed inset-0 -z-10"
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #E6E6FA 0%, #F0FFF0 25%, #B0E0E6 50%, #FFDAB9 75%, #FFB6C1 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-15 mix-blend-multiply">
            {/* Ultra-smooth gradient overlay */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 60%)",
                  "radial-gradient(circle at 80% 70%, rgba(176, 224, 230, 0.4) 0%, transparent 60%)",
                  "radial-gradient(circle at 50% 10%, rgba(255, 218, 185, 0.4) 0%, transparent 60%)",
                  "radial-gradient(circle at 10% 80%, rgba(240, 255, 240, 0.4) 0%, transparent 60%)",
                  "radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 60%)",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Main Content with Enhanced Smoothness */}
        <main className="relative z-10">
          <HeroSection />
          <LoveMeterSection />
          <DateAdventureSection />
          <InfiniteLoveSection />
          <LoveConstellationSection />
          <LetterPickingSection />
        </main>
      </div>
    </>
  )
}
