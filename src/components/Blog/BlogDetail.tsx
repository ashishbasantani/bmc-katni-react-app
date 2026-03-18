import { useParams } from "react-router-dom";
import { Calendar, Clock, Tag, Share2 } from "lucide-react";
import blogsData from "./BlogsData.json"; // adjust path if needed

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface GalleryImage {
  src: string;
  alt: string;
}

interface BlogData {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  body: string[];
  gallery: GalleryImage[];
  keyBenefitsTitle: string;
  keyBenefits: string[];
  cta: string;
  tags: string[];
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = (blogsData.blogs as BlogData[]).find((b) => b.id === slug);

  if (!post) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg-page)",
          fontFamily: "var(--font-family-sans)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.125rem", fontWeight: "var(--font-weight-semibold)", color: "var(--text-primary)" }}>
            Blog not found
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "var(--spacing-sm)" }}>
            The article you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-white)",
        fontFamily: "var(--font-family-sans)",
        color: "var(--text-primary)",
      }}
    >
      {/* ── Hero Image (full width, tall) ── */}
      <div style={{ position: "relative", width: "100%", height: "480px", overflow: "hidden" }}>
        <img
          src={post.heroImage}
          alt={post.heroAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        {/* Gradient overlay — darker at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Category + Title + Meta — all on the image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "var(--spacing-3xl) var(--spacing-3xl) var(--spacing-2xl)",
          }}
        >
          {/* Category badge */}
          <span
            style={{
              display: "inline-block",
              backgroundColor: "var(--primary-purple)",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: "var(--font-weight-semibold)",
              padding: "5px 14px",
              borderRadius: "var(--radius-full)",
              marginBottom: "var(--spacing-md)",
              letterSpacing: "0.02em",
            }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
              fontWeight: "var(--font-weight-bold)",
              lineHeight: 1.25,
              margin: "0 0 var(--spacing-lg) 0",
              maxWidth: "700px",
            }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-xl)",
              color: "rgba(255,255,255,0.88)",
              fontSize: "0.875rem",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={15} style={{ opacity: 0.85 }} />
              {post.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={15} style={{ opacity: 0.85 }} />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main content wrapper (centered, max-width) ── */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "var(--spacing-3xl) var(--spacing-2xl)",
        }}
      >
        {/* ── Body paragraphs ── */}
        <div style={{ marginBottom: "var(--spacing-2xl)" }}>
          {post.body.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: "var(--spacing-lg)",
                margin: i < post.body.length - 1
                  ? "0 0 var(--spacing-lg) 0"
                  : "0",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── Gallery ── */}
        <div style={{ margin: "var(--spacing-2xl) 0" }}>
          {/* Top grid: large left + two stacked right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "160px 160px",
              gap: "var(--spacing-sm)",
            }}
          >
            {/* Large left spanning 2 rows */}
            <div
              style={{
                gridRow: "1 / 3",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              <img
                src={post.gallery[0].src}
                alt={post.gallery[0].alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Top-right */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <img
                src={post.gallery[1].src}
                alt={post.gallery[1].alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Bottom-right */}
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <img
                src={post.gallery[2].src}
                alt={post.gallery[2].alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>


        </div>

        {/* ── Key Benefits ── */}
        <div style={{ marginBottom: "var(--spacing-2xl)" }}>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
              marginBottom: "var(--spacing-lg)",
            }}
          >
            {post.keyBenefitsTitle}
          </p>

          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "var(--spacing-lg)",
              margin: "0 0 var(--spacing-xl) 0",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-md)",
            }}
          >
            {post.keyBenefits.map((benefit, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  paddingLeft: "var(--spacing-xs)",
                }}
              >
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTA paragraph */}
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--text-primary)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            {post.cta}
          </p>
        </div>

        {/* ── Footer: Tags + Share ── */}
        <div
          style={{
            paddingTop: "var(--spacing-xl)",
            borderTop: "1px solid var(--border-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--spacing-md)",
          }}
        >
          {/* Tags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-sm)",
              flexWrap: "wrap",
            }}
          >
            <Tag size={15} style={{ color: "var(--text-muted)" }} />
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.8125rem",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-secondary)",
                  borderRadius: "var(--radius-full)",
                  padding: "4px 14px",
                  backgroundColor: "var(--bg-white)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-xs)",
              fontSize: "0.875rem",
              color: "var(--primary-purple)",
              border: "1.5px solid var(--primary-purple)",
              borderRadius: "var(--radius-full)",
              padding: "8px 20px",
              backgroundColor: "var(--bg-white)",
              cursor: "pointer",
              fontWeight: "var(--font-weight-medium)",
              transition: "background-color var(--transition-fast), color var(--transition-fast)",
              fontFamily: "var(--font-family-sans)",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.backgroundColor = "var(--primary-purple)";
              btn.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.backgroundColor = "var(--bg-white)";
              btn.style.color = "var(--primary-purple)";
            }}
          >
            <Share2 size={14} />
            Share Article
          </button>
        </div>
      </div>
    </div>
  );
}