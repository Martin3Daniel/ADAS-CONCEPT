import { motion } from 'framer-motion';
import { Wrench, Wind, Paintbrush, Music, Layers } from 'lucide-react';

const mechanical = [
  { icon: Wrench, title: 'Mechanical Repair & Diagnostics', desc: 'Comprehensive engine, transmission, and drivetrain diagnostics and repair using state-of-the-art equipment.' },
  { icon: Wind, title: 'Air Conditioning Repair & Diagnostics', desc: 'Full A/C system diagnostics, recharging, and component replacement for year-round comfort.' },
  { icon: Paintbrush, title: 'Bodywork & Painting', desc: 'Expert panel beating, dent removal, and factory-quality paint matching and resprays.' },
];

const aesthetics = [
  { icon: Music, title: 'Audio & Interior Upgrades', desc: 'Premium sound system installation, upholstery upgrades, and custom interior refinements.' },
  { icon: Layers, title: 'Custom Wraps & Paint Protection', desc: 'Vehicle wrapping, ceramic coating, and paint protection film to keep your car looking brand new.' },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-lg bg-[#990000]/10 flex items-center justify-center mb-4 group-hover:bg-[#990000] transition-colors duration-300">
      <Icon size={22} className="text-[#990000] group-hover:text-white transition-colors duration-300" />
    </div>
    <h4 className="text-base font-bold text-[#1A1A1A] mb-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Specialized Services
          </h2>
        </motion.div>

        {/* Mechanical */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-[#990000] rounded-full" />
            <h3 className="text-xl font-bold text-[#1A1A1A]">Mechanical & Structural Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mechanical.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>

        {/* Aesthetics */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-[#990000] rounded-full" />
            <h3 className="text-xl font-bold text-[#1A1A1A]">Aesthetics & Customization</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aesthetics.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
