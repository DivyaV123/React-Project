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
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
import Input from "@/components/commonComponents/input/Input";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

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
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useCreateSubCategoryMutation } from "@/redux/queries/createSubCategoryApi";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { useSubCategoryDeleteMutation } from "@/redux/queries/deleteSubCategoryApi";
import { useUpdateSubCategoryMutation } from "@/redux/queries/updateSubCategoryApi";

function SubCategoryContent() {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [assignCategoryID, setAssignCategoryID] = useState(null);
  const [subCategoryId, setSubCategoryId] = useState("");
  const [deleteSubCategoryModal, setDeleteSubCategoryModal] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState("");
  const initialValues = {
    subCategory: editData ? editData.title : "",
    assignCategory: editData ? editData.assignCategory : "",
  };
  const validationSchema = Yup.object({
    subCategory: Yup.string().required("subCategory is required"),
    assignCategory:
      !editData && Yup.string().required("assignCategory is required"),
  });
  const [updateSubCategory] = useUpdateSubCategoryMutation();
  const [
    craeteSubCategory,
    {
      data: postSubCategory,
      error: postSubCategoryError,
      isLoading: postSubCategoryLoad,
    },
  ] = useCreateSubCategoryMutation();
  const [deleteSubCategory] = useSubCategoryDeleteMutation();
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
  const { data: categoryData, refetch: categoryDataRefetch } =
    useGetAllCategoryQuery({
      organizationType: initialOrgType,
    });
  useEffect(() => {
    categoryDataRefetch();
  }, [instituteParam]);

  const [subCourses, setSubCourses] = useState([]);

  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

  const getTitle = categoryData?.data.find(
    (ele) => ele.courseId == decodedCategory
  )?.title;

  const categoryTitle =
    decodedCategory === "subcategory"
      ? categoryData?.data
          .filter((ele) => ele.subCourse.length > 0)
          .flatMap((ele) => ele.title)
      : getTitle;

  const getSubCourseCategory = useMemo(() => {
    if (!categoryData?.data) return [];

    if (decodedCategory === "subcategory") {
      return categoryData.data.flatMap((ele) =>
        ele?.subCourse?.length > 0 ? ele.subCourse : []
      );
    } else {
      return categoryData.data
        .filter((ele) => ele.courseId == decodedCategory)
        .flatMap((subele) =>
          subele.subCourse.length > 0 ? subele.subCourse : []
        );
    }
  }, [decodedCategory, categoryData]);
  useEffect(() => {
    if (categoryData?.data) {
      const initialSubCourses = getSubCourseCategory;
      setSubCourses(initialSubCourses);
    }
  }, [categoryData, decodedCategory]);
  const handleCategoryClick = (subcourseid) => {
    router.push(
      `${ADMIN_PORTAL}/${getParams[0]}/dynamic/course/${decodedCategory},${subcourseid}`
    );
  };

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

  const assignCategoryOptions = [];
  categoryData?.data.map((item) => {
    assignCategoryOptions.push({
      label: item.title,
      value: item.title,
      Id: item.courseId,
    });
  });
  const createBatchForm = (formikDetails) => {
    return (
      <Form className="space-y-4">
        <div>
          <label htmlFor="subCategory">Sub Category</label>
          <Input
            id="subCategory"
            name="subCategory"
            placeholder="Enter category name"
            value={formikDetails.values.subCategory}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            className="input-class"
          />
          {formikDetails.touched.subCategory &&
          formikDetails.errors.subCategory ? (
            <div className="text-red-500 text-[12px] absolute">
              {formikDetails.errors.subCategory}
            </div>
          ) : null}
        </div>
        {!editData && (
          <>
            <div>
              <label htmlFor="assignCategory">Assign Category</label>
              <Dropdown
                placeholder="--Select--"
                inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
                iconStyle="w-[10%]"
                options={assignCategoryOptions}
                name="assignCategory"
                value={formikDetails.values.assignCategory}
                onChange={(event) => {
                  formikDetails.setFieldValue(
                    "assignCategory",
                    event.target.value
                  );
                  setAssignCategoryID(event.target.option.Id);
                }}
              />
              {formikDetails.touched.assignCategory &&
              formikDetails.errors.assignCategory ? (
                <div className="text-red-500 text-[12px] absolute">
                  {formikDetails.errors.assignCategory}
                </div>
              ) : null}
            </div>
          </>
        )}
      </Form>
    );
  };
  const handleCreateBatch = async (values) => {
    let payload = {
      subCategoryTitle: values.subCategory,
    };
    let editPayload = {
      subCategoryTitle: values?.subCategory,
      subCategoryId: editData?.subCourseId,
    };

    try {
      const response = editData
        ? await updateSubCategory({ payload: editPayload })
        : await craeteSubCategory({
            payload: payload,

            categoryId: assignCategoryID,
          });

      if (response.data.statusCode === 201) {
        toast({
          title: "SubCategory Updated successfully",
          variant: "success",
        });
        setDialogOpen(false);
        categoryDataRefetch();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleEditClick = (category) => {
    setEditData(category);
    setDialogOpen(true);
  };
  const deleteICon = "/illustrate_delete.svg";
  const handleDeleteClick = (id, batchName) => () => {
    setSubCategoryId(id);
    setDeleteSubCategoryModal(true);
    setSubCategoryName(batchName);
  };

  const handleDeleteSubCategory = async () => {
    try {
      const response = await deleteSubCategory({ subCategoryId }).unwrap();
      setDeleteSubCategoryModal(false);
      categoryDataRefetch();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Dialog>
        <article className="flex justify-between">
          <div className="pt-[2.222vh] pl-[1.875vw] w-[29.688vw]">
            <Input
              inputStyle="rounded-md"
              placeholder="search"
              iconPath="/images/icon_outline_search.png"
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
                    setEditData(null);
                    setDialogOpen(true);
                  }}
                  className=""
                >
                  Sub Category
                </button>
              </DialogTrigger>
            </div>
          </aside>
        </article>
        {dialogOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateBatch}
          >
            {(formikDetails) => (
              <CommonDialog
                header="Add new sub-Category"
                footerBtnTitle="Create Sub Category"
                formfn={() => createBatchForm(formikDetails)}
                footerBtnClick={formikDetails.handleSubmit}
                dialogCloseClick={() => setDialogOpen(false)}
              />
            )}
          </Formik>
        )}
      </Dialog>

      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh] ">
          {getParams[1] === "dynamic" ? (
            <p className="px-4 font-bold text-[#434343]">{categoryTitle}</p>
          ) : (
            ""
          )}
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
                      <SortableItem
                        key={subCourse.subCourseId}
                        id={subCourse.subCourseId}
                      >
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
                      </SortableItem>
                    ))}
                  </SortableContext>
                </DndContext>
              ) : (
                // Without Drag-and-Drop
                getSubCourseCategory.map((subCourse, index) => (
                  <TableRow key={index} className="cursor-pointer group">
                    <TableCell
                      onClick={() => handleCategoryClick(subCourse.subCourseId)}
                      className={tblTextClass}
                    >
                      {subCourse.title}
                    </TableCell>
                    <TableCell className={tblTextClass}>
                      {categoryTitle}
                    </TableCell>
                    <TableCell className={tblTextClass}>
                      {subCourse?.subCourseResponse?.length}
                    </TableCell>
                    <TableCell className={tblTextClass}>
                      <div className="invisible group-hover:visible flex">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              className="text-blue-500 mr-2"
                              onClick={() => handleEditClick(subCourse)}
                            >
                              Edit
                            </button>
                          </DialogTrigger>
                          {dialogOpen && (
                            <Formik
                              initialValues={initialValues}
                              validationSchema={validationSchema}
                              onSubmit={handleCreateBatch}
                            >
                              {(formikDetails) => (
                                <CommonDialog
                                  header="Edit sub-Category"
                                  footerBtnTitle="Update"
                                  formfn={() => createBatchForm(formikDetails)}
                                  footerBtnClick={formikDetails.handleSubmit}
                                  dialogCloseClick={() => setDialogOpen(false)}
                                />
                              )}
                            </Formik>
                          )}
                        </Dialog>
                        <button
                          className="text-red-500"
                          onClick={handleDeleteClick(
                            subCourse.subCourseId,
                            subCourse.title
                          )}
                        >
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <AlertDialog
          open={deleteSubCategoryModal}
          onOpenChange={(open) => setDeleteSubCategoryModal(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteSubCategoryModal}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${subCategoryName} Course`}
            deleteFunction={handleDeleteSubCategory}
          />
        </AlertDialog>
        <Toaster/>
      </div>
    </>
  );
}

export default SubCategoryContent;
