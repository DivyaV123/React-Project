import React,{useContext} from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const DegreeCard = ({allCounts,handleParameter,isEmptyObject}) => {
  const { setThroughCheckedIcon,setLessCheckedIcon ,lesscheckedIcon,setPlacedCheckedIcon,setFilteringData,setPage} = useContext(GlobalContext)
  // const handleClick = () => {
  //   // if(!isEmptyObject) return
  //   handleParameter("lessthansixty");
  //   setPage(0)
  //   setFilteringData({})
  //   setLessCheckedIcon(true)
  //   setPlacedCheckedIcon(false)
  //   setThroughCheckedIcon(false)
  // };
  return (
    <div className="degreeCard cursor-pointer relative" >
      {
lesscheckedIcon &&
      <img src="../../checked.svg" className="absolute -right-[7px] -top-[9px]"/>
      }
      <div className="flex h-full">
        <div className="flex flex-col gap-2 justify-between">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw] text-[#191919]">
            Less than 60% in <br /> Degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#F28C21] pl-[1.563vw] pb-[2.778vh]">
            {allCounts?.response?.filterDataCounts?.lessThanSixty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
