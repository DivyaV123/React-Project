import React,{useContext} from 'react'
import "./PlacementCards.scss";
import { GlobalContext } from '@/components/Context/GlobalContext';
import { formatToIndianCurrency } from "@/lib/utils";
const BranchCard = ({allCounts,placementPage}) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    itCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setFilteredRange,
    setSideBarBtn,
    setScrollPage,
    setFilterPlacementData
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setFilteredRange({
        it:true
      })
      setItCheckedIcon(true);
      setNonItCheckedIcon(false);
      setThroughCheckedIcon(false);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
      setSideBarBtn('')
      setFilterPlacementData({})
      setScrollPage(1)
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
          <p className="font-medium pl-[1.563vw] pt-[2.778vh]  text-[1.094vw] mobile:text-[2.791vw] mobile:pl-[2.791vw] mobile:pt-[1.288vh]">
            IT/CS/IS <br />
            candidates
          </p>
          <p className="font-bold text-[1.875vw] text-[#DC4267] pl-[1.563vw] pb-[2.778vh] mobile:text-[4.651vw] mobile:pl-[2.791vw] mobile:pb-[2.146vh]">
            {formatToIndianCurrency(allCounts?.it)}
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
