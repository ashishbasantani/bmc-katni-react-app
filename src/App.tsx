import React, { Suspense, ReactNode, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Doctors } from "./components/Doctor/Doctors";
import Footer from "./components/Footer/Footer";
import Facilities from "./components/Facilities/Facilities";
import TopBar from "./components/TopBar/TopBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ServiceDetail from "./components/Service/ServiceDetail";

import AppointmentPage from "./pages/Appointment/AppointmentPage";
import AppointmentSuccessModal from "./pages/Appointment/AppointmentSuccess";
import BlogSection from "./components/Blog/BlogSection";
import BlogDetail from "./components/Blog/BlogDetail";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <section id={id} className="w-full scroll-mt-[var(--header-height)]">
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

      <Section id="blogs">
        <BlogSection />
      </Section>

      <Section id="doctors">
        <Doctors />
      </Section>
    </>
  );
};

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);

  const [successData, setSuccessData] = React.useState({
    appointmentId: "",
    doctor: "",
    patient: "",
    dateTime: "",
  });

  // 🔹 This will be called from AppointmentPage on successful booking
  const handleAppointmentSuccess = (data: {
    appointmentId: string;
    doctor: string;
    patient: string;
    dateTime: string;
  }) => {
    setIsAppointmentOpen(false);
    setSuccessData(data);
    setIsSuccessOpen(true);
  };

  return (
    <div
      className="App font-sans w-full min-h-screen relative"
      style={{
        color: "var(--text-primary)",
        backgroundColor: "var(--bg-page)",
      }}
    >
      <TopBar />

      {/* Pass open function to Header */}
      <Header onBookAppointment={() => setIsAppointmentOpen(true)} />

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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/services/:serviceType"
              element={<ServiceDetail />}
            />
            <Route
              path="/blog/:slug"
              element={<BlogDetail />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* 🔹 Appointment Popup */}
      {isAppointmentOpen && (
        <AppointmentPage
          onClose={() => setIsAppointmentOpen(false)}
          onSuccess={handleAppointmentSuccess}   // 👈 important
        />
      )}

      {/* 🔹 Success Popup */}
      {isSuccessOpen && (
        <AppointmentSuccessModal
          data={successData}
          onClose={() => setIsSuccessOpen(false)}
        />
      )}
    </div>
  );
}

export default App;