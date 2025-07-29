import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wine, Droplets, Shield, Star } from 'lucide-react';
import wineImage from '@/assets/wine-silos.jpg';

const VinoSfusoSection = () => {
  const [activeWine, setActiveWine] = useState(0);

  const wineTypes = [
    { name: "Chianti Classico", region: "Toscana", color: "Rosso", notes: "Intenso e corposo" },
    { name: "Vermentino", region: "Toscana", color: "Bianco", notes: "Fresco e minerale" },
    { name: "Sangiovese", region: "Colline Lucchesi", color: "Rosso", notes: "Fruttato e elegante" },
    { name: "Trebbiano", region: "Toscana", color: "Bianco", notes: "Delicato e floreale" },
    { name: "Brunello", region: "Montalcino", color: "Rosso", notes: "Strutturato e intenso" },
    { name: "Pinot Grigio", region: "Veneto", color: "Bianco", notes: "Secco e aromatico" }
  ];

  return (
    <section id="vino-sfuso" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            18 Varietà di Vino Sfuso
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bianco e Rosso, Toscano, Veneto e delle colline lucchesi. 
            I nostri vini sono conservati in moderni silos d'acciaio con impianto ad azoto 
            per garantire la massima freschezza e preservare tutte le qualità organolettiche.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Impianto ad Azoto</h3>
                  <p className="text-muted-foreground">Preserva freschezza e qualità del vino</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Droplets className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Silos d'Acciaio</h3>
                  <p className="text-muted-foreground">Tecnologia moderna per conservazione ottimale</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Wine className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-xl font-semibold mb-2">18 Varietà</h3>
                  <p className="text-muted-foreground">Selezione accurata di bianchi e rossi</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Qualità Garantita</h3>
                  <p className="text-muted-foreground">Controllo costante e selezione rigorosa</p>
                </CardContent>
              </Card>
            </div>

            {/* Wine Selection Preview */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="font-serif text-2xl font-bold mb-6">Selezione in Evidenza</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {wineTypes.slice(0, 6).map((wine, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWine(index)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      activeWine === index 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full mb-2 ${
                      wine.color === 'Rosso' ? 'bg-wine-burgundy' : 'bg-gold'
                    }`}></div>
                    <h4 className="font-semibold text-sm">{wine.name}</h4>
                    <p className="text-xs text-muted-foreground">{wine.region}</p>
                  </button>
                ))}
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-serif text-lg font-semibold mb-2">{wineTypes[activeWine].name}</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Regione:</strong> {wineTypes[activeWine].region}
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Tipologia:</strong> {wineTypes[activeWine].color}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> {wineTypes[activeWine].notes}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto">
                Scopri Tutti i Vini Sfusi
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-wine rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src={wineImage}
              alt="Silos moderni per vino sfuso"
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
              <Wine className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VinoSfusoSection;