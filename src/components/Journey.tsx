import { useEffect, useRef } from 'react';
import { journey } from '../data/content';

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

export default function Journey() {
  const ref = useFadeRise();
  return (
    <section id="journey" ref={ref} className="fade-rise">
      <div className="container">
        <p className="section-label">// 05. Technical Journey</p>
        <h2 className="section-heading">
          How I got <span>here</span>
        </h2>
        <div className="accent-line" />

        <div className="journey__timeline">
          <div className="journey__line" aria-hidden="true" />

          {journey.map((item) => (
            <article key={item.id} className="journey__item">
              <div className="journey__dot" aria-hidden="true" />
              <p className="journey__stage">
                Stage {item.stage.toString().padStart(2, '0')} / {journey.length.toString().padStart(2, '0')}
              </p>
              <h3 className="journey__title">{item.title}</h3>
              <p className="journey__period">{item.period}</p>
              <p className="journey__body">{item.body}</p>
              <p className="journey__takeaway">
                "{item.takeaway}"
                {item.draftReview && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-mute)', marginLeft: 8 }}>
                    [draft — review]
                  </span>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
