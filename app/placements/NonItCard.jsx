import React,{useContext} from 'react'
import "./PlacementCards.scss";
import { GlobalContext } from '@/components/Context/GlobalContext';
import { formatToIndianCurrency } from "@/lib/utils";
const NonItCard = ({allCounts,placementPage}) => {
  const {
    setThroughCheckedIcon,
    setLessCheckedIcon,
    nonItCheckedIcon,
    setPlacedCheckedIcon,
    setNonItCheckedIcon,
    setItCheckedIcon,
    setFilteredRange,
    setSideBarBtn,
    setFilterPlacementData,
    setPage,
  } = useContext(GlobalContext);
  const handleClick = () => {
    if (placementPage === "GeneralPlacements") {
      setFilteredRange({
        non_it:true
      })
      setNonItCheckedIcon(true);
      setThroughCheckedIcon(false);
      setPlacedCheckedIcon(false);
      setLessCheckedIcon(false);
      setItCheckedIcon(false);
      setSideBarBtn('')
      setFilterPlacementData({})
      setPage(0)
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
              <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw] mobile:text-[2.791vw] mobile:pl-[2.791vw] mobile:pt-[1.288vh]">Non-IT</p>
              <p className="font-bold text-[1.875vw] text-[#FD521B] pl-[1.563vw] pb-[2.778vh] mobile:text-[4.651vw] mobile:pl-[2.791vw] mobile:pb-[2.146vh]">{formatToIndianCurrency(allCounts?.non_it)}</p>
            </div>
          </div>
        </div>
  )
}

export default NonItCard