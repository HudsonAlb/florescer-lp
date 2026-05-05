import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Heart, Zap } from 'lucide-react';

const differentials = [
  {
    title: "Ciência ABA",
    description: "Intervenções baseadas em evidências científicas comprovadas para o TEA.",
    icon: Zap,
    color: "bg-brand-lavender/10"
  },
  {
    title: "Equipe Multi",
    description: "Psicólogos, Fonoaudiólogos e Terapeutas integrados em um só plano.",
    icon: Shield,
    color: "bg-brand-mint/10"
  },
  {
    title: "Acolhimento Familiar",
    description: "Treinamento e suporte contínuo para os pais e cuidadores.",
    icon: Heart,
    color: "bg-brand-blue/10"
  },
  {
    title: "Ambiente Adaptado",
    description: "Espaços lúdicos planejados para conforto e desenvolvimento sensorial.",
    icon: CheckCircle2,
    color: "bg-brand-lavender/10"
  }
];

const Differentials = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white overflow-hidden w-full">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4"
            >
              Nossos Diferenciais
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8"
            >
              Por que escolher a <span className="text-brand-accent italic font-serif">Florescer</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-text/70 text-base md:text-lg mb-8 leading-relaxed max-w-xl"
            >
              Somos mais que uma clínica; somos um centro de apoio integral. Nossa metodologia une o rigor científico à sensibilidade humana para transformar vidas.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {differentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-soft rounded-3xl p-6 md:p-8 border border-brand-lavender/10 hover:shadow-premium transition-all duration-300"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", item.color)}>
                  <item.icon className="text-brand-heading" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">{item.title}</h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
