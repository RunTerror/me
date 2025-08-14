'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const workItems = [
  {
    id: 1,
    title: 'Mobile App Development',
    subtitle: 'Cross-Platform Apps',
    description: 'Building beautiful, performant mobile applications using Flutter, Swift, and Kotlin with focus on user experience and clean architecture.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    technologies: ['Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 2,
    title: 'UI/UX Design',
    subtitle: 'Modern Interface Design',
    description: 'Creating intuitive and visually appealing user interfaces that prioritize usability and aesthetic appeal across different platforms.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    id: 3,
    title: 'Backend Development',
    subtitle: 'Scalable APIs',
    description: 'Developing robust backend systems with Node.js, TypeScript, and modern databases to support mobile and web applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    technologies: ['Node.js', 'TypeScript', 'Supabase', 'PostgreSQL']
  },
  {
    id: 4,
    title: 'AI Integration',
    subtitle: 'AI-Powered Features',
    description: 'Integrating artificial intelligence and machine learning capabilities into mobile applications to enhance user experience.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    technologies: ['OpenAI API', 'Machine Learning', 'Natural Language Processing']
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    subtitle: 'Cloud Architecture',
    description: 'Implementing cloud-native solutions using Firebase, Supabase, and other modern cloud platforms for scalable applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    technologies: ['Firebase', 'Supabase', 'AWS', 'Cloud Functions']
  },
];

export default function WorkAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="mb-12">
      <h2 className="text-lg font-extrabold mb-4 font-inter">My Work</h2>
      <div className="space-y-2">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="border border-[#3a3a3a] rounded-lg bg-[#2a2a2a] overflow-hidden transition-all duration-300 hover:border-[#5a5a5a]"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#323232] transition-colors"
            >
              <div>
                <h3 className="text-base font-semibold text-[#f5f5dc] font-inter">
                  {item.title}
                </h3>
                <p className="text-sm text-[#d4c4a8] mt-1">{item.subtitle}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#d4c4a8] transition-transform duration-200 ${
                  openItem === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-[#d4c4a8] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
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