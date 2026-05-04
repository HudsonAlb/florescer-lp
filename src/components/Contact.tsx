import { motion } from 'framer-motion';
import { Mail, MapPin, Camera, MessageCircle } from 'lucide-react';

const Contact = () => {
  const units = [
    {
      name: 'Unidade 1',
      address: 'Av. Paulo Leite, 4, Escada - PE',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5683419385!2d-35.2268!3d-8.3589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjEnMzIuMCJTIDM1wrAxMycyNi41Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
    },
    {
      name: 'Unidade 2',
      address: 'R. João Manoel Pontual, 39, Escada - PE',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5683419385!2d-35.2268!3d-8.3589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjEnMzIuMCJTIDM1wrAxMycyNi41Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-brand-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              Fale Conosco e <span className="text-brand-accent">Transforme</span> Vidas
            </motion.h2>

            <div className="space-y-6 mb-12">
              <motion.a 
                href="https://wa.me/5581992310781"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-soft hover:shadow-premium transition-all group"
              >
                <div className="w-12 h-12 bg-brand-mint-soft rounded-2xl flex items-center justify-center text-brand-mint-deep group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-text/50 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-lg font-bold text-brand-heading">(81) 99231-0781</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-soft group">
                <div className="w-12 h-12 bg-brand-lavender-soft rounded-2xl flex items-center justify-center text-brand-lavender-deep group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-text/50 uppercase tracking-wider">E-mail</p>
                  <p className="text-lg font-bold text-brand-heading">florescercdi1@gmail.com</p>
                </div>
              </div>

              <a 
                href="https://instagram.com/florescer_cdi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-soft hover:bg-brand-blue-soft transition-all group"
              >
                <div className="w-12 h-12 bg-brand-blue-soft rounded-2xl flex items-center justify-center text-brand-blue-deep group-hover:scale-110 transition-transform">
                  <Camera size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-text/50 uppercase tracking-wider">Instagram</p>
                  <p className="text-lg font-bold text-brand-heading">@florescer_cdi</p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {units.map((unit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-4 rounded-4xl shadow-premium overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4 px-4 pt-2">
                  <MapPin className="text-brand-accent" size={20} />
                  <h4 className="font-bold">{unit.name}: <span className="font-normal text-brand-text/70 text-sm">{unit.address}</span></h4>
                </div>
                <div className="rounded-3xl overflow-hidden h-[250px]">
                  <iframe 
                    title={unit.name}
                    src={unit.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
