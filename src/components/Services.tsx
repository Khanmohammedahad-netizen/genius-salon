"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, User, Heart } from "lucide-react";

const services = [
  {
    title: "Hair Styling",
    desc: "From precision cuts to artistic balayage, we redefine your hair journey.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Premium Grooming",
    desc: "Luxury grooming for men who value style, precision, and confidence.",
    icon: User,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Bridal Artistry",
    desc: "Exquisite makeup and styling to make your special day truly magical.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Skin Rejuvenation",
    desc: "Advanced facial treatments tailored to restore your natural glow.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1570172619661-89320e81665a?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
          >
            Curated Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Luxury Tailored to <span className="italic gold-text-gradient">You</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/5 bg-charcoal"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="mb-4 w-12 h-12 rounded-full glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
                <button className="text-xs uppercase tracking-widest text-gold font-bold border-b border-gold/40 pb-1 w-fit hover:border-gold transition-all">
                  Learn More
                </button>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
