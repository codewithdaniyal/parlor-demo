"use client";

import { Check } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { salonData } from "../../../data/salon";

const HalftoneDecor = ({ className }: { className: string }) => {
  const rings = 6;
  const dotsPerRing = 20;

  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: rings }).map((_, ringIndex) => {
        const radius = 30 + ringIndex * 25;
        return Array.from({ length: dotsPerRing }).map((_, dotIndex) => {
          const angle = (dotIndex / dotsPerRing) * Math.PI * 2;
          const x = 150 + Math.cos(angle) * radius;
          const y = 150 + Math.sin(angle) * radius;
          const size = 1.5 + Math.random() * 1.5;

          return (
            <circle
              key={`${ringIndex}-${dotIndex}`}
              cx={x}
              cy={y}
              r={size}
              fill="#E91E8C"
            />
          );
        });
      })}
    </svg>
  );
};

export function PackagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="packages"
      className="bg-[#1C0A12] section-padding relative overflow-hidden"
    >
      {/* Decorative Halftone */}
      <HalftoneDecor className="absolute -right-20 top-1/4 w-[500px] h-[500px] opacity-[0.04] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-[500px] mx-auto text-center mb-14">
          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3">
            ✦ OUR PACKAGES
          </div>
          <h2
            className="heading-display text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Choose Your Look
          </h2>
          <p className="font-body font-light text-[0.95rem] text-white/50 leading-[1.8] mt-4">
            Har occasion ke liye perfect package
          </p>
          <div className="w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5"></div>
        </div>

        {/* Packages Grid */}
        <div
          ref={ref}
          className="hidden md:grid md:grid-cols-4 gap-5"
        >
          {salonData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-[20px] p-7 relative ${
                pkg.popular
                  ? "bg-[#E91E8C] border-none scale-[1.02]"
                  : "bg-white/[0.04] border border-white/[0.08]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-white text-[#E91E8C] font-body font-semibold text-[0.62rem] uppercase tracking-wider px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Package Name */}
              <h3
                className={`heading-display text-[1.15rem] ${
                  pkg.popular ? "text-white" : "text-white"
                }`}
              >
                {pkg.name}
              </h3>

              {/* Price Block */}
              <div className="mt-3 mb-5">
                <span
                  className={`font-body text-[0.72rem] block mb-1 ${
                    pkg.popular ? "text-white/70" : "text-white/40"
                  }`}
                >
                  PKR
                </span>
                <div
                  className={`heading-display text-[2.2rem] leading-none ${
                    pkg.popular ? "text-white" : "text-white"
                  }`}
                >
                  {pkg.price.toLocaleString()}
                </div>
                <span
                  className={`font-body text-[0.7rem] mt-1 block ${
                    pkg.popular ? "text-white/60" : "text-white/30"
                  }`}
                >
                  /one time
                </span>
              </div>

              {/* Divider */}
              <div
                className={`h-px my-5 ${
                  pkg.popular ? "bg-white/20" : "bg-white/[0.08]"
                }`}
              ></div>

              {/* Inclusions List */}
              <div className="flex flex-col gap-3">
                {pkg.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        pkg.popular
                          ? "border-white/40"
                          : "border-[#E91E8C]/30"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          pkg.popular ? "text-white" : "text-[#E91E8C]"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-body text-[0.85rem] leading-snug ${
                        pkg.popular ? "text-white/85" : "text-white/65"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="#booking"
                className={`mt-7 w-full rounded-full py-3 font-body font-medium text-[0.85rem] tracking-wide transition-all duration-300 flex items-center justify-center ${
                  pkg.popular
                    ? "bg-white text-[#E91E8C] hover:bg-white/90"
                    : "border border-[#E91E8C]/60 text-[#E91E8C] hover:bg-[#E91E8C] hover:text-white hover:border-[#E91E8C]"
                }`}
              >
                Book Now
              </a>

              {/* Advance Note */}
              <p
                className={`font-body text-[0.68rem] text-center mt-3 ${
                  pkg.popular ? "text-white/40" : "text-white/25"
                }`}
              >
                Book {pkg.advance_days} day in advance
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile - Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar">
          {salonData.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`min-w-[270px] snap-start rounded-[20px] p-7 relative ${
                pkg.popular
                  ? "bg-[#E91E8C] border-none"
                  : "bg-white/[0.04] border border-white/[0.08]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-white text-[#E91E8C] font-body font-semibold text-[0.62rem] uppercase tracking-wider px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <h3
                className={`heading-display text-[1.15rem] ${
                  pkg.popular ? "text-white" : "text-white"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="mt-3 mb-5">
                <span
                  className={`font-body text-[0.72rem] block mb-1 ${
                    pkg.popular ? "text-white/70" : "text-white/40"
                  }`}
                >
                  PKR
                </span>
                <div
                  className={`heading-display text-[2.2rem] leading-none ${
                    pkg.popular ? "text-white" : "text-white"
                  }`}
                >
                  {pkg.price.toLocaleString()}
                </div>
                <span
                  className={`font-body text-[0.7rem] mt-1 block ${
                    pkg.popular ? "text-white/60" : "text-white/30"
                  }`}
                >
                  /one time
                </span>
              </div>

              <div
                className={`h-px my-5 ${
                  pkg.popular ? "bg-white/20" : "bg-white/[0.08]"
                }`}
              ></div>

              <div className="flex flex-col gap-3">
                {pkg.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        pkg.popular
                          ? "border-white/40"
                          : "border-[#E91E8C]/30"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          pkg.popular ? "text-white" : "text-[#E91E8C]"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-body text-[0.85rem] leading-snug ${
                        pkg.popular ? "text-white/85" : "text-white/65"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#booking"
                className={`mt-7 w-full rounded-full py-3 font-body font-medium text-[0.85rem] tracking-wide transition-all duration-300 flex items-center justify-center ${
                  pkg.popular
                    ? "bg-white text-[#E91E8C] hover:bg-white/90"
                    : "border border-[#E91E8C]/60 text-[#E91E8C] hover:bg-[#E91E8C] hover:text-white hover:border-[#E91E8C]"
                }`}
              >
                Book Now
              </a>

              <p
                className={`font-body text-[0.68rem] text-center mt-3 ${
                  pkg.popular ? "text-white/40" : "text-white/25"
                }`}
              >
                Book {pkg.advance_days} day in advance
              </p>
            </div>
          ))}
        </div>

        {/* Urgency Strip */}
        <div className="mt-12 max-w-xl mx-auto bg-[#E91E8C]/[0.1] border border-[#E91E8C]/20 rounded-[14px] px-6 py-4 flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse"></div>
          <p className="font-body text-[0.85rem] text-white/60">
            Limited daily slots available — Book your appointment now
          </p>
        </div>
      </div>
    </section>
  );
}
