import { useEffect, useRef } from 'react';

export default function Cursor() {
  const orbRef  = useRef(null);
  const dotRef  = useRef(null);
  const pos     = useRef({ x: -100, y: -100 });
  const cur     = useRef({ x: -100, y: -100 });
  const hover   = useRef(false);
  const clicking = useRef(false);
  const raf     = useRef(null);

  useEffect(() => {
    /* ── Skip on touch devices ── */
    if (window.matchMedia('(pointer: coarse)').matches) return;

    /* ── Mouse position ── */
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      /* Dot follows instantly */
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }

      /* Detect interactive elements for hover state */
      hover.current = !!e.target.closest('a, button, [role="button"], input, select, textarea, label');
    };

    /* ── Click pulse ── */
    const onDown = () => { clicking.current = true;  };
    const onUp   = () => { clicking.current = false; };

    /* ── RAF loop — smooth lerp for the orb ── */
    const animate = () => {
      const lerp = 0.13;
      cur.current.x += (pos.current.x - cur.current.x) * lerp;
      cur.current.y += (pos.current.y - cur.current.y) * lerp;

      if (orbRef.current) {
        const size   = hover.current   ? 54 : clicking.current ? 28 : 38;
        const offset = size / 2;
        const opacity = hover.current  ? 0.28 : clicking.current ? 0.38 : 0.22;

        orbRef.current.style.transform  = `translate(${cur.current.x - offset}px, ${cur.current.y - offset}px)`;
        orbRef.current.style.width      = `${size}px`;
        orbRef.current.style.height     = `${size}px`;
        orbRef.current.style.opacity    = opacity;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* ── Liquid glass orb — lags behind (lerp) ── */}
      <div
        ref={orbRef}
        style={{
          position:         'fixed',
          top:              0,
          left:             0,
          width:            '38px',
          height:           '38px',
          borderRadius:     '50%',
          pointerEvents:    'none',
          zIndex:           99999,
          willChange:       'transform, width, height',
          transition:       'width 0.18s ease, height 0.18s ease, opacity 0.18s ease',
          /* Liquid glass */
          background:       'rgba(255, 255, 255, 0.18)',
          backdropFilter:   'blur(18px) saturate(400%) brightness(1.12)',
          WebkitBackdropFilter: 'blur(18px) saturate(400%) brightness(1.12)',
          border:           '1px solid rgba(255,255,255,0.68)',
          boxShadow: `
            inset 0 1.5px 0 rgba(255,255,255,0.96),
            inset 0 0 0 0.5px rgba(255,255,255,0.22),
            inset 0 -0.5px 0 rgba(0,0,0,0.06),
            0 0 0 0.5px rgba(255,255,255,0.18),
            0 6px 20px rgba(60,48,32,0.14)
          `,
          overflow: 'hidden',
        }}
      >
        {/* Surface gradient — simulates light on the glass sphere */}
        <div
          style={{
            position:     'absolute',
            inset:        0,
            borderRadius: '50%',
            background:   'linear-gradient(145deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Precise dot — follows mouse exactly ── */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         '6px',
          height:        '6px',
          borderRadius:  '50%',
          pointerEvents: 'none',
          zIndex:        99999,
          willChange:    'transform',
          background:    'rgba(255,255,255,0.92)',
          boxShadow:     '0 0 8px rgba(108,185,88,0.65), 0 0 3px rgba(255,255,255,0.9)',
        }}
      />
    </>
  );
}
