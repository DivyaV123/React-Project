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
import { useGetAllCoursesQuery } from "@/redux/queries/getAllCourseForAdmin";
import { usePathname } from "next/navigation";
function CourseCategoryContent() {
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
  const desiredSegment = segments[segments.length - 1];
  const decodedCategory = decodeURIComponent(desiredSegment);
  const { data: courseData, refetch } = useGetAllCoursesQuery({
    organizationType: initialOrgType,
  });
  useEffect(() => {
    refetch();
  }, [instituteParam]);
  const getCategoryList = courseData?.data?.filter((ele) =>
    ele.categories
      .map((category) => category.categoryTitle)
      .includes(decodedCategory)
  );
  const isDynamicCourse =
    getParams[1] === "dynamic" && getParams[2] === "course";
  const finalCourseData = isDynamicCourse ? getCategoryList : courseData?.data;
  const getCategoryTitle = isDynamicCourse && decodedCategory;
  const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem]";

  const dynamicCoursetableHeaders = ["COURSE NAME", "SUBJECTS", "ACTIONS"];
  const tableHeaders = [
    "COURSE NAME",
    "CATEGORIES",
    "SUB CATEGORIES",
    "SUBJECTS",
    "ACTIONS",
  ];
  const getTableHeaders = isDynamicCourse
    ? dynamicCoursetableHeaders
    : tableHeaders;
  return (
    <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
        {isDynamicCourse && (
          <h1 className="text-[#434343] text-[1.25vw] pl-[1.25vw] pb-[1.111vh] font-bold">
            {getCategoryTitle}
          </h1>
        )}
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
            {finalCourseData?.map((ele, index) => (
              <TableRow key={index}>
                <TableCell className={tblTextClass}>
                  {ele.course_name}
                </TableCell>
                {!isDynamicCourse && (
                  <>
                    <TableCell className={tblTextClass}>
                      {ele.categories.length === 0 ? (
                        ele.categories.length
                      ) : ele.categories.length === 1 ? (
                        ele.categories.map((category) => category.categoryTitle)
                      ) : (
                        <>
                          {ele.categories
                            .slice(0, 1)
                            .map((category) => category.categoryTitle)}
                          <button className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1">
                            + {ele.categories.length - 1}
                          </button>
                        </>
                      )}
                    </TableCell>
                  </>
                )}
                {!isDynamicCourse && (
                  <>
                    <TableCell className={tblTextClass}>
                      {ele.subCategories.length === 0 ? (
                        ele.subCategories.length
                      ) : ele.subCategories.length === 1 ? (
                        ele.subCategories.map(
                          (subcategory) => subcategory.subCategoryTitle
                        )
                      ) : (
                        <>
                          {ele.subCategories
                            .slice(0, 1)
                            .map((category) => category.subCategoryTitle)}
                          <button className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1">
                            + {ele.subCategories.length - 1}
                          </button>
                        </>
                      )}
                    </TableCell>
                  </>
                )}
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

export default CourseCategoryContent;
