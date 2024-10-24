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
  const { data: statesData, error, isLoading } = useGetAllStatesQuery(stateSearchQuery?.length >= 3 ? stateSearchQuery : "");
  const getStatesData = statesData?.results?.filter(
    (state) => state.name !== ""
  ); 
  const statesList = getStatesData?.filter((state) =>
    state.name.toLowerCase().includes(stateSearchQuery.toLowerCase())
  );
  const renderCheckbox = (item) => (
    <Checkbox
      key={item.id}
      id={item.id}
      label={item.name}
      checked={stateItems.includes(item.id)}
      onChange={() =>
        handleCounsellorCommonFilter(
          item.id,
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
              renderItem={(item) => renderCheckbox(item)}
            />
          </>
        )}
      </div>
      <CityFilter selectedState={stateItems} />
    </>
  );
};

export default StateFilter;
