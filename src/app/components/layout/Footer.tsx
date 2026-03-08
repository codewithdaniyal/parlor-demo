import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useSalon } from "../../context/SalonContext";

export function Footer() {
  const { salon } = useSalon();
  const currentYear = new Date().getFullYear();

  return (
    <footer className= "bg-[#1C0A12] border-t border-white/[0.06] pt-16 pb-8" >
    <div className="container-main" >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" >
        {/* Column 1 - Brand */ }
        < div >
        <div className="inline-flex items-center gap-2 mb-3" >
          <span className="text-[#E91E8C] text-xl" >✿</span>
            < span className = "heading-display text-[1.3rem] text-white" >
              { salon.name }
              </span>
              </div>
              < p className = "font-body text-[0.8rem] text-white/40 italic mb-6" >
                { salon.tagline }
                </p>

                < div className = "flex flex-col gap-3 mb-6" >
                  <div className="flex items-center gap-2.5" >
                    <Phone className="w-4 h-4 text-[#E91E8C]/60" />
                      <span className="font-body text-[0.83rem] text-white/55" >
                        { salon.phone }
                        </span>
                        </div>
                        < div className = "flex items-center gap-2.5" >
                          <Mail className="w-4 h-4 text-[#E91E8C]/60" />
                            <span className="font-body text-[0.83rem] text-white/55" >
                              { salon.email }
                              </span>
                              </div>
                              < div className = "flex items-center gap-2.5" >
                                <MapPin className="w-4 h-4 text-[#E91E8C]/60" />
                                  <span className="font-body text-[0.83rem] text-white/55" >
                                    { salon.address }
                                    </span>
                                    </div>
                                    </div>

                                    < div className = "flex gap-3" >
                                      <a
                href={ salon.instagram }
  target = "_blank"
  rel = "noopener noreferrer"
  className = "w-9 h-9 rounded-[10px] bg-white/[0.06] flex items-center justify-center hover:bg-[#E91E8C] transition-all duration-200 group"
    >
    <Instagram className="w-4 h-4 text-white/50 group-hover:text-white" />
      </a>
      < a
  href = { salon.facebook }
  target = "_blank"
  rel = "noopener noreferrer"
  className = "w-9 h-9 rounded-[10px] bg-white/[0.06] flex items-center justify-center hover:bg-[#E91E8C] transition-all duration-200 group"
    >
    <Facebook className="w-4 h-4 text-white/50 group-hover:text-white" />
      </a>
      </div>
      </div>

  {/* Column 2 - Services */ }
  <div>
    <h3 className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-white/25 mb-5" >
      Services
      </h3>
      < div className = "flex flex-col gap-3" >
      {
        ["Facial", "Makeup", "Hair Styling", "Hair Color", "Nails", "Waxing", "Mehndi"].map(
          (service) => (
            <a
                    key= { service }
                    href = "#services"
                    className = "flex items-center gap-1.5 font-body text-[0.87rem] text-white/55 hover:text-[#E91E8C] transition-colors"
          >
          <span className="text-[#E91E8C] text-[0.7rem]" >›</span>
                    { service }
          </a>
        )
              )
      }
        </div>
        </div>

  {/* Column 3 - Contact */ }
  <div>
    <h3 className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-white/25 mb-5" >
      Contact
      </h3>
      < div className = "flex flex-col gap-3 mb-6" >
        <div>
        <p className="font-body text-[0.87rem] text-white/55" >
          { salon.address }
          </p>
          </div>
          < div >
          <p className="font-body text-[0.87rem] text-white/55" >
            Phone: { salon.phone }
  </p>
    </div>
    < div >
    <p className="font-body text-[0.87rem] text-white/55" >
      WhatsApp: { salon.whatsapp }
  </p>
    </div>
    < div >
    <p className="font-body text-[0.87rem] text-white/55" >
      Email: { salon.email }
  </p>
    </div>
    </div>

    < div className = "mt-6" >
      <h4 className="font-body text-[0.68rem] uppercase tracking-wider text-white/35 mb-3" >
        Business Hours
          </h4>
          < div className = "grid grid-cols-2 gap-y-1.5 gap-x-4" >
          {
            salon.business_hours.map((hour, index) => (
              <div key= { index } className = "contents" >
              <span className="font-body text-[0.78rem] text-white/35" >
              { hour.day }
              </span>
            < span className = "font-body text-[0.78rem] text-white/60" >
            { hour.time }
            </span>
            </div>
            ))
          }
            </div>
            </div>
            </div>
            </div>

  {/* Bottom Bar */ }
  <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3" >
    <p className="font-body text-[0.78rem] text-white/25" >
            © { currentYear } { salon.name }. All rights reserved.
          </p>
    < p className = "font-body text-[0.78rem] text-white/20" >
      Made for Pakistani Women 🌸
  </p>
    </div>
    </div>
    </footer>
  );
}
