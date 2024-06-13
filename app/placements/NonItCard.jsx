import React,{useContext} from 'react'
import "./PlacementCards.scss";
import { GlobalContext } from '@/components/Context/GlobalContext';
const NonItCard = ({allCounts,placementPage}) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    nonItCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setPlacementParam,
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setPlacementParam("nonit");
      setNonItCheckedIcon(true);
      setThroughCheckedIcon(false);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
      setItCheckedIcon(false);
    } else return;
  };
  return (
    <div className="nonItCard cursor-pointer relative" onClick={handleClick}>
      {nonItCheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[7px] -top-[9px]"
        />
      )}
          <div className="flex h-full">
            <div className="flex flex-col justify-between ">
              <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw]">Non-IT</p>
              <p className="font-bold text-[1.875vw] text-[#FD521B] pl-[1.563vw] pb-[2.778vh]">{allCounts?.response?.nonItCount}</p>
            </div>
          </div>
        </div>
  )
}

export default NonItCard