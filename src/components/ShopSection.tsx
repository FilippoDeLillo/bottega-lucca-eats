import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Filter, Star, Eye } from 'lucide-react';

const ShopSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('tutti');

  const filters = [
    { id: 'tutti', name: 'Tutti i Prodotti' },
    { id: 'vino-sfuso', name: 'Vino Sfuso' },
    { id: 'bollicine', name: 'Bollicine' },
    { id: 'birre', name: 'Birre Artigianali' },
    { id: 'distillati', name: 'Distillati' },
    { id: 'liquori', name: 'Liquori' }
  ];

  const products = [
    {
      id: 1,
      name: "Chianti Classico DOCG",
      category: "vino-sfuso",
      price: "12.50",
      unit: "€/litro",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      description: "Vino rosso intenso dalle colline del Chianti",
      options: ["1L", "3L", "5L"]
    },
    {
      id: 2,
      name: "Prosecco di Valdobbiadene DOCG",
      category: "bollicine",
      price: "18.00",
      unit: "€/bottiglia",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      description: "Bollicine eleganti con note floreali",
      options: ["750ml"]
    },
    {
      id: 3,
      name: "IPA Artigianale",
      category: "birre",
      price: "6.50",
      unit: "€/bottiglia",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      description: "Birra hoppy con note agrumate",
      options: ["330ml", "500ml"]
    },
    {
      id: 4,
      name: "Gin Premium",
      category: "distillati",
      price: "45.00",
      unit: "€/bottiglia",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      description: "Gin botanico di alta qualità",
      options: ["700ml"]
    },
    {
      id: 5,
      name: "Vermentino Toscano",
      category: "vino-sfuso",
      price: "9.80",
      unit: "€/litro",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      description: "Bianco fresco e minerale",
      options: ["1L", "3L", "5L"]
    },
    {
      id: 6,
      name: "Amaro Toscano",
      category: "liquori",
      price: "28.00",
      unit: "€/bottiglia",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      description: "Liquore digestivo alle erbe toscane",
      options: ["500ml"]
    }
  ];

  const filteredProducts = selectedFilter === 'tutti' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-wine-burgundy/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Il Nostro Shop
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scopri la nostra selezione di prodotti disponibili per l'acquisto online. 
            Vini sfusi, bollicine, birre artigianali e distillati di qualità superiore.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium text-muted-foreground">Filtra per:</span>
          </div>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className="transition-all duration-300 hover:scale-105"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Immagine Prodotto</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary">
                  <Star className="h-3 w-3 mr-1" />
                  {product.rating}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">€{product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.options.map((option, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {option}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Dettagli
                  </Button>
                  <Button size="sm" className="flex-1 group-hover:bg-primary-glow transition-colors duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Aggiungi
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-white">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ordina Online
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Ricevi i nostri prodotti comodamente a casa tua o ritirali in bottega
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Catalogo Completo
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Vai al Carrello
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;