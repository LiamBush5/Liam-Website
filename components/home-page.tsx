// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import { Github, Linkedin, Twitter } from 'lucide-react'
// import Image from 'next/image'
// import { EnhancedProfessionalExperience } from './enhanced-professional-experience'
// import { UpdatedAutomatedScrollingProjectShowcase } from './updated-automated-scrolling-project-showcase'
// import { InterestsSection } from './interests-section'
// import Footer from './footer'  // Changed to default import

// export function HomePage() {
//   const [text] = useTypewriter({
//     words: ['Computer Science Student at UPenn', 'AI Enthusiast', 'Software Engineer'],
//     loop: 0,
//     typeSpeed: 50,
//     deleteSpeed: 30,
//   })

//   const { scrollY } = useScroll()
//   const opacity = useTransform(scrollY, [0, 300], [1, 0])
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8])

//   return (
//     <div className="bg-black text-white font-sans">
//       <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
//         <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} // Added click event
//           >
//             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//               <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex space-x-6"
//           >
//             <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
//             <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
//             <a href="#interests" className="hover:text-gray-300 transition-colors">Interests</a>
//           </motion.div>
//         </nav>
//       </header>

//       <main>
//         <section className="min-h-screen flex flex-col justify-center items-center text-center relative pt-24 px-6 max-w-6xl mx-auto">
//           <motion.div
//             style={{ opacity, scale }}
//             className="relative z-10"
//           >
//             {/* Profile picture */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="mb-12 w-64 h-64 mx-auto relative overflow-hidden rounded-full border-4 border-white shadow-lg"
//             >
//               <div className="absolute inset-0 scale-125">
//                 <Image
//                   src="/images/p.png"
//                   alt="Liam Bush"
//                   layout="fill"
//                   objectFit="cover"
//                   objectPosition="center"
//                   className="rounded-full"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="mb-8"
//             >
//               <h2 className="text-4xl md:text-6xl font-bold mb-4">
//                 Hi, I'm
//               </h2>
//               <h1 className="text-6xl md:text-8xl font-bold mb-6">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//                   Liam Bush
//                 </span>
//               </h1>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//               className="text-xl md:text-3xl font-light mb-8"
//             >
//               <span>{text}</span>
//               <Cursor cursorStyle="_" />
//             </motion.div>

//             {/* Call-to-action button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.1 }}
//               className="mb-8"
//             >
//               <a
//                 href="#contact"
//                 className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
//               >
//                 Get in Touch
//               </a>
//             </motion.div>

//             {/* Social media links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.3 }}
//               className="flex justify-center space-x-6"
//             >
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                 <Github size={24} />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                 <Linkedin size={24} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
//                 <Twitter size={24} />
//               </a>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Add id attributes to these sections */}
//         <section id="experience">
//           <EnhancedProfessionalExperience />
//         </section>
//         <section id="projects">
//           <UpdatedAutomatedScrollingProjectShowcase />
//         </section>
//         <section id="interests">
//           <InterestsSection />
//         </section>
//         <Footer />
//       </main>
//     </div>
//   )
// }

// HomePage.js
import { Header } from './Header'
import { Intro } from './Intro'
import { EnhancedProfessionalExperience } from './enhanced-professional-experience'
import { UpdatedAutomatedScrollingProjectShowcase } from './updated-automated-scrolling-project-showcase'
import { InterestsSection } from './interests-section'
import Footer from './footer'

export function HomePage() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Intro />
        <section id="experience">
          <EnhancedProfessionalExperience />
        </section>
        <section id="projects">
          <UpdatedAutomatedScrollingProjectShowcase />
        </section>
        <section id="interests">
          <InterestsSection />
        </section>
        <Footer />
      </main>
    </div>
  )
}