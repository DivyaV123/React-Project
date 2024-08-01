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
import "./upComingBranches.scss";
const SendRequestForm = () => {
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
  });
  const contactInfo = [
    {
      country: "India",
      call: "+918951965854, +919686111919, +919108993972",
      mail: `enquiry@${domainVariable}.com`,
      address:
        " No. 01, 3rd Cross Basappa Layout, Gavipuram Extn, Kempegowda Nagar, Bengaluru, Karnataka - 560019",
    },
    {
      country: "United States",
      call: "+14154293957",
      mail: `enquiry@${domainVariable}.com`,
      address: "99 South Almaden Blvd, Suite 600, San Jose, CA 95113, USA",
    },
    {
      country: "United Kingdom",
      call: "+443332423091",
      mail: `enquiry@${domainVariable}.com`,
      address: "99 South Almaden Blvd, Suite 600, San Jose, CA 95113, UK",
    },
  ];
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
    } else {
      setPhoneValue(value);
      formikDetails.setFieldValue("phone", value);
    }
    setCountryCode(country?.dialCode);
  };
  return (
    <section className="w-[21.719vw] sendRequestComponent bg-white rounded-xl px-[1.25vw] py-[3.333vh] mobile:hidden">
      <p className="font-semibold text-[#454545] text-[0.938vw] pb-[2.778vh]">
        Didn’t find the course you are looking for?
      </p>
      <form onSubmit={formikDetails.handleSubmit}>
        <div className="pb-[3.333vh] mobile:mt-[2vh] mobile:pb-[4.5vw] tabView:mt-[3.344vh] tabView:pb-[3.6vw]">
          <span className="text-[0.938vw] font-normal tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]  mobile:text-[2.791vw]">
            {/* <span className="text-red-500 pr-1">*</span>Name */}
          </span>
          <Input
            inputStyle={`${contactUsInput} mobile:text-[2.591vw] mobile:pl-[7.442vw] tabView:text-[1.491vw] tabView:pl-[5.442vw] contactInput`}
            iconPath="/nameTextFieldIcon.svg"
            placeholder="Enter your name"
            name="name"
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            value={formikDetails.values.name}
            autoFocus={true}
          />
          {formikDetails.touched.name && formikDetails.errors.name ? (
            <div className="text-red-500 tabView:text-[1.5vw]  absolute mobile:text-[2.591vw] text-[0.75vw] pt-1">
              {formikDetails.errors.name}
            </div>
          ) : null}
        </div>
        <div className="pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
          <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
            {/* <span className="text-red-500 pr-1">*</span>Mobile */}
          </span>

          <PhoneInput
            type="text"
            // placeholder="Enter phone number"

            searchPlaceholder="Search..."
            searchNotFound="No Countries Found"
            specialLabel=""
            autoFormat={false}
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
        <div className="pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
          <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
            {/* <span className="text-red-500 pr-1">*</span>E-mail */}
          </span>
          <Input
            inputStyle={`${contactUsInput} tabView:text-[1.491vw] tabView:pl-[5.442vw]   mobile:text-[2.591vw] mobile:pl-[7.442vw] contactInput`}
            iconPath="/emailFieldicon.svg"
            placeholder="Enter your email"
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
        <div className="pb-[3.333vh] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
          <span className="text-[0.938vw] tabView:relative tabView:bottom-[0.781vh] tabView:text-[1.813vw] mobile:text-[2.791vw] font-normal">
            {/* <span className="text-red-500 pr-1">*</span> Your Message */}
          </span>
          <TextArea
            sectionStyle="mobile:h-[11.72vh] tabView:h-[6vh] "
            textAreaStyle="h-full tabView:text-[1.491vw]  text-[0.938vw] mobile:text-[2.391vw] resize-none "
            iconStyle=""
            placeholder="Type here..."
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
        <button type="submit" className="text-white text-[0.938vw] font-medium RequestButton py-[1.111vh]">
          Send Request
        </button>
      </form>
      <p className="text-[#707070] text-[0.781vw] pt-[2.778vh]">By providing your details you agree to our terms and conditions.</p>
    </section>
  );
};

export default SendRequestForm;
