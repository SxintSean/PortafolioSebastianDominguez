import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
        <p className="fade-in-up delay-100 text-xs font-semibold tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--c-m)' }}>
          {h.greeting}
        </p>
        <h1 className="fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
          <span className="gradient-text">{h.name}</span>
        </h1>
        <div className="fade-in-up delay-300 flex items-center justify-center gap-3 mb-6 flex-wrap">
          <span className="text-xl sm:text-2xl font-light" style={{ color: 'var(--c-b)' }}>{h.role}</span>
          <span style={{ color: 'var(--c-f)' }}>·</span>
          <span className="text-lg" style={{ color: 'var(--c-m)' }}>{h.location}</span>
        </div>
        <p className="fade-in-up delay-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
           style={{ color: 'var(--c-m)' }}>
          {h.subtitle}
        </p>
        <div className="fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact"
            className="glass px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ color: 'var(--c-h)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
            {h.cta_contact}
          </a>
          <a href="#projects"
            className="glass px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ color: 'var(--c-b)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}>
            {h.cta_projects}
          </a>
        </div>
        <div className="fade-in-up delay-600 mt-20 flex flex-col items-center gap-2" style={{ color: 'var(--c-f)' }}>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, var(--c-f))' }} />
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="animate-bounce">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
