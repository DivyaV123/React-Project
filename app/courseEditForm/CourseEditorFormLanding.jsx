'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useState } from 'react'
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { useCourseEditorMutation } from '@/redux/queries/courseEditer';
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllCategoriesQuery } from '@/redux/queries/getAllCategories';
import { useGetcourseByIdQuery } from '@/redux/queries/getCourseById';

function CourseEditorFormLanding() {
    const [editCourse, { data: courseAdd, error: courseError, isLoading: courseAdderLoad }] = useCourseEditorMutation();

    const {
        data: courseResponse,
        isLoading: CourseIsLoading,
        error: CourseError,
    } = useGetAllCategoriesQuery();
    const commonLabelStyles = "pb-[1.111vh]";
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("")
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [courseDisable, setCourseDisable] = useState(true);
    const [selectedCourseName, setSelectedCourseName] = useState("");
    const [courseNames, setCourseNames] = useState([]);
    const [allId, setAllID] = useState({
        categoryId: '',
        subCategoryId: '',
        courseId: '',
    })
    const [showCourse, setShowCourse] = useState(false)
    const validationSchema = Yup.object({
        category: Yup.string().required("category is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
        // courseName: Yup.string().required("Course name is required"),
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
    })
    const initialValues = {
        category: "",
        subCourse: "",
        courseName: "",
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
    }

    const handleCourseSelect = (event) => {
        setAllID(prevState => ({
            ...prevState,
            categoryId: event.target.option.Id
        }));
        console.log(event, "event.target")
        const selectedCourseId = event.target.value;
        setSelectedCourse(selectedCourseId);

        const selectedCourseData = courseResponse?.data.find(
            (course) => course.title == selectedCourseId
        );

        if (
            selectedCourseData &&
            selectedCourseData.courseResponse.length > 0
        ) {
            setCourseNames(
                selectedCourseData.courseResponse.map((sub) => ({
                    label: sub.title,
                    value: sub.title,
                    id: sub.courseResponseId
                }))
            );
            setCourseDisable(false);
            setIsSubCourseDisabled(true)
        } else {
            setSubCourseOptions([]);
            setIsSubCourseDisabled(true);
        }

        if (selectedCourseData &&
            selectedCourseData.subCourse.length > 0) {

            setSubCourseOptions(
                selectedCourseData.subCourse.map((sub) =>
                ({
                    label: sub.title,
                    value: sub.title,
                    id: sub.subCourseId
                })
                )
            )
            setCourseDisable(true);
            setIsSubCourseDisabled(false)
        } else {
            setSubCourseOptions([]);
            setIsSubCourseDisabled(true);
        }

        formikDetails.setFieldValue("category", selectedCourseId);
        formikDetails.setFieldValue("subCourse", "");
        formikDetails.setFieldValue("courseName", "");
        setSelectedCourseName('')

    };

    const handleSubCourseSelect = (event) => {
        console.log(event.target.option, "event.target.option")
        setAllID(prevState => ({
            ...prevState,
            subCategoryId: event.target.option.id
        }));
        let allSubCourse = courseResponse.data[2].subCourse
        const selectedCourseId = event.target.value;
        setSelectedSubCourse(event.target.value);

        const selectedCourseData = allSubCourse?.find(
            (course) => course.title == selectedCourseId
        );
        console.log(selectedCourseData, "selectedCourseData")

        if (selectedCourseData &&
            selectedCourseData.subCourseResponse.length > 0) {
            setCourseNames(
                selectedCourseData.subCourseResponse.map((sub) => ({
                    label: sub.title,
                    value: sub.title,
                    id: sub.subCourseResponseId
                }))
            )
            setCourseDisable(false);
        }

        formikDetails.setFieldValue("subCourse", event.target.value);
    };

    const handleCourseNameSelected = (event) => {
        setAllID(prevState => ({
            ...prevState,
            courseId: event.target.option.id
        }));

        console.log(event.target.option, "event.target.option")
        const allCourse = courseResponse.data;
        const allSubCourse = courseResponse.data[2].subCourse;
        const selectedCourseName = event.target.value;
        let selectedCourseWeightage = null;

        if (selectedCourse) {
            if (selectedSubCourse) {
                const subCatData = allSubCourse.find(data => data.title === selectedSubCourse);
                selectedCourseWeightage = subCatData?.subCourseResponse?.find(course => course.title === selectedCourseName);
            } else {
                const categoryData = allCourse.find(data => data.title === selectedCourse);
                selectedCourseWeightage = categoryData?.courseResponse?.find(course => course.title === selectedCourseName);
            }
        }

        console.log(selectedCourseWeightage, "selectedCourseWeightage");
        setSelectedCourseName(selectedCourseName);
        formikDetails.setFieldValue("subCourse", selectedCourseName);

        if (selectedCourseWeightage) {
            formikDetails.setFieldValue("QSpiders", selectedCourseWeightage?.weightageDto?.qspiders || "");
            formikDetails.setFieldValue("JSpiders", selectedCourseWeightage?.weightageDto?.jspiders || "");
            formikDetails.setFieldValue("PYSpiders", selectedCourseWeightage?.weightageDto?.pyspiders || "");
            formikDetails.setFieldValue("BSpiders", selectedCourseWeightage?.weightageDto?.bspiders || "");
        } else {
            formikDetails.setFieldValue("QSpiders", "");
            formikDetails.setFieldValue("JSpiders", "");
            formikDetails.setFieldValue("PYSpiders", "");
            formikDetails.setFieldValue("BSpiders", "");
        }
    };
    const courseOptions = []
    courseResponse?.data?.map((element) => {
        courseOptions.push({
            label: element.title,
            value: element.title,
            Id: element.courseId
        })
    });

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
                const response = await editCourse({ bodyData: payload, courseId: values.course, subcourseId: subCourse }).unwrap();
                console.log(response);
            } catch (err) {
                console.error(err, "Error from loginAPI");
            }
        },
    });

    const handleSelectedCourseData = async () => {
        try {
            const response = await editCourse({ courseId: allId.courseId }).unwrap();
            console.log(response);
            setCourseDisable(true)
        } catch (err) {
            console.error(err, "Error from loginAPI");
        }
    }

    return (
        <MaxWebWidth articalStyling='p-8'>
            <div>
                <form onSubmit={formikDetails.handleSubmit}>
                    <div className="flex gap-3 justify-between pb-4">
                        <div className="w-[100%]">
                            <p className='pb-[1.111vh]'>Category</p>
                            <Dropdown
                                sectionStyle="my-section-style"
                                name="category"
                                value={selectedCourse}
                                onChange={handleCourseSelect}
                                placeholder="Select the Category"
                                options={courseOptions}
                            />
                            {formikDetails.touched.category && formikDetails.errors.category ? (
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
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={handleSelectedCourseData}
                            className="py-2 px-4 bg-gradient rounded-md text-white"
                        >
                            Edit Course
                        </button>
                    </div>
                </form>
            </div>
        </MaxWebWidth>
    )
}

export default CourseEditorFormLanding