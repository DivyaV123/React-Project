'use client'
import React,{useState} from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
const TimeFilter = () => {
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
  

 
  const handleFilterChecked = (index) => {
    const newTimeItems = timeItems.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return {
          ...item,
          checked: false,
        };
      }
    });
    setTimeItems(newTimeItems);
  };
  return (
    <div className="px-[1.875vw] pt-[2.778vh] timePeriod">
          <div className="flex justify-between pb-[1.111vh]">
            <p className="text-[0.938vw] text-[#002248] font-semibold">
              Time Period
            </p>
            <img src="../../down.svg" />
          </div>
          <div className="flex  gap-2.5 pb-[1.111vh]">
            <button className="filterButton">From</button>
            <button className="filterButton">To</button>
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
  )
}

export default TimeFilter