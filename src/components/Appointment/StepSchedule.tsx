import React from "react";

interface DateTimeSelectionProps {
  selectedDate: string;
  selectedTime: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

/* -------- TIME SLOT GENERATOR -------- */
function generateHourlySlots(
  startHour: number,
  endHour: number
): string[] {
  const slots: string[] = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    const date = new Date();
    date.setHours(hour, 0, 0, 0);

    slots.push(
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  return slots;
}

export default function DateTimeSelection({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: DateTimeSelectionProps) {
  const today = new Date();

  /* -------- DATE LIST (NEXT 14 DAYS) -------- */
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return d;
  });

  /* -------- TIME SLOTS -------- */
  const TIME_SLOTS = [
    {
      label: "Morning",
      slots: generateHourlySlots(9, 13),
    },
    {
      label: "Evening",
      slots: generateHourlySlots(15, 20),
    },
  ];

  const isToday =
    selectedDate === today.toDateString();

  function isFutureTime(slot: string) {
    if (!isToday) return true;

    const [time, modifier] = slot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const slotDate = new Date();
    slotDate.setHours(hours, minutes, 0, 0);

    return slotDate.getTime() > Date.now();
  }

  return (
    <section className="bg-white rounded-[22px] p-9 mb-7 shadow-[0_14px_34px_rgba(0,0,0,0.04)]
                        max-md:p-5 max-md:rounded-[18px]">

      {/* Title */}
      <label className="block text-base font-semibold mb-4 max-md:text-[15px]">
        Select Date & Time
        <span className="text-[#8d3bbd] ml-1">*</span>
      </label>

      {/* ---------------- DATE PICKER ---------------- */}
      <div className="mb-6">
        <div className="text-xs mb-3 uppercase tracking-wide text-gray-500">
          Pick a Date
        </div>

        <div className="flex flex-wrap gap-3
                        max-md:grid max-md:grid-cols-3 max-md:gap-2">

          {days.map((d, i) => {
            const isSelected =
              selectedDate === d.toDateString();

            return (
              <button
                key={i}
                type="button"
                onClick={() => onDateSelect(d.toDateString())}
                className={`
                  w-20 h-[70px] rounded-[14px]
                  flex flex-col items-center justify-center
                  border transition-all duration-200
                  text-[15px]
                  max-md:w-full max-md:h-[65px] max-md:text-sm
                  ${
                    isSelected
                      ? "border-2 border-[#602962] bg-[#f7f2ff] text-[#602962]"
                      : "border-gray-300 bg-white hover:border-[#602962]/50"
                  }
                `}
              >
                <div className="font-medium">
                  {d.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
                <div className="text-lg max-md:text-base">
                  {d.getDate()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------------- TIME PICKER ---------------- */}
      <div>
        <div className="text-xs mb-3 uppercase tracking-wide text-gray-500">
          Pick a Time
        </div>

        {TIME_SLOTS.map((group) => {
          const validSlots = group.slots.filter(isFutureTime);

          if (validSlots.length === 0) return null;

          return (
            <div key={group.label} className="mb-5">

              <div className="text-[15px] mb-2 max-md:text-sm">
                {group.label === "Morning" ? "🌞" : "🌤️"}{" "}
                {group.label} ({validSlots.length})
              </div>

              <div className="flex flex-wrap gap-3
                              max-md:grid max-md:grid-cols-3 max-md:gap-2">

                {validSlots.map((slot) => {
                  const selected = selectedTime === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => onTimeSelect(slot)}
                      className={`
                        min-w-[110px] h-11 rounded-[14px]
                        border transition-all duration-200
                        text-[15px]
                        max-md:w-full max-md:min-w-0 max-md:h-[42px] max-md:text-[13px]
                        ${
                          selected
                            ? "border-2 border-[#602962] bg-[#f7f2ff] text-[#602962]"
                            : "border-gray-300 bg-white hover:border-[#602962]/50"
                        }
                      `}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
