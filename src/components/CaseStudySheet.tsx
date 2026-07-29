import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { X } from 'lucide-react';

export function CaseStudySheet({
  isOpen,
  onClose,
  fileUrl
}: {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string | null;
}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isOpen && fileUrl) {
      fetch(fileUrl)
        .then(res => res.text())
        .then(text => setContent(text));
    }
  }, [isOpen, fileUrl]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      {/* Sheet */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out w-full sm:w-full md:w-2/3 lg:w-1/2 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <h2 className="sr-only">Case Study</h2>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 button-glass w-10 h-10 text-slate-700" aria-label="Close case study">
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <div className="flex-1 overflow-y-auto p-6 pt-20! sm:p-10 hide-scrollbar bg-slate-50/30">
          <div className="markdown-body">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}
