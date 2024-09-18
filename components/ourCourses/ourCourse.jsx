"use client";
import React, { useState } from "react";
import "./ourCourses.scss";
import CourseCard from "../commonComponents/courseCard/courseCard";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import "../ui/button.scss";
import Button from "../commonComponents/button/Button";
import Slide from "react-reveal/Slide";
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
import Link from "next/link";
import Input from "../commonComponents/input/Input";
import { Skeleton } from "@/components/ui/skeleton";
import CourseCardSkeleton from "../commonComponents/courseCard/CourseCardSkeleton";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { formatString } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetHomePageCourseQuery } from "@/redux/queries/getHomePageCourse";
import Image from "next/image";

function OurCourse({ page }) {
  const { data: AllCourse, error, isloading } = useGetAllCategoriesQuery();
  //commented upto testing to be done for Explore our courses , we are using getAllcategories for Explore our courses as well
  // const {
  //   data: homeCourse,
  //   error: homeCourseError,
  //   isloading: homeCourseLoading,
  // } = useGetHomePageCourseQuery();

  const [openIndex, setOpenIndex] = useState(0);

  const courses = AllCourse?.data?.map((data) => {
    return {
      icon: data.icon,
      iconlite: data.alternativeIcon,
      title: data.title,
      arrow: "./arrowIconDark.svg",
    };
  });
  const groupCoursesByMode=(data)=> {
    const result = {
      SELF_PACED: [],
      ONLINE_CLASSES: [],
      CORPORATE_TRAINING: [],
      OFFLINE_CLASSES: []
    };
    const findOrCreateCategory=(mode, categoryInfo)=> {
      const existingCategory = result[mode].find(
        (item) => item.category.categoryId === categoryInfo.categoryId
      );
      if (existingCategory) {
        return existingCategory;
      } else {
        const newCategory = {
          category: categoryInfo,
          courses: []
        };
        result[mode].push(newCategory);
        return newCategory;
      }
    }
  
    data?.forEach(category => {
      const categoryInfo = {
        categoryId: category.courseId,
        icon: category.icon,
        alternativeIcon: category.alternativeIcon,
        title: category.title,
        subCourses: []
      };
  
      if (category?.courseResponse) {
        category?.courseResponse.forEach(course => {
          course?.modes?.forEach(mode => {
            if (result[mode]) {
              const categoryEntry = findOrCreateCategory(mode, categoryInfo);
              const courseInfo = { ...course, category: { ...categoryInfo } };
              categoryEntry.courses.push(courseInfo);
            }
          });
        });
      }
  
      if (category?.subCourse) {
        category?.subCourse?.forEach(subCourse => {
          const subCourseInfo = {
            subCourseId: subCourse.subCourseId,
            icon: subCourse.icon,
            title: subCourse.title,
            courses: []
          };
  
          if (subCourse?.subCourseResponse) {
            subCourse?.subCourseResponse?.forEach(course => {
              course?.modes?.forEach(mode => {
                if (result[mode]) {
                  const categoryEntry = findOrCreateCategory(mode, categoryInfo);
                  const courseInfo = { ...course, category: { ...categoryInfo }, subCourse: { ...subCourseInfo } };
                  categoryEntry.courses.push(courseInfo);
                }
              });
            });
          }
          categoryInfo.subCourses.push(subCourseInfo);
        });
      }
    });
  
    return result;
  }
  
  const groupedCourses = groupCoursesByMode(AllCourse?.data);  


  const [viewAllCoursesHover, setviewAllCoursesHover] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState("Popular Courses");

  const typesOfClasses = Object.keys(groupedCourses || {})


  const [btnState, setBtnState] = useState(
    page === "tution" ? "CORPORATE_TRAINING" : "ONLINE_CLASSES"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const tutionClasses =
    page === "tution" ? typesOfClasses.slice(2, 4) : typesOfClasses;
  const handleAccordionToggle = (index, title) => {
    setHoveredCategory(title);
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const noSpaceText = btnState.replace(/\s+/g, "").toUpperCase();
  const getFinalCourseList =
  groupedCourses?.[noSpaceText]
      ?.filter((ele) => ele?.category?.title === hoveredCategory)
      ?.flatMap((ele) => ele.courses) ?? [];
console.log(getFinalCourseList,"getFinalCourseList")
  return (
    <MaxWebWidth>
      {page !== "explore" && (
        <aside className="flex justify-center align-center my-[4.444vh] mobile:my-[2.575vh]">
          <Slide top cascade>
            <h1 className="font-bold text-[2rem] mobile:text-[5.581vw] header text-black">
              Explore Our Courses
            </h1>
          </Slide>
        </aside>
      )}
      <article
        className={
          page === "explore"
            ? "flex justify-between mobile:flex-col mobile:gap-4  mb-8 mt-8"
            : "flex justify-center mb-8 mobile:justify-center"
        }
      >
        {page === "explore" && (
          <div>
            <header className="">
              <h1 className="font-bold text-[1.5rem] header text-black ">
                Explore Our Courses
              </h1>
            </header>
          </div>
        )}
        <div className="flex ">
          {page === "explore" && (
            <article className="pr-2 pt-[1px] mobile:hidden tabView:hidden">
              <Input
                onChange={(e) => setSearchTerm(e.target.value)}
                inputStyle="searchField p-2 text-sm"
                placeholder="Search"
                iconPath="../images/shape.png"
              />
            </article>
          )}

          <div className="bg-white  flex rounded">
            {tutionClasses.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center px-4 py-2 mobile:py-[0.606vh] mobile:px-[2.698vw] mobile:text-[1.972vw] font-medium text-[0.75rem] text-[#454545] ${classItem === btnState
                  ? "bg-gradient text-white  p-2 rounded-3xl"
                  : ""
                  } `}
                onClick={() => setBtnState(classItem)}
              >
                {formatString(classItem)}
              </button>
            ))}
          </div>
        </div>
      </article>
      <aside className=" sm:hidden tabView:block">
        <Accordion
          defaultValue="hello"
          className="w-full"
          type="single"
          collapsible
        >
          {courses?.map((item, itemIndex) => {
            return isloading ? (
              <div
                className={`bg-orange hover:font-semibold hover:text-white w-full  flex  gradient-bg cursor-pointer `}
              >
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-7 w-7 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-[12.5rem]" />
                  </div>
                </div>
              </div>
            ) : (
              <AccordionItem
                key={itemIndex}
                value={itemIndex === 0 ? "hello" : itemIndex}
                className="accordionitem"
              >
                <AccordionTrigger
                  onClick={() => handleAccordionToggle(itemIndex, item.title)}
                  className={`${itemIndex === openIndex ? "bg-[#FEF2E7]" : ""}`}
                >
                  <div className="flex  items-center  w-full">
                    <picture className="flex justify-start">
                      <img
                        className="w-[5.581vw] h-[2.575vh]"
                        src={[item.icon]}
                      />
                      <aside>
                        <h1
                          className={`  text-[#454545] mobile:text-[3.256vw] mobile:pl-[2.791vw] w-full`}
                        >
                          {item.title}
                        </h1>
                      </aside>
                    </picture>
                  </div>
                </AccordionTrigger>
                <AccordionContent page="explorecourses">
                  <article className="h-full sm:hidden tabView:block">
                    <div className="flex  justify-between gap-4 h-full  mobile:overflow-x-scroll mobile:offlineScrollbar   pt-[2.575vh] ">
                      {getFinalCourseList?.length > 0 ? (
                        getFinalCourseList.map((element, index) => {
                          return (
                            <div className="exploreCard" key={index}>
                              {isloading ? (
                                <CourseCardSkeleton />
                              ) : (
                                <CourseCard cardData={element} />
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div>
                          <h1 className="font-bold text-large pt-12">
                            No courses in the selected Category, Please select
                            other category...
                          </h1>
                        </div>
                      )}
                    </div>
                  </article>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </aside>
      <aside className="flex h-[132.222vh] mobile:hidden tabView:hidden">
        <article className="justify-start w-[20.70vw] h-full overflow-auto courseScroll">
          <div className="w-full">
            {courses?.map((item, itemIndex) => {
              return isloading ? (
                <div
                  className={`bg-orange hover:font-semibold hover:text-white w-full  flex  gradient-bg cursor-pointer `}
                >
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-7 w-7 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-3 w-[12.5rem]" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={itemIndex}
                  onClick={() => setHoveredCategory(item.title)}
                  className={`bg-orange hover:text-white hover:font-semibold  w-full flex  gradient-bg cursor-pointer  ${hoveredCategory === item.title
                    ? "bg-gradient text-white font-semibold"
                    : ""
                    }`}
                >
                  <div className="flex  items-center py-[2.222vh] px-[1.25vw] w-full">
                    <picture className="flex justify-start w-[89%] items-center">
                      {hoveredCategory === item.title ? (
                        <img
                          src={
                            hoveredCategory === item.title
                              ? [item.iconlite]
                              : [item.iconlite]
                          }
                        />
                      ) : (
                        <img
                          src={
                            hoveredCategory === item.title
                              ? [item.icon]
                              : [item.icon]
                          }
                        />
                      )}
                      {/* {hoveredCategory === item.title ?
                        <Svg
                          className=''
                          width={svgicons[item.iconlite][0]}
                          height={svgicons[item.iconlite][1]}
                          viewBox={svgicons[item.iconlite][2]}
                          icon={svgicons[item.iconlite][3]}
                          color={svgicons[item.iconlite][4]}
                        /> :
                        <Svg
                          className=''
                          width={svgicons[item.icon][0]}
                          height={svgicons[item.icon][1]}
                          viewBox={svgicons[item.icon][2]}
                          icon={svgicons[item.icon][3]}
                          color={svgicons[item.icon][4]}
                        />
                      } */}

                      <aside
                        className={` pl-[1.25vw] text-[1.094vw] text-[#454545] w-full ${hoveredCategory === item.title
                          ? "text-white font-semibold "
                          : "text-black"
                          }`}
                      >
                        <h1>{item.title}</h1>
                      </aside>
                    </picture>
                    <picture className="flex w-[11%]">
                      <Svg
                        width={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[0]
                            : svgicons.arrowIcon[0]
                        }
                        height={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[1]
                            : svgicons.arrowIcon[1]
                        }
                        viewBox={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[2]
                            : svgicons.arrowIcon[2]
                        }
                        icon={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[3]
                            : svgicons.arrowIcon[3]
                        }
                        color={
                          hoveredCategory === item.title
                            ? svgicons.arrowIconLite[4]
                            : svgicons.arrowIcon[4]
                        }
                      />
                    </picture>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
        <article className="h-full overflow-hidden  w-[66.797vw]">
          <div className="flex flex-wrap    w-full  h-[132.222vh] overflow-y-scroll courseScroll ">
            {getFinalCourseList?.length > 0 ? (
              getFinalCourseList.map((element, index) => {
                return (
                  <div className="exploreCard" key={index}>
                    {isloading ? (
                      <CourseCardSkeleton />
                    ) : (
                      <CourseCard cardData={element} />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="flex w-full flex-col items-center align-center">
                <h1 className="font-bold text-large pt-12">
                  No courses in the selected Category, Please select other
                  category...
                </h1>
              </div>
            )}
          </div>
        </article>
      </aside>
      {page !== "explore" && (
        <Link href="./exploreCourses">
          <article on className="flex justify-end mt-8 mb-8">
            <Button
              className="border border-orange-500 rounded text-orange-500 p-2  "
              title="View All Courses"
              icon={
                viewAllCoursesHover
                  ? "./arrowIcon.svg"
                  : "./arrowIconOrange.svg"
              }
              iconPosition="right"
            // onMouseEnter={() => { setMouseHover(true) }}
            // onMouseLeave={() => { setMouseHover(false) }}
            />
          </article>
        </Link>
      )}
    </MaxWebWidth>
  );
}

export default OurCourse;
