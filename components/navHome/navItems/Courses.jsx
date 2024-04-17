"use client";
import React, { useState } from "react";
import "./navitems.scss";
const Courses = () => {
  const courses = [
    {
      icon: "/softwareArchIcon.svg",
      title: "Software Architecture",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/performanceTest.svg",
          title: "Performance Test Architect",
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
      title: "Software Development",
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
      icon: "/softwareTestingIcon.svg",
      title: "Software Testing",
      list: [
        {
          icon: "/email.svg",
          title: "Software Testing Master Course",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Automation With Selenium",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Advance Test Automation - SDET",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Automation Architect",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Performance Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Web Service / API Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Mobile App Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Security Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Manual Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Specialised Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "Domain Testing",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "/email.svg",
          title: "ISTQB Testing",
          arrow: "/arrowIconDark.svg",
        },
      ],
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
      title: "Devops",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/dataScienceIcon.svg",
      title: "DevOps",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/aimlIcon.svg",
      title: "Cloud Computing",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/cyberSecurityIcon.svg",
      title: "Data Science",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/bankingIcon.svg",
      title: "AI/ML",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/projectManagementIcon.svg",
      title: "Cyber Security",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/agileScrumIcon.svg",
      title: "Banking",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/supportIcon.svg",
      title: "Project Management",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/abroadStudiesICon.svg",
      title: "Agile Scrum",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/email.svg",
      title: "Support",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/email.svg",
      title: "Abroad Studies",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/email.svg",
      title: "HR",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/email.svg",
      title: "SAP",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "/email.svg",
      title: "Salesforce",
      arrow: "/arrowIconDark.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar ">
      <div className="menuSidebar pt-2  xl:w-[17.75vw] 2xl:w-[13.75vw]  3xl:w-[10.75vw] ">
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex menuItem pl-4 pr-2"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img src={courseItem.arrow} className={`${hoveredIndex === index ? 'visible' : 'invisible'} w-4`} />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[63.34vw] 2xl:w-[67.34vw] 3xl:w-[70.34vw] flex ">
        {hoveredIndex !== null && courses[hoveredIndex].list && (
          <div className="xl:w-[20vw] 2xl:w-[17vw]  3xl:w-[12.9vw]  pt-2 menuSidebar">
            {courses[hoveredIndex].list.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between grow pl-2 menuItem pr-2"
                onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                onMouseLeave={() => {}}
              >
                <img src={item.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-sm">{item.title}</button>
                  <img src={item.arrow} className={`${hoveredItemIndex === itemIndex ? 'visible' : 'invisible'} w-4`} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${
            hoveredIndex !== null && courses[hoveredIndex].list
              ? "courselist pl-4 pt-2"
              : "coursefull p-3"
          }   flex flex-wrap  h-fit gap-4 `}
        >
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map(
            (content, index) => (
              <div
                key={index}
                className={`${
                  hoveredIndex !== null && courses[hoveredIndex].list
                    ? "courseMedium"
                    : "courseinitial"
                }  p-2 branchOverlay h-fit`}
              >
                <div className="flex h-10 gap-1.5 ">
                  <img className="h-8 w-8" src={content.image} />
                  <h3 className="text-left h-8 text-sm font-bold items-center flex">
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

export default Courses;
