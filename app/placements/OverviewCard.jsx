import React,{useContext} from "react";
import "./PlacementCards.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
const OverviewCard = ({allCounts,handleParameter}) => {
  const { setThroughCheckedIcon,setLessCheckedIcon,throughcheckedIcon ,setPlacedCheckedIcon,setPage,setFilteringData} = useContext(GlobalContext)
  // const handleClick = () => {
  //   // if(!isEmptyObject) return
  //   handleParameter("throughoutsixty");
  //   setPage(0)
  //   setFilteringData({})
  //   setThroughCheckedIcon(true)
  //   setPlacedCheckedIcon(false)
  //   setLessCheckedIcon(false)
  // };
  console.log(allCounts?.response?.filterDataCounts?.throughOutSixty,"allcounts")
  return (
    <div className="overviewCard relative cursor-pointer" >
        {
throughcheckedIcon &&
      <img src="../../checked.svg" className="absolute -right-[7px] -top-[9px]"/>
      }
      <div className="flex h-full">
        <div className="flex flex-col justify-between ">
          <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw]">
            Throughout 60% in degree
          </p>
          <p className="font-bold text-[1.875vw] text-[#002248] pl-[1.563vw] pb-[2.778vh]">
            {allCounts?.response?.filterDataCounts?.throughOutSixty}
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
