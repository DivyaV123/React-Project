"use client";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import Button from "@/components/commonComponents/button/Button";
import Input from "@/components/commonComponents/input/Input";
import TextArea from "@/components/commonComponents/textArea/TextArea";
import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "./contactUsPage.scss";

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useEnrollMutation } from "@/redux/queries/enrollNowApi";
import Image from "next/image";

function ContactUsPage() {
  const [error, setError] = useState({ phone: false, validPhone: false });
  const [phoneValue, setPhoneValue] = useState();
  const [countryCode, setCountryCode] = useState("");
  const { toast } = useToast();
  const [isMobileView, setIsMobileView] = useState(false);
  const { domainVariable } = useContext(GlobalContext);
  const [enrollNow] = useEnrollMutation();
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
    message: Yup.string()
    .matches(/^\S.*$/, "Message cannot start with a space")
    .required("Message is required"),
  });
  
  const onSubmit = async (values, { resetForm }) => {
    try {
      const fullMobileNumber = values.phone;
      const numberWithoutCountryCode = fullMobileNumber.replace(
        countryCode,
        ""
      );
      const payload = {
        userName: values.name,
        mobileNumber: {
          code: `+${countryCode}`,
          number: numberWithoutCountryCode,
        },
        email: values.email,
        message: values.message,
      };

      const response = await enrollNow(payload);
     
      if (response) {
        formikDetails.setFieldValue("name", "");
        formikDetails.setFieldValue("email", "");
        formikDetails.setFieldValue("message", "");
        formikDetails.setFieldValue("phone", countryCode);
        toast({
          variant: "success",
          title: "Thank you, We will get back to you soon",
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
    onSubmit,
    validationSchema,
  });
  const contactUsInput = "w-full  h-full text-[0.938vw]";
  const contentStyle = "flex gap-2 pb-[0.625vw] item-center";
  const inputBorder = "1px solid #26428B80";
  const inputBorderErr = "1px solid #ea0322";
  const handleOnBlur = (id) => {
    formikDetails.setFieldTouched(id, true);
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
      formikDetails.setFieldValue('phone', country.dialCode);
      setError({ ...error, validPhone: false });
    } else {
      setPhoneValue(value);
      formikDetails.setFieldValue('phone', value);
    }
    setCountryCode(country?.dialCode);
  };
  return (
    <div className="h-[178.194vh] tabView:h-[80vh] contactUsComponent mobile:h-[auto] ">
      <div className="relative bg-[url('/contactUspageBg.png')] bg-no-repeat bg-left bg-contain bg-cover h-[69.167vh] mobile:h-[53.548vh]">
        <header className="flex flex-col justify-center pb-[11.111vh]">
          <h1 className="flex justify-center gap-2 pt-[14.444vh]  pb-[0.625vw] mobile:relative mobile:top-[3.756vh] mobile:pt-0">
            <span className="text-[3.75vw] font-extrabold text-white tracking-tight justify-around mobile:text-[3.256vw] ">
              We are eager to{" "}
            </span>
            <span className="tracking-tight tabView:text-[4.301vw] text-[3.75vw] gradient-text font-extrabold mobile:text-[3.256vw] ">
              hear from you!
            </span>
          </h1>
          <span className="text-white mobile:hidden tabView:hidden text-[2rem] font-medium flex   justify-center mobile:text-[2.558vw] mobile:w-[97.721vw] mobile:h-[2.113vh] mobile:relative mobile:top-[4.93vh] mobile:flex mobile:justify-center mobile:items-center">
            Feel free to get in touch with team if you have any questions
          </span>
          <span className="text-white  tabView:text-[3.226vw] hidden tabView:flex-col tabView:justify-center tabView:items-center tabView:flex text-[2rem] font-medium flex justify-center  justify-center mobile:text-[2.558vw] mobile:w-[97.721vw] mobile:h-[2.113vh] mobile:relative mobile:top-[4.93vh] mobile:flex mobile:justify-center mobile:items-center">
            Feel free to get in touch with team if you have <br />{" "}
            <p>any questions</p>
          </span>
        </header>
        <article className=" mobile:top-[14.15vh] tabView:top-[19.531vh] top-[47.333vh] mobile:left-[8.581vw] tabView:left-[8.065vw] left-[16.25vw] bg-white rounded border border-gray-300 absolute ">
          <section className="flex rounded-xl  justify-between w-[67.5vw] mobile:w-[80.884vw] tabView:w-[83.871vw]">
            <aside className=" mobile:w-[100vw] tabView:w-[42.608vw]  ">
              <header>
                <h1 className="font-semibold py-[3.333vh] tabView:hidden mobile:hidden text-[1.875vw] pl-[3.333vh]">
                  Fill out the form to hear from our Team!
                </h1>
              </header>
              <article className="px-[4.375vw] tabView:px-[2.688vw]">
                <form onSubmit={formikDetails.handleSubmit}>
                  <div className="pb-[2.5vw] mobile:mt-[2vh] mobile:pb-[4.5vw] tabView:mt-[3.344vh] tabView:pb-[3.6vw]">
                    <span className="text-[0.938vw] font-normal tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]  mobile:text-[2.791vw]">
                      <span className="text-red-500 pr-1">*</span>Name
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
                      <div className="text-red-500 tabView:text-[1.5vw]  absolute mobile:text-[2.591vw] text-[0.75vw]">
                        {formikDetails.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="pb-[2.5vw] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
                    <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
                      <span className="text-red-500 pr-1">*</span>Mobile
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
                      className=""
                      onChange={(e, country) =>handlePhoneChange(e,country)}
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
                      (formikDetails.errors.phone &&
                        formikDetails.touched.phone)) && (
                      <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw mobile:text-[2.591vw] text-[0.75vw] absolute">
                        Mobile number is required
                      </div>
                    )}
                    {error.validPhone && !error.phone && (
                      <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw mobile:text-[2.591vw] text-[0.75vw] absolute">
                        Invalid phone number
                      </div>
                    )}
                  </div>
                  <div className="pb-[2.5vw] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
                    <span className="text-[0.938vw] tabView:text-[1.813vw] tabView:relative tabView:bottom-[0.781vh]   mobile:text-[2.791vw] font-normal">
                      <span className="text-red-500 pr-1">*</span>E-mail
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
                    {formikDetails.touched.email &&
                    formikDetails.errors.email ? (
                      <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw absolute mobile:text-[2.591vw] text-[0.75vw]">
                        {formikDetails.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="pb-[2.5vw] mobile:pb-[4.5vw] tabView:pb-[3.6vw]">
                    <span className="text-[0.938vw] tabView:relative tabView:bottom-[0.781vh] tabView:text-[1.813vw] mobile:text-[2.791vw] font-normal">
                      <span className="text-red-500 pr-1">*</span> Your Message
                    </span>
                    <TextArea
                      sectionStyle="mobile:h-[11.72vh] tabView:h-[6vh] "
                      textAreaStyle="h-full tabView:text-[1.491vw]  text-[0.938vw] mobile:text-[2.391vw] resize-none "
                      iconStyle=""
                      placeholder="Type here..."
                      name="message"
                      iconPath="/emailFieldicon.svg"

                      onChange={formikDetails.handleChange}
                      onBlur={formikDetails.handleBlur}
                      value={formikDetails.values.message}
                    />
                    {formikDetails.touched.message &&
                    formikDetails.errors.message ? (
                      <div className="text-red-500 tabView:text-[1.5vw] tabView:my-[0.538vw absolute mobile:text-[2.591vw] text-[0.75vw]">
                        {formikDetails.errors.message}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex justify-center  pb-[6.444vh] mobile:mt-[1.72vh] mobile:pb-[4vh] mobile:justify-end tabView:mt-[1.72vh] tabView:pb-[4vh] tabView:justify-end">
                    <Button
                      type="submit"
                      className="bg-gradient text-white rounded text-[1.25vw] py-[1.667vh] px-[1.875vw] mobile:w-[22.907vw] mobile:h-[5.161vh] mobile:text-[3.721vw] mobile:flex mobile:justify-center mobile:items-center mobile:font-medium  tabView:w-[16.129vw] tabView:h-[4.688vh] tabView:text-[2.151vw] tabView:flex tabView:justify-center tabView:items-center tabView:font-medium"
                      title="Submit"
                    />
                  </div>
                </form>
              </article>
            </aside>

            <aside className="bg-gradient px-[1.25vw] h-auto w-[25.859vw] rounded-r mobile:hidden tabView:w-[41.263vw]   ">
              <header className=" tabView:mt-[1.563vh] ">
                <h1 className="text-[1.875vw] tabView:hidden text-white font-semibold pt-[2.222vh] pb-[2.5vw]">
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
                        ? "pb-[7px] tabView:pl-[2.151vw]"
                        : "pb-[5px] tabView:pl-[2.151vw]"
                    }`}
                  >
                    <h1 className="text-white pb-[0.625vw] text-[1.563vw] tabView:text-[2.688vw]  font-bold">
                      {data.country}
                    </h1>
                    <div className={`${contentStyle} gap-[0.5vw]`}>
                      <Svg
                        className=""
                        width={svgicons.contactUsCallSvg[0]}
                        height={svgicons.contactUsCallSvg[1]}
                        viewBox={svgicons.contactUsCallSvg[2]}
                        icon={svgicons.contactUsCallSvg[3]}
                        color={svgicons.contactUsCallSvg[4]}
                      />
                      <div className="text-white tabView:text-[1.613vw] text-[0.938vw]">
                        {data.call}
                      </div>
                    </div>
                    <div className={`${contentStyle} gap-[0.8vw] tabView:my-1`}>
                      <Svg
                        className=""
                        width={svgicons.contactUsMail[0]}
                        height={17}
                        viewBox={svgicons.contactUsMail[2]}
                        icon={svgicons.contactUsMail[3]}
                        color={svgicons.contactUsMail[4]}
                      />
                      <div className="text-white leading-[2.6vh] tabView:text-[1.613vw]  text-[0.938vw]">
                        {data.mail}
                      </div>
                    </div>
                    <div className={`${contentStyle}  gap-[0.8vw]`}>
                      <Svg
                        className="basis-[6%]"
                        width={svgicons.contactUsAdressSvg[0]}
                        height={svgicons.contactUsAdressSvg[1]}
                        viewBox={svgicons.contactUsAdressSvg[2]}
                        icon={svgicons.contactUsAdressSvg[3]}
                        color={svgicons.contactUsAdressSvg[4]}
                      />
                      <div className="text-white tabView:text-[1.613vw] tabView:mb-[1.563vh] w-fit text-[0.938vw] pr-[0.625vw]">
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

      <div className="hidden mobile:block mobile:relative top-[27.57vh] mobile:pb-[30vh]">
        {contactInfo.map((info, index) => (
          <section key={index} className={`mb-8`}>
            <div className="locationCard mobile:w-[81vw] mobile:m-auto mobile:relative">
              <div className="cardBody rounded-xl mobile:pl-[5.581vw] mobile:pt-[1.86vh] px-[1.25vw] h-auto w-[25.859vw] mobile:w-[81vw]">
                <header className="text-[4.651vw] text-white pb-[2vh] font-bold">
                  {info.country}
                </header>
                <ul>
                  <li className="flex mobile:gap-[2.86vw] mobile:pb-[1vh]">
                    <Svg
                      className=""
                      width={svgicons.contactUsCallSvg[0]}
                      height={svgicons.contactUsCallSvg[1]}
                      viewBox={svgicons.contactUsCallSvg[2]}
                      icon={svgicons.contactUsCallSvg[3]}
                      color={svgicons.contactUsCallSvg[4]}
                    />
                    <div className="text-white text-[3.591vw]">{info.call}</div>
                  </li>
                  <li className="flex mobile:gap-[2.86vw] mobile:pb-[1vh]">
                    <Svg
                      className=""
                      width={svgicons.contactUsMail[0]}
                      height={16}
                      viewBox={svgicons.contactUsMail[2]}
                      icon={svgicons.contactUsMail[3]}
                      color={svgicons.contactUsMail[4]}
                    />
                    <div className="text-white text-[3.591vw]">{info.mail}</div>
                  </li>
                  <li className="flex mobile:gap-[2.86vw] mobile:pb-[1vh]">
                    <Svg
                      className="basis-[6%]"
                      width={svgicons.contactUsAdressSvg[0]}
                      height={svgicons.contactUsAdressSvg[1]}
                      viewBox={svgicons.contactUsAdressSvg[2]}
                      icon={svgicons.contactUsAdressSvg[3]}
                      color={svgicons.contactUsAdressSvg[4]}
                    />
                    <div className="text-white w-fit  text-[3.591vw]">
                      {info.address}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Toaster />
    </div>
  );
}

export default ContactUsPage;
