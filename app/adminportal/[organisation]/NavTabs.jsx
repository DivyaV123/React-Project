"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/components/Context/GlobalContext";
import "./AdminSidebar.scss";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PORTAL } from "@/lib/RouteConstants";
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
const NavTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [sidebarParam] = getParams[0].split(",").slice(0);
  const [instituteParam] = getParams[0].split(",").slice(1);
  const pStyle = ' text-[1.094vw] font-medium pb-[1.389vh]';
  const [selectedFile, setSelectedFile] = useState({
    categoryIconDark: null,
    categoryIconLite: null
  });
  const [errorMessage, setErrorMessage] = useState({
    categoryIconDark: "",
    categoryIconLite: "",
  });
  const { selectedInstitute, setSelectedInstitute } = useContext(GlobalContext);
  const initialValues = {
    categoryName: "",
  }
  const validationSchema = Yup.object({
    categoryName: Yup.string().required("Category Name is required"),
  });
  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {

      console.log(values, "values")
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
  const domains = [
    {
      title: "Qspiders",
      key: "QSP",
    },
    {
      title: "Jspiders",
      key: "JSP",
    },
    {
      title: "Pyspiders",
      key: "PYSP",
    },
    {
      title: "Prospiders",
      key: "PROSP",
    },
  ];
  const decodedCourse = decodeURIComponent(getParams[3])
  const handleNavTab = async (item) => {
    setSelectedInstitute(item.title);
    const decodedCategory = decodeURIComponent(sidebarParam);
    if (decodedCategory === "Sub Category") {
      router.push(`${ADMIN_PORTAL}/${sidebarParam},${item.title}/subcategory`);
    } else if (decodedCategory === "Course") {
      router.push(`${ADMIN_PORTAL}/${sidebarParam},${item.title}/courses`);
    } else if (getParams[1] === "dynamic" && getParams[2] === "course") {
      router.push(`${ADMIN_PORTAL}/${sidebarParam},${item.title}/dynamic/course/${decodedCourse}`);
    } else {
      router.push(`${ADMIN_PORTAL}/${sidebarParam},${item.title}`);
    };
  }

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
    <Dialog>
      <section className="flex gap-4 mt-[1.389vh]  pl-[1.875vw]">
        {domains.map((item, index) => (
          <div
            key={index}
            className={`pt-[0.972vh] pb-[1.528vh] cursor-pointer px-[0.625vw]  ${instituteParam === item.title
              ? "text-[#FF7B1B] font-bold activeTab"
              : " font-medium text-[#212121] inActiveTab"
              }`}
            onClick={() => handleNavTab(item)}
          >
            <h1 className="text-[1.094vw] font-bold">{item.title}</h1>
          </div>
        ))}
      </section>
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
  );
};

export default NavTabs;
