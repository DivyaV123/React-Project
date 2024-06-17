'use client'
import CoursePagePop from "@/app/courses/CoursePagePop";
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
        page === 'main' ?
          (
            <ContactSection />
          ) : page === 'course' ?
            (
              <CoursePagePop />
            ) : (<></>)
      }
    </>
  );
}

export default WebLayout;
