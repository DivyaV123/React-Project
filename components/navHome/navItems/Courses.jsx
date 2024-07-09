"use client";
import React, { useContext, useEffect, useState } from "react";
import "./navitems.scss";
import Link from "next/link";
// import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { truncateText } from "@/lib/utils";
import Image from "next/image";
import { GlobalContext } from "@/components/Context/GlobalContext";
const Courses = ({ courseResponse }) => {
  const { setHoverState } = useContext(GlobalContext);
  // const {data:courseResponse,isLoading,error}=useGetAllCategoriesQuery()
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(0);
  const getAllCourses = courseResponse?.data;
  const subCourse =
    getAllCourses?.[hoveredIndex]?.subCourse?.length > 0 &&
    getAllCourses?.[hoveredIndex]?.subCourse;
  const subCourseContent =
    subCourse?.[hoveredItemIndex]?.subCourseResponse?.length > 0 &&
    subCourse?.[hoveredItemIndex]?.subCourseResponse;
  const finalContent =
    getAllCourses?.[hoveredIndex]?.courseResponse?.length > 0
      ? getAllCourses?.[hoveredIndex]?.courseResponse?.filter((ele) => ele)
      : subCourseContent;

  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] 3xl:h-[660px] overflow-auto myscrollbar ">
      <div className="menuSidebar pt-2  xl:w-[18.75vw] 2xl:w-[14.75vw]  3xl:w-[11.75vw] ">
        {getAllCourses?.map((courseItem, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`flex ${
              hoveredIndex === index ? "menuItem" : "menuItemdisable"
            }  pl-4 pr-2 items-center`}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img
                src="/arrowIconDark.svg"
                className={`${
                  hoveredIndex === index ? "visible" : "invisible"
                } w-4`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[62.34vw] 2xl:w-[66.34vw] 3xl:w-[70.34vw] flex ">
        {hoveredIndex !== null &&
          getAllCourses?.[hoveredIndex]?.subCourse?.length > 0 && (
            <div className="xl:w-[20.31vw] 2xl:w-[18.5vw]  3xl:w-[13.6vw]  pt-2 menuSidebar">
              {getAllCourses?.[hoveredIndex]?.subCourse?.map(
                (item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`flex justify-between grow pl-2 ${
                      hoveredItemIndex === itemIndex
                        ? "menuItem"
                        : "menuItemdisable"
                    } pr-2 items-center`}
                    onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                    onMouseLeave={() => {}}
                  >
                    <img src={item?.icon} />
                    <div className="flex justify-between grow">
                      <button className="p-2 text-sm">{item?.title}</button>
                      <img
                        src="/arrowIconDark.svg"
                        className={`${
                          hoveredItemIndex === itemIndex
                            ? "visible"
                            : "invisible"
                        } w-4`}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        <div
          className={`${
            hoveredIndex !== null && subCourse ? "courselist" : "coursefull"
          }   flex flex-wrap py-[2.222vh] px-[1.25vw]  h-fit gap-[0.938rem] 2xl:gap-[0.706rem] 3xl:p-4 3xl:gap-[0.813]`}
        >
          {finalContent?.length > 0 &&
            finalContent?.map((content, index) => {
              return (
                <Link
                  className={`${
                    hoveredIndex !== null && subCourse
                      ? "courseMedium"
                      : "courseinitial"
                  }   branchMenuCard bg-[#FFFFFF] w-[19.063vw] rounded-xl px-[1.389vh] py-[0.781vw]`}
                  href={`/courses/${
                    content?.courseResponseId
                      ? content?.courseResponseId
                      : content?.subCourseResponseId
                  }`}
                >
                  <div
                    key={index}
                    className="w-full flex flex-col h-full justify-evenly"
                    onClick={() =>
                      setHoverState((prevState) => ({
                        ...prevState,
                        content: false,
                      }))
                    }
                  >
                    <div className="flex  gap-2.5 items-center">
                      {content?.icon && (
                        <Image
                          src={content?.icon}
                          height={27}
                          width={36}
                          style={{
                            height: "32px",
                            width: "32px",
                            objectFit: "cover",
                          }}
                          alt="logo"
                        />
                      )}

                      {/* <img className="h-8 w-8" src={content?.icon} /> */}
                      <h3 className="text-left  text-[0.938vw] font-bold items-center flex pt-1">
                        {content?.title ? content?.title : ""}
                      </h3>
                    </div>
                    <div>
                      <article title={content?.description} className=" text-[0.859vw] titleText pt-[1.667vh]">
                        {truncateText(content?.description, 70)}
                      </article>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
