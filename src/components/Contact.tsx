import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-32 bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              {t.title}
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-ivory/60" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Address</p>
                  <p className="text-xl font-light">{t.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-ivory/60" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Phone</p>
                  <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="text-xl font-light hover:text-ivory/80 transition-colors">
                    {t.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-ivory/60" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Email</p>
                  <a href={`mailto:${t.email}`} className="text-xl font-light hover:text-ivory/80 transition-colors">
                    {t.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href={`tel:${t.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-4 bg-ivory text-charcoal px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-ivory/90 transition-all"
              >
                <span>{t.cta}</span>
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-2xl overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.682143425556!2d23.7745!3d38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1984444444445%3A0x4444444444444444!2zzq3OtM+BzrHPgiA0LCDOnc6tzr8gzqjPhc+HzrnOus+MIDE1NCA1MQ!5e0!3m2!1sel!2sgr!4v1712710000000!5m2!1sel!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="absolute inset-0 pointer-events-none border border-ivory/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
