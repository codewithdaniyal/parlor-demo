import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { salonData } from "../../../data/salon";

export function LocationSection() {
  const today = new Date().getDay();

  return (
    <section id="location" className="bg-white section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-[500px] mx-auto text-center mb-12">
          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3">
            ✦ VISIT OUR STUDIO
          </div>
          <h2
            className="heading-display text-[#1C0A12]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Visit Our Studio
          </h2>
          <div className="w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5"></div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Map */}
          <div className="rounded-[20px] overflow-hidden border-2 border-[#F5C6E0]/60 h-[450px] md:h-[480px]">
            <div className="w-full h-full bg-[#FCE4F3] flex items-center justify-center flex-col gap-3">
              <MapPin className="w-10 h-10 text-[#E91E8C] opacity-40" />
              <p className="text-[#9B7A8A] font-body text-[0.9rem]">
                Map loading...
              </p>
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1 - Location */}
            <div className="bg-white border border-[#F5C6E0]/60 rounded-[16px] p-5 flex items-start gap-4 border-l-[3px] border-l-[#E91E8C]">
              <div className="w-10 h-10 rounded-[10px] bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#E91E8C]" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-[0.88rem] text-[#1C0A12] mb-1">
                  Our Location
                </h3>
                <p className="font-body text-[0.83rem] text-[#4A3040]/80 leading-relaxed mb-2">
                  {salonData.address}
                </p>
                <a
                  href={salonData.google_map_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[0.83rem] text-[#E91E8C] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Card 2 - Contact */}
            <div className="bg-white border border-[#F5C6E0]/60 rounded-[16px] p-5 flex items-start gap-4 border-l-[3px] border-l-[#E91E8C]">
              <div className="w-10 h-10 rounded-[10px] bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#E91E8C]" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-[0.88rem] text-[#1C0A12] mb-1">
                  Contact Us
                </h3>
                <p className="font-body text-[0.83rem] text-[#4A3040]/80 leading-relaxed">
                  Phone: {salonData.phone}
                  <br />
                  WhatsApp: {salonData.phone}
                </p>
              </div>
            </div>

            {/* Card 3 - Business Hours */}
            <div className="bg-white border border-[#F5C6E0]/60 rounded-[16px] p-5 flex items-start gap-4 border-l-[3px] border-l-[#E91E8C]">
              <div className="w-10 h-10 rounded-[10px] bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#E91E8C]" />
              </div>
              <div className="flex-1">
                <h3 className="font-body font-semibold text-[0.88rem] text-[#1C0A12] mb-3">
                  Business Hours
                </h3>
                <div className="flex flex-col gap-1.5">
                  {salonData.business_hours.map((hour, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-4 items-center"
                    >
                      <span className="font-body text-[0.78rem] text-[#9B7A8A]">
                        {hour.day}
                      </span>
                      <span className="font-body text-[0.78rem] text-[#1C0A12] font-medium">
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4 - Social */}
            <div className="bg-white border border-[#F5C6E0]/60 rounded-[16px] p-5 flex items-start gap-4 border-l-[3px] border-l-[#E91E8C]">
              <div className="w-10 h-10 rounded-[10px] bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-[#E91E8C]" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-[0.88rem] text-[#1C0A12] mb-1">
                  Follow Us
                </h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href={salonData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.83rem] text-[#E91E8C] hover:underline"
                  >
                    Instagram
                  </a>
                  <span className="text-[#F5C6E0]">|</span>
                  <a
                    href={salonData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[0.83rem] text-[#E91E8C] hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 bg-[#1C0A12] rounded-[24px] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div>
            <h3 className="heading-display text-[1.8rem] text-white">
              Abhi Aayein — Look Your Best!
            </h3>
            <p className="font-body text-[0.9rem] text-white/50 mt-1">
              Appointment book karein aur humara fark khud dekhein
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#booking"
              className="bg-[#E91E8C] text-white rounded-full px-8 py-3.5 font-body font-medium hover:bg-[#C2157A] transition-all"
            >
              Book Now
            </a>
            <a
              href={`https://wa.me/${salonData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white rounded-full px-8 py-3.5 font-body font-medium hover:bg-white/10 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
