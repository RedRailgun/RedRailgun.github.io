import Hero from './components/sections/Hero';
import Tabs from './components/sections/Tabs';
import Projects from './components/sections/Projects';
import Clients from './components/sections/Clients';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import About from './components/sections/About';

import ScrollBlur from './components/ScrollBlur';

export default function App() {
  return (
    <main className="min-h-screen relative selection:bg-sky-200 selection:text-sky-900">
      <div className="fixed inset-0 bg-ambient pointer-events-none -z-10" />
      
      <ScrollBlur />
      <Hero />
      <Tabs />
      <Projects />
      <Clients />
      <Skills />
      <Experience />
      <About />
    </main>
  );
}
