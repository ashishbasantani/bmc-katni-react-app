import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import heroVideo from "../../assets/videos/about.mp4";
import EnquiryPopup from "../../components/popup/contactpage";
import { useState } from "react";


const STATS = [
  { value: "41+", label: "Years of Service" },
  { value: "50K+", label: "Happy Patients" },
  { value: "24/7", label: "Emergency Care" },
];

const HeroSection: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full relative">
      <div className="container-page section-padding">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">

          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-5 lg:pt-6 relative z-30">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 text-sm font-medium rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)]">
              <Star size={14} />
              Trusted Healthcare Provider Since 1985
            </div>

            <h1 className="font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)]">
              <span className="block">Your Health,</span>
              <span className="block">Our First Priority</span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl text-[var(--text-secondary)]">
              Experience world-class healthcare with our team of expert doctors
              and state-of-the-art facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setOpenPopup(true)}  
                className="h-12 w-full sm:w-auto px-6 rounded-[var(--radius-lg)] font-semibold
                          bg-[var(--primary-purple)] text-white"
              >
                Contact Us →
              </button>

              <button
                onClick={() => (window.location.href = 'tel:+917622220620')}
                className="h-12 w-full sm:w-auto px-6 rounded-[var(--radius-lg)] font-semibold
                          border-2 border-[var(--primary-purple)]
                          text-[var(--primary-purple)]
                          flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </button>
            </div>

            <div className="flex gap-8 pt-4 flex-wrap">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[var(--primary-purple)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

         {/* Right Media */}
        <div className="flex-1 w-full lg:max-w-xl xl:max-w-2xl flex">
          <div className="relative w-full aspect-video rounded-[28px] overflow-hidden mt-3">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover relative left-[-2px]"
            />
          </div>
        </div>
        </div>
      </div>
      <EnquiryPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

    </section>
  );
};

export default HeroSection;
