"use client";
import React, { useEffect, useState } from "react";
import "./Degree_Branch_passout.scss";
import { Skeleton } from "@/components/ui/skeleton";
import { Skranji } from "next/font/google";
const Degree_Branch_Passout = () => {
  const [degreeButton, setDegreeButton] = useState("BE/Btech");
  const [branchButton, setBranchButton] = useState("CSE");
  const [passOutButton, setPassOutButton] = useState("2023");
  const [isloading, setisLoading] = useState(true);
  const [iseSelectOpen, setiseSelectOpen] = useState(false);
  const degreeCourses = [
    { title: "BE/Btech" },
    {
      title: "BSC/BCA",
    },
    {
      title: "MCA",
    },
    {
      title: "ME/Mtech",
    },
    {
      title: "B.com",
    },
    {
      title: "MBA",
    },
    {
      title: "more",
    },
  ];
  const Branch = [
    {
      title: "CSE",
    },
    {
      title: "ISE",
    },
    {
      title: "ECE",
    },
    {
      title: "EEE",
    },
    {
      title: "Mech",
    },
    {
      title: "Civil",
    },
    {
      title: "more",
    },
  ];
  const Passout = [
    {
      title: "2023",
    },
    {
      title: "2022",
    },
    {
      title: "2021",
    },
    {
      title: "2020",
    },
    {
      title: "more",
    },
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
            {degreeCourses.map((classItem, index) => (
              <button
                key={index}
                className={`flex justify-center items-center w-[7.5vw] py-2 font-medium text-[0.63rem] text-dark-gray ${
                  classItem.title === degreeButton ? "activeButton" : ""
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
                className={`flex justify-center items-center w-[4.219vw] py-2 font-medium text-[0.63rem] text-dark-gray ${
                  classItem.title === branchButton ? "activeButton" : ""
                }`}
                onClick={() => handleBranchBar(classItem.title)}
              >
                {classItem.title}
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
          {Passout.map((classItem, index) => (
            <button
              key={index}
              className={`flex justify-center items-center w-[4.219vw] py-2 font-medium text-[0.63rem] text-dark-gray ${
                classItem.title === passOutButton ? "activeButton" : ""
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
