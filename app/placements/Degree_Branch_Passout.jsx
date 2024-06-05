"use client";
import React, { useEffect, useState } from "react";
import "./Degree_Branch_passout.scss";
import { Skeleton } from "@/components/ui/skeleton";
import { Skranji } from "next/font/google";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";


const Degree_Branch_Passout = () => {
  const [degreeButton, setDegreeButton] = useState("BE/Btech");
  const [branchButton, setBranchButton] = useState("CSE");
  const [passOutButton, setPassOutButton] = useState("2023");
  const [isloading, setisLoading] = useState(true);
  const [iseSelectOpen, setiseSelectOpen] = useState(false);
  const [isBranchOpen, setiseBranchOpen] = useState(false)
  const { data: degreeAndStreamdata, error, isLoading } = useGetAllDegreeAndStreamQuery();
  const { data: yopData, error: yopError, isLoading: IsLoadingYOPError } = useGetAllYearOfPassoutQuery();
  const degreeList = degreeAndStreamdata?.response.degreeList;
  const courseList = degreeAndStreamdata?.response.streamList;
  let degreeCourses = degreeList?.map(item => ({ title: item }));
  let yopList = yopData?.response?.map(item => ({ title: item }));

  const Branch = [
    { title: 'AERONAUTICAL ENGINEERING', key: 'AERO' },
    { title: 'AERONAUTICAL ENGINEERINGNAUTICAL ENGINEERING', key: 'AEE' },
    { title: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING', key: 'AI & ML' },
    { title: 'BIOMEDICAL ENGINEERING', key: 'BioE' },
    { title: 'CIVIL ENGINEERING', key: 'CE' },
    { title: 'COMPUTER SCIENCE AND ENGINEERING', key: 'CS' },
    { title: 'DATA SCIENCE AND ENGINEERING', key: 'DSE' },
    { title: 'ELECTRONICS AND COMMUNICATION ENGINEERING', key: 'E&C' },
    { title: 'HISTORY', key: 'HISTORY' },
    { title: 'INFORMATION TECHNOLOGY', key: 'IT' },
    { title: 'MECHANICAL ENGINEERING', key: 'ME' },
    { title: 'MECHANICAL ENGINEERING TECHNOLOGY', key: 'MEL' },
    { title: 'MICROSYSTEMS ENGINEERING', key: 'MicroE' },
    { title: 'MINING ENGINEERING', key: 'ME' },
    { title: 'POLITICAL SCIENCE', key: 'PS' },
    { title: 'SYSTEMS ENGINEERING', key: 'SE' },
    { title: 'more', key: 'more' }
  ];


  const handleDegreeBar = (title) => {
    setDegreeButton(title);
    if (title === "more") {
      setiseSelectOpen(!iseSelectOpen);
    }
  };
  const handleBranchBar = (title) => {
    setBranchButton(title);
    if (title === "more") {
      setiseSelectOpen(!iseSelectOpen);
    }
  };
  const handlePassOutBar = (title) => {
    setPassOutButton(title);
    if (title === "more") {
      setiseSelectOpen(!iseSelectOpen);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  const handleYearClick = (year) => {
    console.log(`Clicked on year: ${year}`);
  };


  return (
    <section className="mt-2  flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-2">
      {isloading ? (
        <div className="w-[44.219vw]">
          <div className=" rounded-md mt-5">
            <Skeleton className="h-[2.65vw] w-full" />
          </div>
        </div>
      ) : (
        <div className="w-[44.219vw]">
          <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
            Degree
          </p>
          <div className="bg-white h-[2.65vw] flex w-full buttonSection">
            {degreeCourses?.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center w-[7.5vw] py-2  text-[0.63rem]  ${classItem.title === degreeButton ? "activeButton font-medium" : ""
                  } ${classItem.title === 'more' ? "text-[#4987CE]" : "text-[#707070]"
                  }`}
                onClick={() => handleDegreeBar(classItem.title)}
              >
                {classItem.title}
              </button>
            ))}
          </div>
        </div>
      )}
      {isloading ? (
        <div className="w-[29.453vw] mt-5">
          <Skeleton className="h-[2.65vw]" />
        </div>
      ) : (
        <div className="w-[29.453vw]">
          <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
            Branch
          </p>
          <div className="bg-white h-[2.65vw] flex w-full buttonSection">
            {Branch.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center w-[4.219vw] py-2 text-[0.63rem] ${classItem.title === branchButton ? "activeButton font-medium" : ""} ${classItem.key === 'more' ? "text-[#4987CE]" : "text-[#707070]"}`}
                onClick={() => handleBranchBar(classItem.title)}
              >
                {classItem.key}
              </button>
            ))}
          </div>
        </div>
      )}

      {isloading ? (
        <div className="w-[20.313vw] mt-5">
          <Skeleton className="h-[2.65vw]" />
        </div>
      ) : (
        <div className="passout-wrapper">
          <div className="w-[20.313vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">
              Year of passout
            </p>
            <div className="bg-white h-[2.65vw] flex w-full buttonSection">
              {yopList.map((classItem, index) => (
                <button
                  key={index}
                  className={`flex justify-center items-center w-[4.219vw] py-2  text-[0.63rem]  ${classItem.title === passOutButton ? "activeButton font-medium" : ""
                    } ${classItem.title === 'more' ? "text-[#4987CE]" : "text-[#707070]"
                    }`}
                  onClick={() => handlePassOutBar(classItem.title)}
                >
                  {classItem.title}
                </button>
              ))}
            </div>
            {iseSelectOpen && (
              <ul className="additional-years-list ">
                {[2019, 2018, 2017].map((year, index) => (
                  <li key={index} className="flex justify-center items-center w-[4.219vw] py-2 font-medium text-[0.63rem] text-dark-gray my-2.5" onClick={() => handleYearClick(year)}>{year}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Degree_Branch_Passout;
