import { useEffect, useState } from 'react';

export default function ScrollBlur() {
  const [showTopBlur, setShowTopBlur] = useState(false);
  const [showBottomBlur, setShowBottomBlur] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const isNotAtTop = scrollY > 0;
      const isNotAtBottom = Math.ceil(scrollY + innerHeight) < scrollHeight;
      
      setShowTopBlur(isNotAtTop);
      setShowBottomBlur(isNotAtBottom);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const topBlurLayers = [
    { height: 112, blur: 2, opacity: 1 },
    { height: 99.75, blur: 4, opacity: 0.95 },
    { height: 87.5, blur: 8, opacity: 0.9 },
    { height: 75.25, blur: 12, opacity: 0.85 },
    { height: 63, blur: 16, opacity: 0.8 },
    { height: 50.75, blur: 24, opacity: 0.75 },
    { height: 38.5, blur: 32, opacity: 0.7 },
    { height: 26.25, blur: 40, opacity: 0.65 },
  ];

  const bottomBlurLayers = [
    { height: 72, blur: 2, opacity: 1 },
    { height: 62, blur: 4, opacity: 0.9 },
    { height: 42, blur: 8, opacity: 0.85 },
    { height: 32, blur: 16, opacity: 0.8 },
    { height: 22, blur: 24, opacity: 0.75 },
    { height: 12, blur: 32, opacity: 0.7 },
  ];

  return (
    <>
      {/* Top Blur */}
      <div 
        className={`fixed top-0 left-0 right-0 h-[112px] pointer-events-none transition-opacity duration-300 z-40 ${
          showTopBlur ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {topBlurLayers.map((layer, index) => {
          const maskStart = 112 - layer.height;
          return (
            <div
              key={`top-${index}`}
              className="absolute inset-0"
              style={{
                opacity: layer.opacity,
                backdropFilter: `blur(${layer.blur}px)`,
                WebkitBackdropFilter: `blur(${layer.blur}px)`,
                maskImage: `linear-gradient(to top, transparent ${maskStart}px, black 100%)`,
                WebkitMaskImage: `linear-gradient(to top, transparent ${maskStart}px, black 100%)`,
              }}
            />
          );
        })}
      </div>

      {/* Bottom Blur */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-[72px] pointer-events-none transition-opacity duration-300 z-40 ${
          showBottomBlur ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {bottomBlurLayers.map((layer, index) => {
          const maskStart = 72 - layer.height;
          return (
            <div
              key={`bottom-${index}`}
              className="absolute inset-0"
              style={{
                opacity: layer.opacity,
                backdropFilter: `blur(${layer.blur}px)`,
                WebkitBackdropFilter: `blur(${layer.blur}px)`,
                maskImage: `linear-gradient(to bottom, transparent ${maskStart}px, black 100%)`,
                WebkitMaskImage: `linear-gradient(to bottom, transparent ${maskStart}px, black 100%)`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
