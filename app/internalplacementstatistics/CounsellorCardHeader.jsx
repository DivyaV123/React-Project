"use client";
import React, { useContext, useEffect, useState } from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import LineLoader from "@/components/skeletons/LineLoader";
import { COUNSELLOR_SECTION, INTERNAL_STATS } from "@/lib/RouteConstants";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import CounsellorFilters from "./CounsellorFilters";
import LinkCardSkeleton from "@/components/skeletons/LinkCardSkeleton";
import NoContent from "./NoContent";
import CounsellorFilterModal from "./CounsellorFilterModal";
import { useGetAllPlacementListQuery } from "@/redux/queries/getPlacementsList";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import BlinkingDots from "@/components/skeletons/BlinkingDots";
const CounsellorCardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [filterParameter, setFilterParamter] = useState("");
  const [loaderKey, setLoaderKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    
    setIsModalOpen(true);
    
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
   
  };
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
    setGenerateLink,
    generatedPath,scrollPage,setScrollPage,filteredDateRange
  } = useContext(GlobalContext);

  const isEmptyObject = Object.keys(filteringData).length === 0;
  const filterClass = "text-[#002248] text-[1.25vw] font-semibold mobile:text-[4.651vw]";
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
    bodyData: filteringData,
  });

  const {
    data: placementList,
    error: placementError,
    isLoading: placementLoading,
    isFetching: placementFetching,
    refetch: placementRefetch,
  } = useGetAllPlacementListQuery({page: scrollPage});
  const { data: allPlacementCount } = useGetAllPlacementCountQuery();
    useEffect(() => {
      placementRefetch();
    }, [scrollPage]);
  const [isFetchData, setIsFetchData] = useState(placementFetching);
  useEffect(() => {
    refetch();
    if (!isEmptyObject) {
      setPlacedCheckedIcon(true);
      setLessCheckedIcon(false);
      setThroughCheckedIcon(false);
    }
  }, [filteringData, page, size, filterParameter]);

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

  const constructSearchParams = () => {
    let searchParams = "";
    for (const key in filteringData) {
      if (filteringData.hasOwnProperty(key)) {
        if (searchParams !== "") {
          searchParams += "&";
        }
        searchParams += key + "=" + filteringData[key].join(",");
      }
    }
    return searchParams;
  };

  useEffect(() => {
    const searchParams = constructSearchParams();
    const fullURL = `${COUNSELLOR_SECTION}/${
      searchParams ? `?${searchParams}` : ""
    }`;
    const statsURL = `${INTERNAL_STATS}${
      searchParams ? `?${searchParams}` : ""
    }`;
    setGeneratedPath(statsURL);
    if (typeof window !== "undefined") {
      if (!isEmptyObject && pathname !== "/internalStats") {
        router.push(fullURL);
      } else if (isEmptyObject && pathname !== "/internalStats") {
        router.push(COUNSELLOR_SECTION);
      }
    }
  }, [filteringData]);
  const handleGenerateLink = (e) => {
    if (isEmptyObject) {
      e.preventDefault();
      return;
    }
    setGenerateLink(true);
  };

  useEffect(() => {
    if (isFetchData) {
      setLoaderKey(prevKey => prevKey + 1);
    }
  }, [isFetchData]);
  return (
    <div
      className={`${
        pathname === "/internalplacementstatistics"
          ? "sm:px-[1.875vw] sm:pt-[3.333vh] sm:pb-[6.528vh] flex"
          : ""
      }`}
    >
      {pathname === "/internalplacementstatistics" ? (
        <div>
          <CounsellorFilters />
        </div>
      ) : (
        ""
      )}

      <div
        className={`${
          pathname === "/internalplacementstatistics" ? "pl-[1.875vw]" : ""
        }`}
      >
        <section className="sm:px-[1.875vw] flex mobile:flex-wrap sm:gap-5 sm:pb-[3.333vh] sm:items-center">
          {isLoading ? (
            <LinkCardSkeleton />
          ) : (
            <TotalPlacedCard
              allCounts={allPlacementCount}
              handleCandidates={refetch}
              handleParameter={handleParameter}
            />
          )}
          {isLoading ?? isFetching ? (
            <LinkCardSkeleton />
          ) : (
            <DegreeCard
              allCounts={allPlacementCount}
              handleParameter={handleParameter}
              isEmptyObject={isEmptyObject}
            />
          )}
          {isLoading ? (
            <LinkCardSkeleton />
          ) : (
            <OverviewCard
              allCounts={allPlacementCount}
              handleParameter={handleParameter}
            />
          )}
        </section>
        <div className="hidden mobile:px-[1.875vw] mobile:mt-[1.5vh] mobile:mb-[1.5vh] mobile:block mobile:flex mobile:justify-between mobile:h-[5.579vh] mobile:w-[92.558vw] mobile:items-center">
        <div>
          <h2 className=" mobile:text-[3.721vw] mobile:font-bold ">Students Feedback</h2>
        </div>
        <div className=" mobile:flex  mobile:gap-[5vh]">
         <section> 
         {/* <img  src="../../icon_link.svg" className={`text-[#002248] text-[1.25vw] font-semibold pointer-events-none opacity-50`}/> */}
         {isEmptyObject ? (
                <img
                  src="../../icon_link.svg"
                  className={`${filterClass} pointer-events-none opacity-50`}
                />
              ) : (
                <a
                  href={generatedPath}
                  target="_blank"
                  onClick={handleGenerateLink}
                  className={`${filterClass} cursor-pointer`}
                >
                  <img title="Generate Link" src="../../icon_link.svg" />
                </a>
              )}
         </section>
         <button  onClick={() => handleModalOpen()}  className=" mobile:w-[24.556vw] mobile:gap-[1vw] mobile:flex mobile:justify-center mobile:items-center mobile:h-[4.133vh] mobile:rounded	bg-gradient mobile:text-[3.256vw] mobile:text-[white]  "> <img  src="../../icons_filters_mobile.png" className={`text-[#002248] text-[1.25vw] font-semibold pointer-events-none opacity-50 mx-1`}/>Filters</button>
        </div>

        </div>
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
          className="h-[58.889vh] overflow-auto myscrollbar mobile:w-[96vw] w-[69.063vw] ml-[1.875vw] rounded-2xl"
        >
          {accumulatedData.length > 0 ? (
            isLoading ? (
              <CardContentSkeleton />
            ) : (
              <>
                <PlacementContent  placementList={accumulatedData}/>
                {isFetchData  &&
                  <BlinkingDots/>}
              </>
            )
          ) : (
            <>
            <div className="w-full h-full flex justify-center items-center">

            <NoContent />
            </div>
            </>
          )}
        </div>
      </div>
      <CounsellorFilterModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
    </div>
  );
};

export default CounsellorCardHeader;
