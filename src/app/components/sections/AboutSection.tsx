"use client";

import { ShieldCheck, Award, Sparkles } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { salonData } from "../../../data/salon";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import parlourImg from "../../../images/aboutus, parolr image.jpg";
import servicesImg from "../../../images/service photo aboutsection.png";

export function AboutSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightInView = useInView(rightRef, { once: true });

  return (
    <section id= "about" className = "bg-[#FFF5F9] section-padding" >
      <div className="container-main" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" >
          {/* Left - Image Collage */ }
          < motion.div
  ref = { leftRef }
  initial = {{ x: -40, opacity: 0 }
}
animate = { leftInView? { x: 0, opacity: 1 } : { }}
transition = {{ duration: 0.6 }}
className = "relative h-[500px] md:h-[560px]"
  >
  {/* Main Image */ }
  < div className = "absolute top-0 left-0 w-[72%] h-[82%] rounded-[20px] bg-[#FCE4F3] overflow-hidden shadow-[0_8px_32px_rgba(233,30,140,0.12)] group" >
    <ImageWithFallback 
                src={ parlourImg }
alt = "Noor Beauty Parlour Interior"
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  </div>

{/* Second Image */ }
<div className="absolute bottom-0 right-0 w-[52%] h-[52%] rounded-[20px] border-4 border-white shadow-[0_8px_32px_rgba(233,30,140,0.15)] bg-[#F5C6E0] overflow-hidden group" >
  <ImageWithFallback 
                src={ servicesImg }
alt = "Beauty Services at Noor Parlour"
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
  </div>

{/* Pink Badge - Years Experience */ }
<div className="absolute bottom-8 -left-4 md:left-4 bg-[#E91E8C] rounded-[16px] p-5 shadow-[0_8px_24px_rgba(233,30,140,0.4)]" >
  <div className="heading-display text-[2.5rem] text-white leading-none" >
    { salonData.years_experience } +
    </div>
    < div className = "font-body text-[0.72rem] text-white/80 uppercase tracking-wider mt-1" >
      Years Experience
        </div>
        </div>

{/* White Badge - Happy Clients */ }
<div className="absolute top-4 -right-4 md:right-4 bg-white rounded-[14px] p-4 border border-[#F5C6E0] shadow-[0_4px_20px_rgba(233,30,140,0.1)]" >
  <div className="heading-display text-[1.8rem] text-[#C2157A]" >
    { salonData.total_clients } +
    </div>
    < div className = "font-body text-[0.7rem] text-[#9B7A8A] uppercase tracking-wider" >
      Happy Clients
        </div>
        </div>
        </motion.div>

{/* Right - Content */ }
<motion.div
            ref={ rightRef }
initial = {{ x: 40, opacity: 0 }}
animate = { rightInView? { x: 0, opacity: 1 } : { }}
transition = {{ duration: 0.6 }}
          >
  {/* Label */ }
  < div className = "font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3" >
              ✦ ABOUT US
  </div>

{/* Heading */ }
<h2
              className="heading-display text-[#1C0A12]"
style = {{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
  Aapki Beauty, <em className="text-[#E91E8C]" > Hamari Zimmedari </em>
    </h2>

{/* Pink Line */ }
<div className="w-10 h-[2px] bg-[#E91E8C] my-5" > </div>

{/* Body Text */ }
<p className="font-body font-light text-[0.95rem] text-[#4A3040] leading-[1.9] mb-8" >
  Noor Beauty Parlour mein aapka swagat hai.Hum Pakistani khawateen
              ke liye premium beauty services provide karte hain — facial,
  makeup, hair, nails, aur waxing.Certified artists, imported
products, aur 100 % female staff — sirf aapke liye.
            </p>

{/* Feature Rows */ }
<div className="flex flex-col gap-5" >
  {/* Feature 1 */ }
  < div className = "flex items-start gap-4" >
    <div className="w-11 h-11 rounded-[12px] bg-[#FCE4F3] flex items-center justify-center flex-shrink-0" >
      <ShieldCheck className="w-5 h-5 text-[#E91E8C]" />
        </div>
        < div >
        <div className="font-body font-semibold text-[0.95rem] text-[#1C0A12]" >
          100 % Female Staff
            </div>
            < div className = "font-body font-light text-[0.83rem] text-[#9B7A8A] mt-0.5 leading-relaxed" >
              Safe, comfortable environment for all women
                </div>
                </div>
                </div>

              {/* Feature 2 */ }
  < div className = "flex items-start gap-4" >
    <div className="w-11 h-11 rounded-[12px] bg-[#FCE4F3] flex items-center justify-center flex-shrink-0" >
      <Award className="w-5 h-5 text-[#E91E8C]" />
        </div>
        < div >
        <div className="font-body font-semibold text-[0.95rem] text-[#1C0A12]" >
          Certified Artists
            </div>
            < div className = "font-body font-light text-[0.83rem] text-[#9B7A8A] mt-0.5 leading-relaxed" >
              Professionally trained beauty experts
                </div>
                </div>
                </div>

{/* Feature 3 */ }
<div className="flex items-start gap-4" >
  <div className="w-11 h-11 rounded-[12px] bg-[#FCE4F3] flex items-center justify-center flex-shrink-0" >
    <Sparkles className="w-5 h-5 text-[#E91E8C]" />
      </div>
      < div >
      <div className="font-body font-semibold text-[0.95rem] text-[#1C0A12]" >
        Imported Products
          </div>
          < div className = "font-body font-light text-[0.83rem] text-[#9B7A8A] mt-0.5 leading-relaxed" >
            Loreal, Wella, MAC, OPI — only premium brands
              </div>
              </div>
              </div>
              </div>

{/* Button */ }
<a
              href="#booking"
className = "inline-flex items-center gap-2 bg-[#E91E8C] text-white rounded-full px-8 py-3.5 font-body font-medium tracking-wide shadow-[0_4px_24px_rgba(233,30,140,0.35)] hover:bg-[#C2157A] transition-all duration-300 mt-8"
  >
  Book Appointment
    </a>
    </motion.div>
    </div>
    </div>
    </section>
  );
}
