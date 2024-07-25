
'use client'
import Dropdown from '@/components/commonComponents/dropdown/Dropdown'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useContext, useEffect, useState } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import { useGetAllSubjectsQuery } from '@/redux/queries/getAllSubjectsApi';

import { useSubjectAsPerIDQuery } from '@/redux/queries/getSubjectAsPerIDApi';
import { GlobalContext } from '@/components/Context/GlobalContext';

function EditSubjectPage() {
    const router = useRouter();
    const { toast } = useToast()
    const { setIndividualSubjectData} =
    useContext(GlobalContext);

    const {
        data: subjectResponse,
        isLoading: subjectIsLoading,
        error: subjectError,
        
    } = useGetAllSubjectsQuery();

    const [selectedSubjectName, setSelectedSubjectName] = useState("");
    const [selectedSubjectID, setSelectedSubjectID] = useState("")
  
   
  
    const validationSchema = Yup.object({
      
        subject: Yup.string()
       
        .required("Subjects are required"),
        // courseName: Yup.string().required("Course name is required"),
      
        
    });

    const initialValues = {
        
       subject:""
    };
    
    const subjectOptions = []
    subjectResponse?.data?.map((element) => {
        subjectOptions.push({
            label: element.subjectTitle,
            value: element.subjectTitle,
            Id: element.subjectId
        })
    });

    const [subJectID, setSubJectID] = useState("")
    const handleSubjectSelected = (event) => {
        console.log({individualSubject})
        setSubJectID( event.target.option.Id)
        setSelectedSubjectID(event.target.options)
       console.log(event.target)
        const selectedSubjectName = event.target.value;
       
        setSelectedSubjectName(selectedSubjectName);
        formikDetails.setFieldValue("subject", event.target.value);

       
    };
    // useEffect(() => {
    //     if (subJectID) {
    //         // Call the useSubjectAsPerIDQuery here
    //         useSubjectAsPerIDQuery({ id: subJectID });
    //         console.log({subJectID})
    //     }
    // }, [subJectID]);
    const { data: individualSubject, error, isLoading } = useSubjectAsPerIDQuery({ id: subJectID},{skip:!subJectID});

      // Fetch the individual subject when selectedSubjectID changes
    // useEffect(() => {
    //     if (subJectID) {
    //         const fetchSubject = async () => {
    //             const { data, error } =  useSubjectAsPerIDQuery({ id: subJectID });
    //             if (error) {
    //                 console.error(error);
    //             } 
    //         };
    //         fetchSubject();
    //     }
    // }, [subJectID]);
   

    
    const formikDetails = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
           
            if (subJectID) {
                try {
                   
                    setIndividualSubjectData(individualSubject?.data)
                    router.push('/subjectAdder');
                    
                   
                } catch (err) {
                    console.log(err)
                    toast({
                        variant:"destructive",
                        title: (
                          <span className=" font-bold  "> Sometrhing went wrong</span>
                        ),
                      });
                }
            } 
           
           
        },
    });

   


    const commonLabelStyles = "pb-[1.111vh]";
    return (
        <>
            <MaxWebWidth sectionStyling='p-8' articalStyling='border border-gray-300 p-8 rounded-xl'>
                <div>
                    <form onSubmit={formikDetails.handleSubmit}>
                        
                       
                        <div className='p-8 border border-gray-200 rounded-xl'>
                            <div className='flex '>
                                <div className='w-[28vw]'>
                                    

                                   
                                <p className='pb-[1.111vh]'>Subject</p>
                                <Dropdown
                                
                                    sectionStyle="my-section-style"
                                    name="subject"
                                    value={selectedSubjectName}
                                    onChange={handleSubjectSelected}
                                    placeholder="Select the Subject"
                                    options={subjectOptions}
                                />
                                {formikDetails.touched.subject && formikDetails.errors.subject ? (
                                    <div className="text-red-500 text-sm ">
                                        {formikDetails.errors.subject}
                                    </div>
                                ) : null}
                            
                                </div>
                             
                            </div>
                        </div>
                        <div className="flex justify-end mt-8">
                            <button
                                type="submit"
                                className="py-2 px-4 bg-gradient rounded-md text-white"
                            >
                               Edit Subject
                            </button>
                        </div>
                    </form>
                </div>
                <Toaster/>
            </MaxWebWidth>
        </>
    )
}

export default EditSubjectPage