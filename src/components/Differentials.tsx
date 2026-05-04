import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, Microscope, HeartHandshake } from 'lucide-react';

const highlights = [
  {
    title: 'Equipe Multidisciplinar',
    desc: 'Especialistas que trabalham em conjunto para um olhar 360º da criança.',
    icon: Users,
    color: 'bg-brand-blue-soft text-brand-blue-deep'
  },
  {
    title: 'Ciência e Afeto',
    desc: 'Métodos com comprovação científica aplicados com amor e paciência.',
    icon: Star,
    color: 'bg-brand-lavender-soft text-brand-lavender-deep'
  },
  {
    title: 'Ambiente Seguro',
    desc: 'Espaço planejado para minimizar sobrecarga sensorial.',
    icon: CheckCircle2,
    color: 'bg-brand-mint-soft text-brand-mint-deep'
  },
  {
    title: 'Foco em Resultados',
    desc: 'Metas claras e relatórios periódicos de evolução.',
    icon: Microscope,
    color: 'bg-brand-blue-soft text-brand-blue-deep'
  },
];

const Differentials = () => {
  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-soft rounded-full mb-6">
                  <HeartHandshake className="text-brand-accent" size={16} />
                  <span className="text-xs font-bold text-brand-text uppercase tracking-widest">Nossa Essência</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tighter leading-[1.1]">
                  Por que a Florescer é o <span className="text-brand-accent">lugar certo</span> para seu filho?
                </h2>
                <p className="text-xl text-brand-text/60 mb-10 leading-relaxed font-medium">
                  Combinamos o rigor da ciência com o calor do acolhimento humano. Aqui, o desenvolvimento não é apenas uma meta, é uma jornada de amor.
                </p>
                <button className="btn-secondary">
                  Conheça Nossa História
                </button>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] bg-brand-soft border border-transparent hover:border-brand-lavender hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 rounded-3xl ${item.color} flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-brand-text/50 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
