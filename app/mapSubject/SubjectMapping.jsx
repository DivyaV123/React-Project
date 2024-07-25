"use client";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import React, { useEffect, useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { useGetAllCategoriesInCourseQuery } from "@/redux/queries/getAllCategoriesInCourseForm";
import Input from "@/components/commonComponents/input/Input";
import { useGetAllCategoriesQuery } from "@/redux/queries/getAllCategories";
import { useCourseWeightageMutation } from "@/redux/queries/courseWeightageSaveApi";
import { useCourseWeightageEditMutation } from "@/redux/queries/courseWeightageEditApi";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useGetAllSubjectsQuery } from "@/redux/queries/getAllSubjectsApi";
import { useSubjectMappingMutation } from "@/redux/queries/mapSubjectApi";

function SubjectMapping() {
  const { toast } = useToast();
  const [afterUpdate, setAfterUpdate] = useState(0);
  const [
    addCourseWeightage,
    { data: courseAdd, error: courseError, isLoading: courseAdderLoad },
  ] = useCourseWeightageMutation();
  const [
    addCourseWeightageEdit,
    { data: courseEdit, error: courseEditError, isLoading: courseEditLoad },
  ] = useCourseWeightageEditMutation();
  const {
    data: courseResponse,
    isLoading: CourseIsLoading,
    error: CourseError,
    refetch,
  } = useGetAllCategoriesQuery();
  const {
    data: subjectResponse,
    isLoading: subjectIsLoading,
    error: subjectError,
  } = useGetAllSubjectsQuery();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
  const [courseDisable, setCourseDisable] = useState(true);
  const [subCourseOptions, setSubCourseOptions] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [selectedSubCourse, setSelectedSubCourse] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [subjectNames, setsubjectNames] = useState([]);
  const [selectedSubjectName, setSelectedSubjectName] = useState("");
  const [selectedSubjectID, setSelectedSubjectID] = useState([]);
  const [weightage, setWeightage] = useState();
  const [subjectMapping, { isLoading: mapSubjectLoading }] =
    useSubjectMappingMutation();
  const [allId, setAllID] = useState({
    categoryId: "",
    subCategoryId: "",
    courseId: "",
  });
  const validationSchema = Yup.object({
    category: Yup.string().required("category is required"),
    subject: Yup.array()
      .of(Yup.string().required("Each subject is required"))
      .min(1, "At least one subject is required")
      .required("Subjects are required"),
    // courseName: Yup.string().required("Course name is required"),
  });

  const initialValues = {
    category: "",
    subCourse: "",
    courseName: "",
    subject: "",
  };
  const courseOptions = [];
  courseResponse?.data?.map((element) => {
    courseOptions.push({
      label: element.title,
      value: element.title,
      Id: element.courseId,
    });
  });
  const subjectOptions = [];
  subjectResponse?.data?.map((element) => {
    subjectOptions.push({
      label: element.subjectTitle,
      value: element.subjectTitle,
      Id: element.subjectId,
    });
  });
  const handleSubjectSelected = (event) => {
    // setAllID(prevState => ({
    //     ...prevState,
    //     courseId: event.target.option.id
    // }))
    setSelectedSubjectID(event.target.options);
    console.log(event.target);
    const selectedSubjectName = event.target.value;

    setSelectedSubjectName(selectedSubjectName);
    formikDetails.setFieldValue("subject", event.target.value);
  };
  const handleCourseSelect = (event) => {
    setAllID((prevState) => ({
      ...prevState,
      categoryId: event.target.option.Id,
    }));
    const selectedCourseId = event.target.value;
    setSelectedCourse(selectedCourseId);

    const selectedCourseData = courseResponse?.data.find(
      (course) => course.title == selectedCourseId
    );

    if (selectedCourseData && selectedCourseData.courseResponse.length > 0) {
      setCourseNames(
        selectedCourseData.courseResponse.map((sub) => ({
          label: sub.title,
          value: sub.title,
          id: sub.courseResponseId,
        }))
      );
      setCourseDisable(false);
      setIsSubCourseDisabled(true);
    } else {
      setSubCourseOptions([]);
      setIsSubCourseDisabled(true);
    }

    if (selectedCourseData && selectedCourseData.subCourse.length > 0) {
      setSubCourseOptions(
        selectedCourseData.subCourse.map((sub) => ({
          label: sub.title,
          value: sub.title,
          id: sub.subCourseId,
        }))
      );
      setCourseDisable(true);
      setIsSubCourseDisabled(false);
    } else {
      setSubCourseOptions([]);
      setIsSubCourseDisabled(true);
    }

    formikDetails.setFieldValue("category", selectedCourseId);
    formikDetails.setFieldValue("subCourse", "");
    formikDetails.setFieldValue("courseName", "");
    setSelectedCourseName("");
  };

  const handleSubCourseSelect = (event) => {
    setAllID((prevState) => ({
      ...prevState,
      subCategoryId: event.target.option.id,
    }));
    let allSubCourse = courseResponse.data[2].subCourse;
    const selectedCourseId = event.target.value;
    setSelectedSubCourse(event.target.value);

    const selectedCourseData = allSubCourse?.find(
      (course) => course.title == selectedCourseId
    );
    if (selectedCourseData && selectedCourseData.subCourseResponse.length > 0) {
      setCourseNames(
        selectedCourseData.subCourseResponse.map((sub) => ({
          label: sub.title,
          value: sub.title,
          id: sub.subCourseResponseId,
        }))
      );
      setCourseDisable(false);
    }

    formikDetails.setFieldValue("subCourse", event.target.value);
  };

  const handleCourseNameSelected = (event) => {
    setAllID((prevState) => ({
      ...prevState,
      courseId: event.target.option.id,
    }));
    const allCourse = courseResponse.data;
    const allSubCourse = courseResponse.data[2].subCourse;
    const selectedCourseName = event.target.value;
    let selectedCourseWeightage = null;

    if (selectedCourse) {
      if (selectedSubCourse) {
        const subCatData = allSubCourse.find(
          (data) => data.title === selectedSubCourse
        );
        selectedCourseWeightage = subCatData?.subCourseResponse?.find(
          (course) => course.title === selectedCourseName
        );
      } else {
        const categoryData = allCourse.find(
          (data) => data.title === selectedCourse
        );
        selectedCourseWeightage = categoryData?.courseResponse?.find(
          (course) => course.title === selectedCourseName
        );
      }
    }
    setWeightage(selectedCourseWeightage);
    setSelectedCourseName(selectedCourseName);
    formikDetails.setFieldValue("subCourse", selectedCourseName);
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const selectedCategoryId = selectedSubjectID?.Id;
      console.log({ selectedSubjectName });
      // e.preventDefault()
      let payload = [];
      selectedSubjectID.map((ele) => {
        console.log(
          ele,
          { selectedSubjectID },
          { selectedCategoryId },
          { allId }
        );
        payload.push(ele.Id);
      });
      if (selectedSubjectID) {
        try {
          const response = await subjectMapping({
            payload: payload,
            courseId: allId.courseId,
          }).unwrap();
          console.log({ payload }, { response });
          if (response.status === 200) {
            toast({
              variant: "success",
              title: (
                <span className=" font-bold  ">
                  {" "}
                  Subject Mapped Successfully
                </span>
              ),
            });
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          }
        } catch (err) {
          console.log(err);
          toast({
            variant: "destructive",
            title: <span className=" font-bold  "> {err?.data?.data}</span>,
          });
        }
      }
    },
  });

  const commonLabelStyles = "pb-[1.111vh]";
  return (
    <>
      <MaxWebWidth
        sectionStyling="p-8"
        articalStyling="border border-gray-300 p-8 rounded-xl"
      >
        <div>
          <form onSubmit={formikDetails.handleSubmit}>
            <div className="flex gap-3 justify-between mb-[4.444vh] pb-4">
              <div className="w-[100%]">
                <p className="pb-[1.111vh]">Category</p>
                <Dropdown
                  sectionStyle="my-section-style"
                  name="category"
                  value={selectedCourse}
                  onChange={handleCourseSelect}
                  placeholder="Select the Category"
                  options={courseOptions}
                />
                {formikDetails.touched.category &&
                formikDetails.errors.category ? (
                  <div className="text-red-500 text-sm ">
                    {formikDetails.errors.category}
                  </div>
                ) : null}
              </div>
              <div className="w-[100%]">
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
              <div className="w-[100%]">
                <p className={commonLabelStyles}>Course</p>
                <Dropdown
                  sectionStyle="my-section-style"
                  name="subCourse"
                  value={selectedCourseName}
                  onChange={handleCourseNameSelected}
                  placeholder="Select the Course Name"
                  options={courseNames}
                  disabled={courseDisable}
                />
                {formikDetails.touched.subCourse &&
                formikDetails.errors.subCourse ? (
                  <div className="text-red-500 text-sm ">
                    {formikDetails.errors.subCourse}
                  </div>
                ) : null}
              </div>
            </div>
            <p className="text-slate-400 p-1">
              Map subject for the selected Course
            </p>
            <div className="p-8 border border-gray-200 rounded-xl">
              <div className="flex ">
                <div className="w-[28vw]">
                  <p className="pb-[1.111vh]">Subject</p>
                  <Dropdown
                    multi
                    sectionStyle="my-section-style"
                    name="subject"
                    value={selectedSubjectName}
                    onChange={handleSubjectSelected}
                    placeholder="Select the Subject"
                    options={subjectOptions}
                  />
                  {formikDetails.touched.subject &&
                  formikDetails.errors.subject ? (
                    <div className="text-red-500 text-sm ">
                      {formikDetails.errors.subject}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="py-2 px-4 bg-gradient rounded-md text-white"
              >
                Map Subject
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </MaxWebWidth>
    </>
  );
}

export default SubjectMapping;
