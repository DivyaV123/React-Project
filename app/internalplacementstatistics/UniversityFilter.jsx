"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { useGetAllUniversitiesQuery } from "@/redux/queries/getAllUniversities";
import { GlobalContext } from "@/components/Context/GlobalContext";

const UniversityFilter = () => {
  const { handleCounsellorCommonFilter, selectedUniversity, setSelectedUniversity, universitySearchQuery, setUniversitySearchQuery, } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: universityData } = useGetAllUniversitiesQuery();
  const universityList = universityData?.results
    ?.filter((uni) => uni.name !== "")
    ?.map((uni) => ({
      name: uni.name,
      id: uni.id,
    }));
  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index.id}
      id={item.id}
      label={item.name}
      checked={selectedUniversity.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(item.id, selectedUniversity, setSelectedUniversity, universityData, "university")
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="px-[1.875vw] pt-[2.778vh] mobile:px-[5.875vw] mobile:pt-[1.778vh] thinCloseBorder">
      <div className="flex justify-between pb-[1.111vh] mobile:hidden">
        <p className="text-[0.938vw] text-[#002248] font-semibold">University</p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer"
        />
      </div>
      {isExpanded && (
        <>
          <div className="search-container pb-[1.111vh]">
            <input
              type="text"
              placeholder="Search..."
              className="text-[0.781vw]"
              value={universitySearchQuery}
              onChange={(e) => setUniversitySearchQuery(e.target.value)}
            />
            <div className="search-icon"></div>
          </div>
          <ExpandableList
            items={universityList}
            renderItem={(item, index) => renderCheckbox(item, index)}
          />
        </>
      )}
    </div>
  );
};

export default UniversityFilter;
