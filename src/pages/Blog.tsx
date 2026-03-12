import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: '5 Ejercicios para mejorar tu control orientado',
    excerpt: 'El control orientado es la base del fútbol moderno. Te enseñamos cómo dominarlo con estos ejercicios prácticos.',
    date: '10 Mar 2026',
    author: 'Juan Pérez',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'La importancia de la nutrición en el fútbol base',
    excerpt: '¿Qué debe comer un joven futbolista antes de un partido? Consejos de nutrición para maximizar el rendimiento.',
    date: '05 Mar 2026',
    author: 'Elena Martínez',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Cómo gestionar la presión en competiciones',
    excerpt: 'La fortaleza mental es clave. Aprende técnicas de concentración y gestión del error para brillar en el campo.',
    date: '01 Mar 2026',
    author: 'David Ruiz',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600'
  }
];

export function Blog() {
  return (
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Blog | JP Preparation</title>
        <meta name="description" content="Consejos de entrenamiento, nutrición y psicología deportiva para futbolistas en el blog de JP Preparation." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-20 space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase text-brand-dark">BLOG</h1>
          <p className="text-brand-text max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Actualidad, consejos y formación para el futbolista y su entorno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group shadow-xl"
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-brand-text font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-brand-primary sm:w-3.5 sm:h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={12} className="text-brand-primary sm:w-3.5 sm:h-3.5" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-black text-brand-dark uppercase group-hover:text-brand-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-brand-text text-xs sm:text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs sm:text-sm hover:gap-3 transition-all">
                  Leer artículo completo <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
