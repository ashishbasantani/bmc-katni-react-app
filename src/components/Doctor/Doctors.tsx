import "./Doctors.css";
import { DoctorCard } from "./DoctorCard";
import doctor1 from "../../assets/doctor1.jpg";
import doctor2 from "../../assets/doctor2.jpg";
import doctor3 from "../../assets/doctor3.jpg";
import doctor4 from "../../assets/doctor4.jpg"; 

export const Doctors = () => {
  return (
    <section className="doctors">
      <span className="section-tag">INTRODUCE YOURSELF TO</span>
      <h2>Our Team of Experts</h2>

      <div className="doctor-grid">
        <DoctorCard name="Brendon M" role="CEO & Founder" image={doctor1} />
        <DoctorCard name="Jodi J. Appleby" role="Developer" image={doctor2} />
        <DoctorCard name="Justin S. Meza" role="Agent" image={doctor3} />
        <DoctorCard name="Susan T. Smith" role="Agent" image={doctor4} />
      </div>

      <button className="outline-btn">View more Experts</button>
    </section>
  );
};