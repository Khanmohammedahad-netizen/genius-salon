import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Transformation from "@/components/Transformation";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-black min-h-screen">
        <Navbar />
        <Hero />
        <Transformation />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <Booking />
        <Footer />
        <WhatsAppButton />
      </main>
    </SmoothScroll>
  );
}
