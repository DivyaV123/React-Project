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
          <div className="cardDataContainer">
            <div className="flex py-3 justify-between items-center">
              <h1 className="font-bold leading-[1rem] text-left text-[1.5rem]">
                Software Testing
              </h1>
              <button className="ratingButton flex justify-center items-center py-3 px-4 font-medium rounded">
                <span className="flex text-base p-1 font-bold">
                  <Svg
                    width={svgicons.ratingStar[0]}
                    height={svgicons.ratingStar[1]}
                    viewBox={svgicons.ratingStar[2]}
                    icon={svgicons.ratingStar[3]}
                    color={svgicons.ratingStar[4]}
                  />
                </span>{" "}
                4.6 Rating
              </button>
            </div>
            <div>
              <p className="text-left font-medium text-[0.875rem] 2xl:text-base 3xl:text-[1.125rem] headerText py-2">
                Explore the dynamic world of software testing with our
                comprehensive course.
              </p>
            </div>
            <article className="flex justify-between py-1 2xl:py-2 3xl:py-5">
              {statisticsData.map((ele, index) => (
                <div key={index} className="py-2 pr-2">
                  <h1 className="text-left font-bold text-[0.875rem]  3xl:text-[1.125rem] headerText">
                    {ele.number}
                  </h1>
                  <p className="text-left font-medium text-[0.625rem] tracking-tighter 2xl:text-[0.7rem] 3xl:text-[0.9rem] headerText pt-1 2xl:pt-2 3xl:pt-3">
                    {ele.text}
                  </p>
                </div>
              ))}
            </article>
            <section className="flex gap-6 pb-2 2xl:pb-4 3xl:pb-6 pt-1 2xl:pt-2 3xl:pt-3 justify-center">
              <button className="EnrollButton text-base 2xl:text-base font-semibold py-2.5 px-6 w-[15.15vw]">
                Enroll now
              </button>
              <button className="EnquireButton text-base 2xl:text-base font-semibold py-2.5 px-6 relative w-[15.15vw]">
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
