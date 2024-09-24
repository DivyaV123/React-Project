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
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import { usePathname } from "next/navigation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCourseWeightageDndMutation } from "@/redux/queries/updateCourseDndApi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";

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
  const lastPath = pathname.split("/").pop();

  const desiredSegment = segments[segments.length - 1];
  const urlCourseCheck = segments[segments.length - 2];
  const [routeCourseId, routeSubCourseId] = desiredSegment.split(",");

  const { data: courseData, refetch } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });

  useEffect(() => {
    refetch();
  }, [instituteParam]);

  const [categoryList, setCategoryList] = useState([]);

  const { finalCategoryList, finalCategoryTitle } = useMemo(() => {
    const course = courseData?.data?.find(
      (ele) => ele.courseId == routeCourseId
    );
    const getCategoryList = course?.courseResponse;
    const getCategoryTitle = course?.title;

    const isSubCategory = routeCourseId === "subcategory";
    const checkIfSubCourse = courseData?.data?.find(
      (ele) => ele?.subCourse?.length > 0
    );
    const subCourse = (
      isSubCategory ? checkIfSubCourse : course
    )?.subCourse?.find((ele) => ele.subCourseId == routeSubCourseId);

    const getSubCategoryList = subCourse?.subCourseResponse;
    const getSubCategoryTitle = subCourse?.title;

    return {
      finalCategoryList: isSubCategory
        ? getSubCategoryList
        : routeSubCourseId
        ? getSubCategoryList
        : getCategoryList,
      finalCategoryTitle: isSubCategory
        ? getSubCategoryTitle
        : routeSubCourseId
        ? getSubCategoryTitle
        : getCategoryTitle,
    };
  }, [courseData, routeCourseId, routeSubCourseId]);

  useEffect(() => {
    setCategoryList(finalCategoryList || []);
  }, [finalCategoryList]);

  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
  const getTableHeaders = ["COURSE NAME", "SUBJECTS", "ACTIONS"];

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const SortableItem = ({ id, children }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      // opacity: isDragging ? 0.5 : 1,
      cursor: "move",
    };

    return (
      <TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {children}
      </TableRow>
    );
  };

  const [editCourseWeightage] = useCourseWeightageDndMutation();
  const handleDragEnd = async (event) => {
    const { active, over } = event;

    // Ensure there's a difference between the active and over item
    if (active.id !== over.id) {
      const oldIndex = categoryList.findIndex(
        (item) =>
          item?.courseResponseId === parseInt(active.id, 10) ||
          item?.subCourseResponseId === parseInt(active.id, 10)
      );

      const newIndex = categoryList.findIndex(
        (item) =>
          item?.courseResponseId === parseInt(over.id, 10) ||
          item?.subCourseResponseId === parseInt(over.id, 10)
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        // Update the local state with the new order
        const updatedCategoryList = arrayMove(categoryList, oldIndex, newIndex);
        setCategoryList(updatedCategoryList);

        try {
          const [categoryId_routeCourseId, subCategoryId_routeCourseId] =
            lastPath.split(",").map(Number);
          const payload = routeCourseId
            ? {
                categoryId: categoryId_routeCourseId, // Assuming second last path segment is categoryId
                subCategoryId: subCategoryId_routeCourseId, // Assuming last path segment is subCategoryId
                courseId: parseInt(active.id, 10),
                organisation: initialOrgType,
                weightage: newIndex + 1,
              }
            : {
                categoryId: lastPath,
                subCategoryId: undefined,
                courseId: parseInt(active.id, 10),
                organisation: initialOrgType,
                weightage: newIndex + 1,
              };

          const response = await editCourseWeightage(payload).unwrap();
          // const response = await editCourseWeightage({
          //   categoryId: lastPath,
          //   subCategoryId: undefined,
          //   courseId: parseInt(active.id, 10),
          //   organisation:initialOrgType,
          //   weightage: newIndex + 1 ,
          // }).unwrap();
          if (response.statusCode === 200) {
            refetch();
          }
        } catch (error) {
          console.error("Error updating category weightage:", error);
        }
      } else {
        console.error(
          "Invalid indices for active or over item:",
          oldIndex,
          newIndex
        );
      }
    }
  };

  return (
    <div className="py-[3.333vh] px-[1.875vw]">
      <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
        {/* {finalCategoryTitle} */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                {" "}
                <Link
                  className="text-[#6E6E6E] font-medium   pl-[1.25vw] pb-[1.111vh]"
                  href={
                    routeCourseId !== "subcategory"
                      ? `${ADMIN_PORTAL}/Category,${instituteParam}`
                      : `${ADMIN_PORTAL}/${getParams[0]}`
                  }
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink className="text-[#434343]   pb-[0.111vh] font-bold">
                {finalCategoryTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

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
            {routeCourseId !== "subcategory" ? (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={categoryList.map((item) =>
                    item?.courseResponseId
                      ? item.courseResponseId
                      : item.subCourseResponseId
                  )}
                  strategy={verticalListSortingStrategy}
                >
                  {categoryList.map((item) => (
                    <SortableItem
                      key={item.courseResponseId || item.subCourseResponseId}
                      id={item.courseResponseId || item.subCourseResponseId}
                    >
                      <TableCell className={tblTextClass}>
                        {item.title}
                      </TableCell>
                      <TableCell className={tblTextClass}>
                        {item.subjectCount}
                      </TableCell>
                      <TableCell className={tblTextClass}></TableCell>
                    </SortableItem>
                  ))}
                </SortableContext>
              </DndContext>
            ) : (
              categoryList.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className={tblTextClass}>{item.title}</TableCell>
                  <TableCell className={tblTextClass}>
                    {item.subjectCount}
                  </TableCell>
                  <TableCell className={tblTextClass}></TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CategoryContent;
