import { useEffect, useRef } from 'react';
import { about } from '../data/content';

function useFadeRise() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref = useFadeRise();
  return (
    <section id="about" ref={ref} className="fade-rise" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label">// 06. About</p>
        <h2 className="section-heading">
          The <span>rationale</span>
        </h2>
        <div className="accent-line" />

        <div className="about__grid">
          <div className="about__paras">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>
              Education
            </p>
            {about.educationCards.map(card => (
              <div key={card.institution} className="edu-card">
                <p className="edu-card__institution">{card.institution}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-mute)', marginBottom: 'var(--sp-1)' }}>{card.location}</p>
                <p className="edu-card__degree">{card.degree}</p>
                <div className="edu-card__meta">
                  <span className="edu-card__period">{card.period}</span>
                  <span className="edu-card__grade">{card.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
