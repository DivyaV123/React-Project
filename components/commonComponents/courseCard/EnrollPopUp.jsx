"use client";
import React, { useEffect, useState, useRef } from "react";
import "./enrollPopup.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Svg from "../Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import { useEnrollMutation } from "@/redux/queries/enrollNowApi";


function EnrollPopUp({ isModalOpen, handleCloseModal,cardData,toast,branchId }) {
 
 
  const modalRef = useRef(null);
  const [phoneValue, setPhoneValue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState({
    mobileNumber: false,
    validPhone: false,
  });
  const [enrollNow] = useEnrollMutation();
  const inputBorder = "1px solid #26428B80";
  const inputBorderErr = "1px solid #ea0322";
  const initialValues = {
    fullName: "",
    mobileNumber: "",
    course: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    mobileNumber: Yup.string().required("Mobile number is required"),
    // course: Yup.string().required("Course is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter valid email address"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
      let payload = {};
      const fullMobileNumber = values.mobileNumber;
      const numberWithoutCountryCode = fullMobileNumber.replace(countryCode, "");
        payload = {
          userName: values.fullName,
        mobileNumber: {
              code :`+${countryCode}`,
              number :numberWithoutCountryCode
      
          },
          email: values.email,
          message: values.message,
          enquiryType: "",
          requiredTraining: "",
          branchid: branchId ? Number(branchId) : null, 
          courseid :cardData ? cardData.courseResponseId || cardData.courseId: null,
          batchid :cardData && cardData.batchId?  cardData.batchId.toString():null,
          type: ""
        };
       
     
      try {
        const response = await enrollNow(payload).unwrap();
       if (response) {
        toast({
          title: response?.message ,
           
           
          variant: "success",
        });
        handleCloseModal(false)
        }
        formik.resetForm()
       
      } catch (err) {
        console.error(err, "error in the submit");
      }
    },
  });

  const handleOnBlur = (id) => {
    formik.setFieldTouched(id, true);
    if (!phoneValue) {
      setError({ ...error, [id]: true });
    } else if (!isValidPhoneNumber("+" + phoneValue?.toString()) || phoneValue.startsWith('911234')) {
      setError({ ...error, [id]: false, validPhone: true });
    } else {
      setError({ ...error, [id]: false, validPhone: false });
    }
  };

  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    if (isModalOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  const handlePhoneChange = (value, country) => {
    if (country?.dialCode !== countryCode) {
      setPhoneValue(country.dialCode);
      formik.setFieldValue('mobileNumber', country.dialCode);
    } else {
      setPhoneValue(value);
      formik.setFieldValue('mobileNumber', value);
    }
    setCountryCode(country?.dialCode);
  };
  return (
    <div className="enroll_modal ">
      <div className="modal-overlay">
        <div className="modal" ref={modalRef}>
          <div className="max-w-[62.5vw] px-[5.556vh] rounded-xl mobile:max-w-none mobile:px-[2.556vh]  tabView:max-w-none tabView:px-[3.226vw] tabView:flex-col">
            <div className="">
              <div className="flex justify-between pt-[4.444vh] mobile:pt-0">
                <h1 className="font-bold text-[1.875vw] pb-[4.444vh] mobile:text-[4.651vw]">
                  Enroll now
                </h1>
                <div
                  onClick={()=>{handleCloseModal();formik.resetForm()}}
                  className="border-none cursor-pointer hover:bg-white p-0"
                >
                  <Svg
                    width={svgicons.cancelButtonIcon[0]}
                    height={svgicons.cancelButtonIcon[1]}
                    viewBox={svgicons.cancelButtonIcon[2]}
                    icon={svgicons.cancelButtonIcon[3]}
                    color={svgicons.cancelButtonIcon[4]}
                  />
                </div>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="custom-grid-form grid grid-cols-1 md:grid-cols-2 gap-4"
              >

<div className="mb-2">
                  <label
                    htmlFor="fullName"
                    className="block font-bold mb-2 text-left mobile:text-[3.721vw]"
                  >
                    <span className="text-red-500 pr-1">*</span>Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className={`w-full border p-2 rounded  ${
                      formik.touched.fullName && formik.errors.fullName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-red-500 absolute  text-sm">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 mobile:text-[3.721vw]"
                  >
                    <span className="text-red-500 pr-1">*</span>Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full border p-2 rounded ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 absolute text-sm">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="mobileNumber"
                    className="block font-bold mb-2 mobile:text-[3.721vw]"
                  >
                   <span className="text-red-500 pr-1">*</span> Mobile Number
                  </label>
                  <PhoneInput
                    type="text"
                    placeholder="Enter phone number"
                    searchPlaceholder="Search..."
                    searchNotFound="No Countries Found"
                    specialLabel=""
                    autoFormat={false}
                    enableAreaCodeStretch
                    country={"in"}
                    name="mobileNumber"
                    id="mobileNumber"
                    value={formik.values.mobileNumber}
                    className="outline-none"
                    onChange={(e, country) =>handlePhoneChange(e,country)}
                    // style={{
                    //   border: `${error.mobileNumber || error.validPhone ? inputBorderErr : inputBorder}`,
                    //   borderRadius: "5px",
                    // }}
                    style={{
                      border: `${
                        error.mobileNumber || error.validPhone
                          ? inputBorderErr
                          : inputBorder
                      }`,
                      borderRadius: "5px",
                    }}
                    enableSearch
                    international
                    inputProps={{
                      // autoFocus: true,
                      style: {
                        height: "0.43em !important",
                      },
                    }}
                    autoComplete="off"
                    onBlur={() => handleOnBlur("mobileNumber")}
                    countryCodeEditable={false}
                  />
                  {(error.mobileNumber ||
                    (formik.errors.mobileNumber &&
                      formik.touched.mobileNumber)) && (
                    <div className="text-red-500 absolute text-sm">
                      Mobile number is required
                    </div>
                  )}
                  {error.validPhone && !error.mobileNumber && (
                    <div className="text-red-500 absolute text-sm">
                      Invalid phone number
                    </div>
                  )}
                </div>
               
                <div className="mb-2">
                  <label
                    htmlFor="course"
                    className="block font-bold mb-2 mobile:text-[3.721vw]"
                  >
                    <span className="text-red-500 pr-1">*</span>Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    placeholder="-Select-"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.course}
                    disabled
                    className={`w-full border p-2 rounded ${
                      formik.touched.course && formik.errors.course
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  ><option>{cardData?.courseName ? cardData?.courseName : cardData?.title}</option></select>
                  {formik.touched.course && formik.errors.course ? (
                    <div className="text-red-500 absolute text-sm">
                      {formik.errors.course}
                    </div>
                  ) : null}
                </div>

               

                <div className="mb-2 ">
                  <label
                    htmlFor="message"
                    className="block font-bold mb-2 mobile:text-[3.721vw]"
                  >
                   <span className="text-red-500 pr-1">*</span> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`w-full border p-2 rounded resize-none ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 absolute text-sm">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>

                <div className="mb-2 btnComponent mobile:top-[0vh]">
                  <button
                    type="submit"
                    className=" text-white py-2 px-4 mobile:text-[3.721vw] mobile:font-bold rounded "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default EnrollPopUp;
