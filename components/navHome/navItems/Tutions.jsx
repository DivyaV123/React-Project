"use client";
import React, { useState } from "react";
import "./navitems.scss";
const Tutions = () => {
  const courses = [
    {
      icon: "/softwareArchIcon.svg",
      title: "BE",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/WebTechnologies.svg",
          title: "Web Technologies",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/RDBMS.svg",
          title: "RDBMS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Operatingsystem.svg",
          title: "Operatingsystem",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Networking.svg",
          title: "Networking",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Mathematics.svg",
          title: "Mathematics",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
      ],
    },
    {
      icon: "/softwaredevicon.svg",
      title: "BCA",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/WebTechnologies.svg",
          title: "Web Technologies",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/RDBMS.svg",
          title: "RDBMS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Operatingsystem.svg",
          title: "Operatingsystem",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Networking.svg",
          title: "Networking",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/Mathematics.svg",
          title: "Mathematics",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        ,
        {
          image: "/cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
      ],
    },
    {
      icon: "/softwareTestingIcon.svg",
      title: "BSc",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
      ],
    },
    {
      icon: "/cloudComputingIcon.svg",
      title: "BBM",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/dataScienceIcon.svg",
      title: "M Tech",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/aimlIcon.svg",
      title: "MCA",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/cyberSecurityIcon.svg",
      title: "MSc",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/bankingIcon.svg",
      title: "Diploma",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/projectManagementIcon.svg",
      title: "12th",
      arrow: "/arrowIconDark.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar">
      <div
        className={`menuSidebar pt-4 pl-3 xl:w-[17.75vw] 2xl:w-[13.75vw]  3xl:w-[10.75vw] `}
      >
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex menuItem "
            onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => setHoveredIndex()}
          >
            {/* <img src={courseItem.icon} /> */}
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img src={courseItem.arrow} className="w-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[63.34vw] 2xl:w-[67.34vw] 3xl:w-[70.34vw] flex p-4">
        {hoveredIndex !== null && courses[hoveredIndex]?.list && (
          <div className="xl:w-[17.75vw] 2xl:w-[14.75vw]  3xl:w-[11.75vw] ">
            {courses[hoveredIndex]?.list?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between grow"
                onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                onMouseLeave={() => {}}
              >
                <img src={item.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-sm">{item.title}</button>
                  <img src={item.arrow} className="w-4" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${
            hoveredIndex !== null && courses[hoveredIndex]?.list
              ? "courselist pl-4"
              : "coursefull"
          }   flex flex-wrap  h-fit gap-4 `}
        >
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map(
            (content, index) => (
              <div
                key={index}
                className={`${
                  hoveredIndex !== null && courses[hoveredIndex]?.list
                    ? "courseMedium"
                    : "courseinitial"
                }  p-2 branchOverlay h-fit`}
              >
                <div className="flex h-10 gap-1.5">
                  <img className="h-10 w-10 " src={content.image} />
                  <h3 className="text-left h-10 text-sm font-bold flex items-center">
                    {content.title}
                  </h3>
                </div>
                <div>
                  <article className=" text-sm titleText">{content.description}</article>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutions;
