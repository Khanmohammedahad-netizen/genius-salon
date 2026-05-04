import Link from "next/link";
import { Globe, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col">
          <span className="text-2xl font-serif font-bold gold-text-gradient mb-2">
            GENIUS
          </span>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-6">
            Hair & Beauty Family Salon
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            The ultimate destination for luxury hair and beauty services in Hyderabad. 
            Defining style since 2010.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
          <ul className="space-y-4">
            {["Hair Styling", "Men's Grooming", "Bridal Makeup", "Skin Care", "Keratin Treatment"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Connect</h4>
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all cursor-pointer">
              <Globe size={18} />
            </div>
            <a 
              href="https://wa.me/916303927238" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all"
            >
              <MessageSquare size={18} />
            </a>
            <a 
              href="tel:+916303927238"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all"
            >
              <Phone size={18} />
            </a>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Follow us for the latest transformations and styling tips.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">
          © 2024 GENIUS Hair & Beauty Salon. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</Link>
          <Link href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
