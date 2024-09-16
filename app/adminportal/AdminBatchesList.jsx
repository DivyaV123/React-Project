"use client";
import React, { useMemo, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { usePathname } from "next/navigation";
import { truncateText } from "@/lib/utils";
import Input from "@/components/commonComponents/input/Input";
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";

import Checkbox from "@/components/commonComponents/checkbox/Checkbox";

import { AlertDialog } from "@/components/ui/alert-dialog";
import DeleteWarningPopup from "@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup";
// import { useCourseDeleteMutation } from "@/redux/queries/deleteBatch";
import { useCourseEditorMutation } from "@/redux/queries/courseById";
import { useGetAllBranchesAsPerCountryQuery } from "@/redux/queries/getAllBranchesAsPerCountryApi";
import CommonDialog from "@/components/commonComponents/adminDialog/CommonDialog";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import { useGetAllCoursesQuery } from "@/redux/queries/getAllCourseForAdmin";
import { useAddBatchApiMutation } from "@/redux/queries/addBatchApi";
import { useGetAllBatchQuery } from "@/redux/queries/getAllBatchesApi";
import { useGetAllBranchOptionsQuery } from "@/redux/queries/getAllBrancesDropDownApi";
import { useBatchDeleteMutation } from "@/redux/queries/deleteBatchApi";
import { useEditBatchAdminMutation } from "@/redux/queries/batchEditAdminApi";

function AdminBatchesList() {
  
  const [dialogOpen, setDialogOpen] = useState(false);

  const [storeBatchId, setStoreBatchId] = useState([]);

  const [courseAddDialog, setCourseAddDialog] = useState(false);
  const [deleteBatch, setDeleteBatch] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [branchId, setBranchId] = useState(null);
  const [batchName, setBatchName] = useState("");
  const [batchId, setBatchId] = useState("");
  const [batchEditData, setBatchEditData] = useState();
  const initialValues = {
    batchName:batchEditData?batchEditData.batchName : "",
    branch:batchEditData?batchEditData.branchName : "",
    tutor:batchEditData?batchEditData.trainerName : "",
    dateRange: { start:batchEditData?batchEditData.startingDate: "", end: batchEditData?batchEditData.endingDate: "" },
    timeRange: { start: batchEditData?batchEditData.startingTime: "", end: batchEditData?batchEditData.endingTime: "" },
    time: "",
    courses: "",
  };

  const validationSchema = Yup.object({
    batchName: Yup.string().required("Batch name is required"),
    branch:!batchEditData && Yup.string().required("Branch is required"),
    tutor: Yup.string().required("Tutor is required"),
    dateRange: Yup.object().shape({
      start: Yup.date()
        .required("Start date is required"),
        
      end: Yup.date()
        .required("End date is required")
        .min(Yup.ref("start"), "End date must be after start date"),
    }),
    timeRange: Yup.object().shape({
      start: Yup.string().required("Start time is required"),
      end: Yup.string()
        .required("End time is required")
        .test(
          "is-greater",
          "End time should be greater than start time",
          function (value) {
            const { start } = this.parent;
            return !start || !value || value > start;
          }
        ),
    }),
    courses:!batchEditData && Yup.string().required("course is required"),
  });

  const tutorOptions = [
    { label: "Sashi Kunal", value: "Sashi Kunal" },
    { label: "Nithish T", value: "Nithish T" },
    { label: "Shanthala", value: "Shanthala" },
    { label: "Anil Kumar", value: "Anil Kumar" },
    { label: "Shubhash", value: "Shubhash" },
  ];


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

  const { data: batchData, refetch: batchDataRefetch } = useGetAllBatchQuery({
    organizationType: initialOrgType,
  });
  const [
    addBatch,
    { data: batchAdd, error: batchError, isLoading: batchAdderLoad },
  ] = useAddBatchApiMutation();
  const [
    editBatch,
    { data: editBatchData, error: editBatchError, isLoading: editBatchLoad },
  ] = useEditBatchAdminMutation();

  const [deleteSelectedBatch] = useBatchDeleteMutation();

  useEffect(() => {
   
    batchDataRefetch()
  }, [instituteParam]);

  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

  const tableHeaders = [
    "BATCHES NAME",

    "BRANCH",
    "TUTOR",
    "DATE",
    "TIME",
    "WEEK TYPE",
    "ACTIONS",
  ];
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);

  const handleCourseCheckbox = (courseId, course) => () => {
    setStoreBatchId((prevIds) =>
      prevIds.includes(courseId)
        ? prevIds.filter((id) => id !== courseId)
        : [...prevIds, courseId]
    );
  };

  const [selectedCourseDetailsToEdit, { data: courseToEdit }] =
    useCourseEditorMutation();
  const handleEditClick = (batch) => async () => {
   
   
    setDialogOpen(true);
    setBatchEditData(batch);
   
  };

  const deleteICon = "/illustrate_delete.svg";
  const handleDeleteClick = (id, batchName) => () => {
    setBatchName(batchName);
    setBatchId(id);
    setDeleteBatch(true);
  };
  const handleDeleteSelectedCourse = async () => {
    
    try {
      const response = await deleteSelectedBatch({ batchId }).unwrap();
      setDeleteBatch(false);
      batchDataRefetch();
    } catch (err) {
      console.error(err);
    }
  };
  const { data: filteredBranches, refetch: filteredBranchesRefetch } = useGetAllBranchOptionsQuery({
    hostName: initialOrgType,
  });

  
  const branchOptions = [];
  filteredBranches?.data.map((item) => {
    branchOptions.push({
      label: item.branchName,
      value: item.branchName,
      Id: item.branchId,
    });
  });
  const { data: courseData, refetch: courseRefetch } = useGetAllCoursesQuery({
    organizationType: initialOrgType,
  });

  const coursesOptions = [];
  courseData?.data?.map((item) => {
    coursesOptions.push({
      label: item.course_name,
      value: item.course_name,
      Id: item.course_id,
    });
  });
  const createBatchForm = (formikDetails) => {
    return (
      <Form className="space-y-4">
        <div>
          <label htmlFor="batchName">Batch Name</label>
          <Input
            id="batchName"
            name="batchName"
            placeholder="Enter batch name"
            value={formikDetails.values.batchName}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            className="input-class"
          />
          {formikDetails.touched.batchName && formikDetails.errors.batchName ? (
            <div className="text-red-500 text-[12px] absolute">
              {formikDetails.errors.batchName}
            </div>
          ) : null}
        </div>
        {
          !batchEditData && <>
          <div>
          <label htmlFor="courses">Course</label>
          <Dropdown
            placeholder="Select Course"
            inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
            iconStyle="w-[10%]"
            options={coursesOptions}
            name="courses"
            value={formikDetails.values.courses}
            onChange={(event) => {
              formikDetails.setFieldValue("courses", event.target.value);
           
              setCourseId(event.target.option.Id);
            }}
          />
          {formikDetails.touched.courses && formikDetails.errors.courses ? (
            <div className="text-red-500 text-[12px] absolute">
              {formikDetails.errors.courses}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="branch">Branch</label>
          <Dropdown
            placeholder="Select Branch"
            inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
            iconStyle="w-[10%]"
            options={branchOptions}
            name="branch"
            value={formikDetails.values.branch}
            onChange={(event) => {
              formikDetails.setFieldValue("branch", event.target.value);
              setBranchId(event.target.option.Id);
             
            }}
          />
          {formikDetails.touched.branch && formikDetails.errors.branch ? (
            <div className="text-red-500 text-[12px] absolute">
              {formikDetails.errors.branch}
            </div>
          ) : null}
        </div>

          </>
        }
       

        <div>
          <label htmlFor="tutor"  >Tutor</label>
          {/* <Dropdown
            placeholder="Select Tutor"
            inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
            iconStyle="w-[10%]"
            options={tutorOptions}
            name="tutor"
            value={formikDetails.values.tutor}
            onChange={(event) =>
              formikDetails.setFieldValue("tutor", event.target.value)
            }
          /> */}
          <Input
            id="tutor"
            name="tutor"
            placeholder="Enter tutor"
            value={formikDetails.values.tutor}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
            className="input-class"
          />
         
          {formikDetails.touched.tutor && formikDetails.errors.tutor ? (
            <div className="text-red-500 text-[12px] absolute">
              {formikDetails.errors.tutor}
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <div className="flex space-x-2">
            <Input
              id="dateRangeStart"
              name="dateRange.start"
              type="date"
              value={formikDetails.values.dateRange.start}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              className="input-class w-1/2"
            />
            <Input
              id="dateRangeEnd"
              name="dateRange.end"
              type="date"
              value={formikDetails.values.dateRange.end}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              className="input-class w-1/2"
            />
          </div>
          <div className="flex gap-[5vw]">
            {formikDetails.touched.dateRange?.start &&
            formikDetails.errors.dateRange?.start ? (
              <div className="text-red-500 text-[12px] ">
                {formikDetails.errors.dateRange.start}
              </div>
            ) : null}
            {formikDetails.touched.dateRange?.end &&
            formikDetails.errors.dateRange?.end ? (
              <div className="text-red-500 text-[12px] ">
                {formikDetails.errors.dateRange.end}
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <div className="flex space-x-2">
            <div className="w-[14vw]">
              <Input
                id="timeRangeStart"
                name="timeRange.start"
                type="time"
                value={formikDetails.values.timeRange.start}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className="input-class w-[14w]"
              />
            </div>
            <div className="w-[14vw]">
              <Input
                id="timeRangeEnd"
                name="timeRange.end"
                type="time"
                value={formikDetails.values.timeRange.end}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                className="input-class w-[14w]"
              />
            </div>
          </div>
          <div className="flex gap-[5vw]">
            {formikDetails.touched.timeRange?.start &&
            formikDetails.errors.timeRange?.start ? (
              <div className="text-red-500 text-[12px] ">
                {formikDetails.errors.timeRange.start}
              </div>
            ) : null}
            {formikDetails.touched.timeRange?.end &&
            formikDetails.errors.timeRange?.end ? (
              <div className="text-red-500 text-[12px] ">
                {formikDetails.errors.timeRange.end}
              </div>
            ) : null}
          </div>
        </div>
      </Form>
    );
  };
  const handleCreateBatch = async (values) => {
   
    let payload = {
      batchTitle: values.batchName,
      trainerName: values.tutor,
      startingDate: values.dateRange.start,
      endingDate: values.dateRange.end,
      startingTime: `${values.timeRange.start}:00`,
      endingTime: `${values.timeRange.end}:00`,
      extendingDays: 0,
    };
    let editPayload = {
      batchTitle: values.batchName,
      trainerName:  values.tutor,
      startDate:  values.dateRange.start,
      endDate:  values.dateRange.end,
      startTime:  values.timeRange.start,
      endTime: values.timeRange.end
    
  }
    try {
      const response =batchEditData? await editBatch({ payload: editPayload,
        batchId: batchEditData.batchId}) : await addBatch({
        bodyData: payload,
        branchId: branchId,
        courseId: courseId,
      });
     
      if (response.data.statusCode === 201 || response.data.statusCode === 200) {
        setDialogOpen(false);
        batchDataRefetch()
      } 
    } catch (err) {
      console.error(err)
    }
  };
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
                setDialogOpen(true);
                setBatchEditData(null);
              }}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              + BATCH
            </button>
          </DialogTrigger>
        </article>

        {dialogOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateBatch}
          >
            {(formikDetails) => (
              <CommonDialog
                header="Add new Batches"
                footerBtnTitle="Create Batches"
                formfn={() => createBatchForm(formikDetails)}
                footerBtnClick={formikDetails.handleSubmit}
                dialogCloseClick={() => setDialogOpen(false)}
              />
            )}
          </Formik>
        )}
      </Dialog>
      <div className="py-[3.333vh] px-[1.875vw]">
        <div className="rounded-2xl bg-[#FFFFFF] pt-[2.222vh]">
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
              {batchData?.data?.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className={tblTextClass} title={ele.batchName}>
                    <div className="flex space-x-2">
                      <Checkbox
                        onChange={handleCourseCheckbox(ele.batchId, ele)}
                        checked={storeBatchId.includes(ele.batchId)}
                      />{" "}
                      {truncateText(ele.batchName, 30)}
                    </div>
                  </TableCell>
                  <TableCell className={tblTextClass} title={ele.branchName}>
                    <div className="flex space-x-2">{ele.branchName}</div>
                  </TableCell>
                  <TableCell
                    className={tblTextClass}
                    title={ele.trainerName}
                  >
                    <div className="flex space-x-2">{ele.trainerName}</div>
                  </TableCell>

                  <TableCell
                    className={tblTextClass}
                    title={ele.startingDate}
                  >
                    <div className="flex space-x-2">{ele.startingDate}</div>
                  </TableCell>
                  <TableCell
                    className={tblTextClass}
                    title={ele.startingTime}
                  >
                    <div className="flex space-x-2">{ele.startingTime}</div>
                  </TableCell>
                  <TableCell
                    className={tblTextClass}
                    title={ele.batchType}
                  >
                    <div className="flex space-x-2">{ele.batchType}</div>
                  </TableCell>

                 

                  <TableCell className={tblTextClass}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={handleEditClick(ele)}
                          className="mr-2 text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </DialogTrigger>
                      {dialogOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateBatch}
          >
            {(formikDetails) => (
              <CommonDialog
                header="Edit Batch"
                footerBtnTitle="update"
                formfn={() => createBatchForm(formikDetails)}
                footerBtnClick={formikDetails.handleSubmit}
                dialogCloseClick={() => setDialogOpen(false)}
              />
            )}
          </Formik>
        )}
                    </Dialog>
                    <button
                      onClick={handleDeleteClick(ele.batchId, ele.batchName)}
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
        <AlertDialog
          open={deleteBatch}
          onOpenChange={(open) => setDeleteBatch(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteBatch}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${batchName} Category`}
            deleteFunction={handleDeleteSelectedCourse}
          />
        </AlertDialog>
      </div>
    </>
  );
}

export default AdminBatchesList;
