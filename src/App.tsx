/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
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
