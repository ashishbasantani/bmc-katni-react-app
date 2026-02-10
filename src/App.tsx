import React, { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./styles/variables.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Doctors } from "./components/Doctor/Doctors";
import Footer from "./components/Footer/Footer";
import Facilities from "./components/Facilities/Facilities";
import TopBar from "./components/TopBar/TopBar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import SurgeryLearnMore from "./components/Service/SurgeryLearnMore";
import OrthopedicsLearnMore from "./components/Service/OrthopedicsLearnMore";
import MedicineLearnMore from "./components/Service/MedicineLearnMore";
import DentalCareLearnMore from "./components/Service/DentalCareLearnMore";

import AppointmentPage from "./pages/Appointment/AppointmentPage";
import AppointmentSuccess from "./pages/Appointment/AppointmentSuccess";

function App() {
  const location = useLocation();
  const isAppointmentPage = location.pathname === "/book_appointment";

  // Scroll to section when coming from other pages
  useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location.pathname, location.hash]);

  return (
    <div className="App">
      <TopBar />
      {/* Show navbar ONLY if NOT appointment page */}
      {!isAppointmentPage && <Header />}
      <Breadcrumbs />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/book_appointment" element={<AppointmentPage />} />
            <Route
              path="/appointment/success"
              element={<AppointmentSuccess />}
            />            
          <Route
            path="/"
            element={
              <>
                <section id="home"><Hero /></section>
                <section id="facilities"><Facilities /></section>
                <section id="about-us"><About /></section>
                <section id="services"><Services /></section>
                <section id="doctors"><Doctors /></section>
              </>
            }
          />
          <Route path="/services/dentalCare" element={<DentalCareLearnMore />}/>
          <Route path="/services/orthopedics" element={<OrthopedicsLearnMore />} />
          <Route path="/services/medicine" element={<MedicineLearnMore />} />
          <Route path="/services/surgery" element={<SurgeryLearnMore />} />
        </Routes>
        <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;