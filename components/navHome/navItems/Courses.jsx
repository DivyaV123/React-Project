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
  const { data: response, isLoading, error } = useGetAllCategoriesQuery();
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState(0);
  const [hoveredSubCourseIndex, setHoveredSubCourseIndex] = useState(0);
  const [activeResponses, setActiveResponses] = useState([]);

  const handleCourseHover = (courseIndex, courseResponses) => {
    setHoveredCourseIndex(courseIndex);
    setHoveredSubCourseIndex(null); // Reset sub-course hover
    setActiveResponses(courseResponses || []); // Set default course responses
  };

  const handleSubCourseHover = (subCourseIndex, subCourseResponses) => {
    setHoveredSubCourseIndex(subCourseIndex);
    setActiveResponses(subCourseResponses || []); // Set sub-course responses on hover
  };

  const handleSubCourseLeave = () => {
    setHoveredSubCourseIndex(null);
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
            <Link href={`/courses/${content.courseResponseId}`} key={index}>
              <div className={`${hoveredCourseIndex !== null && activeResponses.length ? "courseMedium" : "courseinitial"} p-2 branchOverlay h-fit`}>
                <div className="flex h-10 gap-1.5">
                  <img className="h-8 w-8" src={content.icon} />
                  <h3 className="text-left h-8 text-sm font-bold items-center flex">
                    {content.title}
                  </h3>
                </div>
                <div>
                  <article title={content.description} className="text-sm titleText">
                    {content.description.length > 85 ? content.description.substring(0, 85) + '...' : content.description}
                  </article>
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
