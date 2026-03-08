"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Sparkles,
  Star,
  Scissors,
  Palette,
  Gem,
  Feather,
  Sun,
  Flower2,
  LucideIcon,
} from "lucide-react";
import { salonData } from "../../../data/salon";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Star,
  Scissors,
  Palette,
  Gem,
  Feather,
  Sun,
  Flower2,
};

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-[500px] mx-auto text-center mb-14">
          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3">
            ✦ OUR SERVICES
          </div>
          <h2
            className="heading-display text-[#1C0A12]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Complete Beauty Solutions
          </h2>
          <p className="font-body font-light text-[0.95rem] text-[#9B7A8A] leading-[1.8] mt-4">
            From everyday grooming to special occasions
          </p>
          <div className="w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5"></div>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5"
        >
          {salonData.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group bg-white border border-[#F5C6E0]/60 rounded-[20px] p-5 md:p-6 cursor-pointer transition-all duration-300 hover:border-[#F5C6E0] hover:shadow-[0_8px_32px_rgba(233,30,140,0.1)] hover:-translate-y-1.5"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-[14px] bg-[#FCE4F3] mb-4 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E91E8C]">
                  <Icon className="w-5 h-5 text-[#E91E8C] group-hover:text-white transition-colors" />
                </div>

                {/* Service Name */}
                <h3 className="heading-display text-[1.05rem] text-[#1C0A12] mb-1.5">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-body font-light text-[0.8rem] text-[#9B7A8A] leading-[1.7] line-clamp-2">
                  {service.description}
                </p>

                {/* Price + Duration */}
                <div className="flex items-center justify-between mt-4">
                  <span className="font-body font-semibold text-[0.85rem] text-[#E91E8C]">
                    From PKR {service.price}
                  </span>
                  <span className="font-body text-[0.72rem] text-[#9B7A8A]">
                    {service.duration}
                  </span>
                </div>

                {/* Bottom Line */}
                <div className="h-[2px] bg-[#E91E8C] rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
