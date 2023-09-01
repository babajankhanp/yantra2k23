import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Workshop from "./components/Workshop";
import Sliderimages from "./components/Sliderimages";
import Schedule from "./components/Schedule";


function App() {


  return (

    <BrowserRouter>
      <Hero />
      <Sliderimages />
      <Workshop />
      <Events />
      <Schedule />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
