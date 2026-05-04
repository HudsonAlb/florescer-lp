import { motion } from 'framer-motion';
import { Brain, Speech, Activity, Puzzle, Music, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Psicologia & ABA',
    description: 'A ciência do comportamento aplicada para resultados reais e duradouros.',
    icon: Brain,
    color: 'bg-brand-lavender-soft text-brand-lavender-deep',
    className: 'md:col-span-2 md:row-span-2',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Fonoaudiologia',
    description: 'Comunicação e linguagem.',
    icon: Speech,
    color: 'bg-brand-blue-soft text-brand-blue-deep',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'T.O.',
    description: 'Autonomia e Integração.',
    icon: Puzzle,
    color: 'bg-brand-mint-soft text-brand-mint-deep',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Fisioterapia',
    description: 'Desenvolvimento motor.',
    icon: Activity,
    color: 'bg-brand-lavender-soft text-brand-lavender-deep',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Especialidades Lúdicas',
    description: 'Musicoterapia, Arteterapia e Terapias Aquáticas para um desenvolvimento leve.',
    icon: Music,
    color: 'bg-brand-blue-soft text-brand-blue-deep',
    className: 'md:col-span-2 md:row-span-1',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 bg-brand-soft">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4"
            >
              Nossas Especialidades
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              Um ecossistema completo para o <span className="text-brand-accent italic font-serif">desenvolvimento</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-text/50 max-w-sm text-lg font-medium"
          >
            Abordagem multidisciplinar baseada em evidências científicas e acolhimento humano.
          </motion.p>
        </div>

        <div className="bento-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "bento-item group",
                service.className
              )}
            >
              {service.image && (
                <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", service.color)}>
                    <service.icon className="text-brand-heading" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-brand-text/60 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-brand-lavender flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                    <Plus size={18} className="group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-brand-accent rounded-[2rem] p-8 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Precisa de ajuda para escolher?</h3>
            <p className="text-white/80 mb-8 max-w-xs relative z-10">Fale com nossa coordenação e agende uma triagem gratuita.</p>
            <button className="bg-white text-brand-accent px-8 py-3 rounded-full font-bold relative z-10 hover:scale-105 transition-transform">
              Conversar Agora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
