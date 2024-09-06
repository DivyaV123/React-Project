import React, { useContext } from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { formatToIndianCurrency } from "@/lib/utils";
const OverviewCard = ({ allCounts, placementPage }) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    throughcheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setSideBarBtn,
    setFilteredRange,
    setFilterPlacementData,
    setScrollPage,
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setFilteredRange({
        above_60:true
      })
      setThroughCheckedIcon(true);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
      setItCheckedIcon(false);
      setNonItCheckedIcon(false);
      setSideBarBtn('')
      setFilterPlacementData({})
      setScrollPage(1)
    } else return;
  };

  return (
    <div className={`${placementPage === "GeneralPlacements" ?'overviewCard' :'overviewInternal'} relative cursor-pointer`} onClick={handleClick}>
      {throughcheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[7px] -top-[9px]"
        />
      )}
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium text-[#191919] pl-[1.563vw] pt-[2.778vh] text-[1.094vw] mobile:text-[2.791vw] mobile:pl-[2.791vw] mobile:pt-[1.288vh]">
            Throughout 60%
          </p>
          <p className="font-bold text-[1.875vw] text-[#002248] pl-[1.563vw] pb-[2.778vh] mobile:text-[4.651vw] mobile:pl-[2.791vw] mobile:pb-[2.146vh]">
            {formatToIndianCurrency(allCounts?.above_60)}
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
