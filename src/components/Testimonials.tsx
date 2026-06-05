import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Adebayo Ogunlesi',
    company: 'Lagos Fleet Services',
    text: 'Adas Concepts transformed our entire fleet. The attention to detail in both mechanical repairs and bodywork was exceptional. Highly recommended for any serious vehicle owner.',
    rating: 5,
  },
  {
    name: 'Chidinma Eze',
    company: 'Premium Motors NG',
    text: 'Their towing and logistics service saved us during a cross-country move. Every vehicle arrived in perfect condition. The team is professional and incredibly reliable.',
    rating: 5,
  },
  {
    name: 'Emeka Nwankwo',
    company: 'AutoLux Nigeria',
    text: 'The custom wrap and paint protection on my S-Class was flawless. It looks better than when I drove it out of the showroom. Truly premium craftsmanship.',
    rating: 5,
  },
  {
    name: 'Fatima Abdullahi',
    company: 'Abuja Car Hire',
    text: 'We trust Adas Concepts with all our A/C repairs and interior upgrades. Fast turnaround, fair pricing, and the quality always exceeds expectations.',
    rating: 5,
  },
  {
    name: 'Olumide Adeyemi',
    company: 'Westside Auto Works',
    text: 'After a major accident, I thought my car was totaled. Adas Concepts restored it to factory condition — you would never know it was damaged. Miracle workers!',
    rating: 5,
  },
  {
    name: 'Blessing Okonkwo',
    company: 'DriveTech Solutions',
    text: 'The home pickup and delivery service is a game-changer. I did not have to leave my office. My car was picked up, serviced, and returned spotless.',
    rating: 5,
  },
];

function ReviewCard({ name, company, text, rating }: { name: string; company: string; text: string; rating: number }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl p-7 border border-gray-100 shadow-sm mx-3">
      <Quote size={28} className="text-[#990000]/20 mb-3" />
      <p className="text-gray-600 text-sm leading-relaxed mb-5">{text}</p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#990000] text-[#990000]" />
        ))}
      </div>
      <div>
        <p className="font-bold text-[#1A1A1A] text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{company}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Double the cards for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Trusted by Vehicle Owners Nationwide
          </h2>
        </motion.div>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
