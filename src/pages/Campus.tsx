import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle2, Users, Shirt, Target, Trophy, Star } from 'lucide-react';

export function Campus() {
  return (
    <div className="pt-32 pb-20 bg-brand-bg">
      <Helmet>
        <title>Campus de Verano | JP Preparation</title>
        <meta name="description" content="Inscríbete en el Campus de Verano de JP Preparation. Entrenamientos intensivos, competición y diversión para jóvenes futbolistas." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-block bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Próxima Edición: Julio 2026
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase leading-none text-brand-dark">
              CAMPUS DE <span className="text-brand-primary">VERANO</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text leading-relaxed">
              Vive una experiencia inolvidable de fútbol total. Una semana de inmersión en nuestra metodología con entrenamientos de alto nivel, competiciones y formación en valores.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary text-lg">Inscribirse ahora</button>
              <button className="btn-outline text-lg">Descargar dossier</button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
              alt="Campus de fútbol"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Detalles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Calendar, title: 'Fechas', desc: 'Del 1 al 15 de Julio' },
            { icon: Users, title: 'Edades', desc: 'De 6 a 16 años' },
            { icon: Clock, title: 'Horario', desc: '09:00h a 14:00h' },
            { icon: MapPin, title: 'Lugar', desc: 'Instalaciones Élite' },
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto text-brand-primary">
                <item.icon size={24} />
              </div>
              <h3 className="font-display font-black text-lg text-brand-dark uppercase">{item.title}</h3>
              <p className="text-brand-text">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Qué incluye */}
        <section className="mb-32">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-display font-black uppercase mb-12 text-center text-brand-dark">¿QUÉ INCLUYE EL CAMPUS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Entrenamientos Pro', desc: 'Sesiones de tecnificación y táctica aplicada.' },
                { icon: Trophy, title: 'Competición', desc: 'Torneos internos y retos individuales.' },
                { icon: Shirt, title: 'Equipación', desc: 'Camiseta oficial del campus de regalo.' },
                { icon: CheckCircle2, title: 'Diploma', desc: 'Certificado de asistencia y evaluación.' },
                { icon: Users, title: 'Grupos Reducidos', desc: 'Máximo 10 jugadores por entrenador.' },
                { icon: Star, title: 'Seguro', desc: 'Seguro de accidentes incluido.' },
              ].map((inc, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-brand-primary shrink-0">
                    <inc.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black mb-1 text-brand-dark uppercase">{inc.title}</h4>
                    <p className="text-sm text-brand-text">{inc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horario Ejemplo */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-black uppercase text-center mb-12 text-brand-dark">HORARIO TIPO</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { time: '09:00 - 09:30', activity: 'Recepción y activación' },
              { time: '09:30 - 11:00', activity: 'Sesión de Tecnificación Individual' },
              { time: '11:00 - 11:30', activity: 'Almuerzo saludable' },
              { time: '11:30 - 13:00', activity: 'Táctica aplicada y Competición' },
              { time: '13:00 - 14:00', activity: 'Torneo Final y Recogida' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-black text-brand-primary">{row.time}</span>
                <span className="text-brand-text font-medium">{row.activity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase text-brand-dark">PLAZAS LIMITADAS</h2>
          <p className="text-brand-text max-w-xl mx-auto">No te quedes sin tu plaza para este verano. Reserva ahora y asegura tu formación de élite.</p>
          <button className="btn-primary text-xl px-16 inline-flex">Inscribirme ahora</button>
        </div>
      </div>
    </div>
  );
}
