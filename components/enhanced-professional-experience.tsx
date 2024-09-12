'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { CalendarIcon, MapPinIcon, ChevronUpIcon, AwardIcon, BriefcaseIcon, SparklesIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TimelineItem {
  company: string
  logo: string
  position: string
  location: string
  date: string
  achievements: string[]
  skills: string[]
}

const timelineData: TimelineItem[] = [
  {
    company: "Valiant Solutions",
    logo: "/images/val.jpeg",
    position: "Technical Product Management Intern",
    location: "Washington, DC",
    date: "Summer 2024",
    achievements: [
      "Cut proposal writing time by 70%, saving $300K+ annually, by developing RAG AI models on 1,500+ GSA proposals and 100+ legal documents, now handling 5,000+ queries/month.",
      "Integrated an AI Q&A analytics dashboard to boost model accuracy and deliver real-time insights to the C-suite.",
      "Led end-to-end product development initiatives, conducting 20+ stakeholder interviews across 10 departments, identified 57 innovations and 56 areas for potential innovation.",
      "Authored 10 comprehensive innovation reports capturing insights and improvements to enhance proposal writing team's capability and cross-team communication.",



    ],
    skills: ["Product Management", "Technical Leadership"]
  },
  {
    company: "Valiant Solutions",
    logo: "/images/val.jpeg",
    position: "AI/ML Intern",
    location: "Washington, DC",
    date: "Summer 2023/Academic Year 2023-2024",
    achievements: [
      "Independently architected and implemented a full-stack, enterprise AI model using React, JavaScript, Python, Pinecone DB hosted on DigitalOcean droplet and EC2 instance.",
      "Built AI model training dashboard, enabling users to create/train models on PDF, XML, TXT files in under 2 minutes.",
      "Presented a keynote on AI integration strategies to executives and 100+ employees at annual meeting."
    ],
    skills: ["AI/ML", "Full-stack Development", "Product Development", "Data Analytics"]
  },
  {
    company: "6th Man Ventures",
    logo: "/images/6th.jpeg",
    position: "Investment Intern",
    location: "NY, NY",
    date: "Summer 2022/Academic Year 2022",
    achievements: [
      "Authorized 20+ investment memos and conducted due diligence through meetings with founders and engineers.",
      "Published a research paper on zero knowledge proofs (ZKP) and led internal seminars on implementation best practices."
    ],
    skills: ["Investment Analysis", "Due Diligence", "Blockchain Technology"]
  },
  {
    company: "Freeware4Kids",
    logo: "/images/f2.png",
    position: "Founder",
    location: "Wyoming, DE",
    date: "2018 - 2022",
    achievements: [
      "Facilitated collection of gently used, outdated laptops and converted them from Windows to Chrome OS.",
      "Distributed 350+ upcycled devices ($37,000 worth) to students in need across 8 distribution events."
    ],
    skills: ["Entrepreneurship", "Non-profit Management", "Community Outreach"]
  }
]

const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }
  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12 last:mb-0 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:to-purple-500"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-purple-500"
      />
      <motion.div
        className="flex items-center mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 mr-4 rounded-full" />
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{item.company}</h3>
          <p className="text-lg text-purple-300">{item.position}</p>
        </div>
      </motion.div>
      <div className="flex flex-wrap gap-4 mb-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-sm text-gray-400 flex items-center cursor-help">
                <MapPinIcon className="w-4 h-4 mr-1" />
                {item.location}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Work Location</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-sm text-gray-400 flex items-center cursor-help">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {item.date}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Employment Period</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {item.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-900 rounded-full cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleConfetti}
          >
            {skill}
          </motion.span>
        ))}
      </div>
      {item.achievements.length > 0 && (
        <div>
          <AnimatePresence initial={false}>
            <motion.ul
              initial="collapsed"
              animate={isExpanded ? "open" : "collapsed"}
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="mt-4 space-y-3 overflow-hidden"
            >
              {item.achievements.map((achievement, achievementIndex) => (
                <motion.li
                  key={achievementIndex}
                  variants={{
                    collapsed: { opacity: 0, y: -10 },
                    open: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                  className="text-sm text-gray-300 bg-gray-800 p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
                  whileHover={{ scale: 1.02, backgroundColor: "#1F2937" }}
                >
                  <AwardIcon className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            size="sm"
            className="mt-2 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 transition-colors duration-200"
          >
            {isExpanded ? 'Hide' : 'Show'} Achievements
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUpIcon className="ml-1 w-4 h-4" />
            </motion.div>
          </Button>
        </div>
      )}
    </motion.div>
  )
}

export function EnhancedProfessionalExperience() {
  const [activeCompany, setActiveCompany] = useState('')
  const sectionRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCompany(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const elements = document.querySelectorAll('.timeline-item')
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  const uniqueCompanies = Array.from(new Set(timelineData.map(item => item.company)))

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>
        <motion.nav
          className="sticky top-0 bg-black/80 backdrop-blur-sm z-10 py-4 mb-8 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex justify-center space-x-4">
            {uniqueCompanies.map((company, index) => (
              <li key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={`#${company.replace(/\s+/g, '-')}`}
                        className={`text-sm font-medium ${activeCompany === company.replace(/\s+/g, '-')
                          ? 'text-purple-400'
                          : 'text-gray-400 hover:text-purple-300'
                          } transition-colors duration-200 flex items-center`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BriefcaseIcon className="w-4 h-4 mr-1" />
                        {company}
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{timelineData.find(item => item.company === company)?.position}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              id={item.company.replace(/\s+/g, '-')}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineItem item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              })
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full"
          >
            <SparklesIcon className="w-5 h-5 mr-2" />
            Celebrate My Journey!
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
// import { CalendarIcon, MapPinIcon, ChevronUpIcon, AwardIcon, BriefcaseIcon, SparklesIcon } from 'lucide-react'
// import { useInView } from 'react-intersection-observer'
// import confetti from 'canvas-confetti'
// import { Button } from "@/components/ui/button"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// interface TimelineItem {
//   company: string
//   logo: string
//   position: string
//   location: string
//   date: string
//   achievements: string[]
//   skills: string[]
// }

// const timelineData: TimelineItem[] = [
//   {
//     company: "Valiant Solutions",
//     logo: "/images/val.jpeg",
//     position: "Technical Product Management Intern",
//     location: "Washington, DC",
//     date: "Summer 2024",
//     achievements: [],
//     skills: ["Product Management", "Technical Leadership"]
//   },
//   {
//     company: "Valiant Solutions",
//     logo: "/images/val.jpeg",
//     position: "AI/ML Intern",
//     location: "Washington, DC",
//     date: "Summer 2023/Academic Year 2023-2024",
//     achievements: [
//       "Cut proposal writing time by 70%, saving $300K+ annually, by developing AI models on 1,500+ GSA proposals and 100+ legal documents, now handling 5,000+ queries/month.",
//       "Independently architected and implemented a full-stack, enterprise AI model using React, JavaScript, Python, Pinecone DB hosted on DigitalOcean droplet and EC2 instance.",
//       "Led end-to-end product development initiatives, conducting 20+ stakeholder interviews across 10 departments, identified 57 innovations and 56 areas for potential innovation.",
//       "Integrated an AI Q&A analytics dashboard to boost model accuracy and deliver real-time insights to the C-suite.",
//       "Authored 10 comprehensive innovation reports capturing insights and improvements to enhance proposal writing team's capability and cross-team communication.",
//       "Built AI model training dashboard, enabling users to create/train models on PDF, XML, TXT files in under 2 minutes.",
//       "Presented a keynote on AI integration strategies to executives and 100+ employees at annual meeting."
//     ],
//     skills: ["AI/ML", "Full-stack Development", "Product Development", "Data Analytics"]
//   },
//   {
//     company: "6th Man Ventures",
//     logo: "/images/6th.jpeg",
//     position: "Investment Intern",
//     location: "NY, NY",
//     date: "Summer 2022/Academic Year 2022",
//     achievements: [
//       "Authorized 20+ investment memos and conducted due diligence through meetings with founders and engineers.",
//       "Published a research paper on zero knowledge proofs (ZKP) and led internal seminars on implementation best practices."
//     ],
//     skills: ["Investment Analysis", "Due Diligence", "Blockchain Technology"]
//   },
//   {
//     company: "Freeware4Kids",
//     logo: "/placeholder.svg?height=50&width=50",
//     position: "Founder",
//     location: "Wyoming, DE",
//     date: "2018 - 2022",
//     achievements: [
//       "Facilitated collection of gently used, outdated laptops and converted them from Windows to Chrome OS.",
//       "Distributed 350+ upcycled devices ($37,000 worth) to students in need across 8 distribution events."
//     ],
//     skills: ["Entrepreneurship", "Non-profit Management", "Community Outreach"]
//   }
// ]

// const AppleThemedTitle = () => {
//   const text = "Professional Experience"

//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * .05,
//         duration: .5,
//         ease: "easeOut",
//         repeat: Infinity,
//         repeatDelay: 1.5,
//         repeatType: "reverse" as const,
//       },
//     }),
//   }

//   return (
//     <motion.h2
//       initial="hidden"
//       animate="visible"
//       className="text-4xl font-bold mb-16 text-center"
//     >
//       {text.split('').map((char, index) => (
//         <motion.span
//           key={`${char}-${index}`}
//           variants={letterVariants}
//           custom={index}
//           className="inline-block"
//           style={{
//             background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </motion.span>
//       ))}
//     </motion.h2>
//   )
// }

// const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
//   const [isExpanded, setIsExpanded] = useState(true)
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   })
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

//   const handleConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     })
//   }

//   return (
//     <motion.div
//       ref={ref}
//       style={{ opacity, scale }}
//       initial={{ opacity: 0, x: -50 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className="mb-12 last:mb-0 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:to-purple-500"
//     >
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={inView ? { scale: 1 } : {}}
//         transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
//         className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-purple-500"
//       />
//       <motion.div
//         className="flex items-center mb-4"
//         whileHover={{ scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//       >
//         <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 mr-4 rounded-full" />
//         <div>
//           <h3 className="text-2xl font-bold text-white mb-1">{item.company}</h3>
//           <p className="text-lg text-purple-300">{item.position}</p>
//         </div>
//       </motion.div>
//       <div className="flex flex-wrap gap-4 mb-4">
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <p className="text-sm text-gray-400 flex items-center cursor-help">
//                 <MapPinIcon className="w-4 h-4 mr-1" />
//                 {item.location}
//               </p>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Work Location</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <p className="text-sm text-gray-400 flex items-center cursor-help">
//                 <CalendarIcon className="w-4 h-4 mr-1" />
//                 {item.date}
//               </p>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Employment Period</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </div>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {item.skills.map((skill, skillIndex) => (
//           <motion.span
//             key={skillIndex}
//             className="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-900 rounded-full cursor-pointer"
//             whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
//             whileTap={{ scale: 0.9 }}
//             onClick={handleConfetti}
//           >
//             {skill}
//           </motion.span>
//         ))}
//       </div>
//       {item.achievements.length > 0 && (
//         <div>
//           <AnimatePresence initial={false}>
//             <motion.ul
//               initial="collapsed"
//               animate={isExpanded ? "open" : "collapsed"}
//               exit="collapsed"
//               variants={{
//                 open: { opacity: 1, height: "auto" },
//                 collapsed: { opacity: 0, height: 0 }
//               }}
//               transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//               className="mt-4 space-y-3 overflow-hidden"
//             >
//               {item.achievements.map((achievement, achievementIndex) => (
//                 <motion.li
//                   key={achievementIndex}
//                   variants={{
//                     collapsed: { opacity: 0, y: -10 },
//                     open: { opacity: 1, y: 0 }
//                   }}
//                   transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
//                   className="text-sm text-gray-300 bg-gray-800 p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start"
//                   whileHover={{ scale: 1.02, backgroundColor: "#1F2937" }}
//                 >
//                   <AwardIcon className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
//                   <span>{achievement}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </AnimatePresence>
//           <Button
//             onClick={() => setIsExpanded(!isExpanded)}
//             variant="ghost"
//             size="sm"
//             className="mt-2 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 transition-colors duration-200"
//           >
//             {isExpanded ? 'Hide' : 'Show'} Achievements
//             <motion.div
//               animate={{ rotate: isExpanded ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ChevronUpIcon className="ml-1 w-4 h-4" />
//             </motion.div>
//           </Button>
//         </div>
//       )}
//     </motion.div>
//   )
// }

// export function EnhancedProfessionalExperience() {
//   const [activeCompany, setActiveCompany] = useState('')
//   const sectionRef = useRef(null)
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveCompany(entry.target.id)
//           }
//         })
//       },
//       { threshold: 0.5 }
//     )

//     const elements = document.querySelectorAll('.timeline-item')
//     elements.forEach((el) => observer.observe(el))

//     return () => elements.forEach((el) => observer.unobserve(el))
//   }, [])

//   const uniqueCompanies = Array.from(new Set(timelineData.map(item => item.company)))

//   return (
//     <section ref={sectionRef} className="w-full bg-black text-white py-20 relative overflow-hidden">
//       <motion.div
//         className="absolute inset-0 z-0"
//         initial={{ backgroundPosition: "0 0" }}
//         animate={{ backgroundPosition: "100% 100%" }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         style={{
//           backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//         }}
//       />
//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         <AppleThemedTitle />
//         <motion.nav
//           className="sticky top-0 bg-black/80 backdrop-blur-sm z-10 py-4 mb-8 rounded-lg"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <ul className="flex justify-center space-x-4">
//             {uniqueCompanies.map((company, index) => (
//               <li key={index}>
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <motion.a
//                         href={`#${company.replace(/\s+/g, '-')}`}
//                         className={`text-sm font-medium ${activeCompany === company.replace(/\s+/g, '-')
//                           ? 'text-purple-400'
//                           : 'text-gray-400 hover:text-purple-300'
//                           } transition-colors duration-200 flex items-center`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <BriefcaseIcon className="w-4 h-4 mr-1" />
//                         {company}
//                       </motion.a>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>{timelineData.find(item => item.company === company)?.position}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </li>
//             ))}
//           </ul>
//         </motion.nav>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           {timelineData.map((item, index) => (
//             <motion.div
//               key={index}
//               id={item.company.replace(/\s+/g, '-')}
//               className="timeline-item"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <TimelineItem item={item} index={index} />
//             </motion.div>
//           ))}
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="mt-12 text-center"
//         >
//           <Button
//             onClick={() => {
//               confetti({
//                 particleCount: 100,
//                 spread: 70,
//                 origin: { y: 0.6 }
//               })
//             }}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full"
//           >
//             <SparklesIcon className="w-5 h-5 mr-2" />
//             Celebrate My Journey!
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }