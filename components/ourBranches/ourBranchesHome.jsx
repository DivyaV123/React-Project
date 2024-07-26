"use client";
import React, { useState, useContext, useEffect } from "react";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import TrainingMode from "./trainingMode/trainingMode";
import Slide from "react-reveal/Slide";
import Button from "../commonComponents/button/Button";
import OnlineLiveClasses from "./OnlineLiveClasses";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../Context/GlobalContext";
import {
  OFFLINE_BRANCHES,
  UPCOMING_BATCHES,
  COMBINED_BRANCHES,
} from "@/lib/RouteConstants";
import { Skeleton } from "@/components/ui/skeleton";
import "./ourBranchesHome.scss";
import { usePathname } from "next/navigation";
import Image from "next/image";
function OurBranchesHome({ page, tabData }) {
  const router = useRouter();
  const pathname = usePathname();
  const [courseId] = pathname.split("/").slice(2);
  const [isloading, setisLoading] = useState(true);
  const { setSelectedBranch, setSelectedBatch, homeBranchData, countryList } =
    useContext(GlobalContext);
  const [btnState, setBtnState] = useState("OfflineClasses");
  const [countryTab, setCountryTab] = useState("India");
  const [activeTab, setActiveTab] = useState(true);

  const filterCountryObj = countryList?.filter(
    (ele) => ele?.countryName === countryTab
  );
  const cityData = filterCountryObj && filterCountryObj[0]?.cities;
  let branchDetails = cityData;
  
  if (page !== "course" && branchDetails?.length > 0) {
    branchDetails = [
      ...branchDetails,
      { cityImage: "/images/AllCitiesCard.png", cityName: "AllCities" },
    ];
  }

  const handleImageRoute = (e, cityName) => {
    e.preventDefault();
    if (page !== "course" && cityName !== "AllCities") {
      setSelectedBranch(cityName);
      router.push(`${OFFLINE_BRANCHES}/${cityName},${countryTab}`);
    } else if (page === "course") {
      setSelectedBatch(cityName);
      router.push(`/courses/${courseId}/${cityName}`);
    } else if (page !== "course" && cityName === "AllCities") {
      router.push(`${COMBINED_BRANCHES}/${countryTab}`);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

  const handleCountryTab = (country) => {
    setCountryTab(country);
    if (country === countryTab) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  };
  return (
    <>
      {/* <MaxWebWidth sectionStyling="pb-8"> */}
      <section>
        <header>
          {page === "course" ? (
            <article className="sm:flex justify-between w-[100%] pt-[2.778vh] pb-[1.667vh] items-center mobile:pt-[2.575vh] ">
              <h1 className="flex justify-start text-[1.875vw] items-center font-bold sm:py-[2.778vh] mobile:text-[4.651vw] mobile:pb-[3.648vh]">
                Upcoming Batches
              </h1>
              <article className="flex justify-end bg-white  sm:py-[2.778vh]">
                {tabData?.includes("OFFLINECLASSES") && (
                  <>
                    <Button
                      className={
                        btnState === "OfflineClasses"
                          ? "font-semibold bg-orange-500 bg-gradient text-white sm:w-[9.609vw]  mobile:py-[0.858vh] mobile:px-[3.721vw] mobile:text-[2.791vw] rounded px-[1.25vw] py-[1.111vh] bg-[#F9F9F9] text-[0.938vw]"
                          : "sm:w-[9.609vw] rounded-s px-[1.25vw] py-[1.111vh]  mobile:py-[0.858vh] mobile:px-[3.721vw]  bg-[#F9F9F9] text-[0.938vw] text-[#454545] font-medium mobile:text-[2.791vw]"
                      }
                      onClick={() => {
                        setBtnState("OfflineClasses");
                      }}
                      title="Offline Classes"
                    ></Button>
                  </>
                )}
                {tabData?.includes("ONLINECLASSES") && (
                  <Button
                    onClick={() => {
                      setBtnState("OnlineLiveClasses");
                    }}
                    className={
                      btnState === "OnlineLiveClasses"
                        ? "font-semibold bg-orange-500 text-white  rounded px-[1.25vw] py-[1.111vh] mobile:py-[0.858vh] mobile:px-[3.721vw] mobile:text-[2.791vw]  bg-[#F9F9F9] text-[0.938vw]"
                        : " rounded-e px-[1.25vw] py-[1.111vh] bg-[#F9F9F9] text-[0.938vw] mobile:py-[0.858vh] mobile:px-[3.721vw] mobile:text-[2.791vw] text-[#454545] font-medium"
                    }
                    title="Online Live Classes"
                  ></Button>
                )}
              </article>
            </article>
          ) : (
            <Slide top cascade>
              <h1 className="flex justify-center text-[2.5vw] mobile:text-[5.581vw] sm:m-2 font-bold sm:p-5 mobile:py-[2.575vh]">
                Our Offline Centres
              </h1>
            </Slide>
          )}
        </header>
        <section className="flex gap-6 pl-4 pt-[1.389vh] justify-center items-center pb-9">
          {countryList?.map((ele) => {
            const countryName =
              ele.countryName === "United Kingdom"
                ? "UK"
                : ele.countryName === "United States of America"
                ? "USA"
                : ele.countryName;

            return (
              <button
                className={`text-[0.938vw] font-bold ${
                  countryTab === ele.countryName ? "activecountry" : ""
                }`}
                onClick={() => handleCountryTab(ele.countryName)}
                key={ele.countryName}
              >
                {countryName}
              </button>
            );
          })}
        </section>

        <article
          className={`${
            page === "course" && btnState === "OfflineClasses"
              ? "flex flex-wrap   gap-y-[1.944vh] w-fit justify-between py-[2.222vh]"
              : "flex flex-wrap   sm:gap-x-[1.094vw] sm:gap-y-[1.944vh] justify-center gap-6"
          }`}
        >
          {btnState === "OfflineClasses" ? (
            branchDetails?.length > 0 &&
            branchDetails.map((elements) => {
              return (
                <>
                  <div
                    className={
                      "hover:-translate-y-1 delay-300 duration-300 " +
                      (page !== "course"
                        ? "cursor-pointer"
                        : "w-[15.625vw] mobile:w-[44.186vw]")
                    }
                  >
                    {isloading ? (
                      <Skeleton className="h-[7.813vw] w-[15.625vw]" />
                    ) : page === "course" ? (
                      <div
                        onClick={(e) => handleImageRoute(e, elements.cityName)}
                        className={` relative h-[7.813vw] w-[15.625vw] mobile:w-[44.186vw] mobile:h-[8.155vh] rounded-lg flex flex-col justify-center items-center cursor-pointer`}
                        // style={{
                        //   backgroundImage: `url(${elements.cityImage})`,
                        //   backgroundRepeat: "no-repeat",
                        //   backgroundSize: "cover",
                        // }}
                      >
                        <Image
                          src={elements.cityImage}
                          height={750}
                          width={800}
                          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
                          className={`object-fit w-[100%] h-[100%] z-1 rounded-lg ${
                            elements.cityName !== "AllCities"
                              ? " brightness-50"
                              : ""
                          }`}
                        />
                        {elements.cityName !== "AllCities" && (
                          <p className="absolute">
                            <h1 className="font-bold text-white text-[1.875vw] mobile:text-[4.651vw] flex flex-col justify-center items-center">
                              {elements.cityName}
                            </h1>
                            <h1 className="text-white text-[1.094vw] mobile:text-[3.256vw] flex flex-col justify-center items-center">
                              {elements.branchCount} Branches
                            </h1>
                          </p>
                        )}
                      </div>
                    ) : (
                      <div
                        onClick={(e) => handleImageRoute(e, elements.cityName)}
                        className={` relative h-[7.813vw] w-[20.469vw] mobile:w-[44.186vw] mobile:h-[8.155vh] rounded-lg flex flex-col justify-center items-center`}
                        // style={{
                        //   backgroundImage: `url(${elements.cityImage})`,
                        //   backgroundRepeat: "no-repeat",
                        //   backgroundSize: "cover",
                        // }}
                      >
                        {elements.cityImage && (
                          <Image
                            src={elements.cityImage}
                            height={750}
                            width={800}
                            sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
                            className={`absolute object-fit w-[100%] h-[100%] z-1 rounded-lg ${
                              elements.cityName !== "AllCities"
                                ? " brightness-50"
                                : ""
                            }`}
                          />
                        )}

                        {elements.cityName !== "AllCities" && (
                          <p className="absolute">
                            <h1 className="font-bold text-white text-[1.875vw] mobile:text-[4.651vw] flex flex-col justify-center items-center">
                              {elements.cityName}
                            </h1>
                            <h1 className="text-white text-[1.094vw] mobile:text-[3.256vw] flex flex-col justify-center items-center">
                              {elements.branchCount} Branches
                            </h1>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </>
              );
            })
          ) : (
            <>
              <OnlineLiveClasses page="course" className="" />
              <div className="flex-col justify-end py-[2.222vh] mobile:hidden">
                <button className="py-[1.111vh] px-[1.406vw] text-[1.094vw] font-semibold EnrollButton">
                  View more
                </button>
              </div>
            </>
          )}
        </article>
      </section>
      {/* </MaxWebWidth > */}
      {page !== "course" && (
        <MaxWebWidth sectionStyling="sm:bg-[#F6F6F6]  bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain  bg-cover sm:my-[6.667vh]">
          <section>
            <TrainingMode />
          </section>
        </MaxWebWidth>
      )}
    </>
  );
}

export default OurBranchesHome;
