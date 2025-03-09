import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Service/Service";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contac";
import Footer from "./Components/Footer/Footer";
import Card from './Components/Card/Card'; // Assuming Card component is in the 'Card' folder
import ScrollToTopButton from "./Components/ScrollButton";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Service />
        <Banner />
        <Contact />
        <ScrollToTopButton/>
        
        {/* All components are rendered here */}

        <Routes>
          {/* This route will render Card page when the /card path is accessed */}
          <Route path="/card" component={Card} />
          </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
