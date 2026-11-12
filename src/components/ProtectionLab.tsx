import { useEffect, useRef } from 'react';
import { protectionLabNotes } from '../data/content';

function useFadeRise() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function ProtectionLab() {
  const ref = useFadeRise();
  return (
    <section id="lab" ref={ref} className="fade-rise" style={{ background: 'var(--bg-2)', paddingTop: 'var(--sp-24)', paddingBottom: 'var(--sp-24)' }}>
      <div className="container">
        <p className="section-label">// 04. Protection Lab</p>
        <h2 className="section-heading">
          Technical <span>Notes</span>
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', maxWidth: 620, marginBottom: 'var(--sp-4)', lineHeight: 1.7 }}>
          Short technical notes built from my project deliverables. Each one addresses a "why?" question about protection and control design.
        </p>
        <div className="accent-line" />

        <div className="lab__grid">
          {protectionLabNotes.map(note => (
            <article key={note.id} className="lab-note">
              <p className="lab-note__q">{note.question}</p>
              <p className="lab-note__body">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
