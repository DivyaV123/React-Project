"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
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
import dayjs from "dayjs";

const YearFilter = () => {
  const [selectedBranch, setSelectedBranch] = useState([]);
  const { filteringData, setFilteringData, handleCommonFilter } = useContext(GlobalContext);
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const { data: PlacementBranchData } = useGetAllPlacementBranchQuery();
  const BranchList = PlacementBranchData?.response;
  const [selectedYop, setSelectedYop] = useState([]);
  const { data: YearOfPassoutData } = useGetAllYearOfPassoutQuery();
  const YopList = YearOfPassoutData?.response;
  
  const handleFromYearChange = (year) => {
    setFromYear(year);
    setToYear('');
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
    handleCommonFilter(-1, [], setSelectedYop, yearRange, 'yop');
  };

  const handleCheckboxChange = (index) => {
    setFromYear('');
    setToYear('');
    handleCommonFilter(index, selectedYop, setSelectedYop, YopList, 'yop');
  };

  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Year of Passing
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex gap-2.5 pb-[1.111vh]">
        <DropdownMenu>
          <DropdownMenuTrigger className="filterButton">
            From
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
          <DropdownMenuTrigger className="filterButton">To</DropdownMenuTrigger>
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
      <>
        {YopList?.map((item, index) => (
          <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedYop.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
        ))}
      </>
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">Branch</p>
        <img src="../../down.svg" />
      </div>
      <>
        {BranchList?.map((item, index) => (
          <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedBranch.includes(index)}
            onChange={() =>
              handleCommonFilter(
                index,
                selectedBranch,
                setSelectedBranch,
                BranchList,
                'branchLocation'
              )
            }
          />
        ))}
      </>
    </div>
  );
};

export default YearFilter;
