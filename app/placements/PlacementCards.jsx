"use client";
import React, { useEffect, useState } from "react";
import "./PlacementCards.scss";
import { Skeleton } from "@/components/ui/skeleton";
import TotalPlacedCard from "./TotalPlacedCard";
import DegreeCard from "./DegreeCard";
import NonItCard from "./NonItCard";
import BranchCard from "./BranchCard";
import OverviewCard from "./OverviewCard";
import Degree_Branch_Passout from "./Degree_Branch_Passout";
import PlacementSideBar from "./PlacementSideBar";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { useGetItandNonItQuery } from "@/redux/queries/getItandNonIt";
import { useGetLessthanSixtyQuery } from "@/redux/queries/getLessthanSixty";
import { useGetThroughOutSixtyQuery } from "@/redux/queries/getThroughOutSixty";
const PlacementCards = () => {
  const { data: allCounts, isLoading } = useGetAllPlacementCountQuery();
  const {data:lessthanSixty}=useGetLessthanSixtyQuery()
  const {data:ThroughoutSixty}=useGetThroughOutSixtyQuery()
  const {data:getItandNonit}=useGetItandNonItQuery('it')
  const [isloading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="flex mb-4 ml-[1.5rem] mr-[2.25rem] gap-[1.875rem]">
        {isloading ? (
          <div className=" flex flex-col gap-2 justify-center  w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <Skeleton className="h-7 w-[50%] ml-2" />
            <Skeleton className="h-10 w-[70%] ml-2" />
          </div>
        ) : (
          <TotalPlacedCard allCounts={allCounts} />
        )}
        {isloading ? (
          <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-7 w-[7vw] ml-2 mt-2" />
                <Skeleton className="h-10 w-[10vw] ml-2 mt-3" />
              </div>
              <Skeleton className="h-[8vw] w-[25%] mr-2" />
            </div>
          </div>
        ) : (
          <DegreeCard allCounts={allCounts} />
        )}
        {isloading ? (
          <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-7 w-[7vw] ml-2 mt-2" />
                <Skeleton className="h-10 w-[10vw] ml-2 mt-3" />
              </div>
              <Skeleton className="h-[8vw] w-[25%] mr-2" />
            </div>
          </div>
        ) : (
          <NonItCard allCounts={allCounts} />
        )}
        {isloading ? (
          <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-7 w-[7vw] ml-2 mt-2" />
                <Skeleton className="h-10 w-[10vw] ml-2 mt-3" />
              </div>
              <Skeleton className="h-[8vw] w-[25%] mr-2" />
            </div>
          </div>
        ) : (
          <BranchCard allCounts={allCounts} />
        )}
        {isloading ? (
          <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <Skeleton className="h-7 w-[7vw] ml-2 mt-2" />
                <Skeleton className="h-10 w-[10vw] ml-2 mt-3" />
              </div>
              <Skeleton className="h-[8vw] w-[25%] mr-2" />
            </div>
          </div>
        ) : (
          <OverviewCard allCounts={allCounts} />
        )}
      </div>
      <Degree_Branch_Passout />
      <PlacementSideBar />
    </>
  );
};

export default PlacementCards;
