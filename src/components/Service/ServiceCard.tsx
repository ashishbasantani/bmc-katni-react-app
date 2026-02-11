import { LucideIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const themes = [
  {
    card: "bg-[#EAF4FF]",
    icon: "bg-blue-200 text-blue-600",
  },
  {
    card: "bg-[#F4ECFF]",
    icon: "bg-purple-200 text-purple-600",
  },
  {
    card: "bg-[#EAF6FF]",
    icon: "bg-blue-200 text-blue-600",
  },
  {
    card: "bg-[#F7ECFF]",
    icon: "bg-purple-200 text-purple-600",
  },
];

export const ServiceCard: React.FC<Props> = ({
  index,
  title,
  description,
  icon: Icon,
  slug,
}) => {
  const navigate = useNavigate();
  const theme = themes[index % 4];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 min-h-[260px] sm:min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${theme.card}`}
    >
      {/* Decorative circle */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/30" />

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${theme.icon}`}
      >
        <Icon size={28} strokeWidth={2} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#2B2B36] mb-3">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600 mb-6">
        {description}
      </p>

      <span
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(`/services/${slug}`);
        }}
        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 cursor-pointer hover:gap-3 transition-all mt-auto"
      >
        Learn more →
      </span>
    </div>
  );
};
