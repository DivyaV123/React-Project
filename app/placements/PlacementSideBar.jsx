"use client";
import React, { useContext, useEffect, useState } from "react";
import PlacementContent from "./PlacementContent";
import "./PlacementSidebar.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import PlacementSidebarSkeleton from "@/components/skeletons/PlacementSidebarSkeleton";
import LineLoader from "@/components/skeletons/LineLoader";
import NoContent from "../internalplacementstatistics/NoContent";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import PlacementFilterPopup from "./PlacementFilterPopup";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
const PlacementSideBar = ({
  counsellorFilterResponse,
  isFetching,
  isLoading,
  refetch,
}) => {
  const [accumulatedData, setAccumulatedData] = useState([]);
  const [filterPopup, setFIlterPopup] = useState(false);
  const [loaderKey, setLoaderKey] = useState(0);
  const {
    page,
    size,
    setPage,
    setSize,
    handleScroll,
    filterPlacementData,
    setFilterPlacementData,
    setPlacementParam,
    placementParam,
    sideBarBtn,
    setSideBarBtn,
    handlePlacementCommonFilter,
    lesscheckedIcon,
    throughcheckedIcon,
    itCheckedIcon,
    nonItCheckedIcon,
    activeSidebarBtn,
  } = useContext(GlobalContext);
  const [isFetchData, setIsFetchData] = useState(isFetching);
  const sideBar = [
    {
      title: "Recent Placements",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
    // {
    //   title: "Top Salaries",
    //   icon: "../../icon_arrow_white.svg",
    //   blackIcon: "../../icon_arrow.svg",
    // mobile: true,
    // },
    {
      title: "Last week",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
    {
      title: "Last month",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
    {
      title: "Last 3 months",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
    {
      title: "Last 6 months",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
  ];
  const mobileSidebar = [
    {
      title: "Recent Placements",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
    {
      title: "Last 3 months",
      icon: "../../icon_arrow_white.svg",
      blackIcon: "../../icon_arrow.svg",
    },
  ];
  const searchParams = useSearchParams(); // Initialize searchParams
  const pathname = usePathname();
  const params = pathname.split("/").pop();
  // const getSideBarTitleFromTimePeriod = (timePeriod) => {
  //   if (!timePeriod) return "Recent Placements";

  //   const dateRange = timePeriod.split(",").map((date) => new Date(date));
  //   const differenceInDays =
  //     (dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24);
  //   switch (differenceInDays) {
  //     case 7:
  //       return "Last week";
  //     case 31:
  //       return "Last month";
  //     case 30:
  //       return "Last month";
  //     case 91:
  //       return "Last 3 months";
  //     case 92:
  //       return "Last 3 months";
  //     case 181:
  //       return "Last 6 months";
  //     case 182:
  //       return "Last 6 months";
  //     default:
  //       return "Recent Placements";
  //   }
  // };
  const getSideBarTitleFromTimePeriod = (timePeriod) => {
    if (!timePeriod) return "Recent Placements";
  
    const dateRange = timePeriod.split(",").map((date) => new Date(date));
    const differenceInDays = Math.round(
      (dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24)
    );
    
    
  
    if (differenceInDays <= 7) return "Last week";
    if (differenceInDays <= 31) return "Last month";
    if (differenceInDays <= 92) return "Last 3 months";
    if (differenceInDays <= 182) return "Last 6 months";
  
    return "Recent Placements";
  };
  
  const degree = searchParams.get("degree");
  const stream = searchParams.get("stream");
  const yop = searchParams.get("yop");
  useEffect(() => {
    const timePeriod = searchParams.get("timePeriod");

    timePeriod &&
      !degree &&
      setSideBarBtn(getSideBarTitleFromTimePeriod(timePeriod));
    params === "placements" &&
      !timePeriod &&
      !degree &&
      !stream &&
      !yop &&
      setSideBarBtn("Recent Placements");
  }, [searchParams, degree, stream, yop]);
  useEffect(() => {
    if (counsellorFilterResponse) {
      if (page > 0) {
        if (placementParam !== "") {
          setAccumulatedData((prevData) => [
            ...prevData,
            ...(counsellorFilterResponse?.response?.content || []),
          ]);
        } else {
          setAccumulatedData((prevData) => [
            ...prevData,
            ...(counsellorFilterResponse?.response?.candidates?.content || []),
          ]);
        }
      } else {
        if (placementParam !== "") {
          setAccumulatedData(counsellorFilterResponse?.response?.content || []);
        } else {
          setAccumulatedData(
            counsellorFilterResponse?.response?.candidates?.content || []
          );
        }
      }
    }
  }, [counsellorFilterResponse, placementParam]);
  const handleFilterButton = () => {
    setFIlterPopup(true);
  };
  useEffect(() => {
    if (isFetchData && !counsellorFilterResponse?.response?.candidates?.last) {
      setLoaderKey((prevKey) => prevKey + 1);
    }
  }, [isFetchData, counsellorFilterResponse]);
  return (
    <AlertDialog popup="filterPopup">
      <section className="flex mobile:flex-col sm:ml-[1.875vw] sm:mb-[1.111vh] h-[58.889vh]">
        {isLoading ? (
          <PlacementSidebarSkeleton />
        ) : (
          <aside className="sidebarContainer sm:pt-[3.333vh] mobile:ml-[3.721vw] mobile:items-center">
            <div className="mobile:w-[68.372vw] mobile:flex items-center">
              {sideBar.map((classItem, index) => (
                <button
                  key={index}
                  className={`flex justify-between items-center mobileRadius px-[1.25vw] py-[2.222vh] mobile:py-[0.429vh] mobile:px-[3.256vw] mb-[0.833vh] sm:w-full text-[1.094vw] mobile:text-[3.256vw] mobile:hidden ${
                    classItem.title === sideBarBtn &&
                    !lesscheckedIcon &&
                    !throughcheckedIcon &&
                    !itCheckedIcon &&
                    !nonItCheckedIcon
                      ? "sideBarButton font-medium"
                      : ""
                  }`}
                  onClick={() => handlePlacementCommonFilter(classItem.title)}
                >
                  <div>{classItem.title}</div>
                  <img
                    className="text-white mobile:hidden"
                    src={
                      classItem.title === sideBarBtn
                        ? classItem.icon
                        : classItem.blackIcon
                    }
                  />
                </button>
              ))}
              {mobileSidebar.map((classItem, index) => (
                <button
                  key={index}
                  className={`flex sm:hidden justify-between items-center mobileRadius mobile:py-[0.429vh] mobile:px-[3.256vw] mb-[0.833vh] sm:w-full text-[1.094vw] mobile:text-[3.256vw] ${
                    classItem.title === sideBarBtn &&
                    !lesscheckedIcon &&
                    !throughcheckedIcon &&
                    !itCheckedIcon &&
                    !nonItCheckedIcon
                      ? "sideBarButton font-medium"
                      : ""
                  }`}
                  onClick={() => handlePlacementCommonFilter(classItem.title)}
                >
                  <div>{classItem.title}</div>
                </button>
              ))}
            </div>
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
          </aside>
        )}

        {isLoading ? (
          <CardContentSkeleton />
        ) : (
          <section
            onScroll={(event) => {
              handleScroll(
                event,
                page,
                setPage,
                counsellorFilterResponse,
                setIsFetchData
              );
            }}
            className="sm:ml-6 mobile:mx-[3.721vw] sm:w-[71.641vw] h-full overflow-y-scroll courseScroll"
          >
            <PlacementContent counsellorFilterResponse={accumulatedData} />

            {isFetchData &&
              !counsellorFilterResponse?.response?.candidates?.last && (
                <LineLoader key={loaderKey} />
              )}
            {counsellorFilterResponse?.response?.candidates?.empty && (
              <div className="w-full h-full flex justify-center items-center">
                <NoContent />
              </div>
            )}
          </section>
        )}

        {filterPopup && (
          <PlacementFilterPopup setFIlterPopup={setFIlterPopup} />
        )}
      </section>
    </AlertDialog>
  );
};

export default PlacementSideBar;
