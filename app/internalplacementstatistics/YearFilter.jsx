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
import BranchFilter from "./BranchFilter";

const YearFilter = () => {
  const {
    handleCounsellorCommonFilter,
    fromYear,
    setFromYear,
    toYear,
    setToYear,
    selectedYop,
    setSelectedYop,
    yearSearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: PlacementBranchData } = useGetAllPlacementBranchQuery();
  const BranchList = PlacementBranchData?.results?.filter((branch) => branch.name !== "");
  const { data: YearOfPassoutData } = useGetAllYearOfPassoutQuery();
  const YopList = YearOfPassoutData?.response;
  const sortedYearList = [...(YopList || [])].sort((a, b) => b - a);

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const commonClassforAllFilters="px-[1.875vw] pt-[2.778vh] thinCloseBorder pb-[1.111vh] mobile:px-[5.875vw] mobile:pt-[1.778vh]"
  return (
    <>
      <div className={commonClassforAllFilters}>
        <div className="flex justify-between pb-[1.111vh] mobile:hidden">
          <p className="text-[0.938vw] text-[#002248] font-semibold">
            Year of Passing
          </p>
          <img
            src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
            onClick={toggleExpand}
            className="cursor-pointer"
          />
        </div>
        {isExpanded && (
          <>
            <div className="flex gap-2.5 pb-[1.111vh]">
              <DropdownMenu>
                <DropdownMenuTrigger className="filterButton text-left pl-[0.938vw]">
                  {fromYear ? fromYear : "From"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mobile:relative mobile:z-[40000]">
                  <div className="w-[100%]  mobile:relative mobile:z-[40000] max-h-60 myscrollbar overflow-y-auto  bg-white">
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
                <DropdownMenuContent className="mobile:relative mobile:z-[40000]">
                  <div className="w-[100%] mobile:relative mobile:z-[40000] bg-white flex flex-col max-h-60 myscrollbar overflow-y-auto item-center">
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
              renderItem={(item, index) =>
                renderCheckbox(
                  item,
                  index,
                  selectedYop,
                  setSelectedYop,
                  sortedYearList
                )
              }
            />
          </>
        )}
      </div>
      <div className={commonClassforAllFilters}>
        <BranchTypeFilter />
      </div>
      <div className={commonClassforAllFilters}>
        <BranchFilter
          BranchList={BranchList}
        />
      </div>
    </>
  );
};

export default YearFilter;
