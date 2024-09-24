"use client";
import React, { useState } from "react";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { AlertDialog } from "@/components/ui/alert-dialog";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { useRouter, usePathname } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useGetAllSubjectsQuery } from "@/redux/queries/getAllSubjectsApi";
import { useAddSubjectMutation } from "@/redux/queries/addSubjectApi";
import { truncateText } from "@/lib/utils";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useGetAllCoursesQuery } from "@/redux/queries/getAllCourseForAdmin";
import { useSubjectMappingMutation } from "@/redux/queries/mapSubjectApi";
import { useSubjectDeleteMutation } from "@/redux/queries/deletSubjectApi";
import { useUnMapsubjectMappingMutation } from "@/redux/queries/unMapSubjectApi";

const SubjectContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [subjectNameDialog, setSubjectNameDialog] = useState(false);
  const [editData, setEditData] = useState(false);
  const [subjectId, setSubjectId] = useState(null);
  const [subjectName, setSubjectName] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [storeCourseId, setStoreCourseId] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [unMapDialog, setUnMapDialog] = useState(false);
  const [unMapSubjectOptions, setUnMapSubjactOptions] = useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const {
    data: subjectResponse,
    isLoading: subjectIsLoading,
    error: subjectError,
    refetch: refetchSubjects,
  } = useGetAllSubjectsQuery();
  const [addSubject] = useAddSubjectMutation();
  const [deleteSelectedSubject] = useSubjectDeleteMutation();
  const deleteICon = "/illustrate_delete.svg";
  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const tableHeaders = [
    "SUBJECT NAMES",
    "CHAPTERS",
    "TOPICS",
    "SUB TOPICS",
    "ACTIONS",
  ];
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

  const initialValues = {
    SubjectName: "",
  };

  const validationSchema = Yup.object({
    SubjectName: Yup.string()
      .matches(/^\S.*$/, "Subject Name cannot start with a space")
      .required("Subject Name is required"),
  });

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        subjectTitle: values.SubjectName,
        subjectId: subjectId ? subjectId : null,
      };
      try {
        const response = await addSubject(payload).unwrap();
        refetchSubjects();
        setSubjectNameDialog(false);
      } catch (err) {
        console.error(err);
      }
    },
  });
  const footerBtnClick = () => {
    formikDetails.handleSubmit();
  };
  const handleCreateEditSubject = (subjectId) => {
    router.push(
      `${ADMIN_PORTAL}/Subject,${instituteParam}/subject/${subjectId}`
    );
  };
  const handleDeleteSelectedSubject = async () => {
    if (subjectId) {
      try {
        const response = await deleteSelectedSubject({
          subjectId: subjectId,
        }).unwrap();
        setDeleteDialog(false);
        refetchSubjects();
        toast({
          variant: "destructive",
          title: <span className=" font-bold  ">Deleted Successfully</span>,
        });
        setSelectedSubjectName("");
        refetchSubjects();
      } catch (err) {
        console.log(err);
      }
    }
  };
  const dialogForm = () => {
    return (
      <form onSubmit={formikDetails.handleSubmit}>
        <div className="pb-[2.222vh]">
          <p className={pStyle}>Subject name</p>
          <Input
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            value={formikDetails.values.SubjectName}
            name="SubjectName"
            placeholder="Enter Subject name"
          />
          {formikDetails.touched.SubjectName &&
          formikDetails.errors.SubjectName ? (
            <div className="text-red-500 text-[0.6rem] ">
              {formikDetails.errors.SubjectName}
            </div>
          ) : null}
        </div>
      </form>
    );
  };

  const handleCourseCheckbox = (subjectId, subject) => () => {
    setStoreCourseId((prevIds) =>
      prevIds.includes(subjectId)
        ? prevIds.filter((id) => id !== subjectId)
        : [...prevIds, subjectId]
    );

    if (subject) {
      const newCategoryOptions =
        subject.chapters?.map(({ chapterTitle, chapterId }) => ({
          label: chapterTitle,
          value: chapterTitle,
          Id: chapterId,
        })) || [];

      setUnMapSubjactOptions(newCategoryOptions);
    }
  };
  const { data: coursesData, refetch: categoryRefetch } = useGetAllCoursesQuery(
    {
      organizationType: initialOrgType,
    }
  );
  const coursesOptions = [];
  coursesData?.data?.map((item) => {
    coursesOptions.push({
      label: item.course_name,
      value: item.course_name,
      Id: item.course_id,
    });
  });
  const handleCourseSelect = (event) => {
    setSelectedCourseName(event.target.value);
    setSelectedCourseId(event.target.option.Id);
  };
  const handleUnmapSelected = (event) => {
    setSelectedCourseName(event.target.value);
    setSelectedCourseId(event.target.option.Id);
  };
  const mapSubjectForm = () => {
    return (
      <section>
        <p className={pStyle}>Select Course</p>
        <Dropdown
          sectionStyle="my-section-style"
          name="Course"
          value={selectedCourseName}
          onChange={handleCourseSelect}
          placeholder="Select the Course"
          options={coursesOptions}
        />
      </section>
    );
  };
  const [subjectMapping, { isLoading: mapSubjectLoading }] =
    useSubjectMappingMutation();

  const [unMapsubjectMapping] = useUnMapsubjectMappingMutation();
  const handleCreateCourse = async () => {
    if (selectedCourseId) {
      try {
        await subjectMapping({
          payload: storeCourseId,
          courseId: selectedCourseId,
        });
        setStoreCourseId([]);
        refetchSubjects();
        setDialogOpen(false);
        setSelectedCourseName(null);
      } catch (error) {
        console.error(" mapping failed", error);
      }
    }
  };
  const unMapDialogForm = () => {
    return (
      <section>
        <p className={pStyle}>Select Course</p>
        <Dropdown
          sectionStyle="my-section-style"
          name="Course"
          value={selectedCourseName}
          onChange={handleUnmapSelected}
          placeholder="Select to Map Course"
          options={coursesOptions}
        />
      </section>
    );
  };
  const handleUnMapSubject = async () => {
    try {
      const response = await unMapsubjectMapping({
        payload: storeCourseId,
        courseId: selectedCourseId,
      }).unwrap();

      setUnMapDialog(false);

      refetchSubjects();
      setDialogOpen(false);
      setSelectedCourseName(null);
      setStoreCourseId([]);
    } catch (err) {
      console.error(err);
    }
  };
  const handleCreateSubject = () => {
    setEditData(false); 
    setSubjectId(null); 
    formikDetails.setValues({ SubjectName: "" }); 
    setSubjectNameDialog(true); 
  };
  const handleEditSubject = (subjectId, subjectTitle) => {
    setEditData(true); 
    setSubjectId(subjectId); 
    formikDetails.setValues({ SubjectName: subjectTitle }); 
    setSubjectNameDialog(false); 
    setTimeout(() => setSubjectNameDialog(true), 0); 
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
                }}
                disabled={storeCourseId.length === 0}
                className={`${
                  storeCourseId.length > 0
                    ? "cursor-pointer bg-gradient text-white"
                    : "cursor-not-allowed bg-gray-400"
                } py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw]  rounded-lg`}
              >
                Map to Course
              </button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <button
                onClick={() => {
                  setUnMapDialog(true);
                  setDialogOpen(false);
                }}
                // disabled={storeCourseId.length !== 1}
                disabled={storeCourseId.length === 0}
                className={`${
                  storeCourseId.length > 0
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
             onClick={() => handleCreateSubject()}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              + Subject
            </button>
          </DialogTrigger>
        </article>
        {dialogOpen && (
          <CommonDialog
            header="Add new Subject"
            footerBtnTitle="Create Subject"
            formfn={mapSubjectForm}
            footerBtnClick={handleCreateCourse}
            dialogCloseClick={() => setDialogOpen(false)}
          />
        )}
        {subjectNameDialog && (
          <CommonDialog
            header={`${editData ? "Edit" : "Add new"} Subject`}
            footerBtnTitle={`${editData ? "Update" : "Create Subject"}`}
            formfn={dialogForm}
            footerBtnClick={footerBtnClick}
          />
        )}
        {unMapDialog && (
          <CommonDialog
            header="UnMap"
            footerBtnTitle="UnMap"
            formfn={unMapDialogForm}
            footerBtnClick={handleUnMapSubject}
            dialogCloseClick={() => setUnMapDialog(false)}
          />
        )}

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
                <>
                  {subjectResponse?.data?.map((ele) => (
                    <TableRow key={ele.id}  className="group">
                      <TableCell>
                        {" "}
                        <div className="flex space-x-2 items-center">
                          <Checkbox
                            onChange={handleCourseCheckbox(ele.subjectId, ele)}
                            checked={storeCourseId.includes(ele.subjectId)}
                          />{" "}
                          <div
                            title={ele.subjectTitle}
                            className="cursor-pointer"
                            onClick={() =>
                              handleCreateEditSubject(ele.subjectId)
                            }
                          >
                            {truncateText(ele.subjectTitle, 30)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{ele.chapterCount}</TableCell>
                      <TableCell>{ele.topicCount}</TableCell>
                      <TableCell>{ele.subTopicCount}</TableCell>
                      <TableCell className={`${tblTextClass} invisible group-hover:visible flex`}>
                        <DialogTrigger>
                          <button
                            onClick={() => handleEditSubject(ele.subjectId, ele.subjectTitle)}
                            className="mr-2 text-blue-500 "
                          >
                            Edit
                          </button>
                        </DialogTrigger>
                        <button
                          onClick={() => {
                            setDeleteDialog(true), setSubjectId(ele.subjectId);
                          }}
                          className="text-red-500 "
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              </TableBody>
            </Table>
          </div>
          <AlertDialog
            open={deleteDialog}
            onOpenChange={(open) => setDeleteDialog(open)}
          >
            <DeleteWarningPopup
              header="Delete"
              icon={deleteICon}
              setDeleteCategory={setDeleteDialog}
              btnText="Delete"
              contentText="Are you sure you want to delete"
              deleteFunction={handleDeleteSelectedSubject}
            />
          </AlertDialog>
        </div>
      </Dialog>
    </>
  );
};

export default SubjectContent;
