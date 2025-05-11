import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BottomNavbar />

      <main>
        <Hero />
        <Deals />
      </main>
      <Footer />
    </>
  );
}

export default App;
