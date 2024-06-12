"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllPlacementBranchQuery } from "@/redux/queries/getBranches";
import { useGetAllYearOfPassoutQuery } from "@/redux/queries/getYearOfPassout";
import BranchTypeFilter from "./BranchTypeFilter";

const YearFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { handleCounsellorCommonFilter,fromYear,setFromYear,toYear,setToYear,selectedYop,setSelectedYop,selectedBranchFilter,setSelectedBranchFilter } = useContext(GlobalContext);
  const { data: PlacementBranchData } = useGetAllPlacementBranchQuery();
  const BranchList = PlacementBranchData?.response;
  const { data: YearOfPassoutData } = useGetAllYearOfPassoutQuery();
  const YopList = YearOfPassoutData?.response;
  const sortedYearList = [...YopList || []].sort((a, b) => b - a);
  const searchBranchList = BranchList?.filter(branch => branch !== "").filter(ele => ele.toLowerCase().includes(searchQuery.toLowerCase()));
 
  const handleFromYearChange = (year) => {
    setFromYear(year);
    setToYear("");
    setSelectedYop([]);
  };

  const handleToYearChange = (year) => {
    setToYear(year);
    if (fromYear) {
      const from = parseInt(fromYear, 10);
      const to = parseInt(year, 10);
      const yearRange = [];
      for (let i = from; i <= to; i++) {
        yearRange.push(i.toString());
      }
      handleCommonFilterForYear(yearRange);
    }
  };

  const handleCommonFilterForYear = (yearRange) => {
    handleCounsellorCommonFilter(-1, [], setSelectedYop, yearRange, "yop");
  };

  const clearYearRange = () => {
    setFromYear("");
    setToYear("");
  };

  const renderCheckbox = (item, index, selected, setSelected, items) => (
    <Checkbox
      key={item}
      id={item}
      label={item}
      checked={selected?.includes(item)}
      onChange={() => {
        clearYearRange();
        handleCounsellorCommonFilter(item, selected, setSelected, items, "yop");
      }}
    />
  );

  const renderBranchCheckbox = (item, index, selected, setSelected, items) => (
    <Checkbox
      key={item}
      id={item}
      label={item}
      checked={selected?.includes(item)}
      onChange={() => handleCounsellorCommonFilter(item, selected, setSelected, items, "branchLocation")}
    />
  );

  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod pb-[1.111vh]">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Year of Passing
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex gap-2.5 pb-[1.111vh]">
        <DropdownMenu>
          <DropdownMenuTrigger className="filterButton text-left pl-[0.938vw]">
            {fromYear ? fromYear : "From"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-[100%] max-h-60 myscrollbar overflow-y-auto  bg-white">
              {YopList?.map((year, index) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => handleFromYearChange(year)}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="filterButton text-left pl-[0.938vw]">
            {toYear ? toYear : "To"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-[100%] bg-white flex flex-col max-h-60 myscrollbar overflow-y-auto item-center">
              {YopList?.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => handleToYearChange(year)}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ExpandableList
        items={sortedYearList}
        renderItem={(item, index) => renderCheckbox(item, index, selectedYop, setSelectedYop, sortedYearList)}
      />
      <BranchTypeFilter />
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">Branch</p>
        <img src="../../down.svg" />
      </div>
      <div className="search-container pb-[1.111vh]">
        <input 
          type="text" 
          placeholder="Search..." 
          className="text-[0.781vw]" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="search-icon"></div>
      </div>
      <ExpandableList
        items={searchBranchList}
        renderItem={(item, index) => renderBranchCheckbox(item, index, selectedBranchFilter, setSelectedBranchFilter, BranchList)}
      />
    </div>
  );
};

export default YearFilter;
