import { useLang } from '../context/LanguageContext';
import { IconHeart } from './Icons';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="px-6 py-5" style={{ borderTop: '1px solid var(--glass-border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ color: 'var(--c-f)' }}>
        <span>{f.rights}</span>
        <span className="flex items-center gap-1.5">
          {f.built}
          <IconHeart style={{ color: 'var(--c-sage)' }} />
        </span>
      </div>
    </footer>
  );
}
