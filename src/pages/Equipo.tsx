import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Award, Star, Shield, Zap, Target } from 'lucide-react';

const staff = [
  {
    name: 'Juan Pérez',
    role: 'Director Deportivo & Metodología',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    tags: ['UEFA PRO', 'Ex-Cantera FCB', 'Especialista Táctico'],
    bio: 'Más de 15 años de experiencia formando talentos en las mejores canteras de España. Creador de la metodología JP.',
    stats: [
      { label: 'Licencia', value: 'UEFA PRO' },
      { label: 'Experiencia', value: '15+ Años' },
      { label: 'Especialidad', value: 'Táctica' },
      { label: 'Jugadores Pro', value: '25+' }
    ]
  },
  {
    name: 'Marc Soler',
    role: 'Responsable de Tecnificación',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    tags: ['UEFA A', 'Especialista 1vs1', 'Analista'],
    bio: 'Experto en el desarrollo de la técnica individual y el desborde. Su enfoque se centra en la toma de decisiones rápida.',
    stats: [
      { label: 'Licencia', value: 'UEFA A' },
      { label: 'Experiencia', value: '8 Años' },
      { label: 'Especialidad', value: 'Técnica' },
      { label: 'Análisis', value: 'Video Pro' }
    ]
  },
  {
    name: 'Elena Martínez',
    role: 'Preparadora Física & Nutrición',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    tags: ['Grado CAFYD', 'Máster Rendimiento', 'Nutricionista'],
    bio: 'Especialista en la optimización del rendimiento físico y prevención de lesiones. Ex-atleta profesional.',
    stats: [
      { label: 'Grado', value: 'CAFYD' },
      { label: 'Experiencia', value: '10 Años' },
      { label: 'Especialidad', value: 'Fuerza' },
      { label: 'Prevención', value: 'Élite' }
    ]
  }
];

export function Equipo() {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <Helmet>
        <title>Nuestro Equipo | JP Preparation</title>
        <meta name="description" content="Conoce a los profesionales que lideran JP Preparation. Entrenadores con licencias UEFA y amplia experiencia en el fútbol de élite." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="tech-label text-brand-primary">Staff Técnico</div>
          <h1 className="text-4xl md:text-7xl font-display font-black uppercase leading-none">
            PROFESIONALES <br /> <span className="text-brand-primary">DE ÉLITE</span>
          </h1>
          <p className="text-brand-text text-lg md:text-xl leading-relaxed">
            Nuestro equipo está formado por especialistas titulados con una única misión: llevar tu juego al siguiente nivel.
          </p>
        </div>

        <div className="space-y-32">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-primary p-6 rounded-2xl shadow-xl hidden md:block">
                  <Award size={32} className="text-white" />
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-4xl font-display font-black uppercase">{member.name}</h2>
                  <p className="text-brand-primary font-bold text-lg uppercase tracking-wider">{member.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-brand-light text-brand-deep rounded-lg text-xs font-bold uppercase tracking-wider border border-brand-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-brand-text text-lg leading-relaxed italic">
                  "{member.bio}"
                </p>

                {/* Technical Sheet */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                  <div className="tech-label mb-6 text-brand-dark font-bold">FICHA TÉCNICA / PERFORMANCE DATA</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {member.stats.map((stat, k) => (
                      <div key={k} className="space-y-1">
                        <div className="tech-label text-[9px]">{stat.label}</div>
                        <div className="font-display font-black text-brand-dark text-lg">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Shield className="text-brand-primary" size={20} />
                    <span className="text-sm font-bold text-brand-dark">Seguridad y Prevención</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Zap className="text-brand-primary" size={20} />
                    <span className="text-sm font-bold text-brand-dark">Alto Rendimiento</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Valores Section */}
        <section className="mt-40 section-padding bg-brand-dark rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase">NUESTROS VALORES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'PROFESIONALIDAD', icon: Award },
                { title: 'PASIÓN', icon: Star },
                { title: 'VALORES', icon: Shield },
              ].map((val, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg">
                    <val.icon size={32} />
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase">{val.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
