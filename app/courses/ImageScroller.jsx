import React, { useRef, useEffect, useState } from "react";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";

const ImageScroller = ({ onRightBarFix, isRightBarFixed }) => {
  const statisticsData = [
    { number: "25,000+", text: "Student placed" },
    { number: "180+", text: "Hiring Companies" },
    { number: "10,000+", text: "Non IT Students placed" },
    { number: "15,000+", text: "IT Students placed" },
  ];
  const section2Ref = useRef(null);
  const [section1Height, setSection1Height] = useState(0);
  const [isAbsoluteBar, setIsAbsoluteBar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const baseThreshold = 407;
      const viewportWidth = window.innerWidth;
      const scaleFactor = viewportWidth / 1280;
      const scaledThreshold = baseThreshold * scaleFactor;
      const isNearFooter =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - scaledThreshold;
      setIsAbsoluteBar(isNearFooter);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (section2Ref.current) {
      setSection1Height(section2Ref.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (section2Ref.current) {
        const scrollThreshold = section1Height * 0.75;
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        onRightBarFix(scrollPos > scrollThreshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onRightBarFix, section1Height]);

  return (
    <div
      className={`right-bar ${isRightBarFixed ? "fixedbar" : ""} ${
        isRightBarFixed && isAbsoluteBar ? "absolutebar" : ""
      }`}
    >
      <div ref={section2Ref}>
        <img src="../courseLanding.png" alt="courseLanding" />
        {isRightBarFixed && (
          <div className="py-[2.222vh] px-[1.25vw]">
            <div className="flex  justify-between items-center">
              <h1 className="font-bold  text-left text-[1.875vw]">
                Software Testing
              </h1>
              <button className=" flex gap-2 text-[1.25vw] justify-center items-center py-[1.111vh] px-[0.938vw] font-medium rounded">
                <Svg
                  width={svgicons.ratingStar[0]}
                  height={svgicons.ratingStar[1]}
                  viewBox={svgicons.ratingStar[2]}
                  icon={svgicons.ratingStar[3]}
                  color={svgicons.ratingStar[4]}
                />
                <p className="text-[1.25vw] font-medium">4.6 Rating</p>
              </button>
            </div>
            <div>
              <p className="text-left font-medium text-[1.094vw]  headerText pt-[0.781vw] pb-[2.031vw]">
                Explore the dynamic world of software testing with our
                comprehensive course.
              </p>
            </div>
            <article className="flex  pb-[4.444vh]">
              {statisticsData.map((ele, index) => (
                <div key={index}>
                  <h1
                    className={`text-left font-bold text-[1.094vw]  headerText ${
                      ele.number !== "15,000+" ? "pr-[0.781vw]" : ""
                    }`}
                  >
                    {ele.number}
                  </h1>
                  <p
                    className={`text-left font-medium text-[0.781vw] tracking-tighter  headerText pt-[0.417vh] ${
                      ele.text !== "IT Students placed" ? "pr-[0.781vw]" : ""
                    }`}
                  >
                    {ele.text}
                  </p>
                </div>
              ))}
            </article>
            <section className="flex gap-6  justify-center">
              <button className="EnrollButton text-[1.25vw] font-semibold py-[0.781vw] px-[3.333vh] w-[15.15vw]">
                Enroll now
              </button>
              <button className="EnquireButton text-[1.25vw] font-semibold py-[0.781vw] px-[3.333vh] relative w-[15.15vw]">
                <span>Enquire now</span>
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageScroller;
