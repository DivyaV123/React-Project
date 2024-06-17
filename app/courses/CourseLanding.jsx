import React, { useState, useEffect, useContext } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import ImageScroller from "./ImageScroller";
import { GlobalContext } from "@/components/Context/GlobalContext";
import Image from "next/image";
const CourseLanding = ({ courseDetails }) => {
  const { allStaticsCount } = useContext(GlobalContext);
  const typesOfClasses = [
    { title: "Offline Classes" },
    { title: "Online Live Classes" },
    { title: "Experiential Learning" },
    { title: "Self Paced" },
  ];

  const statisticsData = [
    {
      number: `${allStaticsCount?.response?.allPlacedCount}+`,
      text: "Student placed",
    },
    { number: "4870+", text: "Hiring Companies" },
    {
      number: `${allStaticsCount?.response?.nonItCount}+`,
      text: "Non IT Students placed",
    },
    {
      number: `${allStaticsCount?.response?.itCount}+`,
      text: "IT Students placed",
    },
  ];

  const imageSrc = "../illustrate_tickmark.svg";
  const tutionClasses = courseDetails?.courseAbout;
  let splitText = tutionClasses?.split(".");
  const resources = splitText?.filter((s) => s);
  const [btnState, setBtnState] = useState(courseDetails?.mode[0]);

  const [isRightBarFixed, setIsRightBarFixed] = useState(false);

  const handleRightBarFix = (fixed) => {
    setIsRightBarFixed(fixed);
  };

  return (
    <>
      <MaxWebWidth
        sectionStyling=" max-w-full overflow-hidden courseBackgroundwave "
        articalStyling="relative"
      >
        <aside className="flex pt-[6.944vh] justify-between">
          <article className="w-[87.5vw] flex flex-col ">
            <div className="flex justify-between">
            <div className="bg-white flex w-fit classTypes">
              {courseDetails?.mode?.map((classItem, index) => (
                <button
                  key={index}
                  className={`flex justify-center items-center px-[1.25vw] py-[1.111vh] font-medium text-[0.938vw] text-dark-gray ${
                    classItem === btnState ? "activecourseButton" : ""
                  }`}
                  onClick={() => {
                    setBtnState(classItem);
                  }}
                >
                  {classItem}
                </button>
              ))}
            </div>
            <button className="ratingButton flex justify-center items-center py-2 px-4 font-semibold rounded text-ash">
                  <span className="flex text-[1.25vw] py-[0.556vh] px-[0.313vw]">
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
            <div className="py-[1.389vh] flex gap-6 items-center">
              <h1
                title={courseDetails?.courseName}
                className="font-bold text-left text-[3.75vw] flex"
              >
                {courseDetails?.courseName}
                
              </h1>
            </div>
            <section className="flex justify-between ">
              <div className="w-[55.469vw]">
                <div className="pb-[5.556vh]">
                  <p className="headerText text-left font-medium text-[1.563vw] leading-[1.875rem] pt-[0.833vh]">
                    {courseDetails?.courseSummary}
                  </p>
                </div>
                <article className="flex pb-[5.556vh]">
                  {statisticsData.map((ele, index) => (
                    <div key={index} className="courseStats">
                      <h1
                        className={`text-left font-bold text-[1.875vw] pb-[0.556vh]  ${
                          ele.number !== "15,000+" ? "pr-[2.5vw]" : ""
                        }`}
                      >
                        {ele.number}
                      </h1>
                      <p
                        className={`text-left font-medium text-[1.094vw] headerText ${
                          ele.text !== "IT Students placed" ? "pr-[2.5vw]" : ""
                        }`}
                      >
                        {ele.text}
                      </p>
                    </div>
                  ))}
                </article>
                <article className="pb-[2.778vh]">
                  {resources?.map((resource, index) => (
                    <div
                      key={index}
                      className="flex text-left gap-4 text-[0.938vw] items-center leading-[1rem] pb-[2.778vh] font-semibold text-ash"
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
                <section className="flex gap-6 pb-[7.222vh]">
                  <button className="EnrollButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw]">
                    Enroll now
                  </button>
                  <button className="EnquireButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
                    <span>Know more</span>
                  </button>
                </section>
              </div>
              <div>
                <img
                  src={courseDetails?.courseImage}
                  className="w-[28.125vw] h-[60.417vh] mb-[2.222vh]"
                  alt="CourseImage"
                />
              </div>
            </section>
          </article>
        </aside>
      </MaxWebWidth>
      {/* <ImageScroller cardData={courseDetails} onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} /> */}
    </>
  );
};

export default CourseLanding;
