import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-wine-cellar.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroContent = [
    {
      title: "La Bottega di Lucca",
      subtitle: "Enoteca tradizionale nel cuore di Lucca",
      description: "Scopri la nostra selezione di vini sfusi, birre artigianali, distillati e liquori di qualità. Una tradizione che si rinnova con passione e competenza.",
      cta: "Scopri i nostri vini"
    },
    {
      title: "18 Varietà di Vino Sfuso",
      subtitle: "Bianco e Rosso, Toscano, Veneto e delle colline lucchesi",
      description: "Conservati in moderni silos d'acciaio con impianto ad azoto per garantire la massima freschezza e qualità.",
      cta: "Vedi la selezione"
    },
    {
      title: "Distillati e Liquori",
      subtitle: "Una selezione raffinata per gli intenditori",
      description: "Gin, vodka, cognac, armagnac, rum agricoli e whisky delle migliori distillerie italiane e internazionali.",
      cta: "Esplora i distillati"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wine-burgundy/80 via-wine-burgundy/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div key={currentSlide} className="animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {heroContent[currentSlide].title}
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-gold mb-8 font-medium">
              {heroContent[currentSlide].subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              {heroContent[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {heroContent[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-wine-burgundy text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                Visitaci in Bottega
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Via Roma 123, Lucca</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                <span>Lun-Sab 9:00-20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float hidden lg:block">
        <div className="w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-20 animate-float hidden lg:block" style={{animationDelay: '1s'}}>
        <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;