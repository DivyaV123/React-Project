'use client'
import React from "react";
import "./PlacementCards.scss";
const PlacementCards = () => {
  return (
    <div className="flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-[1.875rem]">
      <div className="placedCard">
        <div className="flex flex-col justify-between text-white h-full">
          <p className="font-medium pl-5 pt-5">Total Placed</p>
          <p className="font-bold text-[2rem] pl-5 pb-5">26,58,720</p>
        </div>
      </div>
      <div className="degreeCard">
        <div className="flex h-full">
          <div className="flex flex-col gap-2">
            <p className="font-medium pl-5 pt-5 text-[0.875rem]">Less than 60% in Degree</p>
            <p className="font-bold text-[1.5rem] text-[#F28C21] pl-5 pb-5">26,720</p>
          </div>
          <div>
            <img src="../front-view-young.svg"/>
          </div>
        </div>
      </div>
      <div className="nonItCard">
        <div className="flex h-full">
          <div className="flex flex-col justify-between ">
            <p className="font-medium pl-5 pt-5 text-[0.875rem]">Non-IT</p>
            <p className="font-bold text-[1.5rem] text-[#FD521B] pl-5 pb-5">1,11,584</p>
          </div>
          <div>
            <img className="h-full object-cover object-right" src="../medium-shot.svg"/>
          </div>
        </div>
      </div>
      <div className="branchCard">
        <div className="flex h-full">
          <div className="flex flex-col justify-between ">
            <p className="font-medium pl-5 pt-5 text-[0.875rem]">IT/CS/IS candidates</p>
            <p className="font-bold text-[1.5rem] text-[#DC4267] pl-5 pb-5">1,36,859</p>
          </div>
          <div>
            <img className="h-full object-cover " src="../happy-brunette.svg"/>
          </div>
        </div>
      </div>
      <div className="overviewCard">
        <div className="flex h-full">
          <div className="flex flex-col justify-between ">
            <p className="font-medium pl-5 pt-5 text-[0.875rem]">Throughout 60% in degree</p>
            <p className="font-bold text-[1.5rem] text-[#002248] pl-5 pb-5">23,59,365</p>
          </div>
          <div>
            <img className="h-full object-cover object-right" src="../smiling-happy.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCards;
