import React, { useState } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import EnrollPopUp from "@/components/commonComponents/courseCard/EnrollPopUp";
import Image from "next/image";
import HtmlContent from "@/components/commonComponents/htmlTextConvert/HtmlContent";
import { toProperCase } from "@/lib/utils";
const CourseLanding = ({
  courseDetails,
  countDetails,
  typeOfLearning,
  setTypeOfLearning,
}) => {
  const statisticsData = [
    {
      number: `${countDetails?.response?.allPlacedCount}+`,
      text: "Students placed",
    },
    { number: "4870+", text: "Hiring Companies" },
    {
      number: `${countDetails?.response?.nonItCount}+`,
      text: "Non IT Students placed",
    },
    {
      number: `${countDetails?.response?.itCount}+`,
      text: "IT Students placed",
    },
  ];

  const imageSrc = "../illustrate_tickmark.svg";
  const tutionClasses = courseDetails?.courseAbout;
  let splitText = tutionClasses?.split(".");
  const resources = splitText?.filter((s) => s);

  const [isRightBarFixed, setIsRightBarFixed] = useState(false);

  const handleRightBarFix = (fixed) => {
    setIsRightBarFixed(fixed);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <MaxWebWidth
        sectionStyling=" max-w-full overflow-hidden courseBackgroundwave courseBackgroundGradient"
        articalStyling="relative"
      >
        <aside className="flex pt-[6.944vh] justify-between mobile:pt-[3.433vh]">
          <article className="w-[87.5vw] mobile:w-[92.558vw] flex flex-col">
            <div className="flex justify-between mobile:hidden">
              <div className="bg-white flex w-fit classTypes">
                {courseDetails?.mode?.map((classItem, index) => (
                  <button
                    key={index}
                    className={`flex justify-center items-center px-[1.25vw] py-[1.111vh] font-medium text-[0.938vw] text-dark-gray ${classItem === typeOfLearning ? "activecourseButton" : ""
                      }`}
                    onClick={() => {
                      setTypeOfLearning(classItem);
                    }}
                  >
                    {toProperCase(classItem)}
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
            <div className="py-[1.389vh] flex gap-6 items-center mobile:hidden">
              <h1
                title={courseDetails?.courseName}
                className="font-bold text-left text-[3.75vw] flex"
              >
                {courseDetails?.courseName}
              </h1>
            </div>
            <section className="flex justify-between mobile:flex-col-reverse">
              <div className="w-[55.469vw] mobile:w-full">
                <div className="pb-[0.966vh] flex  items-center sm:hidden">
                  <h1
                    title={courseDetails?.courseName}
                    className="font-bold text-left text-[7.442vw] flex"
                  >
                    {courseDetails?.courseName}
                  </h1>
                </div>
                <div className="pb-[5.556vh] mobile:pb-[2.575vh] mobile:flex mobile:justify-between gap-4">
                  <p className="headerText w-[65.814vw] text-left mobile:text-[2.791vw] text-[1.563vw] sm:leading-[1.875rem] sm:pt-[0.833vh] !w-[100%]">
                    {courseDetails?.courseSummary}
                  </p>
                  <button className="bg-[#ffe8d3] mobile:w-[18.219vh] mobile:pt-0 mobile:pb-0 w-[23.256vw] text-[2.791vw] flex justify-center  pt-[0.536vh] pb-[0.751vh] items-center gap-1  font-semibold rounded text-ash sm:hidden h-[3.219vh]">
                    <img
                      className="w-[4.186vw] h-[1.931vh]"
                      src="/ratingstar.svg"
                    />
                    <p>4.6 Rating</p>
                  </button>
                </div>
                <article className="flex sm:pb-[5.556vh] mobile:flex-wrap">
                  {statisticsData.map((ele, index) => (
                    <div
                      key={index}
                      className="courseStats mobile:w-[50%] mobile:pb-[2.146vh]"
                    >
                      <h1
                        className={`text-left font-bold mobile:text-[4.651vw] mobile:pb-[0.429vh] text-[1.875vw] pb-[0.556vh]  ${ele.number !== "15,000+" ? "pr-[2.5vw]" : ""
                          }`}
                      >
                        {ele.number}
                      </h1>
                      <p
                        className={`text-left font-medium mobile:text-[3.256vw] text-[1.094vw] headerText ${ele.text !== "IT Students placed" ? "pr-[2.5vw]" : ""
                          }`}
                      >
                        {ele.text}
                      </p>
                    </div>
                  ))}
                </article>
                <article>
                  {tutionClasses?.includes('<') ?
                    <HtmlContent htmlString={tutionClasses} imageSrc={imageSrc} /> :
                    resources?.map((resource, index) => (
                      <div
                        key={index}
                        className="flex text-left gap-4  items-center  pb-[2.778vh] mobile:pb-[1.073vh]  text-ash"
                      >
                        <figure className="  ">
                          <img src={imageSrc} alt={`resource-${index}`} />
                        </figure>
                        <article className=" mobile:w-[85vw] ">
                          <p className="text-[0.938vw] mobile:text-[2.791vw]">
                            {resource}
                          </p>
                        </article>
                      </div>
                    ))}
                </article>
                <section className="flex gap-6 pb-[7.222vh] mobile:pb-[2.79vh]">
                  <button
                    onClick={() => handleCardClick()}
                    className="EnrollButton text-[1.25vw] mobile:text-[3.721vw] font-semibold py-[1.389vh] px-[1.875vw]"
                  >
                    Enroll For Demo class
                  </button>
                  {/* <button className="EnquireButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
                    <span>Know more</span>
                  </button> */}
                </section>
              </div>
              <div>
                {courseDetails?.courseImage && (
                  <Image
                    height={500}
                    width={500}
                    src={courseDetails?.courseImage}
                    className="object-cover w-[28.125vw] h-[60.417vh] sm:mb-[2.222vh] mobile:w-full mobile:h-[26.18vh] mobile:pb-[3.219vh]"
                    alt="CourseImage"
                  />
                )}
              </div>
            </section>
          </article>
        </aside>
      </MaxWebWidth >
      {/* <ImageScroller cardData={courseDetails} onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} /> */}
      < EnrollPopUp
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default CourseLanding;
