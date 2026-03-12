import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, FormEvent } from 'react';

const faqs = [
  {
    question: '¿A qué edades van dirigidos los entrenamientos?',
    answer: 'Nuestros programas están diseñados para jugadores y jugadoras desde los 6 hasta los 18 años, organizados por categorías y niveles de desarrollo.'
  },
  {
    question: '¿Es necesario tener un nivel mínimo para apuntarse?',
    answer: 'No. Tenemos grupos de iniciación, perfeccionamiento y élite. Realizamos una evaluación inicial para ubicar a cada jugador en el grupo más adecuado para su progresión.'
  },
  {
    question: '¿Dónde se realizan los entrenamientos?',
    answer: 'Entrenamos en nuestras instalaciones principales en Barcelona. Contamos con campos de césped artificial de última generación y material profesional.'
  },
  {
    question: '¿Ofrecéis sesiones de prueba?',
    answer: 'Sí, la primera sesión de tecnificación es gratuita y sin compromiso. Es la mejor forma de que conozcas nuestra metodología y staff.'
  },
  {
    question: '¿Cómo funcionan los bonos de sesiones?',
    answer: 'Los bonos de 4 u 8 sesiones tienen una validez de 3 meses. Puedes gestionar tus asistencias de forma flexible avisando con 24h de antelación.'
  }
];

export function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Contacto y FAQ | JP Preparation</title>
        <meta name="description" content="Contacta con JP Preparation para reservar tu sesión de prueba o resolver cualquier duda sobre nuestra metodología y programas." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="tech-label text-brand-primary">Contacto</div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
                HABLEMOS DE <br /> <span className="text-brand-primary">TU FUTURO</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-brand-text leading-relaxed">
                ¿Tienes dudas? ¿Quieres reservar una sesión de prueba? Estamos aquí para ayudarte a dar el siguiente paso.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: Mail, title: 'Email', value: 'info@jppreparation.com' },
                { icon: Phone, title: 'Teléfono', value: '+34 600 000 000' },
                { icon: MapPin, title: 'Ubicación', value: 'Calle Deportiva 123, 08001 Barcelona' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm hover:bg-white/80 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-dark uppercase">{item.title}</h3>
                    <p className="text-sm sm:text-base text-brand-text break-all">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 sm:pt-8">
              <a 
                href="https://wa.me/34600000000" 
                className="btn-primary w-full md:w-auto inline-flex gap-3 px-8 py-4 shadow-xl shadow-brand-primary/20 justify-center"
              >
                <MessageCircle size={24} /> Contactar por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 sm:p-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 sm:py-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-brand-dark">¡MENSAJE ENVIADO!</h2>
                <p className="text-sm sm:text-base text-brand-text">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline justify-center">Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="tech-label text-brand-dark font-bold text-[10px] sm:text-xs">Nombre del Jugador</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                      placeholder="Ej: Marc Soler"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="tech-label text-brand-dark font-bold text-[10px] sm:text-xs">Edad</label>
                    <input 
                      required 
                      name="age"
                      type="number" 
                      className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                      placeholder="Ej: 12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="tech-label text-brand-dark font-bold text-[10px] sm:text-xs">Email de Contacto</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="tech-label text-brand-dark font-bold text-[10px] sm:text-xs">Servicio de Interés</label>
                  <select 
                    name="service"
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  >
                    <option>Tecnificación Grupal</option>
                    <option>Entrenamiento Individual</option>
                    <option>Campus de Verano</option>
                    <option>Preparación Física</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="tech-label text-brand-dark font-bold text-[10px] sm:text-xs">Mensaje</label>
                  <textarea 
                    required 
                    name="message"
                    rows={4} 
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"
                    placeholder="Cuéntanos tus objetivos..."
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="btn-primary w-full py-4 text-base sm:text-lg active:scale-95 transition-transform justify-center"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs sm:text-sm text-center font-bold">Ocurrió un error. Por favor, inténtalo de nuevo.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <section className="mb-20 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="tech-label text-brand-primary">Soporte</div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase text-brand-dark"
            >
              PREGUNTAS FRECUENTES
            </motion.h2>
            <p className="text-sm sm:text-base text-brand-text">Todo lo que necesitas saber antes de empezar a entrenar con nosotros.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left hover:bg-white/40 transition-colors gap-4"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-brand-dark">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="text-brand-primary shrink-0" /> : <ChevronDown className="text-brand-muted shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 sm:px-8 pb-4 sm:pb-6 text-sm sm:text-base text-brand-text leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Google Maps Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-card overflow-hidden h-[350px] sm:h-[450px] relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl"
              >
                <MapPin size={32} className="sm:w-10 sm:h-10" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-display font-black mb-2 uppercase text-brand-dark">NUESTRA SEDE</h3>
              <p className="text-brand-dark font-medium max-w-md mb-6 sm:mb-8 text-sm sm:text-base">
                Visítanos en nuestras instalaciones principales para ver cómo entrenamos.
              </p>
              <div className="bg-brand-dark text-white p-4 sm:p-6 rounded-2xl shadow-2xl font-mono text-xs sm:text-sm">
                Calle Deportiva 123, 08001 Barcelona
              </div>
            </div>
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40" />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
