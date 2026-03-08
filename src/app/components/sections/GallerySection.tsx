"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { salonData } from "../../../data/salon";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = ["All", "Makeup", "Hair", "Skin", "Nails"];

  const filteredGallery =
    activeFilter === "All"
      ? salonData.gallery
      : salonData.gallery.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length
    );
  };

  return (
    <section id= "gallery" className = "bg-[#FFF5F9] section-padding" >
      <div className="container-main" >
        {/* Header */ }
        < div className = "max-w-[500px] mx-auto text-center mb-10" >
          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3" >
            ✦ OUR WORK
    </div>
    < h2
  className = "heading-display text-[#1C0A12]"
  style = {{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }
}
          >
  Our Work
    </h2>
    < p className = "font-body font-light text-[0.95rem] text-[#9B7A8A] leading-[1.8] mt-4" >
      Real results from real clients
        </p>
        < div className = "w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5" > </div>
          </div>

{/* Filter Tabs */ }
<div className="flex flex-wrap justify-center gap-2 mb-10" >
{
  filters.map((filter) => (
    <button
              key= { filter }
              onClick = {() => setActiveFilter(filter)}
className = {`font-body text-[0.78rem] px-5 py-2 rounded-full cursor-pointer transition-all duration-200 ${activeFilter === filter
    ? "bg-[#E91E8C] text-white"
    : "bg-white text-[#9B7A8A] border border-[#F5C6E0] hover:border-[#E91E8C] hover:text-[#E91E8C]"
  }`}
            >
  { filter }
  </button>
          ))}
</div>

{/* Symmetric Grid Display */ }
<AnimatePresence mode="wait" >
  <motion.div
            key={ activeFilter }
initial = {{ opacity: 0 }}
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
transition = {{ duration: 0.3 }}
className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  >
{
  filteredGallery.map((item, index) => (
    <motion.div
                key= { item.id }
                initial = {{ opacity: 0, y: 20 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: index * 0.05 }}
onClick = {() => openLightbox(index)}
className = "group relative rounded-[18px] overflow-hidden cursor-pointer aspect-[4/5] shadow-lg border-2 border-white/50"
  >
  <ImageWithFallback 
                  src={ item.src }
alt = {`${item.category} work`}
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Hover Overlay */ }
  < div className = "absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4" >
    <div className="bg-white/90 backdrop-blur-sm text-[#E91E8C] font-body text-[0.75rem] font-medium px-4 py-1.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" >
      { item.category }
      </div>
      </div>
      </motion.div>
            ))}
</motion.div>
  </AnimatePresence>
  </div>

{/* Lightbox */ }
<AnimatePresence>
  { lightboxOpen && (
    <motion.div
            initial={ { opacity: 0 } }
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
className = "fixed inset-0 bg-black/92 z-[100] flex items-center justify-center"
onClick = {() => setLightboxOpen(false)}
          >
  {/* Close Button */ }
  < button
onClick = {() => setLightboxOpen(false)}
className = "fixed top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
  >
  <X className="w-6 h-6 text-white" />
    </button>

{/* Image Container */ }
<motion.div
              initial={ { scale: 0.88 } }
animate = {{ scale: 1 }}
className = "max-w-[90vw] max-h-[88vh] rounded-[16px] overflow-hidden relative shadow-2xl border-2 border-white/20"
onClick = {(e) => e.stopPropagation()}
            >
  <ImageWithFallback 
                src={ filteredGallery[lightboxIndex].src }
alt = { filteredGallery[lightboxIndex].category }
className = "max-w-full max-h-[88vh] object-contain"
  />
  </motion.div>

{/* Prev Button */ }
<button
              onClick={
  (e) => {
    e.stopPropagation();
    prevImage();
  }
}
className = "fixed left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
  >
  <ChevronLeft className="w-6 h-6 text-white" />
    </button>

{/* Next Button */ }
<button
              onClick={
  (e) => {
    e.stopPropagation();
    prevImage();
  }
}
className = "fixed right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
  >
  <ChevronRight className="w-6 h-6 text-white" />
    </button>
    </motion.div>
        )}
</AnimatePresence>
  </section>
  );
}
