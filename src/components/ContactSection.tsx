import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Indirizzo",
      details: ["Via Roma 123", "55100 Lucca (LU)", "Toscana, Italia"],
      action: "Ottieni Indicazioni"
    },
    {
      icon: Phone,
      title: "Telefono",
      details: ["+39 0583 123456", "WhatsApp: +39 333 1234567"],
      action: "Chiama Ora"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@labottegadilucca.it", "ordini@labottegadilucca.it"],
      action: "Invia Email"
    },
    {
      icon: Clock,
      title: "Orari di Apertura",
      details: [
        "Lun-Ven: 9:00 - 13:00, 16:00 - 20:00",
        "Sabato: 9:00 - 20:00",
        "Domenica: 10:00 - 13:00"
      ],
      action: "Vedi Orari Speciali"
    }
  ];

  return (
    <section id="contatti" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Vieni a Trovarci
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La Bottega di Lucca ti aspetta nel cuore della città. 
            Vieni a scoprire i nostri vini e lasciati consigliare dalla nostra esperienza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Form */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                  Contattaci Rapidamente
                </h3>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Il tuo nome" className="transition-all duration-300 focus:ring-primary" />
                    <Input placeholder="La tua email" type="email" className="transition-all duration-300 focus:ring-primary" />
                  </div>
                  <Input placeholder="Oggetto" className="transition-all duration-300 focus:ring-primary" />
                  <Textarea 
                    placeholder="Il tuo messaggio..." 
                    rows={4}
                    className="transition-all duration-300 focus:ring-primary"
                  />
                  <Button className="w-full hover:bg-primary-glow transition-all duration-300">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map and Visit Info */}
          <div className="animate-slide-up">
            {/* Map Placeholder */}
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-80 bg-gradient-to-br from-primary/20 to-wine-burgundy/20 flex items-center justify-center relative">
                <div className="text-center">
                  <Navigation className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-semibold mb-2">Mappa Interattiva</h4>
                  <p className="text-muted-foreground">Clicca per aprire in Google Maps</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" className="bg-white/90 text-primary hover:bg-white">
                    <Navigation className="h-4 w-4 mr-2" />
                    Indicazioni
                  </Button>
                </div>
              </div>
            </Card>

            {/* Visit Information */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Come Raggiungerci
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• A piedi: 5 minuti dalla stazione di Lucca</li>
                    <li>• In auto: parcheggio gratuito nelle vicinanze</li>
                    <li>• In bici: rastrelliere disponibili</li>
                    <li>• Mezzi pubblici: fermata autobus a 100m</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-wine text-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-semibold mb-4">
                    Prenota una Visita
                  </h4>
                  <p className="mb-4 opacity-90">
                    Organizza una visita guidata alla nostra bottega con degustazione 
                    personalizzata dei nostri migliori vini.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-wine-burgundy w-full">
                    Prenota Visita Guidata
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-sunset text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Resta Aggiornato
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Iscriviti alla nostra newsletter per ricevere offerte esclusive 
                e novità sui nostri prodotti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="La tua email" 
                  type="email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                  Iscriviti
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;