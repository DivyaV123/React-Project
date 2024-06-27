"use client";
import React, { useContext, useEffect } from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const TotalPlacedCard = ({ allCounts, placementPage }) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    setPlacedCheckedIcon,
    placeCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setPlacementParam,
    setSideBarBtn,
    setFilterPlacementData,
    setPage
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setPlacementParam("");
      setPlacedCheckedIcon(true);
      setLessCheckedIcon(false);
      setThroughCheckedIcon(false);
      setNonItCheckedIcon(false);
      setItCheckedIcon(false);
      setSideBarBtn("")
      setFilterPlacementData({})
      setPage(0)
    } else return;
  };
  return (
    <div className={`${placementPage === "GeneralPlacements" ?'placedCard' :'internalStats'} relative cursor-pointer mobile:mx-[7.442vw]`} onClick={handleClick}>
      {placeCheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[1px] -top-[7px]"
        />
      )}
      <div className="flex flex-col justify-between h-full">
        <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.25vw] text-[#FAFAFA] mobile:text-[3.256vw] mobile:pl-[5.581vw] mobile:pt-[1.073vh] ">
          Total Placed
        </p>
        <p className="font-bold text-[2.5vw] pl-[1.563vw] pb-[2.778vh] text-[#FAFAFA] mobile:text-[5.581vw] mobile:pl-[5.581vw] mobile:pb-[1.073vh] ">
          {placementPage === "GeneralPlacements"
            ? allCounts?.response?.allPlacedCount
            : allCounts?.response?.filterDataCounts?.total}
        </p>
      </div>
    </div>
  );
};

export default TotalPlacedCard;
