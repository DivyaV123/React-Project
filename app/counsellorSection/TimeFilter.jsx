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
  const { filteringData, setFilteringData } = useContext(GlobalContext);
  const [fromcalender, setFromCalender] = useState(false);
  const [tocalender, setToCalender] = useState(false);
  const [fromvalue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const todayFormatted = dayjs().format("YYYY-MM-DD")
  const formattedStartDate = dayjs(fromvalue).format("YYYY-MM-DD")
  const formattedEndDate = dayjs(toValue).format("YYYY-MM-DD")
  const { data: PlacedDateBetween } = useGetPlacedDateBetweenQuery({
    startDate: formattedStartDate, endDate: formattedEndDate, pageNo: 1, pageSize: 10
  })

  console.log(formattedStartDate, formattedEndDate, "start and end")
  const [timeItems, setTimeItems] = useState([
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
  ]);
  const handleToChange = (newValue) => {
    setToValue(newValue);
    setToCalender(false)
  };
  const handleFromChange = (newValue) => {
    setFromValue(newValue);
    setFromCalender(false)
  };
  console.log(fromvalue, toValue, "jhgfdfghjkjhgfg");
  const today = dayjs()
  const weekEnd = today.subtract(1, "week").format("YYYY-MM-DD");

  const lastMonth = today.subtract(1, "month").format("YYYY-MM-DD");

  const threeMonths = today.subtract(3, "month").format("YYYY-MM-DD");

  const sixMonths = today.subtract(6, "month").format("YYYY-MM-DD");

  const handleFilterChecked = (index) => {
    const newTimeItems = timeItems.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });
    setTimeItems(newTimeItems);

    const updatedFilteringData = { ...filteringData };
    const dateRanges = [];

    newTimeItems.forEach((item) => {
      if (item.checked) {
        switch (item.label) {
          case "Last week":
            dateRanges.push(weekEnd);
            break;
          case "Last month":
            dateRanges.push(lastMonth);
            break;
          case "Last 3 months":
            dateRanges.push(threeMonths);
            break;
          case "Last 6 months":
            dateRanges.push(sixMonths);
            break;
          default:
            break;
        }
      }
    });
    updatedFilteringData.timePeriod = dateRanges;

    setFilteringData(updatedFilteringData);
  };


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
            checked={item.checked}
            onChange={() => handleFilterChecked(index)}
          />
        ))}
      </>
    </div>
  );
};

export default TimeFilter;
