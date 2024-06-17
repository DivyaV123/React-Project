'use client'
import React ,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const HiringFromUsForm = () => {
    const [phoneValue, setPhoneValue] = useState();
    const [error, setError] = useState({ mobileNumber: false, validPhone: false });
    const [countryCode, setCountryCode] = useState("");
    const inputBorder = "1px solid #26428B80";
    const inputBorderErr = "1px solid #ea0322";
  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobileNumber: '',
      companyName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('FullName is required'),
      mobileNumber: Yup.string().required('Phone number is required'),
      companyName: Yup.string().required('CompanyName is required'),
      email: Yup.string().email('Invalid email address').required('Email id is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
    <div className="container mx-auto p-4 hiringFromUsComponent">
      <form onSubmit={formik.handleSubmit} className="custom-grid-form grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="fullName" className="block font-bold mb-2">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder='Enter your full name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm absolute">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="mobileNumber" className="block font-bold mb-2">Mobile Number</label>
         
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
                      className=" outline-none"
                      onChange={(e, country) => {
                        formik.setFieldValue("mobileNumber", e);
                        setPhoneValue(e);
                        setCountryCode(country.dialCode);
                      }}
                      
                    //   style={{
                    //     border: `${
                    //       error.mobileNumber || error.validPhone
                    //         ? inputBorderErr
                    //         : inputBorder
                    //     }`,
                    //     borderRadius: "5px",
                    //   }}
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
                      (formik.errors.mobileNumber &&
                        formik.touched.mobileNumber)) && (
                      <div className="text-red-500 text-sm absolute">
                        Phone number is required
                      </div>
                    )}
                    {error.validPhone && !error.mobileNumber && (
                      <div className="text-red-500 text-sm absolute">
                        Invalid phone number
                      </div>
                    )}
        </div>

        <div className="mb-2">
          <label htmlFor="companyName" className="block font-bold mb-2">Company Name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder='Enter your company name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <div className="text-red-500 text-sm absolute">{formik.errors.companyName}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block font-bold mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            placeholder='Enter your email Id'
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm absolute">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-2 ">
          <label htmlFor="message" className="block font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Type here...'
            value={formik.values.message}
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm absolute">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="mb-2 btnComponent" >
          <button type="submit" className=" text-white py-2 px-4 rounded hover:bg-orange-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HiringFromUsForm;
