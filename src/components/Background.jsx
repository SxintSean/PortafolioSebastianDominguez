import { useTheme } from '../context/ThemeContext';

const LIGHT_BLOBS = [
  { cls: 'blob-1', style: { top:'-15%',  left:'-10%',   width:'800px', height:'800px', background:'radial-gradient(circle, rgba(72,168,52,0.88) 0%, rgba(72,168,52,0.42) 40%, transparent 65%)' } },
  { cls: 'blob-2', style: { top:'15%',   right:'-12%',  width:'700px', height:'700px', background:'radial-gradient(circle, rgba(205,152,38,0.85) 0%, rgba(205,152,38,0.38) 40%, transparent 65%)' } },
  { cls: 'blob-3', style: { bottom:'-10%', left:'5%',   width:'680px', height:'680px', background:'radial-gradient(circle, rgba(88,172,68,0.80) 0%, rgba(88,172,68,0.32) 40%, transparent 65%)' } },
  { cls: 'blob-4', style: { top:'45%',   left:'35%',    width:'580px', height:'580px', background:'radial-gradient(circle, rgba(185,130,60,0.75) 0%, rgba(185,130,60,0.28) 40%, transparent 65%)' } },
  { cls: 'blob-1', style: { top:'2%',    right:'12%',   width:'440px', height:'440px', background:'radial-gradient(circle, rgba(52,188,128,0.72) 0%, rgba(52,188,128,0.24) 40%, transparent 65%)', animationDelay:'-8s', animationDuration:'12s' } },
  { cls: 'blob-2', style: { bottom:'2%', right:'2%',    width:'420px', height:'420px', background:'radial-gradient(circle, rgba(205,168,98,0.68) 0%, rgba(205,168,98,0.22) 40%, transparent 65%)', animationDelay:'-4s', animationDuration:'16s' } },
];

/* Vibrant aurora-style blobs for dark mode */
const DARK_BLOBS = [
  { cls: 'blob-1', style: { top:'-12%',  left:'-8%',    width:'800px', height:'800px', background:'radial-gradient(circle, rgba(48,210,88,0.80) 0%, rgba(48,210,88,0.35) 40%, transparent 65%)' } },
  { cls: 'blob-2', style: { top:'18%',   right:'-10%',  width:'700px', height:'700px', background:'radial-gradient(circle, rgba(215,148,28,0.78) 0%, rgba(215,148,28,0.32) 40%, transparent 65%)' } },
  { cls: 'blob-3', style: { bottom:'-8%',left:'8%',     width:'660px', height:'660px', background:'radial-gradient(circle, rgba(32,200,148,0.75) 0%, rgba(32,200,148,0.28) 40%, transparent 65%)' } },
  { cls: 'blob-4', style: { top:'48%',   left:'38%',    width:'560px', height:'560px', background:'radial-gradient(circle, rgba(210,108,48,0.72) 0%, rgba(210,108,48,0.26) 40%, transparent 65%)' } },
  { cls: 'blob-1', style: { top:'4%',    right:'15%',   width:'420px', height:'420px', background:'radial-gradient(circle, rgba(88,148,230,0.70) 0%, rgba(88,148,230,0.22) 40%, transparent 65%)', animationDelay:'-7s', animationDuration:'13s' } },
  { cls: 'blob-2', style: { bottom:'4%', right:'5%',    width:'400px', height:'400px', background:'radial-gradient(circle, rgba(168,68,210,0.65) 0%, rgba(168,68,210,0.20) 40%, transparent 65%)', animationDelay:'-3s', animationDuration:'18s' } },
];

export default function Background() {
  const { dark } = useTheme();
  const blobs = dark ? DARK_BLOBS : LIGHT_BLOBS;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ animation: 'bg-shift 18s ease-in-out infinite alternate' }} />
      {blobs.map((b, i) => (
        <div key={i} className={`${b.cls} absolute rounded-full`} style={b.style} />
      ))}
    </div>
  );
}
