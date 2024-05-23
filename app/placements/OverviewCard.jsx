import React from "react";
import "./PlacementCards.scss";
const OverviewCard = () => {
  return (
    <div className="overviewCard">
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw]">
            Throughout 60% in degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#002248] pl-[1.563vw] pb-[2.778vh]">
            23,59,365
          </p>
        </div>
        <div>
          <img
            className="h-full object-cover object-right"
            src="../hero_card.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
