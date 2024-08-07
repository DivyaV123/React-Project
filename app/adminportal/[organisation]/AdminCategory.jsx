"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/lib/Loading";

const AdminCategory = () => {
  const router = useRouter();
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

  const {
    data: categoryData,
    refetch,
    isLoading,
  } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });
  useEffect(() => {
    refetch();
  }, [instituteParam]);
  const handleCategoryClick = (id) => {
    const basePath = pathname.split(",").slice(0, 2).join(",");
    const checkIfSubCourse =
      categoryData?.data.find((category) => category.courseId === id)?.subCourse
        .length > 0;
    
    const subCoursePath = `${basePath}/dynamic/${id}`;
    const coursePath = `${basePath}/dynamic/course/${id}`;
    if (checkIfSubCourse) {
      router.push(subCoursePath);
    } else {
      router.push(coursePath);
    }
  };

  const handleEditClick = (title) => {
    console.log(`Edit clicked for: ${title}`);
  };

  const handleDeleteClick = (id) => {
    console.log(`Delete clicked for id: ${id}`);
  };

  const tableHeaders = [
    { label: "CATEGORY NAME", className: "text-gray-600 font-medium text-xs" },
    { label: "SUB CATEGORIES", className: "text-gray-600 font-medium text-xs" },
    { label: "COURSES", className: "text-gray-600 font-medium text-xs" },
    { label: "ACTIONS", className: "text-gray-600 font-medium text-xs" },
  ];

  const renderCells = (category) => [
    {
      content: category.title,
      className: "text-gray-600 font-medium text-xs cursor-pointer",
      onClick: () => handleCategoryClick(category.courseId),
    },
    {
      content: category.subCourse.length,
      className: "text-gray-600 font-medium text-xs",
    },
    {
      content: category.courseResponse.length,
      className: "text-gray-600 font-medium text-xs",
    },
    {
      content: (
        <div className="invisible group-hover:visible flex">
          <button
            className="text-blue-500 mr-2"
            onClick={() => handleEditClick(category.title)}
          >
            Edit
          </button>
          <button
            className="text-red-500"
            onClick={() => handleDeleteClick(category.id)}
          >
            Delete
          </button>
        </div>
      ),
      className: "text-gray-600 font-medium text-xs",
    },
  ];

  return (
    <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh] h-[73.389vh] ">
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className={header.className}>
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {categoryData?.data.map((category, index) => (
                  <TableRow key={category.id || index} className="group">
                    {renderCells(category).map((cell, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        className={cell.className}
                        onClick={cell.onClick}
                      >
                        {cell.content}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCategory;
