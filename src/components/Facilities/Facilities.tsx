import React from "react";
import { Hospital, Wallet } from "lucide-react";
import checkup from "../../assets/checkup.jpg";
import Patientroom from "../../assets/room.png";
import medicalequipment from "../../assets/equipment.jpg";
import RotatingCircularText from "./RotatingCircularText";

const Facilities: React.FC = () => {
  return (
    <section className="w-full bg-white">
       <div className="container-page section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>
            <span className="block mb-2 text-sm tracking-[0.12em] font-semibold text-[var(--primary-purple)]">
              OUR FACILITIES
            </span>

            <h2 className="text-3xl lg:!leading-[3.5rem] sm:text-4xl lg:text-[42px] font-bold mb-6 text-[var(--text-primary)]">
              Assisting individuals in accessing quality healthcare facilities.
            </h2>
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-[560px] mb-5">
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

            {/* FEATURE CARDS */}
            <div className="space-y-6 max-w-[560px]">

              {/* CARD 1 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white
                shadow-[0_12px_40px_rgba(16,24,40,0.08)]
                hover:shadow-[0_16px_50px_rgba(16,24,40,0.12)]
                transition-shadow duration-300">
                
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-purple-soft)] text-[var(--primary-purple)] flex items-center justify-center shrink-0">
                  <Hospital size={16} />
                </div>

                <div>
                  <h3 className="font-semibold text-[15px] text-[var(--primary-purple)] mb-1">
                    24×7 Emergency care
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Comprehensive OPD and IPD services across multiple specialties.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white
                shadow-[0_12px_40px_rgba(16,24,40,0.08)]
                hover:shadow-[0_16px_50px_rgba(16,24,40,0.12)]
                transition-shadow duration-300">

                <div className="w-10 h-10 rounded-xl bg-[var(--primary-purple-soft)] text-[var(--primary-purple)] flex items-center justify-center shrink-0">
                  <Wallet size={16} />
                </div>

                <div>
                  <h3 className="font-semibold text-[15px] text-[var(--primary-purple)] mb-1">
                    Cashless treatment available
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    listed insurance policyholders and Ayushman Bharat cardholders.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">

              {/* MAIN IMAGE */}
              <div className="h-[600px] rounded-3xl overflow-hidden">
                <img
                  src={Patientroom}
                  alt="Patient Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* SIDE IMAGES */}
              <div className="flex flex-col gap-6 h-[600px]">

                {/* TOP IMAGE – slightly smaller */}
                <div className="flex-[0.45] rounded-3xl overflow-hidden">
                  <img
                    src={checkup}
                    alt="machine"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BOTTOM IMAGE – slightly larger */}
                <div className="flex-[0.55] rounded-3xl overflow-hidden">
                  <img
                    src={medicalequipment}
                    alt="Medical Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* ROTATING TEXT */}
            <div className="absolute top-[18%] left-1/2 -translate-x-[25%] -translate-y-[114%] hidden lg:flex w-[200px] h-[200px] opacity-70 pointer-events-none">
              <RotatingCircularText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
