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
import { useCourseDeleteMutation } from "@/redux/queries/deleteCourse";
import { useCourseEditorMutation } from "@/redux/queries/courseById";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { useGetAllBranchesAsPerCountryQuery } from "@/redux/queries/getAllBranchesAsPerCountryApi";
import AddBranchForm from "./AddBranchForm";
import { useBranchDeleteMutation } from "@/redux/queries/deleteBranch";
import { useGetBranchDetailsByIdQuery } from "@/redux/queries/getBranchDetailsByBranchIdApi";

function AdminBranchesList() {
  const [storebranchId, setStorebranchId] = useState([]);
  const [deleteCourse, setDeleteCourse] = useState(false);
  const [branchId, setBranchId] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [branchEditData, setBranchEditData] = useState();
  const [branchAddDialog, setBranchAddDialog] = useState(false);
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
  const { data: branchData, refetch: branchRefetch } = useGetAllBranchesQuery({
    organizationType: initialOrgType,
  });

  const { data: categoryData, refetch: categoryRefetch } =
    useGetAllBranchesAsPerCountryQuery({
      organizationType: initialOrgType,
    });

  const [deleteSelectedBranch] = useBranchDeleteMutation();
  useEffect(() => {
    branchRefetch();
    categoryRefetch();
  }, [instituteParam]);

  const tblTextClass =
    "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";

  const tableHeaders = [
    "BRANCH NAME",
    "CITY",
    "BATCHES",
    "CONTACT",
    "ADDRESS",
    "NAVIGATION",
    "ACTIONS",
  ];
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (index) => setDropdownOpen(index);
  const handleMouseLeave = () => setDropdownOpen(null);

  const handleCourseCheckbox = (branchId, course) => () => {
    setStorebranchId((prevIds) =>
      prevIds.includes(branchId)
        ? prevIds.filter((id) => id !== branchId)
        : [...prevIds, branchId]
    );
  };

  const [selectedCourseDetailsToEdit, { data: courseToEdit }] =
    useCourseEditorMutation();
  const handleEditClick = (branch) => async () => {
    setBranchEditData(branch);
    setBranchAddDialog(true);
  };

  const deleteICon = "/illustrate_delete.svg";
  const handleDeleteClick = (id, courseName) => () => {
    setCourseName(courseName);
    setBranchId(id);
    setDeleteCourse(true);
  };
  const handledeleteSelectedBranch = async () => {
    try {
      const response = await deleteSelectedBranch({ branchId }).unwrap();
      setDeleteCourse(false);
      branchRefetch();
    } catch (err) {
      console.error(err);
    }
  };
  const filteredBranches = [];

  branchData?.data?.forEach((country) => {
    country?.cities?.forEach((city) => {
      city?.courses?.forEach((course) => {
        const matchingBranches = course?.branches?.filter(
          (branch) => branch.organizationType === initialOrgType
        );
        filteredBranches.push(...matchingBranches);
      });
    });
  });
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
                setBranchAddDialog(true);
                setBranchEditData(null);
              }}
              className={
                "cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
              }
            >
              + BRANCH
            </button>
          </DialogTrigger>
        </article>

        <Dialog open={branchAddDialog} onOpenChange={setBranchAddDialog}>
          <AddBranchForm
            setBranchAddDialog={setBranchAddDialog}
            branchRefetch={branchRefetch}
            dialogCloseClick={setBranchAddDialog}
            branchEditData={branchEditData}
          />
        </Dialog>
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
              {filteredBranches?.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className={tblTextClass} title={ele.branchName}>
                    <div className="flex space-x-2">
                      <Checkbox
                        onChange={handleCourseCheckbox(ele.course_id, ele)}
                        checked={storebranchId.includes(ele.course_id)}
                      />{" "}
                      {truncateText(ele.branchName, 30)}
                    </div>
                  </TableCell>
                  <TableCell className={tblTextClass} title={ele.state}>
                    <div className="flex space-x-2">{ele.state}</div>
                  </TableCell>
                  <TableCell
                    className={tblTextClass}
                    title={ele.upcomingBatches}
                  >
                    <div className="flex space-x-2">{ele.upcomingBatches}</div>
                  </TableCell>

                  <TableCell className={tblTextClass}>
                    {ele.phoneNumber.length === 0 ? (
                      "0"
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.phoneNumber
                          .split(",")
                          .slice(0, 1)
                          .map((phone, index) => (
                            <span key={index}>{phone.trim()}</span>
                          ))}
                        {ele.phoneNumber.split(",").length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.phoneNumber.split(",").length - 1}
                            </button>
                            {dropdownOpen === index && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.phoneNumber
                                  .split(",")
                                  .slice(1)
                                  .map((phone, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {phone.trim()}
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className={tblTextClass}>
                    <div className="flex space-x-2">
                      {[
                        ele.street,
                        ele.city,
                        ele.state,
                        ele.country,
                        ele.pinCode,
                      ]
                        .filter(Boolean) // Remove any null or undefined values
                        .join(", ")}
                    </div>
                  </TableCell>
                  <TableCell className={tblTextClass}>
                    <a
                      href={ele.location}
                      target="_blank"
                      rel="noopener noreferrer" // Security best practice
                      className="flex space-x-2 text-blue-600 underline hover:text-blue-800"
                    >
                      {truncateText(ele.location, 15)}
                    </a>
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
                    </Dialog>
                    <button
                      onClick={handleDeleteClick(ele.branchId, ele.branchName)}
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
          open={deleteCourse}
          onOpenChange={(open) => setDeleteCourse(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteCourse}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${courseName} Category`}
            deleteFunction={handledeleteSelectedBranch}
          />
        </AlertDialog>
      </div>
    </>
  );
}

export default AdminBranchesList;
