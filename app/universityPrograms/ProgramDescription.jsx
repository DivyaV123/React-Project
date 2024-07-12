import React, { useState } from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import "./programDescription.scss";
import "@/components/commonComponents/courseCard/courseCard.scss";
import "@/components/ui/button.scss";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import EnrollPopUp from "@/components/commonComponents/courseCard/EnrollPopUp";
import { object } from "yup";
const ProgramDescription = ({
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
  const reasonToChoose = [
    {
      icon: '../illustrate_tickmark.svg',
      text: "Flexible learning schedule"
    },
    {
      icon: '../illustrate_tickmark.svg',
      text: "Real-life projects and practical exposure"
    },
    {
      icon: '../illustrate_tickmark.svg',
      text: "Alumni network of 40,000 members"
    },
    {
      icon: '../illustrate_tickmark.svg',
      text: "Save up to INR 27Lacks compare to full-time master's"
    },
    {
      icon: '../illustrate_tickmark.svg',
      text: "Learn with students from 80+ Countries"
    },
    {
      icon: '../illustrate_tickmark.svg',
      text: "Dedicated Program Manager"
    }
  ];
  return (
    <>
      <MaxWebWidth
        sectionStyling=" max-w-full programDescription overflow-hidden  sm:courseBackgroundwave mobile:courseBackgroundGradient"
        articalStyling="relative"
      >
        <aside className="flex  pt-[6.944vh] justify-between mobile:pt-[3.433vh]">
          <article className="w-[87.5vw] mobile:w-[92.558vw] flex flex-col">
            <div className="flex justify-between mobile:hidden">
              <div className="flex w-fit unvName">
                Masters in USA in Carnegie Mellon University
              </div>
            </div>
            <div className="py-[1.389vh] flex gap-6 items-center mobile:hidden">
              <h1
                title={courseDetails?.courseName}
                className="font-bold text-left text-[3vw] flex"
              >
                {courseDetails?.courseName}
              </h1>
            </div>
            <section className="flex justify-between mobile:flex-col-reverse">
              <div className="w-[55.469vw] mobile:w-full">
                {/* <div className="pb-[5.556vh] mobile:pb-[2.575vh]">
                  <p className="headerText text-left mobile:text-[2.791vw] text-[1.563vw] sm:leading-[1.875rem] sm:pt-[0.833vh]">
                    {courseDetails?.courseSummary}
                  </p>
                </div> */}
                {/* <article className="flex sm:pb-[5.556vh] mobile:flex-wrap">
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
                </article> */}
                <article className="pb-[2.778vh] mobile:pt-[1.288vh]">
                  {resources?.map((resource, index) => (
                    <div
                      key={index}
                      className="flex text-left gap-4  items-center  pb-[2.778vh] mobile:pb-[1.073vh]  text-ash"
                    >
                      <figure>
                        <Image
                          style={{ objectFit: 'cover' }}
                          width={300}
                          height={400}
                          src={imageSrc}
                          alt={`resource-${index}`} />
                      </figure>
                      <article>
                        <p className="text-[1vw] font-semibold mobile:text-[2.791vw]">
                          {resource}
                        </p>
                      </article>
                    </div>
                  ))}
                </article>
                <div className="pb-[5.556vh] mobile:pb-[2.575vh]">
                  <p className="headerText text-left mobile:text-[2.791vw] text-[1.263vw] sm:leading-[1.875rem] sm:pt-[0.833vh]">
                    {courseDetails?.courseSummary}
                  </p>
                </div>
                <section className="flex gap-6 pb-[7.222vh] mobile:pb-[2.79vh]">
                  <button
                    onClick={() => handleCardClick()}
                    className="EnrollButton text-[1.25vw] mobile:text-[3.721vw] font-semibold py-[1.389vh] px-[1.875vw]"
                  >
                    Apply now
                  </button>
                  <button className="EnquireButton text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
                    <span>Get a call back</span>
                  </button>
                </section>
              </div>
              <div>
                <Image
                  style={{ objectFit: 'cover' }}
                  src={courseDetails?.courseImage}
                  className="w-[28.125vw] h-[60.417vh] sm:mb-[2.222vh] mobile:w-full mobile:h-[26.18vh] mobile:pb-[3.219vh]"
                  alt="CourseImage"
                />
              </div>
            </section>
          </article>

        </aside>
      </MaxWebWidth>
      <article className="courseTiming w-full">
        <div className=" mobile:w-[92.558vw] m-auto flex w-[87.5vw] h-[19.444vh] mt-[5.556vh] courseTime justify-evenly items-center">
          <section className="w-[22.166vw] h-[11.111vh] flex flex-col justify-center border-r-4 border-orange-500">
            <label className="text-[1.1vw] w-[12vw] flex justify-center font-semibold">Learning Format</label>
            <p className="text-[1.363vw] text-orange-600 font-bold">Online Bootcamp</p>
          </section>
          <section className="w-[22.166vw] h-[11.111vh] flex flex-col justify-center border-r-4 border-orange-500">
            {" "}
            <label className="text-[1.1vw] w-[8vw]  text-nowrap flex justify-center font-semibold">Program Duration</label>
            <p className="text-[1.363vw] text-orange-600 font-bold">11 months</p>
          </section>
          <section className="">
            {" "}
            <label className="text-[1.1vw] font-semibold">Starting Date</label>
            <p className="text-[1.363vw] text-orange-600 font-bold">6 july,2024</p>
          </section>
        </div>
      </article>

      <article className="reasonToChoose w-full">
        <section className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
          <header className="text-[2.5vw] mt-[5.556vh] flex font-bold  justify-center">Why Choose this Master’s in Human Computer Interaction ?</header>
          <div className="flex flex-wrap justify-center gap-8 p-4 mt-[4vh]">
            {reasonToChoose.map((item, index) => (
              <div key={index} className="flex items-center gap-4 w-[34vw]">
                <img src={item.icon} alt={item.text} width={24} height={24} />
                <span className="text-[#575757] text-[1.2vw] font-semibold text-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

      </article>
      <article className="ProgramCurriculum w-full">
        <section className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
          <header className="text-[2.5vw]  flex font-bold  justify-start mt-[6.111vh]">Program Curriculum</header>
          <p className="text-[1.094vw] mt-[2vh] text-[#575757] font-medium">
            In collaboration with Clark University, this comprehensive MSCS hybrid program, Master of Science in Computer Science, is perfect for both fresh graduates and experienced professionals to build a successful career in tech. Complete your online courses and then get on-campus immersion in the USA, enabling you to gain the full benefit of the Clark University student experience and U.S. job opportunities. Get your MS in Computer Science from Clark University and join its global alumni network.
          </p>
          <button className="EnquireButton mt-[5vh] mb-[2vh] text-[1.25vw] font-semibold py-[1.389vh] px-[1.875vw] relative">
            <span>Download Curriculum</span>
          </button>
        </section>

      </article>
      {/* <ImageScroller cardData={courseDetails} onRightBarFix={handleRightBarFix} isRightBarFixed={isRightBarFixed} /> */}
      {/* <EnrollPopUp isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} /> */}
    </>
  );
};

export default ProgramDescription;
