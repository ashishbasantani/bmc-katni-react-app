import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LearnMoreService, ServiceData } from "./LearnMoreService";
import { CircleCheck } from "lucide-react";

const ServiceDetail = () => {
  const { serviceType } = useParams<{ serviceType: string }>();

  const service: ServiceData | undefined = serviceType
    ? LearnMoreService[serviceType]
    : undefined;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const Navigate = useNavigate();

  if (!service) {
    return (
      <p
        className="p-10 text-center"
        style={{ color: "var(--text-muted)" }}
      >
        Service not found
      </p>
    );
  }

  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
        color: "var(--text-primary)",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative w-full min-h-[65vh] flex items-center"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--hero-overlay, rgba(255,255,255,0.7))" }}
        />

        <div className="relative container-page section-padding">
          <div className="max-w-2xl">
            <span
              className="inline-block mb-4 px-4 py-1 text-sm rounded-full font-medium"
              style={{
                backgroundColor: "var(--badge-bg)",
                color: "var(--badge-text)",
              }}
            >
              {service.badge}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {service.title}
            </h1>

            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--primary-purple)" }}
            >
              {service.tagline}
            </h3>

            <p
              className="mb-8 max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-[var(--radius-lg)] font-medium transition"
                style={{
                  background: "var(--primary-gradient)",
                  color: "var(--text-inverse)",
                }}
               onClick={() =>
                  Navigate("/book_appointment", {
                    state: { department: service.title },
                  })
                }>
                Book Appointment
              </button>

              <button
                className="px-6 py-3 rounded-[var(--radius-lg)] font-medium transition"
                style={{
                  border: "1px solid var(--primary-purple)",
                  color: "var(--primary-purple)",
                  backgroundColor: "var(--bg-white)",
                }}
                onClick={() => (window.location.href = "tel:+919300220620")}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="container-page">
          <h2 className="text-3xl font-bold mb-2">
            {service.whyChoose?.title ?? "Why Choose Us"}
          </h2>

          <p
            className="mb-12 max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {service.whyChoose?.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {service.whyChoose?.items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 border"
                style={{
                  backgroundColor: "var(--bg-white)",
                  borderColor: "var(--border-light)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      <section className="section-padding">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Conditions We Treat
            </h2>

            <p
              className="mb-8 max-w-2xl"
              style={{ color: "var(--text-muted)" }}
            >
              {service.conditions.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
              {service.conditions.list.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CircleCheck
                    size={20}
                    className="mt-1"
                    style={{ color: "var(--primary-purple)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          {service.conditions.image && (
            <div
              className="w-full h-[260px] md:h-[380px] rounded-2xl overflow-hidden"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <img
                src={service.conditions.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>

            <p
              className="mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Common questions about our {service.title.toLowerCase()} services
            </p>

            <div className="space-y-4">
              {service.faq.items.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-5 cursor-pointer"
                  style={{ borderColor: "var(--border-light)" }}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{faq.question}</h4>
                    <span
                      className="text-xl"
                      style={{ color: "var(--primary-purple)" }}
                    >
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {activeIndex === index && (
                    <p
                      className="mt-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
