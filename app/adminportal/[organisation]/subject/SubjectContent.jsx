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
import { useSubjectDeleteMutation } from "@/redux/queries/deletSubjectApi";
const SubjectContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [subjectNameDialog, setSubjectNameDialog] = useState(false);
  const [subjectId, setSubjectId] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
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
    SubjectName: Yup.string().required("Subject Name is required"),
  });

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        subjectTitle: values.SubjectName,
      };
      try {
        const response = await addSubject(payload).unwrap();
        refetchSubjects();
        setSubjectNameDialog(false);
      } catch (err) {
        console.log(err);
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
          </div>
          <DialogTrigger>
            <button
              onClick={() => setSubjectNameDialog(true)}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              Subject
            </button>
          </DialogTrigger>
        </article>
        {subjectNameDialog && (
          <CommonDialog
            header="Add New Subject"
            footerBtnTitle="Add New Subject"
            formfn={dialogForm}
            footerBtnClick={footerBtnClick}
          />
        )}
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
              <>
                {subjectResponse?.data?.map((ele) => (
                  <TableRow key={ele.subjectId}>
                    <TableCell>{ele.subjectTitle}</TableCell>
                    <TableCell>{ele.chapters.length}</TableCell>
                    <TableCell>
                      {ele.chapters.reduce(
                        (totalTopics, chapter) =>
                          totalTopics + chapter.topics.length,
                        0
                      )}
                    </TableCell>
                    <TableCell>
                      {ele.chapters.reduce(
                        (totalSubtopics, chapter) =>
                          totalSubtopics +
                          chapter.topics.reduce(
                            (total, topic) =>
                              total + (topic.subTopics?.length || 0),
                            0
                          ),
                        0
                      )}
                    </TableCell>
                    <TableCell className={tblTextClass}>
                      <button
                        onClick={() => handleCreateEditSubject(ele.subjectId)}
                        className="mr-2 text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteDialog(true), setSubjectId(ele.subjectId);
                        }}
                        className="text-red-500 hover:underline"
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
    </>
  );
};

export default SubjectContent;
