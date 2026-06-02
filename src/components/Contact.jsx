import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const ref = useInView();

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">{c.title}</span>
        </h2>
        <p className="text-center text-sm sm:text-base mb-14 max-w-lg mx-auto" style={{ color: '#A8A098' }}>
          {c.subtitle}
        </p>

        <div className="glass rounded-3xl p-10 max-w-sm mx-auto flex flex-col gap-4">
          <a
            href="mailto:dosmildosmo1999@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(145deg, rgba(120, 168, 100, 0.88), rgba(92, 138, 72, 0.94))',
              border: '1px solid rgba(255,255,255,0.50)',
              boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.50), 0 4px 20px rgba(92,138,72,0.28)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {c.email_btn}
          </a>

          <a
            href="https://www.linkedin.com/in/sebastian-dominguez-ordaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200"
            style={{ color: '#5C5045' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            {c.linkedin_btn}
          </a>
        </div>
      </div>
    </section>
  );
}
