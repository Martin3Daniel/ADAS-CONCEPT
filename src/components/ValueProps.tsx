import { motion } from 'framer-motion';
import { Home, Car, Ship, ArrowUpCircle } from 'lucide-react';

const values = [
  {
    icon: Home,
    title: 'Home Delivery & Pick Up',
    desc: 'Seamless, stress-free vehicle handling from your doorstep.',
  },
  {
    icon: Car,
    title: 'Accidented Car Repairs',
    desc: 'Complete structural and cosmetic restoration to factory standards.',
  },
  {
    icon: Ship,
    title: 'Car Shipping, Towing & Refurbishment',
    desc: 'Reliable logistics, towing delivery, and bumper-to-bumper vehicle renewal.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Car Upgrades',
    desc: 'Modernizing older models with premium, contemporary facelifts and features.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

export default function ValueProps() {
  return (
    <section id="about" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Built Around Your Convenience
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            We handle every aspect of your vehicle's care — from pickup to delivery — so you never have to worry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#990000]/10 flex items-center justify-center mb-5 group-hover:bg-[#990000] transition-colors duration-300">
                <item.icon size={26} className="text-[#990000] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
