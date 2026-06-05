import { motion } from 'framer-motion';
import { Cog, Shield, Wrench, Users } from 'lucide-react';

const stats = [
  { icon: Wrench, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '2,000+', label: 'Vehicles Serviced' },
  { icon: Shield, value: '100%', label: 'Quality Guarantee' },
  { icon: Cog, value: 'OEM', label: 'Parts & Standards' },
];

const workshopImages = [
  {
    src: '/images/workshop-1.jpg',
    alt: 'Professional workshop equipment',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/workshop-2.jpg',
    alt: 'Modern auto repair garage',
    className: '',
  },
  {
    src: '/images/workshop-3.jpg',
    alt: 'Spray booth and painting facility',
    className: '',
  },
];

export default function Workshop() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Our Facility</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            See Our Workshop
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            A state-of-the-art facility equipped with cutting-edge tools and staffed by certified professionals — built to deliver excellence.
          </p>
        </motion.div>

        {/* Workshop Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {workshopImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient overlay always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#990000]/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} className="text-[#990000]" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
