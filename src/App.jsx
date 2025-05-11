import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";
import Deals from "./components/Deals";

function App() {
  return (
    <>
      <Header />
      <BottomNavbar />

      <main>
        <Hero />
        <Deals />
      </main>
    </>
  );
}

export default App;
