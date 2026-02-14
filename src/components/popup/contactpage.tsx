import React, { useState } from "react";
import { X, User, Mail, Phone, Calendar, HelpCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
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
            placeholder="Enter your 10-digit phone number"
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

        {/* Age */}
        <div>
          <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
            <Calendar size={16} /> Age *
          </label>
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age (5-90)"
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

        {/* Gender */}
        <div>
          <label className="flex items-center gap-2 font-medium mb-2 text-[var(--text-primary)]">
            <HelpCircle size={16} /> Gender *
          </label>

          <div className="flex gap-6 pt-1 text-[var(--text-secondary)]">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  onChange={handleChange}
                  required
                  style={{ accentColor: "var(--primary-purple)" }}
                />
                {g}
              </label>
            ))}
          </div>
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
            onClick={handleSubmit}
            className="flex-1 h-12 text-white font-semibold transition"
            style={{
              borderRadius: "var(--radius-lg)",
              background: "var(--primary-gradient)",
            }}
          >
            Register Now
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
    </div>
  </div>
);
};

export default EnquiryPopup;
