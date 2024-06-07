"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import "./CounserllorFilters.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GlobalContext } from "@/components/Context/GlobalContext";
import dayjs from "dayjs";
import FilterSkeleton from "@/components/skeletons/FilterSkeleton";

const TimeFilter = ({isLoading}) => {
  const { filteringData, setFilteringData, handleCommonFilter } = useContext(GlobalContext);
  const [fromCalender, setFromCalender] = useState(false);
  const [toCalender, setToCalender] = useState(false);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [selectedDate, setSelectedDate] = useState([]);

  const periodValues = ["Last week", "Last month", "Last 3 months", "Last 6 months"];

  const formattedStartDate = dayjs(fromValue).format("YYYY-MM-DD");
  const formattedEndDate = dayjs(toValue).format("YYYY-MM-DD");

  useEffect(() => {
    if (fromValue && toValue) {
      handleCommonFilterForCalendar([formattedStartDate, formattedEndDate]);
    }
  }, [fromValue, toValue]);

  const handleToChange = (newValue) => {
    setToValue(newValue);
    setToCalender(false);
  };

  const handleFromChange = (newValue) => {
    setFromValue(newValue);
    setFromCalender(false);
  };

  const handleFromCalendar = () => {
    if (!fromCalender) {
      setFromCalender(true);
      setToCalender(false);
    } else {
      setFromCalender(false);
    }
  };

  const handleToCalendar = () => {
    if (!toCalender) {
      setToCalender(true);
      setFromCalender(false);
    } else {
      setToCalender(false);
    }
  };

  const handleCommonFilterForCalendar = (dateRange) => {
    handleCommonFilter(-1, [], setSelectedDate, dateRange, 'timePeriod');
  };

  const handleCheckboxChange = (index) => {
    setFromValue('');
    setToValue('');
    handleCommonFilter(index, selectedDate, setSelectedDate, periodValues, 'timePeriod');
  };

  return (
    <>
    {/* {
      isLoading ? <FilterSkeleton/>: */}
      <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Time Period
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex gap-2.5 pb-[1.111vh] relative">
        <button onClick={handleFromCalendar} className="filterButton">
          {formattedStartDate != "Invalid Date" ? formattedStartDate : "From"}
        </button>
        {fromCalender && (
          <div className="calenderStyle">
            <Calendar
              onChange={handleFromChange}
              value={fromValue ? new Date(fromValue) : null}
            />
          </div>
        )}
        <button onClick={handleToCalendar} className="filterButton">
          {formattedEndDate != "Invalid Date" ? formattedEndDate : "To"}
        </button>
        {toCalender && (
          <div className="calenderStyle">
            <Calendar
              onChange={handleToChange}
              value={toValue ? new Date(toValue) : null}
            />
          </div>
        )}
      </div>
      <>
        {periodValues.map((item, index) => (
          <Checkbox
            key={index}
            id={index}
            label={item}
            checked={selectedDate.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
        ))}
      </>
    </div>
    {/* } */}
    
    </>
  );
};

export default TimeFilter;
