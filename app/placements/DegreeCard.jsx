import React from "react";
import "./PlacementCards.scss";
const DegreeCard = ({allCounts}) => {
  return (
    <div className="degreeCard">
      <div className="flex h-full">
        <div className="flex flex-col gap-2 justify-between">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw] text-[#191919]">
            Less than 60% in <br /> Degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#F28C21] pl-[1.563vw] pb-[2.778vh]">
            {allCounts?.response?.lessThanSixtyPercent}
          </p>
        </div>
        {/* <div>
              <img className="h-full object-cover object-right" src="../red_card.png" />
            </div> */}
      </div>
    </div>
  );
};

export default DegreeCard;
