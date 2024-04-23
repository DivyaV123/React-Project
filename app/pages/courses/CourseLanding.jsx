import React from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./CourseLanding.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const CourseLanding = () => {
  const typesOfClasses = [
    {
      title: "Offline Classes",
      // width:'w-[9.6vw]'
    },
    {
      title: "Online Live Classes",
      // width:'w-[11.48vw]'
    },
    {
      title: "Experiential Learning",
      // ,width:'w-[12.18vw]'
    },
    {
      title: "Self Paced",
      // ,width:'w-[7.42vw]'
    },
  ];
  return (
    <MaxWebWidth
      sectionStyling=" bg-coursegradient max-w-full overflow-hidden"
      articalStyling="relative"
    >
      <aside className="flex py-8 h-[87vh]">
        <article className="w-[51.56vw] flex flex-col">
          <div className="buttonContainer flex w-fit">
            {typesOfClasses.map((classItem, index) => (
              <button key={index} className={`courseButton ${classItem.width}`}>
                {classItem.title}
              </button>
            ))}
          </div>
          <div className="py-4 flex gap-6 items-center">
            <h1 className="courseName">Software Testing</h1>
            <button className="ratingButton">
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
            <p className="courseDescription">
              Explore the dynamic world of software testing with our
              comprehensive course.
            </p>
          </div>
          <article className="flex">
            <div className="statistics">
              <h1>25,000+</h1>
              <p>student placed</p>
            </div>
            <div className="statistics">
              <h1>180+</h1>
              <p>Hiring Companies</p>
            </div>
            <div className="statistics">
              <h1>10,000+</h1>
              <p>Non IT Students placed</p>
            </div>
            <div className="statistics">
              <h1>15,000+</h1>
              <p>IT Students placed</p>
            </div>
          </article>
          <article>
            <div className="resourceBlock">
              <figure>
                <img src="../illustrate_tickmark.svg"/>
              </figure>
              <article>
                <p>
                  Enhance skills with extensive learning resources surpassing
                  certification standards.
                </p>
              </article>
            </div>
            <div className="resourceBlock">
              <figure>
                <img src="../illustrate_tickmark.svg"/>
              </figure>
              <article>
                <p>
                  Attain the Azure Administrator credential for increased
                  earning potential and career growth.
                </p>
              </article>
            </div>
            <div className="resourceBlock">
              <figure>
                <img src="../illustrate_tickmark.svg"/>
              </figure>
              <article>
                <p>
                  Access knowledge beyond certification to excel in your role
                  and stand out in the job market.
                </p>
              </article>
            </div>
          </article>
          <section className="flex gap-6 py-4">
            <button className="EnrollButton">Enroll now</button>
            <button className="EnquireButton">Enquire now</button>
          </section>
        </article>
        <figure className="w-[35.93vw] flex justify-end items-center">
          <img
            className="w-[62vh] float-right"
            src="../courseLanding.png"
            alt="courseLanding"
          ></img>
        </figure>
      </aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
