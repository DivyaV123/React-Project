'use client'
import CoursePagePop from "@/app/courses/CoursePagePop";
import ContactSection from "@/components/carosalHome/ContactSection";
import FooterHome from "@/components/footer/footerHome";
import NavHome from "@/components/navHome/navHome";
import React from "react";

function WebLayout({ children, page,courseDetails }) {
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
              <CoursePagePop courseDetails={courseDetails}/>
            ) : (<></>)
      }
    </>
  );
}

export default WebLayout;
