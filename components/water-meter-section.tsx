"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function WaterMeterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Love Letter */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-lavender/30 relative"
              whileHover={{
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.5 },
              }}
            >
              {/* Paper fold effect */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-lavender/20 rounded-bl-2xl" />

              <h2 className="font-script text-3xl text-navy mb-6">My Dearest Love</h2>
              <div className="space-y-4 text-dark-gray leading-relaxed">
                <p>
                  They say the human body is 60% water, but when I met you, I realized mine became 98% you and only 2%
                  everything else.
                </p>
                <p>
                  Every drop of my being flows with thoughts of your smile, your laughter, and the way you make ordinary
                  moments feel like pure magic.
                </p>
                <p className="font-script text-lg text-blush">Forever yours, with all my heart 💜</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Water Meter */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Human Silhouette */}
              <div className="w-64 h-96 bg-gradient-to-b from-navy/20 to-navy/40 rounded-full relative overflow-hidden">
                {/* Water Fill Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    background: "linear-gradient(to top, #B0E0E6, #F0FFF0, rgba(230, 230, 250, 0.8))",
                  }}
                  initial={{ height: "0%" }}
                  animate={isInView ? { height: "98%" } : {}}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                >
                  {/* Wave Animation */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: [-100, 100],
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </motion.div>

                {/* Labels */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-navy">98% Aaliaa</div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-navy">2% Salman</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
