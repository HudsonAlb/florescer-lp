import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Magnetic } from './Interactive';

const Hero = () => {
  const words = "Cuidado que acolhe, terapias que transformam.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Immersive Background Image with Sophisticated Overlays */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop" 
          alt="Criança em ambiente acolhedor"
          className="w-full h-full object-cover"
        />
        {/* Soft Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-soft via-brand-soft/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-soft/20 via-transparent to-brand-soft/20" />
      </div>

      {/* Mesh Gradient Accents for extra depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-lavender-soft rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue-soft rounded-full blur-[100px]" 
        />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 shadow-premium"
          >
            <Sparkles className="text-brand-accent" size={16} />
            <span className="text-xs font-bold text-brand-text uppercase tracking-widest">Referência em Escada-PE</span>
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block"
                >
                  {word === "acolhe," ? (
                    <span className="text-brand-accent italic font-serif">acolhe,</span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-brand-text/70 mb-12 max-w-xl leading-relaxed font-medium"
          >
            Um espaço planejado para o desenvolvimento integral do seu filho, onde cada avanço é celebrado com amor e embasamento científico.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Magnetic>
              <button className="btn-primary group shadow-2xl">
                Agendar Avaliação
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn-secondary shadow-premium">
                Nossas Especialidades
              </button>
            </Magnetic>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-12"
          >
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-brand-heading">200+</span>
              <span className="text-xs font-bold text-brand-text/40 uppercase tracking-widest">Famílias Felizes</span>
            </div>
            <div className="w-px h-12 bg-brand-lavender/30" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-brand-heading">5.0</span>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Heart key={i} size={14} className="fill-current" />)}
                </div>
              </div>
              <span className="text-xs font-bold text-brand-text/40 uppercase tracking-widest">Avaliação Google</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
