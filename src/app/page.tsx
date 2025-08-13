'use client';

import { Badge } from '@/components/ui/badge';
import { Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  const recentWork = [
    {
      name: 'Beacon',
      description: 'Google Summer of Code work under CCExtractor - location sharing application',
      logo: '',
      url: 'https://github.com/CCExtractor/beacon'
    },
    {
      name: 'Merlin AI',
      description: 'AI chat assistant application with 3 lakh+ downloads',
      logo: '',
      url: 'https://apps.apple.com/us/app/merlin-ai-ai-chat-assistant/id6453692447',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.foyer.merlin&hl=en_IN'
    },
    {
      name: 'AI Note Taker',
      description: 'Audio to text transcription app',
      logo: '',
      url: 'https://apps.apple.com/us/app/ai-note-taker-audio-to-text/id6743072579',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.foyer.notesai&hl=en_IN'
    },
    {
      name: 'PDF AI',
      description: 'PDF summarizer and chat application',
      logo: '',
      url: 'https://apps.apple.com/us/app/pdf-ai-pdf-summarizer-chat/id6477758769',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.foyer.pdfai&hl=en_IN'
    },
  ];

  const skills = [
    'Flutter', 'Dart', 'Swift', 'Kotlin', 'Android Studio', 'Xcode',
    'Cross-platform Development', 'App Store & Play Store Deployment',
    'Node.js', 'TypeScript', 'Supabase', 'Firebase', 'Git', 'GitHub'
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5dc]">
      <main className="max-w-2xl mx-auto px-6 py-12">
        
        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#3a3a3a] border-2 border-[#5a5a5a] flex-shrink-0 overflow-hidden">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/me' : ''}/images/1A8586AB-ACAD-49FB-BA4E-69BF2CEBE2DA_1_105_c.jpeg`}
                alt="Abhishek Bansal" 
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h1 className="text-2xl md:text-4xl font-extrabold font-inter">
                  Abhishek Bansal
                </h1>
                <a href="https://summerofcode.withgoogle.com/archive/2024/projects/ZQ2dbV8z" target="_blank" rel="noopener noreferrer">
                  <Badge className="px-2 py-1 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 font-semibold hover:scale-105 transition-transform cursor-pointer">
                    Google Summer of Code &apos;24
                  </Badge>
                </a>
              </div>
              <p className="text-base text-[#d4c4a8] leading-relaxed font-light">
                I make mobile apps — fast, beautiful, and cross-platform.<br />
                I work with Flutter, Swift and Kotlin to create smooth UIs and ship fast.
              </p>
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section className="mb-12">
          <h2 className="text-lg font-extrabold mb-4 font-inter">Socials</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://x.com/Abhishe02984987" target="_blank" rel="noopener noreferrer" className="group p-3 border border-[#3a3a3a] rounded-lg hover:border-[#5a5a5a] transition-all bg-[#2a2a2a] hover:bg-[#323232]">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-bansal-51b1b8227" target="_blank" rel="noopener noreferrer" className="group p-3 border border-[#3a3a3a] rounded-lg hover:border-[#5a5a5a] transition-all bg-[#2a2a2a] hover:bg-[#323232]">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/RunTerror" target="_blank" rel="noopener noreferrer" className="group p-3 border border-[#3a3a3a] rounded-lg hover:border-[#5a5a5a] transition-all bg-[#2a2a2a] hover:bg-[#323232]">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://medium.com/@bansalabhishek7411" target="_blank" rel="noopener noreferrer" className="group p-3 border border-[#3a3a3a] rounded-lg hover:border-[#5a5a5a] transition-all bg-[#2a2a2a] hover:bg-[#323232]">
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href="mailto:bansalabhishek7411@gmail.com" className="group p-3 border border-[#3a3a3a] rounded-lg hover:border-[#5a5a5a] transition-all bg-[#2a2a2a] hover:bg-[#323232]">
              <Mail className="w-5 h-5 group-hover:scale-125 transition-transform" />
            </a>
          </div>
        </section>

        {/* Best Work Section */}
        <section className="mb-12">
          <h2 className="text-lg font-extrabold mb-4 font-inter">Best Works</h2>
          <div className="space-y-3">
            {recentWork.map((project, index) => (
              <div key={index} className="group p-4 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg hover:bg-[#323232] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#5a5a5a]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-[#f5f5dc] font-inter">{project.name}</h3>
                  <div className="flex gap-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group/link p-1.5 rounded-md hover:bg-[#3a3a3a] transition-colors">
                      {project.playStoreUrl ? (
                        <svg className="w-4 h-4 text-[#f5f5dc] hover:text-white transition-colors group-hover/link:scale-110" viewBox="0 0 384 512" fill="currentColor">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-81.9-19.1-40.8.9-78.2 24.4-99.1 61.6-42.3 75.1-10.9 186.2 30.4 247.2 20.2 29.9 44.3 63.5 76 62.3 31.2-1.2 43.1-19.2 81.2-19.2 37.5 0 48.8 19.2 81.9 18.5 33.8-.8 53.4-30.2 73.4-60.4 23.2-35.1 32.7-69.1 33.2-70.8-.7-.3-63.4-24.2-63.7-96.2zm-85.3-157.1c17.1-20.4 28.6-48.4 25.6-76.8-24.4 1.8-53.7 16.8-71.1 37.4-15.8 18.3-29.6 47.8-26 75.8 27.5 2.1 55.7-13.9 71.5-36.4z"/>
                        </svg>
                      ) : (
                        <ExternalLink className="w-4 h-4 text-[#f5f5dc] hover:text-white transition-colors group-hover/link:scale-110" />
                      )}
                    </a>
                    {project.playStoreUrl && (
                      <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="group/link p-1.5 rounded-md hover:bg-[#3a3a3a] transition-colors">
                        <svg className="w-4 h-4 text-[#f5f5dc] hover:text-white transition-colors group-hover/link:scale-110" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[#d4c4a8] font-inter">{project.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-lg font-extrabold mb-4 font-inter">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} className="px-2.5 py-1.5 text-sm bg-[#2a2a2a] text-[#d4c4a8] border border-[#3a3a3a] hover:bg-[#323232] hover:scale-110 transition-transform font-jetbrains-mono">
                {skill}
              </Badge>
            ))}
          </div>
        </section>


      </main>
    </div>
  );
}
