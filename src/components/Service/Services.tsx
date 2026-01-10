// import { ServiceCard } from "./ServiceCard";

import { ServiceCard } from "./servicecard";

export const Services = () => {
  return (
    <section className="services">
      <span className="section-tag">DAVA & DUA MAKES</span>
      <h2>Explore Our Services</h2>

      <div className="service-grid">
        <ServiceCard index={0} title="Cardiology" description="Heart and cardiovascular care" />
        <ServiceCard index={1} title="Orthopedics" description="Bone and joint treatment" />
        <ServiceCard index={2} title="Orthopedics" description="Bone and joint treatment" />
        <ServiceCard index={3} title="Cardiology" description="Heart and cardiovascular care" />
      </div>

      <button className="outline-btn">View more Facilities</button>
    </section>
  );
};
