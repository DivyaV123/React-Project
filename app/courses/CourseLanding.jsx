import React, { useState, useEffect, useContext } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
const CourseLanding = ({ courseDetails }) => {
  const { data: countDetails, error, isLoading } = useGetAllPlacementCountQuery()
  const typesOfClasses = [
    { title: "Offline Classes" },
    { title: "Online Live Classes" },
    { title: "Experiential Learning" },
    { title: "Self Paced" },
  ];

  const statisticsData = [
    {
      number: `${countDetails?.response?.allPlacedCount}+`,
      text: "Student placed",
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
  const [btnState, setBtnState] = useState(courseDetails?.mode[0]);

  const [isRightBarFixed, setIsRightBarFixed] = useState(false);

  const handleRightBarFix = (fixed) => {
    setIsRightBarFixed(fixed);
  };

  return (
    <>
      <MaxWebWidth
        sectionStyling=" max-w-full overflow-hidden sm:courseBackgroundwave mobile:courseBackgroundGradient"
        articalStyling="relative"
      >
        <aside className="flex pt-[6.944vh] justify-between mobile:pt-[3.433vh]">
          <article className="w-[87.5vw] mobile:w-[92.558vw] flex flex-col">
            <div className="flex justify-between mobile:hidden">
              <div className="bg-white flex w-fit classTypes">
                {courseDetails?.mode?.map((classItem, index) => (
                  <button
                    key={index}
                    className={`flex justify-center items-center px-[1.25vw] py-[1.111vh] font-medium text-[0.938vw] text-dark-gray ${classItem === btnState ? "activecourseButton" : ""
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
            <div className="py-[1.389vh] flex gap-6 items-center mobile:hidden">
              <h1
                title={courseDetails?.courseName}
                className="font-medium text-left text-[3.75vw] flex"
              >
                {courseDetails?.courseName}

              </h1>
            </div>
            <section className="flex justify-between mobile:flex-col-reverse">
              <div className="w-[55.469vw] mobile:w-full">
                <div className="pb-[5.556vh] mobile:pb-[2.575vh]">
                  <p className="headerText text-left mobile:text-[2.791vw] text-[1.563vw] sm:leading-[1.875rem] sm:pt-[0.833vh]">
                    {courseDetails?.courseSummary}
                  </p>
                </div>
                <article className="flex sm:pb-[5.556vh] mobile:flex-wrap">
                  {statisticsData.map((ele, index) => (
                    <div key={index} className="courseStats mobile:w-[50%] mobile:pb-[2.146vh]">
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
                <article className="pb-[2.778vh] mobile:pt-[1.288vh]">
                  {resources?.map((resource, index) => (
                    <div
                      key={index}
                      className="flex text-left gap-4  items-center  pb-[2.778vh] mobile:pb-[1.073vh]  text-ash"
                    >
                      <figure>
                        <img src={imageSrc} alt={`resource-${index}`} />
                      </figure>
                      <article>
                        <p className="text-[0.938vw] mobile:text-[2.791vw]">{resource}</p>
                      </article>
                    </div>
                  ))}
                </article>
                <section className="flex gap-6 pb-[7.222vh] mobile:pb-[2.79vh]">
                  <button className="EnrollButton text-[1.25vw] mobile:text-[3.721vw] font-semibold py-[1.389vh] px-[1.875vw]">
                    Enroll For Demo Class
                  </button>
                  {/* <button className="EnquireButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
                    <span>Know more</span>
                  </button> */}
                </section>
              </div>
              <div>
                <img
                  src={courseDetails?.courseImage}
                  className="w-[28.125vw] h-[60.417vh] sm:mb-[2.222vh] mobile:w-full mobile:h-[26.18vh] mobile:pb-[3.219vh]"
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
