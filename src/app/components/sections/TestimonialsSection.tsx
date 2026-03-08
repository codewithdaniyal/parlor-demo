"use client";

import { Star } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { salonData } from "../../../data/salon";

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="bg-white section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-[500px] mx-auto text-center mb-14">
          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3">
            ✦ CLIENT REVIEWS
          </div>
          <h2
            className="heading-display text-[#1C0A12]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Client Reviews
          </h2>
          <p className="font-body font-light text-[0.95rem] text-[#9B7A8A] leading-[1.8] mt-4">
            What our clients say about us
          </p>
          <div className="w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5"></div>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salonData.testimonials.map((testimonial, index) => {
            const initials = testimonial.name
              .split(" ")
              .map((w) => w[0])
              .join("");

            return (
              <motion.div
                key={testimonial.id}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="bg-white border border-[#F5C6E0]/70 rounded-[20px] p-7 relative transition-all duration-300 hover:shadow-[0_8px_40px_rgba(233,30,140,0.1)] hover:-translate-y-1"
              >
                {/* Large Quote */}
                <div className="absolute top-5 right-6 heading-display text-[5rem] leading-none text-[#E91E8C]/10 pointer-events-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#E91E8C] fill-[#E91E8C]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body font-light text-[0.92rem] text-[#4A3040] leading-[1.85] italic line-clamp-4 mb-6">
                  {testimonial.review}
                </p>

                {/* Divider */}
                <div className="h-px bg-[#F5C6E0]/50"></div>

                {/* Client Info */}
                <div className="flex items-center gap-3 mt-5">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                    <span className="font-body font-semibold text-[#C2157A] text-[0.85rem]">
                      {initials}
                    </span>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-body font-semibold text-[0.88rem] text-[#1C0A12]">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-[0.75rem] text-[#9B7A8A] mt-0.5">
                      {testimonial.service} • {testimonial.city}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
