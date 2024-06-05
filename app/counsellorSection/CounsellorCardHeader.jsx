'use client'
import React, { useContext, useEffect, useState } from "react";
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
  const [accumulatedData, setAccumulatedData] = useState([]);
  const { filteringData, page, size, setPage, setSize, handleScroll } = useContext(GlobalContext)
  const { data: allCounts, isLoading, isError } = useGetAllPlacementCountQuery()
  const { data: lessthanSixty } = useGetLessthanSixtyQuery()
  const { data: ThroughoutSixty } = useGetThroughOutSixtyQuery()
  const { data: counsellorFilterResponse, error, refetch } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    parameter: "",
    bodyData: filteringData
  });
  useEffect(() => {
    refetch();
    setAccumulatedData(counsellorFilterResponse?.response?.content || [])
  }, [filteringData, page, size]);

  useEffect(() => {
    if (counsellorFilterResponse && page > 0) {
      setAccumulatedData(prevData => [...(prevData || []), ...counsellorFilterResponse?.response?.content]);
    } else {
      setAccumulatedData(counsellorFilterResponse?.response?.content)
    }
  }, [counsellorFilterResponse]);


  return (
    <>
      <section

        className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
        <TotalPlacedCard allCounts={allCounts} />
        <DegreeCard allCounts={allCounts} />
        <OverviewCard allCounts={allCounts} />
      </section>
      <div
        onScroll={(event) => {
          handleScroll(event, page, setPage, counsellorFilterResponse)
        }}
        className="h-[58.889vh] overflow-auto myscrollbar">

        <PlacementContent counsellorFilterResponse={accumulatedData} />
      </div>
    </>
  );
};

export default CounsellorCardHeader;
