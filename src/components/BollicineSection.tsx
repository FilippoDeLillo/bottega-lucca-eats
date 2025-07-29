import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Beer, Heart, Award } from 'lucide-react';

const BollicineSection = () => {
  const products = [
    {
      category: "Bollicine",
      icon: Sparkles,
      items: ["Prosecco DOCG", "Franciacorta", "Spumante Metodo Classico", "Lambrusco"],
      description: "Selezione di bollicine per ogni occasione"
    },
    {
      category: "Birre Artigianali",
      icon: Beer,
      items: ["IPA", "Weizen", "Stout", "Pilsner"],
      description: "Birre artigianali italiane e internazionali"
    }
  ];

  return (
    <section id="bollicine" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bollicine & Birre Artigianali
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una selezione raffinata di bollicine italiane e birre artigianali per accompagnare 
            i momenti più speciali. Dalla tradizione italiana alle innovazioni brassicole contemporanee.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {product.category}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Esplora la Selezione
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-wine-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wine-burgundy/20 transition-colors duration-300">
              <Heart className="h-8 w-8 text-wine-burgundy" />
            </div>
            <h4 className="font-serif text-xl font-semibold mb-2">Selezione Curata</h4>
            <p className="text-muted-foreground">Ogni prodotto è scelto con passione e competenza</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
              <Award className="h-8 w-8 text-gold" />
            </div>
            <h4 className="font-serif text-xl font-semibold mb-2">Qualità Premium</h4>
            <p className="text-muted-foreground">Solo i migliori produttori italiani e internazionali</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-serif text-xl font-semibold mb-2">Occasioni Speciali</h4>
            <p className="text-muted-foreground">Per celebrare ogni momento importante</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Degustazione Guidata
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Prenota una degustazione personalizzata delle nostre bollicine e birre artigianali
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Prenota Degustazione
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BollicineSection;