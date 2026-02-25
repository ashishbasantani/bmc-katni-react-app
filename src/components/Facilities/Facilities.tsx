import React from "react";
import { Hospital, Wallet } from "lucide-react";
import checkup from "../../assets/checkup.jpg";
import Patientroom from "../../assets/room.png";
// import DentalHeroBanner from "../../assets/dental-hero-banner.jpg";
import Machine from "../../assets/machine.jpg";
import Medicine from "../../assets/medicine-side-banner.jpeg";

const Facilities: React.FC = () => {
  const images = [
    //{ src: DentalHeroBanner, title: "Dental Care" },
    { src: checkup, title: "Machine" },
    { src: Medicine, title: "Pharmacy & Medicines" },
    { src: Patientroom, title: "Private Suites" },
    { src: Machine, title: "Advanced Equipment" },
    
  ];

  return (
    <section className="w-full bg-white">
      <div className="container-page section-padding">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

          {/* LEFT — MAIN TEXT */}
          <div>
            <span className="block mb-2 text-sm tracking-[0.12em] font-semibold text-[var(--primary-purple)]">
              OUR FACILITIES
            </span>

            <h2 className="text-3xl lg:!leading-[3.5rem] sm:text-4xl lg:text-[42px] font-bold mb-6 text-[var(--text-primary)]">
              Assisting individuals in accessing quality healthcare facilities.
            </h2>

            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-[560px]">
              At BMC, we are committed to delivering world-class healthcare
              supported by modern infrastructure, advanced medical technology, and
              patient-focused services. We ensure comfort, safety, and high
              standards of medical care. Our 24/7 Emergency and Trauma Care unit is
              fully equipped to manage medical emergencies, accidents, and
              critical conditions. Comprehensive inpatient and outpatient services
              across a wide range of medical specialties are also provided.
              Whether it is a routine consultation, diagnostic evaluation, or
              long-term treatment, our services are structured to ensure seamless
              coordination, efficiency, and compassionate care.
            </p>
          </div>

          {/* RIGHT — CARDS */}
          <div className="flex flex-col gap-6 md:mt-10">
            {/* CARD 1 */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white
              shadow-[0_12px_40px_rgba(16,24,40,0.08)]
              hover:shadow-[0_16px_50px_rgba(16,24,40,0.12)]
              transition-shadow duration-300">

              <div className="w-12 h-12 rounded-xl bg-[var(--primary-purple-soft)]
                text-[var(--primary-purple)] flex items-center justify-center shrink-0">
                <Hospital size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-[16px] text-[var(--primary-purple)] mb-1">
                  24×7 Emergency care
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Comprehensive OPD and IPD services across multiple specialties.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white
              shadow-[0_12px_40px_rgba(16,24,40,0.08)]
              hover:shadow-[0_16px_50px_rgba(16,24,40,0.12)]
              transition-shadow duration-300">

              <div className="w-12 h-12 rounded-xl bg-[var(--primary-purple-soft)]
                text-[var(--primary-purple)] flex items-center justify-center shrink-0">
                <Wallet size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-[16px] text-[var(--primary-purple)] mb-1">
                  Cashless treatment available
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  listed insurance policyholders and Ayushman Bharat cardholders.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="mt-10">

          <div className="flex justify-between items-center mb-8">
            <span className="text-xs tracking-[0.18em] text-gray-400 font-semibold">
              INSIDE OUR HOSPITAL
            </span>
          </div>

          <div className="relative">

            {/* Slider */}
            <div
              id="imageSlider"
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="snap-start flex-shrink-0
                             w-[320px] h-[260px]
                             rounded-3xl overflow-hidden
                             shadow-[0_12px_30px_rgba(16,24,40,0.1)]"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {images.map((_, index) => (
                <button
                title="imageslider"
                  key={index}
                  onClick={() => {
                    const slider = document.getElementById("imageSlider");
                    if (slider) {
                      const child = slider.children[index] as HTMLElement;
                      slider.scrollTo({
                        left: child.offsetLeft,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-gray-300
                             hover:bg-[var(--primary-purple)]
                             transition-all duration-300"
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
