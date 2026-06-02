import { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { IconGlobe } from './Icons';

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden,   setHidden]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY   = useRef(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setHidden(false);
      } else if (y > lastY.current + 8) {
        setHidden(true);   // scrolling down → hide
        setMenuOpen(false);
      } else if (y < lastY.current - 5) {
        setHidden(false);  // scrolling up → show
      }
      lastY.current = y;
      setScrolled(y > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    const fn = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [menuOpen]);

  const links = [
    { href: '#about',    label: t.nav.about },
    { href: '#stack',    label: t.nav.stack },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact',  label: t.nav.contact },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      style={{
        transform: hidden ? 'translateY(-110%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    >
      <div ref={menuRef} style={{ position: 'relative' }}>

        {/* ── Pill ── */}
        <div className={`glass-nav rounded-full ${scrolled ? 'shadow-md' : ''}`}>
          <div className="flex items-center gap-1 px-4 py-2.5">
            <a href="#" className="gradient-text font-bold text-base mr-3 tracking-tight">SD</a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ color: 'var(--c-m)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--c-h)'; e.currentTarget.style.background = 'var(--glass-bg)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--c-m)'; e.currentTarget.style.background = ''; }}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Lang toggle */}
            <button onClick={toggle}
              className="ml-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5"
              style={{ background: 'rgba(108,185,88,0.15)', color: 'var(--c-sage)', border: '1px solid rgba(108,185,88,0.30)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(108,185,88,0.26)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(108,185,88,0.15)'; }}>
              <IconGlobe width={13} height={13} />
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden ml-1 p-1.5 rounded-full"
              style={{ color: 'var(--c-m)' }} aria-label="Menu">
              {menuOpen
                ? <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M18 6L6 18M6 6l12 12" /></svg>
                : <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              }
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {menuOpen && (
          <div
            className="md:hidden glass"
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              minWidth: '200px',
              borderRadius: '18px',
              padding: '8px',
              background: 'var(--dropdown-bg)',
            }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ color: 'var(--c-h)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ''; }}>
                {l.label}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
