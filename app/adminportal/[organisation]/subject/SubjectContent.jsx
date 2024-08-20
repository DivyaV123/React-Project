"use client";
import React, { useState } from "react";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { useRouter, usePathname } from "next/navigation";
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
import { useGetAllSubjectsQuery } from "@/redux/queries/getAllSubjectsApi";

const SubjectContent = () => {
    const [subjectNameDialog, setSubjectNameDialog] = useState(false);
    const {
        data: subjectResponse,
        isLoading: subjectIsLoading,
        error: subjectError,
        refetch: refetchSubjects,
    } = useGetAllSubjectsQuery();
    console.log(subjectResponse, "subjectResponsesubjectResponse")
    const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
    const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
    const tableHeaders = ["SUBJECT NAMES", "CHAPTERS", "TOPICS", "SUB TOPICS", 'ACTIONS'];

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
            console.log(values);
        },
    });

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
                    {formikDetails.touched.SubjectName && formikDetails.errors.SubjectName ? (
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
                    // dialogCloseClick={dialogCloseClick}
                    // footerBtnClick={footerBtnClick}
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
                                    <TableRow key={ele.id}>
                                        <TableCell>{ele.subjectTitle}</TableCell>
                                        <TableCell>{ele.chapters.length}</TableCell>
                                        <TableCell>
                                            {ele.chapters.reduce(
                                                (totalTopics, chapter) => totalTopics + chapter.topics.length,
                                                0
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {ele.chapters.reduce(
                                                (totalSubtopics, chapter) =>
                                                    totalSubtopics +
                                                    chapter.topics.reduce(
                                                        (total, topic) => total + (topic.subTopics?.length || 0),
                                                        0
                                                    ),
                                                0
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default SubjectContent