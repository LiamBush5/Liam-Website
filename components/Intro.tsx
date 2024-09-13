// // 'use client'

// // import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion'
// // import { useTypewriter, Cursor } from 'react-simple-typewriter'
// // import { Github, Linkedin, Twitter } from 'lucide-react'
// // import Image from 'next/image'
// // import { useState, useRef } from 'react'

// // export function Intro() {
// //     const [text] = useTypewriter({
// //         words: ['Computer Science Senior at UPenn', 'AI Enthusiast', 'Software Engineer'],
// //         loop: 0,
// //         typeSpeed: 50,
// //         deleteSpeed: 30,
// //     })

// //     const { scrollY } = useScroll()
// //     const opacity = useTransform(scrollY, [0, 300], [1, 0])
// //     const scale = useTransform(scrollY, [0, 300], [1, 0.8])

// //     const [isHovered, setIsHovered] = useState(false)
// //     const rotateY = useMotionValue(0)
// //     const springConfig = { damping: 20, stiffness: 400 }
// //     const rotateYSpring = useSpring(rotateY, springConfig)

// //     const autoRotate = useRef(0)

// //     useAnimationFrame((t, delta) => {
// //         if (isHovered) {
// //             autoRotate.current += delta * 0.5 // Increase this value for faster spinning
// //             rotateY.set(autoRotate.current % 360)
// //         } else {
// //             // Reset to default position when not hovered
// //             const currentRotation = rotateY.get()
// //             const targetRotation = 0
// //             const diff = targetRotation - currentRotation
// //             if (Math.abs(diff) > 0.1) {
// //                 rotateY.set(currentRotation + diff * 0.1)
// //             } else {
// //                 rotateY.set(targetRotation)
// //             }
// //         }
// //     })

// //     const handleMouseEnter = () => {
// //         setIsHovered(true)
// //     }

// //     const handleMouseLeave = () => {
// //         setIsHovered(false)
// //         autoRotate.current = 0 // Reset auto-rotate counter
// //     }

// //     return (
// //         <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 px-6 max-w-6xl mx-auto">
// //             <motion.div
// //                 style={{ opacity, scale }}
// //                 className="relative z-10"
// //             >
// //                 <motion.div
// //                     initial={{ opacity: 0, scale: 0.5 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ duration: 0.8, delay: 0.5 }}
// //                     className="mb-12 w-64 h-64 mx-auto relative overflow-hidden rounded-full border-4 border-white shadow-lg cursor-pointer"
// //                     onMouseEnter={handleMouseEnter}
// //                     onMouseLeave={handleMouseLeave}
// //                     style={{
// //                         rotateY: rotateYSpring,
// //                         transformStyle: 'preserve-3d',
// //                         perspective: '1000px',
// //                     }}
// //                 >
// //                     <motion.div
// //                         className="absolute inset-0 scale-125"
// //                         style={{
// //                             rotateY: rotateYSpring,
// //                         }}
// //                     >
// //                         <Image
// //                             src="/images/p.png"
// //                             alt="Liam Bush"
// //                             layout="fill"
// //                             objectFit="cover"
// //                             objectPosition="center"
// //                             className="rounded-full"
// //                             priority
// //                         />
// //                     </motion.div>
// //                 </motion.div>

// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 0.7 }}
// //                     className="mb-8"
// //                 >
// //                     <h2 className="text-4xl md:text-6xl font-bold mb-4">
// //                         Hi, I'm
// //                     </h2>
// //                     <h1 className="text-6xl md:text-8xl font-bold mb-6">
// //                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
// //                             Liam Bush
// //                         </span>
// //                     </h1>
// //                 </motion.div>
// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 0.9 }}
// //                     className="text-xl md:text-3xl font-light mb-8"
// //                 >
// //                     <span>{text}</span>
// //                     <Cursor cursorStyle="_" />
// //                 </motion.div>

// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 1.1 }}
// //                     className="mb-8"
// //                 >
// //                     <a
// //                         href="#contact"
// //                         className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
// //                     >
// //                         Get in Touch
// //                     </a>
// //                 </motion.div>

// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 1.3 }}
// //                     className="flex justify-center space-x-6"
// //                 >
// //                     <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
// //                         <Github size={24} aria-label="GitHub" />
// //                     </a>
// //                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
// //                         <Linkedin size={24} aria-label="LinkedIn" />
// //                     </a>
// //                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
// //                         <Twitter size={24} aria-label="Twitter" />
// //                     </a>
// //                 </motion.div>
// //             </motion.div>
// //         </section>
// //     )
// // }

// 'use client'

// import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import { Github, Linkedin, Twitter } from 'lucide-react'
// import Image from 'next/image'
// import { useState, useRef } from 'react'

// export function Intro() {
//     const [text] = useTypewriter({
//         words: ['Computer Science Senior at UPenn', 'AI Enthusiast', 'Software Engineer'],
//         loop: 0,
//         typeSpeed: 50,
//         deleteSpeed: 30,
//     })

//     const { scrollY } = useScroll()
//     const opacity = useTransform(scrollY, [0, 300], [1, 0])
//     const scale = useTransform(scrollY, [0, 300], [1, 0.8])

//     const [isHovered, setIsHovered] = useState(false)
//     const rotateY = useMotionValue(0)
//     const springConfig = { damping: 20, stiffness: 400 }
//     const rotateYSpring = useSpring(rotateY, springConfig)

//     const autoRotate = useRef(0)

//     useAnimationFrame((t, delta) => {
//         if (isHovered) {
//             autoRotate.current += delta * 0.5 // Increase this value for faster spinning
//             rotateY.set(autoRotate.current % 360)
//         } else {
//             // Reset to default position when not hovered
//             const currentRotation = rotateY.get()
//             const targetRotation = 0
//             const diff = targetRotation - currentRotation
//             if (Math.abs(diff) > 0.1) {
//                 rotateY.set(currentRotation + diff * 0.1)
//             } else {
//                 rotateY.set(targetRotation)
//             }
//         }
//     })

//     const handleMouseEnter = () => {
//         setIsHovered(true)
//     }

//     const handleMouseLeave = () => {
//         setIsHovered(false)
//         autoRotate.current = 0 // Reset auto-rotate counter
//     }

//     return (
//         <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 px-6 max-w-6xl mx-auto">
//             <motion.div
//                 style={{ opacity, scale }}
//                 className="relative z-10"
//             >
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.5 }}
//                     className="mb-12 w-64 h-64 mx-auto relative overflow-hidden rounded-full border-4 border-white shadow-lg cursor-pointer"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     style={{
//                         rotateY: rotateYSpring,
//                         transformStyle: 'preserve-3d',
//                         perspective: '1000px',
//                     }}
//                 >
//                     <motion.div
//                         className="absolute inset-0 scale-125"
//                         style={{
//                             rotateY: rotateYSpring,
//                         }}
//                     >
//                         <Image
//                             src="/images/p.png"
//                             alt="Liam Bush"
//                             layout="fill"
//                             objectFit="cover"
//                             objectPosition="center"
//                             className="rounded-full"
//                             priority
//                         />
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.7 }}
//                     className="mb-8"
//                 >
//                     <h2 className="text-4xl md:text-6xl font-bold mb-4">
//                         Hi, I&apos;m
//                     </h2>
//                     <h1 className="text-6xl md:text-8xl font-bold mb-6">
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//                             Liam Bush
//                         </span>
//                     </h1>
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.9 }}
//                     className="text-xl md:text-3xl font-light mb-8"
//                 >
//                     <span>{text}</span>
//                     <Cursor cursorStyle="_" />
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 1.1 }}
//                     className="mb-8"
//                 >
//                     <a
//                         href="#contact"
//                         className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
//                     >
//                         Get in Touch
//                     </a>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 1.3 }}
//                     className="flex justify-center space-x-6"
//                 >
//                     <a href="https://github.com/LiamBush5" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                         <Github size={24} aria-label="GitHub" />
//                     </a>
//                     <a href="https://www.linkedin.com/in/liam-bush/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                         <Linkedin size={24} aria-label="LinkedIn" />
//                     </a>
//                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                         <Twitter size={24} aria-label="Twitter" />
//                     </a>
//                 </motion.div>
//             </motion.div>
//         </section>
//     )
// }

'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'

export function Intro() {
    const [text] = useTypewriter({
        words: ['Computer Science Senior at UPenn', 'AI Enthusiast', 'Software Engineer'],
        loop: 0,
        typeSpeed: 50,
        deleteSpeed: 30,
    })

    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const scale = useTransform(scrollY, [0, 300], [1, 0.8])

    const [isHovered, setIsHovered] = useState(false)
    const rotateY = useMotionValue(0)
    const springConfig = { damping: 20, stiffness: 400 }
    const rotateYSpring = useSpring(rotateY, springConfig)

    const autoRotate = useRef(0)

    useAnimationFrame((t, delta) => {
        if (isHovered) {
            autoRotate.current += delta * 0.5
            rotateY.set(autoRotate.current % 360)
        } else {
            const currentRotation = rotateY.get()
            const targetRotation = 0
            const diff = targetRotation - currentRotation
            if (Math.abs(diff) > 0.1) {
                rotateY.set(currentRotation + diff * 0.1)
            } else {
                rotateY.set(targetRotation)
            }
        }
    })

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        autoRotate.current = 0
    }

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 px-6 max-w-6xl mx-auto">
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-12 w-64 h-64 mx-auto relative overflow-hidden rounded-full border-4 border-white shadow-lg cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateY: rotateYSpring,
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                    }}
                >
                    <motion.div
                        className="absolute inset-0 scale-125"
                        style={{
                            rotateY: rotateYSpring,
                        }}
                    >
                        <Image
                            src="/images/p.png"
                            alt="Liam Bush"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-full"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I&apos;m
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            Liam Bush
                        </span>
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-xl md:text-3xl font-light mb-8"
                >
                    <span>{text}</span>
                    <Cursor cursorStyle="_" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="mb-8"
                >
                    <a
                        href="mailto:wbush@seas.upenn.edu"
                        className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex justify-center space-x-6"
                >
                    <a href="https://github.com/LiamBush5" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                        <Github size={24} aria-label="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/liam-bush/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                        <Linkedin size={24} aria-label="LinkedIn" />
                    </a>
                    <a href="mailto:wbush@seas.upenn.edu" className="text-white hover:text-gray-300 transition-colors">
                        <Mail size={24} aria-label="Email" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}