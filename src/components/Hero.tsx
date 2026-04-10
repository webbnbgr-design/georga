import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-grey/30 -z-10 skew-x-[-12deg] translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-charcoal leading-[0.9] tracking-tight mb-8">
              {t.title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-charcoal/70 font-light leading-relaxed mb-12 max-w-2xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 bg-charcoal text-ivory px-8 py-5 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-charcoal/90 transition-all cursor-pointer"
            >
              <span>{t.cta}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <span className="writing-mode-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-charcoal/30">
          ESTABLISHED IN NEO PSYCHIKO
        </span>
      </div>
    </section>
  );
}
