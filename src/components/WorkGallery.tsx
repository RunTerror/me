'use client';

import React from 'react';
import CircularGallery from '@/components/CircularGallery/CircularGallery';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';

const workImages = [
  {
    image: `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop`,
    text: 'Mobile App Development',
    title: 'Cross-Platform Apps',
    description: 'Building beautiful, performant mobile applications using Flutter, Swift, and Kotlin with focus on user experience and clean architecture.'
  },
  {
    image: `https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop`,
    text: 'UI/UX Design', 
    title: 'Modern Interface Design',
    description: 'Creating intuitive and visually appealing user interfaces that prioritize usability and aesthetic appeal across different platforms.'
  },
  {
    image: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop`,
    text: 'Backend Development',
    title: 'Scalable APIs', 
    description: 'Developing robust backend systems with Node.js, TypeScript, and modern databases to support mobile and web applications.'
  },
  {
    image: `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop`,
    text: 'AI Integration',
    title: 'AI-Powered Features',
    description: 'Integrating artificial intelligence and machine learning capabilities into mobile applications to enhance user experience.'
  },
  {
    image: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop`,
    text: 'Cloud Solutions',
    title: 'Cloud Architecture',
    description: 'Implementing cloud-native solutions using Firebase, Supabase, and other modern cloud platforms for scalable applications.'
  },
];

export default function WorkGallery() {
  const handleImageClick = (item: { image: string; text: string }) => {
    const workItem = workImages.find(work => work.image === item.image);
    if (workItem) {
      // Find and trigger the corresponding dialog trigger
      setTimeout(() => {
        const triggerElement = document.querySelector(`[data-work-trigger="${workItem.image}"]`) as HTMLButtonElement;
        if (triggerElement) {
          triggerElement.click();
        }
      }, 0);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-lg font-extrabold mb-6 font-inter">My Work</h2>
      <div className="h-80 w-full">
        <CircularGallery
          items={workImages.map(item => ({ image: item.image, text: item.text }))}
          bend={0}
          textColor="#f5f5dc"
          borderRadius={0.05}
          font="bold 24px Inter"
          scrollSpeed={1.5}
          scrollEase={0.08}
          onItemClick={handleImageClick}
          autoRotate={true}
          autoRotateSpeed={0.1}
        />
      </div>
      
      {workImages.map((workItem) => (
        <MorphingDialog
          key={workItem.image}
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger 
            className="hidden"
            style={{
              borderRadius: '12px',
            }}
            data-work-trigger={workItem.image}
          >
            <div></div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: '24px',
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-[#3a3a3a] bg-[#1a1a1a] sm:w-[500px] max-w-2xl"
            >
              <MorphingDialogImage
                src={workItem.image}
                alt={workItem.text}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl text-[#f5f5dc] font-bold">
                  {workItem.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-[#d4c4a8] mt-1">
                  {workItem.text}
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-4 text-[#d4c4a8] leading-relaxed">
                    {workItem.description}
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-[#f5f5dc]" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </section>
  );
}