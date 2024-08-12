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
import { usePathname ,useRouter} from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";

// Import DnD Kit modules
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
import { useSubCategoryWeightageDndMutation } from "@/redux/queries/updateSubCategoryDndApi";

function SubCategoryContent() {
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
  const segments = pathname.split("/");
  const desiredSegment = segments[segments.length - 1];
  const decodedCategory = decodeURIComponent(desiredSegment);
  const { data: categoryData, refetch } = useGetAllCategoryQuery({
    organizationType: initialOrgType,
  });
  useEffect(() => {
    refetch();
  }, [instituteParam]);

  const [subCourses, setSubCourses] = useState([]);

  

  const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

  const getTitle=categoryData?.data
  .find(ele => ele.courseId == decodedCategory)?.title

const categoryTitle=decodedCategory === "subcategory" ? categoryData?.data.filter(ele=>ele.subCourse.length>0).flatMap(ele=>ele.title) : getTitle

const getSubCourseCategory = useMemo(() => {
  if (!categoryData?.data) return [];

  if (decodedCategory === "subcategory") {
    return categoryData.data.flatMap(ele => ele?.subCourse?.length > 0 ? ele.subCourse : []);
  } else {
    return categoryData.data
      .filter(ele => ele.courseId == decodedCategory)
      .flatMap(subele => subele.subCourse.length > 0 ? subele.subCourse : []);
  }
}, [decodedCategory, categoryData]);
useEffect(() => {
  if (categoryData?.data) {
    const initialSubCourses = getSubCourseCategory;
    setSubCourses(initialSubCourses);
  }
}, [categoryData, decodedCategory]);
const handleCategoryClick=(subcourseid)=>{
router.push(`${ADMIN_PORTAL}/${getParams[0]}/dynamic/course/${decodedCategory},${subcourseid}`)
}

  const tableHeaders = ["SUB CATEGORY NAME", "CATEGORY", "COURSES", "ACTIONS"];

  // Define sensors for DnD Kit
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10, // Drag activation distance
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: undefined,
    })
  );

  // Define the SortableItem component
  const SortableItem = ({ id, children }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.5 : 1,
      cursor: "move",
    };

    return (
      <TableRow
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={() => handleCategoryClick(id)}
      >
        {children}
      </TableRow>
    );
  };
  const [editSubCourseWeightage] = useSubCategoryWeightageDndMutation();
  // // Handle drag end event
  // const handleDragEnd = (event) => {
  //   const { active, over } = event;

  //   if (active.id !== over.id) {
  //     setSubCourses((items) => {
  //       const oldIndex = items.findIndex((item) => item.subCourseId === active.id);
  //       const newIndex = items.findIndex((item) => item.subCourseId === over.id);
  //       return arrayMove(items, oldIndex, newIndex);
  //     });

  //     // Perform any API call here to update the order in the backend
  //   }
  // };
  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = subCourses.findIndex(
        (item) => item.subCourseId === active.id
      );
      const newIndex = subCourses.findIndex(
        (item) => item.subCourseId === over.id
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        const updatedSubCourses = arrayMove(subCourses, oldIndex, newIndex);
        setSubCourses(updatedSubCourses);

        try {
          // API call to update the order
          const response = await editSubCourseWeightage({
            categoryId: decodedCategory, // Use the correct category ID
            // Or provide the correct sub-category ID if needed
            subCategoryId: active.id,
            organisation: initialOrgType, // Ensure this is the correct value
            weightage: newIndex + 1,
          }).unwrap();

          if (response.statusCode === 200) {
            refetch(); // Refetch data if necessary
          }
        } catch (error) {
          console.error("Error updating sub-category weightage:", error);
        }
      }
    }
  };

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
            {decodedCategory !== "subcategory" ? (
              // With Drag-and-Drop
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={subCourses.map((item) => item.subCourseId)}
                  strategy={verticalListSortingStrategy}
                >
                  {subCourses.map((subCourse) => (
                    <SortableItem key={subCourse.subCourseId} id={subCourse.subCourseId}>
                      <TableCell className={tblTextClass}>{subCourse.title}</TableCell>
                      <TableCell className={tblTextClass}>{categoryTitle}</TableCell>
                      <TableCell className={tblTextClass}>
                        {subCourse?.subCourseResponse?.length}
                      </TableCell>
                      <TableCell className={tblTextClass}></TableCell>
                    </SortableItem>
                  ))}
                </SortableContext>
              </DndContext>
            ) : (
              // Without Drag-and-Drop
              getSubCourseCategory.map((subCourse, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleCategoryClick(subCourse.subCourseId)}
                >
                  <TableCell className={tblTextClass}>{subCourse.title}</TableCell>
                  <TableCell className={tblTextClass}>{categoryTitle}</TableCell>
                  <TableCell className={tblTextClass}>
                    {subCourse?.subCourseResponse?.length}
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

export default SubCategoryContent;
