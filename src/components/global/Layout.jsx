import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({children,pageName="index"}) {
  return (
    <div className={`template-${pageName}`}>
      <Navbar />
      <main id="mainContent">
        {children}
      </main>
      <Footer />
    </div>
  );
}
