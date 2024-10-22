"use client";
import React, { useEffect, useContext, useState, useRef } from "react";
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
import PlacementFilterPopup from "./PlacementFilterPopup";
import LineLoader from "@/components/skeletons/LineLoader";
import NoContent from "../internalplacementstatistics/NoContent";
import PlacementContent from "./PlacementContent";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import MobileCardContentSkeleton from "@/components/skeletons/MobileCardContentSkeleton";
import PlacementContentGridMode from "./PlacementContentGridMode";
import { LayoutPanelLeft, List } from "lucide-react";
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
    sideBarBtn,
    page,
    size,
    setPage,
    setSize,
    handleScroll,
    selectedPlacementBtn,
    setSelectedPlacementBtn,
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
    less_than60: filteredDateRange?.less_than60,
    above_60: filteredDateRange?.above_60,
    non_it: filteredDateRange?.non_it,
    it: filteredDateRange?.it,
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
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
        // scrollToTop();
        router.replace(PLACEMENT_PATH);
      };
      setTimeout(resetStateAndURL, 0);
    }
    // scrollToTop();
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
  const [viewMode, setViewMode] = useState("list");
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [isFetchData, setIsFetchData] = useState(placementFetching);
  const scrollContainerRef = useRef(null);
  const [filterPopup, setFilterPopup] = useState(false);
  const [loaderKey, setLoaderKey] = useState(0);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [sideBarBtn, filteredDateRange]);
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
  const handleFilterButton = () => {
    setFilterPopup(true);
  };
  useEffect(() => {
    if (isFetchData && placementList?.next_page_url !== null) {
      setLoaderKey((prevKey) => prevKey + 1);
    }
  }, [isFetchData]);

  return (
    <Suspense>
      <div>
        <div className="placementContent">
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

          <PlacementSideBar
            isLoading={placementLoading}
            isFetching={placementFetching}
            placementList={placementList}
            scrollToTop={scrollToTop}
            scrollToBottom={scrollToBottom}
          />

          <div className="flex justify-between w-[86vw] m-auto mb-[2vh] ">
            <p className="text-[1.094vw] font-bold">
              Total placed Students{" "}
              {selectedPlacementBtn ? "-" + selectedPlacementBtn : ""}
            </p>
            <div>
              <div className="flex gap-2.5">
                <button onClick={() => setViewMode("list")}>
                  <List
                    className={
                      viewMode === "list"
                        ? "activeGridBtn "
                        : " non-activeGridBtn"
                    }
                  />
                </button>
                <button onClick={() => setViewMode("grid")}>
                  <LayoutPanelLeft
                    className={
                      viewMode === "grid"
                        ? "activeGridBtn "
                        : " non-activeGridBtn"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog popup="filterPopup">
        <AlertDialogTrigger asChild>
          <button className="sm:hidden flex gap-2.5 py-[0.858vh] pl-[3.488vw]">
            <img src="../../icons_filters.svg" />
            <p
              onClick={handleFilterButton}
              className="text-[3.256vw] font-semibold"
            >
              Filters
            </p>
          </button>
        </AlertDialogTrigger>
        <section>
          {placementLoading ? (
            <>
              <CardContentSkeleton />
              <MobileCardContentSkeleton />
            </>
          ) : (
            <section
              ref={scrollContainerRef}
              onScroll={(event) => {
                handleScroll(
                  event,
                  page,
                  setPage,
                  placementList,
                  setIsFetchData
                );
              }}
              className="sm:ml-6 grid place-items-center mobile:mx-[3.721vw]  h-[68vh] w-[97vw] overflow-y-scroll courseScroll"
            >
              {/* <PlacementContent placementList={accumulatedData} /> */}
              {viewMode === "list" ? (
                <PlacementContent placementList={accumulatedData} />
              ) : (
                <PlacementContentGridMode placementList={accumulatedData} />
              )}

              {isFetchData && placementList?.next_page_url !== null && (
                <LineLoader key={loaderKey} />
              )}
              {placementList?.results?.length == 0 && (
                <div className="w-full h-full flex justify-center items-center">
                  <NoContent />
                </div>
              )}
            </section>
          )}

          {filterPopup && (
            <PlacementFilterPopup setFilterPopup={setFilterPopup} />
          )}
        </section>
      </AlertDialog>
    </Suspense>
  );
};

export default PlacementCards;
