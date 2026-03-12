import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle2, Users, Shirt, Target, Trophy, Star } from 'lucide-react';

export function Campus() {
  return (
    <div className="pt-32 pb-20 bg-transparent">
      <Helmet>
        <title>Campus de Verano | JP Preparation</title>
        <meta name="description" content="Inscríbete en el Campus de Verano de JP Preparation. Entrenamientos intensivos, competición y diversión para jóvenes futbolistas." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-primary/20">
              Próxima Edición: Julio 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
              CAMPUS DE <span className="text-brand-primary">VERANO</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text leading-relaxed">
              Vive una experiencia inolvidable de fútbol total. Una semana de inmersión en nuestra metodología con entrenamientos de alto nivel, competiciones y formación en valores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-base sm:text-lg justify-center">Inscribirse ahora</button>
              <button className="btn-outline text-base sm:text-lg justify-center">Descargar dossier</button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
              alt="Campus de fútbol"
              className="rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Detalles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {[
            { icon: Calendar, title: 'Fechas', desc: 'Del 1 al 15 de Julio' },
            { icon: Users, title: 'Edades', desc: 'De 6 a 16 años' },
            { icon: Clock, title: 'Horario', desc: '09:00h a 14:00h' },
            { icon: MapPin, title: 'Lugar', desc: 'Instalaciones Élite' },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 sm:p-8 text-center space-y-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto text-brand-primary">
                <item.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-brand-dark uppercase">{item.title}</h3>
              <p className="text-sm sm:text-base text-brand-text">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Qué incluye */}
        <section className="mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 md:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase mb-8 sm:mb-12 text-center text-brand-dark">¿QUÉ INCLUYE EL CAMPUS?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Target, title: 'Entrenamientos Pro', desc: 'Sesiones de tecnificación y táctica aplicada.' },
                { icon: Trophy, title: 'Competición', desc: 'Torneos internos y retos individuales.' },
                { icon: Shirt, title: 'Equipación', desc: 'Camiseta oficial del campus de regalo.' },
                { icon: CheckCircle2, title: 'Diploma', desc: 'Certificado de asistencia y evaluación.' },
                { icon: Users, title: 'Grupos Reducidos', desc: 'Máximo 10 jugadores por entrenador.' },
                { icon: Star, title: 'Seguro', desc: 'Seguro de accidentes incluido.' },
              ].map((inc, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="text-brand-primary shrink-0">
                    <inc.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 text-sm sm:text-base text-brand-dark uppercase">{inc.title}</h4>
                    <p className="text-xs sm:text-sm text-brand-text">{inc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Horario Ejemplo */}
        <section className="mb-20 sm:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-display font-black uppercase text-center mb-8 sm:mb-12 text-brand-dark"
          >
            HORARIO TIPO
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {[
              { time: '09:00 - 09:30', activity: 'Recepción y activación' },
              { time: '09:30 - 11:00', activity: 'Sesión de Tecnificación Individual' },
              { time: '11:00 - 11:30', activity: 'Almuerzo saludable' },
              { time: '11:30 - 13:00', activity: 'Táctica aplicada y Competición' },
              { time: '13:00 - 14:00', activity: 'Torneo Final y Recogida' },
            ].map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm hover:bg-white/80 transition-colors gap-1 sm:gap-4"
              >
                <span className="font-black text-brand-primary text-sm sm:text-base">{row.time}</span>
                <span className="text-brand-text font-medium text-sm sm:text-base">{row.activity}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase text-brand-dark">PLAZAS LIMITADAS</h2>
          <p className="text-sm sm:text-base text-brand-text max-w-xl mx-auto">No te quedes sin tu plaza para este verano. Reserva ahora y asegura tu formación de élite.</p>
          <button className="btn-primary text-lg sm:text-xl px-12 sm:px-16 inline-flex active:scale-95 transition-transform justify-center">Inscribirme ahora</button>
        </motion.div>
      </div>
    </div>
  );
}
