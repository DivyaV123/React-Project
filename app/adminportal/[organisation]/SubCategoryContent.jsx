"use client";
import React, { useMemo } from "react";
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
function SubCategoryContent() {
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
  const { data: categoryData, refetch } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });
  const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem]";
const categoryTitle=decodedCategory === "subcategory" ? categoryData?.data.filter(ele=>ele.subCourse.length>0).flatMap(ele=>ele.title) : decodedCategory
const getSubCourseCategory = useMemo(() => {
  if (!categoryData?.data) return [];

  if (decodedCategory === "subcategory") {
    return categoryData.data.flatMap(ele => ele?.subCourse?.length > 0 ? ele.subCourse : []);
  } else {
    return categoryData.data
      .filter(ele => ele.title === decodedCategory)
      .flatMap(subele => subele.subCourse.length > 0 ? subele.subCourse : []);
  }
}, [decodedCategory, categoryData]);

  const tableHeaders = ["SUB CATEGORY NAME", "CATEGORY", "COURSES", "ACTIONS"];
  return (
    <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh] ">
        <Table className="">
          <TableHeader className=" z-1">
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className={tblTextClass}>
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {getSubCourseCategory?.map((subCourse, index) => (
              <TableRow key={index}>
                <TableCell className={tblTextClass}>
                  {subCourse.title}
                </TableCell>
                <TableCell className={tblTextClass}>
                  {categoryTitle}
                </TableCell>
                <TableCell className={tblTextClass}>
                  {subCourse?.subCourseResponse?.length}
                </TableCell>
                <TableCell className={tblTextClass}></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default SubCategoryContent;
