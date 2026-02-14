import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Bmc_home_page.png";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[var(--bg-section)]">
      <div className="container-page py-[var(--spacing-2xl)]">

        {/* Header */}
        <div className="mb-[var(--spacing-xl)]">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-purple)] mb-2">
            OVERVIEW
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Know about Us
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-xl)] items-start">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[560px]"
          ><div className="relative overflow-visible">
            <div className="w-full aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)]">

              <img
                src={heroImage}
                alt="Hospital"
                className="w-full h-full object-cover"
              />

              {/* 24/7 */}
             <div className="absolute top-0 right-0 -translate-y-1/2 bg-white rounded-[var(--radius-lg)] px-4 py-2 flex items-center gap-3 shadow-[var(--shadow-md)]">
                <div>🕒</div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">
                    24/7 Available
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Emergency services always ready
                  </div>
                </div>
              </div>

              {/* BOOKING */}
              <div className="absolute bottom-0 left-0 translate-y-1/2 bg-[#1f1f1f] text-white rounded-[var(--radius-lg)] px-5 py-2 flex items-center gap-3 shadow-lg">
                <div>📅</div>
                <div>
                  <div className="font-semibold">
                    Easy Booking
                  </div>
                  <div className="text-xs opacity-80">
                    Schedule your visit on chat
                  </div>
                </div>
              </div>

            </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="pt-1"
          >
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-[var(--spacing-lg)]">
              With over four decades of healthcare service, BMC Hospital stands
              as a trusted multispecialty hospital. As a modern healthcare
              institution, we are committed to ethical, patient-focused, and
              high-quality medical care.
            </p>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-[var(--spacing-xl)]">
              Supported by skilled medical professionals and advanced
              technology, we deliver treatment that is precise, compassionate,
              and centered around individual patient needs.
            </p>

            <div className="space-y-[var(--spacing-lg)]">

              <div className="flex gap-[var(--spacing-md)]">
                <div className="bg-[var(--primary-purple-soft)] p-3 rounded-[var(--radius-md)]">
                  🩺
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Our Vision
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    To be a trusted leader in quality, accessible, and
                    compassionate healthcare.
                  </p>
                </div>
              </div>

              <div className="flex gap-[var(--spacing-md)]">
                <div className="bg-[var(--primary-purple-soft)] p-3 rounded-[var(--radius-md)]">
                  🏥
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Our Mission
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
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
