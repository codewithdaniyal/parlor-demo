import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PackagesSection } from "./components/sections/PackagesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { BookingSection } from "./components/sections/BookingSection";
import { LocationSection } from "./components/sections/LocationSection";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

export default function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
