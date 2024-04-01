"use client";
import React, { useState } from "react";
import './navitems.scss'
const Tutions = () => {
  const courses = [
    {
      icon: "/softwareArchIcon.svg",
      title: "BE",
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/WebTechnologies.svg",
          title: "Web Technologies",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/RDBMS.svg",
          title: "RDBMS",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/Operatingsystem.svg",
          title: "Operatingsystem",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },{
          image: "/Networking.svg",
          title: "Networking",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/Mathematics.svg",
          title: "Mathematics",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },{
          image: "/cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },{
          image: "/advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/securityTechArchitect.svg",
          title: "Security Test Architect",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/advanceDataStructure.svg",
          title: "Advance Data Structure",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }
      ]
    },
    {
      icon: "/softwaredevicon.svg",
      title: "BCA",
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },{
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }
      ]
    },
    {
      icon: "/softwareTestingIcon.svg",
      title: "BSc",
      arrow: "/arrowIconDark.svg",
      sublist:[
        {
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },{
          image: "/networksupport.svg",
          title: "Software Architecture",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          image: "/technicalsupport.svg",
          title: "Software Development",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }
      ]
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
    <div className="p-3 flex md:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1500px]  lg:h-[500px] overflow-auto myscrollbar">
      <div className={`bg-gradient-to-b from-muted/50 to-muted p-2 xl:w-[17%] 2xl:w-[11%] `}>
        {courses.map((courseItem, index) => (
          <div
            key={index}
            className="flex"
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
      <div className="xl:w-[83%] 2xl:w-[89%] flex">
        {hoveredIndex !== null && courses[hoveredIndex]?.list && (
          <div className="xl:w-[41%] 2xl:w-[26%] bg-gradient-to-b from-muted/50 to-muted p-2">
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
        <div className={`${(hoveredIndex !== null && courses[hoveredIndex]?.list) ? 'courselist'  : 'coursefull'}   flex flex-wrap p-2`}>
          {(courses[hoveredIndex] ?? courses[0])?.sublist?.map((content, index) => (
            <div key={index} className={`${(hoveredIndex !== null && courses[hoveredIndex]?.list) ? 'courseMedium' : 'courseinitial'} 2xl:w-[33%] p-5`}>
              <div className="flex h-10 gap-1.5">
                <img className="h-10 w-10 " src={content.image} />
                <h3 className="text-left h-10 text-sm font-bold">{content.title}</h3>
              </div>
              <div>
                <article className=" text-sm">{content.description}</article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutions;
