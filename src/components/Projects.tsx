import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { electricalProjects, internship } from '../data/content';

// ── Helpers ────────────────────────────────────────────────────────────────

function useFadeRise() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}


// ── Main Projects Component ─────────────────────────────────────────────────


export default function Projects() {
  const sectionRef = useFadeRise();
  const bay = electricalProjects.find(p => p.id === 'bay132')!;
  const retrofit = electricalProjects.find(p => p.id === 'retrofit')!;
  const tlms = electricalProjects.find(p => p.id === 'tlms')!;

  return (
    <section id="projects" ref={sectionRef} className="fade-rise">
      <div className="container">
        <p className="section-label">// 03. Featured Projects</p>
        <h2 className="section-heading">
          Engineering <span>Work</span>
        </h2>
        <div className="accent-line" />

        <div className="projects__grid">

          {/* ── 132 kV Bay ── */}
          <article className="project-card" id="project-bay132">
            <div className="project-card__top">
              <div>
                <h3 className="project-card__title">{bay.title}</h3>
                <p className="project-card__status-note">{bay.statusNote}</p>
              </div>
              <div className="flex-gap-2">
                <span className="status-tag in-progress">
                  <span className="status-dot" />
                  {bay.status}
                </span>
              </div>
            </div>

            <div className="project-card__tags">
              {bay.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <p className="project-card__summary">{bay.summary}</p>

            <ul className="bullet-list" style={{ marginTop: 'var(--sp-4)' }}>
              <li>Distance protection (21) — forward static mho zones for all six fault loops</li>
              <li>Overcurrent and earth-fault backup (51/51N) — definite-time, non-directional</li>
              <li>VT supervision — blocks distance; overcurrent backup stays armed</li>
              <li>Breaker-failure (50BF/86BF) — TC2 retrip at 100 ms, bus backup at 200 ms</li>
              <li>Trip-circuit supervision (TCS) — alarm at 100 ms; inhibits closing on unhealthy channel</li>
              <li>Closing logic — local/remote, position/mechanism/DC interlocks, edge-qualified</li>
              <li>64/64 Python automated checks passed locally · Revision B · 21 Oct 2026</li>
              <li>Scope: desk study only — no EMT solver, no hardware, no commissioning</li>
            </ul>
          </article>

          {/* ── Feeder Retrofit ── */}
          <article className="project-card" id="project-retrofit">
            <div className="project-card__top">
              <div>
                <h3 className="project-card__title">{retrofit.title}</h3>
                <p className="project-card__status-note">{retrofit.statusNote}</p>
              </div>
              <span className="status-tag completed">
                <span className="status-dot" />
                {retrofit.status}
              </span>
            </div>

            <div className="project-card__tags">
              {retrofit.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <p className="project-card__summary">{retrofit.summary}</p>

            <ul className="bullet-list" style={{ marginTop: 'var(--sp-4)' }}>
              <li>67 wiring records — retained, removed, modified and new cores</li>
              <li>12-stage changeover sequence with defined hold points</li>
              <li>11 qualitative risk hazards documented</li>
              <li>8 trip-matrix entries, 15 SCADA points, 25 BoM items</li>
              <li>4 editable DXF drawings generated from a single data file</li>
              <li>Automated Python checks: 0 errors, 6 warnings (pending verification)</li>
              <li>Scope: conceptual desk study only — not for construction or site use</li>
            </ul>
          </article>

          {/* ── TLMS ── */}
          <article className="project-card" id="project-tlms">
            <div className="project-card__top">
              <div>
                <h3 className="project-card__title">{tlms.title}</h3>
                <p className="project-card__status-note">{tlms.statusNote}</p>
              </div>
              <span className="status-tag completed">
                <span className="status-dot" />
                {tlms.status}
              </span>
            </div>

            <div className="project-card__tags">
              {tlms.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            {/* Simple illustrative MATLAB/hardware diagram */}
            <svg viewBox="0 0 480 120" width="100%" style={{ maxHeight: 120, display: 'block', margin: '16px 0' }} aria-label="Three-phase fault analysis: MATLAB simulation connected to Arduino monitoring prototype" role="img">
              <rect width="480" height="120" fill="var(--bg)" rx="8"/>
              <rect x="20" y="20" width="160" height="80" fill="var(--bg-2)" stroke="var(--border)" strokeWidth="1.5" rx="6"/>
              <text x="100" y="45" textAnchor="middle" fontSize="9" fill="var(--text-dim)" fontFamily="JetBrains Mono,monospace">MATLAB / Simulink</text>
              <text x="100" y="58" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">Simscape Electrical</text>
              <text x="100" y="71" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">3-phase line model</text>
              <text x="100" y="84" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">LG &amp; LL fault analysis</text>
              <line x1="185" y1="60" x2="240" y2="60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7"/>
              <text x="212" y="52" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">compare</text>
              <rect x="245" y="20" width="215" height="80" fill="var(--bg-2)" stroke="var(--accent-dim)" strokeWidth="1.5" rx="6"/>
              <text x="352" y="45" textAnchor="middle" fontSize="9" fill="var(--text-dim)" fontFamily="JetBrains Mono,monospace">Arduino Uno Prototype</text>
              <text x="352" y="58" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">V/I sensors · relay hardware</text>
              <text x="352" y="71" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">threshold-based fault detection</text>
              <text x="352" y="84" textAnchor="middle" fontSize="8" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">serial diagnostics</text>
              <text x="240" y="112" textAnchor="middle" fontSize="7" fill="var(--text-mute)" fontFamily="JetBrains Mono,monospace">Low-voltage prototype — educational</text>
            </svg>

            <p className="project-card__summary">{tlms.summary}</p>

            <ul className="bullet-list" style={{ marginTop: 'var(--sp-4)' }}>
              {'highlights' in tlms && (tlms.highlights as string[]).map((h: string) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>

          {/* ── Internship ── */}
          <article className="internship-card" id="project-internship">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--sp-3)', marginBottom: 'var(--sp-4)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--mono)', marginBottom: 'var(--sp-1)' }}>
                  INTERNSHIP EXPERIENCE
                </p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)' }}>
                  {internship.role}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-dim)', marginTop: 'var(--sp-1)' }}>
                  {internship.company} · {internship.duration}
                </p>
              </div>
              <span className="status-tag completed">
                <span className="status-dot" />
                Completed
              </span>
            </div>
            <ul className="bullet-list">
              {internship.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
