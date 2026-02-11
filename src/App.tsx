import React, { Suspense, ReactNode, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Doctors } from "./components/Doctor/Doctors";
import Footer from "./components/Footer/Footer";
import Facilities from "./components/Facilities/Facilities";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import ServiceDetail from "./components/Service/ServiceDetail";

interface SectionProps {
  id: string;
  children: ReactNode;
}

/**
 * Section wrapper
 * scroll-mt fixes alignment under fixed header
 */
const Section: React.FC<SectionProps> = ({ id, children }) => (
  <section
    id={id}
    className="w-full scroll-mt-[var(--header-height)]"
  >
    {children}
  </section>
);

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Section id="home">
        <Hero />
      </Section>

      <Section id="facilities">
        <Facilities />
      </Section>

      <Section id="about-us">
        <About />
      </Section>

      <Section id="services">
        <Services />
      </Section>

      <Section id="doctors">
        <Doctors />
      </Section>
    </>
  );
};

function App() {
  return (
    <div
      className="App font-sans w-full min-h-screen"
      style={{
        color: "var(--text-primary)",
        backgroundColor: "var(--bg-page)",
      }}
    >
      <Header />
      <Breadcrumbs />

      <main className="flex flex-col w-full">
        <Suspense
          fallback={
            <div className="flex justify-center py-[var(--spacing-3xl)]">
              <div
                className="w-10 h-10 border-4 rounded-full animate-spin"
                style={{
                  borderColor: "var(--border-light)",
                  borderTopColor: "var(--accent-blue)",
                }}
              />
            </div>
          }
        >
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamic Service Page */}
            <Route
              path="/services/:serviceType"
              element={<ServiceDetail />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
