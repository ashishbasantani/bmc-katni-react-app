import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section className="services">
      <div className="section-header">
        <span className="section-tag">  OUR SERVICES</span>
      </div>
      <h2>What We Offer</h2>

      <div className="service-grid">
        <ServiceCard index={0} slug= "medicine" title="Medicine Department" description="General medicine and healthcare services" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-capsule" viewBox="0 0 16 16">
          <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
        </svg>} />
        <ServiceCard index={1} slug= "surgery" title="Surgery" description="Specialized care for surgical procedures" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg>} />
        <ServiceCard index={2} slug= "orthopedics"  title="Orthopedics" description="Expert care for bones, joints, and muscles" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
          <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
          <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
        </svg>} />
        <ServiceCard index={3} slug= "dentalCare" title="DentalCare" description="Trusted dental care with comfort, precision, and care" icon={<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  className="bi bi-shield-fill"
  viewBox="0 0 448 512"
>
  <path d="M145 5.7L224 32 303 5.7C314.3 1.9 326 0 337.9 0 398.7 0 448 49.3 448 110.1l0 68.5c0 29.4-9.5 58.1-27.2 81.6l-1.1 1.5c-12.9 17.2-21.3 37.4-24.3 58.7L373.7 471.9c-3.3 23-23 40.1-46.2 40.1-22.8 0-42.3-16.5-46-39L261.3 351.6c-3-18.2-18.8-31.6-37.3-31.6s-34.2 13.4-37.3 31.6L166.5 473c-3.8 22.5-23.2 39-46 39-23.2 0-42.9-17.1-46.2-40.1L52.6 320.5c-3-21.3-11.4-41.5-24.3-58.7l-1.1-1.5C9.5 236.7 0 208.1 0 178.7l0-68.5C0 49.3 49.3 0 110.1 0 122 0 133.7 1.9 145 5.7z" />
</svg>
} />

      </div>

      {/* <button className="outline-btn">View more Facilities</button> */}
    </section>
  );
};
