"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Heart, Sparkles } from "lucide-react"

const letters = [
  {
    id: 1, 
    message: "This one’s all about my love for you, shyaaaa 💗No matter what I say… no matter how many ways I try to explain it—the words, the gestures, the actions… they’ll never be enough.They’ll never truly capture how much I love you.Because it’s beyond description.Beyond letters. I love you mostesttt se bhi mostesttt, Aaliaaa—not even kidding  🥺Aise hi thodi na I call you my precious…You are precious. To my heart, my soul, my every little breath.You mean the world to me…no wait—scratch that.You mean the whole fucking universeee to me, Aaliaa 🌌💜Every star, every sky, every heartbeat—it’s you.", 
    color: "blush" 
  },
  { 
    id: 2, 
    message: "This one is all about how much I miss youuu, my babyyy shyaaaa .Half a yearrr has passed since this long distance began…Half a year without holding you,without sitting next to you,without those soft, silly moments that only we understand.Through all this time,I’ve ached—quietly, constantly—wishing, hoping, longingto just be near you again.Some days, it gets sooo tough, like all the missing suddenly crashes in at onceThere are moments I ache just for a single glance of you,just to see your eyes light up at something bina soche I say,Always thinking about my Aaliaa…“Yaha hoti toh yeh karte…”Reliving the memories we made,and daydreaming the future we’ll build.And somehow… even with all this aching,all this distance,all this missing—the love keeps growing. Stronger. Deeper. Mostesttt-er 💗I’ll wait for the moment we meet again—and when we do,I know we’ll melt right back into our soft little bubble…our world…where time flies and only “us” exists.Forever and ever, my precious", 
    color: "peach-puff" 
  },
  {
    id: 3,
    message: "This one is all about thanking youu!! Thank you for being you—for being soft, strong, patient, and full of a love that still leaves me speechless. You didn’t just enter my life—you rewrote the definition of love for me. You made it feel like home, like art, like something sacred. Thank you for loving me in all my versions—in my messy moments, in my anxious silences, in my loud silly moods, in my softest, rawest places. You never asked me to be anything more than me… and somehow you made that feel like enough. Thank you for your words—those long paragraphs, mails, letters… each one felt like a little hug through the screen, a whisper of 'I’m with you' even from 2075 km away. I carry them in my heart, every single one. Thank you for holding me up when I doubted myself, for reminding me who I am, for telling me you're proud, for being proud even when I couldn’t be. You’ve been the gentle voice guiding me out of my own darkness, again and again. Thank you for the way you listen… deeply. The way you understand my unsaid words. The way you feel my feelings as if they were your own. Thank you for letting me in… for trusting me with your truths, your emotions, your love. It’s the most precious thing I’ve ever been given. For all the little things that make you the girl who lives in every beat of my heart. I don’t know how I got lucky enough to be loved by you. But I promise—on the loudest days, on the quietest nights, through distance and time and everything in between—I’ll keep thanking you, keep loving you, mostesttt se bhi mostesttt, every single day.",
    color: "mint"
  },
  { 
    id: 4, 
    message: "If I could hold your hand right now and tell you everything I want from you…everything I dream about for us,it wouldn’t be a list. It would be a feeling. A lifetime. But let me try. I don’t want perfect things from you. I don’t want endless words or grand gestures.I just want you. The real, raw, radiant you. I want you to keep being the girl who calls me 'my babbyy' in the middle of chaos. To keep telling me about your thoughts—whether they’re deep, sad, or just random  things  I want your sleepy voice in the morning, your tired sighs at night, and every little part of your day in between. I want us to keep building this love with softness and patience. To grow through storms, even if we get mad, even if we hurt— but to always come back to love, to us. Always. I want you to let me in—fully. Even on your hard days.Even when you're not okay. Let me be your safest place the way you've become mine. I want to dream with you… not just fairytales, but real things. Build Our own place with everything we imagine, your favorite long curtains, those mornings with chai and sleepy cuddles on the couch. Late-night walks, spontaneous road trips, shared playlists, growing old with laughter and love. I want your hand in mine at every milestone—big or small. Be it launching a start up or making awsome instant noodles 3am. I want us to keep choosing each other every day, even when life gets heavy. Even when we’re worlds apart. Even when we grow into different versions of ourselves. Especially then. And more than anything, I want you to never forget how deeply I love you. How much I see in you. How fiercely I believe in us. How I still look at the future and see you. Only you. So no, I don’t want much. Just you,forever and ever and ever.", 
    color: "powder-blue" },
  { 
    id: 5, 
    message: "My Safe Place, My World, My Aaliaaa,There are days when I feel a little lost… when the world feels too loud, too fast, when I doubt where I stand or if I’m enough.And then—there’s you. Your voice. Your gentle “shyaaaa.” Your smile that could calm a whole thunderstorm inside me. With you, I feel like I belong. Not just in your life… but in this world. Like I’m not floating aimlessly anymore. You make me feel chosen, not because I’m perfect (we both know I’m dumbbb) but because I’m yours. You make me feel understood without explaining, loved without pretending, wanted without asking. I belong in your arms. I belong in your mails. I belong in that universe where it’s just you and me ,talking nonsense, smiling too much, hearts louder than words.Aaliaa, thank you for giving me a place to rest, a soul to feel safe with, and a love that whispers in every heartbeat—“You’re not alone.” I love you. Mostesttt. Always.",
    color: "lavender" 
  },
  { 
    id: 6, 
    message: "Shyaaaa... You know what thought keeps me alive and hopeful  these days?Keeps me moving? Keeps me breathing with a hope tucked behind every shyaa?The day I get to see you again.The day I get to look at you in real, not through a screen. The day I get to touch your hands. The day I get to hug you so tightly that my whole broken missing heart finally fits back together.Shyaaa that day… I don’t even know how I’ll act. Will I cry ?Will I stand frozen, staring at you like it’s a dream?Will I run to you? Or just walk slow, letting in every second because I’ve imagined it a thousand times?I imagine waiting for you (you late thats why) … looking around nervously… and then my eyes catch you.Walking towards me. Pretty as ever. More real than ever.And in that moment babyyy — everything in me will scream “That’s HER. My girl. My everything. My love.”You won’t even need to say a word.Your eyes, your smile — they’ll say it all.They’ll say “you waited for me,” and mine will say, “I was always yours.” I’ll walk up to you, slow…Will jox or say something stupid (what if i get nervous or shy),and the Hugg hyaaaa that hug will be my whole world crashing into place again.All the tears, the countdowns, the sad nights, the missed calls, the dry texts, the ache of 2075 km —all of it will melt.Because you’ll be in my arms.Where you always belonged.I'll breathe in your scent and feel my heart ,v“I’m home.”We’ll sit somewhere, maybe our throne if we lucky — anywhere with you  it’ll feel like heaven.And I’ll just stare. Stare at your nose, your lips, your smile, your eyes, your hands —and keep whispering “I missed thiss” (dont get annoyed babe (But secretly you’ll be melting too… I know .) I’ll tell you about all the letters I wrote, all the nights I stared at the cellind and imagined us meeting after long time. You’ll laugh. Call me dumb. Hold my hand tighter.(also some sass) And then we’ll sit in silence — because even silence with you is soft, peaceful, beautiful. Shyaaa I ache for that day. Some days the wait feels too long…But every time I close my eyes and imagine that hug, that touch, that “finally…” moment —I smile again. I breathe again.Because I know that day will come. Whether in 10 days or 100, whether by surprise or plan, I know I’ll hold you again. And when I do, babyyy — I’ll never let go without giving you every ounce of love I’ve been storing in me like crazy. Until that day, I’ll keep preparing — Counting my prayers, saving my softness, collecting my love … So that when I finally see you, I can pour it all over you like the rain. And babyyyy…When that hug happens, just know — it’ll be a new beginning", 
    color: "blush"
   },
]

export default function LetterPickingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleLetterClick = (letterId: number) => {
    setSelectedLetter(letterId)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 2000)
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blush: "bg-blush/30",
      "peach-puff": "bg-peach-puff/30",
      mint: "bg-mint/30",
      "powder-blue": "bg-powder-blue/30",
      lavender: "bg-lavender/30",
    }
    return colorMap[color] || "bg-blush/30"
  }

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 800),
                y: -50,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: (typeof window !== "undefined" ? window.innerHeight : 600) + 50,
                rotate: 360,
                opacity: 0,
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            >
              {["💜", "💕", "✨", "🌸", "💖"][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-navy text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Pick a Love Letter
        </motion.h2>

        {/* Letters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className={`relative cursor-pointer transform-gpu`}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 20 - 10 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: Math.random() * 10 - 5,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLetterClick(letter.id)}
            >
              <div
                className={`${getColorClasses(letter.color)} backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 h-32 flex items-center justify-center relative overflow-hidden`}
              >
                {/* Envelope flap */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-8 ${getColorClasses(letter.color).replace("/30", "/50")} clip-path-envelope`}
                  animate={selectedLetter === letter.id ? { rotateX: 180 } : {}}
                  transition={{ duration: 0.5 }}
                />

                <Mail className="w-8 h-8 text-navy" />

                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Sparkles className="w-4 h-4 text-peach-puff" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Letter Display */}
        {selectedLetter && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-lavender/30 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blush fill-current mr-2" />
              <h3 className="font-script text-2xl text-navy">For myy Aliaa Darling</h3>
              <Heart className="w-6 h-6 text-blush fill-current ml-2" />
            </div>

            <p className="text-dark-gray text-lg leading-relaxed text-center">
              {letters.find((l) => l.id === selectedLetter)?.message}
            </p>

            <motion.button
              className="mt-6 mx-auto block text-white px-6 py-2 rounded-full font-medium shadow-lg"
              style={{
                background: "linear-gradient(to right, #FFB6C1, #FFDAB9)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLetter(null)}
            >
              Pick Another Letter
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
