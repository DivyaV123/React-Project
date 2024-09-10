"use client";
import React from "react";
import CourseCard from "@/components/commonComponents/courseCard/courseCard";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";

import CourseCardSkeleton from "@/components/commonComponents/courseCard/CourseCardSkeleton";
const TrendingCourses = ({page}) => {
  const { data: AllCourse, error, isloading } = useGetAllCategoriesQuery();
  const getPopularCourses = (AllCourse && AllCourse.data) 
  ? AllCourse.data
      .filter(ele => ele.title === "Popular Courses")
      .flatMap(ele => ele.courseResponse)
  : [];

  return (
    <section className="pb-[4.194vh]">
      <article className="pt-[5.556vh] pb-[3.333vh] text-[2.5vw] font-bold">
        Trending Courses
      </article>
      <section className="py-[3.333vh] flex flex-wrap   xl:gap-3.5 2xl:gap-4 3xl:gap-5">
       {getPopularCourses.map((element)=>(
       <div className="branches courseCard" key={element.id}>
       <article className="w-full h-full">
         {isloading ? (
           <CourseCardSkeleton />
         ) : (
           <CourseCard cardData={element} page={page}/>
         )}
       </article>
     </div>
       ))
       }
      </section>
    </section>
  );
};

export default TrendingCourses;
