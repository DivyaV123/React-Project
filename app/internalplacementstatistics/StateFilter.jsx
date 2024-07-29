"use client";
import React, { useState, useContext } from "react";
import Checkbox from "@/components/commonComponents/checkbox/Checkbox";
import "./CounserllorFilters.scss";
import ExpandableList from "../../components/commonComponents/ExpandableList/ExpandableList";
import CityFilter from "./CityFilter";
import { useGetAllStatesQuery } from "@/redux/queries/getAllStates";
import { GlobalContext } from "@/components/Context/GlobalContext";
const StateFilter = () => {
  const {
    handleCounsellorCommonFilter,
    stateItems,
    setStateItems,
    stateSearchQuery,
    setStateSearchQuery,
  } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const { data: statesData, error, isLoading } = useGetAllStatesQuery();
  const statesList = statesData?.response
    .filter((state) => state !== "")
    .filter((states) =>
      states.toLowerCase().includes(stateSearchQuery.toLowerCase())
    );
  const renderCheckbox = (item, index) => (
    <Checkbox
      key={index}
      id={item}
      label={item}
      checked={stateItems.includes(item)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item,
          stateItems,
          setStateItems,
          statesData,
          "state"
        )
      }
    />
  );
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="px-[1.875vw] pt-[2.778vh] thinCloseBorder mobile:px-[5.875vw] mobile:pt-[1.778vh]">
        <div className="flex justify-between pb-[1.111vh]">
          <p className="text-[0.938vw] text-[#002248] font-semibold mobile:text-[2.938vw]">
            State
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
                value={stateSearchQuery}
                onChange={(e) => setStateSearchQuery(e.target.value)}
              />
              <div class="search-icon"></div>
            </div>
            <ExpandableList
              items={statesList}
              renderItem={(item, index) => renderCheckbox(item, index)}
            />
          </>
        )}
      </div>
      <CityFilter selectedState={stateItems} />
    </>
  );
};

export default StateFilter;
