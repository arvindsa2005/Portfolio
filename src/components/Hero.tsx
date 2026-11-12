import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from '../canvas/BackgroundAnimation';
import { person } from '../data/content';

function useFadeRise() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export default function Hero() {
  const ref = useFadeRise();

  return (
    <section id="hero" className="hero">
      <BackgroundAnimation />
      <div className="container">
        <div ref={ref} className="hero__content fade-rise">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="hero__eyebrow">// Graduate Engineer · Class of 2026</p>

            <h1 className="hero__name">
              Arvind<span className="accent"> S A</span>
            </h1>

            <p className="hero__positioning">
              {person.positioning}
            </p>

            <p className="hero__intro">
              {person.introParagraph}
            </p>

            <div className="hero__ctas">
              <a href="#projects" className="btn btn-primary" onClick={e => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                View Projects
              </a>
              <a href={person.resumeFile} download="ARVIND_SA_EEE_Hitachi_Energy.docx" className="btn btn-outline">
                Resume
              </a>
              <a href={person.linkedIn} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LinkedIn <ExternalLinkIcon />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub <ExternalLinkIcon />
              </a>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
