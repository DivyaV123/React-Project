"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import "./CounserllorFilters.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GlobalContext } from "@/components/Context/GlobalContext";
import dayjs from "dayjs";
import FilterSkeleton from "@/components/skeletons/FilterSkeleton";

const TimeFilter = ({ isLoading }) => {
  const { filteringData, setFilteringData, handleCounsellorCommonFilter, fromValue, setFromValue, toValue, setToValue, selectedDate, setSelectedDate } = useContext(GlobalContext);
  const [fromCalender, setFromCalender] = useState(false);
  const [toCalender, setToCalender] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const periodValues = ["Last week", "Last month", "Last 3 months", "Last 6 months"];

  const formattedStartDate = dayjs(fromValue).format("YYYY-MM-DD");
  const formattedEndDate = dayjs(toValue).format("YYYY-MM-DD");

  useEffect(() => {
    if (fromValue && toValue) {
      handleCommonFilterForCalendar([formattedStartDate, formattedEndDate]);
    }
  }, [fromValue, toValue]);

  const handleToChange = (newValue) => {
    if (new Date(newValue) >= new Date(fromValue)) {
      setToValue(newValue);
      setToCalender(false);
      setErrorMessage('');
    } else {
      setErrorMessage('The "To" date cannot be earlier than the "From" date.');
    }
  };

  const handleFromChange = (newValue) => {
    setFromValue(newValue);
    setFromCalender(false);
    setToValue('');
    setErrorMessage('');
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
    handleCounsellorCommonFilter(-1, [], setSelectedDate, dateRange, 'timePeriod');
  };

  const handleCheckboxChange = (index) => {
    setFromValue('');
    setToValue('');
    handleCounsellorCommonFilter(index, selectedDate, setSelectedDate, periodValues, 'timePeriod');
    setErrorMessage('');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="px-[1.875vw] pt-[2.778vh] thinCloseBorder mobile:px-[5.875vw] mobile:pt-[1.778vh]">
        <div className="flex justify-between pb-[1.111vh] mobile:hidden">
          <p className="text-[0.938vw] text-[#002248] font-semibold ">
            Time Period
          </p>
          <img src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"} onClick={toggleExpand} className="cursor-pointer" />
        </div>
        {isExpanded && (
          <div>
            <div className="flex gap-2.5 pb-[1.111vh] relative">
              <button onClick={handleFromCalendar} className="filterButton mobile:w-[35.75vw] mobile:h-[4vw] text-left pl-[0.938vw]">
                {formattedStartDate !== "Invalid Date" ? formattedStartDate : "From"}
              </button>
              {fromCalender && (
                <div className="calenderStyle">
                  <Calendar
                    onChange={handleFromChange}
                    value={fromValue ? new Date(fromValue) : null}
                  />
                </div>
              )}
              <button onClick={handleToCalendar} className="filterButton text-left pl-[0.938vw]">
                {formattedEndDate !== "Invalid Date" ? formattedEndDate : "To"}
              </button>
              {toCalender && (
                <div className="calenderStyle">
                  <Calendar
                    onChange={handleToChange}
                    value={toValue ? new Date(toValue) : null}
                    minDate={fromValue ? new Date(fromValue) : undefined} // Set the minDate for the "To" calendar
                  />
                </div>
              )}
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="mobile:pt-[1.778vh]">
              {periodValues.map((item, index) => (
                <Checkbox
                  key={index}
                  id={index}
                  label={item}
                  checked={selectedDate.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TimeFilter;
