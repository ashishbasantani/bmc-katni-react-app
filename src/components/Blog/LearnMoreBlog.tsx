import { useState } from "react";

const BlogReadMore = () => {
  const [shared, setShared] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        maxWidth: "440px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      {/* Hero Image with overlay */}
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80"
          alt="Health checkup hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(30,60,80,0.45) 0%, rgba(20,40,60,0.7) 100%)",
          }}
        />
        {/* Tag */}
        <div style={{ position: "absolute", top: "18px", left: "18px" }}>
          <span
            style={{
              backgroundColor: "#22c55e",
              color: "#fff",
              fontSize: "10px",
              fontFamily: "'Arial', sans-serif",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}
          >
            Health Tips
          </span>
        </div>
        {/* Title */}
        <div style={{ position: "absolute", bottom: "18px", left: "18px", right: "18px" }}>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: 1.25,
              margin: 0,
              fontFamily: "'Georgia', serif",
            }}
          >
            Understanding the Importance of Regular Checkups
          </h1>
          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "8px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#d1fae5",
                fontSize: "11px",
                fontFamily: "'Arial', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Feb 18, 2025
            </span>
            <span
              style={{
                color: "#d1fae5",
                fontSize: "11px",
                fontFamily: "'Arial', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              5 min read
            </span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div style={{ padding: "22px 18px 0 18px" }}>
        {/* Paragraphs */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#374151",
            margin: "0 0 16px 0",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Regular health checkups are essential for maintaining good health and preventing serious illnesses.
          In today's fast-paced world, it's easy to overlook our health until something goes wrong. However,
          preventive healthcare is the key to a long and healthy life.
        </p>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#374151",
            margin: "0 0 16px 0",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Early detection of health issues can significantly improve the chances of successful treatment.
          Conditions like hypertension, diabetes, and high cholesterol often have no symptoms in their early
          stages. A simple blood test or physical examination can reveal these issues before they become
          life-threatening.
        </p>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#374151",
            margin: "0 0 20px 0",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          During a routine checkup, your doctor will assess your overall health, review your medical history,
          and recommend necessary screenings based on your age, gender, and risk factors. This is also a
          great opportunity to discuss any concerns you may have about your health, lifestyle, or diet.
        </p>

        {/* Image Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "4px",
            marginBottom: "20px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Large left image spanning 2 rows */}
          <div style={{ gridRow: "1 / 3", gridColumn: "1 / 2" }}>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
              alt="Doctor with patient"
              style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
            />
          </div>
          {/* Top right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80"
              alt="Hospital room"
              style={{ width: "100%", height: "98px", objectFit: "cover", display: "block" }}
            />
          </div>
          {/* Bottom right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80"
              alt="Hospital building"
              style={{ width: "100%", height: "98px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* Key Benefits */}
        <p
          style={{
            fontSize: "13px",
            color: "#374151",
            fontFamily: "'Arial', sans-serif",
            margin: "0 0 10px 0",
          }}
        >
          Key benefits of regular checkups include:
        </p>
        <ul
          style={{
            margin: "0 0 16px 0",
            paddingLeft: "22px",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          {[
            "Early detection of life-threatening diseases",
            "Better management of chronic conditions",
            "Personalized health advice and lifestyle modifications",
            "Vaccinations and immunizations to prevent infections",
            "Peace of mind knowing you are taking proactive steps for your health",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "12.5px",
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: "2px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Paragraph */}
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#374151",
            margin: "0 0 28px 0",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Make your health a priority. Schedule your annual checkup today and take the first step towards a
          healthier, happier you.
        </p>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e5e7eb", marginBottom: "14px" }} />

        {/* Tags and Share */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              style={{ flexShrink: 0 }}
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "'Arial', sans-serif" }}>
              Tags:
            </span>
            {["Healthcare", "Health Tips"].map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#6b7280",
                  fontSize: "11px",
                  padding: "2px 10px",
                  borderRadius: "20px",
                  fontFamily: "'Arial', sans-serif",
                  cursor: "pointer",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <button
            onClick={() => setShared(!shared)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid #d1d5db",
              borderRadius: "20px",
              padding: "5px 14px",
              fontSize: "11px",
              fontFamily: "'Arial', sans-serif",
              color: "#374151",
              backgroundColor: "#fff",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            {shared ? "Shared!" : "Share Article"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogReadMore;