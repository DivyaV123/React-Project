"use client";
import React from "react";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import "./hiringPartners.scss";
function vHiringPartners({ page }) {
  const svgPath = [
    { src: "./compLogo01.svg" },
    { src: "./compLogo02.svg" },
    { src: "./compLogo03.svg" },
    { src: "./compLogo-04.svg" },
    { src: "./compLogo05.svg" },
    { src: "./compLogo06.svg" },
    { src: "./compLogo07.svg" },
    { src: "./compLogo01.svg" },
    { src: "./compLogo02.svg" },
    { src: "./compLogo03.svg" },
    { src: "./compLogo-04.svg" },
    { src: "./compLogo05.svg" },
    { src: "./compLogo06.svg" },
    { src: "./compLogo07.svg" },
    { src: "./compLogo01.svg" },
    { src: "./compLogo02.svg" },
    { src: "./compLogo03.svg" },
    { src: "./compLogo-04.svg" },
  ];
  return (
    <MaxWebWidth sectionStyling="bg-[#FEF2E7] overflow-hidden w-full py-6">
      <header>
        <h1 className={`${page === 'course' ? 'flex justify-center align-center font-bold text-[2rem] pb-1 w-[51.56vw]' : 'flex justify-center align-center font-bold text-[2rem] pb-1'}`}>
          Our Hiring Partners
        </h1>
      </header>
      <div className="slider">
        <div className="slide-track">
          {svgPath.map((path, index) => {
            if (page === "course") {
              path.src = '.' + path.src;
            }
            return (
              <div className="slide" key={index}>
                <img src={path.src} alt={`Logo ${index}`} />
              </div>
            )
          })}
        </div>
      </div>
      {/* 
      <div className="slider">
        <div className="slide-track-right">
          {svgPath.map((path, index) => (
            <div className="slide" key={index}>
              <img src={path.src} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="slider">
        <div className="slide-track">
          {svgPath.map((path, index) => (
            <div className="slide" key={index}>
              <img src={path.src} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div> */}
    </MaxWebWidth>
  );
}

export default HiringPartners;
