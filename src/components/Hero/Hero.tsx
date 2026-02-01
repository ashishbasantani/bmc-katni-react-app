import React from "react";
import heroImage from "../../assets/Bmc_home_page.png";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full" >
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 lg:pt-10 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

          <div className="flex-1 flex flex-col gap-5 pt-0 lg:pt-8">
            <div
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 text-sm font-medium rounded-full"
              style={{
                backgroundColor: "var(--badge-bg)",
                color: "var(--badge-text)",
              }}
            >
              ⭐ Trusted Healthcare Provider Since 1985
            </div>

            <h1
              className="font-bold tracking-tight leading-[1.1]
                         text-4xl sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-family-sans)",
              }}
            >
              <span className="block">Your Health,</span>
              <span className="block">Our First Priority</span>
            </h1>

            <p
              className="text-base sm:text-lg max-w-xl"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-family-sans)",
              }}
            >
              Experience world-class healthcare with our team of expert doctors
              and state-of-the-art facilities. We're here for you 24/7 with
              compassionate care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate("/enquiry")}
                className="px-6 py-3 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: "var(--primary-purple)",
                  color: "var(--text-inverse)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                Enquiry →
              </button>

              <button
                onClick={() => (window.location.href = "tel:+917622220620")}
                className="px-8 py-3 font-medium text-[15px] border-2 rounded-lg transition hover:bg-[var(--primary-purple-soft)]"
                style={{
                  borderColor: "var(--primary-purple)",
                  color: "var(--primary-purple)",
                  backgroundColor: "transparent",
                }}
              >
                Call Now
              </button>
            </div>

            <div className="flex gap-8 pt-4 flex-wrap">
              {[
                { value: "31+", label: "Years of Service" },
                { value: "50K+", label: "Happy Patients" },
                { value: "24/7", label: "Emergency Care" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--primary-purple)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

     <div className="flex-1 relative w-full lg:max-w-xl xl:max-w-2xl">
  <div className="flex-1 flex justify-end">
  <div
    className="relative w-full max-w-[600px]"
    style={{
      backgroundColor: "#f5fdf7",
      borderRadius: "28px",
      padding: "24px",
    }}
  >
    <img
      src={heroImage}
      alt="Hospital"
      className="w-full h-full object-cover rounded-[20px]"
      style={{
        boxShadow: "0 30px 70px rgba(0,0,0,0.18)",
      }}
    />

    {/* 24/7 card */}
    <div
      className="absolute top-6 left-6 rounded-xl p-4 flex gap-3 w-60"
      style={{
        backgroundColor: "var(--bg-white)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
      }}
    >
      <div className="text-xl">🕒</div>
      <div>
        <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
          24/7 Available
        </div>
        <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Emergency services always ready
        </div>
      </div>
    </div>

    {/* Booking card */}
    <div
      className="absolute bottom-6 right-6 rounded-xl p-4 flex gap-3 w-60"
      style={{
        backgroundColor: "var(--bg-white)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
      }}
    >
      <div className="text-xl">📅</div>
      <div>
        <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
          Easy Booking
        </div>
        <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Schedule your visit on chat
        </div>
      </div>
    </div>
  </div>
</div>

</div>



        </div>
      </div>
    </section>
  );
};

export default HeroSection;
