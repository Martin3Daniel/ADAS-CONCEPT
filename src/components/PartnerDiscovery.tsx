import { motion, useAnimation, useDragControls } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { name: 'GRAVITAS INVESTMENT LTD', summary: 'Strategic branding and digital presence transformation for investment portfolio management.', logoPath: '/images/logos/gravitas.jpg' },
  { name: 'PHARMA DECO LTD', summary: 'Comprehensive brand identity design for pharmaceutical packaging solutions.', logoPath: '/images/logos/phama.jpg' },
  { name: 'STI ASSET MANAGEMENT', summary: 'Corporate brand refresh and investor communication materials.', logoPath: '/images/logos/sti.jpg' },
  { name: 'LEKKI RESIDENCE ASSOCIATION', summary: 'Community branding and resident engagement digital platform.', logoPath: '/images/logos/lekki.jpg' },
  { name: 'C.R.C BUREAU', summary: 'Professional certification brand guidelines and visual identity system.', logoPath: '/images/logos/crc.jpg' },
  { name: 'NATURAL ECO CAPITAL', summary: 'Sustainable investment firm brand with eco-conscious visual language.', logoPath: '/images/logos/individual.jpg' },
  { name: 'ADMIRAL OVERSEAS NIG. LTD', summary: 'Maritime logistics brand development and fleet visualization.', logoPath: '/images/logos/admiral.jpg' },
  { name: 'WEMA BANK', summary: 'Financial institution digital transformation and customer experience design.', logoPath: '/images/logos/wema.jpg' },
  { name: 'WEBB INSURANCE BROKERS LTD', summary: 'Insurance brand positioning and agent portal design.', logoPath: '/images/logos/webb.jpg' },
  { name: 'OMINIVISION LTD', summary: 'Technology startup brand identity and investor pitch deck.', logoPath: '/images/logos/omni vision.jpg' },
  { name: 'SYNGENTA NIG LTD', summary: 'Agricultural technology brand communications and field marketing materials.', logoPath: '/images/logos/syngenta.jpg' },
  { name: 'AXENDIT LTD', summary: 'Business consulting brand framework and client presentation templates.', logoPath: '/images/logos/axendi.jpg' },
  { name: 'ASSOCIATION OF MICROFINANCE BANK', summary: 'Industry association brand standards and member directory platform.', logoPath: '/images/logos/microfinance.jpg' },
  { name: 'PATRICK SPEECH AND LANGUAGES', summary: 'Educational services brand and learning platform design.', logoPath: '/images/logos/patrick.jpg' },
  { name: 'JUS PARTNERS', summary: 'Legal services brand refinement and client consultation materials.', logoPath: '/images/logos/jus.jpg' },
  { name: 'OAK WELL PARTNERS', summary: 'Real estate investment brand and property showcase platform.', logoPath: '/images/logos/oakwell.jpg' },
  { name: 'FULL RANGE MICROFINANCE LTD', summary: 'Microfinance institution brand identity and loan application system.', logoPath: '/images/logos/fullrange.jpg' },
  { name: 'SEVERAL INDIVIDUAL CUSTOMERS', summary: 'Diverse client portfolio spanning multiple industries and brand touchpoints.', logoPath: '/images/logos/individual.jpg' },
];

const ClientLogo = ({ name, logoPath }: { name: string; logoPath: string }) => (
  <div className="flex items-center justify-center h-16 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
    <img src={logoPath} alt={name} className="max-h-12 max-w-[120px] object-contain" onError={(e) => {
      e.currentTarget.src = '/images/logos/individual.jpg';
    }} />
  </div>
);

export default function PartnerDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState<number | null>(null);
  const dragControls = useDragControls();
  const controls = useAnimation();
  const isAnimating = useRef(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating.current) return;
    const newIndex = Math.max(0, Math.min(index, clients.length - 1));
    setActiveIndex(newIndex);
    controls.start({ x: `-${newIndex * 100}%` });
    setIsRevealed(null);
  }, [controls]);

  const handleNext = useCallback(() => {
    if (activeIndex < clients.length - 1) goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const handleDragEnd = (_: MouseEvent | TouchEvent, info: { offset: { x: number } }) => {
    const dragTolerance = 50;
    if (Math.abs(info.offset.x) > dragTolerance) {
      if (info.offset.x < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    } else {
      controls.start({ x: `-${activeIndex * 100}%` });
    }
  };

  useEffect(() => {
    controls.start({ x: `-${activeIndex * 100}%` });
  }, [activeIndex, controls]);

  return (
    <section id="partners" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Partner Discovery</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover the organizations we've partnered with to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#990000]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#990000]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-center mb-8">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeIndex > 0
                    ? 'bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white border border-gray-200 cursor-pointer'
                    : 'bg-gray-100 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft size={20} className={activeIndex > 0 ? 'text-[#990000]' : 'text-gray-300'} />
              </button>

              <div className="text-center">
                <span className="text-2xl font-bold text-[#990000]">
                  {activeIndex + 1} - {clients.length}
                </span>
              </div>

              <button
                onClick={handleNext}
                disabled={activeIndex === clients.length - 1}
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeIndex < clients.length - 1
                    ? 'bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white border border-gray-200 cursor-pointer'
                    : 'bg-gray-100 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight size={20} className={activeIndex < clients.length - 1 ? 'text-[#990000]' : 'text-gray-300'} />
              </button>
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl">
            <motion.div
              drag="x"
              dragControls={dragControls}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="flex cursor-grab active:cursor-grabbing will-change-transform"
              style={{ willChange: 'transform' }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="min-w-full flex-shrink-0 p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? 'rgba(153, 0, 0, 0.05)' : 'rgba(153, 0, 0, 0.02)'} 0%, rgba(255, 255, 255, 0.1) 100%)`,
                  }}
                >
                  <div className="mb-6">
                    <ClientLogo name={client.name} logoPath={client.logoPath} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-3 text-center">
                    {client.name}
                  </h3>

                  <p className="text-gray-500 text-center max-w-md mx-auto mb-6">
                    {client.summary}
                  </p>

                  <button
                    onClick={() => setIsRevealed(isRevealed === index ? null : index)}
                    className="px-6 py-3 bg-[#990000]/90 hover:bg-[#990000] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isRevealed === index ? 'Hide Summary' : 'Reveal More'}
                  </button>

                  {isRevealed === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 pt-6 border-t border-gray-200/50"
                    >
                      <p className="text-gray-600 text-center max-w-xl mx-auto">
                        {client.summary}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#990000] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}