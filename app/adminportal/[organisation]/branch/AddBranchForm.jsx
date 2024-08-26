"use client";
import React, { useEffect, useState } from "react";
import {
    DialogContent,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialogFull";
import PhoneInput from "react-phone-input-2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import Input from "@/components/commonComponents/input/Input";
import { isValidPhoneNumber } from 'react-phone-number-input';
import Button from "@/components/commonComponents/button/Button";
import { useBranchAdderMutation } from "@/redux/queries/branchAdderApi";
import { useGetBranchDetailsByIdQuery } from "@/redux/queries/getBranchDetailsByBranchIdApi";
import { useBranchEditDataMutation } from "@/redux/queries/editBranchApi";

function AddBranchForm({ dialogCloseClick, courseRefetch, branchEditData, }) {
    const [addBranch, { data: branchAdd, error: branchError, isLoading: branchAdderLoad }] = useBranchAdderMutation();
    const [EditBranch, { data: branchEdit, error: branchEditError, isLoading: branchEditLoad }] = useBranchEditDataMutation();
    const [error, setError] = useState({ phone: false, validPhone: false });
    const [phoneValue, setPhoneValue] = useState();
    const [countryCode, setCountryCode] = useState("");
    const [faqs, setFaqs] = useState([]);
    const [faqEditIndex, setFaqEditIndex] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const commonLabelStyles = "pb-[1.111vh]";
    const tagHeadStyle = "font-medium text-[1.094vw] pb-[1.389vh]";
    const [selectedFile, setSelectedFile] = useState({
        branchGallery: [],
        branchMainImage: null,
    });
    const [previewURL, setPreviewURL] = useState({
        branchGallery: [],
        branchMainImage: null,
    });
    const branchId = branchEditData?.branchId
    const {
        data: individualBranch,
        error: individualBranchError,
        isLoading: individualBranchIsLoading
    } = useGetBranchDetailsByIdQuery({ branchId: branchId }, { skip: !branchId });

    const [errorMessage, setErrorMessage] = useState({
        branchGallery: "",
        branchMainImage: "",
    });
    const handleOnBlur = (id) => {
        formikDetails.setFieldTouched(id, true);
        if (!phoneValue) {
            setError({ ...error, [id]: true });
        } else if (!isValidPhoneNumber("+" + phoneValue?.toString())) {
            setError({ ...error, [id]: false, validPhone: true });
        } else {
            setError({ ...error, [id]: false, validPhone: false });
        }
    };

    const commonFieldClass = "pb-1 text-semibold"
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
    };
    const selectedBranchData = individualBranch?.data
    useEffect(() => {
        if (selectedBranchData) {
            formikDetails.setValues({
                ...formikDetails.values,
                BranchName: selectedBranchData.branchTitle || "",
                country: selectedBranchData.branchAddress.country || "",
                city: selectedBranchData.branchAddress.city || "",
                state: selectedBranchData.branchAddress.state || "",
                location: selectedBranchData.branchAddress.location || "",
                street: selectedBranchData.branchAddress.street || "",
                pincode: selectedBranchData.branchAddress.pincode || "",
                phone: selectedBranchData.contacts,
                faqs: selectedBranchData.branchFaqs,
                gmail: selectedBranchData.emails
            });
            setFaqs(selectedBranchData.branchFaqs)
            setPreviewURL((prevState) => ({
                ...prevState,
                branchGallery: [...(prevState["branchGallery"] || []), ...selectedBranchData.gallery],
            }));
            setSelectedFile((prevState) => ({
                ...prevState,
                branchGallery: [...(prevState["branchGallery"] || []), ...selectedBranchData.gallery],
            }));
            setPreviewURL((prevState) => ({
                ...prevState,
                branchMainImage: selectedBranchData.branchImage,
            }));
            setSelectedFile((prevState) => ({
                ...prevState,
                branchMainImage: selectedBranchData.branchImage,
            }));
        }
    }, [selectedBranchData]);

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
    });

    const handleFileChange = (event, iconType) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter((file) => file.type.startsWith("image/"));
        const invalidFiles = files.length - validFiles.length;

        if (validFiles.length > 0) {
            const previewURLs = validFiles.map((file) => URL.createObjectURL(file));

            setSelectedFile((prevState) => ({
                ...prevState,
                [iconType]: [...(prevState[iconType] || []), ...validFiles],
            }));

            setPreviewURL((prevState) => ({
                ...prevState,
                [iconType]: [...(prevState[iconType] || []), ...previewURLs],
            }));

            setErrorMessage((prevState) => ({
                ...prevState,
                [iconType]: invalidFiles > 0
                    ? `${invalidFiles} invalid files were ignored.`
                    : "",
            }));
        } else {
            setErrorMessage((prevState) => ({
                ...prevState,
                [iconType]: "Please upload valid image files.",
            }));
        }
    };
    const handleCancel = (iconType, index) => {
        if (iconType == "branchMainImage") {
            setSelectedFile((prevState) => ({
                ...prevState,
                [iconType]: null,
            }));
            setPreviewURL((prevState) => ({
                ...prevState,
                [iconType]: null,
            }));
            setErrorMessage((prevState) => ({
                ...prevState,
                [iconType]: "",
            }));
        } else {
            setSelectedFile((prevState) => ({
                ...prevState,
                [iconType]: prevState[iconType].filter((_, i) => i !== index),
            }));

            setPreviewURL((prevState) => ({
                ...prevState,
                [iconType]: prevState[iconType].filter((_, i) => i !== index),
            }));

            setErrorMessage((prevState) => ({
                ...prevState,
                [iconType]: "",
            }));
        }

    };

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
    const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
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
            const branchEdit = {
                displayName: values.BranchName,
                branchId: selectedBranchData?.branchId,
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
            const editPayload = JSON.stringify(branchEdit);
            const payload = {
                branch: payloadString,
                branchImage: selectedFile.branchMainImage[0],
                branchGallery: selectedFile.branchGallery
            }
            const payloadEdit = {
                branch: editPayload,
                branchImage: selectedFile.branchMainImage[0],
                branchGallery: selectedFile.branchGallery
            }
            if (!branchEditData) {
                try {
                    const response = await addBranch({ bodyData: payload }).unwrap();
                    setCourseAddDialog(false);
                } catch (err) {
                    console.error(err, "Error from loginAPI");
                }
            } else {
                try {
                    const response = await EditBranch({ bodyData: payloadEdit }).unwrap();
                    formikDetails.resetForm();
                    setCourseAddDialog(false);
                } catch (err) {
                    console.error(err, "Error from loginAPI");
                }
            }
        },
    });

    const handleModelClose = () => {
        dialogCloseClick(false);
        formikDetails.resetForm();
        setSelectedFile({
            branchGallery: [],
            branchMainImage: null,
        });
        setPreviewURL({
            branchGallery: [],
            branchMainImage: null,
        });
        setFaqs([]);
        setErrorMessage({ branchGallery: "", branchMainImage: "" });
    };

    return (
        <DialogContent>
            <form onSubmit={formikDetails.handleSubmit}>
                <h1 className="font-bold pb-[2.222vh] text-[1.25vw] text-[#212121]">
                    {branchEditData ? `Edit ${branchEditData?.branchName} Branch` : "Add new Branch"}
                </h1>
                <DialogClose>
                    <X
                        className="absolute top-5 right-6 w-4"
                        onClick={handleModelClose}
                    />
                </DialogClose>
                <div className="flex gap-[6.25rem] pb-[2.222vh]">
                    <div className="w-full h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>Branch name</p>
                                <Input
                                    name='BranchName'
                                    inputStyle="!w-[23.438vw] h-[2.813vw] text-[12px]  text-gray-400"
                                    placeholder='enter the Branch Name'
                                    value={formikDetails.values.BranchName}
                                    onChange={formikDetails.handleChange}

                                />
                                {formikDetails.touched.BranchName &&
                                    formikDetails.errors.BranchName ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.BranchName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-[18vw]  pb-[2.222vh]  h-full">
                    <div>
                        <p className={commonFieldClass}>Phone</p>
                        {formikDetails.values.phone.map((phone, index) => (
                            <div key={index} className="flex  pb-3 items-center gap-2">
                                <PhoneInput
                                    inputStyle={{ width: "23.438vw", height: "2.813vw", fontSize: "12px", padding: "12px", border: "1px solid #EEEEEE", borderRadius: "4px" }}
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
                                    className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-red-500'
                                    onClick={() => {
                                        const updatedPhones = [...formikDetails.values.phone];
                                        updatedPhones.splice(index, 1);
                                        formikDetails.setFieldValue("phone", updatedPhones);
                                    }}
                                />
                            </div>
                        ))}
                        <Button
                            title='+ Phone'
                            type="button"
                            className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-green-500'
                            onClick={() =>
                                formikDetails.setFieldValue("phone", [
                                    ...formikDetails.values.phone,
                                    ""
                                ])
                            }
                        />

                        {formikDetails.errors.phone &&
                            formikDetails.touched.phone && (
                                <div className="text-red-500 text-[12px]">
                                    {formikDetails.errors.phone}
                                </div>
                            )}
                    </div>
                    <div className=''>
                        <p>Gmail</p>
                        {formikDetails.values.gmail.map((gmail, index) => (
                            <div key={index} className="flex justify-between pb-3 items-center gap-2">
                                <Input
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]"
                                    name={`gmail[${index}]`}
                                    value={gmail}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                    placeholder="Please add gmail"
                                />
                                <Button
                                    title='Remove'
                                    type="button"
                                    className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-red-500'
                                    onClick={() => {
                                        const updatedGmails = [...formikDetails.values.gmail];
                                        updatedGmails.splice(index, 1);
                                        formikDetails.setFieldValue("gmail", updatedGmails);

                                    }}
                                />
                            </div>
                        ))}
                        <Button
                            title='+ Gmail'
                            type="button"
                            className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-green-500'
                            onClick={() =>
                                formikDetails.setFieldValue("gmail", [
                                    ...formikDetails.values.gmail,
                                    ""
                                ])
                            }
                        />
                        {formikDetails.touched.gmail &&
                            formikDetails.errors.gmail ? (
                            <div className="text-red-500 text-[12px]">
                                {formikDetails.errors.gmail}
                            </div>
                        ) : null}
                    </div>
                </div>
                <p className='text-[16px] font-bold'>Branch Adress</p>
                <div className="flex justify-between gap-[6.25rem] ">
                    <div className="w-[50%] h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>Country</p>
                                <Input
                                    name='country'
                                    placeholder="Please enter Country"
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                                    value={formikDetails.values.country}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                />
                                {formikDetails.touched.country &&
                                    formikDetails.errors.country ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.country}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>State</p>
                                <Input
                                    name='state'
                                    placeholder="Please enter State"
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                                    value={formikDetails.values.state}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                />
                                {formikDetails.touched.state &&
                                    formikDetails.errors.state ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.state}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={tagHeadStyle}>City</p>
                        <Input
                            name='city'
                            placeholder="Please Enter City"
                            inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                            value={formikDetails.values.city}
                            handleBlur={formikDetails.handleBlur}
                            onChange={formikDetails.handleChange}

                        />
                        {formikDetails.touched.city &&
                            formikDetails.errors.city ? (
                            <div className="text-red-500 text-[12px]">
                                {formikDetails.errors.city}
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="flex justify-between gap-[9.25rem]">
                    <div className="w-[50%] h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>Street</p>
                                <Input
                                    name='street'
                                    placeholder="Please Enter Street"
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                                    value={formikDetails.values.street}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                />
                                {formikDetails.touched.street &&
                                    formikDetails.errors.street ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.street}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>PinCode</p>
                                <Input
                                    name='pincode'
                                    placeholder="Please Enter PinCode"
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                                    value={formikDetails.values.pincode}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                />
                                {formikDetails.touched.pincode &&
                                    formikDetails.errors.pincode ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.pincode}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full">
                        <div className="pt-[2.222vh]">
                            <div>
                                <p className={tagHeadStyle}>Location</p>
                                <Input
                                    name='location'
                                    placeholder="Please eFnter Location"
                                    inputStyle="!w-[23.438vw] h-[2.813vw]  text-[12px]  text-gray-400"
                                    value={formikDetails.values.location}
                                    handleBlur={formikDetails.handleBlur}
                                    onChange={formikDetails.handleChange}
                                />
                                {formikDetails.touched.location &&
                                    formikDetails.errors.location ? (
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.location}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center pb-[2.222vh] pt-[2.222vh]">
                    <div className="w-[23.438vw]">
                        <p className={tagHeadStyle}>Branch Main Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="branch-icon-upload"
                            onChange={(event) => handleFileChange(event, "branchMainImage")}
                        />
                        <label htmlFor="branch-icon-upload" className="block w-[12.812vw]">
                            {previewURL.branchMainImage ? (
                                <div className="relative">
                                    <img
                                        src={previewURL.branchMainImage}
                                        alt={`${previewURL.branchMainImage}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleCancel("branchMainImage")}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                    >
                                        &#10005;
                                    </button>
                                </div>
                            ) : (
                                <img src="/images/uploadinput.png" alt="file upload" />
                            )}
                        </label>
                        {errorMessage.branchMainImage && (
                            <p className="text-red-500 text-[12px] pt-[3.333vh] text-[0.6rem]">
                                {errorMessage.branchMainImage}
                            </p>
                        )}
                    </div>

                    <div className="w-[100%] mt-4">
                        <p className={tagHeadStyle}>Branch Gallery</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="branch-gallery-image-upload"
                            multiple
                            onChange={(event) => handleFileChange(event, "branchGallery")}
                        />
                        <label
                            htmlFor="branch-gallery-image-upload"
                            className="block w-[12.812vw]"
                        >
                            <img src="/images/uploadinput.png" alt="file upload" />
                        </label>
                        <div className="flex flex-wrap mt-2 gap-2 w-[100%]">
                            {previewURL.branchGallery &&
                                previewURL.branchGallery.map((url, index) => (
                                    <div key={index} className="relative w-[10vw]">
                                        <img
                                            src={url}
                                            alt={`Branch Gallery Image Preview ${index + 1}`}
                                            className="w-full h-auto rounded-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleCancel("branchGallery", index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        >
                                            &#10005;
                                        </button>
                                    </div>
                                ))}
                        </div>
                        {errorMessage.branchGallery && (
                            <p className="text-red-500 text-[12px] pt-[3.333vh] text-[0.6rem]">
                                {errorMessage.branchGallery}
                            </p>
                        )}
                    </div>
                </div>

                <p className="pb-[1.111vh] font-bold text-[1.094vw]">FAQ</p>
                <div className="  flex gap-8">
                    <div className="flex flex-col w-[40%] bg-[#FFF7F1] p-4 rounded-lg">
                        <div className="mb-[2.222vh]">
                            <p className={commonLabelStyles}>Question :</p>
                            <Input
                                name="question"
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
                                    <div className="text-red-500 text-[12px]">
                                        {formikDetails.errors.question}
                                    </div>
                                )}
                        </div>
                        <div>
                            <p className={commonLabelStyles}>Answer :</p>
                            <Input
                                name="answer"
                                value={formikDetails.values.answer}
                                onChange={formikDetails.handleChange}
                                onBlur={formikDetails.handleBlur}
                                className={`${formikDetails.touched.answer && formikDetails.errors.answer
                                    ? "border-red-500"
                                    : " border-gray-400"
                                    }`}
                            />
                            {formikDetails.touched.answer && formikDetails.errors.answer && (
                                <div className="text-red-500 text-[12px]">
                                    {formikDetails.errors.answer}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end gap-2  px-[1.5vw] pt-[1.5vw] ">
                            <div>
                                <Button
                                    title={faqEditIndex === null ? "Save" : "Update"}
                                    onClick={addFAQ}
                                    className="py-[0.5vw] px-[1vw]  rounded-md border border-[#FF7B1B] text-[#FF7B1B]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" w-[40%]">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="mb-[2.222vh]  border-2 rounded-md p-[2.222vh]"
                            >
                                <div
                                    className="flex justify-between cursor-pointer items-center"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div>
                                        <p className=" font-semibold">{faq.question}</p>
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
                </div>
                <div>
                    {formikDetails.touched.faqs && formikDetails.errors.faqs ? (
                        <div className="text-red-500 text-[12px]">{formikDetails.errors.faqs}</div>
                    ) : null}
                </div>
                <DialogFooter>
                    <div className="mb-[4.444vh]">
                        <button
                            type="submit"
                            className="px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium bg-gradient rounded-md text-white"
                        >
                            {branchEditData ? "Edit Branch" : "Create Branch"}
                        </button>
                    </div>
                </DialogFooter>
            </form>
        </DialogContent>
    );
}

export default AddBranchForm;
