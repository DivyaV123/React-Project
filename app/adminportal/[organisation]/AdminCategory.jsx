"use client";
import React, { useContext, useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllCategoryQuery } from "@/redux/queries/adminCategorySortApi";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/lib/Loading";
import Input from "@/components/commonComponents/input/Input";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Dialog,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { useCategoryAdderMutation } from "@/redux/queries/addCategoryApi";

const AdminCategory = () => {
    const [addCategory, { data: categoryAdd, error: categoryError, isLoading: categoryAdderLoad }] = useCategoryAdderMutation()
    const router = useRouter();
    const pathname = usePathname();
    const getParams = pathname.split("/").slice(2);
    const [instituteParam] = getParams[0].split(",").slice(1);
    const initialOrgType =
        instituteParam === "Qspiders"
            ? "QSP"
            : instituteParam === "Jspiders"
                ? "JSP"
                : instituteParam === "Pyspiders"
                    ? "PYSP"
                    : instituteParam === "Prospiders"
                        ? "PROSP"
                        : "QSP";

    const {
        data: categoryData,
        refetch,
        isLoading,
    } = useGetAllCategoryQuery({
        organizationType: initialOrgType,
    });
    useEffect(() => {
        refetch();
    }, [instituteParam]);
    const pStyle = ' text-[1.094vw] font-medium pb-[1.389vh]';
    const [selectedFile, setSelectedFile] = useState({
        categoryIconDark: null,
        categoryIconLite: null
    });
    const [errorMessage, setErrorMessage] = useState({
        categoryIconDark: "",
        categoryIconLite: "",
    });

    const initialValues = {
        categoryName: "",
    }
    const validationSchema = Yup.object({
        categoryName: Yup.string().required("Category Name is required"),
    });
    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            let payload = {
                title: values.categoryName,
                icon: selectedFile.categoryIconDark,
                alternativeIcon: selectedFile.categoryIconLite
            }

            try {
                const response = await addCategory({ bodyData: payload }).unwrap();
                alert("course successfully created")
            } catch {
                alert(categoryError.data.data)
            }
        }
    })

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


    const dialogForm = () => {
        return (
            <form onSubmit={formikDetails.handleSubmit}>
                <div className="pb-[2.222vh]">
                    <p className={pStyle}>Category name</p>
                    <Input
                        onChange={formikDetails.handleChange}
                        onBlur={formikDetails.handleBlur}
                        value={formikDetails.values.categoryName}
                        name='categoryName'
                        placeholder="Enter category name"
                    />
                    {formikDetails.touched.categoryName &&
                        formikDetails.errors.categoryName ? (
                        <div className="text-red-500 text-[0.6rem] ">
                            {formikDetails.errors.categoryName}
                        </div>
                    ) : null}
                </div>
                <p className={pStyle}>Category Icon Dark</p>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="file-upload-dark"
                        onChange={(event) => handleFileChange(event, "categoryIconDark")}
                    />
                    <label htmlFor="file-upload-dark">
                        <img
                            src="../images/uploadinput.png"
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

                <p className={pStyle}>Category Icon Lite</p>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id="file-upload-lite"
                        onChange={(event) => handleFileChange(event, "categoryIconLite")}
                    />
                    <label htmlFor="file-upload-lite">
                        <img
                            src="../images/uploadinput.png"
                            alt="file upload"
                        />
                    </label>
                    {selectedFile.categoryIconLite && (
                        <p className="text-gray-700 text-[0.6rem]">
                            <span className="font-medium text-[0.6rem]">Selected file:</span> {selectedFile.categoryIconLite.name}
                        </p>
                    )}
                    {errorMessage.categoryIconLite && (
                        <p className="text-red-500 text-[0.6rem]">{errorMessage.categoryIconLite}</p>
                    )}
                </div>

            </form >
        )
    }
    const handleCategoryClick = (id) => {
        const basePath = pathname.split(",").slice(0, 2).join(",");
        const checkIfSubCourse =
            categoryData?.data.find((category) => category.courseId === id)?.subCourse
                .length > 0;

        const subCoursePath = `${basePath}/dynamic/${id}`;
        const coursePath = `${basePath}/dynamic/course/${id}`;
        if (checkIfSubCourse) {
            router.push(subCoursePath);
        } else {
            router.push(coursePath);
        }
    };

    const handleEditClick = (title) => {
        console.log(`Edit clicked for: ${title}`);
    };

    const handleDeleteClick = (id) => {
        console.log(`Delete clicked for id: ${id}`);
    };

    const tableHeaders = [
        { label: "CATEGORY NAME", className: "text-gray-600 font-medium text-xs" },
        { label: "SUB CATEGORIES", className: "text-gray-600 font-medium text-xs" },
        { label: "COURSES", className: "text-gray-600 font-medium text-xs" },
        { label: "ACTIONS", className: "text-gray-600 font-medium text-xs" },
    ];

    const renderCells = (category) => [
        {
            content: category.title,
            className: "text-gray-600 font-medium text-xs cursor-pointer",
            onClick: () => handleCategoryClick(category.courseId),
        },
        {
            content: category.subCourse.length,
            className: "text-gray-600 font-medium text-xs",
        },
        {
            content: category.courseResponse.length,
            className: "text-gray-600 font-medium text-xs",
        },
        {
            content: (
                <div className="invisible group-hover:visible flex">
                    <button
                        className="text-blue-500 mr-2"
                        onClick={() => handleEditClick(category.title)}
                    >
                        Edit
                    </button>
                    <button
                        className="text-red-500"
                        onClick={() => handleDeleteClick(category.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
            className: "text-gray-600 font-medium text-xs",
        },
    ];
    const footerBtnClick = () => {
        formikDetails.handleSubmit();

        if (!selectedFile.categoryIconDark || !selectedFile.categoryIconLite) {
            setErrorMessage({
                categoryIconDark: selectedFile.categoryIconDark ? "" : "Please upload a valid image file.",
                categoryIconLite: selectedFile.categoryIconLite ? "" : "Please upload a valid image file."
            });
        }
    };


    const dialogCloseClick = () => {
        formikDetails.resetForm();
        setErrorMessage({
            categoryIconDark: "",
            categoryIconLite: ""
        })
    }
    return (
        <>
            <Dialog>
                <article className="flex justify-between">
                    <div className="pt-[2.222vh] pl-[1.875vw] w-[29.688vw]">
                        <Input
                            inputStyle="rounded-md"
                            placeholder="search"
                            iconPath="../images/icon_outline_search.png"
                        />
                    </div>
                    <aside className="pt-[2.778vh] pr-[1.875vw]">
                        <div className=" bg-gradient rounded-md py-[1.111vh] px-[0.938vw] text-white font-bold flex gap-2 text-[1.094vw]">
                            <Svg
                                width={svgicons.addIcon[0]}
                                height={svgicons.addIcon[1]}
                                viewBox={svgicons.addIcon[2]}
                                icon={svgicons.addIcon[3]}
                                color={svgicons.addIcon[4]}
                            />
                            <DialogTrigger asChild>
                                <button
                                    onClick={() => { }}
                                    className=""
                                >Sub Category</button>
                            </DialogTrigger>
                        </div>
                    </aside>
                </article>
                <CommonDialog
                    dialogCloseClick={dialogCloseClick}
                    header="Add new category"
                    footerBtnTitle='Create Category'
                    formfn={dialogForm}
                    footerBtnClick={footerBtnClick}
                />
            </Dialog>
            <div className="py-[3.333vh] px-[1.875vw]">
                <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh] h-[73.389vh] ">
                    <Table>
                        <TableHeader className="sticky top-0 bg-white z-10">
                            <TableRow>
                                {tableHeaders.map((header, index) => (
                                    <TableHead key={index} className={header.className}>
                                        {header.label}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                <Loading />
                            ) : (
                                <>
                                    {categoryData?.data.map((category, index) => (
                                        <TableRow key={category.id || index} className="group">
                                            {renderCells(category).map((cell, cellIndex) => (
                                                <TableCell
                                                    key={cellIndex}
                                                    className={cell.className}
                                                    onClick={cell.onClick}
                                                >
                                                    {cell.content}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default AdminCategory;
