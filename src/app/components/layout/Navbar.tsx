"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSalon } from "../../context/SalonContext";

export function Navbar() {
  const { salon } = useSalon();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Book", href: "#booking" },
  ];

  return (
    <>
    <nav
        className= {`fixed top-0 left-0 right-0 z-50 h-16 md:h-[70px] transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-[#F5C6E0]"
        : "bg-transparent"
      }`
}
      >
  <div className="container-main h-full flex items-center justify-between" >
    {/* Logo */ }
    < a href = "#home" className = "flex items-center gap-2" >
      <span className="text-[#E91E8C] text-xl" >✿</span>
        < span className = "heading-display text-[1.35rem] text-[#1C0A12]" >
          { salon.name }
          </span>
          </a>

{/* Desktop Nav Links */ }
<div className="hidden md:flex items-center gap-8" >
{
  navLinks.map((link) => (
    <a
                key= { link.name }
                href = { link.href }
                className = "font-body text-[0.78rem] tracking-wide text-[#4A3040] hover:text-[#E91E8C] transition-colors duration-200"
    >
    { link.name }
    </a>
  ))
}
  </div>

{/* Desktop Book Button */ }
<a
            href="#booking"
className = "hidden md:inline-flex items-center border border-[#E91E8C] text-[#E91E8C] font-body text-[0.78rem] px-5 py-2 rounded-full hover:bg-[#E91E8C] hover:text-white transition-all duration-200"
  >
  Book Appointment
    </a>

{/* Mobile Menu Button */ }
<button
            onClick={ () => setMobileMenuOpen(true) }
className = "md:hidden w-10 h-10 flex items-center justify-center"
  >
  <Menu className="w-6 h-6 text-[#1C0A12]" />
    </button>
    </div>
    </nav>

{/* Mobile Menu */ }
<AnimatePresence>
  { mobileMenuOpen && (
    <motion.div
            initial={ { opacity: 0, y: -20 } }
animate = {{ opacity: 1, y: 0 }}
exit = {{ opacity: 0, y: -20 }}
transition = {{ duration: 0.2 }}
className = "fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center"
  >
  <button
              onClick={ () => setMobileMenuOpen(false) }
className = "absolute top-5 right-5 w-11 h-11 flex items-center justify-center"
  >
  <X className="w-6 h-6 text-[#1C0A12]" />
    </button>

    < div className = "flex flex-col items-center justify-center gap-8" >
    {
      navLinks.map((link) => (
        <a
                  key= { link.name }
                  href = { link.href }
                  onClick = {() => setMobileMenuOpen(false)}
className = "heading-display text-[2rem] text-[#1C0A12] hover:text-[#E91E8C] transition-colors"
  >
  { link.name }
  </a>
              ))}
<a
                href="#booking"
onClick = {() => setMobileMenuOpen(false)}
className = "mt-4 border-2 border-[#E91E8C] text-[#E91E8C] px-10 py-3 rounded-full font-body font-medium hover:bg-[#E91E8C] hover:text-white transition-all"
  >
  Book Now
    </a>
    </div>
    </motion.div>
        )}
</AnimatePresence>
  </>
  );
}
