"use client";
import React, { useState, useContext, useEffect } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import "./CounserllorFilters.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllCitiesQuery } from "@/redux/queries/getAllCities";

const CityFilter = ({ selectedState }) => {
  const {
    handleCounsellorCommonFilter,
    stateSelected,
    selectedCity,
    setSelectedCity,
    citySearchQuery,
    setCitySearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: cityData, refetch } = useGetAllCitiesQuery(stateSelected);
  const cityList = cityData?.results
    ?.filter((city) => city.name !== "")
    ?.map((city) => ({
      name: city.name,
      id: city.id,
    }));
  useEffect(() => {
    refetch();
  }, [stateSelected, refetch]);
  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={item.id}
      label={item.name}
      checked={selectedCity.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item.id,
          selectedCity,
          setSelectedCity,
          cityData,
          "city"
        )
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="px-[1.875vw] pt-[2.778vh] mobile:px-[5.875vw] mobile:pt-[1.778vh] thinCloseBorder">
      <div className="flex justify-between pb-[1.111vh]">
        <p className="text-[0.938vw] text-[#002248] font-semibold mobile:text-[2.938vw]">
          City
        </p>
        <img
          src={isExpanded ? "../../icon_up.svg" : "../../icon_down.svg"}
          onClick={toggleExpand}
          className="cursor-pointer mobile:hidden"
        />
      </div>
      {isExpanded && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CityFilter;
