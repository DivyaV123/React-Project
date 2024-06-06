"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const PercentageFilter = () => {
  const { filteringData, setFilteringData } = useContext(GlobalContext);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const validateFrom = () => {
    if (isNaN(fromValue) || fromValue < 0 || fromValue > 100) {
      return 'From value should be between 0 and 100';
    }
    return '';
  };

  const validateTo = () => {
    if (isNaN(toValue) || toValue < 0 || toValue > 100) {
      return 'To value should be between 0 and 100';
    } else if (fromValue >= toValue) {
      if (toValue !== '') {
        return 'To value should be greater than From value';
      }
    }
    return '';
  };
  const handleFromChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleToChange = (e) => {
    setToValue(e.target.value);
  };
  console.log(fromValue, toValue,"inputvalues")
  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Percentage
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex  gap-2.5 ">
        <input
          type="number"
          placeholder="From"
          autoFocus
          className="filterInput w-[8.75vw]"
          value={fromValue}
          onChange={handleFromChange}
          onBlur={() => validateFrom()}
        />
        <input
          type="number"
          placeholder="To"
          className="filterInput w-[8.75vw]"
          value={toValue}
          onChange={handleToChange}
          onBlur={() => validateTo()}
        />
      </div>
      <div className="pb-[3.111vh]">

      <p className="text-red-500 font-bold text-[0.625vw]">{validateFrom()}</p>
      <p className="text-red-500 font-bold text-[0.625vw]">{validateTo()}</p>
      </div>
    </div>
  );
};

export default PercentageFilter;
