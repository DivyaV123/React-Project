'use client'
import ContactSection from "@/components/carosalHome/ContactSection";
import FooterHome from "@/components/footer/footerHome";
import NavHome from "@/components/navHome/navHome";
import React from "react";

function WebLayout({ children, page }) {
  return (
    <>
      <NavHome />
      <div className="relative">{children}</div>
      <FooterHome />
      {
        page === 'main' &&
        (
          <ContactSection />
        )
      }
    </>
  );
}

export default WebLayout;
