import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Workshop from './components/Workshop';
import PartnerDiscovery from './components/PartnerDiscovery';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] antialiased">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <OurWork />
      <Workshop />
      <PartnerDiscovery />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
