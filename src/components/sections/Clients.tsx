import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import React, { useState, useEffect } from 'react';

const allLogos = [
  { src: '/images/clients/shakeys.svg', heightClass: 'h-12 sm:h-16', alt: 'Shakeys Pizza Asia Ventures, Inc.' },
  { src: '/images/clients/beep.svg', heightClass: 'h-9 sm:h-10', alt: 'beep™ business' },
  { src: '/images/clients/travel-insurance.png', heightClass: 'h-10 sm:h-12', alt: 'TravelInsurance.com.ph' },
  { src: '/images/clients/the-philippine-star.png', heightClass: 'h-10 sm:h-12', alt: 'The Philippine Star' },
  { src: '/images/clients/jaw.png', heightClass: 'h-16 sm:h-20', alt: 'Just Add Water Productions (JAW)' },
  { src: '/images/clients/horizon.png', heightClass: 'h-10 sm:h-12', alt: 'Horizon: ASMPH Alumni Association' },
  { src: '/images/clients/rafi.svg', heightClass: 'h-20 sm:h-24', alt: 'Ramon Aboitiz Foundation, Inc.' },
  { src: '/images/clients/ateneo-law-journal.png', heightClass: 'h-14 sm:h-18', alt: 'Ateneo Law Journal' },
  { src: '/images/clients/yuchengco-group.png', heightClass: 'h-9 sm:h-10', alt: 'The Yuchengco Group' },
  { src: '/images/clients/cardinal-santos-medical-center.png', heightClass: 'h-14 sm:h-18', alt: 'Cardinal Santos Medical Center' },
  { src: '/images/clients/artefino.png', heightClass: 'h-10 sm:h-12', alt: 'Artefino' },
  { src: '/images/clients/iskaparate.png', heightClass: 'h-12 sm:h-16', alt: 'Iskaparate' },
  { src: '/images/clients/metro-pacific-health.png', heightClass: 'h-9 sm:h-10', alt: 'Metro Pacific Health' },
  { src: '/images/clients/k-and-company.svg', heightClass: 'h-14 sm:h-18', alt: 'K and Company' },
  { src: '/images/clients/iabc-philippines.png', heightClass: 'h-12 sm:h-16', alt: 'IABC Philippines' },
  { src: '/images/clients/villarica.svg', heightClass: 'h-9 sm:h-10', alt: 'Villarica' },
  { src: '/images/clients/ergo-home.svg', heightClass: 'h-9 sm:h-10', alt: 'ErgoHome' },
  { src: '/images/clients/mg-motor.svg', heightClass: 'h-16 sm:h-20', alt: 'MG Motor' },
  { src: '/images/clients/steag.svg', heightClass: 'h-10 sm:h-12', alt: 'Steag' },
  { src: '/images/clients/aranaz.png', heightClass: 'h-9 sm:h-10', alt: 'Aranaz' },
  { src: '/images/clients/parlon.svg', heightClass: 'h-14 sm:h-18', alt: 'Parlon' },
  { src: '/images/clients/journeys-of-faith.svg', heightClass: 'h-10 sm:h-14', alt: 'Journeys of Faith' },
  { src: '/images/clients/arcenas-properties.svg', heightClass: 'h-14 sm:h-18', alt: 'Arcenas Properties' },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const LogoGroup = ({ logos }: { logos: typeof allLogos }) => (
  <div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20 w-max">
    {logos.map((logo, i) => (
      <div key={i} className="flex-shrink-0 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className={`${logo.heightClass} w-auto object-contain`}
        />
      </div>
    ))}
  </div>
);

interface MarqueeRowProps {
  children: React.ReactNode;
  direction?: -1 | 1;
  speed?: number;
}

const MarqueeRow = ({ children, direction = -1, speed = 0.5 }: MarqueeRowProps) => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const [isHovered, setIsHovered] = useState(false);
  
  useAnimationFrame((t, delta) => {
    let moveBy = direction * 1.25 * speed * (delta / 1000);
    if (isHovered) {
      moveBy *= 0.2; // slow down to 20% speed on hover
    }
    
    let newX = baseX.get() + moveBy;
    while (newX <= -50) newX += 50;
    while (newX > 0) newX -= 50;
    baseX.set(newX);
  });

  return (
    <div 
      className="flex overflow-hidden w-full relative [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex w-max" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
};

export default function Clients() {
  const speed = 0.5;
  const [topRow, setTopRow] = useState<typeof allLogos>([]);
  const [bottomRow, setBottomRow] = useState<typeof allLogos>([]);

  useEffect(() => {
    const shuffled = shuffleArray(allLogos);
    const mid = Math.ceil(shuffled.length / 2);
    setTopRow(shuffled.slice(0, mid));
    setBottomRow(shuffled.slice(mid));
  }, []);

  return (
    <section id="clients" className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-20 py-20 2xl:py-24 overflow-hidden">
      <div className="text-left mb-16">
        <h2 className="text-5xl md:text-7xl font-serif inline-block text-slate-900">Clients</h2>
      </div>
      
      <div className="flex flex-col gap-12 sm:gap-20 w-full relative">
        {topRow.length > 0 && (
          <MarqueeRow direction={-1} speed={speed}>
            <LogoGroup logos={topRow} />
            <LogoGroup logos={topRow} />
          </MarqueeRow>
        )}

        {bottomRow.length > 0 && (
          <MarqueeRow direction={1} speed={speed}>
            <LogoGroup logos={bottomRow} />
            <LogoGroup logos={bottomRow} />
          </MarqueeRow>
        )}
      </div>
    </section>
  );
}
