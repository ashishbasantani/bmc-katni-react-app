  import React from "react";
  import { motion } from "framer-motion";
  import sampleVideo from "../../assets/videos/about.mp4";

  const About: React.FC = () => {
    return (
      <section
        id="about"
        className="bg-[var(--bg-section)]"
      >
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
            {/* Media */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)]"
            >
            <video
              src={sampleVideo}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline
              preload="auto"
              className="w-full h-[260px] sm:h-[360px] lg:h-[400px] object-cover"
            />

            </motion.div>

            {/* Content */}
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
