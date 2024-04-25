import React, { useRef, useEffect, useState } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Button from "@/components/commonComponents/button/Button";

const CourseLanding = ({ onRightBarFix, isRightBarFixed }) => {
  const typesOfClasses = [
    {
      title: "Offline Classes",
    },
    {
      title: "Online Live Classes",
    },
    {
      title: "Experiential Learning",
    },
    {
      title: "Self Paced",
    },
  ];

  const statisticsData = [
    { number: "25,000+", text: "student placed" },
    { number: "180+", text: "Hiring Companies" },
    { number: "10,000+", text: "Non IT Students placed" },
    { number: "15,000+", text: "IT Students placed" },
  ];

  const imageSrc = "../illustrate_tickmark.svg";

  const resources = [
    "Enhance skills with extensive learning resources surpassing certification standards.",
    "Attain the Azure Administrator credential for increased earning potential and career growth.",
    "Access knowledge beyond certification to excel in your role and stand out in the job market.",
  ];
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [section1Height, setSection1Height] = useState(0);

  useEffect(() => {
    if (section1Ref.current) {
      setSection1Height(section1Ref.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (section2Ref.current) {
        const section2Offset = section2Ref.current.offsetTop;
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
    <MaxWebWidth
      sectionStyling="bg-coursegradient max-w-full overflow-hidden"
      articalStyling="relative"
    >
      <aside className="flex py-8 h-[87vh] justify-between">
        <article ref={section1Ref} className="w-[51.56vw] flex flex-col py-4">
          <div className="bg-white h-[2.65vw] flex w-fit">
            {typesOfClasses.map((classItem, index) => (
              <button
                key={index}
                className="flex justify-center items-center px-4 py-2 font-medium text-sm courseButton"
              >
                {classItem.title}
              </button>
            ))}
          </div>
          <div className="py-4 flex gap-6 items-center">
            <h1 className="font-bold leading-[3rem]  text-left text-[2rem]">
              Software Testing
            </h1>
            <button className="ratingButton flex justify-center items-center py-2 px-4 font-medium rounded">
              <span className="flex text-base p-1 font-bold">
                {" "}
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
          <div className="py-4">
            <p className="headerText text-left font-medium text-xl">
              Explore the dynamic world of software testing with our
              comprehensive course.
            </p>
          </div>
          <article className="flex py-4">
            {statisticsData.map((ele, index) => (
              <div key={index} className=" pr-8">
                <h1 className="text-left font-bold text-2xl headerText">
                  {ele.number}
                </h1>
                <p className="text-left font-medium text-sm headerText">
                  {ele.text}
                </p>
              </div>
            ))}
          </article>
          <article className="py-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex text-left gap-4  text-xs font-semibold leading-6"
              >
                <figure>
                  <img src={imageSrc} alt={`resource-${index}`} />
                </figure>
                <article>
                  <p>{resource}</p>
                </article>
              </div>
            ))}
          </article>
          <section className="flex gap-6 py-4">
            <button className="EnrollButton text-base font-medium py-2.5 px-6">
              Enroll now
            </button>
            <button className="EnquireButton text-base font-medium py-2.5 px-6 relative">
              Enquire now
            </button>
          </section>
        </article>
        <figure
          ref={section2Ref}
          className="w-[32.93vw] flex justify-end items-center relative float-right"
        >
          <div
            className={`${
              isRightBarFixed ? "right-bar fixedbar" : "right-bar"
            }`}
          >
            <img src="../courseLanding.png" alt="courseLanding" />
            {isRightBarFixed && (
              <div className="cardDataContainer">
                <div className="flex py-3 justify-between items-center">
                  <h1 className="font-bold leading-[1rem]  text-left text-[1.5rem]">
                    Software Testing
                  </h1>
                  <button className="ratingButton flex justify-center items-center py-3 px-4 font-medium rounded">
                    <span className="flex text-base p-1 font-bold">
                      {" "}
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
                  <p className="text-left font-medium text-xs headerText">
                    Explore the dynamic world of software testing with our
                    comprehensive course.
                  </p>
                </div>
                <article className="flex justify-evenly py-1 px-2">
                  {statisticsData.map((ele, index) => (
                    <div key={index} className="py-2 pr-3">
                      <h1 className="text-left font-bold text-sm headerText">
                        {ele.number}
                      </h1>
                      <p className="text-left font-medium text-xs headerText">
                        {ele.text}
                      </p>
                    </div>
                  ))}
                </article>
                <section className="flex gap-6 py-2 justify-center">
                  <button className="EnrollButton text-sm font-medium py-2.5 px-6">
                    Enroll now
                  </button>
                  <button className="EnquireButton text-sm font-medium py-2.5 px-6 relative">
                    Enquire now
                  </button>
                </section>
              </div>
            )}
          </div>
        </figure>
      </aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
