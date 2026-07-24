export default function Experience() {
  const experiences = [
    {
      date: 'July 2018 - Present',
      title: 'CMIT Consultancy Group, Inc. (Concept Machine)',
      role: 'Front-end Web Developer - 2018 - PRESENT\nUI Designer - 2023 - PRESENT',
      logo: '/images/experience/logo-concept-machine.png',
      logoHeightClass: 'h-16 lg:h-20',
      description: "Spearheaded end-to-end web design and front-end development for client projects, bridging the gap between aesthetics and technical execution over an 8-year tenure. Transitioned from a core Front-End Developer to a hybrid UI Designer and Developer role in 2023, driving projects from initial client discovery and UI/UX conceptualization to pixel-perfect, mobile-responsive implementations using Figma and Laravel Blade. Partnered closely with back-end engineers for seamless CMS integration while establishing cohesive design languages tailored to diverse client needs.\nAdditionally, I contributed to CMIT's sister company, Parlon Beauty and Wellness Technologies, Inc.—the first salon-aggregating platform in the Philippines. During its early development, I provided core UX insights for the Merchant Partner Hub and engineered the initial interfaces using Angular and Laravel Blade. In late 2024, I co-led the complete platform migration of the main Parlon website from Angular to Next.js, resolving critical technical debt and significantly improving loading performance after two years of rapid feature scaling."
    },
    {
      date: 'August 2017 - March 2018',
      title: 'H2 Software Consulting Services, Inc.',
      role: 'Analyst Programmer',
      logo: '/images/experience/logo-h2-software.png',
      logoHeightClass: 'h-16 lg:h-24',
      description: 'Worked as a UI designer during a six-month tenure, focusing specifically on executing designs for Robinsons Bank\'s internal CI System and the initial homepage for ThumbTax. Officially titled as an Analyst Programmer while performing tasks related to being a UI designer. Fully completed and delivered all required interface designs for both platforms prior to departure.'
    }
  ];

  return (
    <section id="experience" className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 py-20 2xl:py-24">
      <h2 className="text-5xl md:text-7xl font-serif mb-20 text-slate-900">Experience</h2>
      <div className="relative ml-4 md:ml-6">
        {/* Gradient timeline line */}
        <div className="absolute top-2 bottom-0 left-0 w-[2px] bg-gradient-to-b from-blue-400 via-sky-300 to-transparent"></div>
        
        {experiences.map((exp, i) => (
          <div key={i} className="mb-24 last-of-type:mb-16! relative pl-10 md:pl-16 group">
            <div className="absolute -left-[9px] top-2 w-5 h-5">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white border-[4px] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            
            <div className="inline-block px-3 py-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-full text-[10px] sm:text-xs font-bold font-mono uppercase tracking-[0.2em] text-fuchsia-500 mb-8">
              {exp.date}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
               <div className="max-w-3xl order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight text-slate-900">{exp.title}</h3>
                  <div className="text-sm md:text-base font-extrabold font-expanded italic uppercase tracking-[0.15em] whitespace-pre-line leading-relaxed tracking-wide text-slate-500">
                    {exp.role}
                  </div>
               </div>
               <div className="shrink-0 order-1 md:order-2 lg:mt-2">
                 {exp.logo ? (
                   <img src={exp.logo} alt={exp.title} className={`${exp.logoHeightClass || 'h-10'} w-auto object-contain`} />
                 ) : (
                   <svg viewBox="0 0 150 40" className="h-10 w-auto">
                      <circle cx="20" cy="20" r="15" className="fill-orange-500 opacity-80 mix-blend-multiply" />
                      <circle cx="35" cy="20" r="15" className="fill-blue-500 opacity-80 mix-blend-multiply" />
                      <circle cx="28" cy="10" r="15" className="fill-yellow-400 opacity-80 mix-blend-multiply" />
                      <text x="60" y="25" className="font-bold font-sans text-2xl fill-slate-800 tracking-tight">Logoipsum</text>
                      <text x="62" y="35" className="font-sans text-[8px] font-bold fill-slate-500 tracking-[0.2em] uppercase">Network</text>
                   </svg>
                 )}
               </div>
            </div>
            
            <div className="space-y-5 text-base md:text-lg text-slate-600 max-w-4xl">
              {exp.description.split('\n').map((paragraph, pIndex) => (
                paragraph.trim() ? <p key={pIndex}>{paragraph}</p> : null
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
