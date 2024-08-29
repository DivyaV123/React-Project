"use client";
import React, { useEffect, useState } from "react";
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
import Input from "@/components/commonComponents/input/Input";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
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

import { useCategoryWeightageEditMutation } from "@/redux/queries/updateCategoryWeightageApi";
import { useCategoryAdderMutation } from "@/redux/queries/addCategoryApi";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { useCategoryDeleteMutation } from "@/redux/queries/deleteCategoryApi";
import { useCategoryEditDataMutation } from "@/redux/queries/editCategoryApi";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [deleteCategory, setDeleteCategory] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [warningCategory, setWarningCategory] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [createCategory, setCreateCategory] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [instituteParam] = getParams[0].split(",").slice(1);
  const [getCategoryName, setGetCategoryName] = useState("");
  const [errorCategoryName, setErrorCategoryName] = useState("");
  const { toast } = useToast();
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
  const [editCategoryWeightage] = useCategoryWeightageEditMutation();
  const [deleteSelectedCategory] = useCategoryDeleteMutation();
  const [addCategory] = useCategoryAdderMutation();
  const [editCategory] = useCategoryEditDataMutation();
  useEffect(() => {
    refetch();
  }, [instituteParam]);
  useEffect(() => {
    if (categoryData?.data) {
      setCategories(categoryData.data);
    }
  }, [categoryData?.data]);
  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const [selectedFile, setSelectedFile] = useState({
    categoryIconDark: null,
    categoryIconLite: null,
  });
  const [previewURL, setPreviewURL] = useState({
    categoryIconDark: null,
    categoryIconLite: null,
  });
  const [errorMessage, setErrorMessage] = useState({
    categoryIconDark: "",
    categoryIconLite: "",
  });

  const initialValues = {
    categoryName: editData ? editData.title : "",
  };
  const validationSchema = Yup.object({
    categoryName: Yup.string().required("Category Name is required"),
  });
  const dialogCloseClick = () => {
    formikDetails.resetForm();
    setErrorMessage({
      categoryIconDark: "",
      categoryIconLite: "",
    });
    setErrorCategoryName("");
    setSelectedFile({
      categoryIconDark: null,
      categoryIconLite: null,
    });
    setPreviewURL({
      categoryIconDark: null,
      categoryIconLite: null,
    });
    setEditData(null);
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      const checkDuplicates = categories.find(
        (item) => item.title.toLowerCase() === values.categoryName.toLowerCase()
      );
      if (checkDuplicates?.title) {
        setFieldError("categoryName", "Category Name already exists");
        return;
      }
      let payload = {
        title: values.categoryName,
        icon: selectedFile.categoryIconDark,
        alternativeIcon: selectedFile.categoryIconLite,
      };
      let editPayload = {
        title: values.categoryName,
        id: editData?.courseId,
        icon: selectedFile.categoryIconDark,
        alternativeIcon: selectedFile.categoryIconLite,
      };
      try {
        const response = editData
          ? await editCategory({ bodyData: editPayload }).unwrap()
          : await addCategory({ bodyData: payload }).unwrap();
        if (response.statusCode === 200 || response.statusCode === 201) {
          toast({
            title: editData
              ? `${values.categoryName} updated successfully`
              : `${values.categoryName} added successfully`,
            variant: "success",
          });
          
          formikDetails.resetForm();
          refetch();
        }
        setDialogOpen(false);
        dialogCloseClick();
      } catch {
        
        if (editData) {
          setCreateCategory(false);
        }
      }
    },
  });
  const handleFileChange = (event, iconType) => {
    const file = event.target.files[0];
    const previewURL = URL.createObjectURL(file);
    if (file && file.type.startsWith("image/")) {
      setSelectedFile((prevState) => ({
        ...prevState,
        [iconType]: file,
      }));
      setPreviewURL((prevState) => ({
        ...prevState,
        [iconType]: previewURL,
      }));
      setErrorMessage((prevState) => ({
        ...prevState,
        [iconType]: "",
      }));
    } else {
      setSelectedFile((prevState) => ({
        ...prevState,
        [iconType]: null,
      }));
      setPreviewURL((prevState) => ({
        ...prevState,
        [iconType]: previewURL,
      }));
      setErrorMessage((prevState) => ({
        ...prevState,
        [iconType]: "Please upload a valid image file.",
      }));
    }
  };
  const handleCancel = (iconType) => {
    setSelectedFile((prevState) => ({
      ...prevState,
      [iconType]: null,
    }));
    setPreviewURL((prevState) => ({
      ...prevState,
      [iconType]: null,
    }));
    setErrorMessage((prevState) => ({
      ...prevState,
      [iconType]: "",
    }));
  };
  useEffect(() => {
    if (editData) {
      formikDetails.setValues({
        categoryName: editData.title,
      });

      setSelectedFile({
        categoryIconDark: editData.icon
          ? new File([], editData.icon.split("/").pop(), { type: "image/*" })
          : null,
        categoryIconLite: editData.alternativeIcon
          ? new File([], editData.alternativeIcon.split("/").pop(), {
              type: "image/*",
            })
          : null,
      });

      setErrorMessage({
        categoryIconDark: "",
        categoryIconLite: "",
      });
      
    }
  }, [editData]);
  const handleEditClick = (category) => {
    setCreateCategory(true);
    setEditData(category);
    setDialogOpen(true);
    setPreviewURL({
      categoryIconDark: category.icon,
      categoryIconLite: category.alternativeIcon,
    });
  };

  const dialogForm = () => {
    return (
      <form onSubmit={formikDetails.handleSubmit}>
        <div className="pb-[2.222vh]">
          <p className={pStyle}><span class="text-red-500 pr-1">*</span>Category name</p>
          <Input
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            value={formikDetails.values.categoryName}
            name="categoryName"
            placeholder="Enter category name"
          />
          {formikDetails.touched.categoryName &&
          formikDetails.errors.categoryName ? (
            <div className="text-red-500 text-[0.6rem] ">
              {formikDetails.errors.categoryName}
            </div>
          ) : null}
        </div>
        <p className={pStyle}><span class="text-red-500 pr-1">*</span>Category Icon Dark</p>
        <div className="flex gap-4 items-center">
          <div className="w-[50%] break-all">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="file-upload-dark"
              onChange={(event) => handleFileChange(event, "categoryIconDark")}
            />
            <label htmlFor="file-upload-dark">
              <img src="../images/uploadinput.png" alt="file upload" />
            </label>
            {selectedFile.categoryIconDark && (
              <p className="text-gray-700 text-[0.6rem]">
                <span className="font-medium text-[0.6rem]">
                  Selected file:
                </span>{" "}
                {selectedFile.categoryIconDark.name}
              </p>
            )}
            {errorMessage.categoryIconDark && (
              <p className="text-red-500 text-[0.6rem]">
                {errorMessage.categoryIconDark}
              </p>
            )}
          </div>
          <div className="w-[50%]">
            {previewURL.categoryIconDark && (
              <div className=" flex justify-center gap-[0.6vw] h-[24vh] w-[14vw]">
                <img
                  src={previewURL.categoryIconDark}
                  alt="Course Icon Preview"
                  className=" max-w-[12vw] w-[10vw] object-contain "
                />
                <button
                  type="button"
                  onClick={() => handleCancel("categoryIconDark")}
                  className=" text-[0.93vw] text-red-500 rounded-full p-1"
                >
                  cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <p className={pStyle}><span class="text-red-500 pr-1">*</span>Category Icon Lite</p>
        <div className="flex gap-4 items-center">
          <div className="w-[50%] break-all">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="file-upload-lite"
              onChange={(event) => handleFileChange(event, "categoryIconLite")}
            />
            <label htmlFor="file-upload-lite">
              <img src="../images/uploadinput.png" alt="file upload" />
            </label>
            {selectedFile.categoryIconLite && (
              <p className="text-gray-700 text-[0.6rem]">
                <span className="font-medium text-[0.6rem]">
                  Selected file:
                </span>{" "}
                {selectedFile.categoryIconLite.name}
              </p>
            )}
            {errorMessage.categoryIconLite && (
              <p className="text-red-500 text-[0.6rem]">
                {errorMessage.categoryIconLite}
              </p>
            )}
          </div>
          <div className="w-[50%] ">
            {previewURL.categoryIconLite && (
              <div className=" flex justify-center gap-[0.6vw] h-[24vh] w-[14vw]">
                <img
                  className=" max-w-[12vw] w-[10vw] object-contain "
                  src={previewURL.categoryIconLite}
                  alt="Course Icon Preview"
                />
                <button
                  type="button"
                  onClick={() => handleCancel("categoryIconLite")}
                  className=" text-[0.93vw] text-red-500 rounded-full p-1"
                >
                  cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    );
  };
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

  const deleteICon = "/illustrate_delete.svg";
  const warningIcon = "/illustrate_warning.svg";
  const handleDeleteClick = (id, category) => {
    if (category.subCourse.length > 0 || category.courseResponse.length > 0) {
      setWarningCategory(true);
    } else {
      setCategoryId(id);
      setDeleteCategory(true);
      setGetCategoryName(category.title);
    }
  };
  const handledeleteSelectedCategory = async () => {
    try {
      const response = await deleteSelectedCategory({
        categoryId: categoryId,
      }).unwrap();
      setDeleteCategory(false);
      if (response.statusCode === 200 || response.statusCode === 201) {
        toast({
          title: `${getCategoryName} deleted successfully`,
          variant: "delete",
        })
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
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
        <>
          <div className="invisible group-hover:visible flex">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => handleEditClick(category)}
                >
                  Edit
                </button>
              </DialogTrigger>
            </Dialog>
            <button
              className="text-red-500"
              onClick={() => handleDeleteClick(category.courseId, category)}
            >
              Delete
            </button>
          </div>
        </>
      ),
      className: "text-gray-600 font-medium text-xs",
    },
  ];

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const footerBtnClick = () => {
    formikDetails.handleSubmit();
    if (!editData) {
      if (!selectedFile.categoryIconDark || !selectedFile.categoryIconLite) {
        setErrorMessage({
          categoryIconDark: selectedFile.categoryIconDark
            ? ""
            : "Please upload a valid image file.",
          categoryIconLite: selectedFile.categoryIconLite
            ? ""
            : "Please upload a valid image file.",
        });
      }
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = categories.findIndex(
        (item) => item.courseId === active.id
      );
      const newIndex = categories.findIndex(
        (item) => item.courseId === over.id
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        const updatedCategories = arrayMove(categories, oldIndex, newIndex);
        const startIndex = Math.min(oldIndex, newIndex);
        const endIndex = Math.max(oldIndex, newIndex);
        let newWeightage;
        for (let i = startIndex; i <= endIndex; i++) {
          const category = updatedCategories[i];
          newWeightage = i + 1;
        }
        // for (let i = startIndex; i <= endIndex; i++) {
        //   const category = updatedCategories[i];
        //   const newWeightage = i + 1; // Weightage is 1-based

        //   try {
        //     await editCategoryWeightage({
        //       categoryId: category.courseId,
        //       weightage: newWeightage,
        //       organisation: selectedInstitute
        //     }).unwrap();

        //     console.log(`Updated weightage for category ${category.title}: ${newWeightage}`);
        //   } catch (error) {
        //     console.error(`Failed to update weightage for category ${category.title}:`, error);
        //   }
        // }
        setCategories(updatedCategories);

        try {
          const response = await editCategoryWeightage({
            categoryId: active.id,
            weightage: newIndex + 1,
            organisation: initialOrgType,
          }).unwrap();

          if (response.statusCode === 200 || response.statusCode === 201) {
            refetch();
          }
        } catch (error) {
          console.error("Error updating category weightage:", error);
        }
      }
    }
  };

  const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: props.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <TableRow
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="group"
      >
        {props.children}
      </TableRow>
    );
  };
  return (
    <>
      <Dialog>
        <article className="flex justify-between">
          <div className="pt-[2.222vh] pl-[1.875vw] w-[29.688vw]">
            <Input
              inputStyle="rounded-md"
              placeholder="search"
              iconPath="../images/icon_outline_search.png"
            />
          </div>
          <aside className="pt-[2.778vh] pr-[1.875vw]">
            <div className=" bg-gradient rounded-md py-[1.111vh] px-[0.938vw] text-white font-bold flex gap-2 text-[1.094vw]">
              <Svg
                width={svgicons.addIcon[0]}
                height={svgicons.addIcon[1]}
                viewBox={svgicons.addIcon[2]}
                icon={svgicons.addIcon[3]}
                color={svgicons.addIcon[4]}
              />
              <DialogTrigger asChild>
                <button
                  onClick={() => {
                    setDialogOpen(true), setEditData(null);
                  }}
                  className=""
                >
                  Category
                </button>
              </DialogTrigger>
            </div>
          </aside>
        </article>
        {/* {dialogOpen &&
            <CommonDialog
          dialogCloseClick={dialogCloseClick}
          header="Add new category"
          footerBtnTitle="Create Category"
          formfn={dialogForm}
          footerBtnClick={footerBtnClick}
        />
        } */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <CommonDialog
            dialogCloseClick={dialogCloseClick}
            header={editData ? "Edit category" : "Add new category"}
            footerBtnTitle={editData ? "Update" : "Create Category"}
            formfn={dialogForm}
            footerBtnClick={footerBtnClick}
          />
        </Dialog>
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw] overflow-x-hidden">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={categories.map((category) => category.courseId)}
              strategy={verticalListSortingStrategy}
            >
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
                      {categories.map((category) => (
                        <SortableItem
                          key={category.courseId}
                          id={category.courseId}
                        >
                          {renderCells(category).map((cell, cellIndex) => (
                            <TableCell
                              key={cellIndex}
                              className={cell.className}
                              onClick={cell.onClick}
                            >
                              {cell.content}
                            </TableCell>
                          ))}
                        </SortableItem>
                      ))}
                    </>
                  )}
                </TableBody>
              </Table>
            </SortableContext>
          </DndContext>
        </div>
        <AlertDialog
          open={deleteCategory}
          onOpenChange={(open) => setDeleteCategory(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteCategory}
            btnText="Delete"
            contentText={
              <>
                Are you sure you want to delete{" "}
                <strong className="font-extrabold">{getCategoryName}</strong>{" "}
                Category?
              </>
            }
            deleteFunction={handledeleteSelectedCategory}
          />
        </AlertDialog>
        <AlertDialog
          open={warningCategory}
          onOpenChange={(open) => setWarningCategory(open)}
        >
          <DeleteWarningPopup
            header="Warning"
            icon={warningIcon}
            setDeleteCategory={setWarningCategory}
            btnText="Close"
            contentText="You can’t delete the Category until there is a course in it"
            deleteFunction={() => {
              setWarningCategory(false);
            }}
          />
        </AlertDialog>
      </div>
      <Toaster />
    </>
  );
};

export default AdminCategory;
