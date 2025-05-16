import React from "react";
import Hero from "./Hero";
import Deals from "./Deals";
import Outdoor from "./Outdoor";
import Consumer from "./Consumer";
import Quote from "./Quote";
import Recommended from "./Recommended";
import ExtraServices from "./ExtraServices";
import Suppliers from "./Suppliers";

const HomePage = () => {
  return (
    <>
      <section aria-label="Hero Banner">
        <Hero />
      </section>

      <section aria-label="Deals and Offers">
        <Deals />
      </section>

      <section aria-label="Outdoor Products">
        <Outdoor />
      </section>

      <section aria-label="Consumer Electronics">
        <Consumer />
      </section>

      <section aria-label="Request Quote">
        <Quote />
      </section>

      <section aria-label="Recommended Products">
        <Recommended />
      </section>

      <section aria-label="Extra Services">
        <ExtraServices />
      </section>

      <section aria-label="Suppliers">
        <Suppliers />
      </section>
    </>
  );
};

export default HomePage;
