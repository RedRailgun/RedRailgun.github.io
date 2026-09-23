import { useEffect, useState } from 'react';

/* Blur radius in px per layer, weakest edge first. Doubling reads smoothest. */
const LAYERS = [1, 2, 4, 8, 16];

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

  return (
    <>
      <ProgressiveBlur
        position="top"
        visible={showTopBlur}
        className="h-[112px]"
      />
      <ProgressiveBlur
        position="bottom"
        visible={showBottomBlur}
        className="h-[72px]"
      />
    </>
  );
}

type ProgressiveBlurProps = {
  /* Which edge the blur is strongest at. */
  position: 'top' | 'bottom';
  visible: boolean;
  /* Supplies the band's depth (`h-[112px]`, etc.). */
  className?: string;
};

function ProgressiveBlur({ position, visible, className = '' }: ProgressiveBlurProps) {
  /* The gradient runs toward the strong edge, so each layer's clear stop sits on the weak side. */
  const direction = position === 'top' ? 'to top' : 'to bottom';

  return (
    <div
      aria-hidden
      className={`fixed inset-x-0 ${position === 'top' ? 'top-0' : 'bottom-0'} pointer-events-none transition-opacity duration-300 z-40 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {LAYERS.map((radius, index) => {
        const start = toStop(index / LAYERS.length);
        const end = toStop((index + 1) / LAYERS.length);
        const mask = `linear-gradient(${direction}, transparent ${start}%, #000 ${end}%, #000 100%)`;

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${radius}px)`,
              WebkitBackdropFilter: `blur(${radius}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}

/* Keeps uneven layer counts (3, 7, …) from emitting 16-digit percentages. */
function toStop(fraction: number) {
  return Number((fraction * 100).toFixed(4));
}
