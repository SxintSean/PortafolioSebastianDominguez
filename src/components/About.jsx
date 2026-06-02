import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { IconLayers, IconBuilding, IconCart, IconGlobe, IconBook } from './Icons';

const expertiseIcons = [IconLayers, IconBuilding, IconCart, IconGlobe, IconBook];

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const ref = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{a.title}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 flex flex-col gap-6">
            <p className="text-base leading-relaxed" style={{ color: 'var(--c-b)' }}>{a.description}</p>
            <div className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--c-m)' }}>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: 'var(--c-sage)' }} />
              {a.english_level}
            </div>
            <div className="mt-auto rounded-2xl px-5 py-4"
              style={{ background: 'rgba(108,185,88,0.10)', border: '1px solid rgba(108,185,88,0.22)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--c-b)' }}>{a.fun_fact}</p>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--c-h)' }}>{a.expertise_title}</h3>
            <ul className="flex flex-col gap-3">
              {a.expertise.map((item, i) => {
                const Icon = expertiseIcons[i];
                return (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--c-b)' }}>
                    <Icon className="shrink-0 mt-0.5" style={{ color: 'var(--c-sage)' }} />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
