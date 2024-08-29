"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCollegesQuery } from "@/redux/queries/getAllColleges";

const CollegeFilter = () => {
  const {
    handleCounsellorCommonFilter,
    universitySelected,
    selectedCollege,
    setSelectedCollege,
    collegeSearchQuery,
    setCollegeSearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);

  const { data: collegeData, refetch } =
    useGetAllCollegesQuery(universitySelected);
    const getCollegeData = collegeData?.results?.filter((college) => college !== "")
  const collegeList = getCollegeData?.filter((college) =>
      college.name.toLowerCase().includes(collegeSearchQuery.toLowerCase())
    );
  useEffect(() => {
    refetch();
  }, [universitySelected]);

  const renderCheckbox = (item) => (
    <Checkbox
      key={item.id}
      id={item.id}
      label={item.name}
      checked={selectedCollege.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item.id,
          selectedCollege,
          setSelectedCollege,
          collegeData,
          "college"
        )
      }
    />
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-[1.875vw] pt-[2.778vh] mobile:px-[5.875vw] mobile:pt-[1.778vh] thinCloseBorder">
      <div className="flex justify-between pb-[1.111vh] mobile:hidden">
        <p className="text-[0.938vw] text-[#002248] font-semibold">College</p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer "
        />
      </div>
      {isExpanded && (
        <>
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
            renderItem={(item) => renderCheckbox(item)}
          />
        </>
      )}
    </div>
  );
};

export default CollegeFilter;
