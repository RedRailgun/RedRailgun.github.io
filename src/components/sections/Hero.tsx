import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const hiThereRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (hiThereRef.current) {
      const chars = hiThereRef.current.querySelectorAll('.char');
      chars.forEach((char, index) => {
        const progress = index / (chars.length - 1 || 1);
        
        gsap.fromTo(char,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.6 + (progress * 1.8),
            delay: Math.pow(progress, 2.5) * 1.5,
            ease: 'expo.out'
          }
        );
      });
    }

    if (roleRef.current) {
      const words = roleRef.current.querySelectorAll('.word');
      const baseDelay = 2; // Starts before the "Hi There!" animation completes

      words.forEach((word, index) => {
        const progress = index / (words.length - 1 || 1);
        
        gsap.fromTo(word,
          { filter: 'blur(12px)', scale: 1.3, opacity: 0 },
          {
            filter: 'blur(0px)',
            scale: 1,
            opacity: 1,
            duration: 0.8 + (progress * 0.6),
            delay: baseDelay + (Math.pow(progress, 1.5) * 0.3),
            ease: 'expo.out'
          }
        );
      });
    }
  }, []);

  const hiThereText = "Hi There!".split('');
  const roleText = "Front-End Web Developer & UI Designer".split(' ');

  return (
    <section id="hero" className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 pt-16 md:pt-20 lg:pt-24 pb-16 relative space-y-12 md:space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:-mx-6 xl:-mx-8">
        <div className="max-w-3xl relative z-10 md:px-6 xl:px-8">
          <h2 
            ref={hiThereRef}
            className="text-2xl md:text-5xl font-extrabold font-condensed uppercase mb-2 text-slate-800/90 overflow-hidden flex"
          >
            {hiThereText.map((char, i) => (
              <span 
                key={i} 
                className="char inline-block" 
                style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </span>
            ))}
          </h2>
          <div className="relative mb-6">
            {/* Top Highlight */}
            <h1 
              className="absolute top-0 left-0 w-full text-5xl md:text-[3.75rem] lg:text-[4.5rem] 2xl:text-[5rem] font-serif leading-[1.125] text-white/90 tracking-tight xl:tracking-normal -translate-y-[1.5px] select-none z-0"
              aria-hidden="true"
            >
              I'm John Paul Palad
            </h1>
            {/* Bottom Outline / Shadow */}
            <h1 
              className="absolute top-0 left-0 w-full text-5xl md:text-[3.75rem] lg:text-[4.5rem] 2xl:text-[5rem] font-serif leading-[1.125] text-slate-300 tracking-tight xl:tracking-normal translate-y-[1.5px] select-none z-0"
              aria-hidden="true"
            >
              I'm John Paul Palad
            </h1>
            {/* Main Gradient Text */}
            <h1 
              className="relative text-5xl md:text-[3.75rem] lg:text-[4.5rem] 2xl:text-[5rem] font-serif leading-[1.125] text-transparent bg-clip-text bg-gradient-to-b from-slate-500 via-slate-900 via-35% to-slate-500 tracking-tight xl:tracking-normal z-10"
            >
              I'm John Paul Palad
            </h1>
          </div>
          <h3 
            ref={roleRef}
            className="text-base md:text-lg xl:text-xl font-extrabold font-expanded italic uppercase tracking-wide mb-8 text-slate-600/90 flex flex-wrap gap-x-[0.35em]"
          >
            {roleText.map((word, i) => (
              <span key={i} className="word inline-block origin-center">{word}</span>
            ))}
          </h3>
        </div>
        
        <div className="shrink-0 md:ms-auto relative md:px-6 xl:px-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-fuchsia-300 to-blue-400 opacity-30 blur-2xl rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-2 bg-white/40 backdrop-blur-md border border-white/60 shadow-xl shadow-sky-900/5 relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-200 via-sky-200 to-fuchsia-200 relative group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-full overflow-hidden mix-blend-overlay z-10 pointer-events-none"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 via-purple-300 to-blue-400 opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-1000 z-0"></div>
              <img 
                src="/images/profile-photo.jpg" 
                alt="John Paul Palad" 
                className="absolute inset-0 w-full h-full object-cover relative z-10" 
                loading="eager"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '1';
                }}
                style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <div className="w-full md:w-3/4 lg:w-2/3 2xl:w-1/2 text-lg sm:text-xl xl:text-2xl text-slate-600 leading-relaxed">
          Over 8 years of creating intuitive, modern web applications built around
          fluid responsive layouts and the delicate balance between complex
          functionality and beautiful aesthetics. My focus is always on transforming bold
          creative concepts into pixel-perfect digital solutions that elevate brands and
          leave a lasting impression.
        </div>
      </div>
    </section>
  );
}
