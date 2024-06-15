"use client";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import Button from "@/components/commonComponents/button/Button";
import Input from "@/components/commonComponents/input/Input";
import TextArea from "@/components/commonComponents/textArea/TextArea";
import WebLayout from "@/components/commonComponents/webLayout/WebLayout";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./contactUsPage.scss";
import { usePostContactMutation } from "../../redux/queries/contactUSApi";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

function ContactUsPage() {
  const [error, setError] = useState({ phone: false, validPhone: false });
  const [phoneValue, setPhoneValue] = useState();
  const [countryCode, setCountryCode] = useState("");
  const { toast } = useToast();
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
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  const [postContact] = usePostContactMutation();
  const onSubmit = async (values, { resetForm }) => {
    try {
      const payload = {
        userName: values.name,
        phoneNumber: "+" + values.phone,
        email: values.email,
        message: values.message,
      };

      const response = await postContact(payload);
      if (response.data.statusCode === 201) {
        formikDetails.setFieldValue("name", "");
        formikDetails.setFieldValue("email", "");
        formikDetails.setFieldValue("message", "");
        formikDetails.setFieldValue("phone", countryCode);
        toast({
          variant: "customizeGradient",
          title: "Thank you for the Feedback",
          // description: "Friday, February 10, 2023 at 5:57 PM",
        });

        //   This is required as we can clear phoneInput Value
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (err) {
      console.error(err, "Error from contact api");
    }
  };
  const contactInfo = [
    {
      country: "India",
      call: "+91 XXXXX XXXXX",
      mail: "Contact@qspider.com",
      address:
        "Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      country: "Canada",
      call: "+91 XXXXX XXXXX",
      mail: "Contact@qspider.com",
      address:
        "Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      country: "United Kingdom",
      call: "+91 XXXXX XXXXX",
      mail: "Contact@qspider.com",
      address:
        "Lorem ipsum dolor sit amet consectetur. Amet at at pellentesque urna. Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  const formikDetails = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const contactUsInput = "w-full  h-full text-[0.938vw]";
  const contentStyle = "flex gap-2 pb-[0.625vw] item-center";
  const inputBorder = "1px solid #26428B80";
  const inputBorderErr = "1px solid #ea0322";
  const handleOnBlur = (id) => {
    if (!phoneValue) {
      setError({ ...error, [id]: true });
    } else if (!isValidPhoneNumber("+" + phoneValue?.toString())) {
      setError({ ...error, [id]: false, validPhone: true });
    } else {
      setError({ ...error, [id]: false, validPhone: false });
    }
  };
  return (
    <div className="h-[178.194vh] contactUsComponent">
      <div className="relative bg-[url('/contactUspageBg.png')] bg-no-repeat bg-left bg-contain bg-cover h-[69.167vh]">
        <header className="flex flex-col justify-center pb-[11.111vh]">
          <h1 className="flex justify-center gap-2 pt-[14.444vh]  pb-[0.625vw]">
            <span className="text-[3.75vw] font-extrabold text-white tracking-tight justify-around">
              We are eager to{" "}
            </span>
            <span className="tracking-tight gradient-text text-[3rem] font-extrabold">
              hear from you!
            </span>
          </h1>
          <span className="text-white text-[2rem] font-medium flex justify-center  justify-center">
            Feel free to get in touch with team if you have any questions
          </span>
        </header>
        <article className="absulate top-[47.333vh] left-[16.25vw] bg-white rounded border border-gray-300 absolute">
          <section className="flex rounded-xl  justify-between w-[67.5vw]">
            <aside>
              <header>
                <h1 className="font-semibold py-[3.333vh] text-[1.875vw] pl-[3.333vh]">
                  Fill out the form to hear from our Team!
                </h1>
              </header>
              <article className="px-[4.375vw]">
                <form onSubmit={formikDetails.handleSubmit}>
                  <div className="pb-[2.5vw]">
                    <span className="text-[0.938vw] font-normal">Name</span>
                    <Input
                      inputStyle={`${contactUsInput}`}
                      iconPath="/nameTextFieldIcon.svg"
                      placeholder="Enter your name"
                      name="name"
                      onChange={formikDetails.handleChange}
                      onBlur={formikDetails.handleBlur}
                      value={formikDetails.values.name}
                    />
                    {formikDetails.touched.name && formikDetails.errors.name ? (
                      <div className="text-red-500 text-[0.75vw]">
                        {formikDetails.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="pb-[2.5vw]">
                    <span className="text-[0.938vw] font-normal">Mobile</span>
                    {/* <Input
                                                inputStyle={`${contactUsInput}`}
                                                iconPath='/mobilefieldicon.svg'
                                                type='text'
                                                 name="phone"
                                                placeholder='Enter your phone number'
                                                onChange={formikDetails.handleChange}
                                                onBlur={formikDetails.handleBlur}
                                                value={formikDetails.values.phone}
                                            /> */}
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
                      className=" outline-none"
                      onChange={(e, country) => {
                        formikDetails.setFieldValue("phone", e);
                        setPhoneValue(e);
                        setCountryCode(country.dialCode);
                      }}
                      //   defaultCountry={"IN"}
                      style={{
                        border: `${
                          error.phone || error.validPhone
                            ? inputBorderErr
                            : inputBorder
                        }`,
                        borderRadius: "5px",
                      }}
                      enableSearch
                      international
                      inputProps={{
                        // className: cx(`!text-xs impFont_14px boxedInput `),
                        style: {
                          // padding: "9.5px 14px",
                          height: "0.43em !important",
                        },
                      }}
                      autoComplete="off"
                      onBlur={() => handleOnBlur("phone")}
                      countryCodeEditable={false}
                    />
                    {(error.phone ||
                      (formikDetails.errors.phone &&
                        formikDetails.touched.phone)) && (
                      <div className="text-red-500 text-[0.75vw] absolute">
                        Phone number is required
                      </div>
                    )}
                    {error.validPhone && !error.phone && (
                      <div className="text-red-500 text-[0.75vw] absolute">
                        Invalid phone number
                      </div>
                    )}
                  </div>
                  <div className="pb-[2.5vw]">
                    <span className="text-[0.938vw] font-normal">E-mail</span>
                    <Input
                      inputStyle={`${contactUsInput}`}
                      iconPath="/emailFieldicon.svg"
                      placeholder="Enter your email"
                      name="email"
                      onChange={formikDetails.handleChange}
                      onBlur={formikDetails.handleBlur}
                      value={formikDetails.values.email}
                    />
                    {formikDetails.touched.email &&
                    formikDetails.errors.email ? (
                      <div className="text-red-500 text-[0.75vw]">
                        {formikDetails.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="pb-[2.5vw]">
                    <span className="text-[0.938vw] font-normal">
                      Your Message
                    </span>
                    <TextArea
                      textAreaStyle="h-full text-[0.938vw] resize-none"
                      iconStyle=""
                      placeholder="Type here..."
                      name="message"
                      onChange={formikDetails.handleChange}
                      onBlur={formikDetails.handleBlur}
                      value={formikDetails.values.message}
                    />
                    {formikDetails.touched.message &&
                    formikDetails.errors.message ? (
                      <div className="text-red-500 text-[0.75vw]">
                        {formikDetails.errors.message}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex justify-center  pb-[6.444vh]">
                    <Button
                      type="submit"
                      className="bg-gradient text-white rounded text-[1.25vw] py-[1.667vh] px-[1.875vw]"
                      title="Submit"
                    />
                  </div>
                </form>
              </article>
            </aside>
            <aside className="bg-gradient px-[1.25vw] h-auto w-[25.859vw] rounded-r">
              <header>
                <h1 className="text-[1.875vw] text-white font-semibold pt-[2.222vh] pb-[2.5vw]">
                  Contact Info
                  <div className="p-0">
                    <Svg
                      width={svgicons.contactUsHilight[0]}
                      height={svgicons.contactUsHilight[1]}
                      viewBox={svgicons.contactUsHilight[2]}
                      icon={svgicons.contactUsHilight[3]}
                      color={svgicons.contactUsHilight[4]}
                    />
                  </div>
                </h1>
                {contactInfo.map((data) => (
                  <article
                    className={`${
                      data.country === "United Kingdom"
                        ? "pb-[7px]"
                        : "pb-[5px]"
                    }`}
                  >
                    <h1 className="text-white pb-[0.625vw] text-[1.563vw]  font-bold">
                      {data.country}
                    </h1>
                    <div className={`${contentStyle}`}>
                      <Svg
                        className=""
                        width={svgicons.contactUsCallSvg[0]}
                        height={svgicons.contactUsCallSvg[1]}
                        viewBox={svgicons.contactUsCallSvg[2]}
                        icon={svgicons.contactUsCallSvg[3]}
                        color={svgicons.contactUsCallSvg[4]}
                      />
                      <div className="text-white  text-[0.938vw]">
                        {data.call}
                      </div>
                    </div>
                    <div className={`${contentStyle}`}>
                      <Svg
                        className=""
                        width={svgicons.contactUsMail[0]}
                        height={svgicons.contactUsMail[1]}
                        viewBox={svgicons.contactUsMail[2]}
                        icon={svgicons.contactUsMail[3]}
                        color={svgicons.contactUsMail[4]}
                      />
                      <div className="text-white  text-[0.938vw]">
                        {data.mail}
                      </div>
                    </div>
                    <div className={`${contentStyle}`}>
                      <Svg
                        className="basis-[15%]"
                        width={svgicons.contactUsAdressSvg[0]}
                        height={svgicons.contactUsAdressSvg[1]}
                        viewBox={svgicons.contactUsAdressSvg[2]}
                        icon={svgicons.contactUsAdressSvg[3]}
                        color={svgicons.contactUsAdressSvg[4]}
                      />
                      <div className="text-white  text-[0.938vw] px-[0.625vw]">
                        {data.address}
                      </div>
                    </div>
                  </article>
                ))}
              </header>
            </aside>
          </section>
        </article>
      </div>
      <Toaster />
    </div>
  );
}

export default ContactUsPage;
