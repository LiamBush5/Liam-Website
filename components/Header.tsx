// // // Header.js
// // 'use client'

// // import { motion } from 'framer-motion'

// // export function Header() {
// //     return (
// //         <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
// //             <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
// //                 <motion.div
// //                     initial={{ opacity: 0, y: -20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                     onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
// //                 >
// //                     <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                         <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //                         <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //                         <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //                     </svg>
// //                 </motion.div>
// //                 <motion.div
// //                     initial={{ opacity: 0, y: -20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5, delay: 0.2 }}
// //                     className="flex space-x-6"
// //                 >
// //                     <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
// //                     <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
// //                     <a href="#interests" className="hover:text-gray-300 transition-colors">Interests</a>
// //                 </motion.div>
// //             </nav>
// //         </header>
// //     )
// // }

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, useAnimation } from 'framer-motion'
// import Link from 'next/link'
// import { ChevronDown, ChevronUp } from 'lucide-react'

// export function Header() {
//     const [isScrolled, setIsScrolled] = useState(false)
//     const [isAtBottom, setIsAtBottom] = useState(false)
//     const controls = useAnimation()

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrolled = window.scrollY > 20
//             setIsScrolled(scrolled)

//             const windowHeight = window.innerHeight
//             const documentHeight = document.documentElement.scrollHeight
//             const scrollTop = window.scrollY || document.documentElement.scrollTop
//             const atBottom = windowHeight + scrollTop >= documentHeight - 50

//             setIsAtBottom(atBottom)
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     useEffect(() => {
//         controls.start(i => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: i * 0.1 }
//         }))
//     }, [controls])

//     const handleArrowClick = () => {
//         if (isAtBottom) {
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//         } else {
//             window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
//         }
//     }

//     return (
//         <motion.header
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : ''}`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//         >
//             <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
//                 <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={handleArrowClick}
//                     className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
//                 >
//                     <motion.div
//                         animate={{ rotate: isAtBottom ? 180 : 0 }}
//                         transition={{ type: 'spring', stiffness: 200, damping: 10 }}
//                     >
//                         {isAtBottom ? <ChevronUp className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
//                     </motion.div>
//                 </motion.button>
//                 <div className="flex space-x-6">
//                     {['Experience', 'Projects', 'Interests'].map((item, i) => (
//                         <motion.div
//                             key={item}
//                             custom={i}
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={controls}
//                         >
//                             <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
//                         </motion.div>
//                     ))}
//                 </div>
//             </nav>
//         </motion.header>
//     )
// }

// function NavLink({ href, children }) {
//     return (
//         <Link href={href} passHref>
//             <motion.a
//                 className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 {children}
//             </motion.a>
//         </Link>
//     )
// }

'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isAtBottom, setIsAtBottom] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20
            setIsScrolled(scrolled)

            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const atBottom = windowHeight + scrollTop >= documentHeight - 50

            setIsAtBottom(atBottom)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        }))
    }, [controls])

    const handleArrowClick = () => {
        if (isAtBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }
    }

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleArrowClick}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
                >
                    <motion.div
                        animate={{ rotate: isAtBottom ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M8 12L12 16L16 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                            />
                            <motion.path
                                d="M12 8V16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                            />
                        </svg>
                    </motion.div>
                </motion.button>
                <div className="flex space-x-6">
                    {['Experience', 'Projects', 'Interests'].map((item, i) => (
                        <motion.div
                            key={item}
                            custom={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={controls}
                        >
                            <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </motion.header>
    )
}

function NavLink({ href, children }) {
    return (
        <Link href={href} passHref>
            <motion.a
                className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        </Link>
    )
}