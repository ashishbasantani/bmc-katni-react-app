import React, { useState } from "react";
import { X, User, Mail, Phone, HelpCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    agree: false,
  });

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enquiry Submitted Successfully");
        onClose();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="relative w-full max-w-xl bg-[var(--bg-white)] p-8"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* Close Button */}
        <button
          title="Close"
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[var(--primary-purple)] mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
              <User size={16} /> Full Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full h-12 px-4 bg-white transition"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
              }}
              onFocus={(e) =>
                (e.target.style.border = "1px solid var(--primary-purple)")
              }
              onBlur={(e) =>
                (e.target.style.border = "1px solid var(--border-light)")
              }
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
              <Mail size={16} /> Email Address *
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-12 px-4 bg-white transition"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
              }}
              onFocus={(e) =>
                (e.target.style.border = "1px solid var(--primary-purple)")
              }
              onBlur={(e) =>
                (e.target.style.border = "1px solid var(--border-light)")
              }
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
              <Phone size={16} /> Phone Number *
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full h-12 px-4 bg-white transition"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
              }}
              onFocus={(e) =>
                (e.target.style.border = "1px solid var(--primary-purple)")
              }
              onBlur={(e) =>
                (e.target.style.border = "1px solid var(--border-light)")
              }
              required
            />
          </div>

          {/* Enquiry Textarea */}
          <div>
            <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
              <HelpCircle size={16} /> Your Enquiry *
            </label>
            <textarea
              name="enquiry"
              value={form.enquiry}
              onChange={handleChange}
              placeholder="Please describe your enquiry..."
              rows={4}
              className="w-full px-4 py-3 bg-white transition resize-none"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
              }}
              onFocus={(e) =>
                (e.target.style.border = "1px solid var(--primary-purple)")
              }
              onBlur={(e) =>
                (e.target.style.border = "1px solid var(--border-light)")
              }
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-1"
              style={{ accentColor: "var(--primary-purple)" }}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              I agree to the{" "}
              <span className="text-[var(--primary-purple)] underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-[var(--primary-purple)] underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">
            <button
              type="submit"
              className="flex-1 h-12 text-white font-semibold transition"
              style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--primary-gradient)",
              }}
            >
              Request a Callback
            </button>

            <button
              type="button"
              onClick={onClose}
              className="h-12 px-6 font-medium transition"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                color: "var(--text-primary)",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        {/* Hospital Contact Info */}
<div
  className="mt-6 pt-5 text-center"
  style={{
    borderTop: "1px solid var(--border-light)",
  }}
>
  <div className="flex items-center justify-center gap-3 mb-3 text-[var(--text-primary)]">
    <div
      className="flex items-center justify-center"
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        background: "var(--primary-gradient)",
        color: "#fff",
      }}
    >
      <Phone size={16} />
    </div>
      <span className="font-semibold">Call:</span>
    <a
      href="tel:+917622220620"
      className="font-semibold transition"
      style={{ color: "var(--text-primary)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--primary-purple)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "var(--text-primary)")
      }
    >
      +91 7622220620
    </a>
  </div>

  <div className="flex items-center justify-center gap-3 text-[var(--text-primary)]">
    <div
      className="flex items-center justify-center"
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        background: "var(--primary-gradient)",
        color: "#fff",
      }}
    >
      <Mail size={16} />
    </div>
      <span className="font-semibold">Email:</span>
    <a
      href="mailto:bmchospital@gmail.com"
      className="font-semibold transition"
      style={{ color: "var(--text-primary)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--primary-purple)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "var(--text-primary)")
      }
    >
      bmchospital@gmail.com
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default EnquiryPopup;
