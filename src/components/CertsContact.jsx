import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import { IconGoogleCloud, IconCisco, IconInstagram, IconGitHub } from './Icons';

const GOOGLE_CLOUD = [
  { name: 'Cloud Computing Foundations',      date: 'Jul 2025' },
  { name: 'Secure Cloud Network',             date: 'Jul 2025' },
  { name: 'ML APIs on Google Cloud',          date: 'Jul 2025' },
  { name: 'Load Balancing on Compute Engine', date: 'Jun 2025' },
  { name: 'App Dev Environment',              date: 'Jun 2025' },
];
const CISCO = [
  { name: 'CCNA: Switching, Routing & Wireless', date: 'Aug 2024' },
  { name: 'CCNA: Intro to Networks',             date: 'Apr 2024' },
  { name: 'Python Essentials 2',                 date: 'Feb 2024' },
  { name: 'Python Essentials 1',                 date: 'Jan 2024' },
  { name: 'JavaScript Essentials 1',             date: 'Apr 2024' },
  { name: 'Using Computer & Mobile Devices',     date: 'Jun 2025' },
];

/* Brand colors work in both light and dark */
const ISSUERS = [
  { key:'gc',    label:'Google Cloud', Icon:IconGoogleCloud, color:'#4285F4', bg:'rgba(66,133,244,0.12)',  border:'rgba(66,133,244,0.28)', certs:GOOGLE_CLOUD },
  { key:'cisco', label:'Cisco',        Icon:IconCisco,       color:'#1D9FD7', bg:'rgba(29,159,215,0.12)',  border:'rgba(29,159,215,0.28)', certs:CISCO },
];

const SOCIALS = [
  { label:'Instagram', href:'http://instagram.com/sxint_sean/',                        Icon: IconInstagram },
  { label:'GitHub',    href:'https://github.com/SxintSean',                            Icon: IconGitHub },
  { label:'LinkedIn',  href:'https://www.linkedin.com/in/sebastian-dominguez-ordaz/',  Icon: (p) => (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )},
];

/* CSS vars work in inline style objects */
const inputStyle = {
  width:'100%', background:'transparent', outline:'none', border:'none',
  color:'var(--c-h)', fontSize:'14px', fontFamily:'inherit', resize:'none',
};
const fieldWrap = {
  background:'var(--field-bg)', border:'1px solid var(--field-border)',
  borderRadius:'14px', padding:'10px 14px',
  boxShadow:'inset 0 1px 0 var(--glass-spec)',
  backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
};

export default function CertsContact() {
  const { t } = useLang();
  const ref = useInView();
  const ct = t.certifications;
  const co = t.contact;

  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:dosmildosmo1999@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="section-reveal max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-start">

          {/* ── Certifications ── */}
          <div className="glass rounded-3xl p-7 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                <span className="gradient-text">{ct.title}</span>
              </h2>
              <p className="text-xs" style={{ color:'var(--c-m)' }}>{ct.subtitle}</p>
            </div>

            <div className="flex flex-col gap-5">
              {ISSUERS.map((issuer) => (
                <div key={issuer.key} className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="glass w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
                      <issuer.Icon width={13} height={13} style={{ color:'var(--c-h)' }} />
                    </div>
                    <span className="text-xs font-semibold tracking-wide" style={{ color:'var(--c-b)' }}>
                      {issuer.label}
                    </span>
                    <span className="text-xs" style={{ color:'var(--c-f)' }}>· {issuer.certs.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-8">
                    {issuer.certs.map((cert) => (
                      <span key={cert.name} title={cert.date}
                        className="glass text-xs px-2.5 py-1 rounded-full cursor-default"
                        style={{ color:'var(--c-b)' }}>
                        {cert.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://www.credly.com/users/sebastian-dominguez-ordaz"
              target="_blank" rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200"
              style={{ color:'var(--c-caramel)' }}
              onMouseEnter={(e)=>{ e.currentTarget.style.opacity='0.65'; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.opacity='1'; }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {ct.cta}
            </a>
          </div>

          {/* ── Contact form + social ── */}
          <div className="flex flex-col gap-4">
            <div className="glass rounded-3xl p-7 flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  <span className="gradient-text">{co.title}</span>
                </h2>
                <p className="text-xs leading-relaxed" style={{ color:'var(--c-m)' }}>{co.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {[
                  { key:'name',    label:co.form_name,    ph:co.form_name_ph,    type:'text'  },
                  { key:'email',   label:co.form_email,   ph:co.form_email_ph,   type:'email' },
                ].map(({ key, label, ph, type }) => (
                  <div key={key} style={fieldWrap}>
                    <label className="block text-xs font-medium mb-1" style={{ color:'var(--c-m)' }}>{label}</label>
                    <input type={type} required placeholder={ph}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={inputStyle} />
                  </div>
                ))}

                <div style={fieldWrap}>
                  <label className="block text-xs font-medium mb-1" style={{ color:'var(--c-m)' }}>{co.form_message}</label>
                  <textarea required rows={4} placeholder={co.form_message_ph}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={inputStyle} />
                </div>

                <button type="submit"
                  className="glass w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm transition-all duration-200"
                  style={{
                    color: sent ? 'var(--c-sage)' : 'var(--c-h)',
                    background: sent ? 'rgba(108,185,88,0.15)' : 'var(--glass-bg)',
                  }}
                  onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-1px)'; }}
                  onMouseLeave={(e)=>{ e.currentTarget.style.transform=''; }}>
                  {sent ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Sent!
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      {co.form_send}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* ── Social bar ── */}
            <div className="glass rounded-3xl px-6 py-5 flex flex-col items-center gap-4">
              <p className="text-xs font-medium tracking-wide" style={{ color:'var(--c-m)' }}>
                {co.social_label}
              </p>
              <div className="flex items-center gap-4">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="glass flex items-center justify-center transition-all duration-200"
                    style={{ width:'46px', height:'46px', borderRadius:'50%', color:'var(--c-m)' }}
                    onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.color='var(--c-h)'; }}
                    onMouseLeave={(e)=>{ e.currentTarget.style.transform=''; e.currentTarget.style.color='var(--c-m)'; }}>
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
