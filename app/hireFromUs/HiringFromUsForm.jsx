"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./HirefromusLanding.scss";
import { useEnquriesMutation } from "@/redux/queries/enquriesApi";
import { toast } from "@/components/ui/use-toast";
const HiringFromUsForm = ({ activeTab }) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState({
    mobileNumber: false,
    validPhone: false,
  });
  const inputBorder = "1px solid #26428B80";
  const inputBorderErr = "1px solid #ea0322";

  const getInitialValues = () => {
    switch (activeTab) {
      case "Corporate Training":
        return {
          fullName: "",
          mobileNumber: "",
          requiredTraining: "",
          email: "",
          message: "",
        };
      case "General Enquiries":
        return {
          fullName: "",
          mobileNumber: "",
          email: "",
          message: "",
        };
      default:
        return {
          fullName: "",
          mobileNumber: "",
          companyName: "",
          email: "",
          message: "",
        };
    }
  };

  const getValidationSchema = () => {
    switch (activeTab) {
      case "Corporate Training":
        return Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          mobileNumber: Yup.string().required("Mobile number is required"),
          requiredTraining: Yup.string().required(
            "Required Training is required"
          ),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter valid email address"),
          message: Yup.string().required("Message is required"),
        });
      case "General Enquiries":
        return Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          mobileNumber: Yup.string().required("Mobile number is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter valid email address"),
          message: Yup.string().required("Message is required"),
        });
      default:
        return Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          mobileNumber: Yup.string().required("Mobile number is required"),
          companyName: Yup.string().required("Company Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter valid email address"),
          message: Yup.string().required("Message is required"),
        });
    }
  };
  const [enquirie, { data: loginData, error: submitError, isLoading }] =
    useEnquriesMutation();
  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    onSubmit: async (values) => {
      let payload = {};
      if (activeTab === "Corporate Training") {
        payload = {
          userName: values.fullName,
          mobileNumber: `+${values.mobileNumber}`,
          email: values.email,
          message: values.message,
          enquiryType: "CORPORATETRAINING",
          requiredTraining: values.requiredTraining,
        };
      } else if (activeTab === "General Enquiries") {
        payload = {
          userName: values.fullName,
          mobileNumber: `+${values.mobileNumber}`,
          email: values.email,
          message: values.message,
          enquiryType: "GENERALENQUIRIES",
        };
      } else {
        payload = {
          userName: values.fullName,
          mobileNumber: `+${values.mobileNumber}`,
          email: values.email,
          message: values.message,
          enquiryType: "HIREFROMUS",
          companyName: values.companyName,
        };
      }
      try {
        const response = await enquirie(payload).unwrap();
        toast({
          description: "Your message has been sent.",
        });
      } catch (err) {
        console.error(err, "error in the submit");
      }
    },
  });

  const handleOnBlur = (id) => {
    if (!phoneValue) {
      setError({ ...error, [id]: true });
    } else if (!isValidPhoneNumber("+" + phoneValue?.toString()) || phoneValue.startsWith('911234')) {
      setError({ ...error, [id]: false, validPhone: true });
    } else {
      setError({ ...error, [id]: false, validPhone: false });
    }
  };
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
    <div className="container mx-auto p-4 hiringFromUsComponent">
      <form
        onSubmit={formik.handleSubmit}
        className="custom-grid-form_hiring grid grid-cols-1 mobile:block tabView:block md:grid-cols-2 gap-4"
      >
        <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
          <label htmlFor="fullName" className="block font-bold mb-2">
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
            autoFocus
            className={`w-full border p-2 rounded ${
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

        <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
          <label htmlFor="mobileNumber" className="block font-bold mb-2">
            <span className="text-red-500 pr-1">*</span>Mobile Number
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
                error.phone || error.validPhone ? inputBorderErr : inputBorder
              }`,
              borderRadius: "5px",
            }}
            enableSearch
            international
            inputProps={{
              style: {
                height: "0.43em !important",
              },
            }}
            autoComplete="off"
            onBlur={() => handleOnBlur("mobileNumber")}
            countryCodeEditable={false}
          />
          {(error.mobileNumber ||
            (formik.errors.mobileNumber && formik.touched.mobileNumber)) && (
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

        {activeTab === "Corporate Training" && (
          <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
            <label htmlFor="requiredTraining" className="block font-bold mb-2">
              <span className="text-red-500 pr-1">*</span>Required Training
            </label>
            <input
              id="requiredTraining"
              name="requiredTraining"
              type="text"
              placeholder="Enter required training"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.requiredTraining}
              className={`w-full border p-2 rounded ${
                formik.touched.requiredTraining &&
                formik.errors.requiredTraining
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.requiredTraining &&
            formik.errors.requiredTraining ? (
              <div className="text-red-500 absolute text-sm">
                {formik.errors.requiredTraining}
              </div>
            ) : null}
          </div>
        )}

        {activeTab === "Hire From Us" && (
          <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
            <label htmlFor="companyName" className="block font-bold mb-2">
              <span className="text-red-500 pr-1">*</span>Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Enter your company name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
              className={`w-full border p-2 rounded ${
                formik.touched.companyName && formik.errors.companyName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-red-500 absolute text-sm">
                {formik.errors.companyName}
              </div>
            ) : null}
          </div>
        )}

        <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
          <label htmlFor="email" className="block font-bold mb-2">
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

        <div className="mb-2 mobile:mb-[3vh] tabView:mb-5">
          <label htmlFor="message" className="block font-bold mb-2">
            <span className="text-red-500 pr-1">*</span>Message
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

        <div
          className={`${
            activeTab === "General Enquiries"
              ? "mb-2 md:col-span-2 btnComponent"
              : "mb-2 btnComponent"
          }`}
        >
          <button
            type="submit"
            className=" text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HiringFromUsForm;
