import { Doctor } from "../../types/appointment.types";

interface Props {
  doctor: Doctor;
  selected: boolean;
  onSelect: () => void;
}

export default function DoctorCard({ doctor, selected, onSelect }: Props) {
  return (
    <div
      className={`doctor-card-appointment ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <h4>{doctor.name}</h4>
      <p>{doctor.degree}</p>
      <span>{doctor.experience}</span>
    </div>
  );
}
