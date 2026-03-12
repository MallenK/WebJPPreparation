import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Camera, Maximize2, Dumbbell, Zap } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
    category: 'Entrenamiento',
    title: 'Sesión de Tecnificación'
  },
  {
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    category: 'Campus',
    title: 'Campus de Verano 2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800',
    category: 'Instalaciones',
    title: 'Campo Principal'
  },
  {
    url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800',
    category: 'Entrenamiento',
    title: 'Trabajo de Porteros'
  },
  {
    url: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=800',
    category: 'Campus',
    title: 'Competición Interna'
  },
  {
    url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=800',
    category: 'Instalaciones',
    title: 'Zona de Rendimiento'
  }
];

const facilities = [
  {
    title: 'Campo de Césped Artificial Pro',
    desc: 'Superficie de última generación homologada por FIFA, ideal para el desarrollo técnico sin riesgo de lesiones.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Gimnasio de Alto Rendimiento',
    desc: 'Equipamiento específico para futbolistas: zonas de fuerza, potencia y recuperación funcional.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sala de Video-Análisis',
    desc: 'Espacio dedicado al estudio táctico y revisión de sesiones para una mejora cognitiva del jugador.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];

export function Galeria() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Entrenamiento', 'Campus', 'Instalaciones'];

  const filteredItems = filter === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Galería e Instalaciones | JP Preparation</title>
        <meta name="description" content="Explora nuestras instalaciones de élite y revive los mejores momentos de nuestros entrenamientos y campus." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12 sm:mb-20 space-y-4 sm:space-y-6"
        >
          <div className="tech-label text-brand-primary">Visual Experience</div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
            GALERÍA E <br /> <span className="text-brand-primary">INSTALACIONES</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-text leading-relaxed">
            Descubre el entorno donde forjamos a los futbolistas del mañana. Instalaciones de primer nivel para un rendimiento superior.
          </p>
        </motion.div>

        {/* Facilities Section */}
        <section className="mb-20 sm:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card relative overflow-hidden shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary">
                    <fac.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-brand-dark">{fac.title}</h3>
                  <p className="text-sm sm:text-base text-brand-text leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-brand-dark">MOMENTOS JP</h2>
              <p className="text-sm sm:text-base text-brand-text">Capturando la esencia del alto rendimiento.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all border ${
                    filter === cat 
                      ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/30' 
                      : 'bg-white/50 backdrop-blur-sm text-brand-muted border-white/40 hover:border-brand-primary hover:text-brand-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] cursor-pointer shadow-lg"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8">
                  <span className="tech-label text-brand-primary mb-1 sm:mb-2 text-[10px] sm:text-xs">{item.category}</span>
                  <h4 className="text-white font-display font-bold text-lg sm:text-xl uppercase">{item.title}</h4>
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} className="sm:w-5 sm:h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-40 bg-brand-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/30"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 space-y-6 sm:space-y-8 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-display font-black uppercase leading-tight">
              ¿QUIERES VERLO <br /> EN PERSONA?
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl">
              Ven a una sesión de prueba gratuita y conoce nuestras instalaciones de primera mano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="bg-white text-brand-primary px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-display font-black uppercase hover:bg-brand-dark hover:text-white transition-all shadow-xl active:scale-95 text-sm sm:text-base">
                RESERVAR PRUEBA
              </a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
