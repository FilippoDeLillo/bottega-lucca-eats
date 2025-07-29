import { Wine, MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wine-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Wine className="h-8 w-8 text-gold" />
              <span className="font-serif text-2xl font-bold">La Bottega di Lucca</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              La tradizione del vino nel cuore di Lucca. 
              Enoteca specializzata in vini sfusi, birre artigianali e distillati di qualità.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">Collegamenti Rapidi</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Vino Sfuso', href: '#vino-sfuso' },
                { name: 'Bollicine & Birra', href: '#bollicine' },
                { name: 'Distillati & Liquori', href: '#distillati' },
                { name: 'Shop', href: '#shop' },
                { name: 'Contatti', href: '#contatti' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">I Nostri Prodotti</h4>
            <ul className="space-y-3">
              {[
                'Vini Sfusi Toscani',
                'Prosecco DOCG',
                'Birre Artigianali',
                'Gin Premium',
                'Whisky & Cognac',
                'Liquori Tradizionali'
              ].map((product) => (
                <li key={product}>
                  <span className="text-white/80">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Via Roma 123</p>
                  <p className="text-white/80">55100 Lucca (LU)</p>
                  <p className="text-white/80">Toscana, Italia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <p className="text-white/80">+39 0583 123456</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <p className="text-white/80">info@labottegadilucca.it</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-semibold mb-2 text-gold">Orari di Apertura</h5>
              <p className="text-sm text-white/80">Lun-Ven: 9:00-13:00, 16:00-20:00</p>
              <p className="text-sm text-white/80">Sabato: 9:00-20:00</p>
              <p className="text-sm text-white/80">Domenica: 10:00-13:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 La Bottega di Lucca. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-1 text-white/60 text-sm">
              <span>Realizzato con</span>
              <Heart className="h-4 w-4 text-gold" />
              <span>a Lucca</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;