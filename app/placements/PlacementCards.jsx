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
import { useRouter, useSearchParams } from "next/navigation";

const PlacementCards = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { filterPlacementData, setFilterPlacementData, placementParam, page, size } = useContext(GlobalContext);
  const { data: allPlacementCount } = useGetAllPlacementCountQuery();
  const { data: counsellorFilterResponse, error, refetch, isLoading, isFetching } = useFetchCounsellorsQuery({
    pageNumber: page,
    pageSize: size,
    parameter: placementParam,
    bodyData: filterPlacementData
  });

  useEffect(() => {
    // Parse query parameters on initial load
    const params = new URLSearchParams(window.location.search);
    const newFilterPlacementData = {};
    params.forEach((value, key) => {
      newFilterPlacementData[key] = value.split(',');
    });

    setFilterPlacementData(newFilterPlacementData);
  }, []);

  useEffect(() => {
    refetch();
  }, [filterPlacementData, placementParam]);

  const emptyObj = Object.keys(filterPlacementData).length === 0;

  useEffect(() => {
    const searchParams = constructSearchParams();
    const fullURL = `${PLACEMENT_PATH}${searchParams ? `?${searchParams}` : ""}`;
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
    <>
      <div className="flex mobile:flex-wrap mb-4 sm:ml-[1.5rem] sm:mr-[2.25rem] sm:gap-[1.875rem]">
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <TotalPlacedCard allCounts={allPlacementCount} placementPage="GeneralPlacements" />
        )}
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <DegreeCard allCounts={allPlacementCount} placementPage="GeneralPlacements" />
        )}
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <NonItCard allCounts={allPlacementCount} placementPage="GeneralPlacements" />
        )}
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <BranchCard allCounts={allPlacementCount} placementPage="GeneralPlacements" />
        )}
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <OverviewCard allCounts={allPlacementCount} placementPage="GeneralPlacements" />
        )}
      </div>
      <Degree_Branch_Passout isLoading={isLoading} />
      <PlacementSideBar counsellorFilterResponse={counsellorFilterResponse} refetch={refetch} isLoading={isLoading} isFetching={isFetching} />
    </>
  );
};

export default PlacementCards;
