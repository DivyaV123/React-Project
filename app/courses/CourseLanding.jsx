import React, { useContext, useEffect, useState } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useGetAllCourseDetailsQuery } from "@/redux/queries/getCoursedetails";
import { GlobalContext } from "@/components/Context/GlobalContext";

const CourseLanding = ({ page }) => {
  const { selectedCourseDetailsId } = useContext(GlobalContext);
  const { data: courseDetails, error, isLoading, refetch } = useGetAllCourseDetailsQuery(selectedCourseDetailsId)
  console.log(courseDetails, "courseDEtailscourseDEtailscourseDEtails")
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

  const tutionClasses =
    page === "tution" ? typesOfClasses.slice(2, 4) : typesOfClasses;
  const statisticsData = [
    { number: "25,000+", text: "Students placed" },
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

  const [btnState, setBtnState] = useState(
    page === "tution" ? "Experiential Learning" : "Offline Classes"
  );

  useEffect(() => {
    refetch()

  }, [selectedCourseDetailsId])

  return (
    <MaxWebWidth
      sectionStyling=" max-w-full overflow-hidden courseBackgroundwave "
      articalStyling="relative"
    >
      <aside className="flex pt-[6.944vh]  justify-between">
        <article className="w-[51.56vw] flex flex-col ">
          <div className="bg-white  flex w-fit classTypes">
            {tutionClasses.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center px-[1.25vw] py-[1.111vh] font-medium text-[0.938vw] text-dark-gray ${classItem.title === btnState ? "activecourseButton" : ""
                  } `}
                onClick={() => {
                  setBtnState(classItem.title);
                }}
              >
                {classItem.title}
              </button>
            ))}
          </div>
          <div className="py-[1.389vh] flex gap-6 items-center">
            <h1 className="font-bold text-left text-[3.75vw]">
              {courseDetails?.data?.courseName}
            </h1>
            <button className="ratingButton flex justify-center items-center py-2 px-4 font-semibold rounded text-ash">
              <span className="flex text-[1.25vw] py-[0.556vh] px-[0.313vw]">
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
          <div className="pb-[5.556vh]">
            <p className="headerText text-left font-medium text-[1.563vw] leading-[1.875rem]">
              Explore the dynamic world of software testing with our
              comprehensive course.
            </p>
          </div>
          <article className="flex pb-[5.556vh]">
            {statisticsData.map((ele, index) => (
              <div key={index} className=" ">
                <h1 className={`text-left font-bold text-[1.875vw]  pb-[0.556vh] headerText ${ele.number !== "15,000+" ? "pr-[2.5vw]" : ""}`}>
                  {ele.number}
                </h1>
                <p className={`text-left font-medium text-[1.094vw]  headerText ${ele.text !== "IT Students placed" ? "pr-[2.5vw]" : ""}`}>
                  {ele.text}
                </p>
              </div>
            ))}
          </article>
          <article className="pb-[2.778vh]">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex text-left gap-4  text-[0.938vw] items-center leading-[1rem] pb-[2.778vh] font-semibold text-ash"
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
            <button className="EnquireButton  text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
              <span>Know more</span>
            </button>
          </section>
        </article>
      </aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
