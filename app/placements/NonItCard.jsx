import React from 'react'
import "./PlacementCards.scss";
const NonItCard = ({allCounts}) => {
  return (
    <div className="nonItCard">
          <div className="flex h-full">
            <div className="flex flex-col justify-between ">
              <p className="font-medium pl-[1.563vw] pt-[2.778vh] text-[1.094vw]">Non-IT</p>
              <p className="font-bold text-[1.875vw] text-[#FD521B] pl-[1.563vw] pb-[2.778vh]">{allCounts?.response?.nonItCount}</p>
            </div>
            {/* <div>
              <img className="h-full object-cover object-right" src="../blue_card.png" />
            </div> */}
          </div>
        </div>
  )
}

export default NonItCard