import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Language, translations } from '../translations';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  return (
    <section id="testimonials" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
            {t.title}
          </h2>
          <p className="text-charcoal/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {lang === 'el' 
              ? 'Η εμπιστοσύνη των πελατών μας είναι η μεγαλύτερη επιβράβευση για τη μεθοδική μας εργασία.'
              : 'Our clients\' trust is the greatest reward for our methodical work.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative bg-charcoal p-12 rounded-2xl flex flex-col justify-between"
            >
              <Quote size={32} className="text-ivory/10 absolute top-8 left-8" />
              <div className="relative z-10">
                <p className="text-xl font-serif text-ivory italic leading-relaxed mb-10">
                  "{item.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-px bg-ivory/30" />
                  <span className="text-ivory/60 uppercase tracking-widest text-[10px]">
                    {item.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
