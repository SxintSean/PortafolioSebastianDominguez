import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import {
  IconCart, IconTag, IconMonitor, IconGradCap,
  IconChevronLeft, IconChevronRight, IconImage,
} from './Icons';

const PROJECTS = [
  {
    Icon: IconCart,
    title: 'Ismerely Point of Selling',
    titleEs: 'Ismerely Point of Selling',
    description: 'Custom POS solution built for Ismerely. Covers sales processing, product catalog, inventory tracking, daily cash-flow reports, and receipt generation — all from a single intuitive dashboard.',
    descriptionEs: 'Solución de punto de venta a medida para Ismerely. Cubre procesamiento de ventas, catálogo de productos, control de inventario, reportes de flujo de caja diario y generación de tickets.',
    tags: ['Laravel', 'MySQL', 'POS'],
    accent: 'rgba(108,185,88,0.18)',
    accentBorder: 'rgba(108,185,88,0.35)',
    iconColor: 'var(--c-sage)',
    images: [
      '/Img/P.O.S/P.O.S 1.png',
      '/Img/P.O.S/P.O.S 2.png',
      '/Img/P.O.S/P.O.S 3.png',
      '/Img/P.O.S/P.O.S 4.png',
    ],
  },
  {
    Icon: IconTag,
    title: 'Nexus Ticket System',
    titleEs: 'Nexus Ticket System',
    description: 'Issue-tracking platform that centralizes problem reporting across teams. Features priority levels, status workflows (open → in progress → resolved), assignee management, and a real-time activity log.',
    descriptionEs: 'Plataforma de seguimiento de incidencias que centraliza el reporte de problemas entre equipos. Incluye niveles de prioridad, flujos de estado y bitácora de actividad en tiempo real.',
    tags: ['Laravel', 'MySQL', 'Tickets'],
    accent: 'rgba(210,158,48,0.18)',
    accentBorder: 'rgba(210,158,48,0.35)',
    iconColor: 'var(--c-caramel)',
    images: [],
  },
  {
    Icon: IconMonitor,
    title: 'Pajarito Website',
    titleEs: 'Sitio Web Pajarito',
    description: 'Landing page and website for the Pajarito brand. Fully responsive design with optimized performance, clear calls to action, and a clean visual identity that communicates the brand effectively.',
    descriptionEs: 'Landing page y sitio web para la marca Pajarito. Diseño completamente responsivo con rendimiento optimizado, llamados a la acción claros e identidad visual limpia.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing'],
    accent: 'rgba(88,148,230,0.18)',
    accentBorder: 'rgba(88,148,230,0.35)',
    iconColor: '#5894e6',
    images: [],
  },
  {
    Icon: IconGradCap,
    title: 'SISAC — TESOEM',
    titleEs: 'SISAC — TESOEM',
    description: 'Comprehensive academic and coordination management system for the Tecnológico de Estudios Superiores del Oriente del Estado de México (TESOEM). Manages student enrollment, grade control, scheduling, academic services, and institutional reporting.',
    descriptionEs: 'Sistema Integral de Servicios Académicos y de Coordinación para el TESOEM. Gestiona inscripciones, control de calificaciones, horarios, servicios estudiantiles y reportes institucionales.',
    tags: ['Laravel', 'PostgreSQL', 'EdTech'],
    accent: 'rgba(168,108,220,0.18)',
    accentBorder: 'rgba(168,108,220,0.35)',
    iconColor: '#a86cdc',
    images: [],
  },
];

function ImageGallery({ images, accent, accentBorder, Icon, iconColor }) {
  const [idx, setIdx] = useState(0);
  const hasImages = images && images.length > 0;

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  if (!hasImages) {
    return (
      <div className="rounded-2xl flex flex-col items-center justify-center gap-2"
        style={{ height: '175px', background: `linear-gradient(135deg, ${accent}, var(--glass-bg))`, border: `1px solid ${accentBorder}` }}>
        <IconImage width={32} height={32} style={{ color: iconColor, opacity: 0.45 }} />
        <span className="text-xs" style={{ color: 'var(--c-m)', opacity: 0.7 }}>No images added yet</span>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ height: '175px' }}>
      <img src={images[idx]} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" draggable={false} />
      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
            style={{ width:'28px', height:'28px', background:'rgba(255,255,255,0.55)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.80)', color:'var(--c-h)' }}>
            <IconChevronLeft />
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
            style={{ width:'28px', height:'28px', background:'rgba(255,255,255,0.55)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.80)', color:'var(--c-h)' }}>
            <IconChevronRight />
          </button>
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className="rounded-full transition-all duration-200"
                style={{ height:'5px', width: i===idx ? '14px' : '5px', background: i===idx ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.50)' }} />
            ))}
          </div>
          <span className="absolute top-2 right-2 text-xs rounded-full px-2 py-0.5"
            style={{ background:'rgba(0,0,0,0.32)', backdropFilter:'blur(6px)', color:'rgba(255,255,255,0.90)' }}>
            {idx + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project, lang }) {
  const { Icon } = project;
  const title       = lang === 'es' ? project.titleEs       : project.title;
  const description = lang === 'es' ? project.descriptionEs : project.description;

  return (
    <div className="glass rounded-3xl p-5 flex flex-col gap-4 shrink-0" style={{ width: '340px' }}>
      <ImageGallery images={project.images} accent={project.accent} accentBorder={project.accentBorder} Icon={Icon} iconColor={project.iconColor} />

      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: project.accent, border: `1px solid ${project.accentBorder}` }}>
          <Icon width={18} height={18} style={{ color: project.iconColor }} />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--c-h)' }}>{title}</h3>
          <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--c-m)' }}>{description}</p>
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLang();
  const p = t.projects;
  const ref = useInView();
  const doubled = [...PROJECTS, ...PROJECTS];

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="section-reveal">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">{p.title}</span>
          </h2>
        </div>
        <div className="overflow-hidden"
          style={{ WebkitMaskImage:'linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)', maskImage:'linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)' }}>
          <div className="marquee-track gap-5 py-4 px-6">
            {doubled.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
