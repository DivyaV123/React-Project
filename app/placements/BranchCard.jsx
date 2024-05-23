import React from "react";
import "./PlacementCards.scss";
const BranchCard = () => {
  return (
    <div className="branchCard">
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh]  text-[1.094vw]">
            IT/CS/IS <br />
            candidates
          </p>
          <p className="font-bold text-[1.875vw] text-[#DC4267] pl-[1.563vw] pb-[2.778vh]">
            1,36,859
          </p>
        </div>
        <div>
          <img
            className="h-full object-cover object-right"
            src="../white_card.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
