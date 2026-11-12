import { useEffect, useRef } from 'react';
import { itSkills, itInternship, itProjects, certifications, itBridgeLine } from '../data/content';

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

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export default function Software() {
  const ref = useFadeRise();
  return (
    <section id="software" ref={ref} className="fade-rise software">
      <div className="container">
        <p className="section-label">// 07. Software &amp; AI</p>
        <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          Software as a <span>force multiplier</span>
        </h2>
        <div className="accent-line" />

        {/* Bridge line */}
        <p className="it-bridge">{itBridgeLine}</p>

        {/* IT Skills */}
        <div style={{ marginBottom: 'var(--sp-10)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--sp-5)' }}>
            Technical Skills
          </p>
          <div className="skills__groups">
            {itSkills.map(group => (
              <div key={group.group}>
                <p className="skills__group-title" style={{ fontSize: '0.88rem' }}>{group.group}</p>
                <ul className="skills__items">
                  {group.items.map(item => (
                    <li key={item} className="skills__item" style={{ fontSize: '0.82rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* KaarTech Internship */}
        <div className="it-internship">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--sp-3)', marginBottom: 'var(--sp-4)' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--mono)', marginBottom: 'var(--sp-1)' }}>
                INTERNSHIP
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>
                {itInternship.role}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-dim)', marginTop: 'var(--sp-1)' }}>
                {itInternship.company}
              </p>
            </div>
            <span className="status-tag completed">
              <span className="status-dot" />
              Completed
            </span>
          </div>
          <ul className="bullet-list">
            {itInternship.bullets.map(b => <li key={b}>{b}</li>)}
          </ul>
        </div>

        {/* IT Projects */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 'var(--sp-8) 0 var(--sp-5)' }}>
          Projects
        </p>
        <div className="software__grid">
          {itProjects.map(project => (
            <article key={project.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <span className="status-tag built">
                  <span className="status-dot" />
                  {project.status}
                </span>
              </div>

              <div className="flex-gap-2 mb-4">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 'var(--sp-4)' }}>
                {project.summary}
              </p>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.78rem', padding: '6px 12px' }}
                >
                  View on GitHub <ExternalIcon />
                </a>
              ) : (
                <span style={{ fontSize: '0.72rem', color: 'var(--text-mute)' }}>
                  Private / local
                </span>
              )}
            </article>
          ))}
        </div>

        {/* Certifications */}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 'var(--sp-8) 0 var(--sp-5)' }}>
          Certifications
        </p>
        <div style={{ display: 'grid', gap: 'var(--sp-4)' }}>
          {certifications.map(cert => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card__icon">MS</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--sp-3)', flexWrap: 'wrap', marginBottom: 'var(--sp-2)' }}>
                  <div>
                    <p className="cert-card__title">{cert.title}</p>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card__link"
                      aria-label={`Verify ${cert.title} credential on Microsoft Learn`}
                    >
                      Verify Credential <ExternalIcon />
                    </a>
                  )}
                </div>
                <p className="cert-card__summary">{cert.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
