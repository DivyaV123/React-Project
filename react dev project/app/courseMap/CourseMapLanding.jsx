'use client'
import Dropdown from '@/components/commonComponents/dropdown/Dropdown'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import { useGetAllCategoriesQuery } from '@/redux/queries/getAllCategories'
import React, { useState ,useContext} from 'react'
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import Button from '@/components/commonComponents/button/Button'
import { useCourseCategoryMapMutation } from '@/redux/queries/courseCategoryMapingApi'
import { useCourseSubCategoryMapMutation } from '@/redux/queries/courseSubCategoryMapApi'
import { useCategoryUnMapMutation } from '@/redux/queries/categoryUnMapApi'
import { useSubCategortyUnMapMutation } from '@/redux/queries/subCategortyUnMapApi'
import { GlobalContext } from '@/components/Context/GlobalContext'
function CourseMapLanding() {
    const [courseCategoryMap, { data: courseCategoryMapData, error: courseCategoryMapError, isLoading: courseCategoryMapLoad }] = useCourseCategoryMapMutation();
    const [courseSubCategoryMap, { data: courseSubCategoryMapData, error: courseSubCategoryMapError, isLoading: courseSubCategoryMapLoad }] = useCourseSubCategoryMapMutation();
    const [categoryUnmap, { data: categoryUnmapData, error: categoryUnmapError, isLoading: categoryUnmapLoad }] = useCategoryUnMapMutation();
    const [subCategoryUnmap, { data: subCategoryUnmapData, error: subCategoryUnmapError, isLoading: subCategoryUnmapLoad }] = useSubCategortyUnMapMutation();
    const [selectedCourse, setSelectedCourse] = useState("")
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedSubCategory, setSelectedSubCategory] = useState()
    const [isSubCourseDisabled, setIsSubCourseDisabled] = useState(true);
    const [courseDisable, setCourseDisable] = useState(true)
    const [subCourseOptions, setSubCourseOptions] = useState([]);
    const [courseNames, setCourseNames] = useState([])
    const [selectedSubCourse, setSelectedSubCourse] = useState("");
    const [selectedCourseName, setSelectedCourseName] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState([])
    const [showmapCategory, setShowMapCategory] = useState(0)
    const [showmapSubCategory, setShowMapSubCategory] = useState(false)
    const { domainVariable } = useContext(GlobalContext);
    let domain =
      domainVariable === "Qspiders"
        ? "qspiders"
        : domainVariable === "Jspiders"
        ? "jspiders"
        : domainVariable === "Pyspiders"
        ? "pyspiders"
        : "qspiders";
    const validationSchema = Yup.object({
        category: Yup.string().required("category is required"),
        // subCourse: Yup.string().required("Sub Course is required"),
        // courseName: Yup.string().required("Course name is required"),
        mapCategory: Yup.string().required("category is required"),
        mapSubCategory: Yup.string().required("category is required"),
    });
    const commonLabelStyles = "pb-[1.111vh]";
    const initialValues = {
        category: "",
        subCourse: "",
        courseName: "",
    };
    const {
        data: courseResponse,
        isLoading: CourseIsLoading,
        error: CourseError,
        refetch
    } = useGetAllCategoriesQuery(domain);

    const courseOptions = []
    courseResponse?.data?.map((element) => {
        courseOptions.push({
            label: element.title,
            value: element.title,
            Id: element.courseId
        })
    });
    const allSubCategories = []
    courseResponse?.data[2].subCourse.map((ele) => {
        allSubCategories.push({
            label: ele.title,
            value: ele.title,
            Id: ele.subCourseId
        })
    })
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
    const handleCourseNameSelected = (event) => {
        setSelectedCourseId(event.target.options)
    };

    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const payload = {
                qspiders: values.QSpiders,
                jspiders: values.JSpiders,
                pyspiders: values.PYSpiders,
                bspiders: values.BSpiders
            };
        },
    });
    const handlecategoryMapClick = (e) => {
        if (selectedCourseId.length > 0) {
            e.preventDefault()
            setShowMapCategory(true)
        } else {
            alert("please select Courses to map")
        }

    }
    const handleSubcategoryMapClick = (e) => {
        if (selectedCourseId.length > 0) {
            e.preventDefault()
            setShowMapSubCategory(true)
        } else {
            alert("please select Courses to map")
        }
    }
    const handleMapCourseSelect = (event) => {
        setSelectedCategory(event.target.option)
    }
    const handleMapSubCourseSelect = (event) => {
        setSelectedSubCategory(event.target.option)
    }
    const handleCategorySubmit = async (e) => {
        const selectedCategoryId = selectedCategory?.Id
        e.preventDefault()
        let payload = []
        selectedCourseId.map((ele) => {
            payload.push(ele.id)
        })
        if (selectedCategory) {
            try {
                const response = await courseCategoryMap({ bodyData: payload, categoryId: selectedCategoryId }).unwrap();
                alert(response.status === 200 ? "maped successfully" : response.status)
                showmapCategory(false)
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("select Category to map")
        }

    }
    const handleSubCategorySubmit = async (e) => {
        const selectedSubCategoryId = selectedSubCategory?.Id
        let payload = []
        selectedCourseId.map((ele) => {
            payload.push(ele.id)
        })
        e.preventDefault()
        if (selectedSubCategory) {
            try {
                const response = await courseSubCategoryMap({ bodyData: payload, subCategoryId: selectedSubCategoryId }).unwrap();
                alert(response.status === 200 ? "maped successfully" : response.status)
                showmapSubCategory(false)
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("select sub Category to map")
        }

    }

    const handleUnmap = async (e, type) => {
        const selectedSubCategoryId = selectedSubCategory?.Id
        const selectedCategoryId = selectedCategory?.Id
        let payload = []
        selectedCourseId.map((ele) => {
            payload.push(ele.id)
        })
        e.preventDefault()

        if (type === "Category") {
            if (selectedCategory) {
                try {
                    const response = await categoryUnmap({ bodyData: payload, categoryId: selectedCategoryId }).unwrap();
                    alert(response.status === 200 ? "maped successfully" : response.status)
                    showmapSubCategory(false)
                } catch (err) {
                    console.log(err)
                }
            } else {
                alert("select sub Category to map")
            }
        } else {
            if (selectedSubCategory) {
                try {
                    const response = await subCategoryUnmap({ bodyData: payload, subCategoryId: selectedSubCategoryId }).unwrap();
                    alert(response.status === 200 ? "maped successfully" : response.status)
                    showmapSubCategory(false)
                } catch (err) {
                    console.log(err)
                }
            } else {
                alert("select Category to map")
            }
        }



    }
    return (
        <WebLayout>
            <MaxWebWidth articalStyling='pt-8 pb-8'>
                <div className='border border-slate-300 p-8 rounded-xl'>
                    <form>
                        <div className="flex gap-3 justify-between mb-[4.444vh] pb-4 mb-4">
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
                                    multi
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
                        <div className='flex justify-between gap-12'>
                            <div className="flex justify-end mt-8">
                                <Button
                                    onClick={(e) => handlecategoryMapClick(e)}
                                    className="py-2 px-4 bg-gradient rounded-md text-white"
                                    title='Map to Category'
                                />
                            </div>
                            <div className="flex justify-end mt-8">
                                <Button
                                    onClick={(e) => handleSubcategoryMapClick(e)}
                                    className="py-2 px-4 bg-gradient rounded-md text-white"
                                    title='Map to SubCategory'
                                />
                            </div>
                        </div>
                        <div className='flex p-8 mt-8 justify-around w-[100%]'>
                            {showmapCategory > 0 &&
                                <div>
                                    <div className='w-[33vw]'>
                                        <div>
                                            <p className='pb-[1.111vh]'>MAp to Category</p>
                                            <Dropdown
                                                sectionStyle="my-section-style"
                                                name="mapCategory"
                                                value={selectedCategory?.value ? selectedCategory?.value : ''}
                                                onChange={handleMapCourseSelect}
                                                placeholder="Select the Category"
                                                options={courseOptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-2 mt-8">
                                        <button
                                            onClick={(e) => handleCategorySubmit(e)}
                                            className="py-2 px-4 bg-gradient rounded-md text-white"
                                        >Submit to Category</button>
                                        <Button
                                            onClick={(e) => handleUnmap(e, "Category")}
                                            className="py-2 px-4 bg-red-600 rounded-md text-white"
                                            title='Unmap'
                                        />
                                    </div>
                                </div>
                            }
                            {showmapSubCategory &&
                                <div>
                                    <div>
                                        <div className='w-[33vw]'>
                                            <div>
                                                <p className={commonLabelStyles}>Map to Sub Category</p>
                                                <Dropdown
                                                    sectionStyle="my-section-style"
                                                    name="mapSubCategory"
                                                    value={selectedSubCategory?.value}
                                                    onChange={handleMapSubCourseSelect}
                                                    placeholder="Select the Sub Category"
                                                    options={allSubCategories}
                                                />
                                                {formikDetails.touched.subCourse &&
                                                    formikDetails.errors.subCourse ? (
                                                    <div className="text-red-500 text-sm ">
                                                        {formikDetails.errors.subCourse}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start gap-2 mt-8">
                                        <Button
                                            onClick={handleSubCategorySubmit}
                                            className="py-2 px-4 bg-gradient rounded-md text-white"
                                            title='Submit to Sub Category'
                                        />
                                        <Button
                                            onClick={(e) => handleUnmap(e, "SubCategory")}
                                            className="py-2 px-4 bg-red-600 rounded-md text-white"
                                            title='Unmap '
                                        />
                                    </div>
                                </div>

                            }
                        </div>
                    </form>
                </div>
            </MaxWebWidth>
        </WebLayout>
    )
}

export default CourseMapLanding