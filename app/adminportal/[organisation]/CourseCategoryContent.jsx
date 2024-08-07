"use client";
import React, { useMemo, useEffect, useState } from "react";
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
import { truncateText } from "@/lib/utils";

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

  const getCategoryList = useMemo(() =>
    courseData?.data?.filter(ele =>
      ele.categories.find(subele => subele.categoryId === decodedCategory)
    ), [courseData, decodedCategory]);

  const isDynamicCourse =
    getParams[1] === "dynamic" && getParams[2] === "course";
  const finalCourseData = isDynamicCourse ? getCategoryList : courseData?.data;

  const getCategoryTitle = isDynamicCourse && decodedCategory;
  const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

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


  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);

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
                <TableCell className={tblTextClass} title={ele.course_name}>
                  {truncateText(ele.course_name, 30)}
                </TableCell>
                {!isDynamicCourse && (
                  <>
                    <TableCell className={tblTextClass}>
                      {ele.categories.length === 0 ? (
                        ele.categories.length
                      ) : ele.categories.length === 1 ? (
                        ele.categories.map(category => category.categoryTitle)
                      ) : (
                        <div className="flex space-x-2 items-center">
                          {ele.categories.slice(0, 1).map(category => category.categoryTitle)}
                          {ele.categories.length > 1 && (
                            <div className="relative">
                              <button
                                className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                              >
                                + {ele.categories.length - 1}
                              </button>
                              {dropdownOpen === index && (
                                <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                  {ele.categories.slice(1).map((category, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {category.categoryTitle}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className={tblTextClass}>
                      {ele.subCategories.length === 0 ? (
                        ele.subCategories.length
                      ) : ele.subCategories.length === 1 ? (
                        ele.subCategories.map(subcategory => subcategory.subCategoryTitle)
                      ) : (
                        <div className="flex space-x-2 items-center">
                          {ele.subCategories.slice(0, 1).map(subcategory => subcategory.subCategoryTitle)}
                          {ele.subCategories.length > 1 && (
                            <div className="relative">
                              <button
                                className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                                onMouseEnter={() => handleMouseEnter(`sub-${index}`)}
                                onMouseLeave={handleMouseLeave}
                              >
                                + {ele.subCategories.length - 1}
                              </button>
                              {dropdownOpen === `sub-${index}` && (
                                <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                  {ele.subCategories.slice(1).map((subcategory, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {subcategory.subCategoryTitle}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
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
