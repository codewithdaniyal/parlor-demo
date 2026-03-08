"use client";

import { useState } from "react";
import { Calendar, Loader2, CheckCircle2, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { salonData } from "../../../data/salon";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    // Build WhatsApp message
    setTimeout(() => {
      const msg = `Hi! Mujhe ${salonData.name} mein appointment chahiye.
      
Naam: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service || "Not specified"}
Date: ${formData.date || "Not specified"}
Time: ${formData.time || "Not specified"}
Notes: ${formData.notes || "None"}`;

      window.open(
        `https://wa.me/${salonData.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );

      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const resetForm = () => {
    setSuccess(false);
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="bg-[#FFF5F9] section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-[600px] mx-auto text-center mb-12">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E91E8C]/10 border border-[#E91E8C]/20 text-[#C2157A] font-body text-[0.7rem] uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] animate-pulse"></span>
            Limited Daily Slots Available
          </div>

          <div className="font-body text-[0.68rem] text-[#E91E8C] uppercase tracking-[0.2em] mb-3">
            ✦ BOOK APPOINTMENT
          </div>
          <h2
            className="heading-display text-[#1C0A12]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Book Appointment
          </h2>
          <p className="font-body font-light text-[0.95rem] text-[#9B7A8A] leading-[1.8] mt-4">
            WhatsApp confirmation within 1 hour
          </p>
          <div className="w-10 h-[2px] bg-[#E91E8C] mx-auto mt-5"></div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          {/* Left - Form Card */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border-t-4 border-[#E91E8C] shadow-[0_4px_40px_rgba(233,30,140,0.07)]">
            {success ? (
              // Success State
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#E91E8C] mx-auto mb-4" />
                <h3 className="heading-display text-[1.8rem] text-[#1C0A12] mb-2">
                  Booking Sent! 🌸
                </h3>
                <p className="font-body text-[#9B7A8A] mb-6">
                  WhatsApp confirmation within 1 hour
                </p>
                <button
                  onClick={resetForm}
                  className="bg-[#E91E8C] text-white rounded-full px-8 py-3 font-body font-medium hover:bg-[#C2157A] transition-all"
                >
                  Book Another
                </button>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit}>
                {/* Row 1 - Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
                  {/* Full Name */}
                  <div className="relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                    <label
                      className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                        formData.name
                          ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                          : "top-3 text-[0.87rem]"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1"
                    />
                    {errors.name && (
                      <p className="font-body text-[0.72rem] text-red-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                    <label
                      className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                        formData.phone
                          ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                          : "top-3 text-[0.87rem]"
                      }`}
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1"
                    />
                    {errors.phone && (
                      <p className="font-body text-[0.72rem] text-red-400 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2 - Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
                  {/* Date */}
                  <div className="relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                    <label
                      className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                        formData.date
                          ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                          : "top-3 text-[0.87rem]"
                      }`}
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1"
                    />
                  </div>

                  {/* Time */}
                  <div className="relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                    <label
                      className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                        formData.time
                          ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                          : "top-3 text-[0.87rem]"
                      }`}
                    >
                      Preferred Time
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1"
                    >
                      <option value=""></option>
                      <option value="Morning (10am–12pm)">
                        Morning (10am–12pm)
                      </option>
                      <option value="Afternoon (12pm–4pm)">
                        Afternoon (12pm–4pm)
                      </option>
                      <option value="Evening (4pm–7pm)">
                        Evening (4pm–7pm)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Service */}
                <div className="mb-7 relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                  <label
                    className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                      formData.service
                        ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                        : "top-3 text-[0.87rem]"
                    }`}
                  >
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1"
                  >
                    <option value=""></option>
                    {salonData.services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div className="mb-7 relative border-b border-[#F5C6E0] pb-1 focus-within:border-[#E91E8C] transition-colors duration-200">
                  <label
                    className={`absolute left-0 font-body text-[#9B7A8A] pointer-events-none transition-all duration-200 ${
                      formData.notes
                        ? "-top-3 text-[0.7rem] text-[#E91E8C]"
                        : "top-3 text-[0.87rem]"
                    }`}
                  >
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Skin concerns, reference photo, special notes..."
                    className="w-full bg-transparent outline-none border-none font-body text-[0.92rem] text-[#1C0A12] pt-4 pb-1 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E91E8C] text-white rounded-full py-4 font-body font-medium text-[0.9rem] tracking-wide shadow-[0_4px_20px_rgba(233,30,140,0.3)] hover:bg-[#C2157A] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right - Trust Panel */}
          <div className="sticky top-24">
            <h3 className="heading-display text-[1.35rem] text-[#1C0A12] mb-6">
              Why Book With Us
            </h3>

            {/* Trust Items */}
            <div className="flex flex-col gap-5 mb-7">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                </div>
                <p className="font-body text-[0.9rem] text-[#4A3040] leading-relaxed">
                  Sirf female staff — safe environment
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                </div>
                <p className="font-body text-[0.9rem] text-[#4A3040] leading-relaxed">
                  Same day booking available
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                </div>
                <p className="font-body text-[0.9rem] text-[#4A3040] leading-relaxed">
                  No advance payment
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                </div>
                <p className="font-body text-[0.9rem] text-[#4A3040] leading-relaxed">
                  WhatsApp confirm in 1 hour
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCE4F3] flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E8C]" />
                </div>
                <p className="font-body text-[0.9rem] text-[#4A3040] leading-relaxed">
                  Hygienic tools — new every time
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#F5C6E0]/60 my-7"></div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${salonData.phone}`}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-[#E91E8C]" />
                <span className="font-body text-[0.88rem] text-[#4A3040] group-hover:text-[#E91E8C] transition-colors">
                  {salonData.phone}
                </span>
              </a>

              <a
                href={`https://wa.me/${salonData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="font-body text-[0.88rem] text-[#4A3040] group-hover:text-green-500 transition-colors">
                  WhatsApp
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E91E8C] mt-0.5" />
                <span className="font-body text-[0.88rem] text-[#4A3040]">
                  {salonData.address}
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="font-body text-[0.68rem] uppercase tracking-wider text-[#9B7A8A] mb-3">
                Business Hours
              </h4>
              <div className="flex flex-col gap-2">
                {salonData.business_hours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4 items-center"
                  >
                    <span className="font-body text-[0.82rem] text-[#9B7A8A]">
                      {hour.day}
                    </span>
                    <span className="font-body text-[0.82rem] text-[#1C0A12] font-medium">
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
