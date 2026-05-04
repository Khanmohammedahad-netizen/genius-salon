"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Reserve Your Slot
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready for your <br />
            <span className="italic gold-text-gradient">Transformation?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-lg">
            Experience the pinnacle of luxury grooming. Book your appointment today and step into 
            a world of elegance and precision.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Call Us</p>
                <p className="text-white font-medium">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Visit Us</p>
                <p className="text-white font-medium">Yousufguda Main Rd, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Timings</p>
                <p className="text-white font-medium">10:00 AM - 9:00 PM (Daily)</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-10 md:p-16 rounded-2xl relative"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Preferred Service</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white/60 focus:outline-none focus:border-gold transition-colors appearance-none">
                <option>Hair Styling & Cut</option>
                <option>Premium Grooming</option>
                <option>Bridal Makeup</option>
                <option>Skin Treatment</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Date</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Time Slot</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white/60 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Morning (10 AM - 1 PM)</option>
                  <option>Afternoon (1 PM - 5 PM)</option>
                  <option>Evening (5 PM - 9 PM)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-[0.3em] transition-all duration-300 mt-8"
            >
              Confirm Appointment
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
