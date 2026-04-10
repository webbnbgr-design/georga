import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="py-12 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-lg font-bold text-charcoal">
            ΜΑΡΙΕΥΗ Β. ΓΕΩΡΓΑ
          </span>
          <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-1">
            {t.bar}
          </p>
        </div>

        <div className="text-[11px] uppercase tracking-widest text-charcoal/40">
          © {new Date().getFullYear()} {t.rights}
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-[11px] uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[11px] uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors">
            Legal Notice
          </a>
        </div>
      </div>
    </footer>
  );
}
