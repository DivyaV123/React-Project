'use client'
import Input from '@/components/commonComponents/input/Input'
import React, { useEffect, useState ,useContext} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Dialog, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useGetAllTrainersQuery } from '@/redux/queries/getAllTrainersApi';
import Button from '@/components/commonComponents/button/Button';
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import { truncateText } from '@/lib/utils';
import { usePathname } from "next/navigation";
import CommonDialog from '@/components/commonComponents/adminDialog/CommonDialog';
import Dropdown from '@/components/commonComponents/dropdown/Dropdown';
import { useGetAllBranchesQuery } from '@/redux/queries/getAllBranchData';
import { useGetAllCoursesQuery } from '@/redux/queries/getAllCourseForAdmin';
import { useGetAllSubjectsQuery } from '@/redux/queries/getAllSubjectsApi';
import PhoneInput from "react-phone-input-2";
import { useAddTrainerMutation } from '@/redux/queries/addTrainerApi';
import { useTrainerDeleteMutation } from '@/redux/queries/deleteTrainerApi';
import { AlertDialog } from "@/components/ui/alert-dialog";
import DeleteWarningPopup from '@/components/commonComponents/deleteWarningPopup/DeleteWarningPopup';
import { GlobalContext } from '@/components/Context/GlobalContext';

function TrainerLandingPage() {
    const [editData, setEditData] = useState(null);
    const [error, setError] = useState({ phone: false, validPhone: false });
    const [isClient, setIsClient] = useState(false);
    const [addTrainerForm, setAddTrainerForm] = useState(false);
    const [phoneValue, setPhoneValue] = useState();
    const [countryCode, setCountryCode] = useState("");
    const [isEditMode, setIsEditMode] = useState(false); 
    const tableHeaders = [
        "TRAINER NAME",
        "BRANCH",
        "SUBJECT",
        "EMAIL",
        "PHONE",
        "ACTIONS"
    ];
    const tblTextClass = "text-[#6E6E6E] font-medium text-[0.75rem] cursor-pointer";
    const pStyle = " text-[1.094vw] font-medium pb-[1.389vh]";
    const commonFieldClass = "pb-1 text-semibold"
    const pathname = usePathname();
    const getParams = pathname.split("/").slice(2);
    const [instituteParam] = getParams[0].split(",").slice(1);
    const [selectedBranches, setSelectedBranches] = useState({
        selectedId: [],
        selectedName: []
    })
    const [selectedSubjects, setSelectedSubjects] = useState({
        selectedId: [],
        selectedName: []
    })
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const handleMouseEnter = (index) => setDropdownOpen(index);
    const handleMouseLeave = () => setDropdownOpen(null);
         const { domainVariable } = useContext(GlobalContext);
      let domain = domainVariable === "Qspiders" ? "qspiders" : domainVariable === "Jspiders" ? "jspiders" : domainVariable === "Pyspiders" ? "pyspiders" : "bspiders"
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
    const { data: trainersData, refetch: trainersRefetch } = useGetAllTrainersQuery();
    const { data: allSubjectData, refetch: subjectRefetch } = useGetAllSubjectsQuery();
    const { data: branchData, refetch: branchRefetch } = useGetAllBranchesQuery(domain);
    const [
        addTrainer,
        {
            data: addTrainerResponse,
            error: addTrainerError,
            isLoading: addTrainerLoading,
        },
    ] = useAddTrainerMutation();
    const [
      deleteSelectedTrainer,
      {  isLoading: trainerDeleteLoad },
    ] = useTrainerDeleteMutation();
    const initialValues = {
        trainerName: "",
        branch: [],
        subject: [],
        gmail: [],
        phone: []
    };

    const validationSchema = Yup.object({
        trainerName: Yup.string().required("Trainer Name is required"),
        branch: Yup.array()
            .of(Yup.string().required('Branch is required'))
            .min(1, 'At least one branch is required'),
        subject: Yup.array()
            .of(Yup.string().required('Subject is required'))
            .min(1, 'At least one subject is required'),
        phone: Yup.array()
            .of(Yup.string().required("Mobile number is required"))
            .min(1, "At least one phone number is required"),
        gmail: Yup.array()
            .min(1, "At least one gmail is required")
            .of(Yup.string().email("Invalid email").required("Gmail is required")),
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

    const filteredBranches = [];
    branchData?.data?.forEach((country) => {
        country.cities.forEach((city) => {
            city.courses.forEach((course) => {
                const matchingBranches = course.branches.filter(
                    (branch) => branch.organizationType === initialOrgType
                );
                filteredBranches.push(...matchingBranches);
            });
        });
    });

    // const branchOptions = [];
    // filteredBranches?.map((item) => {
    //     branchOptions.push({
    //         label: item.branchName,
    //         value: item.branchName,
    //         Id: item.branchId,
    //     });
    // });
    const branchOptions = [];

    const uniqueBranches = new Set();
    
    filteredBranches?.forEach((item) => {
        if (!uniqueBranches.has(item.branchId)) {
         
          uniqueBranches.add(item.branchId); 
          branchOptions.push({
            label: item.branchName,
            value: item.branchName,
            Id: item.branchId,
          });
        }
      });
      
    
    const subjectOptions = [];
    allSubjectData?.data?.map((item) => {
        subjectOptions.push({
            label: item.subjectTitle,
            value: item.subjectTitle,
            Id: item.subjectId,
        });
    });
    const footerBtnClick = () => {
        formikDetails.handleSubmit();
    };

    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            let phone = [];

            if (values.phone) {
                values.phone.map((num) => {
                    let countryCode = `+${num.slice(0, 2)}`;
                    let phoneNumber = +num.slice(2);
                    phone.push({
                        countryCode: countryCode,
                        phoneNumber: phoneNumber
                    });
                });
            }

            let payload = {
                trainerName: values.trainerName,
                trainerEmails: values.gmail,
                contacts: phone,
                branches: selectedBranches.selectedId,
                subjects: selectedSubjects.selectedId
            }
            try {
                const resp = await addTrainer(payload).unwrap();
                setAddTrainerForm(false)
                formikDetails.resetForm
                trainersRefetch()
            } catch (err) {
                console.log(err)
            }
        }
    });
    const handleMultiSelect = (event, type) => {
        if (type === "branch") {
            const selectedValues = event.target.value;
            const selectedIds = selectedValues.map(value => {
                const option = event.target.options.find(opt => opt.value === value);
                return option ? option.Id : null;
            }).filter(id => id !== null);

            setSelectedBranches({
                selectedName: selectedValues,
                selectedId: selectedIds
            });
            formikDetails.setFieldValue("branch", selectedValues)
        } else if (type == "subject") {
            const selectedValues = event.target.value;
            const selectedIds = selectedValues.map(value => {
                const option = event.target.options.find(opt => opt.value === value);
                return option ? option.Id : null;
            }).filter(id => id !== null);

            setSelectedSubjects({
                selectedName: selectedValues,
                selectedId: selectedIds
            });
            formikDetails.setFieldValue("subject", selectedValues)
        }
    };
    const [phoneError, setPhoneError] = useState('');
    const [gmailError, setGmailError] = useState('');

   
    const handleAddPhone = () => {
      const phoneFields = formikDetails.values.phone;
  
      // Allow adding the first phone field if there are none
      if (phoneFields.length === 0) {
          formikDetails.setFieldValue('phone', ['']);
          setPhoneError('');
      } else {
          const lastPhoneField = phoneFields[phoneFields.length - 1];
  
          // Check if
          const phoneWithoutCountryCode = lastPhoneField.replace(/^\+\d+/, ''); 
          const isPhoneValid = phoneWithoutCountryCode.length === 12; 
  
          if (lastPhoneField.trim() === '' || !isPhoneValid) {
              if (lastPhoneField.trim() === '') {
                  setPhoneError('Please fill the current phone field before adding another.');
              } else {
                  setPhoneError('Enter valid phone number');
              }
          } else {
              setPhoneError('');
              formikDetails.setFieldValue('phone', [...phoneFields, '']);
          }
      }
  };
  const handleAddGmail = () => {
    const gmailFields = formikDetails.values.gmail;

    // Allow adding the first Gmail field if there are none
    if (gmailFields.length === 0) {
        formikDetails.setFieldValue('gmail', ['']);
        setGmailError('');
    } else {
        const lastGmailField = gmailFields[gmailFields.length - 1];

        // Check if the last Gmail field is empty
        if (lastGmailField.trim() === '') {
            setGmailError('Please fill the current Gmail field before adding another.');
        } else {
            setGmailError('');
            formikDetails.setFieldValue('gmail', [...gmailFields, '']);
        }
    }
};

    const mapSubjectForm = () => {
        return (
            <section>
                <div className='pb-2'>
                    <p className={pStyle}>Trainer Name</p>
                    <Input
                        onChange={formikDetails.handleChange}
                        onBlur={formikDetails.handleBlur}
                        value={formikDetails.values.trainerName}
                        name="trainerName"
                        placeholder="Enter Subject name"
                    />
                    {formikDetails.touched.trainerName &&
                        formikDetails.errors.trainerName ? (
                        <div className="text-red-500 text-[0.6rem] ">
                            {formikDetails.errors.trainerName}
                        </div>
                    ) : null}
                </div>
                <div className='pb-2'>
                    <label className={pStyle} htmlFor="branch">Branch</label>
                    <Dropdown
                        placeholder="Select Branch"
                        inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
                        iconStyle="w-[10%]"
                        options={branchOptions}
                        name="branch"
                        multi
                        value={formikDetails.values.branch}
                        onChange={(e) => { handleMultiSelect(e, "branch") }}
                    />
                    {formikDetails.touched.branch && formikDetails.errors.branch ? (
                        <div className="text-red-500 text-[0.6rem]">
                            {formikDetails.errors.branch}
                        </div>
                    ) : null}
                </div>
                <div className='pb-2'>
                    <label className={pStyle} htmlFor="subject">Subject</label>
                    <Dropdown
                        placeholder="Select subject"
                        inputStyle=" h-[2.813vw] text-[12px] text-gray-400"
                        iconStyle="w-[10%]"
                        options={subjectOptions}
                        name="subject"
                        multi
                        value={formikDetails.values.subject}
                        onChange={(event) => { handleMultiSelect(event, "subject") }}
                    />
                    {formikDetails.touched.subject && formikDetails.errors.subject ? (
                        <div className="text-red-500 text-[0.6rem]">
                            {formikDetails.errors.subject}
                        </div>
                    ) : null}
                </div>

                <div className='pb-2'>
                    <p className={pStyle}>Phone</p>
                    {formikDetails.values.phone.map((phone, index) => (
                        <div key={index} className="flex  pb-3 items-center gap-2">
                            <PhoneInput
                                inputStyle={{ width: "20.438vw", height: "2.813vw", fontSize: "12px", padding: "12px", border: "1px solid #EEEEEE", borderRadius: "4px" }}
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
                                    if (updatedPhones.length === 0 || updatedPhones[updatedPhones.length - 1].trim() !== '') {
            setPhoneError('');
        }
                                }}
                            />
                        </div>
                    ))}
                    <Button
                        title='+ Phone'
                        type="button"
                        className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-green-500'
                        onClick= {handleAddPhone}
                        disabled={phoneError !== ''}

                    />
 {phoneError && (
                    <div className="text-red-500 text-[0.6rem]">
                        {phoneError}
                    </div>
                )}
                    {formikDetails.errors.phone &&
                        formikDetails.touched.phone && !phoneError &&  (
                            <div className="text-red-500 text-[0.6rem]">
                                {formikDetails.errors.phone}
                            </div>
                        )}
                </div>
                <div className=''>
                    <p className={pStyle}>Gmail</p>
                    {formikDetails.values.gmail.map((gmail, index) => (
                        <div key={index} className="flex justify-between pb-3 items-center gap-2">
                            <Input
                                inputStyle="!w-[20.438vw] h-[2.813vw]  text-[12px]"
                                name={`gmail[${index}]`}
                                value={gmail}
                                handleBlur={formikDetails.handleBlur}
                                onChange={(e)=>{formikDetails.handleChange(e);setGmailError("")}}
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
                                    if (updatedGmails.length === 0 || updatedGmails[updatedGmails.length - 1].trim() !== '') {
            setGmailError('');
        }
                                }}

                              
                            />
                        </div>
                    ))}
                    <Button
                        title='+ Gmail'
                        type="button"
                        className='px-[0.625vw] py-[0.833vh] text-[1.094vw] font-medium rounded-md text-white bg-green-500'
                        onClick={handleAddGmail}
                    />
                     {gmailError && (
        <div className="text-red-500 text-[0.6rem]">
            {gmailError}
        </div>
    )}
                    {formikDetails.touched.gmail &&
                        formikDetails.errors.gmail && !gmailError ? (
                        <div className="text-red-500 text-[0.6rem]">
                            {formikDetails.errors.gmail}
                        </div>
                    ) : null}
                </div>

            </section>
        );
    };
  

    const handleEditClick = (trainer) => {
        setEditData(trainer);
        setIsEditMode(true); 
        setAddTrainerForm(true);
    };

    const handleAddClick = () => {
        setIsEditMode(false); 
        setAddTrainerForm(true);
        setEditData(null); 
        formikDetails.resetForm();
    };
   

    const [trainerName, setTrainerName] = useState("");
    const [trainerID, setTrainerID] = useState("");
    const [deleteTrainer, setDeleteTrainer] = useState(false);
    const deleteICon = "/illustrate_delete.svg";
    const handleDeleteClick = (id, trainerName) => () => {
      setTrainerName(trainerName);
      setTrainerID(id);
      setDeleteTrainer(true);
    };
    const handleDeleteSelectedCourse = async () => {
      
      try {
        const response = await deleteSelectedTrainer({trainerId:trainerID }).unwrap();
        setDeleteTrainer(false);
        batchDataRefetch();
      } catch (err) {
        console.error(err);
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
                            type='button'
                            onClick={handleAddClick}
                            className="cursor-pointer bg-gradient text-white py-[1.389vh] px-[0.938vw] text-[#6E6E6E] text-[1.094vw] rounded-lg mr-[1.875vw]"
                        >+ Trainer</button>
                    </DialogTrigger>
                </article>
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
                                {trainersData?.data?.map((ele, index) => (
                                    <TableRow key={index}>
                                        <TableCell className={tblTextClass}>
                                            {ele.trainerName}
                                        </TableCell>
                                       
                                        <TableCell className={tblTextClass}>
                    {ele.branchs.length === 0 ? (
                      ele.branchs.length
                    ) : ele.branchs.length === 1 ? (
                      ele.branchs.map((branches) =>branches.branchName)
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.branchs
                          .slice(0, 1)
                          .map((branches) => branches.branchName)}
                        {ele.branchs.length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.branchs.length - 1}
                            </button>
                            {dropdownOpen === index && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.branchs
                                  .slice(1)
                                  .map((branches, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {branches.branchName}
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
                    {ele.subjects.length === 0 ? (
                      ele.subjects.length
                    ) : ele.subjects.length === 1 ? (
                      ele.subjects.map((subject) =>subject?.subjectName)
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.subjects
                          .slice(0, 1)
                          .map((subject) => subject?.subjectName)}
                        {ele.subjects.length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() => handleMouseEnter(`sub-${index}`)}
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.subjects.length - 1}
                            </button>
                            {dropdownOpen === `sub-${index}` && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.subjects
                                  .slice(1)
                                  .map((subject, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {subject?.subjectName}
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
                    {ele.trainerEmail.length === 0 ? (
                      ele.trainerEmail.length
                    ) : ele.trainerEmail.length === 1 ? (
                      ele.trainerEmail.map((trainermail) =>trainermail?.email)
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.trainerEmail
                          .slice(0, 1)
                          .map((trainermail) => trainermail?.email)}
                        {ele.trainerEmail.length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() => handleMouseEnter(`subTrainer-${index}`)}
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.trainerEmail.length - 1}
                            </button>
                            {dropdownOpen === `subTrainer-${index}` && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.trainerEmail
                                  .slice(1)
                                  .map((trainermail, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {trainermail?.email}
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
                    {ele.phoneNumber.length === 0 ? (
                      ele.phoneNumber.length
                    ) : ele.phoneNumber.length === 1 ? (
                      ele.phoneNumber.map((phoneNumber) =>phoneNumber?.phoneNumber)
                    ) : (
                      <div className="flex space-x-2 items-center">
                        {ele.phoneNumber
                          .slice(0, 1)
                          .map((phoneNumber) => phoneNumber?.phoneNumber)}
                        {ele.phoneNumber.length > 1 && (
                          <div className="relative">
                            <button
                              className="ml-1.5 bg-[#FFF2E8] rounded-md px-1 py-1 font-medium text-[0.938vw] hover:bg-[#FF7B1B] hover:text-white"
                              onMouseEnter={() => handleMouseEnter(`phoneNumber-${index}`)}
                              onMouseLeave={handleMouseLeave}
                            >
                              + {ele.phoneNumber.length - 1}
                            </button>
                            {dropdownOpen === `phoneNumber-${index}` && (
                              <div className="absolute bg-white border mt-2 rounded-md shadow-lg z-10 w-max">
                                {ele.phoneNumber
                                  .slice(1)
                                  .map((phoneNumber, idx) => (
                                    <div key={idx} className="px-2 py-1">
                                      {phoneNumber?.phoneNumber}
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
                                           
                                                <DialogTrigger asChild>
                                                    <button
                                                        // onClick={() => handleEditClick(ele)}
                                                        className="mr-2 text-blue-500 hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                </DialogTrigger>
                                           
                                            <button
                                                // onClick={handleDeleteClick(
                                                //     ele.trainerId,
                                                //     ele.trainerName
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
                {addTrainerForm && (
                    <CommonDialog
                        header={editData?"Edit Trainer":"Add new Trainer" }
                        footerBtnTitle={editData ? "Update" : "Add Trainer"}
                        formfn={mapSubjectForm}
                        footerBtnClick={footerBtnClick}
                        dialogCloseClick={() => {setAddTrainerForm(false);setEditData(null)}}
                    />
                )}
            </Dialog>
            <AlertDialog
          open={deleteTrainer}
          onOpenChange={(open) => setDeleteTrainer(open)}
        >
          <DeleteWarningPopup
            header="Delete"
            icon={deleteICon}
            setDeleteCategory={setDeleteTrainer}
            btnText="Delete"
            contentText={`Are you sure you want to delete ${trainerName} trainer`}
            deleteFunction={handleDeleteSelectedCourse}
          />
        </AlertDialog>
        </>
    )
}

export default TrainerLandingPage