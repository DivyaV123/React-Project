"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import "./CounserllorFilters.scss";
import StateFilter from "./StateFilter";
import YearFilter from "./YearFilter";
import TimeFilter from "./TimeFilter";
import UniversityFilter from "./UniversityFilter";
import CollegeFilter from "./CollegeFilter";
import DegreeFilter from "./DegreeFilter";
import StreamFilter from "./StreamFilter";
import PercentageFilter from "./PercentageFilter";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";
import { GlobalContext } from "@/components/Context/GlobalContext";
import "./CounsellorFilterModal.scss"


const CounsellorFilterModal = ({ isModalOpen,handleCloseModal }) => {
    const {
        data: degreeAndStreamdata,
        error,
        isLoading,
      } = useGetAllDegreeAndStreamQuery();
      const degreeList = degreeAndStreamdata?.response.degreeList.filter(
        (degree) => degree !== ""
      );
      const streamList = degreeAndStreamdata?.response.streamList.filter(
        (stream) => stream !== ""
      );
      const [activeFilter, setActiveFilter] = useState(null);
  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    if (isModalOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;
  const {
    setFromValue,
    setToValue,
    setSelectedDate,
    setFilteringData,
    setFromYear,
    setToYear,
    setSelectedYop,
    setSelectedBranchFilter,
    setSelectedBranchType,
    setStateItems,
    setSelectedCity,
    setSelectedUniversity,
    setSelectedCollege,
    setSelectedDegrees,
    setSelectedStream,
    setSelectedPercentage,
    setToPercentage,
    setFromPercentage,
    setGenerateLink,
    generatedPath,
    filteringData,
    setCitySearchQuery,
    setCollegeSearchQuery,
    setDegreeSearchQuery,
    setStateSearchQuery,
    setUniversitySearchQuery,
    setYearSearchQuery,
    setStreamSearchQuery,
    emptySearch,
  } = useContext(GlobalContext);


  const filterClass = "text-[#002248] text-[1.25vw] font-semibold mobile:text-[4.651vw]";



  const clearFilters = () => {
    setFilteringData({});
    setFromValue("");
    setToValue("");
    setSelectedDate([]);
    setFromYear("");
    setToYear("");
    setSelectedYop([]);
    setSelectedBranchFilter([]);
    setSelectedBranchType([]);
    setStateItems([]);
    setSelectedCity([]);
    setSelectedUniversity([]);
    setSelectedCollege([]);
    setSelectedDegrees([]);
    setSelectedStream([]);
    setFromPercentage("");
    setToPercentage("");
    setSelectedPercentage(null);
    setCitySearchQuery("");
    setCollegeSearchQuery("");
    setDegreeSearchQuery("");
    setStateSearchQuery("");
    setUniversitySearchQuery("");
    setYearSearchQuery("");
    setStreamSearchQuery("");
  };

  const isEmptyObject = Object.keys(filteringData).length === 0;
  const handleGenerateLink = (e) => {
    if (isEmptyObject) {
      e.preventDefault();
      return;
    }
    setGenerateLink(true);
  };
  const headerData = [
   
    { label: "Year of Passing", component: <YearFilter /> },
    
  ];
  return (
    <div className="CounsellorFilterModal">
      <div className="modal-overlay">
        <div className="modal">
        
          <aside className="filterSidebar myscrollbar  ">
            <div className="flex pb-[2.222vh] px-[1.875vw] mobile:px-[7.875vw] pt-[3.333vh] justify-between filterHeader">
              <div className="flex gap-2">
                <button className={filterClass}>Filter</button>
                {!isEmptyObject || !emptySearch ? (
                  
                  <img
                    src="../../fillfilter.svg"
                    className="cursor-pointer h-[5.186vh] w-[5.186vw]"
                    alt="Filter Icon"
                    onClick={clearFilters}
                    title="Clear All"
                  />
                ) : (
                  <img src="../../filter.svg" alt="Filter Icon" className="cursor-pointer h-[5.186vh] w-[5.186vw]" />
                )}
              </div>
              {isEmptyObject ? (
                <img
                  src="../../icon_link.svg"
                  className={`${filterClass} pointer-events-none opacity-50`}
                />
              ) : (
                <a
                  href={generatedPath}
                  target="_blank"
                  onClick={handleGenerateLink}
                  className={`${filterClass} cursor-pointer`}
                >
                  <img title="Generate Link" src="../../icon_link.svg" />
                </a>
              )}
              <div className="modal-header">
        
          <button className="close-button" onClick={()=>{setActiveFilter(null);handleCloseModal()}}>
            &times;
          </button>
        </div>

            </div>
            <div className="filterOption">
              {headerData.map((item, index) => (
                <div key={index}  className={`filterOption ${activeFilter === item.label ? "selected" : ""}`} onClick={() => setActiveFilter(item.label)}>
                  {item.label}
                </div>
              ))}
            </div>
            {headerData.map(
              (item, index) =>
                activeFilter === item.label && (
                  <div key={index}>{item.component}</div>
                )
            )}
            
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CounsellorFilterModal;
