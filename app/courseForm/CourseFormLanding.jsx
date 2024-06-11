"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/commonComponents/button/Button";
import Input from "@/components/commonComponents/input/Input";
import TextArea from "@/components/commonComponents/textArea/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CourseFormLanding() {
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
                className={`${
                  formikDetails.touched.course && formikDetails.errors.course
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
                className={`${
                  formikDetails.touched.course && formikDetails.errors.course
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
              className={`${
                formikDetails.touched.course && formikDetails.errors.course
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
                className={`${
                  formikDetails.touched.course && formikDetails.errors.course
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
                className={`${
                  formikDetails.touched.course && formikDetails.errors.course
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
          <div className="flex justify-between mb-[4.444vh]">
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>About the Course</p>
              {/* <textarea
                                name="aboutCourse"
                                value={formikDetails.values.aboutCourse}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                            ></textarea> */}
              <ReactQuill
                value={formikDetails.values.aboutCourse}
                onChange={(value) =>
                  formikDetails.setFieldValue("aboutCourse", value)
                }
              />
              {formikDetails.touched.aboutCourse &&
              formikDetails.errors.aboutCourse ? (
                <div className="text-red-500">
                  {formikDetails.errors.aboutCourse}
                </div>
              ) : null}
            </div>
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>Course Highlights</p>
              {/* <textarea
                                name="courseHighlights"
                                value={formikDetails.values.courseHighlights}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                            ></textarea> */}
              <ReactQuill
                value={formikDetails.values.courseHighlights}
                onChange={(value) =>
                  formikDetails.setFieldValue("courseHighlights", value)
                }
              />
              {formikDetails.touched.courseHighlights &&
              formikDetails.errors.courseHighlights ? (
                <div className="text-red-500">
                  {formikDetails.errors.courseHighlights}
                </div>
              ) : null}
            </div>
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
                className={`${
                  formikDetails.touched.question &&
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
                className={`${
                  formikDetails.touched.answer && formikDetails.errors.answer
                    ? "border-red-500"
                    : " border-gray-400"
                }`}
              />
            </div>
            <div className="flex justify-end gap-2  px-[1.5vw] pt-[1.5vw] ">
              <div>
                <Button
                  title="Add"
                  className="py-[0.5vw] px-[1vw] bg-gradient rounded-md text-white"
                />
              </div>
              <div>
                <Button
                  title="Edit"
                  className="py-[0.5vw] px-[1vw] bg-slate-500 rounded-md text-white"
                />
              </div>
            </div>
            <div></div>
            {formikDetails.touched.faqs && formikDetails.errors.faqs ? (
              <div className="text-red-500">{formikDetails.errors.faqs}</div>
            ) : null}
          </div>

          <div className="px-[1.5vw] pt-[1.5vw]">
            <p>Organisation</p>
          </div>
          <div className="flex flex-col">
            {["Jspiders", "Qspiders", "PySpiders"].map((org) => (
              <label key={org}>
                <input
                  type="checkbox"
                  name="organisation"
                  value={org}
                  onChange={(e) => {
                    formikDetails.handleChange(e);
                  }}
                  checked={formikDetails.values.organisation.includes(org)}
                />
                {org}
              </label>
            ))}
            {formikDetails.touched.organisation &&
            formikDetails.errors.organisation ? (
              <div className="text-red-500">
                {formikDetails.errors.organisation}
              </div>
            ) : null}
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={formikDetails.handleSubmit}
              className="py-2 px-4 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default CourseFormLanding;
