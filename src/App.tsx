import React, { Suspense } from "react";
import "./App.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Service/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <section id="home">
            <Hero />
          </section>
          <section id="about-us">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
