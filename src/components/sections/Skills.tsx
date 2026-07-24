type Skill = {
  name: string;
  logo: string | null;
};

const skills: Skill[] = [
  { name: "Figma", logo: "/images/skills/ic-figma.svg" },
  { name: "Laravel", logo: "/images/skills/ic-laravel.svg" },
  { name: "NextJS", logo: "/images/skills/ic-next.svg" },
  { name: "React", logo: "/images/skills/ic-react.svg" },
  { name: "Angular", logo: "/images/skills/ic-angular.svg" },
  { name: "Sass", logo: "/images/skills/ic-sass.png" },
  { name: "TailwindCSS", logo: "/images/skills/ic-tailwind.svg" },
  { name: "Bootstrap", logo: "/images/skills/ic-bootstrap.svg" },
  { name: "WordPress", logo: "/images/skills/ic-wordpress.svg" },
  { name: "Framer", logo: "/images/skills/ic-framer.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 py-20">
      <h2 className="text-5xl md:text-7xl font-serif mb-12 text-center md:text-left text-slate-900">Skills</h2>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-md border border-white/60 px-5 py-3 sm:px-6 sm:py-4 squircle-6 shadow-[0_8px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-all duration-300 cursor-default group">
             {skill.logo ? (
               <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain shrink-0 group-hover:scale-110 transition-transform duration-500" />
             ) : (
               <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                 <div className="w-5 h-5 border-[2.5px] border-slate-400 squircle-2 transform rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
               </div>
             )}
             <span className="text-lg md:text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
