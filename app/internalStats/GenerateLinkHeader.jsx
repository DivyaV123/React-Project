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
import NoContent from "../internalplacementstatistics/NoContent";
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
  const [isFetchData, setIsFetchData] = useState(isFetching);
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
      <section 
      // className="px-[1.875vw] flex gap-5 pb-[3.333vh] items-center"
      className="sm:px-[1.875vw] mobile:w-fit flex mobile:flex-wrap sm:gap-5 sm:pb-[3.333vh] sm:items-center"
      >
        {isLoading ? (
          <LinkCardSkeleton />
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
          handleScroll(
            event,
            page,
            setPage,
            counsellorFilterResponse,
            setIsFetchData
          );
        }}
        className="h-[58.889vh] overflow-auto myscrollbar mobile:w-fit w-[69.063vw] ml-[1.875vw] rounded-2xl"
      >
        {isLoading ? (
          <CardContentSkeleton />
        ) : (
          <>
            {accumulatedData.length > 0 ? (
              <>
                <PlacementContent counsellorFilterResponse={accumulatedData} />
                {isFetchData && <BlinkingDots />}
              </>
            ) : (
              <>
                <div className="w-full h-full flex justify-center items-center">
                  <NoContent />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GenerateLinkHeader;
