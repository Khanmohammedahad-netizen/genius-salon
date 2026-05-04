"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
      });

      // Parallax Effect
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2,
        y: 100,
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -150,
        opacity: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <div className="hero-title overflow-hidden mb-6">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1]">
            <span className="block italic font-light opacity-80">Crafting</span>
            <span className="block gold-text-gradient">Confidence.</span>
            <span className="block">Defining Style.</span>
          </h1>
        </div>

        <p className="hero-sub text-lg md:text-2xl text-white/70 font-sans tracking-wide mb-12 max-w-2xl mx-auto">
          Premium Hair & Beauty Experience in the heart of Hyderabad.
          Where luxury meets precision.
        </p>

        <div className="hero-cta flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-10 py-4 bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-xl shadow-gold/20">
            Book Appointment
          </button>
          <button className="px-10 py-4 border border-white/20 hover:border-gold hover:text-gold text-white font-bold uppercase tracking-widest transition-all duration-300 glass">
            View Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll</span>
      </motion.div>

      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
    </section>
  );
}
