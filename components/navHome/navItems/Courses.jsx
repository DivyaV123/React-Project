"use client";
import React, { useContext, useEffect, useState } from "react";
import './navitems.scss'
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { COURSE_PATH } from "@/lib/RouteConstants";
import Link from "next/link";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { GlobalContext } from "@/components/Context/GlobalContext";
const Courses = () => {
  const { setSelectedCoursDetailseId } = useContext(GlobalContext);
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
  const { data: response, isLoading, error } = useGetAllCategoriesQuery();
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState(0);
  const [hoveredSubCourseIndex, setHoveredSubCourseIndex] = useState(0);
  const [activeResponses, setActiveResponses] = useState([]);
  console.log(setSelectedCoursDetailseId, "setSelectedCoursDetailseId")
  const handleCourseHover = (courseIndex, courseResponses) => {
    setHoveredCourseIndex(courseIndex);
    setHoveredSubCourseIndex(0); // Reset sub-course hover
    setActiveResponses(courseResponses); // Set default course responses
  };

  const handleSubCourseHover = (subCourseIndex, subCourseResponses) => {
    setHoveredSubCourseIndex(subCourseIndex);
    setActiveResponses(subCourseResponses); // Set sub-course responses on hover
  };

  const handleSubCourseLeave = () => {
    setHoveredSubCourseIndex(0);
    if (hoveredCourseIndex !== null) {
      // Reset to course responses if a course is still hovered
      setActiveResponses(response?.data[hoveredCourseIndex]?.courseResponse || []);
    }
  };

  return (
    <div className="flex w-[81.09vw] lg:h-[500px] overflow-auto myscrollbar">
      <div className="menuSidebar pt-2 xl:w-[18.75vw] 2xl:w-[14.75vw] 3xl:w-[11.75vw]">
        {response?.data?.map((courseItem, courseIndex) => (
          <div
            key={courseIndex}
            onMouseEnter={() => handleCourseHover(courseIndex, courseItem.courseResponse)}
            className={`flex ${hoveredCourseIndex === courseIndex ? 'menuItem' : 'menuItemdisable'} pl-4 pr-2 items-center`}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img src='/arrowIconDark.svg' className={`${hoveredCourseIndex === courseIndex ? 'visible' : 'invisible'} w-4`} />
            </div>
          </div>
        ))}
      </div>

      <div className="xl:w-[62.34vw] 2xl:w-[66.34vw] 3xl:w-[70.34vw] flex">
        {hoveredCourseIndex !== null && response?.data[hoveredCourseIndex]?.subCourse?.length !== 0 && (
          <div className="xl:w-[20.31vw] 2xl:w-[18.5vw] 3xl:w-[13.6vw] pt-2 menuSidebar">
            {response?.data[hoveredCourseIndex]?.subCourse?.map((subCourseItem, subCourseIndex) => (
              <div
                key={subCourseIndex}
                className={`flex justify-between grow pl-2 ${hoveredSubCourseIndex === subCourseIndex ? 'menuItem' : 'menuItemdisable'} pr-2 items-center`}
                onMouseEnter={() => handleSubCourseHover(subCourseIndex, subCourseItem.subCourseResponse)}
                onMouseLeave={handleSubCourseLeave}
              >
                <img src={subCourseItem.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-sm">{subCourseItem.title}</button>
                  <img src='/arrowIconDark.svg' className={`${hoveredSubCourseIndex === subCourseIndex ? 'visible' : 'invisible'} w-4`} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`${hoveredCourseIndex !== null && activeResponses.length
          ? "courselist pl-4 pt-2"
          : "coursefull p-3"
          } flex flex-wrap h-fit gap-4`}>
          {activeResponses.map((content, index) => (
            <Link href={`${COURSE_PATH}`} key={index}>
              {console.log(content, "content from click")}
              <div
                onClick={() => { setSelectedCoursDetailseId(content.courseResponseId) }}
                className={`${hoveredCourseIndex !== null && activeResponses.length
                  ? "courseMedium"
                  : "courseinitial"
                  } p-2 branchOverlay h-fit`}>
                <div className="flex h-10 gap-1.5">
                  <img className="h-8 w-8" src={content.icon} />
                  <h3 className="text-left h-8 text-sm font-bold items-center flex">
                    {content.title}
                  </h3>
                </div>
                <div>
                  <article title={content.description} className="text-sm titleText">{content.description.length > 85 ? content.description.substring(0, 85) + '...' : content.description}</article>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Courses;
