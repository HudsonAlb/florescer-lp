import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Cursor, Magnetic } from './components/Interactive';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      <div className="noise" />
      <Cursor />
      
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Services />
        <Differentials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-40">
        <Magnetic>
          <a
            href="https://wa.me/5581992310781"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all flex items-center justify-center group relative"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="absolute right-full mr-4 bg-white text-brand-text px-4 py-2 rounded-2xl text-sm font-bold shadow-premium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Falar com a gente
            </span>
          </a>
        </Magnetic>
      </div>
    </div>
  );
}

export default App;
