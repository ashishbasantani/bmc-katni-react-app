import React from "react";
import "./StepSchedule.css";

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
      slots: generateHourlySlots(9, 13), // 9 AM – 1 PM
    },
    {
      label: "Evening",
      slots: generateHourlySlots(15, 20), // 3 PM – 8 PM
    },
  ];

  /* -------- FILTER PAST TIME SLOTS -------- */
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
    <section className="datetime-section">
      <label className="form-label">
        Select Date & Time <span className="required">*</span>
      </label>

      {/* DATE PICKER */}
      <div className="date-picker-container">
        <div className="picker-label">PICK A DATE</div>
        <div className="date-buttons-grid">
          {days.map((d, i) => {
            const isSelected =
              selectedDate === d.toDateString();

            return (
              <button
                key={i}
                className={
                  isSelected
                    ? "date-btn selected"
                    : "date-btn"
                }
                onClick={() => onDateSelect(d.toDateString())}
                type="button"
              >
                <div className="date-weekday">
                  {d.toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
                <div className="date-day">{d.getDate()}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* TIME PICKER */}
      <div className="time-picker-container">
        <div className="picker-label">PICK A TIME</div>

        {TIME_SLOTS.map((group) => {
          const validSlots = group.slots.filter(isFutureTime);

          if (validSlots.length === 0) return null;

          return (
            <div key={group.label} className="time-group">
              <span className="time-group-label">
                {group.label === "Morning" ? "🌞" : "🌤️"}{" "}
                {group.label} ({validSlots.length})
              </span>

              <div className="time-buttons-grid">
                {validSlots.map((slot) => (
                  <button
                    key={slot}
                    className={
                      selectedTime === slot
                        ? "time-btn selected"
                        : "time-btn"
                    }
                    onClick={() => onTimeSelect(slot)}
                    type="button"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
