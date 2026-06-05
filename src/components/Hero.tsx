import { motion, useAnimation } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero.jpg',
  '/images/hero2.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, transition: { duration: 0.5 } })
        .then(() => {
          setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
          controls.start({ opacity: 1, transition: { duration: 0.5 } });
        });
    }, 5000);
    return () => clearInterval(interval);
  }, [controls]);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello Adas Concepts! I would like to book an appointment for your automobile services. Please let me know your available times.'
    );
    window.open(`https://wa.me/2348034292663?text=${msg}`, '_blank');
  };

  const callNow = () => {
    window.open('tel:+2348034292663', '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            alt="Premium automobile detailing"
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block bg-[#990000]/10 text-[#990000] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              Premium Auto Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight tracking-tight"
          >
            Car Maintenance, Upgrades, and Detailing{' '}
            <span className="text-[#990000]">You Can Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
          >
            Professional vehicle repairs, custom upgrades, and nationwide logistics managed by experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#990000] hover:bg-[#B80000] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle size={20} />
              Book an Appointment
            </button>
            <button
              onClick={callNow}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone size={20} />
              Call Now
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Expert Technicians</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
