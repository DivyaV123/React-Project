"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { COURSE_NAV_BAR } from "@/lib/RouteConstants";
import Link from "next/link";

const CourseResponseLanding = () => {
  const pathname = usePathname();
  const courseID = pathname.split("/").pop();
  
  const { data: courseResponse, isLoading: CourseIsLoading, error: CourseError } = useGetAllCategoriesQuery();
  
  const filteredCourse = useMemo(() => {
    if (!courseResponse?.data) return null;
    return courseResponse.data.find(course => String(course.courseId) === String(courseID));
  }, [courseResponse, courseID]);

  const getCourseTitle = filteredCourse?.title;
  const getCourseResponse = filteredCourse?.courseResponse || [];
  const getSubCourse = filteredCourse?.subCourse || [];
  return (
    <section className="my-[1.717vh]">
      <Link
        className="flex gap-2.5 pl-[1.628vw] bg-[#F9F9F9] py-[1.502vh] items-center"
        href={COURSE_NAV_BAR}
      >
        <img src="/icon_arrow_left.svg" />
        <div className="text-[3.256vw] font-semibold text-[#454545]">
          {getCourseTitle}
        </div>
      </Link>
      <section className="mx-[3.721vw] my-[0.858vh]">
        {getCourseResponse.length > 0 && getCourseResponse.map((response) => (
          <Link
            key={response?.courseResponseId}
            className="mx-[2.326vw] my-[1.073vh]"
            href={`/courses/${response?.courseResponseId}`}
          >
            <div className="flex gap-2.5 pt-[0.858vh] items-center">
              <img
                className="w-[8.372vw] h-[3.863vh]"
                src={response.icon}
                alt={response.title}
              />
              <div className="text-[2.791vw] font-bold text-[#454545]">
                {response.title}
              </div>
            </div>
            <div className="mt-[0.858vh] py-[1.073vh] text-[2.558vw] font-semibold text-[#575757]">
              {response.description}
            </div>
          </Link>
        ))}
        {getSubCourse.length > 0 && getSubCourse.map((response) => (
          <Link
            key={response?.subCourseId}
            className="flex justify-between py-[1.073vh]"
            href={`/coursenav/${courseID}/${response?.subCourseId}`}
          >
            <div className="text-[2.791vw] font-bold text-[#454545]">
              {response?.title}
            </div>
            <img src="/arrow_right.svg" alt="arrow right" />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default CourseResponseLanding;
