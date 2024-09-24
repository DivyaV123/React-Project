"use client";
import React, { useContext, useState, useEffect } from "react";
import Input from "@/components/commonComponents/input/Input";
import TextArea from "@/components/commonComponents/textArea/TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const TransformWorkSpace = () => {
  const [error, setError] = useState({ phone: false, validPhone: false });
  const [phoneValue, setPhoneValue] = useState();
  const [countryCode, setCountryCode] = useState("");
  const { toast } = useToast();
  const [isMobileView, setIsMobileView] = useState(false);
  const { domainVariable } = useContext(GlobalContext);
  const contactUsInput = "w-full  h-full text-[0.938vw]";
  const contentStyle = "flex gap-2 pb-[0.625vw] item-center";
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMobileView(e.matches);
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const initialValues = {
    name: "",
    title: '',
    compName: '',
    phone: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Minimum 3 characters")
      .max(25, "Maximum 25 characters")
      .matches(/^[A-Za-z ]*$/, "Name should be alphabetic")
      .required("Name is required"),
    phone: Yup.string().required("Mobile number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter valid email address"),
    message: Yup.string().required("Message is required"),
    compName: Yup.string().required("Company Name is required"),
    title: Yup.string().required("Title is required"),
  });
  const formikDetails = useFormik({
    initialValues,
    validationSchema,
  });
  const handleOnBlur = (id) => {
    if (!phoneValue) {
      setError({ ...error, [id]: true });
    } else if (
      !isValidPhoneNumber("+" + phoneValue?.toString()) ||
      phoneValue.startsWith("911234")
    ) {
      setError({ ...error, [id]: false, validPhone: true });
    } else {
      setError({ ...error, [id]: false, validPhone: false });
    }
  };
  const handlePhoneChange = (value, country) => {
    if (country?.dialCode !== countryCode) {
      setPhoneValue("");
      formikDetails.setFieldValue("phone", country.dialCode);
      setError({ ...error, validPhone: false });
    } else {
      setPhoneValue(value);
      formikDetails.setFieldValue("phone", value);
    }
    setCountryCode(country?.dialCode);
  };
  return (
    <section className="w-[87.5vw] m-auto TransformBackground rounded-3xl">
      <article className="text-[2.5vw] font-bold pt-[5.556vh] pl-[3.906vw]">
        Transform Your Workforce
      </article>
      <section className="flex justify-between pt-[3.889vh]">
        <article className="text-[#707070] text-[1.25vw] pl-[3.906vw]  w-[24.766vw]">
          Contact us to meet all your upskilling requirements and enhance your
          professional skill set. We are dedicated to helping you achieve your
          career goals with our comprehensive training programs
        </article>
        <form
          onSubmit={formikDetails.handleSubmit}
          className="flex flex-wrap gap-8 w-[51.875vw] corporateTrainingComponent"
        >
          <div className="pb-[3.333vh] mobile:mt-[2vh] mobile:pb-[4.5vw] tabView:mt-[3.344vh] tabView:pb-[3.6vw] w-[23.438vw]">
            <span className="text-[0.938vw] font-normal tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]  mobile:text-[2.791vw]">
              {/* <span className="text-red-500 pr-1">*</span>Name */}
            </span>
            <Input
              inputStyle={`${contactUsInput}  mobile:text-[2.591vw] mobile:pl-[7.442vw] tabView:text-[1.491vw] tabView:pl-[5.442vw] contactInput`}
              iconPath="/nameTextFieldIcon.svg"
              placeholder="Enter your full name"
              name="name"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.name}
            />
            {formikDetails.touched.name && formikDetails.errors.name ? (
              <div className="text-red-500 tabView:text-[1.5vw]  absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
                {formikDetails.errors.name}
              </div>
            ) : null}
          </div>
          <div className=" w-[23.438vw] pb-[3.333vh] mobile:mt-[2vh] mobile:pb-[4.5vw] tabView:mt-[3.344vh] tabView:pb-[3.6vw]">
            <span className="text-[0.938vw] font-normal tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]  mobile:text-[2.791vw]">
              {/* <span className="text-red-500 pr-1">*</span>Name */}
            </span>
            <Input
              inputStyle={`${contactUsInput} mobile:text-[2.591vw] mobile:pl-[7.442vw] tabView:text-[1.491vw] tabView:pl-[5.442vw] contactInput`}
              iconPath="/nameTextFieldIcon.svg"
              placeholder="Title"
              name="title"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.title}
            />
            {formikDetails.touched.title && formikDetails.errors.title ? (
              <div className="text-red-500 tabView:text-[1.5vw]  absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
                {formikDetails.errors.title}
              </div>
            ) : null}
          </div>
          <div className="w-[23.438vw] pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
            <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
              {/* <span className="text-red-500 pr-1">*</span>E-mail */}
            </span>
            <Input
              inputStyle={`${contactUsInput} tabView:text-[1.491vw] tabView:pl-[5.442vw]   mobile:text-[2.591vw] mobile:pl-[7.442vw] contactInput`}
              iconPath="/emailFieldicon.svg"
              placeholder="Email"
              name="email"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.email}
            />
            {formikDetails.touched.email && formikDetails.errors.email ? (
              <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
                {formikDetails.errors.email}
              </div>
            ) : null}
          </div>
          <div className="w-[23.438vw] pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
            <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
              {/* <span className="text-red-500 pr-1">*</span>Mobile */}
            </span>

            <PhoneInput
              type="text"
              // placeholder="Enter phone number"

              searchPlaceholder="Search..."
              searchNotFound="No Countries Found"
              specialLabel=""
              enableAreaCodeStretch
              country={"in"}
              name="phone"
              id="phone"
              value={formikDetails.values.phone}
              className="!w-[19.219vw]"
              onChange={(e, country) => handlePhoneChange(e, country)}
              //   defaultCountry={"IN"}
              // style={{
              //   border: `${
              //     error.phone || error.validPhone
              //       ? inputBorderErr
              //       : inputBorder
              //   }`,
              //   borderRadius: "5px",
              // }}
              enableSearch
              international
              autoComplete="off"
              onBlur={() => handleOnBlur("phone")}
              countryCodeEditable={false}
            />
            {(error.phone ||
              (formikDetails.errors.phone && formikDetails.touched.phone)) && (
                <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw mobile:text-[2.591vw] text-[0.75vw] absolute pt-1">
                  Mobile number is required
                </div>
              )}
            {error.validPhone && !error.phone && (
              <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw mobile:text-[2.591vw] text-[0.75vw] absolute pt-1">
                Invalid phone number
              </div>
            )}
          </div>
          <div className="w-[23.438vw] pb-[3.333vh] mobile:mt-[2vh] mobile:pb-[4.5vw] tabView:mt-[3.344vh] tabView:pb-[3.6vw]">
            <span className="text-[0.938vw] font-normal tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]  mobile:text-[2.791vw]">
              {/* <span className="text-red-500 pr-1">*</span>Name */}
            </span>
            <Input
              inputStyle={`${contactUsInput} mobile:text-[2.591vw] mobile:pl-[7.442vw] tabView:text-[1.491vw] tabView:pl-[5.442vw] contactInput`}
              iconPath="/nameTextFieldIcon.svg"
              placeholder="Company name"
              name="compName"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.compName}
            />
            {formikDetails.touched.compName && formikDetails.errors.compName ? (
              <div className="text-red-500 tabView:text-[1.5vw]  absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
                {formikDetails.errors.compName}
              </div>
            ) : null}
          </div>

          <div className="w-[23.438vw] pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
            <span className="text-[0.938vw] tabView:relative tabView:bottom-[0.781vh] tabView:text-[1.813vw] mobile:text-[2.791vw] font-normal">
              {/* <span className="text-red-500 pr-1">*</span> Your Message */}
            </span>
            <TextArea
              sectionStyle="mobile:h-[11.72vh] tabView:h-[6vh] "
              textAreaStyle="h-full tabView:text-[1.491vw]  text-[0.938vw] mobile:text-[2.391vw] resize-none "
              iconStyle=""
              placeholder="Enter your message"
              name="message"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.message}
            />
            {formikDetails.touched.message && formikDetails.errors.message ? (
              <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
                {formikDetails.errors.message}
              </div>
            ) : null}
          </div>
        </form>

      </section>
      <div className="flex justify-end pr-8">
        <button className="text-white text-[0.938vw] font-medium RequestButton py-[1.111vh]">
          Send Request
        </button>
      </div>
    </section>
  );
};

export default TransformWorkSpace;
