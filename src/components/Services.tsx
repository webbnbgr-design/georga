import { motion } from 'motion/react';
import { Landmark, Users, Car, Home } from 'lucide-react';
import { Language, translations } from '../translations';

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;

  const services = [
    {
      id: 'banking',
      icon: Landmark,
      title: t.banking.title,
      desc: t.banking.desc,
    },
    {
      id: 'immigration',
      icon: Users,
      title: t.immigration.title,
      desc: t.immigration.desc,
    },
    {
      id: 'traffic',
      icon: Car,
      title: t.traffic.title,
      desc: t.traffic.desc,
    },
    {
      id: 'realestate',
      icon: Home,
      title: t.realestate.title,
      desc: t.realestate.desc,
    },
  ];

  return (
    <section id="services" className="py-32 bg-soft-grey/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-px bg-charcoal/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-ivory p-10 hover:bg-soft-grey/10 transition-colors group"
            >
              <service.icon size={32} className="text-charcoal/40 mb-8 group-hover:text-charcoal transition-colors" />
              <h3 className="text-2xl font-serif text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
