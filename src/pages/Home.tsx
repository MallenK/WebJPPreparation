import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Trophy, Users, Target, Calendar, ArrowRight, Star, 
  CheckCircle2, Shield, Brain, MessageCircle, Zap, 
  Activity, Cpu, Layers, Settings, Globe, BarChart3,
  Search, Play, FileText, ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1
      });

      // Reveal Animations
      gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="bg-transparent">
      <Helmet>
        <title>JP Preparation | Alto Rendimiento y Tecnificación de Fútbol</title>
        <meta name="description" content="Centro de alto rendimiento en Barcelona. Metodología industrial aplicada al fútbol base y profesional." />
      </Helmet>

      {/* Industrial Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 hero-content space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-brand-primary" />
                <span className="tech-label text-brand-primary">System v3.1 // Active</span>
              </div>
              
              <h1 className="text-3xl sm:text-6xl md:text-8xl font-display font-black text-white leading-[0.9] uppercase tracking-tighter">
                Ingeniería <br />
                <span className="text-brand-primary">Del Talento</span>
              </h1>
              
              <p className="text-base md:text-xl text-on-dark max-w-xl leading-relaxed font-light">
                Desarrollamos futbolistas de élite mediante un sistema de tecnificación basado en datos, neurociencia y rigor industrial. No es suerte, es preparación.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contacto" className="btn-primary bg-brand-primary hover:bg-white hover:text-brand-dark px-8 md:px-10 py-4 md:py-5 text-base md:text-lg">
                  Iniciar Protocolo <ArrowRight size={20} />
                </Link>
                <Link to="/metodologia" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-8 md:px-10 py-4 md:py-5 text-base md:text-lg">
                  Ver Especificaciones
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-white/10">
                {[
                  { label: 'Uptime', value: '24/7' },
                  { label: 'Accuracy', value: '98.4%' },
                  { label: 'Output', value: 'Elite' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-white font-mono font-bold text-lg md:text-xl">{item.value}</div>
                    <div className="tech-label text-muted-on-dark">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="industrial-border p-4 bg-white/5 backdrop-blur-sm">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Technical Training"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
                  
                  {/* Technical HUD Elements */}
                  <div className="absolute top-4 left-4 tech-label text-white bg-brand-dark/80 px-2 py-1">Target_Lock: ON</div>
                  <div className="absolute bottom-4 right-4 tech-label text-white bg-brand-dark/80 px-2 py-1">Scan_Freq: 60Hz</div>
                </div>
              </div>
              
              {/* Floating Data Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass-card p-6 bg-brand-dark border-brand-primary/30 w-64"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="text-brand-primary" size={20} />
                  <span className="tech-label text-white">Live Metrics</span>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary w-3/4" />
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-primary w-1/2" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stats Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="data-grid">
            {[
              { label: 'Jugadores Formados', value: '1,240', icon: Users, trend: '+12%' },
              { label: 'Ratio de Éxito', value: '85%', icon: Target, trend: 'Stable' },
              { label: 'Staff Certificado', value: '14', icon: Shield, trend: 'UEFA Pro' },
              { label: 'Instalaciones', value: '4', icon: Globe, trend: 'Barcelona' },
            ].map((stat, i) => (
              <div key={i} className="data-cell group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-100 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <stat.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-primary">{stat.trend}</span>
                </div>
                <div className="text-3xl font-display font-black text-brand-dark mb-1">{stat.value}</div>
                <div className="tech-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Bento Grid */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="tech-label text-brand-primary">Core Solutions</div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
                Ecosistema de <br /> <span className="text-brand-primary">Preparación</span>
              </h2>
            </div>
            <p className="text-brand-muted max-w-md font-light">
              Nuestra infraestructura está diseñada para cubrir todas las dimensiones del desarrollo futbolístico profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Solution */}
            <Link to="/tecnificacion" className="md:col-span-8 group">
              <div className="glass-card h-full relative overflow-hidden min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&q=80&w=1200" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt="Tecnificación"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 space-y-4">
                  <div className="tech-label text-brand-primary">Primary Protocol</div>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase">Tecnificación Pro</h3>
                  <p className="text-slate-300 max-w-lg">Optimización técnica individualizada bajo estándares de competición europea.</p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-xs tracking-widest pt-4">
                    Explorar Especificaciones <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary Solution */}
            <Link to="/metodologia" className="md:col-span-4 group">
              <div className="glass-card h-full bg-brand-dark p-10 flex flex-col justify-between border-brand-primary/20">
                <div className="space-y-6">
                  <div className="p-4 bg-brand-primary/10 border border-brand-primary/20 w-fit">
                    <Brain className="text-brand-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-black text-white uppercase leading-tight">Neuro-Fútbol <br /> Lab</h3>
                  <p className="text-slate-300 text-sm">Entrenamiento cognitivo y toma de decisiones mediante software especializado.</p>
                </div>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="tech-label text-brand-primary">Module_02</span>
                  <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Tertiary Solution */}
            <Link to="/campus" className="md:col-span-4 group">
              <div className="glass-card h-full bg-white p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="p-4 bg-slate-100 w-fit">
                    <Globe className="text-brand-dark" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-black text-brand-dark uppercase leading-tight">Campus <br /> Inmersivo</h3>
                  <p className="text-brand-muted text-sm">Programas residenciales de alto impacto durante periodos vacacionales.</p>
                </div>
                <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className="tech-label">Module_03</span>
                  <ArrowRight className="text-brand-dark group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Quaternary Solution */}
            <Link to="/equipo" className="md:col-span-8 group">
              <div className="glass-card h-full relative overflow-hidden min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt="Staff"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/60" />
                <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center space-y-4">
                  <div className="tech-label text-brand-primary">Human Capital</div>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase">Staff UEFA Pro</h3>
                  <p className="text-slate-300 max-w-md">Un equipo multidisciplinar de ingenieros del deporte, analistas y entrenadores de élite.</p>
                  <div className="btn-primary mt-4">Conocer al Equipo</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Process Roadmap */}
      <section className="section-padding bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="tech-label text-white/60">Implementation Roadmap</div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white">Protocolo de <br /> Desarrollo</h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Diagnóstico', desc: 'Evaluación biomecánica y técnica inicial mediante sensores.', icon: Search },
                { step: '02', title: 'Arquitectura', desc: 'Diseño de un plan de entrenamiento personalizado.', icon: Layers },
                { step: '03', title: 'Ejecución', desc: 'Fase de entrenamiento intensivo de alta frecuencia.', icon: Activity },
                { step: '04', title: 'Optimización', desc: 'Re-evaluación y ajuste de parámetros de rendimiento.', icon: Settings },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 bg-white/5 border border-white/10 p-8 industrial-border"
                >
                  <div className="text-sky-300 font-mono font-bold text-sm mb-6">{item.step} //</div>
                  <div className="p-4 bg-brand-primary/10 border border-brand-primary/20 w-fit mb-6">
                    <item.icon className="text-brand-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-display font-bold uppercase mb-4 text-white">{item.title}</h4>
                  <p className="text-muted-on-dark text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="tech-label text-brand-primary">El Método // Inteligencia Táctica</div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                  Entrenamos <br /> <span className="text-brand-primary">Tu Cerebro</span>
                </h2>
              </div>
              
              <p className="text-brand-muted text-lg font-light leading-relaxed">
                El fútbol moderno se gana en milésimas de segundo. Nuestra metodología "Smart-Play" optimiza la conexión entre percepción y ejecución.
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Escaneo Cognitivo', value: 'Entrenamiento de la visión periférica para dominar el espacio-tiempo en el campo.' },
                  { label: 'Resolución Bajo Presión', value: 'Simulacros de alta intensidad competitiva para automatizar decisiones correctas.' },
                  { label: 'Eficiencia Mecánica', value: 'Refinamiento de la técnica individual para que la ejecución sea instintiva.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 border-l-4 border-brand-primary bg-slate-50">
                    <h4 className="font-display font-bold text-brand-dark uppercase mb-2">{item.label}</h4>
                    <p className="text-brand-muted text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <Link to="/metodologia" className="btn-primary w-fit">Ver Documentación Técnica</Link>
            </div>

            <div className="relative">
              <div className="industrial-border p-8 bg-slate-900">
                <div className="aspect-square relative overflow-hidden bg-brand-dark flex items-center justify-center">
                  {/* Technical Animation Placeholder */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border border-brand-primary/30 rounded-full flex items-center justify-center"
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 border border-brand-primary/50 rounded-full flex items-center justify-center border-dashed"
                    >
                      <Zap className="text-brand-primary" size={48} />
                    </motion.div>
                  </motion.div>
                  
                  <div className="absolute top-10 left-10 tech-label text-brand-primary">System_Core: Stable</div>
                  <div className="absolute bottom-10 right-10 tech-label text-brand-primary">Processing_Data...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News / Insights */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="tech-label text-brand-primary">Latest Insights</div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter">Technical <br /> Journal</h2>
            </div>
            <Link to="/blog" className="btn-outline">Ver Todas las Publicaciones</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Optimización del Control Orientado', date: '12.03.2026', cat: 'Técnica', img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600' },
              { title: 'Neurociencia y Toma de Decisiones', date: '08.03.2026', cat: 'Cognitivo', img: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=600' },
              { title: 'Preparación Física en el Fútbol Base', date: '01.03.2026', cat: 'Físico', img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600' },
            ].map((post, i) => (
              <Link key={i} to="/blog" className="group">
                <div className="glass-card h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="tech-label text-brand-primary">{post.cat}</span>
                      <span className="tech-label">{post.date}</span>
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase group-hover:text-brand-primary transition-colors">{post.title}</h4>
                    <div className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-widest pt-4">
                      Leer Informe <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <div className="tech-label text-brand-primary">Final Protocol</div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.85]">
              ¿Estás Listo <br /> Para <span className="text-brand-primary">Operar?</span>
            </h2>
            <p className="text-muted-on-dark text-base md:text-xl max-w-2xl mx-auto font-light">
              Únete a la academia que está redefiniendo los estándares del fútbol base. Reserva tu evaluación técnica inicial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/contacto" className="btn-primary bg-brand-primary hover:bg-white hover:text-brand-dark px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl">
              Solicitar Evaluación <ArrowRight size={24} />
            </Link>
            <a href="https://wa.me/34600000000" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl">
              <MessageCircle size={24} /> Contacto Directo
            </a>
          </div>
          
          <div className="pt-12 flex justify-center items-center gap-8 opacity-40 grayscale">
            {/* Trust Logos Placeholder */}
            <div className="tech-label text-white">UEFA_PRO</div>
            <div className="tech-label text-white">FIFA_QUALITY</div>
            <div className="tech-label text-white">DATA_DRIVEN</div>
          </div>
        </div>
      </section>
    </div>
  );
}
