import { useState, useEffect, useRef } from 'react';
import { person } from '../data/content';

function useFadeRise() {
  const ref = useRef<HTMLElement>(null);
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

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useFadeRise();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback: select and copy
      const el = document.createElement('textarea');
      el.value = person.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <section id="contact" ref={ref} className="fade-rise">
        <div className="container">
          <div className="contact__inner">
            <p className="section-label" style={{ textAlign: 'center' }}>// 09. Contact</p>
            <h2 className="contact__heading">
              Let's start a <span style={{ color: 'var(--accent)' }}>conversation</span>
            </h2>
            <p className="contact__sub">
              I am actively seeking graduate opportunities in control and protection design, substation automation or power conversion engineering. If you are hiring or would like to discuss my work, I would welcome a conversation.
            </p>

            {/* Email */}
            <div className="contact__email-row" role="group" aria-label="Contact email">
              <span className="contact__email-display" aria-label={`Email: ${person.email}`}>
                {person.email}
              </span>
              <a
                href={`mailto:${person.email}`}
                className="btn btn-primary"
                style={{ fontSize: '0.82rem' }}
                aria-label={`Send email to ${person.email}`}
              >
                Email me
              </a>
              <button
                className={`copy-btn${copied ? ' copied' : ''}`}
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email"
              >
                <CopyIcon />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Links */}
            <div className="contact__links">
              <a
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
                aria-label="GitHub profile"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href={person.resumeFile}
                download="ARVIND_SA_EEE_Hitachi_Energy.docx"
                className="btn btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
                aria-label="Download resume"
              >
                <DownloadIcon /> {person.resumeLabel}
              </a>
            </div>

            <p style={{ fontSize: '0.72rem', color: 'var(--text-mute)', marginTop: 'var(--sp-4)' }}>
              No backend form — email links open your mail client or you can copy the address above.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer__inner">
            <p className="footer__disclaimer">
              Projects marked desk-based are educational and use illustrative data. They are not approved designs, not site-tested, and not intended for construction or commissioning.
            </p>
            <p className="footer__copy">
              © 2026 Arvind S A
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
