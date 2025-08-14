'use client';

import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  logo: string;
  url: string;
  playStoreUrl?: string;
  image?: string;
  technologies?: string[];
  stats?: string;
}

interface BestWorksAccordionProps {
  projects: Project[];
}

export default function BestWorksAccordion({ projects }: BestWorksAccordionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Add default images and additional details for each project
  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    image: project.image || `https://images.unsplash.com/photo-${1581291518857 + index}-4e27b48ff24e?w=800&h=400&fit=crop`,
    technologies: project.technologies || getDefaultTechnologies(project.name),
    stats: getProjectStats(project.name)
  }));

  function getDefaultTechnologies(projectName: string): string[] {
    const techMap: { [key: string]: string[] } = {
      'Beacon': ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Real-time Sync'],
      'Merlin AI': ['Flutter', 'OpenAI API', 'Firebase', 'Cloud Functions', 'In-App Purchases'],
      'AI Note Taker': ['Flutter', 'Speech-to-Text', 'AI Processing', 'Local Storage', 'Audio Recording'],
      'PDF AI': ['Flutter', 'PDF Processing', 'AI Summarization', 'Document Analysis', 'Cloud Storage']
    };
    return techMap[projectName] || ['Flutter', 'Mobile Development'];
  }

  function getProjectStats(projectName: string): string {
    const statsMap: { [key: string]: string } = {
      'Beacon': 'Open Source • Google Summer of Code 2024',
      'Merlin AI': '300K+ Downloads • 4.5★ Rating',
      'AI Note Taker': '50K+ Downloads • Audio Processing',
      'PDF AI': '75K+ Downloads • Document Analysis'
    };
    return statsMap[projectName] || 'Mobile Application';
  }

  return (
    <section className="mb-12">
      <h2 className="text-lg font-extrabold mb-4 font-inter">Best Works</h2>
      <div className="max-h-96 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-track-[#2a2a2a] scrollbar-thumb-[#5a5a5a] hover:scrollbar-thumb-[#6a6a6a]">
        {enhancedProjects.map((project, index) => (
          <div
            key={index}
            className="border border-[#3a3a3a] rounded-lg bg-[#2a2a2a] overflow-hidden transition-all duration-300 hover:border-[#5a5a5a]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#323232] transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-semibold text-[#f5f5dc] font-inter">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="group/link p-1 rounded-md hover:bg-[#3a3a3a] transition-colors"
                    >
                      {project.playStoreUrl ? (
                        <svg className="w-4 h-4 text-[#d4c4a8] hover:text-white transition-colors group-hover/link:scale-110" viewBox="0 0 384 512" fill="currentColor">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-81.9-19.1-40.8.9-78.2 24.4-99.1 61.6-42.3 75.1-10.9 186.2 30.4 247.2 20.2 29.9 44.3 63.5 76 62.3 31.2-1.2 43.1-19.2 81.2-19.2 37.5 0 48.8 19.2 81.9 18.5 33.8-.8 53.4-30.2 73.4-60.4 23.2-35.1 32.7-69.1 33.2-70.8-.7-.3-63.4-24.2-63.7-96.2zm-85.3-157.1c17.1-20.4 28.6-48.4 25.6-76.8-24.4 1.8-53.7 16.8-71.1 37.4-15.8 18.3-29.6 47.8-26 75.8 27.5 2.1 55.7-13.9 71.5-36.4z"/>
                        </svg>
                      ) : (
                        <ExternalLink className="w-4 h-4 text-[#d4c4a8] hover:text-white transition-colors group-hover/link:scale-110" />
                      )}
                    </a>
                    {project.playStoreUrl && (
                      <a 
                        href={project.playStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link p-1 rounded-md hover:bg-[#3a3a3a] transition-colors"
                      >
                        <svg className="w-4 h-4 text-[#d4c4a8] hover:text-white transition-colors group-hover/link:scale-110" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-[#d4c4a8] mb-1">{project.description}</p>
                <p className="text-xs text-[#a4a4a4] font-jetbrains-mono">{project.stats}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#d4c4a8] transition-transform duration-200 flex-shrink-0 ml-3 ${
                  openItem === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4">
                <div className="mb-3">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-[#1a1a1a] text-[#d4c4a8] border border-[#3a3a3a] rounded font-jetbrains-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}