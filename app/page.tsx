"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 10, stiffness: 50 }}
        />
      </div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Leah: Unveiling the Unseen
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center max-w-md mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Navigate the labyrinth of reality with an ethereal companion. Discover the hidden threads that weave our world.
      </motion.p>
      <motion.button
        className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Embark on the Journey
      </motion.button>
    </main>
  )
}
