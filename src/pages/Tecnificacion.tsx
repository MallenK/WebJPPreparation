import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Target, Zap, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Tecnificacion() {
  return (
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Tecnificación Élite | JP Preparation</title>
        <meta name="description" content="Entrenamientos de tecnificación individual y grupal. Mejora tu control, pase, regate y finalización con entrenadores profesionales." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
              TECNIFICACIÓN <span className="text-brand-primary">ÉLITE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text leading-relaxed">
              Nuestro programa de tecnificación está diseñado para pulir cada detalle del juego del futbolista. No importa tu nivel actual, nuestro objetivo es la excelencia técnica y táctica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="btn-primary justify-center">Reservar sesión gratis</Link>
              <Link to="/metodologia" className="btn-outline justify-center">Ver metodología</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=800"
              alt="Tecnificación"
              className="rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Explicación Section */}
        <section className="mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-brand-dark">¿EN QUÉ CONSISTE?</h2>
            <p className="text-brand-text text-base sm:text-lg leading-relaxed">
              La tecnificación en JP Preparation no es solo repetir gestos técnicos. Es aprender a aplicar la técnica en contextos de juego reales. Trabajamos en grupos reducidos para garantizar la máxima atención del entrenador y un alto volumen de repeticiones de calidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-brand-primary uppercase">¿QUÉ SE TRABAJA?</h3>
                <ul className="space-y-3">
                  {[
                    'Técnica individual depurada',
                    'Control orientado y primer toque',
                    'Finalización y golpeo',
                    'Toma de decisiones bajo presión',
                    'Inteligencia táctica individual'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text text-sm sm:text-base">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-brand-primary uppercase">BENEFICIOS</h3>
                <ul className="space-y-3">
                  {[
                    'Aumento de la confianza con el balón',
                    'Mejora de la velocidad de ejecución',
                    'Corrección de vicios técnicos',
                    'Mayor comprensión del juego',
                    'Preparación para el fútbol de élite'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text text-sm sm:text-base">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing/Plans Section */}
        <div className="text-center space-y-8 sm:space-y-12 mb-20 sm:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase text-brand-dark"
          >
            BONOS Y TARIFAS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '1 SESIÓN', price: '45€', features: ['Entrenamiento Personalizado', 'Análisis de Vídeo', 'Material Pro', 'Feedback Inmediato'] },
              { name: 'BONO 4 SESIONES', price: '160€', features: ['Ahorro de 20€', 'Seguimiento Evolutivo', 'Prioridad Horaria', 'Plan de Mejora'] },
              { name: 'BONO 8 SESIONES', price: '280€', features: ['Ahorro de 80€', 'Evaluación Completa', 'Acceso a Eventos Pro', 'Pack Ropa JP'] },
            ].map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 1 ? 'glass-card p-8 sm:p-10 border-brand-primary/50 relative scale-100 md:scale-105 z-10' : 'glass-card p-8 sm:p-10'}
              >
                {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase">Más Recomendado</span>}
                <h3 className="text-xl sm:text-2xl font-display font-black mb-2 text-brand-dark">{plan.name}</h3>
                <div className="text-3xl sm:text-4xl font-display font-black text-brand-primary mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 text-xs sm:text-sm text-brand-text">
                  {plan.features.map((f, j) => <li key={j} className="flex items-center justify-center gap-2"><ArrowRight size={14} className="text-brand-primary shrink-0" /> {f}</li>)}
                </ul>
                <Link to="/contacto" className={i === 1 ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>Comprar ahora</Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 md:p-12 text-center space-y-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black uppercase text-brand-dark">¿DUDAS SOBRE QUÉ PLAN ELEGIR?</h2>
          <p className="text-sm sm:text-base text-brand-text">Contáctanos y te asesoraremos sobre el programa que mejor se adapte a tus necesidades.</p>
          <Link to="/contacto" className="btn-primary inline-flex justify-center">Hablar con un asesor</Link>
        </motion.div>
      </div>
    </div>
  );
}
