'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Connect Four",
    description: "Developed a Connect Four game featuring multiple AI opponents with varying strategies: Random, Defensive, Minimax, and Alpha-Beta Pruning algorithms, allowing players to compete against different levels of AI complexity.",
    image: "/images/connect4.webp",
    technologies: ["Python", "AI", "JavaScript", "Node.js"],
  },
  {
    id: 5,
    title: "Freeware4Kids",
    description: "Won Delaware Youth Volunteer of The Year",
    image: "/images/freeware2.png",
    technologies: ["Chrome OS"],
  },
  {
    id: 6,
    title: "AI Academy Service Project",
    description: "Created and implemented lesson plans for two one-week courses to instruct high school students on how to build Python AI models to play popular games such as Google Dino Run and Flappy Bird.",
    image: "/images/cr.jpg",
    technologies: ["Python, Lesson Planning"],
  },
  {
    id: 2,
    title: "Don't Eat The Onion: Satirical Headline Detector",
    description: "Implemented multiple ML models (Logistic Regression, Random Forest, 1D CNN, LSTM, GPT variants) for classifying 'The Onion' vs. real headlines, achieving 87% accuracy with 1D CNN and LSTM models.",
    image: "/images/onion.png",
    technologies: ["Python", "TensorFlow", "scikit-learn", "NLTK", "OpenAI API"],
  },
  {
    id: 3,
    title: "InstaLite Social Media Platform",
    description: "Developed a full-stack Instagram-like social media platform with features including user authentication, image posting, friend management, real-time chat, AI-powered content recommendations, and natural language search. Implemented scalable backend services, utilized cloud databases and storage, and integrated advanced AI/ML capabilities for content ranking and search.",
    image: "/images/instalite.png",
    technologies: ["Node.js", "React", "AWS", "Python", "Apache Spark", "Apache Kafka", "TensorFlow", "GPT"],
  },
  {
    id: 4,
    title: "Stamp Collection Manager",
    description: "Developed a full-stack web application for managing and displaying stamp collections, featuring CRUD operations, image uploads to AWS S3, and organization of stamps into sets. The system includes a responsive React frontend with Tailwind CSS for styling, a Node.js/Express backend with Sequelize ORM for database interactions, and RESTful API endpoints for stamp management.",
    image: "/images/stamp.webp",
    technologies: ["React", "Node.js", "Express", "Sequelize", "SQLite", "AWS S3", "Tailwind CSS"],
  },

]

export function UpdatedAutomatedScrollingProjectShowcase() {
  const [loopProjects, setLoopProjects] = useState<Project[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  useEffect(() => {
    setLoopProjects([...projects, ...projects, ...projects])
  }, [])

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!containerRef.current) return;

      const singleSetWidth = containerRef.current.scrollWidth / 3;

      setScrollX((prevScrollX) => {
        const newScrollX = prevScrollX - 1;
        return newScrollX <= -singleSetWidth ? 0 : newScrollX;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleToggleExpand = (id: number) => {
    setExpandedIds((prevIds) => {
      const newIds = new Set(prevIds)
      if (newIds.has(id)) {
        newIds.delete(id)
      } else {
        newIds.add(id)
      }
      return newIds
    })
  }

  return (
    <section className="w-full bg-black text-white py-20 overflow-hidden">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text px-4">
        My Projects
      </h2>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 py-4"
          style={{
            transform: `translateX(${scrollX}px)`,
            width: 'fit-content',
          }}
        >
          {loopProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              isExpanded={expandedIds.has(project.id)}
              onToggleExpand={() => handleToggleExpand(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const maxLength = 100; // Maximum number of characters to show initially

  const truncatedDescription = project.description.slice(0, maxLength) + (project.description.length > maxLength ? '...' : '');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`${isExpanded ? 'h-[600px]' : 'h-[450px]'} transition-all duration-300`}
    >
      <div className="w-[300px] h-full bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden relative">
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-2">
            {project.title}
          </h3>
          <div className="flex-grow mb-4">
            <p className="text-gray-300">
              {isExpanded ? project.description : truncatedDescription}
            </p>
            <button
              onClick={onToggleExpand}
              className="mt-2 text-purple-400 hover:text-purple-300 focus:outline-none"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
          {!isExpanded && (
            <div
              className="relative h-40 mb-4 flex items-center justify-center overflow-visible"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence>
                {isHovered ? (
                  <motion.div
                    key="enlarged-container"
                    className="absolute z-10 rounded-lg shadow-xl bg-gray-800 p-2"
                    initial={{ width: '100%', height: '100%', opacity: 0 }}
                    animate={{ width: '200%', height: '200%', opacity: 1 }}
                    exit={{ width: '100%', height: '100%', opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key="normal"
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
          {isExpanded && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-900 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default UpdatedAutomatedScrollingProjectShowcase;