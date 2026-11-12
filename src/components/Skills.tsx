import { useEffect, useRef } from 'react';
import { tier1Skills, tier2Skills } from '../data/content';

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

export default function Skills() {
  const ref = useFadeRise();
  return (
    <section id="skills" ref={ref} className="fade-rise">
      <div className="container">
        <p className="section-label">// 02. Skills &amp; Stack</p>
        <h2 className="section-heading">
          What I can <span>do</span>
        </h2>
        <div className="accent-line" />

        {/* Tier 1 */}
        <div className="skills__tier">
          <p className="skills__tier-label">
            ● Applied in my projects
          </p>
          <div className="skills__groups">
            {tier1Skills.map(group => (
              <div key={group.group}>
                <p className="skills__group-title">{group.group}</p>
                <ul className="skills__items">
                  {group.items.map(item => (
                    <li key={item} className="skills__item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div className="skills__tier">
          <p className="skills__tier-label" style={{ color: 'var(--text-mute)' }}>
            ○ Working knowledge / learning
          </p>
          <div className="skills__groups">
            {tier2Skills.map(group => (
              <div key={group.group}>
                <p className="skills__group-title" style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>
                  {group.group}
                </p>
                <ul className="skills__items">
                  {group.items.map(item => (
                    <li key={item} className="skills__item" style={{ color: 'var(--text-mute)', fontSize: '0.82rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
