"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="experience" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Transformation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The Art of <br />
            <span className="italic gold-text-gradient">Metamorphosis</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl">
            We don't just cut hair; we sculpt confidence. Our master stylists specialize in 
            transformative experiences that align your vision with our artistic precision.
          </p>
          <ul className="space-y-4 mb-12">
            {["Precision Mapping", "Tone Restoration", "Textural Enhancement"].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white/80">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="uppercase tracking-[0.2em] text-xs font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-500 font-bold uppercase tracking-widest">
            Explore Gallery
          </button>
        </div>

        <div className="lg:w-1/2 w-full">
          <div
            ref={containerRef}
            className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl shadow-black"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Background) */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2072&auto=format&fit=crop')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md px-4 py-1 text-[10px] text-white uppercase tracking-[0.3em] border border-white/10">After</div>
            </div>

            {/* Before Image (Clip Path) */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-4 py-1 text-[10px] text-white uppercase tracking-[0.3em] border border-white/10">Before</div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2px] bg-gold pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-[1px] h-3 bg-black" />
                  <div className="w-[1px] h-3 bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
