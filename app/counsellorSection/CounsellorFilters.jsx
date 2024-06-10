"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const degreeList = degreeAndStreamdata?.response.degreeList.filter(degree => degree !== "");
  const streamList = degreeAndStreamdata?.response.streamList.filter(stream => stream !== "");
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold";
  
  const [isPercentageFilterVisible, setIsPercentageFilterVisible] = useState(false);
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
