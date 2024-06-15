"use client";
import React, { useContext, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import PlacementContent from "../placements/PlacementContent";
import BlinkingDots from "@/components/skeletons/BlinkingDots";
import LinkCardSkeleton from "@/components/skeletons/LinkCardSkeleton";
const GenerateLinkHeader = () => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [filterParameter, setFilterParamter] = useState("");
  const [queryParams, setQueryParams] = useState({});
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
    setGeneratedPath,
    generateLink,
    generatedPath,
  } = useContext(GlobalContext);

  const isEmptyObject = Object.keys(filteringData).length === 0;
  const {
    data: counsellorFilterResponse,
    error,
    refetch,
    isLoading,
    isFetching,
  } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    parameter: isEmptyObject ? filterParameter : "",
    bodyData: queryParams,
  });

  useEffect(() => {
    if (counsellorFilterResponse) {
      if (page > 0) {
        setAccumulatedData((prevData) => [
          ...prevData,
          ...counsellorFilterResponse?.response?.candidates?.content,
        ]);
      } else {
        setAccumulatedData(
          counsellorFilterResponse?.response?.candidates?.content || []
        );
      }
    }
  }, [counsellorFilterResponse]);

  const handleParameter = (param) => {
    setFilterParamter(param);
  };
  useEffect(() => {
    const parseQueryParams = () => {
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString);
      const queryParamsObject = {};
      for (const [key, value] of params.entries()) {
        if (queryParamsObject[key]) {
          if (!Array.isArray(queryParamsObject[key])) {
            queryParamsObject[key] = [queryParamsObject[key]];
          }
          queryParamsObject[key].push(...value.split(","));
        } else {
          queryParamsObject[key] = value.split(",");
        }
      }
      setQueryParams(queryParamsObject);
    };
    parseQueryParams();
  }, []);

  return (
    <>
      <section className="px-[1.875vw] flex gap-5 pb-[3.333vh] items-center">
        {isLoading ? (
          <LinkCardSkeleton/>
        ) : (
          <TotalPlacedCard
            allCounts={counsellorFilterResponse}
            handleCandidates={refetch}
            handleParameter={handleParameter}
          />
        )}
        {isLoading ? (
          <LinkCardSkeleton />
        ) : (
          <DegreeCard
            allCounts={counsellorFilterResponse}
            handleCandidates={refetch}
            handleParameter={handleParameter}
          />
        )}
        {isLoading ? (
          <LinkCardSkeleton />
        ) : (
          <OverviewCard
            allCounts={counsellorFilterResponse}
            handleParameter={handleParameter}
          />
        )}
      </section>
      <div
        onScroll={(event) => {
          handleScroll(event, page, setPage, counsellorFilterResponse);
        }}
        className="h-[58.889vh] overflow-auto myscrollbar w-[69.063vw] ml-[1.875vw] rounded-2xl"
      >
        {isLoading ? (
          <CardContentSkeleton />
        ) : (
          <PlacementContent counsellorFilterResponse={accumulatedData} />
        )}
        {isFetching && <BlinkingDots />}
      </div>
    </>
  );
};

export default GenerateLinkHeader;
