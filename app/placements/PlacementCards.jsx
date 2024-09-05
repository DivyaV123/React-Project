"use client";
import React, { useEffect, useContext } from "react";
import "./PlacementCards.scss";
import TotalPlacedCard from "./TotalPlacedCard";
import DegreeCard from "./DegreeCard";
import NonItCard from "./NonItCard";
import BranchCard from "./BranchCard";
import OverviewCard from "./OverviewCard";
import Degree_Branch_Passout from "./Degree_Branch_Passout";
import PlacementSideBar from "./PlacementSideBar";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { PLACEMENT_PATH } from "@/lib/RouteConstants";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useGetAllPlacementListQuery } from "@/redux/queries/getPlacementsList";
import TotalPlacedMobileSkeleton from "@/components/skeletons/TotalPlacedMobileSkeleton";
const PlacementCards = () => {
  const router = useRouter();
  const searchParams = typeof window !== "undefined" && useSearchParams();
  const {
    filterPlacementData,
    setFilterPlacementData,
    placementParam,
    setSideBarBtn,
    homePlacements,
    scrollPage,
    filteredDateRange,
    setFilteredRange,
  } = useContext(GlobalContext);
  const { data: allPlacementCount } = useGetAllPlacementCountQuery();
  const {
    data: placementList,
    error: placementError,
    isLoading: placementLoading,
    isFetching: placementFetching,
    refetch: placementRefetch,
  } = useGetAllPlacementListQuery({
    page: scrollPage,
    testimonial_id: filteredDateRange?.testimonial_id,
    joining_date_after: filteredDateRange?.joining_date_after,
    joining_date_before: filteredDateRange?.joining_date_before,
    degree_id: filteredDateRange?.degree_id,
    d_stream_id: filteredDateRange?.d_stream_id,
    masters_id: filteredDateRange?.masters_id,
    m_stream_id: filteredDateRange?.m_stream_id,
    highestyop: filteredDateRange?.highestyop,
    verified_testimonial: true,
    less_than60:filteredDateRange?.less_than60,
    above_60:filteredDateRange?.above_60,
    non_it: filteredDateRange?.non_it,
    it: filteredDateRange?.it,
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Parse query parameters on initial load or when URL changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const newFilterPlacementData = {};
    params.forEach((value, key) => {
      newFilterPlacementData[key] = value.split(",");
    });
    setFilterPlacementData(newFilterPlacementData);
  }, [searchParams]);

  useEffect(() => {
    if (!homePlacements) {
      const resetStateAndURL = () => {
        setFilterPlacementData({});
        setSideBarBtn("");
        scrollToTop();
        router.replace(PLACEMENT_PATH);
      };
      setTimeout(resetStateAndURL, 0);
    }
    scrollToTop();
  }, [homePlacements]);
  useEffect(() => {
    placementRefetch();
  }, [scrollPage, filteredDateRange]);

  const emptyObj = Object.keys(filterPlacementData).length === 0;

  useEffect(() => {
    const searchParamsString = constructSearchParams();
    const fullURL = `${PLACEMENT_PATH}${
      searchParamsString ? `?${searchParamsString}` : ""
    }`;

    if (!emptyObj) {
      router.push(fullURL);
    } else {
      router.push(PLACEMENT_PATH);
    }
  }, [filterPlacementData]);

  const constructSearchParams = () => {
    let searchParams = "";
    for (const key in filterPlacementData) {
      if (filterPlacementData.hasOwnProperty(key)) {
        if (searchParams !== "") {
          searchParams += "&";
        }
        searchParams += key + "=" + filterPlacementData[key].join(",");
      }
    }
    return searchParams;
  };

  return (
    <Suspense>
      <div className="flex mobile:flex-wrap mb-4 sm:ml-[1.5rem] sm:mr-[2.25rem] sm:gap-[1.875rem]">
        {placementLoading ? (
          <>
            <div className="mobile:hidden">
              <CardSkeleton />
            </div>
            <div className="sm:hidden">
              <TotalPlacedMobileSkeleton />
            </div>
          </>
        ) : (
          <TotalPlacedCard
            allCounts={allPlacementCount}
            placementPage="GeneralPlacements"
          />
        )}
        {placementLoading ? (
          <CardSkeleton />
        ) : (
          <DegreeCard
            allCounts={allPlacementCount}
            placementPage="GeneralPlacements"
          />
        )}
        {placementLoading ? (
          <CardSkeleton />
        ) : (
          <NonItCard
            allCounts={allPlacementCount}
            placementPage="GeneralPlacements"
          />
        )} 
        {placementLoading ? (
          <CardSkeleton />
        ) : (
          <BranchCard
            allCounts={allPlacementCount}
            placementPage="GeneralPlacements"
          />
        )}
        {placementLoading ? (
          <CardSkeleton />
        ) : (
          <OverviewCard
            allCounts={allPlacementCount}
            placementPage="GeneralPlacements"
          />
        )}
      </div>
      <Degree_Branch_Passout
        isLoading={placementLoading}
        isFetching={placementFetching}
        scrollToTop={scrollToTop}
      />
      <PlacementSideBar
        isLoading={placementLoading}
        isFetching={placementFetching}
        placementList={placementList}
      />
    </Suspense>
  );
};

export default PlacementCards;
