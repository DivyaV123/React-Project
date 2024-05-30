"use client";
import React from "react";
import "./CounserllorFilters.scss";
import StateFilter from "./StateFilter";
import YearFilter from "./YearFilter";
import TimeFilter from "./TimeFilter";
import UniversityFilter from "./UniversityFilter";
import CollegeFilter from "./CollegeFilter";
import DegreeFilter from "./DegreeFilter";
import StreamFilter from "./StreamFilter";
import PercentageFilter from "./PercentageFilter";
const CounsellorFilters = () => {
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold";
  return (
    <>
      <aside className="filterSidebar myscrollbar">
        <div className="flex pb-[2.222vh] px-[1.875vw] pt-[3.333vh] justify-between filterHeader">
          <div className="flex gap-2">
            <button className={`${filterClass}`}>Filter</button>
            <img src="../../filter.svg" />
          </div>
          <button className={`${filterClass}`}>Clear</button>
        </div>
        <TimeFilter />
        <YearFilter />
        <StateFilter />
        <UniversityFilter />
        <CollegeFilter />
        <DegreeFilter />
        <StreamFilter />
        <PercentageFilter />
      </aside>
    </>
  );
};

export default CounsellorFilters;
