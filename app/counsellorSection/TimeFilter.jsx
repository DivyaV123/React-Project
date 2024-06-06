"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import "./CounserllorFilters.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GlobalContext } from "@/components/Context/GlobalContext";
import dayjs from "dayjs";
import { useGetPlacedDateBetweenQuery } from "@/redux/queries/getPlacedDateBetween";
const TimeFilter = () => {
  const { filteringData, setFilteringData, handleCommonFilter, page, size } = useContext(GlobalContext);
  const [fromcalender, setFromCalender] = useState(false);
  const [tocalender, setToCalender] = useState(false);
  const [fromvalue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const formattedStartDate = dayjs(fromvalue).format("YYYY-MM-DD");
  const formattedEndDate = dayjs(toValue).format("YYYY-MM-DD");
  const [calanderSelect, setCalanderSelect] = useState([])

  const calculateDateRange = (label) => {
    const today = new Date();
    let pastDate;

    switch (label) {
      case "Last week":
        pastDate = new Date(today);
        pastDate.setDate(today.getDate() - 7);
        break;
      case "Last month":
        pastDate = new Date(today);
        pastDate.setMonth(today.getMonth() - 1);
        break;
      case "Last 3 months":
        pastDate = new Date(today);
        pastDate.setMonth(today.getMonth() - 3);
        break;
      case "Last 6 months":
        pastDate = new Date(today);
        pastDate.setMonth(today.getMonth() - 6);
        break;
      default:
        pastDate = new Date(today);
    }

    return [today.toISOString().split('T')[0], pastDate.toISOString().split('T')[0]];
  };
  const periodValues = [
    calculateDateRange("Last week"),
    calculateDateRange("Last month"),
    calculateDateRange("Last 3 months"),
    calculateDateRange("Last 6 months"),
    [formattedStartDate, formattedStartDate],
  ]
  const timeItems = [
    {
      id: "last week",
      label: "Last week",
      checked: false,

    },
    {
      id: "last month",
      label: "Last month",
      checked: false,
    },
    {
      id: "last 3 months",
      label: "Last 3 months",
      checked: false,
    },
    {
      id: "last 6 months",
      label: "Last 6 months",
      checked: false,
    },
  ]
  const handleToChange = (newValue) => {
    setToValue(newValue);
    setToCalender(false)
    if (formattedStartDate != "Invalid Date" && formattedEndDate != "Invalid Date") {
      setCalanderSelect(formattedStartDate, formattedEndDate)
    }

    if (calanderSelect[0] != "Invalid Date" && calanderSelect[1] != "Invalid Date") {
      handleCommonFilter(4, calanderSelect, setCalanderSelect, periodValues, 'timePeriod')
    }
  };

  const handleFromChange = (newValue) => {
    setFromValue(newValue);
    setFromCalender(false)
  };
  const today = dayjs()
  const [selectedDate, setSelectedDate] = useState('')
  const weekEnd = today.subtract(1, "week").format("YYYY-MM-DD");

  const lastMonth = today.subtract(1, "month").format("YYYY-MM-DD");

  const threeMonths = today.subtract(3, "month").format("YYYY-MM-DD");

  const sixMonths = today.subtract(6, "month").format("YYYY-MM-DD");

  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">
          Time Period
        </p>
        <img src="../../down.svg" />
      </div>
      <div className="flex  gap-2.5 pb-[1.111vh] relative">
        <button
          onClick={() => {
            fromcalender ? setFromCalender(false) : setFromCalender(true);
          }}
          className="filterButton"
        >
          From
        </button>
        {fromcalender && (
          <div className="calenderStyle">
            <Calendar onChange={handleFromChange} value={fromvalue} />
          </div>
        )}
        <button
          onClick={() => {
            tocalender ? setToCalender(false) : setToCalender(true);
          }}
          className="filterButton"
        >
          To
        </button>
        {tocalender && (
          <div className="calenderStyle">
            <Calendar onChange={handleToChange} value={toValue} />
          </div>
        )}
      </div>
      <>
        {timeItems.map((item, index) => (
          <Checkbox
            key={index}
            id={item.id}
            label={item.label}
            checked={selectedDate.includes(index)}
            onChange={() =>
              handleCommonFilter(index, selectedDate, setSelectedDate, periodValues, 'timePeriod')
            }
          />
        ))}
      </>
    </div>
  );
};

export default TimeFilter;
