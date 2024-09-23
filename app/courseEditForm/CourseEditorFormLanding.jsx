'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useContext, useState } from 'react'
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllCategoriesQuery } from '@/redux/queries/getAllCategories';
import { useGetcourseByIdQuery } from '@/redux/queries/getCourseById';
import dynamic from "next/dynamic";
import Button from '@/components/commonComponents/button/Button';
import { Input } from '@/components/ui/input';
import TextArea from '@/components/commonComponents/textArea/TextArea';
import { Text } from 'lucide-react';
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useCourseEditorMutation } from '@/redux/queries/courseById';
import { useCourseEditDataMutation } from '@/redux/queries/editCourseApi';
import { useCourseDeleteMutation } from '@/redux/queries/deleteCourse';
import { GlobalContext } from '@/components/Context/GlobalContext';
const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill");
        return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
    },
    {
        ssr: false,
    }
);

function CourseEditorFormLanding() {
    const { domainVariable } = useContext(GlobalContext);
    let domain =
      domainVariable === "Qspiders"
        ? "qspiders"
        : domainVariable === "Jspiders"
        ? "jspiders"
        : domainVariable === "Pyspiders"
        ? "pyspiders"
        : "bspiders";
    const [selectedCourseDetails, { data: courseToEditData, error: courseError, isLoading: courseAdderLoad }] = useCourseEditorMutation();
    const [editSelectedCourse, { data: courseEditResp, error: courseEditError, isLoading: courseEditLoad }] = useCourseEditDataMutation();
    const [deleteSelectedCourse, { data: courseDeleteResp, error: courseDeleteError, isLoading: courseDeleteLoad }] = useCourseDeleteMutation();

    const {
        data: courseResponse,
        isLoading: CourseIsLoading,
        error: CourseError,
        refetch
    } = useGetAllCategoriesQuery(domain);
    const commonLabelStyles = "pb-[1.111vh]";
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("")
    const [selectedCourseEdit, setSelectedCourseEdit] = useState(false);
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [courseDisable, setCourseDisable] = useState(true);
    const [selectedCourseName, setSelectedCourseName] = useState("");
    const [faqEditIndex, setFaqEditIndex] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const [files, setFiles] = useState({
        icon: null,
        pageImage: null,
        cardImage: null,
    });
    const [courseNames, setCourseNames] = useState([]);
    const [allId, setAllID] = useState({
        categoryId: '',
        subCategoryId: '',
        courseId: '',
    })
    const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [showCourse, setShowCourse] = useState(false)
    const validationSchema = Yup.object({
        category: Yup.string().required("category is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
        // courseName: Yup.string().required("Course name is required"),
        courseName: Yup.string().trim().required("Course Name is required"),
        courseDescription: Yup.string().required("Course Description is required"),
        courseSummary: Yup.string().required("Course Summary is required"),
        aboutCourse: Yup.string().required("About the Course is required"),
        courseHighlights: Yup.string().required("Course Highlights are required"),
        faqs: Yup.array().of(
            Yup.object().shape({
                question: Yup.string().required("Question is required"),
                answer: Yup.string().required("Answer is required"),
            })
        ).required("FAQs are required"),
        organisation: Yup.array().min(1, "At least one organisation is required"),
        mode: Yup.array().min(1, "At least one Mode is required"),
    })
    let initialValues = {
        category: "",
        subCourse: "",
        courseName: "",
        course: "",
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
        setAllID(prevState => ({
            ...prevState,
            subCategoryId: event.target.option.id
        }));
        const subCourseIndex = courseResponse.data.findIndex(course => course.subCourse && course.subCourse.length > 0);
        let allSubCourse = subCourseIndex !== -1 &&  courseResponse.data[subCourseIndex].subCourse
        const selectedCourseId = event.target.value;
        setSelectedSubCourse(event.target.value);

        const selectedCourseData = allSubCourse?.find(
            (course) => course.title == selectedCourseId
        );
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
        setSelectedCourseName(selectedCourseName);
        formikDetails.setFieldValue("subCourse", selectedCourseName);

        if (selectedCourseWeightage) {
            formikDetails.setFieldValue("Qspiders", selectedCourseWeightage?.weightageDto?.qspiders || "");
            formikDetails.setFieldValue("JSpiders", selectedCourseWeightage?.weightageDto?.jspiders || "");
            formikDetails.setFieldValue("PYSpiders", selectedCourseWeightage?.weightageDto?.pyspiders || "");
            formikDetails.setFieldValue("BSpiders", selectedCourseWeightage?.weightageDto?.bspiders || "");
        } else {
            formikDetails.setFieldValue("Qspiders", "");
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
    const handleOnBlur = (id) => {
        if (!phoneValue) {
            setError({ ...error, [id]: true });
        } else if (!isValidPhoneNumber("+" + phoneValue?.toString())) {
            setError({ ...error, [id]: false, validPhone: true });
        } else {
            setError({ ...error, [id]: false, validPhone: false });
        }
    };

    const addFAQ = (e) => {
        e.preventDefault();

        const errors = {};
        if (!formikDetails.values.question || formikDetails.values.question === "") {
            errors.question = "Question is required";
        }
        if (!formikDetails.values.answer) {
            errors.answer = "Answer is required";
        }
        if (Object.keys(errors).length > 0) {
            formikDetails.setErrors({
                ...formikDetails.errors,
                ...errors,
            });
            return;
        }

        const newFaqs = [...formikDetails.values.faqs];
        if (faqEditIndex !== null) {
            newFaqs[faqEditIndex] = {
                ...newFaqs[faqEditIndex],
                question: formikDetails.values.question,
                answer: formikDetails.values.answer,
                faqType: "COURSE"
            };
            setFaqEditIndex(null);
        } else {
            newFaqs.push({
                faqId: Date.now(),
                question: formikDetails.values.question,
                answer: formikDetails.values.answer,
                faqType: "COURSE"
            });
        }

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
        const selectedFaq = formikDetails.values.faqs[index];
        if (selectedFaq) {
            formikDetails.setFieldValue("question", selectedFaq.question);
            formikDetails.setFieldValue("answer", selectedFaq.answer);
        }
    };

    const deleteFaq = (index) => {
        const newFaqs = [...formikDetails.values.faqs];
        newFaqs.splice(index, 1);
        formikDetails.setFieldValue("faqs", newFaqs);
        formikDetails.setFieldTouched("faqs", false);
        setFaqEditIndex(null);
    };


    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
        },
    });
    const handleSelectedCourseData = async () => {
        try {
            const response = await selectedCourseDetails({ courseId: allId.courseId }).unwrap();
            setSelectedCourseEdit(true);

            if (response?.data) {
                const selectedCourseValues = response.data;
                formikDetails.setFieldValue("courseName", selectedCourseValues.courseName);
                formikDetails.setFieldValue("courseSummary", selectedCourseValues.courseSummary);
                formikDetails.setFieldValue("courseDescription", selectedCourseValues.courseDescription);
                formikDetails.setFieldValue("aboutCourse", selectedCourseValues.courseAbout);
                formikDetails.setFieldValue("courseHighlights", selectedCourseValues.courseHighlight);
                if (selectedCourseValues.branchType.length > 0) {
                    formikDetails.setFieldValue("organisation", selectedCourseValues.branchType);
                }
                if (selectedCourseValues.mode.length > 0) {
                    formikDetails.setFieldValue("mode", selectedCourseValues.mode);
                }
                // if (selectedCourseValues.courseIcon) {
                //     setFiles(prevState => ({
                //         ...prevState,
                //         icon: { name: selectedCourseValues.courseIcon }
                //     }));
                // }
                // if (selectedCourseValues.courseImage) {
                //     setFiles(prevState => ({
                //         ...prevState,
                //         cardImage: { name: selectedCourseValues.courseImage }
                //     }));
                // }
                // if (selectedCourseValues.homePageImage) {
                //     setFiles(prevState => ({
                //         ...prevState,
                //         pageImage: { name: selectedCourseValues.homePageImage }
                //     }));
                // }
                if (selectedCourseValues.faqs && selectedCourseValues.faqs.length > 0) {
                    formikDetails.setFieldValue("faqs", selectedCourseValues.faqs);
                } else {
                    formikDetails.setFieldValue("faqs", []);
                }

                formikDetails.setErrors({ courseName: '', courseSummary: '', courseDescription: '', aboutCourse: "", courseHighlights: "", organisation: "", mode: "" });
            }

        } catch (err) {
            console.error(err, "Error from loginAPI");
        }
    };



    // const courseEditSubmit = async () => {
    //     setSelectedCourseEdit(false);
    //     setSelectedCourseName("");
    //     setSelectedSubCourse('');
    //     setSelectedCourse('');
    //     refetch();
    //     formikDetails.handleSubmit()
    //     let editedValues = formikDetails.values;
    //     let faqArray = []
    //     editedValues.faqs.map((element) => {
    //         faqArray.push({
    //             answer: element.answer,
    //             faqId: element.faqId,
    //             faqType: "COURSE",
    //             question: element.question,
    //             createdDateAndTime: null,
    //             updatedDateAndTime: null
    //         })
    //     })

    //     const courseObj = {
    //         courseId: courseToEditData.data.courseId,
    //         courseName: editedValues.courseName,
    //         mode: editedValues.mode,
    //         courseDescription: editedValues.courseDescription,
    //         courseSummary: editedValues.courseSummary,
    //         courseAbout: editedValues.aboutCourse,
    //         courseHighlight: editedValues.courseHighlights,
    //         faqs: faqArray,
    //         branchType: courseToEditData.data.branchType,
    //         courseIcon: courseToEditData.data.courseIcon,
    //         courseImage: courseToEditData.data.courseImage,
    //         homePageImage: courseToEditData.data.homePageImage
    //     }
    //     const payloadString = JSON.stringify(courseObj);

    //     const payload = {
    //         courseContent: payloadString,
    //         cardImage: files.cardImage,
    //         pageImage: files.pageImage,
    //         icon: files.icon
    //     }
    //     try {
    //         const response = await editSelectedCourse({ bodyData: payload }).unwrap();
    //         if (response.statusCode == 200) {
    //             alert(`course ${editedValues.courseName} edited successfully`);
    //         } else {
    //             alert(response.statusCode)
    //         }

    //     } catch (err) {
    //         console.error(err, "Error from loginAPI");
    //         alert(err.message)
    //     }
    // }
    const courseEditSubmit = async () => {
        
        const errors = await formikDetails.validateForm();
        
        if (Object.keys(errors).length === 0) {
            setSelectedCourseEdit(false);
            setSelectedCourseName("");
            setSelectedSubCourse('');
            setSelectedCourse('');
            refetch();
            
            let editedValues = formikDetails.values;
            let faqArray = []
            editedValues.faqs.map((element) => {
                faqArray.push({
                    answer: element.answer,
                    faqId: element.faqId,
                    faqType: "COURSE",
                    question: element.question,
                    createdDateAndTime: null,
                    updatedDateAndTime: null
                })
            })
    
            const courseObj = {
                courseId: courseToEditData.data.courseId,
                courseName: editedValues.courseName,
                mode: editedValues.mode,
                courseDescription: editedValues.courseDescription,
                courseSummary: editedValues.courseSummary,
                courseAbout: editedValues.aboutCourse,
                courseHighlight: editedValues.courseHighlights,
                faqs: faqArray,
                branchType: courseToEditData.data.branchType,
                courseIcon: courseToEditData.data.courseIcon,
                courseImage: courseToEditData.data.courseImage,
                homePageImage: courseToEditData.data.homePageImage
            }
            const payloadString = JSON.stringify(courseObj);
    
            const payload = {
                courseContent: payloadString,
                cardImage: files.cardImage,
                pageImage: files.pageImage,
                icon: files.icon
            }
            try {
                const response = await editSelectedCourse({ bodyData: payload }).unwrap();
                if (response.statusCode == 200) {
                    alert(`course ${editedValues.courseName} edited successfully`);
                } else {
                    alert(response.statusCode)
                }
    
            } catch (err) {
                console.error(err, "Error from loginAPI");
                alert(err.message)
            }
        } else {
          
            formikDetails.setErrors(errors);
           
            formikDetails.setTouched(
                Object.keys(formikDetails.values).reduce((acc, key) => {
                    acc[key] = true;
                    return acc;
                }, {})
            );
        }
    }
    const handleDeleteSelectedCourse = async () => {
        if (allId.courseId) {
            try {
                const response = await deleteSelectedCourse({ courseId: allId.courseId }).unwrap();
                alert(`course Deleted successfully`)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleFileSelected = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', "image/svg"];
            setFiles(prevState => ({
                ...prevState,
                [type]: file
            }));
        }
    };

    return (
        <MaxWebWidth articalStyling='pt-8 pb-8'>
            <MaxWebWidth>
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
                    <div className="flex gap-4 justify-end mt-2">
                        <button
                            onClick={handleSelectedCourseData}
                            className="py-2 px-4 bg-gradient rounded-md text-white"
                        >
                            Edit Course
                        </button>
                        <button
                            onClick={handleDeleteSelectedCourse}
                            className="py-2 px-4 bg-red-500 rounded-md text-white"
                        >
                            Delete Course
                        </button>
                    </div>
                </form>
            </MaxWebWidth>
            {selectedCourseEdit &&
                <MaxWebWidth articalStyling='border py-[2.5vw] px-[2.5vw] border-2 rounded-xl my-[2.5vw]'>
                    <form onSubmit={formikDetails.handleSubmit}>
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
                                    className={`${formikDetails.touched.question && formikDetails.errors.question
                                        ? "border-red-500"
                                        : " border-gray-400"
                                        }`}
                                />
                                {formikDetails.touched.question && formikDetails.errors.question && (
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
                                {formikDetails.values.faqs.map((faq, index) => (
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
                                    {["JSP", "QSP", "PYSP", "PROSP"].map((org) => (
                                        <label key={org}>
                                            <input
                                                type="radio"
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
                                        "SELF_PACED",
                                        "CORPORATE_TRAINING",
                                        "ONLINE_CLASSES",
                                        "OFFLINE_CLASSES"
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
                        <div className="flex flex-col gap-5 mt-8 mb-8 ">
                            <p>Course Icon</p>
                            <div className="items-center gap-2 ">
                                <Input
                                    onChange={(e) => handleFileSelected(e, "icon")}
                                    type="file"
                                />
                                <p className='text-[0.8rem] text-gray-500'>{courseToEditData?.data?.courseIcon || "No file selected"}</p>
                            </div>
                            <div>
                                <p>Home Page Image</p>
                                <Input
                                    onChange={(e) => handleFileSelected(e, "pageImage")}
                                    placeholder="select a file"
                                    type="file"
                                />
                                <p className='text-[0.8rem] text-gray-500'>{courseToEditData?.data?.homePageImage || "No file selected"}</p>
                            </div>
                            <div>
                                <p>Course Card Image</p>
                                <Input
                                    onChange={(e) => handleFileSelected(e, "cardImage")}
                                    placeholder="select a file"
                                    type="file"
                                />
                                <p className='text-[0.8rem] text-gray-500'>{courseToEditData?.data?.courseImage || "No file selected"}</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                onClick={courseEditSubmit}
                               
                                className="py-2 px-4 bg-gradient rounded-md text-white"
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </MaxWebWidth>
            }
        </MaxWebWidth>
    )
}

export default CourseEditorFormLanding