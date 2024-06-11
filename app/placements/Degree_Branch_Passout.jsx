"use client";
import React, { useEffect, useState } from "react";
import "./Degree_Branch_passout.scss";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";

export const branchAbbreviations = {
  "Aero Space Engineering": "Aero",
  "Aeronautical Engineering(AE)": "AE",
  "Architecture": "Arch",
  "Automation and Robotics": "AutoRob",
  "Automobile": "Auto",
  "BCA": "BCA",
  "Bio Medical(BM)": "BM",
  "Bio Technology(BT)": "BT",
  "Biotechnology": "BT",
  "Business Leadership Program (BLP)": "BLP",
  "CBZ (Chemistry Botany Zoology)": "CBZ",
  "Ceramics and Cement": "CerCem",
  "Chemical": "Chem",
  "Civil": "Civil",
  "Computer Science": "CS",
  "Computer Science(CS)": "CS",
  "Construction Technology Management(CTM)": "CTM",
  "Electrical & Electronics(EEE)": "EEE",
  "Electronics & Communication(E&C)": "E&C",
  "Electronics & Instrumentation Technology": "EIT",
  "Environmental": "Env",
  "Finance": "Fin",
  "Human Resource": "HR",
  "Human Resources Leadership Program (HRLP)": "HRLP",
  "Industrial Engineering Management(IEM)": "IEM",
  "Industrial Production(IP)": "IP",
  "Information Science": "IS",
  "Information Science(IS)": "IS",
  "Information Technology": "IT",
  "Instrumentation Technology(IT)": "IT",
  "Marketing": "Mkt",
  "Marketing Leadership Program (MLP)": "MLP",
  "Master in Computer Applications": "MCA",
  "Master of Arts (Economics)": "MA Econ",
  "Master of Arts (Rural Development)": "MA RD",
  "Master of Arts in Economics": "MA Econ",
  "Master of Arts in English": "MA Eng",
  "Master of Business Administration": "MBA",
  "Master of Business Administration (Banking & Finance)": "MBA BF",
  "Master of Commerce": "MCom",
  "Master of Computer Application": "MCA",
  "Master of Education (M.Ed.)": "M.Ed.",
  "Masters of Arts (Public Administration)": "MA PA",
  "Master’s Degree in Economics": "MDE",
  "Master’s Degree in Mathematics": "MDM",
  "Mechanical(ME)": "ME",
  "Mechatronics": "Mech",
  "Medical Electronics(ML)": "ML",
  "Microbiology": "Micro",
  "Mining": "Min",
  "Other": "Other",
  "P.G. Diploma in Environmental & Sustainable Development": "PGDESD",
  "PCM (Physics Chemistry Maths)": "PCM",
  "PMCS (Physics mathematics and Computer science)": "PMCS",
  "PME (Physics Maths Electronics)": "PME",
  "Polymer Technology": "Poly",
  "Post Graduate Diploma in Computer Application": "PGDCA",
  "Post Graduate Diploma in Environmental Studies": "PGDES",
  "Post Graduate Diploma in Library Automation and Networking": "PGDLAN",
  "Telecomm(TCE)": "TCE",
  "Textiles": "Text"
};

const Degree_Branch_Passout = () => {
  const [degreeButton, setDegreeButton] = useState("BA");
  const [branchButton, setBranchButton] = useState("Aero");
  const [passOutButton, setPassOutButton] = useState("2023");
  const [isLoading, setIsLoading] = useState(true);
  const [isDegreeMoreOpen, setIsDegreeMoreOpen] = useState(false);
  const [isBranchMoreOpen, setIsBranchMoreOpen] = useState(false);
  const [isPassOutMoreOpen, setIsPassOutMoreOpen] = useState(false);
  
  const { data: degreeAndStreamdata, error, isLoading: isLoadingDegreeAndStream } = useGetAllDegreeAndStreamQuery();
  const { data: yopData, error: yopError, isLoading: isLoadingYOP } = useGetAllYearOfPassoutQuery();
  
  const [degreeList, setDegreeList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  const [yopList, setYopList] = useState([]);
  
  useEffect(() => {
    if (degreeAndStreamdata) {
      setDegreeList(degreeAndStreamdata.response.degreeList);
      setBranchList(degreeAndStreamdata.response.streamList);
    }
    if (yopData) {
      setYopList(yopData.response);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [degreeAndStreamdata, yopData]);

  const handleToggleMore = (setMoreOpen) => {
    setMoreOpen(prevState => !prevState);
  };

  const handleItemClick = (item, items, setItems, setButtonState) => {
    const index = items.indexOf(item);
    if (index >= 6) {
      const newItems = [...items];
      const temp = newItems[5];
      newItems[5] = newItems[index];
      newItems[index] = temp;
      setItems(newItems);
      setButtonState(newItems[5]);
    } else {
      setButtonState(item);
    }
  };

  const renderButtonSection = (items, buttonState, setButtonState, moreState, setMoreState, setItems, abbreviations) => (
    <div className="bg-white h-[2.65vw] flex w-full buttonSection relative">
      {items.slice(0, 6).map((item, index) => (
        <button
          key={index}
          className={`flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] ${item === buttonState ? "activeButton font-medium" : ""}`}
          onClick={() => setButtonState(item)}
        >
          {abbreviations[item] || item}
        </button>
      ))}
      {items.length > 6 && (
        <button
          className="flex justify-center items-center w-[7.5vw] py-2 text-[0.63rem] text-[#4987CE]"
          onClick={() => handleToggleMore(setMoreState)}
        >
          {moreState ? "Less" : "More"}
        </button>
      )}
      {moreState && (
        <ul className="additional-years-list">
          {items.slice(6).map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-[4.219vw] py-2 text-[0.63rem] text-[#707070] font-medium"
              onClick={() => {
                handleItemClick(item, items, setItems, setButtonState);
                setMoreState(false); 
              }}
            >
              {abbreviations[item] || item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section className="mt-2 flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-2">
      {isLoading ? (
        <>
          <Skeleton className="w-[44.219vw] h-[2.65vw] mt-5" />
          <Skeleton className="w-[29.453vw] h-[2.65vw] mt-5" />
          <Skeleton className="w-[20.313vw] h-[2.65vw] mt-5" />
        </>
      ) : (
        <>
          <div className="w-[31.328vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">Degree</p>
            {renderButtonSection(degreeList, degreeButton, setDegreeButton, isDegreeMoreOpen, setIsDegreeMoreOpen, setDegreeList, {})}
          </div>
          <div className="w-[31.328vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">Branch</p>
            {renderButtonSection(branchList, branchButton, setBranchButton, isBranchMoreOpen, setIsBranchMoreOpen, setBranchList, branchAbbreviations)}
          </div>
          <div className="w-[31.328vw]">
            <p className="text-[0.75rem] text-[#002248] font-medium pl-1 pb-1">Year of passout</p>
            {renderButtonSection(yopList, passOutButton, setPassOutButton, isPassOutMoreOpen, setIsPassOutMoreOpen, setYopList, {})}
          </div>
        </>
      )}
    </section>
  );
};

export default Degree_Branch_Passout;
