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

const CounsellorFilters = () => {
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
    emptySearch
  } = useContext(GlobalContext);

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
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold";

  const [isPercentageFilterVisible, setIsPercentageFilterVisible] =
    useState(false);
  const collegeFilterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPercentageFilterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1.0 }
    );

    if (collegeFilterRef.current) {
      observer.observe(collegeFilterRef.current);
    }

    return () => {
      if (collegeFilterRef.current) {
        observer.unobserve(collegeFilterRef.current);
      }
    };
  }, []);

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
    setCitySearchQuery('')
    setCollegeSearchQuery('')
    setDegreeSearchQuery('')
    setStateSearchQuery('')
    setUniversitySearchQuery('')
    setYearSearchQuery('')
    setStreamSearchQuery('')
  };

  const isEmptyObject = Object.keys(filteringData).length === 0;
  const handleGenerateLink = (e) => {
    if (isEmptyObject) {
      e.preventDefault();
      return;
    }
    setGenerateLink(true);
  };

  return (
    <aside className="filterSidebar myscrollbar">
      <div className="flex pb-[2.222vh] px-[1.875vw] pt-[3.333vh] justify-between filterHeader">
        <div className="flex gap-2">
          <button className={filterClass}>Filter</button>
          {!isEmptyObject || !emptySearch ? (
            <img
            src="../../fillfilter.svg"
            className="cursor-pointer"
            alt="Filter Icon"
            onClick={clearFilters}
          />
            
          ) : (
            <img src="../../filter.svg" alt="Filter Icon" />
          )}
        </div>
        {isEmptyObject ? (
          <button className={`${filterClass} pointer-events-none opacity-50`}>
            Generate Link
          </button>
        ) : (
          <a
            href={generatedPath}
            target="_blank"
            onClick={handleGenerateLink}
            className={`${filterClass} cursor-pointer`}
          >
            Generate Link
          </a>
        )}
      </div>
      <TimeFilter isLoading={isLoading} />
      <>
        <YearFilter />
        <StateFilter />
        <UniversityFilter />
        <div ref={collegeFilterRef}>
          <CollegeFilter />
        </div>
        <DegreeFilter degreeList={degreeList} />
        <StreamFilter streamList={streamList} />
        {isPercentageFilterVisible && <PercentageFilter />}
      </>
    </aside>
  );
};

export default CounsellorFilters;
