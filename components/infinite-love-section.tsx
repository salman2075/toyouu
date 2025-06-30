"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Heart, Sparkles, Star, Flower2 } from "lucide-react"

const loveReasons = [
  "The way your lovelyyy brown eyes look at me... it makes me feel seen, deeply loved, and lights up every corner of my world ",
  "The art of always coming through— how you show up, no matter what...",
  "That smile of yours... it doesn't just light up the room—it wraps me in warmth like sunshine through glass",
  "Your hugs... they feel like a warm, soft blanket on the coldest day—a place where the world slows down and everything feels okay ",
  "How we adopted each other's vocabularyyy—seamlessly, playfully—until our language became our own little world of 'shyaas' and 'mostesttt's",
  "The way you carry responsibilities with gracee, no matter what storm you're hiding inside—you still look out for everyone, and that strength makes me love you even more.",
  "Your love for your familyy—so protective, so pure—it's one of the most beautiful parts of you",
  "How you understand me, even on the tough days, when I don't have the words but you somehow just... know",
  "How you use your full 100% brain not for maths—but for twisting my words",
  "You make me want to be the best version of myself, not because you ask me to, but because loving you makes me dream bigger, feel deeper, and grow braver ",
  "The way you see me... the way you want me, just like I want you—makes everything feel mutual, meant-to-be, and magical",
  "How you trust me with your deepest matters—your fears, your hopes, your thoughts—it makes me feel like your safest place, and I'll always protect that.",
  "The way you call me names with lovee 'my babbyy', 'my Salmannnn'—each one a soft whisper to my soul",
  "Your kind heart… overflowing with love and gentleness, but also that wise holdback when it's needed. A balance only you know how to master",
  "Your voiceee... it's like a melody, soft and sweet music to my ears. The way your tone changes when you're excited, the sass when you twist my words",
  "How insanelyyy beautiful you are, jaw-droppinglyy prettyyy. Every feature—your smile, your nose, those eyes—all stitched together like poetry, perfectly suiting you, my jorjeous babyy",
  "How we get lost in our own little bubbleee, forgetting the world when we hangout—time disappears, and it's just you, me, and that invisible warmth between us",
  "Those random mornings, nights, afternoons— when you'd send mails and paragraphs just to love me, uplift me, cheer me uppp… (btw thankss babbyy)",
  "Your presence alone... it's calming, grounding, like the universe holding me in a big warm hug",
  "How you really see me, even through the insecurities I try to hide. And somehow, you make those broken pieces feel beautiful too ",
  "When I'm lost in self-doubt, you hold me with your words and actions, showing me how proud you are. Like I'm still worth loving on my worst days",
  "You inspire meee, to try things I never believed I could. To chase, to grow, to feel everything fully—because of your belief",
  "You are my precious, my whole worlddd. Not a part, not a piece—but everything. The moon, the stars, the silly nicknames, and the softest places in my heart",
  "Even when we're storming inside ourselves, even when we're mad—we still stay. We resolve, we reach, and we choose love every single time",
  "The way you playyy with your words, saying things like 'shatap','dumbb', 'shyaaaa' in that dramatic sassyyy way",
  "The way you remember the tiniest details... whether it's what I like, how I feel, or something I said months ago, or some of my memories before uss",
  "How you dream with me. You don't just listen—you imagine. You build worlds, futures, silly what-ifs, and soft maybes",
  "How you made me believe in soulmates. Not in a cliché way—but in the real, quiet way where I feel it in my chest every time I think of you and whisper, 'It's you. It's always been you.'",
  "The way you make everything feel worth it. The stress, the waiting, the distance—it all fades when I hear you say 'my babbyyy'",
  "The way we make plans for a future that feels so real. From silly dreams to serious promises, every 'someday' with you feels possible",
]

export default function InfiniteLoveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayedReasons, setDisplayedReasons] = useState<
    Array<{ id: number; text: string; x: number; y: number; positionIndex: number }>
  >([])
  const [clickCount, setClickCount] = useState(0)
  const [showHeartExplosion, setShowHeartExplosion] = useState(false)
  const [usedPositions, setUsedPositions] = useState<Set<number>>(new Set())

  const handleHeartClick = () => {
    if (clickCount < loveReasons.length) {
      // Create a comprehensive grid with many positions, avoiding the center heart area
      const allPositions = [
        { x: 5, y: 15 }, // Top left
        { x: 85, y: 10 }, // Top right
        { x: 10, y: 75 }, // Bottom left
        { x: 80, y: 80 }, // Bottom right
        { x: 45, y: 5 }, // Top center
        { x: 15, y: 45 }, // Left middle
        { x: 75, y: 50 }, // Right middle
        { x: 5, y: 60 }, // Left lower
        { x: 90, y: 65 }, // Right lower
        { x: 25, y: 85 }, // Bottom left-center
        { x: 65, y: 15 }, // Top right-center
        { x: 35, y: 75 }, // Bottom center-left
        { x: 70, y: 25 }, // Top right area
        { x: 20, y: 25 }, // Top left area
        { x: 12, y: 55 }, // Left side
        { x: 88, y: 45 }, // Right side
        { x: 30, y: 10 }, // Top left-center
        { x: 60, y: 8 }, // Top center-right
        { x: 8, y: 35 }, // Left upper
        { x: 92, y: 30 }, // Right upper
        { x: 15, y: 90 }, // Bottom far left
        { x: 75, y: 88 }, // Bottom far right
        { x: 50, y: 85 }, // Bottom center
        { x: 85, y: 55 }, // Right center
        { x: 25, y: 60 }, // Left lower center
        { x: 65, y: 70 }, // Right lower center
        { x: 40, y: 90 }, // Bottom center-left
        { x: 55, y: 12 }, // Top center area
        { x: 18, y: 20 }, // Top left region
        { x: 78, y: 18 }, // Top right region
      ]

      // Find an available position that's not currently used
      const availablePositions = allPositions.filter((_, index) => !usedPositions.has(index))

      // If no positions available, reset used positions (shouldn't happen with 30 positions and max 8 cards)
      if (availablePositions.length === 0) {
        setUsedPositions(new Set())
        const position = allPositions[0]
        const positionIndex = 0

        const newReason = {
          id: Date.now(),
          text: loveReasons[clickCount],
          x: position.x,
          y: position.y,
          positionIndex: positionIndex,
        }

        setDisplayedReasons((prev) => [...prev, newReason])
        setUsedPositions(new Set([positionIndex]))
      } else {
        // Pick a random available position
        const randomIndex = Math.floor(Math.random() * availablePositions.length)
        const position = availablePositions[randomIndex]
        const positionIndex = allPositions.findIndex((pos) => pos.x === position.x && pos.y === position.y)

        const newReason = {
          id: Date.now(),
          text: loveReasons[clickCount],
          x: position.x,
          y: position.y,
          positionIndex: positionIndex,
        }

        setDisplayedReasons((prev) => [...prev, newReason])
        setUsedPositions((prev) => new Set([...prev, positionIndex]))
      }

      setClickCount((prev) => prev + 1)

      // Trigger heart explosion every 5 clicks
      if ((clickCount + 1) % 5 === 0) {
        setShowHeartExplosion(true)
        setTimeout(() => setShowHeartExplosion(false), 2000)
      }

      // Remove oldest reason if more than 8 are displayed
      if (displayedReasons.length >= 8) {
        setTimeout(() => {
          setDisplayedReasons((prev) => {
            const removedReason = prev[0]
            if (removedReason) {
              setUsedPositions((currentUsed) => {
                const newUsed = new Set(currentUsed)
                newUsed.delete(removedReason.positionIndex)
                return newUsed
              })
            }
            return prev.slice(1)
          })
        }, 3000)
      }
    } else {
      // Reset when all reasons are shown
      setDisplayedReasons([])
      setClickCount(0)
      setUsedPositions(new Set())
    }
  }

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Hearts Background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -60],
              rotate: [0, 15],
              scale: [1, 1.3],
              opacity: [0.1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
              repeatType: "reverse",
            }}
          >
            <Heart className="w-8 h-8 fill-current" />
          </motion.div>
        ))}

        {/* Sparkle Effects */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-peach-puff/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.5],
              opacity: [0, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
              repeatType: "reverse",
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Heart Explosion Effect */}
      <AnimatePresence>
        {showHeartExplosion && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-blush"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 600,
                  scale: [0, 1.5, 0],
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
              >
                <Heart className="w-6 h-6 fill-current" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
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
            Infinite Reasons Why I Love You
          </motion.h2>
          <motion.p
            className="font-script text-xl md:text-2xl text-dark-gray max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Click the heart to discover all the ways you make my world magical ✨
          </motion.p>
        </motion.div>

        {/* Interactive Heart Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central Interactive Heart */}
          <motion.div
            className="relative z-20 cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 200 }}
            onClick={handleHeartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              {/* Heart Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                  transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Main Heart */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <Heart
                  className="w-24 h-24 fill-current text-blush"
                  style={{
                    filter: "drop-shadow(0 8px 25px rgba(255, 182, 193, 0.5))",
                  }}
                />
              </div>
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-blush/30 rounded-full"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            {/* Counter Display */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-navy shadow-lg border border-white/30">
                {clickCount}/{loveReasons.length}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Reason Cards */}
          <AnimatePresence>
            {displayedReasons.map((reason) => (
              <motion.div
                key={reason.id}
                className="absolute max-w-xs"
                style={{
                  left: `${reason.x}%`,
                  top: `${reason.y}%`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: Math.random() * 20 - 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  y: -50,
                }}
                transition={{
                  duration: 0.8,
                  type: "tween",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.div
                  className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 relative"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      repeatType: "reverse",
                    }}
                  >
                    <Star className="w-5 h-5 text-peach-puff fill-current" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-1 -left-1"
                    animate={{
                      rotate: [0, 10],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      repeatType: "reverse",
                    }}
                  >
                    <Flower2 className="w-4 h-4 text-mint" />
                  </motion.div>
                  <p className="text-dark-gray leading-relaxed font-medium text-center text-sm">{reason.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="mt-16 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <motion.div
              className="h-2 bg-gradient-to-r from-blush to-peach-puff rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(clickCount / loveReasons.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-center text-dark-gray/70 text-sm mt-2">
            {clickCount === loveReasons.length
              ? "You've discovered all my reasons! Click to start over 💕"
              : "Keep clicking to discover more reasons..."}
          </p>
        </motion.div>

        {/* Special Message for Completion */}
        <AnimatePresence>
          {clickCount === loveReasons.length && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-md rounded-3xl p-12 max-w-2xl text-center shadow-2xl border border-white/50"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1],
                    rotate: [0, 5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                >
                  <Heart className="w-16 h-16 text-blush fill-current mx-auto mb-6" />
                </motion.div>

                <h3 className="font-script text-4xl text-navy mb-6">Aaliaa Darlingggg these are just few of the reasons</h3>

                <p className="text-dark-gray text-lg leading-relaxed mb-8">
                  Every day with you gives me makes me falll for you again and again and again. 💕
                </p>

                <motion.button
                  className="bg-gradient-to-r from-blush to-peach-puff text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDisplayedReasons([])
                    setClickCount(0)
                    setUsedPositions(new Set())
                  }}
                >
                  Discover Them Again ✨
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
