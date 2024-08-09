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
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useGetAllCoursesQuery } from "@/redux/queries/getAllCourseForAdmin";
import { usePathname } from "next/navigation";
import { truncateText } from "@/lib/utils";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { useCourseCategoryMapMutation } from "@/redux/queries/courseCategoryMapingApi";
import { useCourseSubCategoryMapMutation } from "@/redux/queries/courseSubCategoryMapApi";
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCourseWeightageDndMutation } from "@/redux/queries/updateCourseDndApi";
function CourseCategoryContent() {
  const [courses, setCourses] = useState([]);
  const [storeCourseId, setStoreCourseId] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
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
  const { data: courseData, refetch: courseRefetch } = useGetAllCoursesQuery({
    organizationType: initialOrgType,
  });
  const { data: categoryData, refetch: categoryRefetch } =
    useGetAllCategoryQuery({
      organizationType: initialOrgType,
    });

  const [courseCategoryMap] = useCourseCategoryMapMutation();
  const [courseSubCategoryMap] = useCourseSubCategoryMapMutation();

  useEffect(() => {
    courseRefetch();
    categoryRefetch();
  }, [instituteParam]);

  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

  const tableHeaders = [
    "COURSE NAME",
    "CATEGORIES",
    "SUB CATEGORIES",
    "SUBJECTS",
    "ACTIONS",
  ];

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);

  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const categoryOptions = [];
  categoryData?.data?.map((item) => {
    categoryOptions.push({
      label: item.title,
      value: item.title,
      Id: item.courseId,
    });
  });
  
  const handleCategorySelect = (event) => {
    setSelectedCategoryName(event.target.value);
    setSelectedCategoryId(event.target.option.Id);
  };

  const subCatgoryOptions = [];
  categoryData?.data?.map((item) => {
    if (item.title === selectedCategoryName) {
      item.subCourse.length > 0 &&
        item.subCourse.map((subItem) => {
          subCatgoryOptions.push({
            label: subItem.title,
            value: subItem.title,
            Id: subItem.subCourseId,
          });
        });
    }
  });
  const handleSubCategorySelect = (event) => {
    setSelectedSubCategoryName(event.target.value);
    setSelectedSubCategoryId(event.target.option.Id);
  };

  const dialogForm = () => {
    return (
      <section>
        <p className={pStyle}>Select Category</p>
        <Dropdown
          sectionStyle="my-section-style"
          name="category"
          value={selectedCategoryName}
          onChange={handleCategorySelect}
          placeholder="Select the Category"
          options={categoryOptions}
        />

        <p className={pStyle}>Select SubCategory</p>
        <Dropdown
          sectionStyle="my-section-style"
          name="subcategory"
          placeholder="Select the SubCategory"
          value={selectedSubCategoryName}
          onChange={handleSubCategorySelect}
          options={subCatgoryOptions}
          disabled={subCatgoryOptions.length > 0 ? false : true}
        />
      </section>
    );
  };

  const handleCourseCheckbox = (courseId) => () => {
    setStoreCourseId((prevIds) =>
      prevIds.includes(courseId)
        ? prevIds.filter((id) => id !== courseId)
        : [...prevIds, courseId]
    );
  };

  const handleCreateCategory = async () => {
    if (selectedSubCategoryId) {
      try {
        await courseSubCategoryMap({
          bodyData: storeCourseId,
          subCategoryId: selectedSubCategoryId,
        });
        console.log("Subcategory mapping successful");
        setStoreCourseId([]);
        courseRefetch();
        setDialogOpen(false);
      } catch (error) {
        console.error("Subcategory mapping failed", error);
      }
    } else if (selectedCategoryId) {
      try {
        await courseCategoryMap({
          bodyData: storeCourseId,
          categoryId: selectedCategoryId,
        });
        console.log("Category mapping successful");
        setStoreCourseId([]);
        courseRefetch();
        setDialogOpen(false);
      } catch (error) {
        console.error("Category mapping failed", error);
      }
    }
  };
  useEffect(() => {
    if (courseData) {
      setCourses(courseData.data);
    }
  }, [courseData]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const [courseWeitageDnd, { data: courseWeitageDndData, error: courseWeitageDndError, isLoading: courseWeitageDndLoad }] = useCourseWeightageDndMutation();
  const handleDragEnd =async (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setCourses((items) => {
        const oldIndex = items.findIndex((item) => item.course_id === active.id);
        const newIndex = items.findIndex((item) => item.course_id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
      console.log( {active}, {over} ,{event})
     
    }

    // Get the new index for the course
    const newIndex = courses.findIndex((course) => course.course_id === over.id);

    // Find the course object based on active.id
    const activeCourse = courses.find((course) => course.course_id === active.id);

    // Extract categoryIds and subCategoryIds as arrays
    const categoryIds = activeCourse.categories.map((category) => category.categoryId);
    const subCategoryIds = activeCourse.subCategories.map((subCategory) => subCategory.subCategoryId);
    try {
      
      const response=  await courseWeitageDnd({
         categoryIds: categoryIds,
        subCategoryIds: subCategoryIds,
        courseId: active.id,
        weightage: newIndex + 1,
        organisation: initialOrgType,
        }).unwrap();
       
        if(response.statusCode===200){
          refetch()
        }
        
      } catch (error) {
        console.error("Error updating category weightage:", error);
      }
  };

 
  const SortableItem = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition: transition || "transform 150ms ease", // Ensure default transition
      zIndex: transform ? 999 : "auto", // Make sure the item being dragged is on top
    };
  
    return (
      <TableRow
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="group"
      >
        {children}
      </TableRow>
    );
  };
  
  console.log({courses})
  return (
    <>
      <Dialog>
        <article className="flex justify-between">
          <div className="flex gap-3 pt-[2.222vh] ">
            <div className="pl-[1.875vw] w-[29.688vw]">
              <Input
                inputStyle="rounded-md"
                placeholder="search"
                iconPath="/images/icon_outline_search.png"
              />
            </div>
            <DialogTrigger asChild>
              <button
                onClick={() => setDialogOpen(true)}
                disabled={storeCourseId.length === 0}
                className={`${
                  storeCourseId.length > 0
                    ? "cursor-pointer bg-gradient text-white"
                    : "cursor-not-allowed bg-gray-400"
                } py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw]  rounded-lg`}
              >
                Map to Category
              </button>
            </DialogTrigger>
          </div>
        </article>
        {dialogOpen && (
          <CommonDialog
            header="Add new category"
            footerBtnTitle="Create Category"
            formfn={dialogForm}
            footerBtnClick={handleCreateCategory}
            dialogCloseClick={() => setDialogOpen(false)}
          />
        )}
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={courses.map((course) => course.course_id)}
            strategy={verticalListSortingStrategy}
          >
          <Table>
            <TableHeader className="z-1">
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className={tblTextClass}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses?.map((ele, index) => (
                <SortableItem
                        key={ele.course_id}
                        id={ele.course_id}
                      >
                  <TableCell className={tblTextClass} title={ele.course_name}>
                    <div className="flex space-x-2">
                      <Checkbox
                        onChange={handleCourseCheckbox(ele.course_id)}
                        checked={storeCourseId.includes(ele.course_id)}
                      />{" "}
                      {truncateText(ele.course_name, 30)}
                    </div>
                  </TableCell>
                  <TableCell className={tblTextClass}>
                    {ele.categories.length === 0 ? (
                      ele.categories.length
                    ) : ele.categories.length === 1 ? (
                      ele.categories.map((category) => category.categoryTitle)
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.categories
                          .slice(0, 1)
                          .map((category) => category.categoryTitle)}
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
                                {ele.categories
                                  .slice(1)
                                  .map((category, idx) => (
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
                      ele.subCategories.map(
                        (subcategory) => subcategory.subCategoryTitle
                      )
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.subCategories
                          .slice(0, 1)
                          .map((subcategory) => subcategory.subCategoryTitle)}
                        {ele.subCategories.length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() =>
                                handleMouseEnter(`sub-${index}`)
                              }
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.subCategories.length - 1}
                            </button>
                            {dropdownOpen === `sub-${index}` && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.subCategories
                                  .slice(1)
                                  .map((subcategory, idx) => (
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
                  <TableCell className={tblTextClass}>
                    {ele.subjectCount}
                  </TableCell>
                </SortableItem>
              ))}
            </TableBody>
          </Table>
          </SortableContext>
        </DndContext>
        </div>
      </div>
    </>
  );
}

export default CourseCategoryContent;
