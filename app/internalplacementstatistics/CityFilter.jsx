"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCitiesQuery } from "@/redux/queries/getAllCities";

const CityFilter = ({ selectedState }) => {

  const { handleCounsellorCommonFilter, stateSelected,selectedCity,setSelectedCity ,citySearchQuery,setCitySearchQuery,} = useContext(GlobalContext);
  const { data: cityData, refetch } = useGetAllCitiesQuery(stateSelected);
  const cityList = cityData?.response
    .filter((city) => city !== "")
    .filter((cities) =>
      cities.toLowerCase().includes(citySearchQuery.toLowerCase())
    );
  useEffect(() => {
    refetch();
  }, [stateSelected, refetch]);

  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={item}
      label={item}
      checked={selectedCity.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,
          selectedCity,
          setSelectedCity,
          cityData,
          "city"
        )
      }
    />
  );

  return (
    <div className="px-[1.875vw] pt-[2.778vh]">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold">City</p>
        <img src="../../down.svg" />
      </div>
      <div className="search-container pb-[1.111vh]">
        <input
          type="text"
          placeholder="Search..."
          className="text-[0.781vw]"
          value={citySearchQuery}
          onChange={(e) => setCitySearchQuery(e.target.value)}
        />
        <div className="search-icon"></div>
      </div>
      <ExpandableList
        items={cityList}
        renderItem={(item, index) => renderCheckbox(item, index)}
      />
    </div>
  );
};

export default CityFilter;
