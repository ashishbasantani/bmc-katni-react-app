import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/variables.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Doctors } from "./components/Doctor/Doctors";
import Footer from "./components/Footer/Footer";
import Facilities from "./components/Facilities/Facilities";
import ServiceDetails from "./components/Service/ServiceDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <section id="home">
                      <Hero />
                    </section>

                    <section id="facilities">
                      <Facilities />
                    </section>

                    <section id="about-us">
                      <About />
                    </section>

                    <section id="services">
                      <Services />
                    </section>

                    <section id="doctors">
                      <Doctors />
                    </section>
                  </>
                }
              />

              {/* Services Learn More Page */}
              <Route path="/learn-more" element={<ServiceDetails />} />
            </Routes>

            <Footer />
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
