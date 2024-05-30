'use client'
import React, { useState } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import CityFilter from './CityFilter';
import { useGetAllStatesQuery } from '@/redux/queries/getAllStates';
const StateFilter = () => {
  const { data, error, isLoading } = useGetAllStatesQuery();
  const [stateItems, setStateItems] = useState([{
    id: "karnataka",
    label: "Karnataka",
    checked: false,
  },
  {
    id: "maharashtra",
    label: "Maharashtra",
    checked: false,
  }, {
    id: "punjab",
    label: "Punjab",
    checked: false,
  },
  {
    id: "kerela",
    label: "Kerela",
    checked: false,
  },
  ])
  const handleFilterState = (index) => {
    const newStateItems = stateItems.map((item, idx) => {
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
    setStateItems(newStateItems);
  };
  return (
    <>
      <div className="px-[1.875vw] pt-[2.778vh]">
        <div className="flex justify-between pb-[1.111vh]">
          <p className="text-[0.938vw] text-[#002248] font-semibold">
            State
          </p>
          <img src="../../down.svg" />
        </div>
        <div className="search-container pb-[1.111vh]">
          <input type="text" placeholder="search..." className="text-[0.781vw]" />
          <div class="search-icon"></div>
        </div>
        <>
          {stateItems.map((item, index) => (
            <Checkbox
              key={index}
              id={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleFilterState(index)}
            />
          ))}
        </>
      </div>
      <CityFilter />
    </>
  )
}

export default StateFilter