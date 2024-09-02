"use client";
import { useContext } from "react";
import Slide from "react-reveal/Slide";
import "./PlacementStatisticsHome.scss";
import { Badge } from "@/components/ui/badge";
import { Fade } from "react-reveal";
import PlaceMentStatistics from "./placeMentStatistics";
import Link from "next/link";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { PLACEMENT_PATH } from "@/lib/RouteConstants";
import Image from "next/image";
import { branchAbbreviations } from "@/lib/utils";
import { formatToIndianCurrency } from "@/lib/utils";
function PlacementStatisticsHome({ page }) {
  const { setAllStaticsCount, setNonItCheckedIcon,setItCheckedIcon,setThroughCheckedIcon, setLessCheckedIcon,setPlacedCheckedIcon,setSideBarBtn,setHomePlacements } =
    useContext(GlobalContext);
  const {
    data: countDetails,
    error,
    isLoading,
  } = useGetAllPlacementCountQuery();
  setAllStaticsCount(countDetails);
  const imageSrc =
    page === "branch" || page === "course"
      ? "/graduationReportIcon.svg"
      : "/graduationReportIcon.svg";

  const degrees = [
    "BE",
    "BCA",
    "BCOM",
    "MCA",
    "M.Tech",
    "MBA",
    "MSC",
    "MSW",
    "More...",
  ];
  const branches = [
    "CS",
    "IS",
    "E&C",
    "Civil",
    "HR",
    "Mech",
    "AE",
    "CTM",
    "More...",
  ];
  const statistics = [
    {
      count: `${formatToIndianCurrency(countDetails?.results[0]?.report?.above_60)}`,
      info: "Students who have throughout 60% Aggregate",
      icon: "../placementIcon1.svg",
      key: "throughoutsixty",
      toSet: setNonItCheckedIcon,
    },
    {
      count: `${formatToIndianCurrency(countDetails?.results[0]?.report?.non_it)}`,
      info: "Students who have graduated in Non - IT",
      icon: "../staticsIcon02.svg",
      key: "nonit",
      toSet: setNonItCheckedIcon,
    },
    {
      count: `${formatToIndianCurrency(countDetails?.results[0]?.report?.it)}`,
      info: "Students who have graduated in IT/CS/IS",
      icon: "../placementIcon03.svg",
      key: "it",
      toSet: setNonItCheckedIcon,
    },
    {
      count: `${formatToIndianCurrency(countDetails?.results[0]?.report?.less_than_60)}`,
      info: "Students who have less than 60% Aggregate",
      icon: "../placementIcon04.svg",
      key: "lessthansixty",
      toSet: setLessCheckedIcon,
    },
  ];
  const invertedBranchAbbreviations = Object.fromEntries(
    Object.entries(branchAbbreviations).map(([key, value]) => [value, key])
  );
const disableIcons =()=>{
  setHomePlacements(true)
  setLessCheckedIcon(false);
  setThroughCheckedIcon(false);
  setNonItCheckedIcon(false);
  setItCheckedIcon(false);
  setPlacedCheckedIcon(false)
  setSideBarBtn('')
}

  return (
    <section className="sm:w-[87.5vw] sm:m-auto mobile:w-full  align-center sm:mt-8 bg-Pinkgradient-tab tabView:w-full">
      <header>
        <Slide top cascade>
          <h1
            className={`font-bold text-[2rem] mobile:text-[5.581vw] mobile:flex mobile:justify-center text-black flex ${page === "course" || "branch" ? "justify-start" : "justify-center"} sm:mb-8 sm:mt-8 sm:h-12 mobile:bg-Pinkgradient  mobile:pt-[2.575vh] mobile:pb-[1.717vh] mobile:pl-[5.581vw]} tabView:text-[3.226vw] tabView:pt-10`}
          >
            Our Placement Statistics
          </h1>
        </Slide>
      </header>
      <article className="bg-Pinkgradient sm:rounded-b-2xl relative sm:rounded-r-2xl flex mobile:flex-col justify-between sm:rounded-tl-[120px] sm:mt-8 sm:p-[5%] mobile:px-[2.326vw] md:bg-none tabView:block">
        <aside className="sm:p-2 tabView:columns-2 tabView:item-center">
          <Fade left duration={1000} deley={0}>
            <figure className="absolute top-[-4%] left-[-6.5%] mobile:hidden tabView:hidden">
              {/* <img className='w-[75%]' src={page === "branch" || page === "course" ? '../graduationCapIcon.svg' : './graduationCapIcon.svg'}></img> */}
              <Image
                src="/graduationCapIcon.svg"
                alt="Graduation Report Icon"
                width={500}
                height={500}
                className="w-[90%]"
              />
            </figure>
          </Fade>

          <PlaceMentStatistics path={page} statistics={statistics} />
        </aside>
        <section className="relative sm:p-2 tabView:columns-2">
          <figure className="absolute top-[-18%] left-[50%] mobile:hidden tabView:hidden">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="Graduation Report Icon"
                width={500}
                height={500}
                className="w-[90%]"
              />
            )}
            {/* <img className='w-[90%]' src={page === "branch" || page === "course" ? '../graduationReportIcon.svg' : './graduationReportIcon.svg'}></img> */}
          </figure>

          <aside className="sm:pr-[2.188vw] sm:pb-[5.556vh] mobile:pt-[4.292vh] tabView:ml-11">
            <h1 className="font-bold text-[1.563vw] sm:pb-[4.861vh] mobile:pb-[3.219vh] mobile:text-[4.651vw] mobile:flex mobile:justify-center tabView:text-[2.688vw] tabView:mt-7 tabView:ml-3.5">
              From Various Degree
            </h1>
            <div className="flex flex-wrap mobile:gap-2.5 mobile:justify-between gap-[1.125rem] sm:w-[37.094vw] mobile:w-[92.558vw] mobile:pb-[4.292vh]">
              {degrees.map((element) => {
                const href =
                  element === "More..."
                    ? PLACEMENT_PATH
                    : `${PLACEMENT_PATH}?degree=${encodeURIComponent(element)}`;
                return (
                  <Link href={href}>
                    <Badge
                    onClick={disableIcons}
                      variant=""
                      className="font-bold text-[1.563vw] mobile:text-[4.186vw] mobile:py-[1.502vh] badgeHover tabView:text-[2.419vw] tabView:w-28"
                    >
                      {element}
                    </Badge>
                  </Link>
                );
              })}
            </div>

            <aside className="sm:pt-[8.333vh]">
              <h1 className="font-bold text-[1.563vw] sm:pb-[4.861vh] mobile:pb-[3.219vh] mobile:flex mobile:justify-center mobile:text-[4.651vw] tabView:text-[2.688vw] tabView:ml-2.5">
                From Various Branches
              </h1>
              <div className="flex flex-wrap mobile:gap-2.5 mobile:justify-between  sm:gap-[1.125rem] sm:w-[37.094vw] mobile:w-[92.558vw] mobile:pb-[9.442vh]">
                {branches.map((element) => {
                  const originalStream = invertedBranchAbbreviations[element];
                  const href =
                    element === "More..."
                      ? PLACEMENT_PATH
                      : `${PLACEMENT_PATH}?stream=${encodeURIComponent(
                          originalStream
                        )}`;
                  return (
                    <Link href={href}>
                      <Badge
                        variant=""
                        onClick={disableIcons}
                        className="font-bold text-[1.563vw] mobile:text-[4.186vw] mobile:py-[1.502vh] badgeHover tabView:text-[2.419vw] tabView:w-28"
                      >
                        {element}
                      </Badge>
                    </Link>
                  );
                })}
              </div>
            </aside>
          </aside>
        </section>
      </article>
    </section>
  );
}

export default PlacementStatisticsHome;
