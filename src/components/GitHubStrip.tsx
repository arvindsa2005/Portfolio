import { useEffect, useState } from 'react';
import { githubFallbackRepos, person } from '../data/content';

interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  classification: 'IT' | 'Electrical';
}

async function fetchGitHubRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    headers: { 'Accept': 'application/vnd.github.v3+json' },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const data = await res.json();
  // Filter: skip forks with no description, empty repos
  return (data as any[])
    .filter(r => !r.fork && r.description)
    .map(r => ({
      name: r.name,
      description: r.description || '',
      language: r.language || '—',
      url: r.html_url,
      classification: 'IT' as const,
    }));
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export default function GitHubStrip() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<'loading' | 'live' | 'fallback' | 'error'>('loading');

  useEffect(() => {
    const username = person.github.split('/').pop() || '';
    let cancelled = false;

    fetchGitHubRepos(username)
      .then(data => {
        if (cancelled) return;
        if (data.length > 0) {
          setRepos(data);
          setStatus('live');
        } else {
          setRepos(githubFallbackRepos);
          setStatus('fallback');
        }
      })
      .catch(() => {
        if (cancelled) return;
        setRepos(githubFallbackRepos);
        setStatus('fallback');
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <section className="github-strip" id="github">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--sp-4)', marginBottom: 'var(--sp-6)' }}>
          <div>
            <p className="section-label">// 08. GitHub</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' }}>
              Public Repositories
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
            {status === 'loading' && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-mute)' }}>
                Loading…
              </span>
            )}
            {status === 'live' && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#6EE7B7' }}>
                ● Live from API
              </span>
            )}
            {status === 'fallback' && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-dim)' }}>
                ○ Static fallback (API unavailable or rate-limited)
              </span>
            )}
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: '0.78rem', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
            >
              <GitHubIcon /> View all
            </a>
          </div>
        </div>

        {repos.length === 0 && status !== 'loading' && (
          <p className="github-error">No public repositories found.</p>
        )}

        <div className="github__repos">
          {repos.map(repo => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
              aria-label={`${repo.name} — ${repo.description}`}
            >
              <p className="repo-card__name">
                <span style={{ display: 'inline-flex', marginRight: 6, verticalAlign: 'middle' }}><GitHubIcon /></span>
                {repo.name}
              </p>
              <p className="repo-card__desc">{repo.description}</p>
              <p className="repo-card__lang">
                <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--mono)', marginRight: 6, verticalAlign: 'middle' }} />
                {repo.language}
              </p>
            </a>
          ))}
        </div>

        <p style={{ fontSize: '0.72rem', color: 'var(--text-mute)', marginTop: 'var(--sp-5)' }}>
          Electrical project repositories (132 kV bay, retrofit study) are private or not yet published on GitHub. Only non-fork repos with descriptions are shown.
        </p>
      </div>
    </section>
  );
}
