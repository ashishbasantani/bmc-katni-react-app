import { AppointmentFormData } from "../../types/appointment.types";

interface Props {
  data: AppointmentFormData;
  onConfirm: () => void;
}

export default function SummaryPanel({ data, onConfirm }: Props) {
  const ready =
    data.department &&
    data.doctor &&
    data.date &&
    data.time &&
    data.name &&
    data.email &&
    data.phone;

  return (
    <aside className="summary-panel">
      <h3>Appointment Summary</h3>

      <p><strong>Department:</strong> {data.department}</p>
      <p><strong>Doctor:</strong> {data.doctor?.name}</p>
      <p><strong>Date:</strong> {data.date}</p>
      <p><strong>Time:</strong> {data.time}</p>

      <button disabled={!ready} onClick={onConfirm}>
        Confirm Booking
      </button>
    </aside>
  );
}
