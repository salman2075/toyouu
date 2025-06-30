"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

interface PulseEffect {
  id: number
  x: number
  y: number
}

export default function HeartCursor() {
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [pulses, setPulses] = useState<PulseEffect[]>([])

  // Use motion values for maximum performance
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Ultra-smooth spring animations
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Trail positions with different spring configs for staggered effect
  const trail1X = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.8 })
  const trail1Y = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.8 })
  const trail2X = useSpring(mouseX, { damping: 35, stiffness: 300, mass: 1.2 })
  const trail2Y = useSpring(mouseY, { damping: 35, stiffness: 300, mass: 1.2 })

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY],
  )

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsClicking(true)

    // Create pulse effect at exact click position
    const newPulse: PulseEffect = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    }

    setPulses((prev) => [...prev, newPulse])

    // Remove pulse after animation completes
    setTimeout(() => {
      setPulses((prev) => prev.filter((pulse) => pulse.id !== newPulse.id))
    }, 800)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  useEffect(() => {
    // Use passive listeners for better performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    window.addEventListener("mousedown", handleMouseDown, { passive: true })
    window.addEventListener("mouseup", handleMouseUp, { passive: true })

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select')

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter, { passive: true })
      element.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [updateMousePosition, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave])

  return (
    <>
      {/* Main Heart Cursor - Optimized for performance */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 1.4 : isHovering ? 1.2 : 1,
            rotate: isClicking ? [0, -10, 10, 0] : isHovering ? [0, 5, -5, 0] : 0,
          }}
          transition={{
            scale: { type: "spring", stiffness: 800, damping: 30 },
            rotate: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-lg"
            animate={{
              filter: isClicking
                ? "drop-shadow(0 0 20px rgba(255, 182, 193, 0.8))"
                : isHovering
                  ? "drop-shadow(0 0 15px rgba(255, 182, 193, 0.6))"
                  : "drop-shadow(0 4px 8px rgba(255, 182, 193, 0.4))",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FFB6C1"
              stroke="#FF69B4"
              strokeWidth="1.5"
              animate={{
                fill: isClicking ? "#FF69B4" : isHovering ? "#FFB6C1" : "#FFB6C1",
                stroke: isClicking ? "#FF1493" : "#FF69B4",
              }}
              transition={{ duration: 0.15 }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Trail Hearts - Optimized with different delays */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          x: trail1X,
          y: trail1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            scale: [0.6, 0.8, 0.6],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#FFDAB9"
            opacity="0.6"
          />
        </motion.svg>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] will-change-transform"
        style={{
          x: trail2X,
          y: trail2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            scale: [0.4, 0.6, 0.4],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="#E6E6FA"
            opacity="0.4"
          />
        </motion.svg>
      </motion.div>

      {/* Click Pulse Effects - Highly optimized */}
      {pulses.map((pulse) => (
        <motion.div
          key={pulse.id}
          className="fixed pointer-events-none z-[9996] will-change-transform"
          style={{
            left: pulse.x,
            top: pulse.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="w-8 h-8 border-2 border-blush rounded-full" />
        </motion.div>
      ))}

      {/* Secondary pulse ring for extra effect */}
      {pulses.map((pulse) => (
        <motion.div
          key={`${pulse.id}-secondary`}
          className="fixed pointer-events-none z-[9995] will-change-transform"
          style={{
            left: pulse.x,
            top: pulse.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <div className="w-12 h-12 border border-peach-puff/60 rounded-full" />
        </motion.div>
      ))}

      {/* Hover glow effect */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9994] will-change-transform"
          style={{
            x: x,
            y: y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.3 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-blush/20 rounded-full blur-md" />
        </motion.div>
      )}
    </>
  )
}
