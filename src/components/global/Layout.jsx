import React, { memo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrwawer from "../cart/CartDrwawer";
 function Layout({children,pageName="index"}) {
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
export default memo(Layout)