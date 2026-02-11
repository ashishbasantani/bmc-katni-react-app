import { FlaskConical, Plus, User, Smile } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section className="bg-white">
      <div className="container-page section-padding">
        <div className="text-left mb-[var(--spacing-2xl)]">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-purple)] mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            What We Offer
          </h2>
        </div>

        {/* ✅ Mobile: 2 | Tablet: 2 | Desktop: 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            index={0}
            slug="medicine"
            title="Medicine Department"
            description="General medicine and healthcare services"
            icon={FlaskConical}
          />

          <ServiceCard
            index={1}
            slug="surgery"
            title="Surgery"
            description="Specialized care for surgical procedures"
            icon={Plus}
          />

          <ServiceCard
            index={2}
            slug="orthopedics"
            title="Orthopedics"
            description="Expert care for bones, joints, and muscles"
            icon={User}
          />

          <ServiceCard
            index={3}
            slug="dentalCare"
            title="DentalCare"
            description="Trusted dental care with comfort, precision, and care"
            icon={Smile}
          />
        </div>
      </div>
    </section>
  );
};
