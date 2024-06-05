"use client";
import React, { useContext, useEffect, useState } from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import { Skeleton } from "@/components/ui/skeleton";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
const CounsellorCardHeader = () => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [filterParameter, setFilterParamter] = useState("");
  const {
    filteringData,
    page,
    size,
    setPage,
    setSize,
    handleScroll,
    setThroughCheckedIcon,
    setLessCheckedIcon,
    setPlacedCheckedIcon,
  } = useContext(GlobalContext);
  const {
    data: allCounts,
    isLoading,
    isError,
    refetch: countrefresh,
  } = useGetAllPlacementCountQuery();
  const isEmptyObject = Object.keys(filteringData).length === 0;
  const {
    data: counsellorFilterResponse,
    error,
    refetch,
  } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    parameter: isEmptyObject ? filterParameter : "",
    bodyData: filteringData,
  });

  useEffect(() => {
    refetch();
    if (!isEmptyObject) {
      setPlacedCheckedIcon(true);
      setLessCheckedIcon(false);
      setThroughCheckedIcon(false);
    }
    setAccumulatedData(counsellorFilterResponse?.response?.content || []);
  }, [filteringData, page, size, filterParameter]);

  useEffect(() => {
    if (counsellorFilterResponse && page > 0) {
      setAccumulatedData((prevData) => [
        ...(prevData || []),
        ...counsellorFilterResponse?.response?.content,
      ]);
    } else {
      setAccumulatedData(counsellorFilterResponse?.response?.content);
    }
  }, [counsellorFilterResponse]);

  const handleParameter = (param) => {
    setFilterParamter(param);
  };
  return (
    <>
      <section className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
        {isLoading ? (
          <div className=" flex flex-col gap-2 justify-center  w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
            <Skeleton className="h-7 w-[50%] ml-2" />
            <Skeleton className="h-10 w-[70%] ml-2" />
          </div>
        ) : (
          <TotalPlacedCard
            allCounts={allCounts}
            handleRefresh={countrefresh}
            handleCandidates={refetch}
            handleParameter={handleParameter}
          />
        )}

        {isLoading ? (
          <CardSkeleton />
        ) : (
          <DegreeCard
            allCounts={allCounts}
            handleParameter={handleParameter}
            isEmptyObject={isEmptyObject}
          />
        )}
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <OverviewCard
            allCounts={allCounts}
            handleParameter={handleParameter}
            isEmptyObject={isEmptyObject}
          />
        )}
      </section>
      <div
        onScroll={(event) => {
          handleScroll(event, page, setPage, counsellorFilterResponse);
        }}
        className="h-[58.889vh] overflow-auto myscrollbar"
      >
        {isLoading ? (
          <CardContentSkeleton />
          
        ) : (
          <PlacementContent counsellorFilterResponse={accumulatedData} />
        )}
      </div>
    </>
  );
};

export default CounsellorCardHeader;
