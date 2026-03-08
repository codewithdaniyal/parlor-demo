"use client";

import { useState, useEffect } from "react";
import { Calendar, MessageCircle, ChevronDown, Star } from "lucide-react";
import { motion } from "motion/react";
import { salonData } from "../../../data/salon";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import heroImg from "../../../images/1d5aa549087a8653fb665d9934198f7b.jpg";

const HalftoneDecor = ({ className }: { className: string }) => {
  const rings = 8;
  const dotsPerRing = 24;

  return (
    <svg
      className= { className }
  viewBox = "0 0 400 400"
  fill = "none"
  xmlns = "http://www.w3.org/2000/svg"
    >
  {
    Array.from({ length: rings }).map((_, ringIndex) => {
      const radius = 40 + ringIndex * 30;
      return Array.from({ length: dotsPerRing }).map((_, dotIndex) => {
        const angle = (dotIndex / dotsPerRing) * Math.PI * 2;
        const x = 200 + Math.cos(angle) * radius;
        const y = 200 + Math.sin(angle) * radius;
        const size = 2 + Math.random() * 2;

        return (
          <circle
              key= {`${ringIndex}-${dotIndex}`
      }
              cx = { x }
              cy = { y }
              r = { size }
              fill = "#E91E8C"
        />
          );
    });
  })
}
</svg>
  );
};

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id= "home"
  className = "min-h-screen flex items-center overflow-hidden relative"
  style = {{
    background:
    "linear-gradient(135deg, #FFF0F5 0%, #FFE4EF 40%, #FFC8DD 100%)",
      }
}
    >
  {/* Halftone Decorations */ }
  < HalftoneDecor className = "absolute -right-32 top-1/4 w-[600px] h-[600px] opacity-[0.07] pointer-events-none" />
    <HalftoneDecor className="absolute -left-20 top-10 w-[400px] h-[400px] opacity-[0.04] pointer-events-none" />

      <div className="container-main w-full py-20 lg:py-32" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" >
          {/* Left Column - Content */ }
          < div className = "max-w-[600px]" >
            {/* Badge */ }
            < motion.div
initial = {{ opacity: 0, scale: 0.9 }}
animate = {{ opacity: 1, scale: 1 }}
transition = {{ delay: 0.2 }}
className = "inline-flex items-center gap-2 bg-white/60 border border-[#E91E8C]/20 text-[#C2157A] font-body text-[0.65rem] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6"
  >
  <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] animate-pulse" > </span>
              LADIES BEAUTY PARLOUR
  </motion.div>

{/* Main Heading */ }
<motion.h1
              initial={ { opacity: 0, y: 30 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.4 }}
className = "heading-display leading-[1.08] text-[#1C0A12]"
style = {{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
  Redefining < em className = "text-[#E91E8C]" > Beauty </em> with Professional Excellence
    </motion.h1>

{/* Divider */ }
<motion.div
              initial={ { scaleX: 0 } }
animate = {{ scaleX: 1 }}
transition = {{ delay: 0.6 }}
className = "w-12 h-[2px] bg-[#E91E8C] my-5 origin-left"
  > </motion.div>

{/* Sub heading */ }
<motion.p
              initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.65 }}
className = "font-body font-light text-[1.05rem] text-[#4A3040]/80 leading-[1.8] max-w-[440px]"
  >
  { salonData.sub_tagline }
  </motion.p>

{/* Buttons */ }
<motion.div
              initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.8 }}
className = "flex flex-wrap gap-4 mt-8"
  >
  <a
                href="#booking"
className = "inline-flex items-center gap-2 bg-[#E91E8C] text-white rounded-full px-8 py-3.5 font-body font-medium tracking-wide shadow-[0_4px_24px_rgba(233,30,140,0.35)] hover:bg-[#C2157A] hover:shadow-[0_6px_32px_rgba(233,30,140,0.45)] transition-all duration-300"
  >
  <Calendar className="w-4 h-4" />
    Book Appointment
      </a>
      < a
href = {`https://wa.me/${salonData.whatsapp}?text=Hi! I'd like to know more about ${salonData.name}`}
target = "_blank"
rel = "noopener noreferrer"
className = "inline-flex items-center gap-2 border-2 border-[#E91E8C]/30 text-[#C2157A] rounded-full px-8 py-3.5 font-body font-medium tracking-wide hover:bg-[#E91E8C] hover:text-white hover:border-[#E91E8C] transition-all duration-300"
  >
  <MessageCircle className="w-4 h-4" />
    WhatsApp Now
      </a>
      </motion.div>
      </div>

{/* Right Column - Decorative Image Area */ }
<div className="relative group" >
  {/* Visual background elements */ }
  < motion.div
initial = {{ opacity: 0, scale: 0.8 }}
animate = {{ opacity: 1, scale: 1 }}
transition = {{ delay: 0.5, duration: 1 }}
className = "absolute -inset-4 bg-[#E91E8C]/5 rounded-[40px] blur-2xl"
  />

  <motion.div
              initial={ { opacity: 0, x: 50 } }
animate = {{ opacity: 1, x: 0 }}
transition = {{ delay: 0.8, duration: 0.8 }}
className = "relative z-10 w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(233,30,140,0.3)] border-4 border-white ring-1 ring-[#E91E8C]/10"
  >
  <ImageWithFallback
                src={ heroImg }
alt = "Karachi Premier Beauty Parlour"
className = "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
  />

  {/* Overlay Gradient */ }
  < div className = "absolute inset-0 bg-gradient-to-t from-[#E91E8C]/10 to-transparent opacity-60 pointer-events-none" />
    </motion.div>

{/* Floating decoration */ }
<motion.div
              animate={
  {
    y: [0, -15, 0],
      rotate: [0, 5, 0],
              }
}
transition = {{
  duration: 6,
    repeat: Infinity,
      ease: "easeInOut",
              }}
className = "absolute -bottom-4 -right-2 lg:-bottom-6 lg:-right-6 z-20 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl border border-[#E91E8C]/10"
  >
  <div className="flex items-center gap-3" >
    <div className="w-10 h-10 rounded-full bg-[#E91E8C]/10 flex items-center justify-center text-[#E91E8C]" >
      <Star className="w-5 h-5 fill-[#E91E8C]" />
        </div>
        < div >
        <p className="text-[0.65rem] uppercase tracking-widest text-[#9B7A8A] font-body" >
          Best Studio
            </p>
            < p className = "text-[0.9rem] font-display text-[#1C0A12] font-semibold" >
              Signature Glow
                </p>
                </div>
                </div>
                </motion.div>
                </div>
                </div>
                </div>

{/* Stats Strip */ }
<motion.div
        initial={ { y: 50, opacity: 0 } }
animate = {{ y: 0, opacity: 1 }}
transition = {{ delay: 1 }}
className = "absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md border-t border-[#E91E8C]/10"
  >
  <div className="container-main py-5" >
    <div className="flex flex-wrap justify-center gap-10 md:gap-16" >
      {/* Stat 1 */ }
      < div className = "flex items-center gap-3" >
        <Star className="w-5 h-5 text-[#E91E8C] fill-[#E91E8C]" />
          <div>
          <div className="heading-display text-[1.2rem] text-[#1C0A12]" >
            { salonData.rating } / 5
            </div>
            < div className = "font-body text-[0.68rem] uppercase tracking-[0.12em] text-[#9B7A8A]" >
              Rating
              </div>
              </div>
              </div>

              < div className = "w-px h-7 bg-[#E91E8C]/15" > </div>

{/* Stat 2 */ }
<div className="flex items-center gap-3" >
  <span className="text-[1.2rem]" >💄</span>
    < div >
    <div className="heading-display text-[1.2rem] text-[#1C0A12]" >
      { salonData.total_clients } +
      </div>
      < div className = "font-body text-[0.68rem] uppercase tracking-[0.12em] text-[#9B7A8A]" >
        Happy Clients
          </div>
          </div>
          </div>

          < div className = "w-px h-7 bg-[#E91E8C]/15" > </div>

{/* Stat 3 */ }
<div className="flex items-center gap-3" >
  <span className="text-[1.2rem]" >✓</span>
    < div >
    <div className="heading-display text-[1.2rem] text-[#1C0A12]" >
      Certified
      </div>
      < div className = "font-body text-[0.68rem] uppercase tracking-[0.12em] text-[#9B7A8A]" >
        Hygiene
        </div>
        </div>
        </div>
        </div>
        </div>
        </motion.div>

{/* Scroll Indicator */ }
{
  showScrollIndicator && (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce" >
      <ChevronDown className="w-5 h-5 text-[#E91E8C]/30" />
        </div>
      )
}
</section>
  );
}
