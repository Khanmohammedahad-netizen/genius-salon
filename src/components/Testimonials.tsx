"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    text: "The best salon experience in Hyderabad. Their balayage technique is world-class. I feel like a celebrity every time I walk out.",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "Professional",
    text: "Precision grooming at its finest. The attention to detail in their men's haircuts is unmatched. Highly recommend for a premium feel.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Bride",
    text: "They made my wedding day perfect. The bridal makeup was elegant and long-lasting. The team is professional and very talented.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    text: "Luxury service with a personal touch. The skin treatments actually work. It's my go-to place for rejuvenation.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Voices of <br />
              <span className="italic gold-text-gradient">Satisfaction</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-white/40 border-l border-white/10 pl-8 h-fit">
            <span className="text-5xl font-serif text-gold">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] uppercase tracking-widest mt-1">Average Rating</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 relative flex flex-col justify-between h-full"
            >
              <Quote className="text-gold/20 absolute top-6 right-6" size={40} />
              <div>
                <div className="flex text-gold mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed font-light">
                  "{t.text}"
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 mt-auto">
                <h4 className="text-white font-serif text-lg">{t.name}</h4>
                <p className="text-gold/60 text-[10px] uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
