import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col cursor-pointer"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-charcoal leading-none">
            ΜΑΡΙΕΥΗ Β. ΓΕΩΡΓΑ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60 mt-1">
            ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
            >
              {t[item as keyof typeof t]}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <Globe size={14} />
            <span>{lang === 'el' ? 'EN' : 'EL'}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
