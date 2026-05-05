import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Magnetic } from './Interactive';

const Hero = () => {
  const words = "Cuidado que acolhe, terapias que transformam.".split(" ");

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2080&auto=format&fit=crop" 
          alt="Clínica Florescer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-soft/95 via-brand-soft/80 to-brand-soft/95 md:bg-gradient-to-r md:from-brand-soft md:via-brand-soft/80 md:to-transparent" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 md:mb-10"
          >
            <Sparkles className="text-brand-accent" size={14} />
            <span className="text-[10px] md:text-xs font-bold text-brand-text uppercase tracking-widest">Referência em Escada-PE</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 md:mb-10 tracking-tighter">
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-1 md:mr-3">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
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
            className="text-base md:text-xl text-brand-text/80 mb-8 md:mb-14 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
          >
            Um espaço planejado para o desenvolvimento integral do seu filho, onde cada avanço é celebrado com amor e embasamento científico.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8">
            <Magnetic>
              <button className="btn-primary w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-xl">
                Agendar Avaliação
                <ArrowRight size={18} />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn-secondary w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg shadow-soft">
                Nossas Especialidades
              </button>
            </Magnetic>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 md:mt-24 flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-16"
          >
            <div className="flex flex-col gap-0.5 md:gap-1 items-center md:items-start">
              <span className="text-3xl md:text-5xl font-bold text-brand-heading">200+</span>
              <span className="text-[10px] md:text-xs font-bold text-brand-text/40 uppercase tracking-widest">Famílias Atendidas</span>
            </div>
            <div className="hidden sm:block w-px h-16 bg-brand-lavender/30" />
            <div className="flex flex-col gap-0.5 md:gap-1 items-center md:items-start">
              <div className="flex items-center gap-2">
                <span className="text-3xl md:text-5xl font-bold text-brand-heading">5.0</span>
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Heart key={i} size={14} className="fill-current" />)}
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-bold text-brand-text/40 uppercase tracking-widest">Avaliação Google</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
