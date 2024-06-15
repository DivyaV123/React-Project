"use client";
import React, { useContext, useEffect, useState } from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import { Skeleton } from "@/components/ui/skeleton";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
import { useFetchCounsellorsQuery } from "@/redux/queries/counsellorsApi";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import BlinkingDots from "@/components/skeletons/BlinkingDots";
import { COUNSELLOR_SECTION, INTERNAL_STATS } from "@/lib/RouteConstants";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams,useSearchParams } from 'next/navigation'
import CounsellorFilters from "./CounsellorFilters";
import LinkCardSkeleton from "@/components/skeletons/LinkCardSkeleton";
const CounsellorCardHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const searchParams = useSearchParams()
  const search = searchParams.get('yop')
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
    bodyData: filteringData,
  });

  useEffect(() => {
    refetch();
    if (!isEmptyObject) {
      setPlacedCheckedIcon(true);
      setLessCheckedIcon(false);
      setThroughCheckedIcon(false);
    }
  }, [filteringData, page, size, filterParameter]);

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
    if (!isEmptyObject && pathname !== "/internalStats") {
      router.push(fullURL);
    } else if(isEmptyObject && pathname !== "/internalStats"){
      router.push(COUNSELLOR_SECTION);
    }
  }, [filteringData]);

  return (
    <div
      className={`${
        pathname === "/internalplacementstatistics"
          ? "px-[1.875vw] pt-[3.333vh] pb-[6.528vh] flex"
          : ""
      }`}
    >
      {pathname === "/internalplacementstatistics" && (
        <div>
          <CounsellorFilters />
        </div>
      )}

      <div
        className={`${
          pathname === "/internalplacementstatistics" ? "pl-[1.875vw]" : ""
        }`}
      >
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
              handleParameter={handleParameter}
              isEmptyObject={isEmptyObject}
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
      </div>
    </div>
  );
};

export default CounsellorCardHeader;
