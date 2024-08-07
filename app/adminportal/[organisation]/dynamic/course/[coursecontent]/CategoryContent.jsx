"use client";
import React, { useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import { usePathname } from "next/navigation";
function CategoryContent() {
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [instituteParam] = getParams[0].split(",").slice(1);
  const initialOrgType =
    instituteParam === "Qspiders"
      ? "QSP"
      : instituteParam === "Jspiders"
      ? "JSP"
      : instituteParam === "Pyspiders"
      ? "PYSP"
      : instituteParam === "Prospiders"
      ? "PROSP"
      : "QSP";
  const segments = pathname.split("/");
  const desiredSegment = segments[segments.length - 1]
  const [routeCourseId, routeSubCourseId] = desiredSegment.split(',');

  const { data: courseData, refetch } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });

  useEffect(() => {
    refetch();
  }, [instituteParam]);



  const { finalCategoryList, finalCategoryTitle } = useMemo(() => {
    const course = courseData?.data?.find(ele => ele.courseId == routeCourseId);
    
    const getCategoryList = course?.courseResponse;
    const getCategoryTitle = course?.title;
  
    const isSubCategory = routeCourseId === "subcategory";

    const checkIfSubCourse = courseData?.data?.find(ele => ele?.subCourse?.length > 0);
    const subCourse = (isSubCategory ? checkIfSubCourse : course)?.subCourse?.find(ele => ele.subCourseId == routeSubCourseId);
  
    const getSubCategoryList = subCourse?.subCourseResponse;
    const getSubCategoryTitle = subCourse?.title;
  
 
    
    return {
      finalCategoryList: isSubCategory ? getSubCategoryList : (routeSubCourseId ? getSubCategoryList : getCategoryList),
      finalCategoryTitle: isSubCategory ? getSubCategoryTitle : (routeSubCourseId ? getSubCategoryTitle : getCategoryTitle),
    };
  }, [courseData, routeCourseId, routeSubCourseId]);
  
  

  const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
  const getTableHeaders = ["COURSE NAME", "SUBJECTS", "ACTIONS"];
  return (
    <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
          <h1 className="text-[#434343] text-[1.25vw] pl-[1.25vw] pb-[1.111vh] font-bold">
            {finalCategoryTitle}
          </h1>
        <Table>
          <TableHeader className="z-1">
            <TableRow>
              {getTableHeaders.map((header, index) => (
                <TableHead key={index} className={tblTextClass}>
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {finalCategoryList?.map((ele, index) => (
              <TableRow key={index} >
                <TableCell className={tblTextClass}>
                  {ele.title}
                </TableCell>
                <TableCell className={tblTextClass}>
                  {ele.subjectCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CategoryContent;
