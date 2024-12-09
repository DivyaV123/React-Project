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
import { useGetAllPlacementListQuery } from "@/redux/queries/getPlacementsList";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
const GenerateLinkHeader = () => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [filterParameter, setFilterParamter] = useState("");
  const [queryParams, setQueryParams] = useState({});
  const {
    filteringData,
    page,
    size,
    setPage,
    handleScroll,filteredDateRange,scrollPage
  } = useContext(GlobalContext);

  const isEmptyObject = Object.keys(filteringData).length === 0;
  
  
  const { data: allPlacementCount } = useGetAllPlacementCountQuery();
  const {
    data: placementList,
    error: placementError,
    isLoading: placementLoading,
    isFetching: placementFetching,
    refetch: placementRefetch,
  } = useGetAllPlacementListQuery({ page: scrollPage,
    
    joining_date_after: queryParams?.joining_date_after,
    joining_date_before: queryParams?.joining_date_before,
    degree_id: queryParams?.degree_id,
    d_stream_id: queryParams?.d_stream_id,
    masters_id: queryParams?.masters_id,
    m_stream_id: queryParams?.m_stream_id,
    highestyop: queryParams?.highestyop,
    stud_org_id:queryParams?.stud_org_id,
    stud_branch_id:queryParams?.stud_branch_id,
    state:queryParams?.state,
    city:queryParams?.city,
    university:queryParams.university,
    college:queryParams?.college,
    less_than60:queryParams?.less_than60,
    above_60:queryParams?.above_60,
   });
  const [isFetchData, setIsFetchData] = useState(placementFetching);
  


  useEffect(() => {
    if (placementList) {
      if (scrollPage > 1) {
        setAccumulatedData((prevData) => [
          ...prevData,
          ...(placementList?.results || []),
        ]);
      } else {
        setAccumulatedData(placementList?.results || []);
      }
    }
  }, [placementList]);

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
        {placementLoading ? (
          <LinkCardSkeleton />
        ) : (
          <TotalPlacedCard
            allCounts={allPlacementCount}
            handleCandidates={placementRefetch}
            handleParameter={handleParameter}
          />
        )}
        
        {placementLoading ? (
          <LinkCardSkeleton />
        ) : (
          <DegreeCard
            allCounts={allPlacementCount}
            handleCandidates={placementRefetch}
            handleParameter={handleParameter}
          />
        )}
        {placementLoading ? (
          <LinkCardSkeleton />
        ) : (
          <OverviewCard
            allCounts={allPlacementCount}
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
            placementList,
            setIsFetchData
          );
        }}
        className="h-[58.889vh] overflow-auto myscrollbar mobile:w-fit w-[69.063vw] ml-[1.875vw] rounded-2xl"
      >
        {placementLoading ? (
          <CardContentSkeleton />
        ) : (
          <>
            {accumulatedData.length > 0 ? (
              <>
                <PlacementContent placementList={accumulatedData} />
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
