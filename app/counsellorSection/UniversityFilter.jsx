"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "./ExpandableList";
import "./CounserllorFilters.scss";
import { useGetAllUniversitiesQuery } from "@/redux/queries/getAllUniversities";
import { GlobalContext } from "@/components/Context/GlobalContext";

const UniversityFilter = () => {
  const [selectedUniversity, setSelectedUniversity] = useState([]);
  const { handleCommonFilter } = useContext(GlobalContext);
  const { data: universityData } = useGetAllUniversitiesQuery();
  const universityList = universityData?.response.filter(university => university !== "");

  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={index}
      label={item}
      checked={selectedUniversity.includes(index)}
      onChange={() =>
        handleCommonFilter(index, selectedUniversity, setSelectedUniversity, universityList, "university")
      }
    />
  );

  return (
    <div className="px-[1.875vw] pt-[2.778vh]">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">University</p>
        <img src="../../down.svg" />
      </div>
      <div className="search-container pb-[1.111vh]">
        <input type="text" placeholder="search..." className="text-[0.781vw]" />
        <div className="search-icon"></div>
      </div>
      <ExpandableList
        items={universityList}
        renderItem={(item, index) => renderCheckbox(item, index)}
      />
    </div>
  );
};

export default UniversityFilter;
