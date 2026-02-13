import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DoctorCard } from "./DoctorCard";

import doctor1 from "../../assets/Dr.Dharmendra Bagri _ medicine.png";
import doctor2 from "../../assets/dr.mayank shrotriye _ orthopaedics.png";
import doctor3 from "../../assets/Dr.Meenakshi  Pandey _ obstetrics and gynaecology.png";
import doctor4 from "../../assets/Dr.Pooja Hinduja _ paediatrician, child specialist.png";
import doctor5 from "../../assets/DR.R.HARCHANDANI _ surgical specialist.png";

const doctors = [
  { name: "Dr. Dharmendra Bagri", role: "Medicine", image: doctor1 },
  { name: "Dr. Mayank Shrotriye", role: "Orthopedics", image: doctor2 },
  { name: "Dr. Meenakshi Pandey", role: "Obstetrics and Gynaecology", image: doctor3 },
  { name: "Dr. Pooja Hinduja", role: "Paediatrician, Child Specialist", image: doctor4 },
  { name: "Dr. R. Harchandani", role: "Surgical Specialist", image: doctor5 },
  { name: "Dr. Dharmendra Bagri", role: "Medicine", image: doctor1 },
  { name: "Dr. Mayank Shrotriye", role: "Orthopedics", image: doctor2 },
];

export const Doctors = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w >= 1280) return 5;
    if (w >= 640) return 3;
    return 2;
  };

  const move = (dir: "next" | "prev") => {
    if (!trackRef.current) return;

    const card = trackRef.current.children[0] as HTMLElement;
    const gap = 20;
    const step = card.offsetWidth + gap;

    const visible = getVisibleCount();
    const maxIndex = Math.max(doctors.length - visible, 0);

    const newIndex =
      dir === "next"
        ? Math.min(index + 1, maxIndex)
        : Math.max(index - 1, 0);

    trackRef.current.style.transform = `translateX(-${newIndex * step}px)`;
    setIndex(newIndex);
  };

  return (
    <section id="doctors" className="bg-[var(--bg-page)]">
      <div className="container-page section-padding">
        <div className="mb-[var(--spacing-xl)]">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-purple)] mb-1">
            MEET OUR DOCTORS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Expert Care Team
          </h2>
        </div>

        <div className="relative max-w-[1360px] mx-auto">
          {/* DESKTOP LEFT ARROW */}
          <button
            onClick={() => move("prev")}
            disabled={index === 0}
            className="hidden xl:flex absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white border border-[var(--border-light)] shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* DESKTOP RIGHT ARROW */}
          <button
            onClick={() => move("next")}
            disabled={index >= doctors.length - 5}
            className="hidden xl:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white border border-[var(--border-light)] shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-500 ease-in-out"
            >
              {doctors.map((doc, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-1/2 sm:w-1/3 xl:w-[calc((1360px-80px)/5)]"
                >
                  <DoctorCard {...doc} />
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE + TABLET ARROWS */}
          <div className="flex xl:hidden justify-center gap-4 mt-6">
            <button
              onClick={() => move("prev")}
              disabled={index === 0}
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-[var(--border-light)] shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => move("next")}
              disabled={index >= doctors.length - getVisibleCount()}
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-[var(--border-light)] shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
