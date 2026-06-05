import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface WorkItem {
  image: string;
  title: string;
  category: string;
  span?: string;
}

const workItems: WorkItem[] = [
  {
    image: '/images/workshop-1.jpg',
    title: 'Full Body Respray & Custom Paint',
    category: 'Bodywork & Painting',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    image: '/images/work-2.jpg',
    title: 'Premium Showroom Detailing',
    category: 'Detailing',
  },
  {
    image: '/images/work-3.jpg',
    title: 'Engine Diagnostics & Repair',
    category: 'Mechanical',
  },
  {
    image: '/images/workshop-3.jpg',
    title: 'Expert Workshop Facility',
    category: 'Infrastructure',
  },
  {
    image: '/images/our-work1.jpg',
    title: 'Professional Service Bay',
    category: 'Services',
  },
  {
    image: '/images/our-facility4.jpg',
    title: 'Modern Equipment Center',
    category: 'Equipment',
    span: 'md:col-span-2',
  },
  {
    image: '/images/our-facility5.jpg',
    title: 'Service Bay 1',
    category: 'Facility',
  },
  {
    image: '/images/our-facility6.jpg',
    title: 'Service Bay 2',
    category: 'Facility',
  },
];

export default function OurWork() {
  const [lightbox, setLightbox] = useState<WorkItem | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Our Work in Action
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Every project reflects our commitment to precision, quality, and craftsmanship. See the results for yourself.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {workItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.span || ''}`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-[#990000] text-xs font-semibold tracking-wider uppercase mb-1">{item.category}</span>
                <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={18} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="mt-4">
                <span className="text-[#990000] text-xs font-semibold tracking-wider uppercase">{lightbox.category}</span>
                <h4 className="text-white font-bold text-xl mt-1">{lightbox.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
