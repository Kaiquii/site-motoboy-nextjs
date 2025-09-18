import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <Image
          src="/motoboy.jpg"
          alt="Motoboy"
          fill
          className="object-cover blur-md opacity-70"
          style={{ objectPosition: "center", zIndex: -10 }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Navbar />
      <main id="home">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
