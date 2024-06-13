import React,{useContext} from 'react'
import "./PlacementCards.scss";
import { GlobalContext } from '@/components/Context/GlobalContext';
const BranchCard = ({allCounts,placementPage}) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    itCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setPlacementParam,
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setPlacementParam("it");
      setItCheckedIcon(true);
      setNonItCheckedIcon(false);
      setThroughCheckedIcon(false);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
    } else return;
  };
  return (
    <div className="branchCard cursor-pointer relative" onClick={handleClick}>
      {itCheckedIcon && placementPage === "GeneralPlacements" && (
        <img
          src="../../checked.svg"
          className="absolute -right-[7px] -top-[9px]"
        />
      )}
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh]  text-[1.094vw]">
            IT/CS/IS <br />
            candidates
          </p>
          <p className="font-bold text-[1.875vw] text-[#DC4267] pl-[1.563vw] pb-[2.778vh]">
            {allCounts?.response?.itCount}
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
