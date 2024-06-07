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
  const [selectedBranch, setSelectedBranch] = useState([]);
  const { handleCommonFilter } = useContext(GlobalContext);
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const { data: PlacementBranchData } = useGetAllPlacementBranchQuery();
  const BranchList = PlacementBranchData?.response;
  const [selectedYop, setSelectedYop] = useState([]);
  const { data: YearOfPassoutData } = useGetAllYearOfPassoutQuery();
  const YopList = YearOfPassoutData?.response;

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
    handleCommonFilter(-1, [], setSelectedYop, yearRange, "yop");
  };

  const renderCheckbox = (item, index, selected, setSelected, items) => (
    <Checkbox
      key={index}
      id={index}
      label={item}
      checked={selected.includes(index)}
      onChange={() => handleCommonFilter(index, selected, setSelected, items, "yop")}
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
          <DropdownMenuTrigger className="filterButton">
            {fromYear ? fromYear : "From"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-[100%] bg-white">
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
          <DropdownMenuTrigger className="filterButton">
            {toYear ? toYear : "To"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="w-[100%] bg-white flex flex-col item-center">
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
        items={YopList}
        renderItem={(item, index) => renderCheckbox(item, index, selectedYop, setSelectedYop, YopList)}
      />
      <BranchTypeFilter />
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">Branch</p>
        <img src="../../down.svg" />
      </div>
      <ExpandableList
        items={BranchList}
        renderItem={(item, index) => renderCheckbox(item, index, selectedBranch, setSelectedBranch, BranchList)}
      />
    </div>
  );
};

export default YearFilter;
