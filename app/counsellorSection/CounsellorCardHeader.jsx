'use client'
import React,{useContext,useEffect} from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { useGetLessthanSixtyQuery } from "@/redux/queries/getLessthanSixty";
import { useGetThroughOutSixtyQuery } from "@/redux/queries/getThroughOutSixty";
import { useFetchCounsellorsQuery } from '@/redux/queries/counsellorsApi'
import { GlobalContext } from "@/components/Context/GlobalContext"; 
const CounsellorCardHeader = () => {
  const {filteringData}=useContext(GlobalContext)  
  const {data:allCounts,isLoading,isError}=useGetAllPlacementCountQuery()
  const {data:lessthanSixty}=useGetLessthanSixtyQuery()
  const {data:ThroughoutSixty}=useGetThroughOutSixtyQuery()
  const { data:counsellorFilterResponse, error,refetch } = useFetchCounsellorsQuery({
      pageNumber: 1,
      pageSize: 1,
      parameter: "it",
      bodyData: filteringData
    });
    useEffect(() => {
      refetch(); 
    }, [filteringData]);
    
  return (
    <>
        <section className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
      <TotalPlacedCard allCounts={allCounts}/>
      <DegreeCard allCounts={allCounts}/>
      <OverviewCard allCounts={allCounts}/>
    </section>
    <div className="h-[58.889vh] overflow-auto myscrollbar">

    <PlacementContent counsellorFilterResponse={counsellorFilterResponse?.response?.content}/>
    </div>
    </>
  );
};

export default CounsellorCardHeader;
