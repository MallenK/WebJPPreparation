import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

const facilities = [
  {
    title: 'Campo Principal',
    desc: 'Césped artificial de última generación homologado por FIFA.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Gimnasio de Alto Rendimiento',
    desc: 'Equipamiento específico para la mejora de la fuerza explosiva.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sala de Análisis',
    desc: 'Espacio dedicado al análisis de vídeo y sesiones tácticas teóricas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Vestuarios Profesionales',
    desc: 'Instalaciones modernas y cómodas para nuestros jugadores.',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=800'
  }
];

export function Instalaciones() {
  return (
    <div className="pt-32 pb-20 px-6">
      <Helmet>
        <title>Instalaciones | JP Preparation</title>
        <meta name="description" content="Entrena en las mejores instalaciones. Campos de última generación, gimnasio y sala de análisis táctico." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase">INSTALACIONES</h1>
          <p className="text-brand-light/60 max-w-2xl mx-auto text-xl">
            Entornos diseñados para maximizar el rendimiento y la comodidad del futbolista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-display font-bold">{f.title}</h3>
                <p className="text-brand-light/60 leading-relaxed">{f.desc}</p>
                <div className="flex items-center gap-2 text-fresh-sky text-sm font-bold">
                  <MapPin size={16} />
                  <span>Sede Central JP</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Material Section */}
        <section className="mt-32 py-20 bg-white/5 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold uppercase">MATERIAL DE ÚLTIMA GENERACIÓN</h2>
              <p className="text-brand-light/70 leading-relaxed">
                Utilizamos tecnología y material deportivo profesional para medir y mejorar el rendimiento de nuestros jugadores en cada sesión.
              </p>
              <ul className="space-y-4">
                {[
                  'Sistemas de medición GPS',
                  'Cámaras de alta definición para análisis',
                  'Material de entrenamiento específico (rebotadores, vallas, etc.)',
                  'Software de análisis táctico profesional'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-light/90">
                    <CheckCircle2 className="text-fresh-sky" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Material 1" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=400" className="rounded-2xl mt-8" alt="Material 2" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
