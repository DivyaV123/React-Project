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
  const { filteringData, page, size, setPage, setSize } = useContext(GlobalContext)
  const { data: allCounts, isLoading, isError } = useGetAllPlacementCountQuery()
  const { data: lessthanSixty } = useGetLessthanSixtyQuery()
  const { data: ThroughoutSixty } = useGetThroughOutSixtyQuery()
  const { data: counsellorFilterResponse, error, refetch } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    parameter: "it",
    bodyData: filteringData
  });
  useEffect(() => {
    refetch();
  }, [filteringData, page, size]);

  useEffect(() => {
    if (counsellorFilterResponse) {
      setAccumulatedData(prevData => [...prevData, ...counsellorFilterResponse.response.content]);
    }
  }, [counsellorFilterResponse]);


  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      if (counsellorFilterResponse?.response.last === false && counsellorFilterResponse.response.totalPages >= page) {
        setPage(page + 1)
      }
    };
  }

  return (
    <>
      <section

        className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
        <TotalPlacedCard allCounts={allCounts} />
        <DegreeCard allCounts={allCounts} />
        <OverviewCard allCounts={allCounts} />
      </section>
      <div
        onScroll={(e) => {
          handleScroll(e)
        }}
        className="h-[58.889vh] overflow-auto myscrollbar">

        <PlacementContent counsellorFilterResponse={accumulatedData} />
      </div>
    </>
  );
};

export default CounsellorCardHeader;
