"use client";
import React, { useState } from "react";
import "./Degree_Branch_passout.scss";
const Degree_Branch_Passout = () => {
  const [degreeButton, setDegreeButton] = useState("BE/Btech");
  const [branchButton, setBranchButton] = useState("CSE");
  const [passOutButton, setPassOutButton] = useState("2023");
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
  return (
    <section className="mt-2  flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-2">
      <div className="w-[44.219vw]">
        <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">Degree</p>
        <div className="bg-white h-[2.65vw] flex w-full buttonSection">
          {degreeCourses.map((classItem, index) => (
            <button
              key={index}
              className={`flex justify-center items-center w-[7.5vw] py-2 font-medium text-[0.63rem] text-dark-gray ${
                classItem.title === degreeButton ? "activeButton" : ""
              }`}
              onClick={()=>{setDegreeButton(classItem.title)}}
            >
              {classItem.title}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[29.453vw]">
        <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">Branch</p>
        <div className="bg-white h-[2.65vw] flex w-full buttonSection">
          {Branch.map((classItem, index) => (
            <button
              key={index}
              className={`flex justify-center items-center w-[4.219vw] py-2 font-medium text-[0.63rem] text-dark-gray ${
                classItem.title === branchButton ? "activeButton" : ""
              }`}
              onClick={()=>{setBranchButton(classItem.title)}}
            >
              {classItem.title}
            </button>
          ))}
        </div>
      </div>
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
              onClick={()=>{setPassOutButton(classItem.title)}}
            >
              {classItem.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Degree_Branch_Passout;
