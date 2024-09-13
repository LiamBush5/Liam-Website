// // import Link from 'next/link'
// // import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// // export default function Footer() {
// //     return (
// //         <footer className="bg-black text-white py-8">
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                 <div className="flex flex-col md:flex-row justify-between items-center">
// //                     <div className="mb-4 md:mb-0">
// //                         <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
// //                             Liam Bush
// //                         </h2>
// //                         <p className="text-gray-400 mt-1">AI Enthusiast | Developer | Innovator</p>
// //                     </div>
// //                     <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0">
// //                         <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
// //                             Experience
// //                         </Link>
// //                         <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
// //                             Education
// //                         </Link>
// //                         <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
// //                             Skills
// //                         </Link>
// //                         <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
// //                             Projects
// //                         </Link>
// //                     </nav>
// //                     <Link
// //                         href="/contact"
// //                         className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
// //                     >
// //                         Get in Touch
// //                     </Link>
// //                 </div>
// //                 <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
// //                     <p className="text-gray-400 text-sm mb-4 md:mb-0">
// //                         © {new Date().getFullYear()} Liam Bush. All rights reserved.
// //                     </p>
// //                     <div className="flex space-x-6">
// //                         <a href="https://github.com/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
// //                             <FaGithub size={24} />
// //                             <span className="sr-only">GitHub</span>
// //                         </a>
// //                         <a href="https://linkedin.com/in/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
// //                             <FaLinkedin size={24} />
// //                             <span className="sr-only">LinkedIn</span>
// //                         </a>
// //                         <a href="https://twitter.com/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
// //                             <FaTwitter size={24} />
// //                             <span className="sr-only">Twitter</span>
// //                         </a>
// //                     </div>
// //                 </div>
// //             </div>
// //         </footer>
// //     )
// // }

// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// export default function Footer() {
//     return (
//         <footer className="bg-black text-white py-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                     <div className="mb-4 md:mb-0">
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
//                             Liam Bush
//                         </h2>
//                         <p className="text-gray-400 mt-1">AI Enthusiast | Developer | Innovator</p>
//                     </div>
//                     <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0">
//                         <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
//                             Experience
//                         </a>
//                         <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
//                             Projects
//                         </a>
//                         <a href="#interests" className="text-gray-300 hover:text-white transition-colors">
//                             Interests
//                         </a>
//                     </nav>
//                     <a
//                         href="#contact"
//                         className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
//                     >
//                         Get in Touch
//                     </a>
//                 </div>
//                 <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
//                     <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                         © {new Date().getFullYear()} Liam Bush. All rights reserved.
//                     </p>
//                     <div className="flex space-x-6">
//                         <a href="https://github.com/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//                             <FaGithub size={24} />
//                             <span className="sr-only">GitHub</span>
//                         </a>
//                         <a href="https://linkedin.com/in/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//                             <FaLinkedin size={24} />
//                             <span className="sr-only">LinkedIn</span>
//                         </a>
//                         <a href="https://twitter.com/liambush" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//                             <FaTwitter size={24} />
//                             <span className="sr-only">Twitter</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                            Liam Bush
                        </h2>
                        <p className="text-gray-400 mt-1">Upenn Senior | Software Engineer </p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0">
                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                            Experience
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>
                        <a href="#interests" className="text-gray-300 hover:text-white transition-colors">
                            Interests
                        </a>
                    </nav>
                    <a
                        href="mailto:wbush@seas.upenn.edu"
                        className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                    >
                        Get in Touch
                    </a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Liam Bush. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://github.com/LiamBush5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/liam-bush/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:wbush@seas.upenn.edu" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}