'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  paper?: string;
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "CrashPad",
    description: "Built a secure, real-time student sublet and item marketplace using .edu verification with OAuth 2.0, Supabase SQL, Mapbox, Next.js, TypeScript, Tailwind CSS, and WebSockets.",
    image: "/images/crashpad.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "OAuth 2.0", "Tailwind CSS", "WebSockets", "Mapbox"],
    // github: "https://github.com/yourusername/crashpad",
    demo: "https://crashpad-five.vercel.app/login",
    highlights: [
      "Implemented secure .edu email verification with OAuth 2.0",
      "Built real-time messaging and notifications using WebSockets",
      "Created interactive map interface with Mapbox for property listings"
    ]
  },
  {
    id: 2,
    title: "Medical Q&A LLM",
    description: "Optimized LLaMA-3.2-7B for edge deployment, reducing model size from 25 GB to 1.3GB and improving accuracy of 51% to 71% on Pubmed dataset using 4-bit quantization and LoRA fine-tuning, enabling fast, private, and accurate medical Q&A.",
    image: "/images/medicalllm.png",
    technologies: ["PyTorch", "LLaMA", "LoRA", "PEFT", "Quantization"],
    github: "https://github.com/LiamBush5/Medical-Q-A-LLM",
    paper: "/papers/Final Paper.pdf",
    highlights: [
      "Published research paper on efficient LLM optimization techniques",
      "Reduced model size by 95% (25GB to 1.3GB) while improving accuracy",
      "Increased accuracy from 51% to 71% on Pubmed dataset",
      "Implemented 4-bit quantization and LoRA fine-tuning techniques"
    ]
  },
  {
    id: 3,
    title: "AI Academy Service Project",
    description: "Created and implemented lesson plans for two one-week courses to instruct high school students on how to build Python AI models to play popular games such as Google Dino Run and Flappy Bird.",
    image: "/images/cr.jpg",
    technologies: ["Python", "Lesson Planning", "AI"],
    highlights: [
      "Developed comprehensive curriculum for 2 week-long courses",
      "Taught 30+ high school students to build AI game agents",
      "100% of students successfully completed their projects"
    ]
  },
  {
    id: 4,
    title: "AI Satirical Headline Classifier",
    description: "Achieved 87% accuracy in classifying 'The Onion' vs. real headlines using a LSTM model. Implemented multiple ML models including Logistic Regression, Random Forest, 1D CNN, LSTM, and GPT variants.",
    image: "/images/onion3.png",
    technologies: ["Python", "Tensorimage.pngFlow", "scikit-learn", "NLTK", "OpenAI API"],
    github: "https://github.com/LiamBush5/Satirical-Headline-Classifier",
    paper: "/papers/onion.pdf",
    highlights: [
      "Achieved 87% classification accuracy using LSTM models",
      "Compared performance across 5 different ML architectures",
      "Processed and analyzed 10,000+ headlines for training"
    ]
  },
  {
    id: 5,
    title: "AI POS Tagging Model",
    description: "Achieved 95.7% accuracy using a trigram HMM model on the Wall Street Journal Penn Treebank dataset for part-of-speech tagging.",
    image: "/images/pos2.png",
    technologies: ["Python", "NLP", "HMM", "Machine Learning"],
    github: "https://github.com/LiamBush5/WSJ-POS-Tagger/blob/main/POS_Project.pdf",
    paper: "/papers/pos.pdf",
    highlights: [
      "Achieved 95.7% accuracy on the Wall Street Journal Penn Treebank dataset",
      "Implemented trigram Hidden Markov Model from scratch",
      "Optimized Viterbi algorithm for efficient inference"
    ]
  },
  {
    id: 6,
    title: "Freeware4Kids",
    description: "Won Delaware Youth Volunteer of The Year",
    image: "/images/freeware2.png",
    technologies: ["Chrome OS"],
    highlights: [
      "Recognized with Delaware Youth Volunteer of The Year award",
      "Provided technology access to underserved communities",
      "Deployed solutions to 5+ schools in the region"
    ]
  }
]

export function UpdatedAutomatedScrollingProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A selection of my most significant technical projects. Each demonstrates different skills and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)' }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">{project.title}</h3>

        <p className="text-gray-300 mb-auto line-clamp-3">
          {project.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 w-full">
          {/* Repository button */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/60 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-gray-200 transition-colors py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="truncate">Code</span>
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-800/60 text-gray-300 border border-gray-700 py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center opacity-80"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="truncate">No Code</span>
            </button>
          )}

          {/* Site/Paper button */}
          {project.demo || project.paper ? (
            <a
              href={project.demo || project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/60 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-gray-200 transition-colors py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {project.paper ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 7-7-7m14 8v-5a2 2 0 00-2-2h-5a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                )}
              </svg>
              <span className="truncate">{project.paper ? "Paper" : "Site"}</span>
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-800/60 text-gray-300 border border-gray-700 py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center opacity-80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="truncate">No Site</span>
            </button>
          )}

          {/* View Details */}
          <button
            className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center"
            onClick={onClick}
          >
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 z-50 flex justify-end p-4 bg-gradient-to-b from-gray-800 to-transparent">
          <button
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={onClose}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8 pt-0">
          <div className="mb-8 flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full rounded-lg object-contain max-h-[500px] shadow-lg"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">{project.title}</h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            {project.description}
          </p>

          {project.highlights && (
            <div className="mb-8 bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-medium transition-colors flex items-center group hover:translate-y-[-2px]"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>View Code</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition-colors flex items-center group hover:translate-y-[-2px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Site</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}

            {project.paper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors flex items-center group hover:translate-y-[-2px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 8l-7 7-7-7m14 8v-5a2 2 0 00-2-2h-5a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2z" />
                </svg>
                <span>Read Paper</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default UpdatedAutomatedScrollingProjectShowcase;
