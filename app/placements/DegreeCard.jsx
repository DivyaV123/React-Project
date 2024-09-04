import React, { useContext } from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { formatToIndianCurrency } from "@/lib/utils";
const DegreeCard = ({ allCounts,placementPage }) => {
  const {
    setPage,
    setThroughCheckedIcon,
    setLessCheckedIcon,
    lesscheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setPlacementParam,
    setSideBarBtn,
    setFilteringData,
    setFilteredRange,
    setFilterPlacementData
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {     
      setFilteredRange({
        less_than60:true
      })
      setLessCheckedIcon(true);
      setPlacedCheckedIcon(false);
      setThroughCheckedIcon(false);
      setItCheckedIcon(false);
      setNonItCheckedIcon(false);
      setSideBarBtn('')
      setFilterPlacementData({})
      setPage(0)
    } else return;
  };

  return (
    <div className={`${placementPage === "GeneralPlacements" ?'degreeCard' :'degreeInternal'} relative cursor-pointer`} onClick={handleClick}>
      {lesscheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[7px] -top-[9px]"
        />
      )}
      <div className="flex h-full">
        <div className="flex flex-col gap-2 justify-between">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw] text-[#191919] mobile:text-[2.791vw] mobile:pl-[2.791vw] mobile:pt-[1.288vh]">
            Less than 60% in <br /> Degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#F28C21] pl-[1.563vw] pb-[2.778vh] mobile:text-[4.651vw] mobile:pl-[2.791vw] mobile:pb-[2.146vh]">
            {formatToIndianCurrency(allCounts?.less_than_60)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
