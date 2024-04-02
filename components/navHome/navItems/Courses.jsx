"use client";
import React, { useState } from "react";
import './navitems.scss'
const Courses = () => {
  const courses = [
    {
      icon: "/softwareArchIcon.svg",
      title: "Software Architecture",
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/systemDesign.svg",
          title: "System Design for Architects",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/uiDesign.svg",
          title: "ui Design for Architects",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/testAutomation.svg",
          title: "Test Automation Architect",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/performanceTest.svg",
          title: "Performance Test Architect",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/securityTechArchitect.svg",
          title: "Security Test Architect",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/advanceDataStructure.svg",
          title: "Advance Data Structure",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        }
      ]
    },
    {
      icon: "/softwaredevicon.svg",
      title: "Software Development",
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        }, {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        }
      ]
    },
    {
      icon: "/softwareTestingIcon.svg",
      title: "Software Testing",
      list: [
        { icon: "/email.svg", title: "Software Testing Master Course", arrow: "/arrowIconDark.svg"},
        { icon: "/email.svg", title: "Automation With Selenium", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Advance Test Automation - SDET", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Automation Architect", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Performance Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Web Service / API Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Mobile App Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Security Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Manual Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Specialised Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "Domain Testing", arrow: "/arrowIconDark.svg" },
        { icon: "/email.svg", title: "ISTQB Testing", arrow: "/arrowIconDark.svg" },
      ],
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },{
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet,to the adipisicing elit.",
        }
      ]
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
    },{
      icon: "/email.svg",
      title: "Support",
      arrow: "/arrowIconDark.svg",
    },{
      icon: "/email.svg",
      title: "Abroad Studies",
      arrow: "/arrowIconDark.svg",
    },{
      icon: "/email.svg",
      title: "HR",
      arrow: "/arrowIconDark.svg",
    },{
      icon: "/email.svg",
      title: "SAP",
      arrow: "/arrowIconDark.svg",
    },{
      icon: "/email.svg",
      title: "Salesforce",
      arrow: "/arrowIconDark.svg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="p-3 flex md:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1500px]  lg:h-[500px] overflow-auto myscrollbar ">
      <div className={`bg-gradient-to-b from-muted/50 to-muted p-2 xl:w-[23%] 2xl:w-[17%] `}>
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-xs">{courseItem.title}</button>
              <img src={courseItem.arrow} className="w-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[77%] 2xl:w-[83%] flex">
        {hoveredIndex !== null && courses[hoveredIndex].list && (
          <div className="xl:w-[41%] 2xl:w-[26%] bg-gradient-to-b from-muted/50 to-muted p-2">
            {courses[hoveredIndex].list.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex justify-between grow"
                onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                onMouseLeave={() => {}}
              >
                <img src={item.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-xs">{item.title}</button>
                  <img src={item.arrow} className="w-4" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`${(hoveredIndex !== null && courses[hoveredIndex].list) ? 'courselist'  : 'coursefull'}   flex flex-wrap p-2`}>
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map((content, index) => (
            <div key={index} className={`${(hoveredIndex !== null && courses[hoveredIndex].list) ? 'courseMedium' : 'courseinitial'} 2xl:w-[33%] p-2 branchOverlay h-fit`}>
              <div className="flex h-10 gap-1.5 ">
                <img className="h-10 w-10 " src={content.image} />
                <h3 className="text-left h-10 text-xs font-bold items-center">{content.title}</h3>
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
