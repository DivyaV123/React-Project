'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllCategoriesQuery } from '@/redux/queries/getAllCategories';
import BranchDropDowns from '../branchEditForm/BranchDropDowns';
import Input from '@/components/commonComponents/input/Input';
import Button from '@/components/commonComponents/button/Button';
import { useAddBatchApiMutation } from '@/redux/queries/addBatchApi';


function BatchFormLanding() {
    const [addBatch, { data: branchAdd, error: courseError, isLoading: courseAdderLoad }] = useAddBatchApiMutation();
    const {
        data: courseResponse,
        isLoading: CourseIsLoading,
        error: CourseError,
        refetch
    } = useGetAllCategoriesQuery();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [selectedCourseName, setSelectedCourseName] = useState("");
    const [branchDropDownDetails, setBranchDropDownDetails] = useState('');
    const [isSelectedBranchEdit, setIsSelectedBranchEdit] = useState(false);
    const [createBatch, setCreateBatch] = useState(true);
    const [startCalender, setStartCalender] = useState(true);
    const [endCalender, setEndCalender] = useState(true);
    const [selectedDates, setSelectedDates] = useState({
        startDate: '',
        endDate: ''
    })
    const [startTime, setStartTime] = useState({
        startHour: '',
        startMin: ''
    })
    const [endtTime, setEndTime] = useState({
        endHour: '',
        endMin: ''
    })
    const courseOptions = []
    courseResponse?.data?.map((element) => {
        courseOptions.push({
            label: element.title,
            value: element.title,
            Id: element.courseId
        })
    });
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [courseNames, setCourseNames] = useState([]);
    const [courseDisable, setCourseDisable] = useState(true);
    const [batchStart, setBatchStart] = useState('');
    const [allId, setAllID] = useState({
        categoryId: '',
        subCategoryId: '',
        courseId: '',
    })
    const commonLabelStyles = "pb-[1.111vh]";
    const validationSchema = Yup.object({
        category: Yup.string().required("category is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
        // courseName: Yup.string().required("Course name is required"),
        batchTitle: Yup.string().required("Batch Title is required"),
        trainerName: Yup.string().required("Trainer Nameis required"),
        starthour: Yup.number()
            .typeError('Start hour must be a number')
            .required('Start hour is required')
            .min(0, 'Start hour cannot be less than 0')
            .max(24, 'Start hour cannot be more than 24'),
        startMin: Yup.number()
            .typeError('Start minute must be a number')
            .required('Start minute is required')
            .min(0, 'Start minute cannot be less than 0')
            .max(60, 'Start minute cannot be more than 60'),
        endhour: Yup.number()
            .typeError('End hour must be a number')
            .required('End hour is required')
            .min(0, 'End hour cannot be less than 0')
            .max(24, 'End hour cannot be more than 24'),
        endMin: Yup.number()
            .typeError('End minute must be a number')
            .required('End minute is required')
            .min(0, 'End minute cannot be less than 0')
            .max(60, 'End minute cannot be more than 60')
    })
    let initialValues = {
        category: "",
        subCourse: "",
        courseName: "",
        batchTitle: "",
        trainerName: "",
        starthour: '',
        startMin: "",
        endhour: '',
        endMin: '',
        startDate: null,
        endDate: null,
    }
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const startingDate = formatDate(selectedDates.startDate);
            const endingDate = formatDate(selectedDates.endDate);
            const courseId = allId?.courseId;
            const BranchId = branchDropDownDetails?.data?.branchId;
            console.log(branchDropDownDetails, "branchDropDownDetailsbranchDropDownDetailsF")
            let payload = {
                batchTitle: values.batchTitle,
                trainerName: values.trainerName,
                startingDate: startingDate,
                endingDate: endingDate,
                startingTime: `${values.starthour.toString().padStart(2, '0')}:${values.startMin.toString().padStart(2, '0')}:00`,
                endingTime: `${values.endhour.toString().padStart(2, '0')}:${values.endMin.toString().padStart(2, '0')}:00`,
                extendingDays: 0
            }
            try {
                const response = addBatch({ bodyData: payload, branchId: BranchId, courseId: courseId })
                if (response.statusCode === 201) {
                    alert("batc created successfully")
                } else {
                    console.log(err)
                }
            } catch (err) {
                alert(err.message)
            }
        },
    });
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
    const handleSubCourseSelect = (event) => {
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
    const handleFromChange = (newValue, type) => {
        setSelectedDates((prevDates) => ({
            ...prevDates,
            [type]: newValue
        }));
    };

    return (
        <WebLayout>
            <MaxWebWidth sectionStyling='pt-4 pb-4' articalStyling='p-8 pt-1 border border-gray-300 rounded-xl'>
                <p className='font-large text-[1rem] p-2 text-orange-500'>Selecte the Course</p>
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
                <p className='font-large text-[1rem] p-2 pt-5 text-orange-500'>Selecte the Branch to create Offline Batch </p>
                <BranchDropDowns
                    btnName='Create Batch'
                    setBranchDropDownDetails={setBranchDropDownDetails}
                    setIsSelectedBranchEdit={setIsSelectedBranchEdit}
                />
                {/* <div className="flex gap-4 justify-end mt-2">
                    <button
                        type="button"
                        onClick={() => setCreateBatch(true)}
                        className="py-2 px-4 bg-gradient rounded-md text-white"
                    >
                        Create a Batch
                    </button>
                </div> */}
            </MaxWebWidth>
            <MaxWebWidth articalStyling='pb-5'>
                <form onSubmit={formikDetails.handleSubmit}>
                    <div className='p-5 border border-gray-300 rounded-xl'>
                        <p className='font-large text-[1rem] p-2 pt-5 text-orange-500'>Fill Batch Details</p>
                        <div className='flex justify-around gap-4 mb-4'>
                            <div className="w-[33vw]">
                                <p className={commonLabelStyles}>Batch Title</p>
                                <Input
                                    name="batchTitle"
                                    value={formikDetails.values.batchTitle}
                                    onChange={formikDetails.handleChange}
                                    onBlur={formikDetails.handleBlur}
                                    className={`${formikDetails.touched.batchTitle &&
                                        formikDetails.errors.batchTitle
                                        ? "border-red-500"
                                        : " border-gray-400"
                                        }`}
                                />
                                {formikDetails.touched.batchTitle &&
                                    formikDetails.errors.batchTitle ? (
                                    <div className="text-red-500">
                                        {formikDetails.errors.batchTitle}
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-[33vw]">
                                <p className={commonLabelStyles}>Trainer Name</p>
                                <Input
                                    name="trainerName"
                                    value={formikDetails.values.trainerName}
                                    onChange={formikDetails.handleChange}
                                    onBlur={formikDetails.handleBlur}
                                    className={`${formikDetails.touched.trainerName &&
                                        formikDetails.errors.trainerName
                                        ? "border-red-500"
                                        : " border-gray-400"
                                        }`}
                                />
                                {formikDetails.touched.trainerName &&
                                    formikDetails.errors.trainerName ? (
                                    <div className="text-red-500">
                                        {formikDetails.errors.trainerName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className='flex justify-around gap-4'>
                            <div>
                                <Button
                                    type='button'
                                    title='Select Batch Start Day'
                                    className='p-2 bg-orange-300 rounded-xl mb-2'
                                    onClick={() => { setStartCalender(true) }}
                                />
                                {startCalender &&
                                    <Calendar
                                        minDate={new Date()}
                                        onChange={(newValue) => handleFromChange(newValue, "startDate")}
                                        value={selectedDates.startDate ? new Date(selectedDates.startDate) : null}
                                    />
                                }
                            </div>
                            <div>
                                <Button
                                    type='button'
                                    title='Select Batch End Day'
                                    className='p-2 bg-orange-300 rounded-xl mb-2'
                                    onClick={() => { setEndCalender(true) }}
                                />
                                {endCalender &&
                                    <Calendar
                                        minDate={new Date()}
                                        onChange={(newValue) => handleFromChange(newValue, "endDate")}
                                        value={selectedDates.endDate ? new Date(selectedDates.endDate) : null}
                                    />
                                }
                            </div>
                        </div>
                        <div className='flex justify-around gap-4 mt-6'>
                            <div className='border border-gray-300 p-4'>
                                <p>Start Time</p>
                                <div className='flex gap-2'>
                                    <div>
                                        <Input
                                            placeholder='select start hour'
                                            name='starthour'
                                            type='number'
                                            onChange={formikDetails.handleChange}
                                            onBlur={formikDetails.handleBlur}
                                            value={formikDetails.values.starthour}
                                        />
                                        {formikDetails.touched.starthour &&
                                            formikDetails.errors.starthour ? (
                                            <div className="text-red-500">
                                                {formikDetails.errors.starthour}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Input
                                            placeholder='select End min'
                                            name='startMin'
                                            type='number'
                                            onChange={formikDetails.handleChange}
                                            onBlur={formikDetails.handleBlur}
                                            value={formikDetails.values.startMin}
                                        />
                                        {formikDetails.touched.startMin &&
                                            formikDetails.errors.startMin ? (
                                            <div className="text-red-500">
                                                {formikDetails.errors.startMin}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                            </div>
                            <div className='border border-gray-300 p-4'>
                                <p>End Time</p>
                                <div className='flex gap-2'>
                                    <div>
                                        <Input
                                            placeholder='select End hour'
                                            name='endhour'
                                            type='number'
                                            onChange={formikDetails.handleChange}
                                            onBlur={formikDetails.handleBlur}
                                            value={formikDetails.values.endhour}
                                        />
                                        {formikDetails.touched.endhour &&
                                            formikDetails.errors.endhour ? (
                                            <div className="text-red-500">
                                                {formikDetails.errors.endhour}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Input
                                            placeholder='select End Min'
                                            name='endMin'
                                            type='number'
                                            onChange={formikDetails.handleChange}
                                            onBlur={formikDetails.handleBlur}
                                            value={formikDetails.values.endMin}
                                        />
                                        {formikDetails.touched.endMin &&
                                            formikDetails.errors.endMin ? (
                                            <div className="text-red-500">
                                                {formikDetails.errors.endMin}
                                            </div>
                                        ) : null}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-gradient rounded-md text-white"
                        >
                            Create Batch
                        </button>
                    </div>
                </form>
            </MaxWebWidth>
        </WebLayout>
    )
}

export default BatchFormLanding
