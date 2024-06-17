"use client";
import React, { useState } from "react";
import './navitems.scss'
import Link from "next/link";
// import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { truncateText } from "@/lib/utils";
const Courses = ({courseResponse}) => {
  // const {data:courseResponse,isLoading,error}=useGetAllCategoriesQuery()
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(0);
  const getAllCourses=courseResponse?.data
  const subCourse=getAllCourses?.[hoveredIndex]?.subCourse?.length>0 && getAllCourses?.[hoveredIndex]?.subCourse
  const subCourseContent=subCourse?.[hoveredItemIndex]?.subCourseResponse?.length>0 && subCourse?.[hoveredItemIndex]?.subCourseResponse
  const finalContent=getAllCourses?.[hoveredIndex]?.courseResponse?.length>0 ? getAllCourses?.[hoveredIndex]?.courseResponse?.filter(ele=>ele) : subCourseContent
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar ">
      <div className="menuSidebar pt-2  xl:w-[18.75vw] 2xl:w-[14.75vw]  3xl:w-[11.75vw] ">
        {getAllCourses?.map((courseItem, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`flex ${hoveredIndex  === index  ? 'menuItem' : 'menuItemdisable'}  pl-4 pr-2 items-center`}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img src="/arrowIconDark.svg" className={`${hoveredIndex === index ? 'visible' : 'invisible'} w-4`} />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[62.34vw] 2xl:w-[66.34vw] 3xl:w-[70.34vw] flex ">
        {hoveredIndex !== null && getAllCourses?.[hoveredIndex]?.subCourse?.length>0 && (
          <div className="xl:w-[20.31vw] 2xl:w-[18.5vw]  3xl:w-[13.6vw]  pt-2 menuSidebar">
            {getAllCourses?.[hoveredIndex]?.subCourse?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex justify-between grow pl-2 ${hoveredItemIndex  === itemIndex ? 'menuItem' : 'menuItemdisable'} pr-2 items-center`}
                onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                onMouseLeave={() => {}}
              >
                <img src={item?.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-sm">{item?.title}</button>
                  <img src="/arrowIconDark.svg" className={`${hoveredItemIndex === itemIndex ? 'visible' : 'invisible'} w-4`} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${
            hoveredIndex !== null && subCourse
              ? "courselist pl-4 pt-2"
              : "coursefull p-3"
          }   flex flex-wrap  h-fit gap-4 `}
         >
          {finalContent?.length > 0 && 
          finalContent?.map(
            (content, index) => (
             <Link href={`/courses/${content?.courseResponseId ? content?.courseResponseId :content?.subCourseResponseId}`}> <div
                key={index}
                className={`${
                  hoveredIndex !== null && subCourse
                    ? "courseMedium"
                    : "courseinitial"
                }  p-2 branchOverlay h-fit`}
              >
                <div className="flex h-10 gap-1.5 ">
                  <img className="h-8 w-8" src={content?.icon} />
                  <h3 className="text-left h-8 text-sm font-bold items-center flex">
                    {content?.title}
                  </h3>
                </div>
                <div>
                  <article className=" text-sm titleText">{truncateText(content?.description,100)}</article>
                </div>
              </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
