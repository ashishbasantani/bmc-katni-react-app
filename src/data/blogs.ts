import { Blog } from "../types/blog.types";

import blog1 from "../assets/healthtips.jpg";
import blog2 from "../assets/nutrition.jpg";
import blog3 from "../assets/research.jpg";

export const BLOGS: Blog[] = [
  {
    id: 1,
    slug: "regular-checkups",
    category: "Health-Tips",
    image: blog1,
    date: "Feb 18, 2026",
    readTime: "5 min read",
    title: "Understanding the Importance of Regular Checkups",
    description:
      "Regular health screenings can detect problems early when they are most treatable. Learn why annual visits matter.",
  },
  {
    id: 2,
    slug: "nutrition-basics",
    category: "Nutrition",
    image: blog2,
    date: "Feb 15, 2026",
    readTime: "4 min read",
    title: "Nutrition Tips for a Stronger Immune System",
    description:
      "Discover the best foods to boost your immunity and keep you healthy during flu season and beyond.",
  },
  {
    id: 3,
    slug: "mental-health-matters",
    category: "Research",
    image: blog3,
    date: "Feb 10, 2026",
    readTime: "6 min read",
    title: "Advances in Medical Research: What to Expect",
    description:
      "From gene therapy to personalized medicine, explore the groundbreaking innovations shaping the future of healthcare.",
  },
];