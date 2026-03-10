import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Users, Target, Calendar, ArrowRight, Star, CheckCircle2, Shield, Brain, MessageCircle, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.15
      });

      gsap.from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
      });

      // Scroll Reveal
      gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-brand-bg">
      <Helmet>
        <title>JP Preparation | Academia de Tecnificación de Fútbol</title>
        <meta name="description" content="Domina el juego con JP Preparation. Centro de alto rendimiento en Barcelona para futbolistas que buscan la excelencia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000"
            alt="Fútbol de alto rendimiento"
            className="w-full h-full object-cover opacity-40 hero-image"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest"
            >
              <Star size={14} fill="currentColor" />
              <span>Academia de Alto Rendimiento</span>
            </motion.div>
            
            <h1 className="hero-title text-5xl md:text-8xl leading-tight md:leading-[0.85] font-display font-black text-white">
              EL ÉXITO <br />
              <span className="text-brand-primary">SE PREPARA</span>
            </h1>
            
            <p className="hero-title text-lg md:text-xl text-white max-w-xl leading-relaxed font-medium">
              Metodología de élite para futbolistas que no se conforman. Potenciamos tu talento con ciencia deportiva y pasión.
            </p>
            
            <div className="hero-title flex flex-wrap gap-4 pt-4">
              <Link to="/contacto" className="btn-primary px-8 py-4 text-lg shadow-xl shadow-brand-primary/20">
                Reservar sesión <ArrowRight size={20} />
              </Link>
              <Link to="/metodologia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4 text-lg">
                El Método
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100 relative z-10 shadow-sm" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Jugadores', value: '1000+', icon: Users },
              { label: 'Años Exp', value: '12+', icon: Trophy },
              { label: 'Staff UEFA', value: '10+', icon: Target },
              { label: 'Éxitos', value: '50+', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="reveal-up flex flex-col items-center text-center space-y-2">
                <div className="text-4xl font-display font-black text-brand-dark">{stat.value}</div>
                <div className="tech-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="tech-label text-brand-primary">Servicios Élite</div>
              <h2 className="text-3xl md:text-6xl font-display font-extrabold uppercase leading-none">
                PROGRAMAS DE <br /> <span className="text-brand-primary">ALTO NIVEL</span>
              </h2>
            </div>
            <p className="text-brand-text max-w-sm text-lg">
              Soluciones integrales adaptadas a cada etapa del desarrollo futbolístico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tecnificación',
                desc: 'Mejora de los fundamentos técnicos en grupos reducidos de alta intensidad.',
                icon: Target,
                link: '/tecnificacion'
              },
              {
                title: 'Individual',
                desc: 'Sesiones 1vs1 personalizadas para pulir detalles específicos del jugador.',
                icon: Zap,
                link: '/tecnificacion'
              },
              {
                title: 'Campus',
                desc: 'Inmersión total en vacaciones con entrenamientos intensivos y competición.',
                icon: Calendar,
                link: '/campus'
              },
              {
                title: 'Física',
                desc: 'Mejora de la fuerza, velocidad y coordinación específica para fútbol.',
                icon: Trophy,
                link: '/metodologia'
              },
              {
                title: 'Porteros',
                desc: 'Entrenamiento específico para los guardianes del área con staff especializado.',
                icon: Shield,
                link: '/tecnificacion'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-extrabold mb-4">{service.title}</h3>
                <p className="text-brand-text leading-relaxed mb-8">{service.desc}</p>
                <Link to={service.link} className="flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all">
                  Saber más <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="section-padding bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="tech-label text-brand-primary">El Método JP</div>
                <h2 className="text-3xl md:text-6xl font-display font-black uppercase leading-none text-white">
                  INTELIGENCIA <br /> <span className="text-brand-primary">EN EL CAMPO</span>
                </h2>
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                No entrenamos robots, formamos pensadores. Nuestro sistema se basa en la neurociencia aplicada al fútbol.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'PERCEPCIÓN', desc: 'Escanear el entorno antes de recibir.', icon: Brain },
                  { title: 'DECISIÓN', desc: 'Elegir la mejor opción bajo presión.', icon: Target },
                  { title: 'EJECUCIÓN', desc: 'Técnica precisa a máxima velocidad.', icon: Zap },
                ].map((pilar, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white shrink-0">
                      <pilar.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-white mb-1">{pilar.title}</h4>
                      <p className="text-white text-sm opacity-90">{pilar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/metodologia" className="btn-primary inline-flex mt-4">
                Descubrir Metodología
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=800" 
                className="rounded-3xl shadow-2xl border border-white/10" 
                alt="Metodología" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-primary p-8 rounded-2xl shadow-2xl hidden md:block">
                <div className="text-4xl font-display font-black text-white">100%</div>
                <div className="tech-label text-white/80">Fútbol Real</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Teaser */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="tech-label text-brand-primary">Staff Élite</div>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase">ENTRENADORES</h2>
            </div>
            <Link to="/equipo" className="btn-outline">Ver Staff Completo</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Juan Pérez', role: 'Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Marc Soler', role: 'Tecnificación', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Elena Martínez', role: 'Preparadora', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white">{member.name}</h3>
                  <p className="text-brand-primary font-bold text-sm uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto bg-brand-primary p-12 md:p-24 rounded-[2rem] text-center space-y-10 relative overflow-hidden shadow-2xl shadow-brand-primary/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-3xl md:text-7xl font-display font-black uppercase text-white leading-none relative z-10">
            ¿LISTO PARA <br /> EL SIGUIENTE NIVEL?
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-medium relative z-10">
            Reserva tu primera sesión de prueba gratuita y empieza tu camino hacia el alto rendimiento hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/contacto" className="bg-white text-brand-primary px-10 py-5 rounded-xl text-xl font-black uppercase hover:bg-brand-dark hover:text-white transition-all shadow-xl">
              Reservar Prueba Gratis
            </Link>
            <a href="https://wa.me/34600000000" className="bg-brand-dark text-white px-10 py-5 rounded-xl text-xl font-black uppercase hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center gap-3">
              <MessageCircle size={24} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
