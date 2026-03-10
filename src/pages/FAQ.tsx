import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: '¿A qué edades van dirigidos los entrenamientos?',
    answer: 'Nuestros programas están diseñados para niños y jóvenes de entre 6 y 18 años, divididos en grupos por categorías y niveles de desarrollo.'
  },
  {
    question: '¿Es necesario tener un nivel mínimo para apuntarse?',
    answer: 'No. Realizamos una evaluación inicial para situar al jugador en el grupo que mejor se adapte a su nivel actual, ya sea iniciación, perfeccionamiento o alto rendimiento.'
  },
  {
    question: '¿Cuáles son los precios de las sesiones?',
    answer: 'Ofrecemos diferentes planes: sesiones individuales desde 45€, bonos de 4 sesiones por 160€ y entrenamientos grupales desde 20€ por sesión. Consulta nuestra sección de Tecnificación para más detalles.'
  },
  {
    question: '¿Qué equipación debo llevar?',
    answer: 'Para la primera sesión de prueba puedes traer tu ropa deportiva habitual. Una vez inscrito, proporcionamos el pack de entrenamiento oficial de la academia.'
  },
  {
    question: '¿Dónde se realizan los entrenamientos?',
    answer: 'Entrenamos en nuestras sedes centrales en Barcelona, equipadas con campos de césped artificial de última generación y material profesional.'
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-20 px-6">
      <Helmet>
        <title>FAQ | JP Preparation</title>
        <meta name="description" content="Preguntas frecuentes sobre JP Preparation. Edades, precios, niveles y equipación para nuestros entrenamientos de fútbol." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase">FAQ</h1>
          <p className="text-brand-light/60 text-xl">
            Resolvemos tus dudas sobre nuestra academia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <div className="text-fresh-sky">
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-light/60 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 glass-card space-y-6">
          <h3 className="text-2xl font-display font-bold">¿TIENES MÁS PREGUNTAS?</h3>
          <p className="text-brand-light/60">Si no encuentras lo que buscas, no dudes en contactarnos directamente.</p>
          <button className="btn-primary">Contactar ahora</button>
        </div>
      </div>
    </div>
  );
}
