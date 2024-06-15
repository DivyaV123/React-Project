import React, { useContext } from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const OverviewCard = ({ allCounts, placementPage }) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    throughcheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setPlacementParam,
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setPlacementParam("throughoutsixty");
      setThroughCheckedIcon(true);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
      setItCheckedIcon(false);
      setNonItCheckedIcon(false);
    } else return;
  };
  return (
    <div className={`${placementPage === "GeneralPlacements" ?'overviewCard' :'overviewInternal'} relative cursor-pointe`} onClick={handleClick}>
      {throughcheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[7px] -top-[9px]"
        />
      )}
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium text-[#191919] pl-[1.563vw] pt-[2.778vh] text-[1.094vw]">
            Throughout 60% in Degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#002248] pl-[1.563vw] pb-[2.778vh]">
            {placementPage === "GeneralPlacements"
              ? allCounts?.response?.throughOutSixtyPercent
              : allCounts?.response?.filterDataCounts?.throughOutSixty}
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
