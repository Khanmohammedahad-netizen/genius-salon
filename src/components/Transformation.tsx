"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: "The Consultation",
    desc: "Understanding your vision and hair health.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Precision Mapping",
    desc: "Detailed sectioning and color placement.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "The Transformation",
    desc: "Masterful execution of cut and color.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "The Reveal",
    desc: "Stepping out with renewed confidence.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
  },
];

export default function Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.to(".stage-container", {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      stages.forEach((_, i) => {
        if (i === 0) return;
        
        gsap.fromTo(`.stage-${i}`, 
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(i / stages.length) * 3000}`,
              end: `${((i + 1) / stages.length) * 3000}`,
              scrub: true,
            }
          }
        );

        gsap.to(`.text-${i-1}`, {
          opacity: 0,
          y: -20,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `${(i / stages.length) * 3000}`,
            end: `${((i + 0.2) / stages.length) * 3000}`,
            scrub: true,
          }
        });

        gsap.fromTo(`.text-${i}`, 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `${(i / stages.length) * 3000}`,
              end: `${((i + 0.5) / stages.length) * 3000}`,
              scrub: true,
            }
          }
        );
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative bg-black">
      <div className="stage-container h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`stage-${i} absolute inset-0 z-${i} transition-opacity duration-500`}
            style={{
              backgroundImage: `url(${stage.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === 0 ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            The Experience
          </span>
          
          <div className="relative h-64">
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`text-${i} absolute top-0 left-0 max-w-2xl transition-opacity duration-500`}
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <h3 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                  {stage.title}
                </h3>
                <p className="text-white/60 text-xl md:text-2xl font-light tracking-wide max-w-lg">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex gap-4">
            {stages.map((_, i) => (
              <div 
                key={i} 
                className="w-12 h-[2px] bg-white/10 relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gold"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.2 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
