"use client";
import React, { useContext, useEffect } from "react";
import "./CounserllorFilters.scss";
import StateFilter from "./StateFilter";
import YearFilter from "./YearFilter";
import TimeFilter from "./TimeFilter";
import UniversityFilter from "./UniversityFilter";
import CollegeFilter from "./CollegeFilter";
import DegreeFilter from "./DegreeFilter";
import StreamFilter from "./StreamFilter";
import PercentageFilter from "./PercentageFilter";
import FilterSkeleton from "@/components/skeletons/FilterSkeleton";
import { useGetAllDegreeAndStreamQuery } from "@/redux/queries/getDegreeAndStream";

const CounsellorFilters = () => {
  const { data: degreeAndStreamdata, error, isLoading } = useGetAllDegreeAndStreamQuery();
  const degreeList = degreeAndStreamdata?.response.degreeList.filter(degree => degree !== "")
  const streamList = degreeAndStreamdata?.response.streamList.filter(stream => stream !== "");
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold";

  return (
    <aside className="filterSidebar myscrollbar">
      <div className="flex pb-[2.222vh] px-[1.875vw] pt-[3.333vh] justify-between filterHeader">
        <div className="flex gap-2">
          <button className={filterClass}>Filter</button>
          <img src="../../filter.svg" alt="Filter Icon" />
        </div>
        <button className={filterClass}>Clear</button>
      </div>
      <TimeFilter isLoading={isLoading} />
      {/* {isLoading ? (
        <FilterSkeleton />
      ) : ( */}
      <>
        <YearFilter />
        <StateFilter />
        <UniversityFilter />
        <CollegeFilter />
        <DegreeFilter degreeList={degreeList} />
        <StreamFilter streamList={streamList} />
        <PercentageFilter />
      </>
      {/* )} */}
    </aside>
  );
};

export default CounsellorFilters;
