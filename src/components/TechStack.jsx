import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { techStack } from '../data/techStack';

const ICON_POSITIONS = [
  { top:  6, left:  4, size: 52, anim: 1, delay:    0 },
  { top: 10, left: 20, size: 44, anim: 2, delay:   -3 },
  { top:  4, left: 38, size: 50, anim: 3, delay:   -7 },
  { top:  9, left: 57, size: 42, anim: 4, delay:   -2 },
  { top:  5, left: 76, size: 54, anim: 5, delay:   -5 },
  { top: 32, left:  8, size: 58, anim: 2, delay:   -9 },
  { top: 28, left: 28, size: 46, anim: 3, delay:   -1 },
  { top: 38, left: 48, size: 52, anim: 1, delay:   -6 },
  { top: 30, left: 68, size: 48, anim: 4, delay:   -4 },
  { top: 35, left: 88, size: 44, anim: 5, delay:   -8 },
  { top: 60, left:  2, size: 50, anim: 3, delay:   -3 },
  { top: 56, left: 22, size: 56, anim: 1, delay:   -7 },
  { top: 64, left: 43, size: 42, anim: 2, delay:   -5 },
  { top: 58, left: 63, size: 54, anim: 5, delay:   -1 },
  { top: 66, left: 83, size: 46, anim: 4, delay:  -10 },
  { top: 84, left: 14, size: 48, anim: 4, delay:   -2 },
  { top: 88, left: 54, size: 50, anim: 2, delay:   -6 },
];

const ALL_TECH = [
  ...techStack.languages,
  ...techStack.backend,
  ...techStack.frontend,
  ...techStack.databases,
  ...techStack.devops,
];

export default function TechStack() {
  const { t } = useLang();
  const s = t.stack;
  const c = s.categories;
  const ref = useInView();

  return (
    <section id="stack" className="relative py-28 px-6 overflow-hidden" style={{ minHeight: '700px' }}>
      {/* Floating icons background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {ALL_TECH.map((tech, i) => {
          const p = ICON_POSITIONS[i % ICON_POSITIONS.length];
          return (
            <div key={tech.name} className={`absolute float-tech-${p.anim}`}
              style={{ top: `${p.top}%`, left: `${p.left}%`, animationDelay: `${p.delay}s` }}>
              <img src={tech.icon} alt="" width={p.size} height={p.size}
                style={{ opacity: 0.20, filter: 'grayscale(0.5) sepia(0.4) brightness(0.9)', display: 'block' }} />
            </div>
          );
        })}
      </div>

      <div ref={ref} className="section-reveal relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="gradient-text">{s.title}</span>
        </h2>
        <p className="text-sm mb-12" style={{ color: 'var(--c-m)' }}>
          {c.languages} · {c.backend} · {c.frontend} · {c.databases} · {c.devops}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {ALL_TECH.map((tech) => (
            <span key={tech.name} className="glass rounded-full px-4 py-2 text-sm font-medium"
              style={{ color: 'var(--c-b)' }}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
