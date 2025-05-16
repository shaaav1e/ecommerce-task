import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNavbar from "./BottomNavbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
        <BottomNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <section aria-label="Newsletter">
        <Newsletter />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
