'use client'
import React, { useState } from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialogFull";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Workflow } from 'lucide-react';
import Input from '@/components/commonComponents/input/Input';
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import Button from '@/components/commonComponents/button/Button';
import { useGetAllCategoriesInCourseQuery } from '@/redux/queries/getAllCategoriesInCourseForm';

function AddCourseForm() {
    const { data: courseData, error, isLoading } = useGetAllCategoriesInCourseQuery();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [orgType, setOryType] = useState("")
    const [classMode, setClassMode] = useState('')
    const courseOptions = courseData?.data?.map((course) => ({
        label: course.categoryName,
        value: course.categoryId,
        id: course.categoryId
    }));
    const orgOptions = [
        {
            label: "Jspiders",
            value: 'JSP'

        },
        {
            label: "Qspiders",
            value: 'QSP'

        },
        {
            label: "Pyspiders",
            value: 'PYSP'

        },
    ]
    const classModeOption = [
        {
            label: "Self Paced",
            value: "SELF_PACED"

        },
        {
            label: "Corporate Training",
            value: "CORPORATE_TRAINING"

        },
        {
            label: "Online Classes",
            value: "ONLINE_CLASSES"

        },
        {
            label: "Offline Classes",
            value: "OFFLINE_CLASSES"

        },
    ]
    const [selectedId, setSelectedId] = useState(
        {
            categoryId: '',
            subCategoryId: ''
        })
    const tagHeadStyle = 'font-medium text-[1.094vw] pb-[1.389vh]'
    const [selectedFile, setSelectedFile] = useState({
        courseIcon: null,
        homePageImage: null,
        courseCardImage: null
    });
    const [errorMessage, setErrorMessage] = useState({
        categoryIconDark: "",
        categoryIconLite: "",
    });

    const initialValues = {
        courseName: '',
        category: '',
        subCategory: '',
        courseDesc: '',
        courseSummary: '',
        aboutCourse: '',
        courseHeighlights: '',
        orgType: '',
        classMode: '',
        subjects: [],
        faqs: []
    };

    const validationSchema = Yup.object({
        category: Yup.string().required("Course is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
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
        classMode: Yup.string().required("Mode is required"),
    });

    const handleCourseSelect = (event) => {
        setSelectedId(prevState => ({
            ...prevState,
            categoryId: event.target.option.id
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
                    id: sub.subCategoryId
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
        setSelectedId(prevState => ({
            ...prevState,
            subCategoryId: event.target.option.id
        }));
        setSelectedSubCourse(event.target.value);
        formikDetails.setFieldValue("subCategory", event.target.value);
    };

    const handleFileChange = (event, iconType) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedFile((prevState) => ({
                ...prevState,
                [iconType]: file,
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
            setErrorMessage((prevState) => ({
                ...prevState,
                [iconType]: "Please upload a valid image file.",
            }));
        }
    };
    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            let faqArray = values.faqs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
                faqType: "COURSE",
            }))
            // const convertedfaqArray = JSON.stringify(faqArray);
            const courseDetails = {
                courseName: values.courseName,
                courseDescription: values.courseDescription,
                branchType: values.organisation,
                mode: values.mode,
                courseSummary: values.courseSummary,
                courseAbout: values.aboutCourse,
                courseHighlight: values.courseHighlights,
                faqs: faqArray,
            };
            const payloadString = JSON.stringify(courseDetails);
            const payload = {
                course: payloadString,
                icon: files.icon,
                image: files.cardImage,
                homePageImage: files.pageImage,
                categoryId: selectedId.categoryId,
                subCategoryId: selectedId.subCategoryId,
            }
            try {
                const response = await addCourse({ bodyData: payload }).unwrap();
                if (response.statusCode == 201) {
                    resetForm();
                    alert("course created successfully")
                } else {
                    alert("something went wrong")
                }
            } catch (err) {
                alert(courseError.data.data)
            }
        },
    });
    const handleOrgChange = (event) => {
        const selectedOrg = event.target.option.label
        setOryType(selectedOrg)
        formikDetails.setFieldValue("orgType", event.target.option.value)
    }
    const handleModeChange = (event) => {
        const selectedOrg = event.target.option.label
        setClassMode(selectedOrg)
        formikDetails.setFieldValue("classMode", event.target.option.value)
    }
    return (
        <DialogContent>
            <form onSubmit={formikDetails.handleSubmit}>
                <h1 className='font-bold pb-[2.222vh]'>Add new Course</h1>
                <div className='flex gap-[6.25rem] pb-[2.222vh]'>
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Course name</p>
                                <Input
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]'
                                    name='courseName'
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
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Select Category</p>
                                <Dropdown
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh] text-[12px]  text-gray-400'
                                    iconStyle='w-[10%]'
                                    name="category"
                                    value={selectedCourse}
                                    onChange={handleCourseSelect}
                                    options={courseOptions}
                                />
                                {formikDetails.touched.category && formikDetails.errors.category ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.category}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Select Sub-Category</p>
                                <Dropdown
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]  text-gray-400'
                                    value={selectedSubCourse}
                                    onChange={handleSubCourseSelect}
                                    options={subCourseOptions}
                                    disabled={isSubCourseDisabled}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[6.25rem] pb-[2.222vh]'>
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Course Description</p>
                                <Input
                                    name='courseDesc'
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]'
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
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Course Summary</p>
                                <Input
                                    name='courseSummary'
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh] text-[12px]'
                                    iconStyle='w-[10%]'
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
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>About Course</p>
                                <Input
                                    name='aboutCourse'
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]'
                                    value={formikDetails.values.aboutCourse}
                                    onChange={formikDetails.handleChange}
                                    onBlur={formikDetails.handleBlur}
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
                </div>
                <div className='flex gap-[6.25rem] pb-[2.222vh]'>
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Course highlights</p>
                                <Input
                                    placeholder='Enter course name'
                                    name='courseHeighlights'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]'
                                    value={formikDetails.values.courseHeighlights}
                                    onChange={formikDetails.handleChange}
                                    onBlur={formikDetails.handleBlur}
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
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Organigation</p>
                                <Dropdown
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh] text-[12px]  text-gray-400'
                                    iconStyle='w-[10%]'
                                    options={orgOptions}
                                    name='orgType'
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
                    <div className='w-full h-full'>
                        <div className='pt-[2.222vh]'>
                            <div>
                                <p className={tagHeadStyle}>Mode of class</p>
                                <Dropdown
                                    placeholder='Enter course name'
                                    inputStyle='!w-[23.438vw] h-[5vh]  text-[12px]  text-gray-400'
                                    options={classModeOption}
                                    name='classMode'
                                    onChange={handleModeChange}
                                    value={formikDetails.values.classMode}
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
                <div className='pt-[2.222vh] pb-[2.222vh]'>
                    <div>
                        <p className={tagHeadStyle}>Add Subjects</p>
                        <Dropdown
                            placeholder='Enter course name'
                            inputStyle='!w-[23.438vw] h-[5vh]  text-[12px] text-gray-400'

                        />
                    </div>
                </div>
                <div className='flex gap-[16.50rem] pb-[2.222vh]'>
                    <div>
                        <p className={tagHeadStyle}>Course Icon</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="file-upload-dark"
                            onChange={(event) => handleFileChange(event, "categoryIconDark")}
                        />
                        <label htmlFor="file-upload-dark">
                            <img
                                src="/images/uploadinput.png"
                                alt="file upload"
                            />
                        </label>
                        {selectedFile.categoryIconDark && (
                            <p className="text-gray-700 text-[0.6rem]">
                                <span className="font-medium text-[0.6rem]">Selected file:</span> {selectedFile.categoryIconDark.name}
                            </p>
                        )}
                        {errorMessage.categoryIconDark && (
                            <p className="text-red-500 text-[0.6rem]">{errorMessage.categoryIconDark}</p>
                        )}
                    </div>
                    <div>
                        <p className={tagHeadStyle}>Home Page Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="file-upload-dark"
                            onChange={(event) => handleFileChange(event, "categoryIconDark")}
                        />
                        <label htmlFor="file-upload-dark">
                            <img
                                src="/images/uploadinput.png"
                                alt="file upload"
                            />
                        </label>
                        {selectedFile.categoryIconDark && (
                            <p className="text-gray-700 text-[0.6rem]">
                                <span className="font-medium text-[0.6rem]">Selected file:</span> {selectedFile.categoryIconDark.name}
                            </p>
                        )}
                        {errorMessage.categoryIconDark && (
                            <p className="text-red-500 text-[0.6rem]">{errorMessage.categoryIconDark}</p>
                        )}
                    </div>
                    <div>
                        <p className={tagHeadStyle}>Course Card Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="file-upload-dark"
                            onChange={(event) => handleFileChange(event, "categoryIconDark")}
                        />
                        <label htmlFor="file-upload-dark">
                            <img
                                src="/images/uploadinput.png"
                                alt="file upload"
                            />
                        </label>
                        {selectedFile.categoryIconDark && (
                            <p className="text-gray-700 text-[0.6rem]">
                                <span className="font-medium text-[0.6rem]">Selected file:</span> {selectedFile.categoryIconDark.name}
                            </p>
                        )}
                        {errorMessage.categoryIconDark && (
                            <p className="text-red-500 text-[0.6rem]">{errorMessage.categoryIconDark}</p>
                        )}
                    </div>
                </div>
                <DialogFooter>
                    <div className='absolute bottom-4 right-6'>
                        <Button
                            type='submit'
                            title='Create Course'
                            className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium bg-gradient rounded-md text-white'
                        />
                    </div>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default AddCourseForm