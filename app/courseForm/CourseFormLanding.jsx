"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/commonComponents/button/Button";
import Input from "@/components/commonComponents/input/Input";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useGetAllCategoriesInCourseQuery } from "@/redux/queries/getAllCategoriesInCourseForm";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useCourseAdderMutation } from "@/redux/queries/courseAdderApi";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);
function CourseFormLanding() {
  const {
    data: courseData,
    error,
    isLoading,
  } = useGetAllCategoriesInCourseQuery();
  const [addCourse, { data: courseAdd, error: courseError, isLoading: courseAdderLoad }] = useCourseAdderMutation();
  const [faqs, setFaqs] = useState([]);
  const [faqEditIndex, setFaqEditIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubCourse, setSelectedSubCourse] = useState("");
  const [subCourseOptions, setSubCourseOptions] = useState([]);
  const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const validationSchema = Yup.object({
    course: Yup.string().required("Course is required"),
    // subCourse: Yup.string().required("Sub Course is required"),
    courseName: Yup.string().required("Course Name is required"),
    courseDescription: Yup.string().required("Course Description is required"),
    courseSummary: Yup.string().required("Course Summary is required"),
    aboutCourse: Yup.string().required("About the Course is required"),
    courseHighlights: Yup.string().required("Course Highlights are required"),
    faqs: Yup.array()
      .min(1, "At least one FAQ is required")
      .of(
        Yup.object().shape({
          question: Yup.string().required("Question is required"),
          answer: Yup.string().required("Answer is required"),
        })
      ),
    organisation: Yup.array().min(1, "At least one organisation is required"),
    mode: Yup.array().min(1, "At least one Mode is required"),
  });

  const initialValues = {
    course: "",
    subCourse: "",
    courseName: "",
    courseDescription: "",
    courseSummary: "",
    aboutCourse: "",
    courseHighlights: "",
    faqs: [],
    question: "",
    answer: "",
    organisation: [],
    mode: [],
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      let subCourse = values.subCourse != "" ? `&subCategoryId=${values.subCourse}` : ''
      const payload = {
        courseName: values.courseName,
        courseDescription: values.courseDescription,
        branchType: values.organisation,
        mode: values.mode,
        courseSummary: values.courseSummary,
        courseAbout: values.aboutCourse,
        courseHighlight: values.courseHighlights,
        faqs: values.faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
          faqType: "COURSE",
        })),
      };

      try {
        const response = await addCourse({ bodyData: payload, courseId: values.course, subcourseId: subCourse }).unwrap();
        console.log(response);
      } catch (err) {
        console.error(err, "Error from loginAPI");
      }
    },
  });

  const commonLabelStyles = "pb-[1.111vh]";

  const addFAQ = (e) => {
    e.preventDefault();
    // Manually validate question and answer fields

    const errors = {};
    if (
      !formikDetails.values.question ||
      formikDetails.values.question === ""
    ) {
      errors.question = "Question is required";
    }
    if (!formikDetails.values.answer) {
      errors.answer = "Answer is required";
    }

    // Set errors and return if there are any
    if (Object.keys(errors).length > 0) {
      formikDetails.setErrors({
        ...formikDetails.errors,
        ...errors,
      });
      return;
    }

    const newFaqs = [...faqs];
    if (faqEditIndex !== null) {
      newFaqs[faqEditIndex] = {
        question: formikDetails.values.question,
        answer: formikDetails.values.answer,
      };
      setFaqEditIndex(null);
    } else {
      newFaqs.push({
        question: formikDetails.values.question,
        answer: formikDetails.values.answer,
      });
    }

    setFaqs(newFaqs);
    formikDetails.setFieldValue("faqs", newFaqs);
    formikDetails.setFieldValue("question", "");
    formikDetails.setFieldValue("answer", "");
    formikDetails.setFieldTouched("question", true);
    formikDetails.setFieldTouched("answer", true);
    formikDetails.setFieldTouched("faqs", false);
    formikDetails.setErrors({
      ...formikDetails.errors,
      question: "",
      answer: "",
    });
  };

  const editFaq = (index) => {
    setFaqEditIndex(index);
    formikDetails.setFieldValue("question", faqs[index].question);
    formikDetails.setFieldValue("answer", faqs[index].answer);
  };

  const deleteFaq = (index) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    setFaqs(newFaqs);
    formikDetails.setFieldValue("faqs", newFaqs);
    formikDetails.setFieldTouched("faqs", false);
    setFaqEditIndex(null);
  };
  const handleCourseSelect = (event) => {
    const selectedCourseId = event.target.value;
    setSelectedCourse(selectedCourseId);

    const selectedCourseData = courseData?.data.find(
      (course) => course.categoryId == selectedCourseId
    );
    if (
      selectedCourseData &&
      selectedCourseData.subCategoryResponse.length > 0
    ) {
      setSubCourseOptions(
        selectedCourseData.subCategoryResponse.map((sub) => ({
          label: sub.subCategoryName,
          value: sub.subCategoryId,
        }))
      );
      setIsSubCourseDisabled(false);
    } else {
      setSubCourseOptions([]);
      setIsSubCourseDisabled(true);
    }

    formikDetails.setFieldValue("course", selectedCourseId);
    formikDetails.setFieldValue("subCourse", "");
  };

  const handleSubCourseSelect = (event) => {
    setSelectedSubCourse(event.target.value);
    formikDetails.setFieldValue("subCourse", event.target.value);
  };

  const courseOptions = courseData?.data?.map((course) => ({
    label: course.categoryName,
    value: course.categoryId,
  }));

  return (
    <section className="w-[87.5vw] m-auto">
      <article className="border py-[2.5vw] px-[2.5vw] border-2 rounded-xl my-[2.5vw]">
        <form onSubmit={formikDetails.handleSubmit}>
          <div className="flex justify-between mb-[4.444vh]">
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>Course</p>
              <Dropdown
                sectionStyle="my-section-style"
                name="course"
                value={selectedCourse}
                onChange={handleCourseSelect}
                placeholder="Select the Course"
                options={courseOptions}
              />
              {formikDetails.touched.course && formikDetails.errors.course ? (
                <div className="text-red-500 text-sm ">
                  {formikDetails.errors.course}
                </div>
              ) : null}
            </div>
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>Sub Course</p>
              <Dropdown
                sectionStyle="my-section-style"
                name="subCourse"
                value={selectedSubCourse}
                onChange={handleSubCourseSelect}
                placeholder="Select the Subcourse"
                options={subCourseOptions}
                disabled={isSubCourseDisabled}
              />
              {formikDetails.touched.subCourse &&
                formikDetails.errors.subCourse ? (
                <div className="text-red-500 text-sm ">
                  {formikDetails.errors.subCourse}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between mb-[4.444vh]">
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>Course Name</p>
              <Input
                name="courseName"
                value={formikDetails.values.courseName}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className={`${formikDetails.touched.courseName &&
                  formikDetails.errors.courseName
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
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>Course Summary</p>
              <Input
                name="courseSummary"
                value={formikDetails.values.courseSummary}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className={`${formikDetails.touched.courseSummary &&
                  formikDetails.errors.courseSummary
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
              <p className={commonLabelStyles}>Course Description</p>
              <Input
                name="courseDescription"
                value={formikDetails.values.courseDescription}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className={`${formikDetails.touched.courseDescription &&
                  formikDetails.errors.courseDescription
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

          </div>
          <div className="flex justify-between mb-[4.444vh]">
            <div className="w-[33vw]">
              <p className={commonLabelStyles}>About the Course</p>
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
                className={`${formikDetails.touched.question &&
                  formikDetails.errors.question
                  ? "border-red-500"
                  : " border-gray-400"
                  }`}
              />
              {formikDetails.touched.question &&
                formikDetails.errors.question && (
                  <div className="text-red-500">
                    {formikDetails.errors.question}
                  </div>
                )}
            </div>
            <div>
              <p className={commonLabelStyles}>Answer :</p>
              <Input
                name="answer"
                value={formikDetails.values.answer}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className={`${formikDetails.touched.answer && formikDetails.errors.answer
                  ? "border-red-500"
                  : " border-gray-400"
                  }`}
              />
              {formikDetails.touched.answer && formikDetails.errors.answer && (
                <div className="text-red-500">
                  {formikDetails.errors.answer}
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2  px-[1.5vw] pt-[1.5vw] ">
              <div>
                <Button
                  title={faqEditIndex === null ? "Add" : "Update"}
                  onClick={addFAQ}
                  className="py-[0.5vw] px-[1vw] bg-gradient rounded-md text-white"
                />
              </div>
            </div>
            <div className="my-2.5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-[2.222vh] border border-2 rounded-md p-[2.222vh]"
                >
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>
                      <p className="pb-[1.111vh] font-semibold">
                        {faq.question}
                      </p>
                    </div>
                    <div>
                      {expandedIndex === index ? (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <div>
                      <div className=" border-gray-300 py-[1.111vh]">
                        <p>{faq.answer}</p>
                      </div>
                      <div className="flex justify-end gap-2 mt-[1.111vh]">
                        <Button
                          title="Edit"
                          className="py-[0.5vw] px-[1vw] bg-blue-500 rounded-md text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            editFaq(index);
                          }}
                        />
                        <Button
                          title="Delete"
                          className="py-[0.5vw] px-[1vw] bg-red-500 rounded-md text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            deleteFaq(index);
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {formikDetails.touched.faqs && formikDetails.errors.faqs ? (
              <div className="text-red-500">{formikDetails.errors.faqs}</div>
            ) : null}
          </div>
          <section className="flex justify-around">
            <aside>
              <div className="pt-[1.5vw] font-bold">
                <p>Organisation</p>
              </div>
              <div className="flex flex-col">
                {["JSP", "QSP", "PYSP"].map((org) => (
                  <label key={org}>
                    <input
                      type="checkbox"
                      name="organisation"
                      className="mr-2"
                      value={org}
                      onChange={formikDetails.handleChange}
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
            </aside>
            <aside>
              <div className="pt-[1.5vw] font-bold">
                <p>Mode</p>
              </div>
              <div className="flex flex-col">
                {[
                  "ONLINECLASSES",
                  "OFFLINECLASSES",
                  "EXPERIENTIALLEARNING",
                  "SELFPACED",
                ].map((mode) => (
                  <label key={mode}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="mode"
                      value={mode}
                      onChange={(e) => {
                        formikDetails.handleChange(e);
                      }}
                      checked={formikDetails.values.mode.includes(mode)}
                    />
                    {mode}
                  </label>
                ))}
                {formikDetails.touched.mode && formikDetails.errors.mode ? (
                  <div className="text-red-500 text-sm ">
                    {formikDetails.errors.mode}
                  </div>
                ) : null}
              </div>
            </aside>
          </section>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-gradient rounded-md text-white"
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
