import { motion } from 'framer-motion';
import { 
  Brain, 
  Mic2, 
  Puzzle, 
  Baby, 
  Users, 
  HeartHandshake,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Psicologia & ABA',
    description: 'Intervenção baseada na Ciência do Comportamento Aplicada para o desenvolvimento de novas habilidades.',
    icon: Brain,
    color: 'bg-brand-lavender/10',
    className: 'md:col-span-2 md:row-span-2',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dad99978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Fonoaudiologia',
    description: 'Especialistas em comunicação, linguagem e motricidade orofacial.',
    icon: Mic2,
    color: 'bg-brand-mint/10',
    className: 'md:col-span-2 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'T.O.',
    description: 'Terapia Ocupacional focada em autonomia e integração sensorial.',
    icon: Puzzle,
    color: 'bg-brand-blue/10',
    className: 'md:col-span-1 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1618347135473-a128df218bc6?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Neuropsicologia',
    description: 'Avaliação detalhada das funções cognitivas e comportamentais.',
    icon: Baby,
    color: 'bg-brand-lavender/10',
    className: 'md:col-span-1 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1620147425251-17f1681283e7?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Psicopedagogia',
    description: 'Apoio especializado nos processos de aprendizagem e inclusão escolar.',
    icon: Users,
    color: 'bg-brand-mint/10',
    className: 'md:col-span-2 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1491843351663-7c1c62820cbe?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Especialidades Lúdicas',
    description: 'Musicoterapia e Psicomotricidade para um desenvolvimento prazeroso.',
    icon: HeartHandshake,
    color: 'bg-brand-blue/10',
    className: 'md:col-span-2 md:row-span-1',
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2070&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-brand-soft overflow-hidden w-full">
      <div className="container-custom">
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
          >
            Nossas Especialidades
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl"
          >
            Um ecossistema completo para o <span className="text-brand-accent italic font-serif">desenvolvimento</span>.
          </motion.h2>
        </div>

        <div className="bento-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "bento-item group",
                service.className
              )}
            >
              {service.image && (
                <div className="absolute inset-0 -z-10 opacity-10 md:opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6", service.color)}>
                    <service.icon className="text-brand-heading" size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-brand-text/70 font-medium leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex justify-end mt-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-brand-lavender/30 flex items-center justify-center group-hover:bg-brand-accent transition-all duration-300">
                    <Plus size={16} className="group-hover:text-white transition-colors" />
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Precisa de ajuda?</h3>
            <p className="text-white/80 mb-8 max-w-xs relative z-10 text-sm md:text-base">Fale com nossa coordenação e agende uma triagem gratuita.</p>
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
