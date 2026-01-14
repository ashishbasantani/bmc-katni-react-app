import "./Doctors.css";
import { DoctorCard } from "./DoctorCard";
import doctor1 from "../../assets/Dr.Dharmendra Bagri _ medicine.png";
import doctor2 from "../../assets/dr.mayank shrotriye _ orthopaedics.png";
import doctor3 from "../../assets/Dr.Meenakshi  Pandey _ obstetrics and gynaecology.png";
import doctor4 from "../../assets/Dr.Pooja Hinduja _ paediatrician, child specialist.png";
import doctor5 from "../../assets/DR.R.HARCHANDANI _ surgical specialist.png";
export const Doctors = () => {
  return (
    <section className="doctors">
      <div className="section-header">
      <span className="section-tag">MEET OUR DOCTORS</span>
      </div>
      <h2>Expert Care Team</h2>

      <div className="doctor-grid">
        <DoctorCard name="Dr. Dharmendra Bagri" role="Medicine" image={doctor1} />
        <DoctorCard name="Dr. R.Harchandani" role="Surgical Specialist" image={doctor5} />
        <DoctorCard name="Dr. Mayank Shrotriye" role="Orthopaedics" image={doctor2} />
        <DoctorCard name="Dr. Meenakshi Pandey" role="Obstetrics and Gynaecology" image={doctor3} />
        <DoctorCard name="Dr. Pooja Hinduja" role="Paediatrician, Child Specialist" image={doctor4} />
      </div>

      <button className="outline-btn">View more Experts</button>
    </section>
  );
};