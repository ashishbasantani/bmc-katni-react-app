import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DoctorCard } from "./DoctorCard";

import doctor1 from "../../assets/Dr.Dharmendra Bagri _ medicine.png";
import doctor2 from "../../assets/dr.mayank shrotriye _ orthopaedics.png";
import doctor3 from "../../assets/Dr.Meenakshi  Pandey _ obstetrics and gynaecology.png";
import doctor4 from "../../assets/DR.R.HARCHANDANI _ surgical specialist.png";
import doctor5 from "../../assets/Dr. Sangeet Mohan Dwivedi.png";
import doctor6 from "../../assets/Dr. Kiran Tiwari.png";
import doctor7 from "../../assets/Dr. Abhishek Pandey.png";

const doctors = [
  { name: "Dr. Dharmendra Bagri", role: "Medicine", image: doctor1 },
  { name: "Dr. Mayank Shrotriye", role: "Orthopedics", image: doctor2 },
  { name: "Dr. Meenakshi Pandey", role: "Obstetrics and Gynaecology", image: doctor3 },
  { name: "Dr. R. Harchandani", role: "Surgical Specialist", image: doctor4 },
  { name: "Dr. Abhishek Pandey", role: "Neaturopathy", image: doctor5 },
  { name: "Dr. Kiran Tiwari", role: "Dentist", image: doctor6 },
  { name: "Dr. Sangeet Mohan Dwivedi", role: "Medicine", image: doctor7 },
];

export const Doctors = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w >= 1280) return 5;
    if (w >= 640) return 3;
    return 2;
  };

  const getStep = () => {
    if (!trackRef.current) return 0;
    const card = trackRef.current.children[0] as HTMLElement;
    return card.offsetWidth + 20;
  };

  const maxIndex = Math.max(doctors.length - getVisibleCount(), 0);

  const moveTo = (newIndex: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(-${newIndex * getStep()}px)`;
    setIndex(newIndex);
  };

  const move = (dir: "next" | "prev") => {
    const nextIndex =
      dir === "next"
        ? Math.min(index + 1, maxIndex)
        : Math.max(index - 1, 0);

    moveTo(nextIndex);
  };

  /* ---------------- SWIPE HANDLERS ---------------- */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = startX.current - e.touches[0].clientX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? move("next") : move("prev");
      isDragging.current = false;
      startX.current = null;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    startX.current = null;
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
          {/* DESKTOP ARROWS */}
          <button
            onClick={() => move("prev")}
            disabled={index === 0}
            className="hidden xl:flex absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white border shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => move("next")}
            disabled={index === maxIndex}
            className="hidden xl:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-white border shadow-sm disabled:opacity-30 hover:bg-[var(--primary-purple)] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="flex gap-5 transition-transform duration-500 ease-in-out touch-pan-y"
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

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => moveTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300
                  ${
                    i === index
                      ? "bg-[var(--primary-purple)] scale-110"
                      : "bg-gray-300 hover:bg-[var(--primary-purple)]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
