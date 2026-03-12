/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Tecnificacion } from './pages/Tecnificacion';
import { Metodologia } from './pages/Metodologia';
import { Equipo } from './pages/Equipo';
import { Campus } from './pages/Campus';
import { Galeria } from './pages/Galeria';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <div className="mesh-gradient" />
          <div className="grid-pattern" />
          
          {/* Floating Blobs */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <motion.div 
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                x: [0, -80, 0], 
                y: [0, 100, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-deep/20 rounded-full blur-[150px]"
            />
            <motion.div 
              animate={{ 
                x: [0, 50, 0], 
                y: [0, 80, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-brand-primary/10 rounded-full blur-[100px]"
            />
          </div>

          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tecnificacion" element={<Tecnificacion />} />
              <Route path="/metodologia" element={<Metodologia />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
