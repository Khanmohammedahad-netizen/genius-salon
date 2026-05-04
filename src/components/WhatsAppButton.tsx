"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-black/50 text-white"
    >
      <MessageSquare fill="currentColor" />
      <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap shadow-xl">
        Chat with us
        <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
      </span>
    </motion.a>
  );
}
