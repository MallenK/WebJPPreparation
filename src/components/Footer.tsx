import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-display font-extrabold text-white text-xl shadow-sm">
              JP
            </div>
            <span className="font-display font-extrabold text-xl tracking-tighter text-brand-dark">
              PREPARATION
            </span>
          </Link>
          <p className="text-brand-text text-sm leading-relaxed">
            Academia de tecnificación de fútbol de alto rendimiento. Formamos a los jugadores del futuro con metodología profesional y valores deportivos.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-sm">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-brand-dark">Explorar</h4>
          <ul className="space-y-4 text-sm text-brand-text">
            <li><Link to="/tecnificacion" className="hover:text-brand-primary transition-colors">Tecnificación</Link></li>
            <li><Link to="/metodologia" className="hover:text-brand-primary transition-colors">Metodología</Link></li>
            <li><Link to="/equipo" className="hover:text-brand-primary transition-colors">Nuestro Equipo</Link></li>
            <li><Link to="/campus" className="hover:text-brand-primary transition-colors">Campus de Verano</Link></li>
            <li><Link to="/galeria" className="hover:text-brand-primary transition-colors">Galería e Instalaciones</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-brand-dark">Soporte</h4>
          <ul className="space-y-4 text-sm text-brand-text">
            <li><Link to="/contacto" className="hover:text-brand-primary transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto" className="hover:text-brand-primary transition-colors">Contacto</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog de Actualidad</Link></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidad</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-brand-dark">Contacto</h4>
          <ul className="space-y-4 text-sm text-brand-text">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>Calle Deportiva 123, 08001 Barcelona, España</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <span>+34 600 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <span>info@jppreparation.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 text-center text-xs text-brand-text">
        <p>© {new Date().getFullYear()} JP Preparation. Todos los derechos reservados. Diseñado para el alto rendimiento.</p>
      </div>
    </footer>
  );
}
