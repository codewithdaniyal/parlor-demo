"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { salonData } from "../../../data/salon";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: salonData.rating, suffix: "★", label: "Average Rating" },
  { value: salonData.total_clients, suffix: "+", label: "Happy Clients" },
  { value: salonData.years_experience, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Hygiene Certified" },
];

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * stat.value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="heading-display text-[3rem] text-[#C2157A] leading-none">
        {count}
        {stat.suffix}
      </div>
      <div className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-[#9B7A8A] mt-2">
        {stat.label}
      </div>
      <div className="w-6 h-[2px] bg-[#E91E8C] mx-auto mt-3"></div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white border-b border-[#F5C6E0]/40 py-16">
      <div className="container-main">
        <div className="hidden md:flex justify-center gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-20">
              <StatItem stat={stat} />
              {index < stats.length - 1 && (
                <div className="w-px h-14 bg-[#F5C6E0]/60"></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 md:hidden">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
