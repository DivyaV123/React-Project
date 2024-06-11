"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/commonComponents/button/Button";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css"
import Input from "@/components/commonComponents/input/Input";
import { useGetAllCategoriesInCourseQuery } from "@/redux/queries/getAllCategoriesInCourseForm";

function CourseFormLanding() {
    const { data: courseList, error, isLoading } = useGetAllCategoriesInCourseQuery()
    // console.log(courseList,"courseListcourseListF")
    const [faqs, setFaqs] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const validationSchema = Yup.object({
        course: Yup.string().required("Course is required"),
        subCourse: Yup.string().required("Sub Course is required"),
        courseName: Yup.string().required("Course Name is required"),
        courseDescription: Yup.string().required("Course Description is required"),
        courseSummary: Yup.string().required("Course Summary is required"),
        aboutCourse: Yup.string().required("About the Course is required"),
        courseHighlights: Yup.string().required("Course Highlights are required"),
        // question: Yup.string().required('Question is required'),
        // answer: Yup.string().required('Answer is required'),

        organisation: Yup.array().min(1, "At least one organisation is required"),
    });

    let initialValues = {
        course: "",
        subCourse: "",
        courseName: "",
        courseDescription: "",
        courseSummary: "",
        aboutCourse: "",
        courseHighlights: "",
        // question: '',
        faqs: [],
        answer: "",
        organisation: [],
    };
    const onSubmit = (values) => {
        // e.preventDefault()
        const updatedValues = {
            ...values,
            faqs: faqs,
        };
        console.log(values, formikDetails, "asd", updatedValues);
        // formikDetails.resetForm(initialValues);
    };
    const formikDetails = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    const commonLabelStyles = "pb-[1.111vh]";

    return (
        <section className="w-[87.5vw] m-auto">
            <article className="border py-[2.5vw] px-[2.5vw] border-2 rounded-xl my-[2.5vw]">
                <form>
                    <div className="flex justify-between mb-[4.444vh]">
                        <div className="w-[33vw]">
                            <p className={commonLabelStyles}>Course</p>
                            <Input
                                error={formikDetails.errors.name && formikDetails.touched.name}
                                className={`${formikDetails.touched.course && formikDetails.errors.course
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                                name="course"
                                value={formikDetails.values.course}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                            />
                            {formikDetails.touched.course && formikDetails.errors.course ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.course}
                                </div>
                            ) : null}
                        </div>
                        <div className="w-[33vw]">
                            <p className={commonLabelStyles}>Sub Course</p>
                            <Input
                                error={
                                    formikDetails.errors.subCourse &&
                                    formikDetails.touched.subCourse
                                }
                                className={`${formikDetails.touched.course && formikDetails.errors.course
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                                name="subCourse"
                                value={formikDetails.values.subCourse}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                            />
                            {formikDetails.touched.subCourse &&
                                formikDetails.errors.subCourse ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.subCourse}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="w-[33vw] mb-[4.444vh]">
                        <p className={commonLabelStyles}>Course Name</p>
                        <Input
                            name="courseName"
                            value={formikDetails.values.courseName}
                            onChange={formikDetails.handleChange}
                            onBlur={formikDetails.handleBlur}
                            className={`${formikDetails.touched.course && formikDetails.errors.course
                                ? "border-red-500"
                                : " border-gray-400"
                                }`}
                        />
                        {formikDetails.touched.courseName &&
                            formikDetails.errors.courseName ? (
                            <div className="text-red-500">
                                {formikDetails.errors.courseName}
                            </div>
                        ) : null}
                    </div>
                    <div className="flex justify-between mb-[4.444vh]">
                        <div className="w-[33vw]">
                            <p className={commonLabelStyles}>Course Description</p>
                            <Input
                                name="courseDescription"
                                value={formikDetails.values.courseDescription}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                                className={`${formikDetails.touched.course && formikDetails.errors.course
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                            />

                            {formikDetails.touched.courseDescription &&
                                formikDetails.errors.courseDescription ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.courseDescription}
                                </div>
                            ) : null}
                        </div>
                        <div className="w-[33vw]">
                            <p className={commonLabelStyles}>Course Summary</p>
                            <Input
                                name="courseSummary"
                                value={formikDetails.values.courseSummary}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                                className={`${formikDetails.touched.course && formikDetails.errors.course
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                            />
                            {formikDetails.touched.courseSummary &&
                                formikDetails.errors.courseSummary ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.courseSummary}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className='w-[33vw] ' >
                        <p className={`${commonLabelStyles}`}>Sub Course</p>
                        <Input />
                    </div>
                    <p className={commonLabelStyles}>FAQ</p>
                    <div className="mb-[4.444vh] border border-2 rounded-md p-[4.444vh] flex flex-col justify-center">
                        <div className="mb-[2.222vh]">
                            <p className={commonLabelStyles}>Question :</p>
                            <Input
                                name="question"
                                value={formikDetails.values.question}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                                className={`${formikDetails.touched.question &&
                                    formikDetails.errors.question
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                            />
                        </div>
                        <div>
                            <p className={commonLabelStyles}>Answer :</p>
                            <Input
                                name="answer"
                                value={formikDetails.values.answer}
                                onChange={(e) => {
                                    formikDetails.handleChange(e);
                                }}
                                onBlur={formikDetails.handleBlur}
                                className={`${formikDetails.touched.answer && formikDetails.errors.answer
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='px-[1.5vw] pt-[1.5vw] '>
                        <p>Organisation</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default CourseFormLanding
