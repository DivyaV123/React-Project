'use client'
import Dropdown from '@/components/commonComponents/dropdown/Dropdown'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetAllCategoriesInCourseQuery } from '@/redux/queries/getAllCategoriesInCourseForm'
import Input from '@/components/commonComponents/input/Input';
import { useGetAllCategoriesQuery } from '@/redux/queries/getAllCategories';

function CourseWeitage() {
    const {
        data: courseResponse,
        isLoading: CourseIsLoading,
        error: CourseError,
    } = useGetAllCategoriesQuery();

    console.log({ courseResponse })
    const [selectedCourse, setSelectedCourse] = useState("")
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [courseDisable, setCourseDisable] = useState(true)
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [courseNames, setCourseNames] = useState([])
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [selectedCourseName, setSelectedCourseName] = useState("")
    const {
        data: courseData,
        error,
        isLoading,
    } = useGetAllCategoriesInCourseQuery();
    const validationSchema = Yup.object({
        category: Yup.string().required("category is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
    });// courseName: Yup.string().required("Course name is required"),

    const initialValues = {
        category: "",
        subCourse: "",
        courseName: "",
    };
    const courseOptions = []
    courseResponse?.data?.map((element) => {
        courseOptions.push({
            label: element.title,
            value: element.title,
            Id: element.courseId
        })
    });

    const handleCourseSelect = (event) => {
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
                selectedCourseData.subCourse.map((sub) => ({
                    label: sub.title,
                    value: sub.title,
                    id: sub.courseId
                }))
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

    };

    const handleSubCourseSelect = (event) => {
        const selectedCourseId = event.target.value;
        setSelectedSubCourse(event.target.value);

        const selectedCourseData = courseResponse?.data.find(
            (course) => course.subCourse == selectedCourseId
        );

        formikDetails.setFieldValue("subCourse", event.target.value);
    };

    const handleCourseNameSelected = (event) => {
        setSelectedCourseName(event.target.value);
        formikDetails.setFieldValue("subCourse", event.target.value);
    };

    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {

            const payload = {
                category: values.category,
                subCategory: values.subCourse,
                courseName: values.courseName
            };
        },
    });

    const commonLabelStyles = "pb-[1.111vh]";
    return (
        <>
            <MaxWebWidth sectionStyling='p-8' articalStyling='border border-gray-300 p-8 rounded-xl'>
                <div>
                    <form onSubmit={formikDetails.handleSubmit}>
                        <div className="flex gap-3 justify-between mb-[4.444vh] pb-4">
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
                        <p className='text-slate-400 p-1'>weitage for the selected Course</p>
                        <div className='p-8 border border-gray-200 rounded-xl'>
                            <div className='flex justify-around'>
                                <div>
                                    <p>QSpiders</p>
                                    <Input
                                        name='qsp'
                                        type='number'
                                    />
                                </div>
                                <div>
                                    <p>JSpiders</p>
                                    <Input
                                        name='qsp'
                                        type='number'
                                    />
                                </div>
                                <div>
                                    <p>PYSpiders</p>
                                    <Input
                                        name='qsp'
                                        type='number'
                                    />
                                </div>
                                <div>
                                    <p>BSpiders</p>
                                    <Input
                                        name='qsp'
                                        type='number'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button
                                type="submit"
                                className="py-2 px-4 bg-gradient rounded-md text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </MaxWebWidth>
        </>
    )
}

export default CourseWeitage