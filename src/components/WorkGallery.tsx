'use client';

import { useState } from 'react';
import CircularGallery from '@/components/CircularGallery/CircularGallery';

const workImages = [
  {
    image: `/images/work1.jpg`,
    text: 'Mobile App Development',
    title: 'Cross-Platform Apps',
    description: 'Building beautiful, performant mobile applications using Flutter, Swift, and Kotlin with focus on user experience and clean architecture.'
  },
  {
    image: `/images/work2.jpg`,
    text: 'UI/UX Design', 
    title: 'Modern Interface Design',
    description: 'Creating intuitive and visually appealing user interfaces that prioritize usability and aesthetic appeal across different platforms.'
  },
  {
    image: `/images/work3.jpg`,
    text: 'Backend Development',
    title: 'Scalable APIs', 
    description: 'Developing robust backend systems with Node.js, TypeScript, and modern databases to support mobile and web applications.'
  },
  {
    image: `/images/work4.jpg`,
    text: 'AI Integration',
    title: 'AI-Powered Features',
    description: 'Integrating artificial intelligence and machine learning capabilities into mobile applications to enhance user experience.'
  },
  {
    image: `/images/work5.jpg`,
    text: 'Cloud Solutions',
    title: 'Cloud Architecture',
    description: 'Implementing cloud-native solutions using Firebase, Supabase, and other modern cloud platforms for scalable applications.'
  },
];

export default function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; text: string; title: string; description: string } | null>(null);

  const handleImageClick = (item: { image: string; text: string }) => {
    const workItem = workImages.find(work => work.image === item.image);
    if (workItem) {
      setSelectedImage(workItem);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-lg font-extrabold mb-6 font-inter">My Work</h2>
      <div className="h-80 w-full">
        <CircularGallery
          items={workImages.map(item => ({ image: item.image, text: item.text }))}
          bend={2}
          textColor="#f5f5dc"
          borderRadius={0.05}
          font="bold 24px Inter"
          scrollSpeed={1.5}
          scrollEase={0.08}
          onItemClick={handleImageClick}
        />
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] bg-[#1a1a1a] border border-[#3a3a3a] rounded-2xl p-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="aspect-[4/3] w-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.text}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#f5f5dc] mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-[#d4c4a8] leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}