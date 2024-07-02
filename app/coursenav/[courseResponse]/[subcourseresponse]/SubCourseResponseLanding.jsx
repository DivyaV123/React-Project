'use client'
import React,{useMemo} from 'react'
import { usePathname } from "next/navigation";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import Link from 'next/link';
const SubCourseResponseLanding = () => {
  const {
    data: courseResponse,
    isLoading: CourseIsLoading,
    error: CourseError,
  } = useGetAllCategoriesQuery();
  const pathname = usePathname();
  const [courseID, subCourseID] = pathname.split('/').slice(2, 4);  

  const filterSubCourseById = useMemo(() => {
    if (!courseResponse?.data) return [];
    const course = courseResponse.data.find(course => String(course.courseId) === String(courseID));
    const subCourse = course?.subCourse?.find(sub => String(sub.subCourseId) === String(subCourseID));
    return subCourse ? [subCourse] : [];
  }, [courseResponse, courseID, subCourseID]);

  const filterSubCourseTitle = filterSubCourseById?.[0]?.title;
  const getSubCourseResponse = filterSubCourseById?.[0]?.subCourseResponse || [];
  return (
    <section className="my-[1.717vh]">
            <Link
        className="flex gap-2.5 pl-[1.628vw] bg-[#F9F9F9] py-[1.502vh] items-center"
        href={`/coursenav/${courseID}`}
      >
        <img src="/icon_arrow_left.svg" />
        <div className="text-[3.256vw] font-semibold text-[#454545]">
          {filterSubCourseTitle}
        </div>
      </Link>
      <section className="mx-[3.721vw] my-[0.858vh]">
        {getSubCourseResponse?.length > 0 && getSubCourseResponse.map((response) => (
          <Link
            key={response?.subCourseResponseId}
            className="mx-[2.326vw] my-[1.073vh]"
            href={`/courses/${response?.subCourseResponseId}`}
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
      </section>
    </section>
  )
}

export default SubCourseResponseLanding