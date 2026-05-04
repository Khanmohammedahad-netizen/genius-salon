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
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all">
              <Globe size={18} />
            </div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all">
              <MessageSquare size={18} />
            </div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold transition-all">
              <Phone size={18} />
            </div>
          </div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Subscribe to our newsletter</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-gold w-full"
            />
            <button className="bg-gold text-black px-4 py-2 text-xs font-bold uppercase tracking-widest">Join</button>
          </div>
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
