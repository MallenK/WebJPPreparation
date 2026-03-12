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
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Nuestro Equipo | JP Preparation</title>
        <meta name="description" content="Conoce a los profesionales que lideran JP Preparation. Entrenadores con licencias UEFA y amplia experiencia en el fútbol de élite." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl mb-12 sm:mb-20 space-y-6"
        >
          <div className="tech-label text-brand-primary">Staff Técnico</div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
            PROFESIONALES <br /> <span className="text-brand-primary">DE ÉLITE</span>
          </h1>
          <p className="text-brand-text text-base sm:text-lg md:text-xl leading-relaxed">
            Nuestro equipo está formado por especialistas titulados con una única misión: llevar tu juego al siguiente nivel.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-32">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-primary p-4 sm:p-6 rounded-2xl shadow-xl hidden sm:block"
                >
                  <Award size={32} className="text-white" />
                </motion.div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-4xl font-display font-black uppercase text-brand-dark">{member.name}</h2>
                  <p className="text-brand-primary font-bold text-base sm:text-lg uppercase tracking-wider">{member.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-brand-light text-brand-deep rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-brand-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-brand-text text-base sm:text-lg leading-relaxed italic border-l-4 border-brand-primary pl-4 sm:pl-6">
                  "{member.bio}"
                </p>

                <div className="glass-card p-6 sm:p-8">
                  <div className="tech-label mb-4 sm:mb-6 text-brand-primary font-bold text-[10px] sm:text-xs">FICHA TÉCNICA / PERFORMANCE DATA</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {member.stats.map((stat, k) => (
                      <div key={k} className="space-y-1">
                        <div className="tech-label text-brand-muted text-[8px] sm:text-[9px]">{stat.label}</div>
                        <div className="font-display font-black text-brand-dark text-base sm:text-lg">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
                    <Shield className="text-brand-primary shrink-0" size={20} />
                    <span className="text-xs sm:text-sm font-bold text-brand-dark">Seguridad y Prevención</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm">
                    <Zap className="text-brand-primary shrink-0" size={20} />
                    <span className="text-xs sm:text-sm font-bold text-brand-dark">Alto Rendimiento</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Valores Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-40 section-padding bg-brand-dark/95 rounded-[2rem] sm:rounded-[3rem] text-white overflow-hidden relative shadow-2xl py-12 sm:py-20"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8 sm:space-y-12 px-6">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-black uppercase">NUESTROS VALORES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'PROFESIONALIDAD', icon: Award },
                { title: 'PASIÓN', icon: Star },
                { title: 'VALORES', icon: Shield },
              ].map((val, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto text-brand-dark shadow-lg">
                    <val.icon size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base sm:text-xl font-display font-bold uppercase">{val.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
