"use client";
import React, { useState, useEffect } from "react";
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
import { useGetAllCitiesForFormQuery } from "@/redux/queries/getCitiesApi";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
import { useCityDeleteMutation } from "@/redux/queries/deleteCityApi";
import { useCityWeightageMutation } from "@/redux/queries/cityweightageApi";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCitiesEditMutation } from "@/redux/queries/editAdminCityApi";
const CityWeightageContent = () => {
  const [cityEditDialog, setCityEditDialog] = useState(false);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [deleteCity, setdeleteCity] = useState(false);
  const [cityAddDialog, setCityAddDialog] = useState(false);
  const [activeCountry, setActiveCountry] = useState("India");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [editData, setEditData] = useState(null);
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
  const [
    deleteSelectedCity,
    { data: CityDeleteResp, error: CityDeleteError, isLoading: CityDeleteLoad },
  ] = useCityDeleteMutation();
  const [addCity] = useCitiesAdderMutation();
  const [editCity] = useCitiesEditMutation();
  const [editCityWeightage] = useCityWeightageMutation();
  const { data: cityData, refetch: cityRefetch } = useGetAllCitiesForFormQuery({
    organizationType: initialOrgType,
  });
  useEffect(() => {
    cityRefetch();
  }, [instituteParam]);
  const countryOptions = [];
  cityData?.data?.map((item) => {
    countryOptions.push({
      label: item.countryName,
      value: item.countryName,
    });
  });
  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
  const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
  const deleteICon = "/illustrate_delete.svg";
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

  useEffect(() => {
    if (editData) {
      formikDetails.setValues({
        ...formikDetails.values,
        cityName: editData.cityName || "",
        stateName: editData.state || "",
      });

      setSelectedFile({
        cityIcon: null,
        cityImage: null,
      });
      setPreviewURL({
        cityIcon: editData.cityIcon || null,
        cityImage: editData.cityImage || null,
      });
      setErrorMessage({
        cityIcon: "",
        cityImage: "",
      });
    }
  }, [editData]);
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
      let editPayload = {
        cityName: values.cityName,
        cityIcon: selectedFile.cityIcon,
        cityImage: selectedFile.cityImage,
        state: values.stateName,
        countryName: selectedCountry,
        cityId: selectedCityId,
      };

      try {
        const response = editData
          ? await editCity({ bodyData: editPayload }).unwrap()
          : await addCity({ bodyData: payload }).unwrap();
        if (response.statusCode === 200 || response.statusCode === 201) {
          cityRefetch();
        }
        setCityAddDialog(false);
        setCityEditDialog(false);
        dialogCloseClick();
      } catch (err) {
        console.error(err);
      }
    },
  });
  // const handleFileChange = (event, iconType) => {
  //   const file = event.target.files[0];
  //   const previewURL = URL.createObjectURL(file);
  //   if (file && file.type.startsWith("image/")) {
  //     setSelectedFile((prevState) => ({
  //       ...prevState,
  //       [iconType]: file,
  //     }));
  //     setPreviewURL((prevState) => ({
  //       ...prevState,
  //       [iconType]: previewURL,
  //     }));
  //     setErrorMessage((prevState) => ({
  //       ...prevState,
  //       [iconType]: "",
  //     }));
  //   } else {
  //     setSelectedFile((prevState) => ({
  //       ...prevState,
  //       [iconType]: null,
  //     }));
  //     setPreviewURL((prevState) => ({
  //       ...prevState,
  //       [iconType]: previewURL,
  //     }));
  //     setErrorMessage((prevState) => ({
  //       ...prevState,
  //       [iconType]: "Please upload a valid image file.",
  //     }));
  //   }
  // };

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
    setEditData(null);
  };
  const footerBtnClick = () => {
    formikDetails.handleSubmit();
    if (!editData) {
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
    }

    if (!selectedCountry) {
      setErrorCountry("Please select a country");
    }
  };
  const handledeleteSelectedCity = async () => {
    try {
      const response = await deleteSelectedCity({
        cityId: selectedCityId,
      }).unwrap();
      setdeleteCity(false);
      cityRefetch();
    } catch (err) {
      console.error(err);
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
  const getCityData = cityData?.data?.find(
    (ele) => ele.countryName === activeCountry
  );

  const handleSubEditClick = (ele, getCityData) => {
    setEditData(ele);
    setCityEditDialog(true);
    setCityAddDialog(false);
    setSelectedCityId(ele.cityId);

    setPreviewURL({
      cityIcon: ele.cityIcon || null,
      cityImage: ele.cityImage || null,
    });

    setSelectedCountry(getCityData.countryName);
  };

  const [cityList, setCityList] = useState(getCityData?.cities || []);

  useEffect(() => {
    setCityList(getCityData?.cities || []);
  }, [getCityData]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const SortableItem = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: props.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <TableRow
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="group"
      >
        {props.children}
      </TableRow>
    );
  };
  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cityList.findIndex(
        (city) => city.cityId === parseInt(active.id)
      );
      const newIndex = cityList.findIndex(
        (city) => city.cityId === parseInt(over.id)
      );
      if (oldIndex !== -1 && newIndex !== -1) {
        const updatedCityList = arrayMove(cityList, oldIndex, newIndex);
        setCityList(updatedCityList);

        try {
          const payload = {
            countryId: getCityData.countryId,
            cityId: parseInt(active.id),
            weightage: newIndex + 1,
            organisation: initialOrgType,
          };

          const response = await editCityWeightage(payload).unwrap();
          if (response.statusCode === 200) {
            cityRefetch();
          }
        } catch (error) {
          console.error("Error updating city weightage:", error);
        }
      }
    }
  };
  const renderCells = (city) => [
    {
      content: city.cityName,
      className: "text-gray-600 font-medium text-xs cursor-pointer",
    },
    {
      content: city.branchCount,
      className: "text-gray-600 font-medium text-xs",
    },

    {
      content: (
        <>
          <div className="invisible group-hover:visible flex">
            <Dialog>
              <DialogTrigger>
                <button
                  onClick={() => handleSubEditClick(city, getCityData)}
                  className="mr-2 text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </DialogTrigger>
            </Dialog>
            <button
              onClick={() => {
                setdeleteCity(true);
                setSelectedCityId(city.cityId);
              }}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      ),
      className: "text-gray-600 font-medium text-xs",
    },
  ];
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
                setEditData(null);
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
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
          <div className="flex gap-6 pl-4">
            {cityData?.data?.map((ele, index) => (
              <div key={index} className="flex justify-between items-center  ">
                <button
                  onClick={() => handleCountryClick(ele.countryName)}
                  className={`text-[#212121] py-[1.389vh] border-b-2 border-transparent text-[1.094vw] font-medium ${
                    activeCountry === ele.countryName
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

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={cityList.map((city) => city.cityId)}
                strategy={verticalListSortingStrategy}
              >
                <TableBody>
                  {cityList.map((city) => (
                    <SortableItem key={city.cityId} id={city.cityId}>
                      {renderCells(city).map((cell, index) => (
                        <TableCell key={index} className={cell.className}>
                          {cell.content}
                        </TableCell>
                      ))}
                    </SortableItem>
                  ))}
                </TableBody>
              </SortableContext>
            </DndContext>
          </Table>
        </div>
        <Dialog open={cityEditDialog} onOpenChange={setCityEditDialog}>
          <CommonDialog
            header="Edit City"
            footerBtnTitle="Edit City"
            formfn={dialogForm}
            dialogCloseClick={dialogCloseClick}
            footerBtnClick={footerBtnClick}
          />
        </Dialog>
        <AlertDialog
          open={deleteCity}
          onOpenChange={(open) => setdeleteCity(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setdeleteCity}
            btnText="Delete"
            contentText="Are you sure you want to delete"
            deleteFunction={handledeleteSelectedCity}
          />
        </AlertDialog>
      </div>
    </>
  );
};

export default CityWeightageContent;
