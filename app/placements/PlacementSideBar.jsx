"use client";
import React, { useContext, useEffect, useState } from "react";
import PlacementContent from "./PlacementContent";
import "./PlacementSidebar.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import CardContentSkeleton from "@/components/skeletons/CardContentSkeleton";
import BlinkingDots from "@/components/skeletons/BlinkingDots";
import PlacementSidebarSkeleton from "@/components/skeletons/PlacementSidebarSkeleton";

const PlacementSideBar = ({
  counsellorFilterResponse,
  isFetching,
  isLoading,
}) => {
  const [accumulatedData, setAccumulatedData] = useState([]);
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
    nonItCheckedIcon
  } = useContext(GlobalContext);
  const [isFetchData,setIsFetchData]=useState(isFetching)
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

  useEffect(() => {
    if (counsellorFilterResponse) {
      if (page > 0) {
        setAccumulatedData((prevData) => [
          ...prevData,
          ...(counsellorFilterResponse?.response?.candidates?.content || []),
        ]);
      } else {
        setAccumulatedData(
          counsellorFilterResponse?.response?.candidates?.content || []
        );
      }
    }
  }, [counsellorFilterResponse]);
  return (
    <section className="flex ml-16 mb-8 h-[58.889vh]">
      {isLoading ? (
        <PlacementSidebarSkeleton />
      ) : (
        <aside className="sidebarContainer pt-[3.333vh]">
          {sideBar.map((classItem, index) => (
            <button
              key={index}
              className={`flex justify-between items-center px-[1.25vw] py-[2.222vh] mb-[0.833vh] w-full text-[1.094vw] ${
                classItem.title === sideBarBtn && !lesscheckedIcon && !throughcheckedIcon && !itCheckedIcon && !nonItCheckedIcon
                  ? "sideBarButton font-medium"
                  : ""
              }`}
              onClick={() => handlePlacementCommonFilter(classItem.title)}
            >
              <div>{classItem.title}</div>
              <img
                className="text-white"
                src={
                  classItem.title === sideBarBtn
                    ? classItem.icon
                    : classItem.blackIcon
                }
              />
            </button>
          ))}
        </aside>
      )}

      {isLoading ? (
        <CardContentSkeleton />
      ) : (
        <section
          onScroll={(event) => {
           
            handleScroll(event, page, setPage, counsellorFilterResponse,setIsFetchData);
          }}
          className="ml-6 w-[71.641vw] h-full overflow-y-scroll myscrollbar"
        >
          <PlacementContent
            counsellorFilterResponse={
              placementParam !== ""
                ? counsellorFilterResponse?.response?.content
                : accumulatedData
            }
          />
          {
          isFetchData &&
          <BlinkingDots/>
        }
        </section>
      )}
    </section>
  );
};

export default PlacementSideBar;
