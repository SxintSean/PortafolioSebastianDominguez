import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { IconGoogleCloud, IconCisco } from './Icons';

const GOOGLE_CLOUD = [
  { name: 'Google Cloud Computing Foundations',           type: 'Certificate',  date: 'Jul 10, 2025' },
  { name: 'Build a Secure Google Cloud Network',          type: 'Skill Badge',  date: 'Jul 10, 2025' },
  { name: 'Prepare Data for ML APIs on Google Cloud',     type: 'Skill Badge',  date: 'Jul 10, 2025' },
  { name: 'Implement Load Balancing on Compute Engine',   type: 'Skill Badge',  date: 'Jun 9, 2025'  },
  { name: 'Set Up an App Dev Environment on Google Cloud',type: 'Skill Badge',  date: 'Jun 12, 2025' },
];

const CISCO = [
  { name: 'CCNA: Switching, Routing & Wireless Essentials', type: 'Verified', date: 'Aug 22, 2024' },
  { name: 'CCNA: Introduction to Networks',                 type: 'Verified', date: 'Apr 16, 2024' },
  { name: 'Python Essentials 2',                            type: 'Verified', date: 'Feb 1, 2024'  },
  { name: 'Python Essentials 1',                            type: 'Verified', date: 'Jan 26, 2024' },
  { name: 'JavaScript Essentials 1',                        type: 'Verified', date: 'Apr 4, 2024'  },
  { name: 'Using Computer and Mobile Devices',              type: 'Verified', date: 'Jun 29, 2025' },
];

/* ── Issuer configs ── */
const ISSUERS = {
  googleCloud: {
    label: 'Google Cloud',
    Icon: IconGoogleCloud,
    badgeBg:     'rgba(66, 133, 244, 0.12)',
    badgeBorder: 'rgba(66, 133, 244, 0.30)',
    iconColor:   '#4285F4',
    typePill:    { bg: 'rgba(52, 168, 83, 0.12)', border: 'rgba(52, 168, 83, 0.28)', text: '#1E8E3E' },
    dateColor:   '#4285F4',
    headingColor:'#2A6FD6',
    certs: GOOGLE_CLOUD,
  },
  cisco: {
    label: 'Cisco Networking Academy',
    Icon: IconCisco,
    badgeBg:     'rgba(29, 159, 215, 0.12)',
    badgeBorder: 'rgba(29, 159, 215, 0.30)',
    iconColor:   '#1D9FD7',
    typePill:    { bg: 'rgba(29, 159, 215, 0.12)', border: 'rgba(29, 159, 215, 0.28)', text: '#0E7AAB' },
    dateColor:   '#1D9FD7',
    headingColor:'#0E7AAB',
    certs: CISCO,
  },
};

function CertCard({ cert, issuer }) {
  const { Icon, badgeBg, badgeBorder, iconColor, typePill, dateColor } = issuer;

  return (
    <div
      className="glass rounded-2xl p-4 flex flex-col gap-3 transition-all duration-200"
      style={{ minWidth: '200px', flex: '1 1 200px' }}
    >
      {/* Issuer badge + type pill */}
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: badgeBg, border: `1px solid ${badgeBorder}` }}
        >
          <Icon width={18} height={18} style={{ color: iconColor }} />
        </div>
        <span
          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
          style={{ background: typePill.bg, border: `1px solid ${typePill.border}`, color: typePill.text }}
        >
          {cert.type}
        </span>
      </div>

      {/* Name */}
      <p className="text-sm font-semibold leading-snug flex-1" style={{ color: '#5C5045' }}>
        {cert.name}
      </p>

      {/* Date */}
      <p className="text-xs font-medium" style={{ color: dateColor, opacity: 0.85 }}>
        {cert.date}
      </p>
    </div>
  );
}

function IssuerGroup({ issuerKey }) {
  const issuer = ISSUERS[issuerKey];
  const { Icon, headingColor, badgeBg, badgeBorder, iconColor } = issuer;

  return (
    <div className="flex flex-col gap-4">
      {/* Group header */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: badgeBg, border: `1px solid ${badgeBorder}` }}
        >
          <Icon width={16} height={16} style={{ color: iconColor }} />
        </div>
        <span className="text-sm font-semibold tracking-wide" style={{ color: headingColor }}>
          {issuer.label}
        </span>
        <span className="text-xs" style={{ color: '#C2B8AE' }}>
          · {issuer.certs.length} certifications
        </span>
      </div>

      {/* Cards row */}
      <div className="flex flex-wrap gap-3">
        {issuer.certs.map((cert) => (
          <CertCard key={cert.name} cert={cert} issuer={issuer} />
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  const { t } = useLang();
  const c = t.certifications;
  const ref = useInView();

  return (
    <section id="certifications" className="py-24 px-6">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">{c.title}</span>
        </h2>
        <p className="text-center text-sm mb-14" style={{ color: '#AEA89E' }}>
          {c.subtitle}
        </p>

        <div className="glass rounded-3xl p-8 flex flex-col gap-10">
          <IssuerGroup issuerKey="googleCloud" />
          <div style={{ height: '1px', background: 'rgba(200, 185, 160, 0.22)' }} />
          <IssuerGroup issuerKey="cisco" />
        </div>

        {/* Credly link */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.credly.com/users/sebastian-dominguez-ordaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: 'rgba(220, 188, 148, 0.18)',
              border: '1px solid rgba(220, 188, 148, 0.40)',
              color: '#A07840',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(220, 188, 148, 0.32)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(220, 188, 148, 0.18)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
