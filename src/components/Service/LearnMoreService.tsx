import medicine from "./medicine.json";
import dentalCare from "./dental.json";
import orthopedics from "./orthopedics.json";
import surgery from "./surgery.json";

import medicineHeroBanner from "../../assets/medicine-hero-banner.jpeg";
import medicineSideBanner from "../../assets/medicine-side-banner.jpeg";

import orthopedicHeroBanner from "../../assets/orthopedic-hero-banner.jpg";
import orthopedicSideBanner from "../../assets/orthopedic-side-banner.jpg";

import surgeryHeroBanner from "../../assets/orthopedic-hero-banner.jpg";
import surgerySideBanner from "../../assets/orthopedic-side-banner.jpg";

import dentalHeroBanner from "../../assets/dental-hero-banner.jpg";
import dentalSideBanner from "../../assets/orthopedic-side-banner.jpg";

/**
 * Matches JSON structure exactly
 */
export interface ServiceData {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;

  heroImage : string;
  cta: {
    whatsappText: string;
  };

  whyChoose: {
    title?: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  conditions: {
    subtitle: string;
    list: string[];
    bannerClass?: string;
    image?: string;
  };

  faq: {
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

const imageMap: Record<string, string> = {
  "medicine-hero-banner": medicineHeroBanner,
  "medicine-side-banner": medicineSideBanner,
  "orthopedic-hero-banner": orthopedicHeroBanner,
  "orthopedic-side-banner": orthopedicSideBanner,
  "dental-hero-banner": dentalHeroBanner,
  "dental-side-banner": dentalSideBanner,
  "surgery-hero-banner": surgeryHeroBanner,
  "surgery-side-banner": surgerySideBanner,
};

const resolveImages = (service: ServiceData): ServiceData => ({
  ...service,
  heroImage: imageMap[service.heroImage],
  conditions: {
    ...service.conditions,
    image: service.conditions.image
      ? imageMap[service.conditions.image]
      : undefined,
  },
});

export const LearnMoreService: Record<string, ServiceData> = {
  medicine: resolveImages(medicine),
  orthopedics: resolveImages(orthopedics),
  dentalCare: resolveImages(dentalCare),
  surgery: resolveImages(surgery)
};

