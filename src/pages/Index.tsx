import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VinoSfusoSection from '@/components/VinoSfusoSection';
import BollicineSection from '@/components/BollicineSection';
import DistillatiSection from '@/components/DistillatiSection';
import ShopSection from '@/components/ShopSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VinoSfusoSection />
      <BollicineSection />
      <DistillatiSection />
      <ShopSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
