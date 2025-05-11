import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Outdoor from "./components/Outdoor";
import Consumer from "./components/Consumer";
import Quote from "./components/Quote";
import Recommended from "./components/Recommended";

function App() {
  return (
    <>
      <Header />
      <BottomNavbar />

      <main>
        <Hero />
        <Deals />
        <Outdoor />
        <Consumer />
        <Quote />
        <Recommended />
      </main>
      <Footer />
    </>
  );
}

export default App;
