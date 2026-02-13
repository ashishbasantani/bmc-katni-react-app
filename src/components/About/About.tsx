import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Bmc_home_page.png"; // adjust path if needed

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[var(--bg-section)]">
      <div className="container-page section-padding">
        {/* Header */}
        <div className="text-left mb-[var(--spacing-2xl)]">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-purple)] mb-2">
            OVERVIEW
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Know about Us
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-2xl)] items-center">

          {/* IMAGE SECTION (Replaces Video) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]"
          >
            <div className="relative w-full max-w-[560px] aspect-[56/50] bg-[#f5f6f7] rounded-bl-[48px] p-6">

              {/* Image Mask */}
              <div className="w-full h-full bg-white rounded-bl-[36px] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Hospital"
                  className="w-full h-full object-cover rounded-bl-[36px]"
                />
              </div>

              {/* 24/7 CARD (RIGHT - TOP LAYER) */}
              <div className="absolute top-[60px] right-[-56px] bg-white rounded-[16px] px-[18px] py-[14px] flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-[999]">

                <div className="text-lg">🕒</div>
                <div>
                  <div className="font-bold text-[var(--text-primary)]">
                    24/7 Available
                  </div>
                  <div className="text-[13px] text-gray-500">
                    Emergency services always ready
                  </div>
                </div>
              </div>

              {/* EASY BOOKING CARD (LEFT BOTTOM) */}
              <div className="absolute bottom-[-28px] left-[-28px] bg-[#1f1f1f] text-white rounded-[18px] px-[20px] py-[16px] flex items-center gap-4 min-w-[260px] shadow-[0_0px_60px_rgba(0,0,0,0.35)] z-20">

                <div className="text-lg">📅</div>
                <div>
                  <div className="font-bold">
                    Easy Booking
                  </div>
                  <div className="text-[13px] opacity-85">
                    Schedule your visit on chat
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CONTENT SECTION (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-[var(--spacing-lg)]">
              With over four decades of healthcare service, BMC Hospital stands as
              a trusted multispecialty hospital. As a modern healthcare
              institution, we are committed to ethical, patient-focused, and
              high-quality medical care.
            </p>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-[var(--spacing-xl)]">
              Supported by skilled medical professionals and advanced technology,
              we deliver treatment that is precise, compassionate, and centered
              around individual patient needs.
            </p>

            {/* Feature List */}
            <div className="space-y-[var(--spacing-lg)]">

              {/* Vision */}
              <div className="flex items-start gap-[var(--spacing-md)]">
                <div className="bg-[var(--primary-purple-soft)] p-3 rounded-[var(--radius-md)] shrink-0">
                  <span className="text-[var(--primary-purple)] text-lg">
                    🩺
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Our Vision
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    To be a trusted leader in quality, accessible, and
                    compassionate healthcare.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex items-start gap-[var(--spacing-md)]">
                <div className="bg-[var(--primary-purple-soft)] p-3 rounded-[var(--radius-md)] shrink-0">
                  <span className="text-[var(--primary-purple)] text-lg">
                    🏥
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Our Mission
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    BMC delivers expert, patient-focused care with 24/7
                    availability, advanced technology, and a focus on wellness.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
