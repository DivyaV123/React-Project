"use client";
import React, { useState, useEffect } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialogFull";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Workflow, X } from "lucide-react";
import Input from "@/components/commonComponents/input/Input";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import Button from "@/components/commonComponents/button/Button";
import { useGetAllCategoriesInCourseQuery } from "@/redux/queries/getAllCategoriesInCourseForm";
import { useCourseAdderMutation } from "@/redux/queries/courseAdderApi";
import { useCourseEditDataMutation } from "@/redux/queries/editCourseApi";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);
function AddCourseForm({ dialogCloseClick, courseRefetch, courseEditData }) {
  const {
    data: courseData,
    error,
    isLoading,
    refetch: refetchCourseData,
  } = useGetAllCategoriesInCourseQuery();
  const [
    editSelectedCourse,
    { data: courseEditResp, error: courseEditError, isLoading: courseEditLoad },
  ] = useCourseEditDataMutation();
  const [
    addCourse,
    { data: courseAdd, error: courseError, isLoading: courseAdderLoad },
  ] = useCourseAdderMutation();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSubCourse, setSelectedSubCourse] = useState("");
  const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
  const [subCourseOptions, setSubCourseOptions] = useState([]);
  const [orgType, setOryType] = useState("");
  const [classMode, setClassMode] = useState("");
  const [selectedClassMode, setSelectedClassMode] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [faqEditIndex, setFaqEditIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const courseOptions = courseData?.data?.map((course) => ({
    label: course.categoryName,
    value: course.categoryId,
    id: course.categoryId,
  }));
  const commonLabelStyles = "pb-[1.111vh]";
  const orgOptions = [
    {
      label: "Jspiders",
      value: "JSP",
    },
    {
      label: "Qspiders",
      value: "QSP",
    },
    {
      label: "Pyspiders",
      value: "PYSP",
    },
  ];
  const classModeOption = [
    {
      label: "Self Paced",
      value: "SELF_PACED",
    },
    {
      label: "Corporate Training",
      value: "CORPORATE_TRAINING",
    },
    {
      label: "Online Classes",
      value: "ONLINE_CLASSES",
    },
    {
      label: "Offline Classes",
      value: "OFFLINE_CLASSES",
    },
  ];
  const [selectedId, setSelectedId] = useState({
    categoryId: "",
    subCategoryId: "",
  });
  const tagHeadStyle = "font-medium text-[1.094vw] pb-[1.389vh]";
  const [selectedFile, setSelectedFile] = useState({
    courseIcon: null,
    homePageImage: null,
    courseCardImage: null,
  });
  const [previewURL, setPreviewURL] = useState({
    courseIcon: null,
    homePageImage: null,
    courseCardImage: null,
  });

  const [errorMessage, setErrorMessage] = useState({
    courseIcon: "",
    homePageImage: "",
    courseCardImage: "",
  });

  useEffect(() => {
    if (courseEditData) {
      formikDetails.setValues({
        ...formikDetails.values,
        courseName: courseEditData.courseName || "",
        category: courseEditData.categoryId || "",
        subCategory: courseEditData.subCategoryId || "",
        courseDesc: courseEditData.courseDescription || "",
        courseSummary: courseEditData.courseSummary || "",
        aboutCourse: courseEditData.courseAbout || "",
        courseHeighlights: courseEditData.courseHighlight || "",
        orgType: courseEditData.branchType[0] || "",
        classMode: courseEditData.mode || [],
        subjects: courseEditData.subjects || [],
        faqs: courseEditData.faqs || [],
      });
      setSelectedClassMode(courseEditData.mode || " ");
      setSelectedCourse(courseEditData.categoryId || "");
      setSelectedSubCourse(courseEditData.subCategoryId || "");
      setFaqs(courseEditData.faqs || []);

      setSelectedFile({
        courseIcon: null,
        homePageImage: null,
        courseCardImage: null,
      });
      setPreviewURL({
        courseIcon: courseEditData.courseIcon || null,
        homePageImage: courseEditData.homePageImage || null,
        courseCardImage: courseEditData.courseImage || null,
      });
    }
  }, [courseEditData]);

  const initialValues = {
    courseName: "",
    category: "",
    subCategory: "",
    courseDesc: "",
    courseSummary: "",
    aboutCourse: "",
    courseHeighlights: "",
    orgType: "",
    classMode: "",
    subjects: [],
    faqs: [],
  };

  const validationSchema = Yup.object({
    category: !courseEditData && Yup.string().required("category is required"),
      // subCourse: Yup.string().required("Sub Course is required"),
    subCategory:!isSubCourseDisabled && Yup.string().required("Sub Category is required"),
    courseName: Yup.string().required("Course Name is required"),
    courseDesc: Yup.string().required("Course Description is required"),
    courseSummary: Yup.string().required("Course Summary is required"),
    aboutCourse: Yup.string().required("About the Course is required"),
    courseHeighlights: Yup.string().required("Course Highlights are required"),
    faqs: Yup.array()
      .min(1, "At least one FAQ is required")
      .of(
        Yup.object().shape({
          question: Yup.string().required("Question is required"),
          answer: Yup.string().required("Answer is required"),
        })
      ),
    orgType: Yup.string().required("organisation is required"),
    // classMode: Yup.string().required("Mode is required"),
    classMode: Yup.array()
      .of(Yup.string().required("Each classMode is required"))
      .min(1, "At least one classMode is required")
      .required("classModes are required"),
  });

  const handleCourseSelect = (event) => {
    setSelectedId((prevState) => ({
      ...prevState,
      categoryId: event.target.option.id,
    }));
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
          id: sub.subCategoryId,
        }))
      );
      setIsSubCourseDisabled(false);
    } else {
      setSubCourseOptions([]);
      setIsSubCourseDisabled(true);
    }

    formikDetails.setFieldValue("category", selectedCourseId);
    formikDetails.setFieldValue("subCategory", "");
  };

  const handleSubCourseSelect = (event) => {
    setSelectedId((prevState) => ({
      ...prevState,
      subCategoryId: event.target.option.id,
    }));
    setSelectedSubCourse(event.target.value);
    formikDetails.setFieldValue("subCategory", event.target.value);
  };
  const handleFileChange = (event, iconType) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const previewURL = URL.createObjectURL(file);

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
        [iconType]: null,
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
  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const validateFiles = () => {
    const newErrorMessage = {
      courseIcon: selectedFile.courseIcon ? "" : "Please upload a valid image file.",
      homePageImage: selectedFile.homePageImage ? "" : "Please upload a valid image file.",
      courseCardImage: selectedFile.courseCardImage ? "" : "Please upload a valid image file.",
    };

    setErrorMessage(newErrorMessage);

    return !Object.values(newErrorMessage).some((message) => message);
  };
  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      let hasError = false;

      // Initialize error messages
      const newErrorMessage = {
        courseIcon: "",
        homePageImage: "",
        courseCardImage: "",
      };

      // Check for selected files and set error messages if none are uploaded
      if (!selectedFile.courseIcon && !previewURL.courseIcon) {
        newErrorMessage.courseIcon = "Please upload a valid image file.";
        hasError = true;
      }
      if (!selectedFile.homePageImage && !previewURL.homePageImage) {
        newErrorMessage.homePageImage = "Please upload a valid image file.";
        hasError = true;
      }
      if (!selectedFile.courseCardImage && !previewURL.courseCardImage) {
        newErrorMessage.courseCardImage = "Please upload a valid image file.";
        hasError = true;
      }

      // Set error messages if there are validation issues
      setErrorMessage(newErrorMessage);

      // Prevent form submission if there are errors
      if (hasError) return;
      let faqArray = values.faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
        faqId: faq.faqId,
        faqType: "COURSE",
      }));

      // const convertedfaqArray = JSON.stringify(faqArray);
      const courseDetails = {
        courseName: values.courseName,
        courseDescription: values.courseDesc,
        branchType: Array.isArray(values.orgType)
          ? values.orgType
          : [values.orgType],
        mode: Array.isArray(values.classMode)
          ? values.classMode
          : [values.classMode],
        courseSummary: values.courseSummary,
        courseAbout: values.aboutCourse,
        courseHighlight: values.courseHeighlights,
        faqs: faqArray,
      };
      const payloadString = JSON.stringify(courseDetails);
      const payload = {
        course: payloadString,
        icon: selectedFile.courseIcon,
        image: selectedFile.homePageImage,
        homePageImage: selectedFile.courseCardImage,
        categoryId: selectedId.categoryId,
        subCategoryId: selectedId.subCategoryId,
      };

      const courseObj = {
        courseId: courseEditData?.courseId,
        courseName: values.courseName,
        courseDescription: values.courseDesc,
        branchType: Array.isArray(values.orgType)
          ? values.orgType
          : [values.orgType],
        mode: Array.isArray(selectedClassMode)
          ? selectedClassMode
          : [selectedClassMode],
        courseSummary: values.courseSummary,
        courseAbout: values.aboutCourse,
        courseHighlight: values.courseHeighlights,
        faqs: faqArray,
      };
      const editPayloadString = JSON.stringify(courseObj);

      const editPayload = {
        courseContent: editPayloadString,
        icon: selectedFile.courseIcon,
        cardImage: selectedFile.courseCardImage,
        pageImage: selectedFile.homePageImage,
        categoryId: selectedId.categoryId,
        subCategoryId: selectedId.subCategoryId,
      };

      try {
        const response = courseEditData
          ? await editSelectedCourse({ bodyData: editPayload }).unwrap()
          : await addCourse({ bodyData: payload }).unwrap();

        if (response.statusCode == 201 || response.statusCode == 200) {
          dialogCloseClick(false);
          formikDetails.resetForm();
          setSelectedCourse("");
          setSelectedSubCourse("");
          courseRefetch();
          setSelectedFile({
            courseIcon: null,
            homePageImage: null,
            courseCardImage: null,
          });
          setSelectedClassMode([]);
          setPreviewURL({
            courseIcon: null,
            homePageImage: null,
            courseCardImage: null,
          });
          setErrorMessage({
            courseIcon: "",
            homePageImage: "",
            courseCardImage: "",
          });

          setFaqs([]);
        } else {
          alert("something went wrong");
        }
      } catch (err) {
        console.error(err);
      }
    },
  });
  const handleOrgChange = (event) => {
    const selectedOrg = event.target.option.label;
    setOryType(selectedOrg);
    formikDetails.setFieldValue("orgType", event.target.option.value);
  };
  const handleModeChange = (event) => {
    setClassMode(event.target.value);
    setSelectedClassMode(event.target.value);
    formikDetails.setFieldValue("classMode", event.target.value);
  };

  const handleModelClose = () => {
    dialogCloseClick(false);
    formikDetails.resetForm();
    setSelectedSubCourse("");
    setSelectedCourse("");
    setSelectedFile({
      courseIcon: null,
      homePageImage: null,
      courseCardImage: null,
    });
    setPreviewURL({
      courseIcon: null,
      homePageImage: null,
      courseCardImage: null,
    });
    setFaqs([]);
    setSelectedClassMode([]);
    setErrorMessage({ courseIcon: "", homePageImage: "", courseCardImage: "" });
  };
  useEffect(() => {
    if (formikDetails.values.category) {
      formikDetails.setFieldTouched("category", true);
      formikDetails.validateField("category");
    }
  }, [formikDetails.values.category]);

  return (
    <DialogContent>
      <form onSubmit={(e)=>{formikDetails.handleSubmit(e);validateFiles();}}>
        <h1 className="font-bold pb-[2.222vh] text-[1.25vw] text-[#212121]">
          Add new Course
        </h1>
        <DialogClose>
          <X
            className="absolute top-5 right-6 w-4"
            onClick={handleModelClose}
          />
        </DialogClose>
        <div className="flex gap-[6.25rem] pb-[2.222vh]">
          <div className="w-full h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p  className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course name</p>
                <Input
                  placeholder="Enter course name"
                  inputStyle="!w-[23.438vw] h-[2.813vw] flex items-center  text-[12px]"
                  name="courseName"
                  onChange={formikDetails.handleChange}
                  onBlur={formikDetails.handleBlur}
                  value={formikDetails.values.courseName}
                />
                {formikDetails.touched.courseName &&
                formikDetails.errors.courseName ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.courseName}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {!courseEditData && (
            <>
              <div className="w-full h-full">
                <div className="pt-[2.222vh]">
                  <div>
                    <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Select Category</p>
                    <Dropdown
                      placeholder="Enter category name"
                      inputStyle="!w-[23.438vw] h-[2.813vw] flex items-center text-[12px]  text-gray-400"
                      iconStyle="w-[10%]"
                      name="category"
                      value={selectedCourse}
                      onChange={handleCourseSelect}
                      options={courseOptions}
                    />
                    {formikDetails.touched.category &&
                    formikDetails.errors.category ? (
                      <div className="text-red-500 text-[12px]">
                        {formikDetails.errors.category}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="pt-[2.222vh]">
                  <div>
                    <p className={tagHeadStyle}>Select Sub-Category</p>
                    <Dropdown
                      placeholder="Enter course name"
                      inputStyle="!w-[23.438vw] h-[2.813vw] flex items-center  text-[12px]  text-gray-400"
                      value={selectedSubCourse}
                      onChange={handleSubCourseSelect}
                      options={subCourseOptions}
                      disabled={isSubCourseDisabled}
                    />
                     {formikDetails.touched.subCategory &&
                    formikDetails.errors.subCategory ? (
                      <div className="text-red-500 text-[12px]">
                        {formikDetails.errors.subCategory}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex gap-[6.25rem] pb-[2.222vh]">
          <div className="w-full h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course Description</p>
                <Input
                  name="courseDesc"
                  placeholder="Enter course name"
                  inputStyle=" h-[2.813vw] flex items-center  text-[12px]"
                  value={formikDetails.values.courseDesc}
                  onChange={formikDetails.handleChange}
                  onBlur={formikDetails.handleBlur}
                />
                {formikDetails.touched.courseDesc &&
                formikDetails.errors.courseDesc ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.courseDesc}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course Summary</p>
                <Input
                  name="courseSummary"
                  placeholder="Enter course name"
                  inputStyle=" h-[2.813vw] flex items-center text-[12px]"
                  iconStyle="w-[10%]"
                  onChange={formikDetails.handleChange}
                  onBlur={formikDetails.handleBlur}
                  value={formikDetails.values.courseSummary}
                />
                {formikDetails.touched.courseSummary &&
                formikDetails.errors.courseSummary ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.courseSummary}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[6.25rem] ">
          <div className="w-[50%] h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>About Course</p>
                <ReactQuill
                  value={formikDetails.values.aboutCourse}
                  placeholder="Enter About Course"
                  onChange={(value) =>
                    formikDetails.setFieldValue("aboutCourse", value)
                  }
                />
                {formikDetails.touched.aboutCourse &&
                formikDetails.errors.aboutCourse ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.aboutCourse}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course highlights</p>
                <ReactQuill
                  value={formikDetails.values.courseHeighlights}
                  placeholder="Enter Course highlights"
                  onChange={(value) =>
                    formikDetails.setFieldValue("courseHeighlights", value)
                  }
                />
                {formikDetails.touched.courseHeighlights &&
                formikDetails.errors.courseHeighlights ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.courseHeighlights}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[6.25rem] pb-[2.222vh]">
          <div className="w-full h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Organigation</p>
                <Dropdown
                  placeholder="Enter course name"
                  inputStyle=" h-[2.813vw] flex items-center text-[12px]  text-gray-400"
                  iconStyle="w-[10%]"
                  options={orgOptions}
                  name="orgType"
                  value={formikDetails.values.orgType}
                  onChange={handleOrgChange}
                />
                {formikDetails.touched.orgType &&
                formikDetails.errors.orgType ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.orgType}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="pt-[2.222vh]">
              <div>
                <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Mode of class</p>
                <Dropdown
                  placeholder="Enter course name"
                  inputStyle=" h-[2.813vw] flex items-center  text-[12px]  text-gray-400"
                  options={classModeOption}
                  name="classMode"
                  onChange={handleModeChange}
                  value={selectedClassMode}
                  multi
                />
                {formikDetails.touched.classMode &&
                formikDetails.errors.classMode ? (
                  <div className="text-red-500 text-[12px]">
                    {formikDetails.errors.classMode}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[2.222vh] pb-[2.222vh]">
          <div>
            <p className={tagHeadStyle}>Add Subjects</p>
            <Dropdown
              placeholder="Enter course name"
              inputStyle="!w-[42.695vw] h-[2.813vw] flex items-center  text-[12px] text-gray-400"
            />
          </div>
        </div>
        <div className="flex justify-between items-center pb-[2.222vh] pt-[2.222vh]">
          <div className="w-[23.438vw]">
            <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course Icon</p>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="course-icon-upload"
              onChange={(event) => handleFileChange(event, "courseIcon")}
            />
                        <label htmlFor="file-upload-dark">
              <img src="../images/uploadinput.png" alt="file upload" />
            </label>
              {previewURL.courseIcon ? (
                <div className="relative">
                  <img
                    src={previewURL.courseIcon}
                    alt={`${previewURL.courseIcon}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleCancel("courseIcon")}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <img src="/images/uploadinput.png" alt="file upload" />
              )}
            {errorMessage.courseIcon && (
              <p className="text-red-500 pt-[3.333vh] text-[0.6rem]">
                {errorMessage.courseIcon}
              </p>
            )}
          </div>

          <div className="w-[23.438vw]">
            <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Home Page Image</p>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="home-page-image-upload"
              onChange={(event) => handleFileChange(event, "homePageImage")}
            />
            <label
              htmlFor="home-page-image-upload"
              className="block w-[12.812vw]"
            >
              {previewURL.homePageImage ? (
                <div className="relative">
                  <img
                    src={previewURL.homePageImage}
                    alt="Home Page Image Preview"
                  />
                  <button
                    type="button"
                    onClick={() => handleCancel("homePageImage")}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <img src="/images/uploadinput.png" alt="file upload" />
              )}
            </label>
            {errorMessage.homePageImage && (
              <p className="text-red-500 pt-[3.333vh] text-[0.6rem]">
                {errorMessage.homePageImage}
              </p>
            )}
          </div>

          <div className="w-[23.438vw]">
            <p className={tagHeadStyle}><span class="text-red-500 pr-1">*</span>Course Card Image</p>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="course-card-image-upload"
              onChange={(event) => handleFileChange(event, "courseCardImage")}
            />
            <label
              htmlFor="course-card-image-upload"
              className="block w-[12.812vw]"
            >
              {previewURL.courseCardImage ? (
                <div className="relative">
                  <img
                    src={previewURL.courseCardImage}
                    alt="Course Card Image Preview"
                  />
                  <button
                    type="button"
                    onClick={() => handleCancel("courseCardImage")}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <img src="/images/uploadinput.png" alt="file upload" />
              )}
            </label>
            {errorMessage.courseCardImage && (
              <p className="text-red-500 pt-[3.333vh] text-[0.6rem]">
                {errorMessage.courseCardImage}
              </p>
            )}
          </div>
        </div>

        <p className="pb-[1.111vh] font-bold text-[1.094vw]"><span class="text-red-500 pr-1">*</span>FAQ</p>
        <div className="  flex gap-8">
          <div className="flex flex-col w-[40%] bg-[#FFF7F1] p-4 rounded-lg">
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
              {formikDetails.touched.question ||
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
                className={`${
                  formikDetails.touched.answer && formikDetails.errors.answer
                    ? "border-red-500"
                    : " border-gray-400"
                }`}
              />
              {formikDetails.touched.answer || formikDetails.errors.answer && (
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
                  className="py-[0.5vw] px-[1vw]  rounded-md border border-[#FF7B1B] text-[#FF7B1B]"
                />
              </div>
            </div>
          </div>
          <div className=" w-[40%]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-[2.222vh]  border-2 rounded-md p-[2.222vh]"
              >
                <div
                  className="flex justify-between cursor-pointer items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>
                    <p className=" font-semibold">{faq.question}</p>
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
        <DialogFooter>
          <div className="mb-[4.444vh]">
            <button
              type="submit"
              className="px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium bg-gradient rounded-md text-white"
            >
              {courseEditData ? "Edit Course" : "Create Course"}
            </button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default AddCourseForm;
