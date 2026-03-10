import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Target, Zap, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Tecnificacion() {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <Helmet>
        <title>Tecnificación Élite | JP Preparation</title>
        <meta name="description" content="Entrenamientos de tecnificación individual y grupal. Mejora tu control, pase, regate y finalización con entrenadores profesionales." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
              TECNIFICACIÓN <span className="text-brand-primary">ÉLITE</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text leading-relaxed">
              Nuestro programa de tecnificación está diseñado para pulir cada detalle del juego del futbolista. No importa tu nivel actual, nuestro objetivo es la excelencia técnica y táctica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-primary">Reservar sesión gratis</Link>
              <Link to="/metodologia" className="btn-outline">Ver metodología</Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=800"
              alt="Tecnificación"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Explicación Section */}
        <section className="mb-32">
          <div className="glass-card p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-display font-black uppercase text-brand-dark">¿EN QUÉ CONSISTE?</h2>
            <p className="text-brand-text text-lg leading-relaxed">
              La tecnificación en JP Preparation no es solo repetir gestos técnicos. Es aprender a aplicar la técnica en contextos de juego reales. Trabajamos en grupos reducidos para garantizar la máxima atención del entrenador y un alto volumen de repeticiones de calidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-primary uppercase">¿QUÉ SE TRABAJA?</h3>
                <ul className="space-y-3">
                  {[
                    'Técnica individual depurada',
                    'Control orientado y primer toque',
                    'Finalización y golpeo',
                    'Toma de decisiones bajo presión',
                    'Inteligencia táctica individual'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text">
                      <CheckCircle2 size={18} className="text-brand-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-primary uppercase">BENEFICIOS</h3>
                <ul className="space-y-3">
                  {[
                    'Aumento de la confianza con el balón',
                    'Mejora de la velocidad de ejecución',
                    'Corrección de vicios técnicos',
                    'Mayor comprensión del juego',
                    'Preparación para el fútbol de élite'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text">
                      <CheckCircle2 size={18} className="text-brand-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Plans Section */}
        <div className="text-center space-y-12 mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-brand-dark">BONOS Y TARIFAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '1 SESIÓN', price: '45€', features: ['Entrenamiento Personalizado', 'Análisis de Vídeo', 'Material Pro', 'Feedback Inmediato'] },
              { name: 'BONO 4 SESIONES', price: '160€', features: ['Ahorro de 20€', 'Seguimiento Evolutivo', 'Prioridad Horaria', 'Plan de Mejora'] },
              { name: 'BONO 8 SESIONES', price: '280€', features: ['Ahorro de 80€', 'Evaluación Completa', 'Acceso a Eventos Pro', 'Pack Ropa JP'] },
            ].map((plan, i) => (
              <div key={i} className={i === 1 ? 'glass-card p-10 border-brand-primary/50 relative scale-100 md:scale-105 z-10' : 'glass-card p-10'}>
                {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Más Recomendado</span>}
                <h3 className="text-2xl font-display font-black mb-2 text-brand-dark">{plan.name}</h3>
                <div className="text-4xl font-display font-black text-brand-primary mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 text-sm text-brand-text">
                  {plan.features.map((f, j) => <li key={j} className="flex items-center justify-center gap-2"><ArrowRight size={14} className="text-brand-primary" /> {f}</li>)}
                </ul>
                <Link to="/contacto" className={i === 1 ? 'btn-primary w-full' : 'btn-outline w-full'}>Comprar ahora</Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="glass-card p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-black uppercase text-brand-dark">¿DUDAS SOBRE QUÉ PLAN ELEGIR?</h2>
          <p className="text-brand-text">Contáctanos y te asesoraremos sobre el programa que mejor se adapte a tus necesidades.</p>
          <Link to="/contacto" className="btn-primary inline-flex">Hablar con un asesor</Link>
        </div>
      </div>
    </div>
  );
}
