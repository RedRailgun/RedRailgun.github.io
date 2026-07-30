import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CircleArrowOutUpRight, ChevronRight, ChevronLeft, FileText } from 'lucide-react';
import { CaseStudySheet } from '../CaseStudySheet';

type Project = {
  id: string | number;
  title: string;
  screenshot?: string | null;
  techStack: string[];
  websiteLink?: string | null;
  projectFileLink?: string | null;
  caseStudyFile?: string | null;
};

const mainProjects: Project[] = [
  {
    id: 1,
    title: "Parlon Website and Merchant Partner Hub",
    screenshot: "/images/projects/carousel/parlon.jpg",
    techStack: ["Angular", "Laravel", "NextJS", "Figma"],
    websiteLink: "https://parlon.ph",
    projectFileLink: null,
  },
  {
    id: 2,
    title: "Shakey's Pizza Asia Ventures, Inc.",
    screenshot: "/images/projects/carousel/shakeys.png",
    techStack: ["Laravel", "TailwindCSS", "Figma"],
    websiteLink: "https://www.shakeysgroup.ph/",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgDkwd434YZ2RpP-iXkPywKPAU4AfDWhc73Uy0Ma4goHWXs?e=qcZUJA",
    caseStudyFile: "/studies/shakeys-case-study.md",
  },
  {
    id: 3,
    title: "The Yuchengco Centre",
    screenshot: "/images/projects/carousel/the-yuchengco-centre.png",
    techStack: ["Laravel", "TailwindCSS", "Figma"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgD_urcyCpcoTYvbkIf4el3lAXDADlOz9l9YgPPe8Fng-i0?e=QfjKYf",
    caseStudyFile: "/studies/the-yuchengco-centre-website-case-study.md",
  },
  {
    id: 4,
    title: "Villarica Pawnshop",
    screenshot: "/images/projects/carousel/villarica.jpg",
    techStack: ["Laravel", "Bootstrap"],
    websiteLink: "https://villarica.net",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJYmwAAAAAAQLvOKEJC6rvUa8DieKn-rA?e=ZWzAjG",
	caseStudyFile: "/studies/villarica-website-case-study.md",
  }
];

const gridProjects: Project[] = [
  {
    id: 4,
    title: "Ateneo Law Journal",
    screenshot: "/images/projects/grid/ateneo-law-journal.png",
    techStack: ["Laravel", "Bootstrap", "Figma"],
    websiteLink: "https://www.ateneolj.org",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJWGoAAAAAAZ5_4cpUib4xkqkzqPipcn0?e=xWvffa",
  },
  {
    id: 5,
    title: "Horizon: ASMPH Alumni Association",
    screenshot: "/images/projects/grid/horizon.png",
    techStack: ["Laravel", "Bootstrap", "Figma"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJU2sAAAAAAS8Px0vrV70qwCo3gX9VVsU?e=a1yXqy",
  },
  {
    id: 6,
    title: "JAW Productions",
    screenshot: "/images/projects/grid/jaw.jpg",
    techStack: ["Laravel", "Bootstrap", "Figma"],
    websiteLink: "https://justaddwater.com.ph/",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgBzmoiKoz3kQ6fdbTFF4-FwAUloRWe6vaGWzkSuqyMGlwM?e=gA8JY5",
  },
  {
    id: 7,
    title: "The Philippine Star - 34th Anniversary Special: InBetween",
    screenshot: "/images/projects/grid/philstar.jpg",
    techStack: ["Laravel", "Bootstrap"],
    websiteLink: "https://star34.philstarlife.com/",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJB2wAAAAAAWmCQiFOYU0QVbJW__WxBlI?e=Kz11Mu",
  },
  {
    id: 8,
    title: "TravelInsurance.com.ph",
    screenshot: "/images/projects/grid/travel-insurance.png",
    techStack: ["Laravel", "Bootstrap", "Figma"],
    websiteLink: "https://travelinsurance.com.ph",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJOGwAAAAAAZb8f5MFDi2TcuvCDOQAnBI?e=Z1OYV8",
  },
  {
    id: 9,
    title: "Tower Steel",
    screenshot: "/images/projects/grid/tower-steel.png",
    techStack: ["Laravel", "TailwindCSS", "Figma"],
    websiteLink: "https://towersteelcorp.ph/",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgBb9kBN4sWMR4MGPJbeIGJOAaOW0uW39cFoV3kA6y-gq70?e=DpXpsz",
    caseStudyFile: "/studies/tower-steel-corp-case-study.md",
  },
  {
    id: 10,
    title: "MG Motor Philippines",
    screenshot: "/images/projects/grid/mg-motor.png",
    techStack: ["Laravel", "Bootstrap", "Figma"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJ7msAAAAAAR_z-ixQ4VXSRTYaZO0mOfA?e=qmuUTn",
  },
  {
    id: 11,
    title: "Aranáz",
    screenshot: "/images/projects/grid/aranaz.jpg",
    techStack: ["Shopify"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJn2kAAAAAASGPL2OKafr0D0cB5C18FnI?e=QiK5Jm",
  },
  {
    id: 12,
    title: "ArteFino",
    screenshot: "/images/projects/grid/artefino.png",
    techStack: ["Shopify"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJwWkAAAAAAUll0-T5cUDXlWUhJ4oUCPY?e=xfJQWH",
  },
  {
    id: 13,
    title: "K & Company",
    screenshot: "/images/projects/grid/k-company.png",
    techStack: ["Shopify"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJGmsAAAAAAcLkxGx1baTps6oQYJ3f50o?e=38eIgW",
  },
  {
    id: 14,
    title: "beep™ business",
    screenshot: "/images/projects/grid/beep.png",
    techStack: ["Laravel", "Bootstrap"],
    websiteLink: null,
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJk2oAAAAAARS1Ds1bBlCjRbQf6pfPdps?e=H56DZv",
  },
  {
    id: 15,
    title: "Cardinal Santos Medical Center",
    screenshot: "/images/projects/grid/cardinal-santos.png",
    techStack: ["WordPress", "Figma"],
    websiteLink: "https://cardinalsantos.com.ph",
    projectFileLink: "https://1drv.ms/f/c/09bb58503e896434/IgB4rBwR7x_JR7M83icNQ0rJAeC9DD6PrU60CFt4sBMKUrU?e=r5v33i",
    caseStudyFile: "/studies/cardinal-santos-website-case-study.md",
  }
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const moreCardRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft <= 5);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  useEffect(() => {
    const card = moreCardRef.current;
    if (!card) return;

    // Set initial state
    gsap.set(card, { y: 50, opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            });
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({ left: -clientWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="w-full py-20 2xl:py-24">
      <div className="flex justify-between items-end px-4 sm:px-8 lg:px-12 xl:px-20 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif">Featured Projects</h2>
        <div className="hidden md:flex gap-4">
          <button 
            className="button-glass w-12 h-12 text-slate-700" 
            onClick={scrollPrev} 
            disabled={isAtStart}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="button-glass w-12 h-12 text-slate-700" 
            onClick={scrollNext} 
            disabled={isAtEnd}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Horizontal Carousel */}
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-8 hide-scrollbar snap-x snap-mandatory"
      >
        {mainProjects.map((item) => (
          <div key={`main-${item.id}`} className="shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[45rem] snap-start group cursor-pointer first:ml-4 sm:first:ml-8 lg:first:ml-12 xl:first:ml-20 last:mr-4 sm:last:mr-8 lg:last:mr-12 xl:last:mr-20 scroll-ml-4 sm:scroll-ml-8 lg:scroll-ml-12 xl:scroll-ml-20">
            <div className="relative aspect-16/9 object-contain object-top squircle-8 bg-slate-100/50 mb-8 overflow-hidden group-hover:shadow-2xl group-hover:shadow-sky-900/10 transition-all duration-500 border border-white/60">
              {/* Abstract Mesh Skeleton */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-50 group-hover:scale-105 transition-transform duration-700 ease-out z-0">
                 <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-sky-300/40 blur-3xl mix-blend-multiply"></div>
                 <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-300/40 blur-3xl mix-blend-multiply"></div>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              </div>
              
              {item.screenshot && (
                <img 
                  src={item.screenshot} 
                  alt={item.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out z-10" 
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                />
              )}
              {item.websiteLink && (
                <div className="absolute bottom-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <a href={item.websiteLink} target="_blank" rel="noreferrer" className="bg-white/50 backdrop-blur-md text-slate-900 text-base font-condensed font-bold uppercase px-4 py-2.5 squircle-3 flex items-center gap-1.5 hover:bg-slate-900 hover:text-white transition-all will-change-[backdrop-filter]">
                     <CircleArrowOutUpRight className="w-4 h-4" /> VISIT WEBSITE
                  </a>
                </div>
              )}
            </div>
            <h3 className="text-3xl font-serif mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <div className="flex flex-wrap gap-1 mb-5">
              {item.techStack.map((tech) => (
                <span key={tech} className="text-sm font-normal px-3 py-1 border border-slate-300/60 squircle-1.5 text-slate-600 bg-white/40 backdrop-blur-sm">{tech}</span>
              ))}
            </div>
            <div className="flex gap-5">
              {item.projectFileLink && (
                <a href={item.projectFileLink} target="_blank" rel="noreferrer" className="text-base font-condensed font-bold uppercase flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors">
                  VIEW SCREENSHOTS <ChevronRight className="w-4 h-4" />
                </a>
              )}
              {item.caseStudyFile && (
                <button onClick={() => setSelectedCaseStudy(item.caseStudyFile!)} className="text-base font-condensed font-bold uppercase flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors">
                  VIEW CASE STUDY <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Grid below */}
      <div className="relative mt-16">
        <div 
          className={`transition-[max-height,mask-image,-webkit-mask-image] duration-1000 ease-in-out overflow-hidden md:!max-h-none md:[mask-image:none] md:[-webkit-mask-image:none] ${
            !isExpanded 
              ? 'max-h-[2500px] sm:max-h-[1500px] [mask-image:linear-gradient(to_top,transparent,black_16rem)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_16rem)]' 
              : 'max-h-[10000px] [mask-image:none] [-webkit-mask-image:none]'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16 px-4 sm:px-8 lg:px-12 xl:px-20 pb-16">
          {gridProjects.map((item) => (
            <div key={`grid-${item.id}`} className="group cursor-pointer">
            <div className="relative aspect-3/2 object-contain object-top squircle-5 bg-slate-100/50 mb-6 overflow-hidden group-hover:shadow-xl group-hover:shadow-sky-900/10 transition-all duration-500 border border-white/60">
              {/* Abstract Mesh Skeleton */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 via-sky-50 to-indigo-50 group-hover:scale-105 transition-transform duration-700 ease-out z-0">
                 <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-200/40 blur-3xl mix-blend-multiply"></div>
                 <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-300/30 blur-3xl mix-blend-multiply"></div>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              </div>

              {item.screenshot && (
                <img 
                  src={item.screenshot} 
                  alt={item.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out z-10" 
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in' }}
                />
              )}
              {item.websiteLink && (
                <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <a href={item.websiteLink} target="_blank" rel="noreferrer" className="bg-white/50 backdrop-blur-md text-slate-900 text-sm font-condensed font-bold uppercase px-4 py-2.5 squircle-2 flex items-center gap-1.5 hover:bg-slate-900 hover:text-white transition-colors">
                     <CircleArrowOutUpRight className="w-4 h-4" /> VISIT WEBSITE
                  </a>
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <div className="flex flex-wrap gap-1 mb-5">
              {item.techStack.map((tech) => (
                <span key={tech} className="text-sm font-normal px-2.5 py-1 border border-slate-300/60 squircle-1.5 text-slate-600 bg-white/40 backdrop-blur-sm">{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {item.projectFileLink && (
                <a href={item.projectFileLink} target="_blank" rel="noreferrer" className="text-base font-condensed font-bold uppercase flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors">
                  VIEW SCREENSHOTS <ChevronRight className="w-4 h-4" />
                </a>
              )}
              {item.caseStudyFile && (
                <button onClick={() => setSelectedCaseStudy(item.caseStudyFile!)} className="text-base font-condensed font-bold uppercase flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors">
                  VIEW CASE STUDY <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
        </div>

        {/* More Projects Card */}
        <div ref={moreCardRef} className="px-4 sm:px-8 lg:px-12 xl:px-20 opacity-0">
          <div className="relative bg-slate-100/50 overflow-hidden border border-white/60 p-8 md:p-12 squircle-6 flex flex-col md:flex-row justify-between items-center gap-8 group transition-all duration-500">
            {/* Abstract Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50/50 via-sky-50/50 to-indigo-50/50 group-hover:scale-105 transition-transform duration-700 ease-out z-0 pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-200/30 blur-3xl mix-blend-multiply"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sky-300/20 blur-3xl mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-serif mb-3 text-slate-800">Looking for more?</h3>
              <p className="text-slate-600 text-lg text-balance">Check out my archive for an extended portfolio of past projects, prototypes, and experiments.</p>
            </div>
            <a href="https://1drv.ms/f/c/09bb58503e896434/IgA0ZIk-UFi7IIAJnGkAAAAAAUqd2Jty0wb5IHJH4P-Butw?e=hVx8Eu" target="_blank" rel="noreferrer" className="relative z-10 shrink-0 bg-white/60 backdrop-blur-md text-slate-900 text-base font-condensed font-bold uppercase px-8 py-4 squircle-3 flex items-center gap-2 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              View Archive <CircleArrowOutUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        </div>
        
        {/* Mobile Load More Button */}
        <div 
          className={`absolute z-10 bottom-0 left-0 w-full flex items-end justify-center pointer-events-none md:hidden transition-all duration-500 ${
            !isExpanded ? 'h-32 opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <button 
            onClick={() => setIsExpanded(true)}
            className={`z-10 pointer-events-auto bg-white border border-slate-200 text-slate-900 text-sm font-condensed font-bold uppercase px-8 py-3 mb-6 squircle-2 hover:bg-slate-900 hover:text-white transition-colors shadow-lg ${isExpanded ? 'hidden' : 'block'}`}
          >
            Load more
          </button>
        </div>
      </div>

      <CaseStudySheet 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        fileUrl={selectedCaseStudy} 
      />
    </section>
  );
}
