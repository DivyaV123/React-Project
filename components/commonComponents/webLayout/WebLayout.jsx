import FooterHome from "@/components/footer/footerHome";
import NavHome from "@/components/navHome/navHome";
import React from "react";

function WebLayout({ children }) {
  return (
    <>
      <NavHome />
      <div className="relative">{children}</div>
      <FooterHome />
    </>
  );
}

export default WebLayout;
