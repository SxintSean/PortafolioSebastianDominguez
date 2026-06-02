import { useEffect, useState } from 'react';
import { IconWhatsApp } from './Icons';
import { useTheme } from '../context/ThemeContext';

const glass = {
  width: '50px', height: '50px', borderRadius: '50%',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(48px) saturate(420%) brightness(1.12)',
  WebkitBackdropFilter: 'blur(48px) saturate(420%) brightness(1.12)',
  border: '1px solid var(--glass-border)',
  boxShadow: `inset 0 1.5px 0 var(--glass-spec), inset 0 0 0 0.5px var(--glass-rim), inset 0 -0.5px 0 rgba(0,0,0,0.05), 0 0 0 0.5px var(--glass-rim), 0 8px 28px var(--glass-shadow)`,
  transition: 'transform 0.22s ease, box-shadow 0.22s ease, opacity 0.30s ease',
  color: 'var(--c-b)',
  position: 'relative', overflow: 'hidden',
};

const hoverIn  = (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; };
const hoverOut = (e) => { e.currentTarget.style.transform = ''; };

function Surface() {
  return (
    <span style={{
      position:'absolute', inset:0, borderRadius:'50%', pointerEvents:'none',
      background:'linear-gradient(158deg, var(--glass-grad-a) 0%, rgba(255,255,255,0.07) 38%, transparent 60%)',
    }} />
  );
}

/* Sun / Moon icons inline */
function IconSun() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{ position:'fixed', bottom:'28px', right:'24px', zIndex:9998, display:'flex', flexDirection:'column', alignItems:'center', gap:'12px' }}>

      {/* Dark / Light toggle */}
      <button
        onClick={toggle}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={glass}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <Surface />
        <span style={{ position:'relative', zIndex:1 }}>
          {dark ? <IconSun /> : <IconMoon />}
        </span>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5525662418"
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{ ...glass, color: '#25a560' }}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <Surface />
        <IconWhatsApp width={22} height={22} style={{ position:'relative', zIndex:1 }} />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        aria-label="Scroll to top"
        style={{
          ...glass,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
        }}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
      >
        <Surface />
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ position:'relative', zIndex:1 }}>
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
