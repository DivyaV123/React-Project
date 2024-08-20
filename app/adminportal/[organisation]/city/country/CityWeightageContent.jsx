"use client";
import React, { useState } from "react";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCitiesAdderMutation } from "@/redux/queries/addCitiesApi";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
const CityWeightageContent = () => {
  const [cityEditDialog, setCityEditDialog] = useState(false);
  const [cityAddDialog, setCityAddDialog] = useState(false);
  const [activeCountry, setActiveCountry] = useState("India");
  const [selectedCountry, setSelectedCountry] = useState("");
  const pathname = usePathname();
  const getParams = pathname.split("/").slice(2);
  const [instituteParam] = getParams[0].split(",").slice(1);
  const initialOrgType =
    instituteParam === "Qspiders"
      ? "QSP"
      : instituteParam === "Jspiders"
        ? "JSP"
        : instituteParam === "Pyspiders"
          ? "PYSP"
          : instituteParam === "Prospiders"
            ? "PROSP"
            : "QSP";
  const [addCity] = useCitiesAdderMutation();
  const { data: branchData, refetch } = useGetAllBranchesQuery();
  const countryOptions = [];
  branchData?.data?.map((item) => {
    countryOptions.push({
      label: item.countryName,
      value: item.countryName,
    });
  });
  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const tableHeaders = ["CITY NAMES", "BRANCHES", "ACTIONS"];
  const [selectedFile, setSelectedFile] = useState({
    cityIcon: null,
    cityImage: null,
  });
  const [previewURL, setPreviewURL] = useState({
    cityIcon: null,
    cityImage: null,
  });
  const [errorMessage, setErrorMessage] = useState({
    cityIcon: "",
    cityImage: "",
  });
  const [errorCountry, setErrorCountry] = useState("");

  const initialValues = {
    cityName: "",
    stateName: "",
  };
  const validationSchema = Yup.object({
    cityName: Yup.string().required("city Name is required"),
    stateName: Yup.string().required("state Name is required"),
  });
  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      let payload = {
        cityName: values.cityName,
        cityIcon: selectedFile.cityIcon,
        cityImage: selectedFile.cityImage,
        stateName: values.stateName,
        countryName: selectedCountry,
      };
      try {
        const response = await addCity({ bodyData: payload }).unwrap();
        if (response.statusCode === 200 || response.statusCode === 201) {
          refetch();
        }
        setCityAddDialog(false);
        dialogCloseClick();
      } catch (err) {
        console.log(err);
      }
    },
  });
  const handleFileChange = (event, iconType) => {
    const file = event.target.files[0];
    const previewURL = URL.createObjectURL(file);
    if (file && file.type.startsWith("image/")) {
      setSelectedFile((prevState) => ({
        ...prevState,
        [iconType]: file,
      }));
      setPreviewURL((prevState) => ({
        ...prevState,
        [iconType]: previewURL,
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
      setPreviewURL((prevState) => ({
        ...prevState,
        [iconType]: previewURL,
      }));
      setErrorMessage((prevState) => ({
        ...prevState,
        [iconType]: "Please upload a valid image file.",
      }));
    }
  };
  const handleCancel = (iconType) => {
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
  };
  const dialogCloseClick = () => {
    formikDetails.resetForm();
    setErrorMessage({
      cityIcon: "",
      cityImage: "",
    });
    setSelectedFile({
      cityIcon: null,
      cityImage: null,
    });
    setPreviewURL({
      cityIcon: null,
      cityImage: null,
    });
  };
  const footerBtnClick = () => {
    formikDetails.handleSubmit();
    if (!selectedFile.cityIcon || !selectedFile.cityImage) {
      setErrorMessage({
        cityIcon: selectedFile.cityIcon
          ? ""
          : "Please upload a valid image file.",
        cityImage: selectedFile.cityImage
          ? ""
          : "Please upload a valid image file.",
      });
    }
    if (!selectedCountry) {
      setErrorCountry("Please select a country");
    }
  };
  const handleCountrySelect = (event) => {
    setSelectedCountry(event.target.value);
  };
  const dialogForm = () => {
    return (
      <form onSubmit={formikDetails.handleSubmit}>
        <div className="pb-[2.222vh]">
          <p className={pStyle}>City name</p>
          <Input
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            value={formikDetails.values.cityName}
            name="cityName"
            placeholder="Enter city name"
          />
          {formikDetails.touched.cityName && formikDetails.errors.cityName ? (
            <div className="text-red-500 text-[0.6rem] ">
              {formikDetails.errors.cityName}
            </div>
          ) : null}
        </div>
        <div className="pb-[2.222vh]">
          <p className={pStyle}>State Name</p>
          <Input
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            value={formikDetails.values.stateName}
            name="stateName"
            placeholder="Enter state name"
          />
          {formikDetails.touched.stateName && formikDetails.errors.stateName ? (
            <div className="text-red-500 text-[0.6rem] ">
              {formikDetails.errors.stateName}
            </div>
          ) : null}
        </div>
        <div className="pb-[2.222vh]">
          <p className={pStyle}>Select Country Name</p>
          <Dropdown
            name="countryname"
            value={selectedCountry}
            onChange={handleCountrySelect}
            placeholder="Select the country name"
            options={countryOptions}
          />
          {errorCountry && (
            <div className="text-red-500 text-[0.6rem]">{errorCountry}</div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="w-[23.438vw] pb-[2.222vh]">
            <p className={pStyle}>City Icon</p>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="cityIcon-upload"
              onChange={(event) => handleFileChange(event, "cityIcon")}
            />
            <label htmlFor="cityIcon-upload" className="block w-[12.812vw]">
              {previewURL.cityIcon ? (
                <div className="relative">
                  <img src={previewURL.cityIcon} alt="city Icon Preview" />
                  <button
                    type="button"
                    onClick={() => handleCancel("cityIcon")}
                    className="absolute top-0 right-0 rounded-full p-1"
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <img src="/images/uploadinput.png" alt="file upload" />
              )}
            </label>
            {errorMessage.cityIcon && (
              <p className="text-red-500 pt-[3.333vh] text-[0.6rem]">
                {errorMessage.cityIcon}
              </p>
            )}
          </div>
          <div className="w-[23.438vw] pb-[2.222vh]">
            <p className={pStyle}>City Image</p>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="cityImage-upload"
              onChange={(event) => handleFileChange(event, "cityImage")}
            />
            <label htmlFor="cityImage-upload" className="block w-[12.812vw]">
              {previewURL.cityImage ? (
                <div className="relative">
                  <img src={previewURL.cityImage} alt="city Image Preview" />
                  <button
                    type="button"
                    onClick={() => handleCancel("cityImage")}
                    className="absolute top-0 right-0 rounded-full p-1"
                  >
                    &#10005;
                  </button>
                </div>
              ) : (
                <img src="/images/uploadinput.png" alt="file upload" />
              )}
            </label>
            {errorMessage.cityImage && (
              <p className="text-red-500 pt-[3.333vh] text-[0.6rem]">
                {errorMessage.cityImage}
              </p>
            )}
          </div>
        </div>
      </form>
    );
  };

  const handleCountryClick = (countryName) => {
    setActiveCountry(countryName);
  };
  const getCityData = branchData?.data?.find(
    (ele) => ele.countryName === activeCountry
  );

  const handleSubEditClick = (ele, getCityData) => {

    setCityEditDialog(true);
    setCityAddDialog(false);
    console.log(ele, getCityData, "ele to be edited")
    formikDetails.setFieldValue("cityName", ele.cityName);
    formikDetails.setFieldValue("stateName", ele.cityName);

  }

  return (
    <>
      <Dialog>
        <article className="flex justify-between items-center">
          <div className="flex gap-3 pt-[2.222vh] items-center">
            <div className="pl-[1.875vw] w-[29.688vw]">
              <Input
                inputStyle="rounded-md"
                placeholder="search"
                iconPath="/images/icon_outline_search.png"
              />
            </div>
          </div>
          <DialogTrigger>
            <button
              onClick={() => {
                setCityAddDialog(true);
                setCityEditDialog(false);
              }}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              City
            </button>
          </DialogTrigger>
        </article>
        {cityAddDialog && (
          <CommonDialog
            header="Add New City"
            footerBtnTitle="Create City"
            formfn={dialogForm}
            dialogCloseClick={dialogCloseClick}
            footerBtnClick={footerBtnClick}
          />
        )}
        {console.log(cityEditDialog, "cityEditDialogcityEditDialog")}
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
          <div className="flex gap-6 pl-4">
            {branchData?.data?.map((ele, index) => (
              <div key={index} className="flex justify-between items-center  ">
                <button
                  onClick={() => handleCountryClick(ele.countryName)}
                  className={`text-[#212121] py-[1.389vh] border-b-2 border-transparent text-[1.094vw] font-medium ${activeCountry === ele.countryName
                    ? " text-[#FF7B1B] font-bold border-b-2 border-[#FF7B1B]"
                    : ""
                    }`}
                >
                  {ele.countryName}
                </button>
              </div>
            ))}
          </div>
          <Table>
            <TableHeader className="z-1">
              <TableRow>
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className={tblTextClass}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCityData?.cities.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className={tblTextClass} title={ele.cityName}>
                    {ele.cityName}
                  </TableCell>
                  <TableCell className={tblTextClass} title={ele.branchCount}>
                    {ele.branchCount}
                  </TableCell>
                  <TableCell className={tblTextClass}>
                    <Dialog>
                      <DialogTrigger>
                        <button
                          onClick={() => handleSubEditClick(ele, getCityData)}
                          className="mr-2 text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </DialogTrigger>
                      {cityEditDialog && (
                        <CommonDialog
                          header="Edit City"
                          footerBtnTitle="Edit City"
                          formfn={dialogForm}
                          dialogCloseClick={dialogCloseClick}
                          footerBtnClick={footerBtnClick}
                        />
                      )}
                    </Dialog>
                    <button
                      // onClick={handleDeleteClick(
                      //   ele.course_id,
                      //   ele.course_name
                      // )}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>

  );
};

export default CityWeightageContent;
