"use client";
import React,{useContext,useEffect} from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const TotalPlacedCard = ({allCounts,handleRefresh,handleParameter}) => {
  const { setThroughCheckedIcon,setLessCheckedIcon, setPlacedCheckedIcon,placeCheckedIcon,setFilteringData} = useContext(GlobalContext)
  // const handleClick = () => {
  //   handleRefresh()
  //   handleParameter('')
  //   // setFilteringData({})
  //   setPlacedCheckedIcon(true)
  //   setLessCheckedIcon(false)
  //   setThroughCheckedIcon(false)
  // };
  return (
    <div className="placedCard relative cursor-pointer">
      {/* {
placeCheckedIcon &&
      <img src="../../checked.svg" className="absolute -right-[1px] -top-[7px]"/>
      } */}
      <div className="flex flex-col justify-between h-full">
        <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.25vw] text-[#FAFAFA]">Total Placed</p>
        <p className="font-bold text-[2.5vw] pl-[1.563vw] pb-[2.778vh] text-[#FAFAFA]">
          {allCounts?.response?.filterDataCounts?.total}
        </p>
      </div>
    </div>
  );
};

export default TotalPlacedCard;
