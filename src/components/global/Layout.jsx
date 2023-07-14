import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrwawer from "../cart/CartDrwawer";
export default function Layout({children,pageName="index"}) {
  return (
    <div className={`template-${pageName}`}>
      <Navbar />
      <main id="mainContent">
        {children}
      </main>
      <CartDrwawer/>
      <Footer />
    </div>
  );
}
