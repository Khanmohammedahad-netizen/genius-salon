"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Connect With Us
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The Luxury Experience <br />
            <span className="italic gold-text-gradient">Awaits You</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience the pinnacle of luxury grooming. Reach out to us to book your appointment 
            or visit our premium salon in the heart of Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass p-10 flex flex-col items-center text-center group hover:border-gold transition-colors"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
              <Phone size={24} />
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Call Us</p>
            <p className="text-white font-serif text-xl tracking-wide">+91 98765 43210</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-10 flex flex-col items-center text-center group hover:border-gold transition-colors"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
              <MapPin size={24} />
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Visit Us</p>
            <p className="text-white font-serif text-xl tracking-wide">Yousufguda Main Rd, Hyderabad</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass p-10 flex flex-col items-center text-center group hover:border-gold transition-colors"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
              <Clock size={24} />
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Timings</p>
            <p className="text-white font-serif text-xl tracking-wide">10 AM - 9 PM (Daily)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-10 flex flex-col items-center text-center group hover:border-gold transition-colors"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all">
              <Mail size={24} />
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Email Us</p>
            <p className="text-white font-serif text-xl tracking-wide">hello@geniussalon.com</p>
          </motion.div>
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-[0.3em] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-gold/20"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
