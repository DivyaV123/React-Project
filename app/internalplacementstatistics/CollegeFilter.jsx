"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCollegesQuery } from "@/redux/queries/getAllColleges";

const CollegeFilter = () => {
  const { handleCounsellorCommonFilter, universitySelected,selectedCollege, setSelectedCollege ,collegeSearchQuery,setCollegeSearchQuery,} = useContext(GlobalContext);


  const { data: collegeData, refetch } =
    useGetAllCollegesQuery(universitySelected);
  const collegeList = collegeData?.response
    .filter((college) => college !== "")
    .filter((college) =>
      college.toLowerCase().includes(collegeSearchQuery.toLowerCase())
    );
  useEffect(() => {
    refetch();
  }, [universitySelected]);

  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={item}
      label={item}
      checked={selectedCollege.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,
          selectedCollege,
          setSelectedCollege,
          collegeData,
          "college"
        )
      }
    />
  );

  return (
    <div className="px-[1.875vw] pt-[2.778vh]">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">College</p>
        <img src="../../down.svg" />
      </div>
      <div className="search-container pb-[1.111vh]">
        <input
          type="text"
          placeholder="Search..."
          className="text-[0.781vw]"
          value={collegeSearchQuery}
          onChange={(e) => setCollegeSearchQuery(e.target.value)}
        />
        <div className="search-icon"></div>
      </div>
      <ExpandableList
        items={collegeList}
        renderItem={(item, index) => renderCheckbox(item, index)}
      />
    </div>
  );
};

export default CollegeFilter;
