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
import AddCourseForm from "./courses/AddCourseForm";
import { AlertDialog } from "@/components/ui/alert-dialog";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { useCourseDeleteMutation } from "@/redux/queries/deleteCourse";
import { useCourseEditorMutation } from "@/redux/queries/courseById";
import { useCourseUnMapMutation } from "@/redux/queries/courseUnMapApi";

function CourseCategoryContent() {
  const [storeCourseId, setStoreCourseId] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [unMapDialog, setUnMapDialog] = useState(false);
  const [courseAddDialog, setCourseAddDialog] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [courseEditData, setCourseEditData] = useState();
  const [unMapCategoryOptions, setUnMapCategoryOptions] = useState([]);
  const [unMapSubCategoryOptions, setUnMapSubCategoryOptions] = useState([]);
  const [selectedUnMapCategory, setSelectedUnMapCategory] = useState("");
  const [selectedUnMapSubCategory, setSelectedUnMapSubCategory] = useState("");
  const [unMapCategoryId, setUnMapCategoryId] = useState(null);
  const [unMapSubCategoryId, setUnMapSubCategoryId] = useState(null);
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
  const [deleteSelectedCourse] = useCourseDeleteMutation();
  const [courseUnMap] = useCourseUnMapMutation();

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
  const handleUnmapSelected = (event, type) => {
    if (type === "category") {
      setSelectedUnMapCategory(event.target.value);
      setUnMapCategoryId(event.target.options);
    } else {
      setSelectedUnMapSubCategory(event.target.value);
      setUnMapSubCategoryId(event.target.options);
    }
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
  const unMapDialogForm = () => {
    return (
      <section>
        <p className={pStyle}>Select Category</p>
        <Dropdown
          multi
          sectionStyle="my-section-style"
          name="category"
          value={selectedUnMapCategory}
          onChange={(e) => handleUnmapSelected(e, "category")}
          placeholder="Select to Map Category"
          options={unMapCategoryOptions}
        />

        <p className={pStyle}>Select SubCategory</p>
        <Dropdown
          multi
          sectionStyle="my-section-style"
          name="subcategory"
          placeholder="Select to unMap SubCategory"
          value={selectedUnMapSubCategory}
          onChange={(e) => handleUnmapSelected(e, "subcategory")}
          options={unMapSubCategoryOptions}
          disabled={unMapSubCategoryOptions.length > 0 ? false : true}
        />
      </section>
    );
  };

  const handleCourseCheckbox = (courseId, course) => () => {
    setStoreCourseId((prevIds) =>
      prevIds.includes(courseId)
        ? prevIds.filter((id) => id !== courseId)
        : [...prevIds, courseId]
    );

    if (course) {
      const newCategoryOptions =
        course.categories?.map(({ categoryTitle, categoryId }) => ({
          label: categoryTitle,
          value: categoryTitle,
          Id: categoryId,
        })) || [];

      const newSubCategoryOptions =
        course.subCategories?.map(({ subCategoryTitle, subCategoryId }) => ({
          label: subCategoryTitle,
          value: subCategoryTitle,
          Id: subCategoryId,
        })) || [];
      setUnMapCategoryOptions(newCategoryOptions);
      setUnMapSubCategoryOptions(newSubCategoryOptions);
    }
  };

  const handleCreateCategory = async () => {  
    if (selectedSubCategoryId) {
      try {
        await courseSubCategoryMap({
          bodyData: storeCourseId,
          subCategoryId: selectedSubCategoryId,
        });
        setStoreCourseId([]);
        courseRefetch();
        setDialogOpen(false);
        setSelectedCategoryName(null)
        setSelectedSubCategoryName(null)
      } catch (error) {
        console.error("Subcategory mapping failed", error);
      }
    } else if (selectedCategoryId) {
      try {
        await courseCategoryMap({
          bodyData: storeCourseId,
          categoryId: selectedCategoryId,
        });
        setStoreCourseId([]);
        courseRefetch();
        setDialogOpen(false);
        setSelectedCategoryName(null)
        setSelectedSubCategoryName(null)
      } catch (error) {
        console.error("Category mapping failed", error);
      }
    }
    
  };
  const [selectedCourseDetailsToEdit, { data: courseToEdit }] =
    useCourseEditorMutation();
  const handleEditClick = (course) => async () => {
    try {
      const response = await selectedCourseDetailsToEdit({
        courseId: course.course_id,
      }).unwrap();
      setCourseEditData(response?.data);
      setCourseAddDialog(true);
    } catch (err) {
      console.error("Failed to fetch course details", err);
    }
  };

  const deleteICon = "/illustrate_delete.svg";
  const handleDeleteClick = (id, courseName) => () => {
    setCourseName(courseName);
    setCourseId(id);
    setDeleteCourse(true);
  };
  const handleDeleteSelectedCourse = async () => {
    try {
      const response = await deleteSelectedCourse({ courseId }).unwrap();
      setDeleteCourse(false);
      courseRefetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnMapCategories = async () => {
    const getCategoryId = [];
    const getSubCategoryId = [];
    unMapCategoryId?.forEach((item) => {
      getCategoryId.push(item.Id);
    });
    unMapSubCategoryId?.forEach((item) => {
      getSubCategoryId.push(item.Id);
    });
    const payload = {
      categoryIds: getCategoryId,
      subCategoryIds: getSubCategoryId,
    };
    try {
      const response = await courseUnMap({
        bodyData: payload,
        courseId: storeCourseId,
      }).unwrap();
      courseRefetch();
      setUnMapDialog(false)
      setSelectedUnMapCategory("")
      setSelectedUnMapSubCategory("")
      setStoreCourseId([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog>
        <article className="flex justify-between items-center">
          <div className="flex gap-3 pt-[2.222vh] items-center">
            <div className="pl-[1.875vw] w-[29.688vw]">
              <Input
                inputStyle="rounded-md"
                placeholder="search"
                iconPath="/images/icon_outline_search.png"
              />
            </div>
            <DialogTrigger asChild>
              <button
                onClick={() => {
                  setDialogOpen(true);
                  setCourseAddDialog(false);
                }}
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
            <DialogTrigger asChild>
              <button
                onClick={() => {
                  setUnMapDialog(true);
                  setDialogOpen(false);
                  setCourseAddDialog(false);
                }}
                disabled={storeCourseId.length !== 1}
                className={`${
                  storeCourseId.length === 1
                    ? "cursor-pointer bg-gradient text-white"
                    : "cursor-not-allowed bg-gray-400"
                } py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw]  rounded-lg`}
              >
                Unmap
              </button>
            </DialogTrigger>
          </div>
          <DialogTrigger>
            <button
              onClick={() => {
                setCourseAddDialog(true);
                setCourseEditData(null);
              }}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              Add Course
            </button>
          </DialogTrigger>
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
        {unMapDialog && (
          <CommonDialog
            header="UnMap"
            footerBtnTitle="UnMap"
            formfn={unMapDialogForm}
            footerBtnClick={handleUnMapCategories}
            dialogCloseClick={() => setUnMapDialog(false)}
          />
        )}
        <Dialog open={courseAddDialog} onOpenChange={setCourseAddDialog}>
          <AddCourseForm
            courseRefetch={courseRefetch}
            dialogCloseClick={setCourseAddDialog}
            courseEditData={courseEditData}
          />
        </Dialog>
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
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
              {courseData?.data?.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className={tblTextClass} title={ele.course_name}>
                    <div className="flex space-x-2">
                      <Checkbox
                        onChange={handleCourseCheckbox(ele.course_id, ele)}
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
                  <TableCell className={tblTextClass}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={handleEditClick(ele)}
                          className="mr-2 text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </DialogTrigger>
                    </Dialog>
                    <button
                      onClick={handleDeleteClick(
                        ele.course_id,
                        ele.course_name
                      )}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <AlertDialog
          open={deleteCourse}
          onOpenChange={(open) => setDeleteCourse(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteCourse}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${courseName} Category`}
            deleteFunction={handleDeleteSelectedCourse}
          />
        </AlertDialog>
      </div>
    </>
  );
}

export default CourseCategoryContent;
