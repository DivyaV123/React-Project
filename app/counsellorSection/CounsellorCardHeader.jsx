'use client'
import React from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { useGetLessthanSixtyQuery } from "@/redux/queries/getLessthanSixty";
import { useGetThroughOutSixtyQuery } from "@/redux/queries/getThroughOutSixty";
const CounsellorCardHeader = () => {
  const {data:allCounts,isLoading,isError}=useGetAllPlacementCountQuery()
  const {data:lessthanSixty}=useGetLessthanSixtyQuery()
  const {data:ThroughoutSixty}=useGetThroughOutSixtyQuery()
  console.log(ThroughoutSixty,"ThroughoutSixty")
  return (
    <>
        <section className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
      <TotalPlacedCard allCounts={allCounts}/>
      <DegreeCard allCounts={allCounts}/>
      <OverviewCard allCounts={allCounts}/>
    </section>
    <div className="h-[58.889vh] overflow-auto myscrollbar">

    <PlacementContent/>
    </div>
    </>
  );
};

export default CounsellorCardHeader;
