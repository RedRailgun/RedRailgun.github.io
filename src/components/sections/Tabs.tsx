import { useEffect, useState } from 'react';

const tabs = [
  { id: 'projects', label: 'PROJECTS' },
  { id: 'clients', label: 'CLIENTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'about', label: 'ABOUT ME' },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentTab = '';
      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentTab = tab.id;
          }
        }
      }
      
      // Select the last tab if we are at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentTab = tabs[tabs.length - 1].id;
      }
      
      setActiveTab(currentTab);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeTab) {
      const tabElement = document.getElementById(`tab-nav-${activeTab}`);
      if (tabElement) {
        const container = tabElement.parentElement;
        if (container) {
          const scrollLeft = tabElement.offsetLeft - container.offsetWidth / 2 + tabElement.offsetWidth / 2;
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }
    }
  }, [activeTab]);

  return (
    <div className="sticky top-0 z-50 w-full transition-all pointer-events-none">
      <div className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-3 items-center pointer-events-auto scrollbar-none py-8 -my-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={`tab-nav-${tab.id}`}
            className={`group rounded-full shrink-0 transition-all duration-300 ${
              index === 0 ? 'ml-4 sm:ml-8 lg:ml-12 xl:ml-20' : ''
            } ${
              index === tabs.length - 1 ? 'mr-4 sm:mr-8 lg:mr-12 xl:mr-20' : ''
            } ${
              activeTab === tab.id
                ? 'tab-glass-active'
                : 'tab-glass cursor-pointer'
            }`}
          >
            <a
              href={`#${tab.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(tab.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 120;
                  window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`block px-4 py-2 text-lg md:text-xl font-extrabold font-condensed uppercase whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'text-blue-50'
                  : 'text-slate-600 group-hover:text-slate-900'
              }`}
            >
              {tab.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
