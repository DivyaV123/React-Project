import React, { useState } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";

const CourseLanding = ({ page }) => {
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

  return (
    <MaxWebWidth
      sectionStyling="bg-coursegradient max-w-full overflow-hidden"
      articalStyling="relative"
    >
      <aside className="flex py-8  justify-between">
        <article className="w-[51.56vw] flex flex-col py-4">
          <div className="bg-white h-[2.65vw] flex w-fit">
            {tutionClasses.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center px-4 py-2 font-medium text-[0.75rem] text-dark-gray ${
                  classItem.title === btnState ? "activecourseButton" : ""
                } `}
                onClick={() => {
                  setBtnState(classItem.title);
                }}
              >
                {classItem.title}
              </button>
            ))}
          </div>
          <div className="py-4 flex gap-6 items-center">
            <h1 className="font-bold leading-[4.5rem]  text-left text-[3rem]">
              Software Testing
            </h1>
            <button className="ratingButton flex justify-center items-center py-2 px-4 font-semibold rounded text-ash">
              <span className="flex text-base p-1">
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
          <div className="pb-6">
            <p className="headerText text-left font-medium text-xl leading-[1.875rem]">
              Explore the dynamic world of software testing with our
              comprehensive course.
            </p>
          </div>
          <article className="flex pb-8">
            {statisticsData.map((ele, index) => (
              <div key={index} className=" pr-8">
                <h1 className="text-left font-bold text-[1.5rem] leading-[2.25rem] pb-2 headerText">
                  {ele.number}
                </h1>
                <p className="text-left font-medium text-[0.875rem] leading-[1.25rem] headerText">
                  {ele.text}
                </p>
              </div>
            ))}
          </article>
          <article className="pb-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex text-left gap-4  text-[0.75rem] items-center leading-[1rem] pb-4 font-semibold text-ash"
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
          <section className="flex gap-6 pb-4">
            <button className="EnrollButton text-base font-semibold py-2.5 px-6">
              Enroll now
            </button>
            <button className="EnquireButton  text-base font-semibold py-2.5 px-6 relative">
              <span>Enquire now</span>
            </button>
          </section>
        </article>
      </aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
