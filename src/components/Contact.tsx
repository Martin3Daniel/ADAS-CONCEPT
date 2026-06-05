import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hello Adas Concepts! I would like to book an appointment for your automobile services. Please let me know your available times.'
    );
    window.open(`https://wa.me/2348034292663?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Ready to give your vehicle the premium care it deserves? Reach out to us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100">
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-lg">Contact Details</h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/2348034292663?text=Hello%20Adas%20Concepts!%20I%20would%20like%20to%20book%20an%20appointment%20for%20your%20automobile%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#990000]/10 flex items-center justify-center group-hover:bg-[#990000] transition-colors duration-300">
                    <MessageCircle size={20} className="text-[#990000] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp / Primary</p>
                    <p className="font-semibold text-[#1A1A1A] group-hover:text-[#990000] transition-colors">+234 803 429 2663</p>
                  </div>
                </a>
                <a href="tel:+2348034292663" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#990000]/10 flex items-center justify-center group-hover:bg-[#990000] transition-colors duration-300">
                    <Phone size={20} className="text-[#990000] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Call Directly</p>
                    <p className="font-semibold text-[#1A1A1A] group-hover:text-[#990000] transition-colors">+234 803 429 2663</p>
                  </div>
                </a>
                <a href="tel:09165040772" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#990000]/10 flex items-center justify-center group-hover:bg-[#990000] transition-colors duration-300">
                    <Phone size={20} className="text-[#990000] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Secondary Line</p>
                    <p className="font-semibold text-[#1A1A1A] group-hover:text-[#990000] transition-colors">09165040772</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#990000]/10 flex items-center justify-center">
                    <Clock size={20} className="text-[#990000]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Working Hours</p>
                    <p className="font-semibold text-[#1A1A1A]">Mon – Sat: 8AM – 6PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#990000]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#990000]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-semibold text-[#1A1A1A]">Nigeria — Nationwide Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={openWhatsApp}
              className="w-full inline-flex items-center justify-center gap-3 bg-[#990000] hover:bg-[#B80000] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 cursor-pointer"
            >
              <MessageCircle size={20} />
              Chat With Us on WhatsApp
            </button>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#F8F9FA] rounded-2xl border border-gray-100 overflow-hidden h-full min-h-[400px]">
              <iframe
                title="Adas Concepts Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.37!3d6.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMTIuMCJOIDPCsDIyJzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
