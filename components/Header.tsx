// // // 'use client'

// // // import { useState, useEffect, ReactNode } from 'react'
// // // import { motion, useAnimation } from 'framer-motion'
// // // import Link from 'next/link'

// // // export function Header() {
// // //     const [isScrolled, setIsScrolled] = useState(false)
// // //     const [isAtBottom, setIsAtBottom] = useState(false)
// // //     const controls = useAnimation()

// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             const scrolled = window.scrollY > 20
// // //             setIsScrolled(scrolled)

// // //             const windowHeight = window.innerHeight
// // //             const documentHeight = document.documentElement.scrollHeight
// // //             const scrollTop = window.scrollY || document.documentElement.scrollTop
// // //             const atBottom = windowHeight + scrollTop >= documentHeight - 50

// // //             setIsAtBottom(atBottom)
// // //         }

// // //         window.addEventListener('scroll', handleScroll)
// // //         return () => window.removeEventListener('scroll', handleScroll)
// // //     }, [])

// // //     useEffect(() => {
// // //         controls.start(i => ({
// // //             opacity: 1,
// // //             y: 0,
// // //             transition: { delay: i * 0.1 }
// // //         }))
// // //     }, [controls])

// // //     const handleArrowClick = () => {
// // //         if (isAtBottom) {
// // //             window.scrollTo({ top: 0, behavior: 'smooth' })
// // //         } else {
// // //             window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
// // //         }
// // //     }

// // //     return (
// // //         <motion.header
// // //             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : ''}`}
// // //             initial={{ y: -100 }}
// // //             animate={{ y: 0 }}
// // //             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
// // //         >
// // //             <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
// // //                 <motion.button
// // //                     whileHover={{ scale: 1.1 }}
// // //                     whileTap={{ scale: 0.9 }}
// // //                     onClick={handleArrowClick}
// // //                     className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
// // //                     aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
// // //                 >
// // //                     <motion.div
// // //                         animate={{ rotate: isAtBottom ? 180 : 0 }}
// // //                         transition={{ type: 'spring', stiffness: 200, damping: 10 }}
// // //                     >
// // //                         <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                             <motion.path
// // //                                 d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                                 initial={{ pathLength: 0 }}
// // //                                 animate={{ pathLength: 1 }}
// // //                                 transition={{ duration: 2, ease: "easeInOut" }}
// // //                             />
// // //                             <motion.path
// // //                                 d="M8 12L12 16L16 12"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                                 initial={{ pathLength: 0 }}
// // //                                 animate={{ pathLength: 1 }}
// // //                                 transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
// // //                             />
// // //                             <motion.path
// // //                                 d="M12 8V16"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                                 initial={{ pathLength: 0 }}
// // //                                 animate={{ pathLength: 1 }}
// // //                                 transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
// // //                             />
// // //                         </svg>
// // //                     </motion.div>
// // //                 </motion.button>
// // //                 <div className="flex space-x-6">
// // //                     {['Experience', 'Projects', 'Interests', 'Resume'].map((item, i) => (
// // //                         <motion.div
// // //                             key={item}
// // //                             custom={i}
// // //                             initial={{ opacity: 0, y: -20 }}
// // //                             animate={controls}
// // //                         >
// // //                             <NavLink
// // //                                 href={item === 'Resume'
// // //                                     ? 'https://docs.google.com/document/d/1GCMiVdIjd8r_NSVbPzVulySffUVBHNPs97sW2XZs0ac/edit?usp=sharing'
// // //                                     : `#${item.toLowerCase()}`}
// // //                                 external={item === 'Resume'}
// // //                             >
// // //                                 {item}
// // //                             </NavLink>
// // //                         </motion.div>
// // //                     ))}
// // //                 </div>
// // //             </nav>
// // //         </motion.header>
// // //     )
// // // }

// // // interface NavLinkProps {
// // //     href: string;
// // //     children: ReactNode;
// // //     external?: boolean;
// // // }

// // // function NavLink({ href, children, external = false }: NavLinkProps) {
// // //     const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

// // //     return (
// // //         <Link href={href} passHref>
// // //             <motion.a
// // //                 className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
// // //                 whileHover={{ scale: 1.1 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 {...linkProps}
// // //             >
// // //                 {children}
// // //             </motion.a>
// // //         </Link>
// // //     )
// // // }

// // 'use client'

// // import { useState, useEffect, ReactNode } from 'react'
// // import { motion, useAnimation } from 'framer-motion'
// // import Link from 'next/link'

// // export function Header() {
// //     const [isScrolled, setIsScrolled] = useState(false)
// //     const controls = useAnimation()

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const scrolled = window.scrollY > 20
// //             setIsScrolled(scrolled)
// //         }

// //         window.addEventListener('scroll', handleScroll)
// //         return () => window.removeEventListener('scroll', handleScroll)
// //     }, [])

// //     useEffect(() => {
// //         controls.start(i => ({
// //             opacity: 1,
// //             y: 0,
// //             transition: { delay: i * 0.1 }
// //         }))
// //     }, [controls])

// //     return (
// //         <motion.header
// //             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : ''}`}
// //             initial={{ y: -100 }}
// //             animate={{ y: 0 }}
// //             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
// //         >
// //             <nav className="flex justify-end items-center p-6 max-w-6xl mx-auto">
// //                 <div className="flex space-x-6">
// //                     {['Experience', 'Projects', 'Interests', 'Resume'].map((item, i) => (
// //                         <motion.div
// //                             key={item}
// //                             custom={i}
// //                             initial={{ opacity: 0, y: -20 }}
// //                             animate={controls}
// //                         >
// //                             <NavLink
// //                                 href={item === 'Resume'
// //                                     ? 'https://docs.google.com/document/d/1GCMiVdIjd8r_NSVbPzVulySffUVBHNPs97sW2XZs0ac/edit?usp=sharing'
// //                                     : `#${item.toLowerCase()}`}
// //                                 external={item === 'Resume'}
// //                             >
// //                                 {item}
// //                             </NavLink>
// //                         </motion.div>
// //                     ))}
// //                 </div>
// //             </nav>
// //         </motion.header>
// //     )
// // }

// // interface NavLinkProps {
// //     href: string;
// //     children: ReactNode;
// //     external?: boolean;
// // }

// // function NavLink({ href, children, external = false }: NavLinkProps) {
// //     const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

// //     return (
// //         <Link href={href} passHref>
// //             <motion.a
// //                 className="text-sm font-medium hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 {...linkProps}
// //             >
// //                 {children}
// //             </motion.a>
// //         </Link>
// //     )
// // }

// 'use client'

// import { useState, useEffect, ReactNode } from 'react'
// import { motion, useAnimation } from 'framer-motion'
// import Link from 'next/link'

// export function Header() {
//     const [isScrolled, setIsScrolled] = useState(false)
//     const controls = useAnimation()

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrolled = window.scrollY > 20
//             setIsScrolled(scrolled)
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

//     return (
//         <motion.header
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
//                 }`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//         >
//             <nav className="flex justify-end items-center p-6 max-w-6xl mx-auto">
//                 <div className="flex space-x-6">
//                     {['Experience', 'Projects', 'Interests', 'Resume'].map((item, i) => (
//                         <motion.div
//                             key={item}
//                             custom={i}
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={controls}
//                         >
//                             <NavLink
//                                 href={item === 'Resume'
//                                     ? 'https://docs.google.com/document/d/1GCMiVdIjd8r_NSVbPzVulySffUVBHNPs97sW2XZs0ac/edit?usp=sharing'
//                                     : `#${item.toLowerCase()}`}
//                                 external={item === 'Resume'}
//                             >
//                                 {item}
//                             </NavLink>
//                         </motion.div>
//                     ))}
//                 </div>
//             </nav>
//         </motion.header>
//     )
// }

// interface NavLinkProps {
//     href: string
//     children: ReactNode
//     external?: boolean
// }

// function NavLink({ href, children, external = false }: NavLinkProps) {
//     const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

//     return (
//         <Link href={href} passHref>
//             <motion.a
//                 className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 {...linkProps}
//             >
//                 {children}
//             </motion.a>
//         </Link>
//     )
// }

'use client'

import { useState, useEffect, ReactNode } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20
            setIsScrolled(scrolled)
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

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <nav className="flex justify-end items-center p-6 max-w-6xl mx-auto">
                <div className="flex space-x-6">
                    {['Experience', 'Projects', 'Interests', 'Resume'].map((item, i) => (
                        <motion.div
                            key={item}
                            custom={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={controls}
                        >
                            <NavLink
                                href={item === 'Resume'
                                    ? 'https://docs.google.com/document/d/1GCMiVdIjd8r_NSVbPzVulySffUVBHNPs97sW2XZs0ac/edit?usp=sharing'
                                    : `#${item.toLowerCase()}`}
                                external={item === 'Resume'}
                            >
                                {item}
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </motion.header>
    )
}

interface NavLinkProps {
    href: string
    children: ReactNode
    external?: boolean
}

function NavLink({ href, children, external = false }: NavLinkProps) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}

    return (
        <Link href={href} passHref>
            <motion.a
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...linkProps}
            >
                {children}
            </motion.a>
        </Link>
    )
}