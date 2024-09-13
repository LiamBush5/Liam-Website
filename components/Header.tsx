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