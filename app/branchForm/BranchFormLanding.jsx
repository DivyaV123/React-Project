'use client'
import Input from '@/components/commonComponents/input/Input'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import Button from "@/components/commonComponents/button/Button";
import React, { useState } from 'react'
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import TextArea from '@/components/commonComponents/textArea/TextArea';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useBranchAdderMutation } from '@/redux/queries/branchAdderApi';

function BranchFormLanding() {
    const [addBranch, { data: branchAdd, error: courseError, isLoading: courseAdderLoad }] = useBranchAdderMutation();
    const [faqs, setFaqs] = useState([]);
    const [error, setError] = useState({ phone: false, validPhone: false });
    const [phoneValue, setPhoneValue] = useState();
    const [countryCode, setCountryCode] = useState("");
    const [faqEditIndex, setFaqEditIndex] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [branchImage, setBranchImage] = useState({
        mainImage: null,
        imageGalary: []
    })
    const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const validationSchema = Yup.object({
        BranchName: Yup.string().required("BranchName is required"),
        phone: Yup.array()
            .of(Yup.string().required("Mobile number is required"))
            .min(1, "At least one phone number is required"),
        gmail: Yup.array()
            .of(Yup.string().email("Invalid email").required("Gmail is required"))
            .min(1, "At least one Gmail is required"),
        country: Yup.string().required("country is required"),
        state: Yup.string().required("state is required"),
        city: Yup.string().required("city is required"),
        street: Yup.string().required("street is required"),
        pincode: Yup.string().required("pincode is required"),
        location: Yup.string().required("location is required"),
        faqs: Yup.array()
            .min(1, "At least one FAQ is required")
            .of(
                Yup.object().shape({
                    question: Yup.string().required("Question is required"),
                    answer: Yup.string().required("Answer is required"),
                })
            ),
        organisation: Yup.string().required("Organisation is required"),
    });
    const initialValues = {
        BranchName: "",
        phone: [],
        gmail: [],
        country: "",
        state: "",
        city: "",
        street: "",
        pincode: "",
        location: "",
        faqs: [],
        question: "",
        answer: "",
        organisation: [],
    };
    const commonFieldClass = "pb-1 text-semibold"


    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            let phoneNumbers = []
            values.phone.map((num) => {
                phoneNumbers.push("+" + num)
            })
            const branch = {
                displayName: values.BranchName,
                branchType: values.organisation,
                emails: values.gmail,
                branchAddress: {
                    country: values.country,
                    state: values.state,
                    city: values.city,
                    street: values.street,
                    pincode: values.pincode,
                    location: values.location
                },
                contacts: phoneNumbers,
                faqs: values.faqs.map((faq) => ({
                    question: faq.question,
                    answer: faq.answer,
                })),
            };
            const payloadString = JSON.stringify(branch);
            const payload = {
                branch: payloadString,
                branchImage: branchImage.mainImage,
                branchGallery: branchImage.imageGalary
            }
            try {
                const response = await addBranch({ bodyData: payload }).unwrap();
            } catch (err) {
                console.error(err, "Error from loginAPI");
            }
        },
    });

    const addFAQ = (e) => {
        e.preventDefault();
        // Manually validate question and answer fields

        const errors = {};
        if (
            !formikDetails.values.question ||
            formikDetails.values.question === ""
        ) {
            errors.question = "Question is required";
        }
        if (!formikDetails.values.answer) {
            errors.answer = "Answer is required";
        }

        // Set errors and return if there are any
        if (Object.keys(errors).length > 0) {
            formikDetails.setErrors({
                ...formikDetails.errors,
                ...errors,
            });
            return;
        }

        const newFaqs = [...faqs];
        if (faqEditIndex !== null) {
            newFaqs[faqEditIndex] = {
                question: formikDetails.values.question,
                answer: formikDetails.values.answer,
            };
            setFaqEditIndex(null);
        } else {
            newFaqs.push({
                question: formikDetails.values.question,
                answer: formikDetails.values.answer,
            });
        }

        setFaqs(newFaqs);
        formikDetails.setFieldValue("faqs", newFaqs);
        formikDetails.setFieldValue("question", "");
        formikDetails.setFieldValue("answer", "");
        formikDetails.setFieldTouched("question", true);
        formikDetails.setFieldTouched("answer", true);
        formikDetails.setFieldTouched("faqs", false);
        formikDetails.setErrors({
            ...formikDetails.errors,
            question: "",
            answer: "",
        });
    };

    const editFaq = (index) => {
        setFaqEditIndex(index);
        formikDetails.setFieldValue("question", faqs[index].question);
        formikDetails.setFieldValue("answer", faqs[index].answer);
    };

    const deleteFaq = (index) => {
        const newFaqs = [...faqs];
        newFaqs.splice(index, 1);
        setFaqs(newFaqs);
        formikDetails.setFieldValue("faqs", newFaqs);
        formikDetails.setFieldTouched("faqs", false);
        setFaqEditIndex(null);
    };
    const handleOnBlur = (id) => {
        if (!phoneValue) {
            setError({ ...error, [id]: true });
        } else if (!isValidPhoneNumber("+" + phoneValue?.toString())) {
            setError({ ...error, [id]: false, validPhone: true });
        } else {
            setError({ ...error, [id]: false, validPhone: false });
        }
    };

    const handleFileSelected = (e, type) => {
        const files = Array.from(e.target.files);
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (files.length > 0) {
            if (type === 'imageGalary') {
                const validFiles = files.filter(file => validImageTypes.includes(file.type));
                if (validFiles.length !== files.length) {
                    alert("Some files have an invalid file type. Only image files are accepted.");
                }
                setBranchImage(prevState => ({
                    ...prevState,
                    [type]: [...prevState[type], ...validFiles]
                }));
            } else {
                const file = files[0];
                if (validImageTypes.includes(file.type)) {
                    setBranchImage(prevState => ({
                        ...prevState,
                        [type]: file
                    }));
                } else {
                    alert("Invalid file type. Please select an image file.");
                }
            }
        }
    };

    return (
        <MaxWebWidth sectionStyling='mb-8 mt-8' articalStyling='p-12 border-2 border-gray-300 rounded-lg'>
            <form onSubmit={formikDetails.handleSubmit}>
                <div className="w-[33vw] mb-8">
                    <p className={commonFieldClass}>Branch Name</p>
                    <Input
                        name='BranchName'
                        placeholder='enter the Branch Name'
                        value={formikDetails.values.BranchName}
                        onChange={formikDetails.handleChange}

                    />
                    {formikDetails.touched.BranchName &&
                        formikDetails.errors.BranchName ? (
                        <div className="text-red-500">
                            {formikDetails.errors.BranchName}
                        </div>
                    ) : null}
                </div>
                <div className="pb-[2.5vw] mobile:pb-[4.5vw] flex  flex-col gap-5 tabView:pb-[3.6vw]">
                    <div>
                        <p className={commonFieldClass}>Phone</p>
                        {formikDetails.values.phone.map((phone, index) => (
                            <div key={index} className="flex  pb-3 items-center gap-2">
                                <PhoneInput
                                    inputStyle={{ width: "30vw", height: '8vh' }}
                                    type="text"
                                    searchPlaceholder="Search..."
                                    searchNotFound="No Countries Found"
                                    specialLabel=""
                                    autoFormat={false}
                                    enableAreaCodeStretch
                                    country={"in"}
                                    name={`phone[${index}]`}
                                    id={`phone-${index}`}
                                    value={phone}
                                    onChange={(e, country) => {
                                        const updatedPhones = [...formikDetails.values.phone];
                                        updatedPhones[index] = e;
                                        formikDetails.setFieldValue("phone", updatedPhones);
                                        setPhoneValue(e);
                                        setCountryCode(country.dialCode);
                                    }}
                                    enableSearch
                                    international
                                    autoComplete="off"
                                    onBlur={() => handleOnBlur(`phone[${index}]`)}
                                    countryCodeEditable={false}
                                />
                                <Button
                                    title='Remove'
                                    type="button"
                                    className='p-2 text-white bg-red-500 rounded text-white'
                                    onClick={() => {
                                        const updatedPhones = [...formikDetails.values.phone];
                                        updatedPhones.splice(index, 1);
                                        formikDetails.setFieldValue("phone", updatedPhones);
                                    }}
                                />
                            </div>
                        ))}
                        <Button
                            title='Add Phone'
                            type="button"
                            className='p-2 rounded bg-green-500 m-3'
                            onClick={() =>
                                formikDetails.setFieldValue("phone", [
                                    ...formikDetails.values.phone,
                                    ""
                                ])
                            }
                        />

                        {formikDetails.errors.phone &&
                            formikDetails.touched.phone && (
                                <div className="text-red-500">
                                    {formikDetails.errors.phone}
                                </div>
                            )}
                    </div>
                    <div className=''>
                        <p>Gmail</p>
                        {formikDetails.values.gmail.map((gmail, index) => (
                            <div key={index} className="flex justify-between pb-3 items-center gap-2">
                                <Input
                                    inputStyle="!w-[30vw] h-[8vh]"
                                    name={`gmail[${index}]`}
                                    value={gmail}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                    placeholder="Please add gmail"
                                />
                                <Button
                                    title='Remove'
                                    type="button"
                                    className='p-2 text-white bg-red-500 rounded text-white'
                                    onClick={() => {
                                        const updatedGmails = [...formikDetails.values.gmail];
                                        updatedGmails.splice(index, 1);
                                        formikDetails.setFieldValue("gmail", updatedGmails);

                                    }}
                                />
                            </div>
                        ))}
                        <Button
                            title='Add Gmail'
                            type="button"
                            className='p-2 rounded bg-green-500 m-3'
                            onClick={() =>
                                formikDetails.setFieldValue("gmail", [
                                    ...formikDetails.values.gmail,
                                    ""
                                ])
                            }
                        />
                        {formikDetails.touched.gmail &&
                            formikDetails.errors.gmail ? (
                            <div className="text-red-500">
                                {formikDetails.errors.gmail}
                            </div>
                        ) : null}
                    </div>
                </div>

                <p className='p-2 text-[1.8rem]'>Branch Adress</p>
                <div className="w-[100%] p-5 border border-gray-300 rounded">
                    <div className='flex gap-3 flex justify-around'>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">country</p>
                            <Input
                                name='country'
                                value={formikDetails.values.country}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}
                            />
                            {formikDetails.touched.country &&
                                formikDetails.errors.country ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.country}
                                </div>
                            ) : null}
                        </div>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">State</p>
                            <Input
                                name='state'
                                value={formikDetails.values.state}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}
                            />
                            {formikDetails.touched.state &&
                                formikDetails.errors.state ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.state}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className='flex gap-3 flex justify-around'>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">City</p>
                            <Input
                                name='city'
                                value={formikDetails.values.city}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}

                            />
                            {formikDetails.touched.city &&
                                formikDetails.errors.city ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.city}
                                </div>
                            ) : null}
                        </div>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">Street</p>
                            <Input
                                name='street'
                                value={formikDetails.values.street}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}
                            />
                            {formikDetails.touched.street &&
                                formikDetails.errors.street ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.street}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className='flex gap-3 flex justify-around'>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">Pincode</p>
                            <Input
                                name='pincode'
                                value={formikDetails.values.pincode}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}
                            />
                            {formikDetails.touched.pincode &&
                                formikDetails.errors.pincode ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.pincode}
                                </div>
                            ) : null}
                        </div>
                        <div className='w-[100%]'>
                            <p className="pt-[1.5vw] font-bold">Location</p>
                            <Input
                                name='location'
                                value={formikDetails.values.location}
                                handleBlur={formikDetails.handleBlur}
                                onChange={formikDetails.handleChange}
                            />
                            {formikDetails.touched.location &&
                                formikDetails.errors.location ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.location}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <aside>
                        <div className="pt-[1.5vw] font-bold">
                            <p>Organisation</p>
                        </div>
                        <div className="flex flex-col">
                            {["JSP", "QSP", "PYSP"].map((org) => (
                                <label key={org}>
                                    <input
                                        type="radio"
                                        name="organisation"
                                        className="mr-2"
                                        value={org}
                                        onChange={formikDetails.handleChange}
                                        checked={formikDetails.values.organisation.includes(org)}
                                    />
                                    {org}
                                </label>
                            ))}
                            {formikDetails.touched.organisation &&
                                formikDetails.errors.organisation ? (
                                <div className="text-red-500">
                                    {formikDetails.errors.organisation}
                                </div>
                            ) : null}
                        </div>
                    </aside>
                </div>
                <p className={commonFieldClass}>FAQ</p>
                <div className="mb-[4.444vh] border border-2 rounded-md p-[4.444vh] flex flex-col justify-center">
                    <div className="mb-[2.222vh]">
                        <p className={commonFieldClass}>Question :</p>
                        <Input
                            name="question"
                            placeholder='enter the question'
                            value={formikDetails.values.question}
                            onChange={formikDetails.handleChange}
                            onBlur={formikDetails.handleBlur}
                            className={`${formikDetails.touched.question &&
                                formikDetails.errors.question
                                ? "border-red-500"
                                : " border-gray-400"
                                }`}
                        />
                        {formikDetails.touched.question &&
                            formikDetails.errors.question && (
                                <div className="text-red-500">
                                    {formikDetails.errors.question}
                                </div>
                            )}
                    </div>
                    <div>
                        <p className={commonFieldClass}>Answer :</p>
                        <Input
                            name="answer"
                            placeholder='enter the qnswer'
                            value={formikDetails.values.answer}
                            onChange={formikDetails.handleChange}
                            onBlur={formikDetails.handleBlur}
                            className={`${formikDetails.touched.answer && formikDetails.errors.answer
                                ? "border-red-500"
                                : " border-gray-400"
                                }`}
                        />
                        {formikDetails.touched.answer && formikDetails.errors.answer && (
                            <div className="text-red-500">
                                {formikDetails.errors.answer}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-2  px-[1.5vw] pt-[1.5vw] ">
                        <div>
                            <Button
                                title={faqEditIndex === null ? "Add" : "Update"}
                                onClick={addFAQ}
                                className="py-[0.5vw] px-[1vw] bg-gradient rounded-md text-white"
                            />
                        </div>
                    </div>
                    <div className="my-2.5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="mb-[2.222vh] border border-2 rounded-md p-[2.222vh]"
                            >
                                <div
                                    className="flex justify-between cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div>
                                        <p className="pb-[1.111vh] font-semibold">
                                            {faq.question}
                                        </p>
                                    </div>
                                    <div>
                                        {expandedIndex === index ? (
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 15l7-7 7 7"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {expandedIndex === index && (
                                    <div>
                                        <div className=" border-gray-300 py-[1.111vh]">
                                            <p>{faq.answer}</p>
                                        </div>
                                        <div className="flex justify-end gap-2 mt-[1.111vh]">
                                            <Button
                                                title="Edit"
                                                className="py-[0.5vw] px-[1vw] bg-blue-500 rounded-md text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    editFaq(index);
                                                }}
                                            />
                                            <Button
                                                title="Delete"
                                                className="py-[0.5vw] px-[1vw] bg-red-500 rounded-md text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    deleteFaq(index);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {formikDetails.touched.faqs && formikDetails.errors.faqs ? (
                        <div className="text-red-500">{formikDetails.errors.faqs}</div>
                    ) : null}
                </div>
                <p className='p-2 text-[1.8rem]'>Add Branch Images</p>
                <div className='flex gap-5 justify-around rounded border border-gray-300 p-8'>
                    <div>
                        <p>Branch Main Image</p>
                        <Input
                            onChange={(e) => handleFileSelected(e, "mainImage")}
                            placeholder="select a file"
                            type="file"
                        />
                    </div>
                    <div>
                        <p>Branch Gallary</p>
                        <Input
                            onChange={(e) => handleFileSelected(e, "imageGalary")}
                            placeholder="select a file"
                            type="file"
                            multiple={'multiple'}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-gradient rounded-md text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </MaxWebWidth>
    )
}

export default BranchFormLanding