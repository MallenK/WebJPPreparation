import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Brain, Target, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Metodologia() {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <Helmet>
        <title>Metodología | JP Preparation</title>
        <meta name="description" content="Descubre el método de JP Preparation: Percepción, Toma de Decisiones y Ejecución. Formación integral para el futbolista moderno." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-7xl font-display font-black uppercase text-brand-dark">NUESTRA METODOLOGÍA</h1>
          <p className="text-brand-text max-w-2xl mx-auto text-lg md:text-xl">
            No solo entrenamos el cuerpo, entrenamos la mente del futbolista para dominar el juego moderno.
          </p>
        </div>

        {/* Filosofía Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-brand-dark">FILOSOFÍA DE ENTRENAMIENTO</h2>
            <p className="text-brand-text leading-relaxed text-lg">
              En JP Preparation entendemos el fútbol como un juego de toma de decisiones constante. Nuestra filosofía se aleja del entrenamiento analítico tradicional para sumergir al jugador en contextos reales de juego donde debe resolver problemas bajo presión.
            </p>
            <p className="text-brand-text leading-relaxed">
              Buscamos crear jugadores autónomos, creativos y con una técnica depurada que sepan aplicar en el momento justo y con la intensidad necesaria.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526232762683-21750f0c7396?auto=format&fit=crop&q=80&w=800"
              alt="Filosofía de entrenamiento"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Pilares Section */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-center mb-16 text-brand-dark">LOS 3 PILARES DEL ÉXITO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'PERCEPCIÓN',
                icon: Brain,
                desc: 'Enseñar al jugador a escanear el entorno constantemente. Ver antes de recibir para ganar tiempo al rival.',
                color: 'text-brand-primary'
              },
              {
                title: 'TOMA DE DECISIONES',
                icon: Target,
                desc: 'Analizar la información percibida y elegir la mejor opción técnica o táctica en milésimas de segundo.',
                color: 'text-brand-primary'
              },
              {
                title: 'EJECUCIÓN',
                icon: Zap,
                desc: 'Realizar la acción técnica elegida con la máxima precisión y velocidad posible.',
                color: 'text-brand-primary'
              }
            ].map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 text-center space-y-6"
              >
                <div className={`w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto ${pilar.color}`}>
                  <pilar.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-black text-brand-dark">{pilar.title}</h3>
                <p className="text-brand-text leading-relaxed">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Áreas de Trabajo */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-center mb-16 text-brand-dark">DESARROLLO INTEGRAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'TÉCNICA', items: ['Control orientado', 'Pase precisión', 'Regate 1vs1', 'Golpeo de balón'] },
              { title: 'TÁCTICA', items: ['Posicionamiento', 'Lectura de juego', 'Transiciones', 'Apoyos y desmarques'] },
              { title: 'FÍSICA', items: ['Velocidad reacción', 'Coordinación motriz', 'Fuerza explosiva', 'Prevención lesiones'] },
              { title: 'MENTAL', items: ['Confianza', 'Concentración', 'Gestión del error', 'Liderazgo'] },
            ].map((area, i) => (
              <div key={i} className="glass-card p-8">
                <h3 className="text-xl font-display font-black mb-6 text-brand-primary">{area.title}</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-text">
                      <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg px-12">Empieza a entrenar con nosotros</button>
        </div>
      </div>
    </div>
  );
}
