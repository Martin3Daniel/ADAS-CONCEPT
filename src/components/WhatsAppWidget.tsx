import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello Adas Concepts! I would like to book an appointment for your automobile services. Please let me know your available times.'
    );
    window.open(`https://wa.me/2348034292663?text=${msg}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white shadow-lg rounded-xl px-4 py-2.5 border border-gray-100"
          >
            <p className="text-sm font-semibold text-[#1A1A1A] whitespace-nowrap">Chat with us</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWhatsApp}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-colors duration-200 cursor-pointer"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </motion.button>
    </div>
  );
}
