import "./DoctorCard.css";

interface Props {
  name: string;
  role: string;
  image: string;
}

export const DoctorCard = ({ name, role, image }: Props) => {
  return (
    <div className="doctor-card">
      <div className="photo">
        <img src={image} alt={name} />
      </div>

      <h4>{name}</h4>
      <span className="role">{role}</span>
    </div>
  );
};