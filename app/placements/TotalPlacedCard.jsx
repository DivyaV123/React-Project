"use client";
import React from "react";
import "./PlacementCards.scss";
const TotalPlacedCard = ({allCounts}) => {
  return (
    <div className="placedCard">
      <div className="flex flex-col justify-between h-full">
        <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.25vw] text-[#FAFAFA]">Total Placed</p>
        <p className="font-bold text-[2.5vw] pl-[1.563vw] pb-[2.778vh] text-[#FAFAFA]">
          {allCounts?.response?.allPlacedCount}
        </p>
      </div>
    </div>
  );
};

export default TotalPlacedCard;
