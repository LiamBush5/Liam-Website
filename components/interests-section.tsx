'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'


interface Interest {
  name: string
  description: string
  image: string
}

const interests: Interest[] = [
  {
    name: "Marathon Running",
    description: "Boston Qualifier, PR 2:44",
    image: "/images/running.jpg"
  },
  {
    name: "European Backpacking",
    description: "Through 6 Countries",
    image: "/images/backpack.png"
  },
  {
    name: "Philadelphia Sports",
    description: "Cheering for all 4 teams!",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Skiing",
    description: "Since I Could Walk",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Hiking",
    description: "Hiking Zion, and Tahoe",
    image: "/images/hiking.png"
  },
  {
    name: "Rowing",
    description: "Perplexity Campus Strategist",
    image: "/placeholder.svg?height=400&width=400"
  }
]

export function InterestsSection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Interests
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <PolaroidItem key={interest.name} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PolaroidItem({ interest, index }: { interest: Interest; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.2 } }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={interest.image}
          alt={`Image representing ${interest.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>
      <div className="p-4 bg-gray-800">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          {interest.name}
        </h3>
        <p className="text-gray-300 text-sm">{interest.description}</p>
      </div>
    </motion.div>
  )
}