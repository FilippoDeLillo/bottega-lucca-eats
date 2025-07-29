import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Flame, Globe, Star, Eye } from 'lucide-react';
import spiritsImage from '@/assets/spirits-display.jpg';

const DistillatiSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('gin');

  const categories = {
    gin: {
      title: "Gin",
      products: ["Hendrick's", "Bombay Sapphire", "Gin Mare", "Malfy"],
      description: "Gin premium dalle migliori distillerie europee"
    },
    whisky: {
      title: "Whisky",
      products: ["Macallan", "Lagavulin", "Jameson", "Glenlivet"],
      description: "Whisky scozzesi, irlandesi e giapponesi"
    },
    rum: {
      title: "Rum Agricoli",
      products: ["Clement", "Neisson", "Trois Rivières", "HSE"],
      description: "Rum agricoli dalle Antille francesi"
    },
    cognac: {
      title: "Cognac & Armagnac",
      products: ["Hennessy", "Rémy Martin", "Armagnac Janneau", "Martell"],
      description: "Distillati francesi di antica tradizione"
    }
  };

  const features = [
    {
      icon: Globe,
      title: "Selezione Internazionale",
      description: "Distillati dalle migliori regioni del mondo"
    },
    {
      icon: Star,
      title: "Qualità Premium",
      description: "Solo marchi di eccellenza riconosciuta"
    },
    {
      icon: Eye,
      title: "Consulenza Esperta",
      description: "Ti guidiamo nella scelta perfetta"
    }
  ];

  return (
    <section id="distillati" className="py-20 bg-gradient-to-b from-background to-wine-burgundy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Distillati & Liquori
          </h2>
          <div className="w-24 h-1 bg-gradient-wine mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Una selezione raffinata di gin, vodka, cognac, armagnac, rum agricoli e whisky 
            delle migliori distillerie italiane e internazionali. Per gli intenditori 
            che apprezzano la qualità e la tradizione.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-wine rounded-3xl transform -rotate-3 opacity-20"></div>
            <img 
              src={spiritsImage}
              alt="Selezione di distillati e liquori"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
              <Flame className="h-8 w-8 text-wine-burgundy" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            {/* Category Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(categories).map(([key, category]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  onClick={() => setSelectedCategory(key)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {category.title}
                </Button>
              ))}
            </div>

            {/* Selected Category Details */}
            <Card className="mb-8 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="h-8 w-8 text-wine-burgundy" />
                  <h3 className="font-serif text-2xl font-bold">
                    {categories[selectedCategory].title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {categories[selectedCategory].description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {categories[selectedCategory].products.map((product, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="p-3 justify-start hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {product}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full">
                  Vedi Tutti i {categories[selectedCategory].title}
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-wine-burgundy/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-wine-burgundy/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-wine-burgundy" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold mb-2 group-hover:text-wine-burgundy transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasting Experience */}
        <div className="bg-gradient-wine rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Esperienza di Degustazione
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Scopri i segreti dei distillati con le nostre degustazioni guidata. 
            Un viaggio sensoriale attraverso sapori, aromi e tradizioni millenarie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wine-burgundy">
              Prenota Degustazione
            </Button>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-wine-burgundy">
              Catalogo Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistillatiSection;