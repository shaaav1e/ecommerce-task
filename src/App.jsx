import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <BottomNavbar />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
