"use client";
import React, { useState } from "react";
import './navitems.scss'
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const Courses = () => {
  const courses = [
    {
      icon: "softwareArchIcon",
      title: "Software Architecture",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/systemDesign.svg",
          title: "System Design for Architects",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/uiDesign.svg",
          title: "ui Design for Architects",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/testAutomation.svg",
          title: "Test Automation Architect",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/performanceTest.svg",
          title: "Performance Test Architect",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/securityTechArchitect.svg",
          title: "Security Test Architect",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/advanceDataStructure.svg",
          title: "Advance Data Structure",
          description: "Software testing course is more of job oriented training which is designed",
        }
      ]
    },
    {
      icon: "softwaredevicon",
      title: "Software Development",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }
      ]
    },
    {
      icon: "softwareTestingIcon",
      title: "Software Testing",
      list: [
        { icon: "emailIcon", title: "Software Testing Master Course", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Automation With Selenium", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Advance Test Automation - SDET", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Automation Architect", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Performance Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Web Service / API Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Mobile App Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Security Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Manual Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Specialised Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "Domain Testing", arrow: "/arrowIconDark.svg" },
        { icon: "emailIcon", title: "ISTQB Testing", arrow: "/arrowIconDark.svg" },
      ],
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }, {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Software testing course is more of job oriented training which is designed",
        }
      ]
    },
    {
      icon: "cloudComputingIcon",
      title: "Devops",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "dataScienceIcon",
      title: "DevOps",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "aimlIcon",
      title: "Cloud Computing",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "cyberSecurityIcon",
      title: "Data Science",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "bankingIcon",
      title: "AI/ML",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "projectManagementIcon",
      title: "Cyber Security",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "agileScrumIcon",
      title: "Banking",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "supportIcon",
      title: "Project Management",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "abroadStudiesICon",
      title: "Agile Scrum",
      arrow: "/arrowIconDark.svg",
    }, {
      icon: "emailIcon",
      title: "Support",
      arrow: "/arrowIconDark.svg",
    }, {
      icon: "emailIcon",
      title: "Abroad Studies",
      arrow: "/arrowIconDark.svg",
    }, {
      icon: "emailIcon",
      title: "HR",
      arrow: "/arrowIconDark.svg",
    }, {
      icon: "emailIcon",
      title: "SAP",
      arrow: "/arrowIconDark.svg",
    }, {
      icon: "emailIcon",
      title: "Salesforce",
      arrow: "/arrowIconDark.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar ">
      <div className="bg-gradient-to-b from-muted/50 to-muted pt-3 pl-3  xl:w-[17.75vw] 2xl:w-[13.75vw]  3xl:w-[10.75vw] ">
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            {console.log(svgicons[courseItem?.icon], courseItem?.icon, "courseItem?.icon")}
            {/* <img src={courseItem.icon} /> */}
            <Svg
              width={svgicons[courseItem?.icon][0]}
              height={svgicons[courseItem?.icon][1]}
              viewBox={svgicons[courseItem?.icon][2]}
              icon={svgicons[courseItem?.icon][3]}
            />
            <div className="flex justify-between grow">
              <button className="p-2 text-xs">{courseItem.title}</button>
              <img src={courseItem.arrow} className="w-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[63.34vw] 2xl:w-[67.34vw] 3xl:w-[70.34vw] flex p-4">
        {hoveredIndex !== null && courses[hoveredIndex].list && (
          <div className="xl:w-[17.75vw] 2xl:w-[14.75vw]  3xl:w-[11.75vw] bg-gradient-to-b from-muted/50 to-muted ">
            {courses[hoveredIndex].list.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between grow"
                onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                onMouseLeave={() => { }}
              >
                {/* <img src={item.icon} /> */}
                <Svg
                  width={svgicons[item?.icon][0]}
                  height={svgicons[item?.icon][1]}
                  viewBox={svgicons[item?.icon][2]}
                  icon={svgicons[item?.icon][3]}
                />
                <div className="flex justify-between grow">
                  <button className="p-2 text-xs">{item.title}</button>
                  <img src={item.arrow} className="w-4" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`${(hoveredIndex !== null && courses[hoveredIndex].list) ? 'courselist pl-4' : 'coursefull'}   flex flex-wrap  h-fit gap-4`}>
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map((content, index) => (
            <div key={index} className={`${(hoveredIndex !== null && courses[hoveredIndex].list) ? 'courseMedium' : 'courseinitial'}  p-2 branchOverlay h-fit`}>
              <div className="flex h-10 gap-1.5 ">
                <img className="h-10 w-10 " src={content.image} />
                <h3 className="text-left h-10 text-xs font-bold items-center flex">{content.title}</h3>
              </div>
              <div>
                <article className=" text-xs">{content.description}</article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
