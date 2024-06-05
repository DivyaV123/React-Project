'use client'
import React, { useState, useContext } from 'react'
import Checkbox from '@/components/commonComponents/checkbox/Checkbox';
import "./CounserllorFilters.scss";
import CityFilter from './CityFilter';
import { useGetAllStatesQuery } from '@/redux/queries/getAllStates';
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCitiesQuery } from '@/redux/queries/getAllCities';
const StateFilter = () => {
  const { filteringData, setFilteringData, handleCommonFilter } = useContext(GlobalContext);
  const { data: statesData, error, isLoading } = useGetAllStatesQuery();
  const { data: cityData, error: cityError, isLoading: cityIsLoading } = useGetAllCitiesQuery();
  const statesList = statesData?.response;
  const [stateItems, setStateItems] = useState([])
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
          {statesList?.map((item, index) => (
            <Checkbox
              key={index}
              id={index}
              label={item}
              checked={stateItems.includes(index)}
              onChange={() =>
                handleCommonFilter(index, stateItems, setStateItems, statesList, 'state')}
            />
          ))}
        </>
      </div>
      <CityFilter selectedState={stateItems} />
    </>
  )
}

export default StateFilter