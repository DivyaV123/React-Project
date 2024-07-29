"use client";
import React, { useState,useEffect } from "react";
import "./IndividualCentres.scss";
import "../../IndividualBranches.scss";
import CommonBranch from "./CommonBranch";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { truncateText } from "@/lib/utils";
import { OFFLINE_BRANCHES } from "@/lib/RouteConstants";
import { usePathname, useRouter } from "next/navigation";
import Svg from "@/components/commonComponents/Svg/Svg";
const IndividualCentres = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [branchNameAndCountry, courseId] = pathname.split("/").slice(2, 4);
  const [branchName, branchcountry] = branchNameAndCountry.split(",");
  const decodeCountry = decodeURIComponent(branchcountry);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [countryTab, setCountryTab] = useState("India");
  const [activeTab, setActiveTab] = useState(true);
  const { data: homeBranchData, error, isLoading } = useGetAllBranchesQuery();
  const filterCountryObj = homeBranchData?.data?.filter(ele=>ele?.countryName===countryTab)
  const navCities = filterCountryObj?.[0]?.cities;
  const selectedCity = navCities?.find((city) => city.cityName === branchName);
  const selectedId = selectedCity?.courses?.find(
    (item) => String(item.courseId) === String(courseId)
  );
  const citiesPerView = 10;
  const newNavCities = filterCountryObj?.[0]?.cities?.map((element) => {
    return {
      name: element.cityName,
      course: element.courses,
    };
  });

  const totalCities = newNavCities?.length;


  useEffect(() => {
    setCountryTab(decodeCountry);
  }, [decodeCountry]);
  const handleBranchClick = (cityName) => {
    router.push(`${OFFLINE_BRANCHES}/${cityName},${countryTab}/${courseId}`);
  };

  const handleCountryTab = (country, ele) => {
    const cityTab = ele.cities[0].cityName;
    router.push(`${OFFLINE_BRANCHES}/${cityTab},${country}/${courseId}`);
    if (country === countryTab) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  };

  return (
    <div className="w-full cityNavbar">
      <header className="offlineHeader w-[87.5vw] m-auto">Our Offline Centres</header>
      <section className="flex gap-6 w-[87.5vw] m-auto  pt-4  items-center pb-4">
        {homeBranchData?.data?.map((ele) => {
          const countryName =
            ele.countryName === "United Kingdom"
              ? "UK"
              : ele.countryName === "United States of America"
              ? "USA"
              : ele.countryName;

          return (
            <button
              className={`text-[0.938vw] font-bold ${
                ele.countryName === decodeCountry ? "activecountry" : ""
              }`}
              onClick={() => handleCountryTab(ele.countryName, ele)}
              key={ele.countryName}
            >
              {countryName}
            </button>
          );
        })}
      </section>
      <section className="citySection w-[95vw] mobile:w-[92.558vw] m-auto pt-[1.667vh] pb-[8.889vh]">
        <div className="flex justify-between items-center gap-1 sm:w-[87.5vw] sm:m-auto">

        <div className="flex  items-center  sm:flex-wrap sm:gap-2 w-full">
            {newNavCities?.map((ele, index) => (
              <button
                onClick={() => handleBranchClick(ele.name)}
                className={`rounded-lg flex justify-center sm:px-[1.25vw] items-center mobile:w-[25vw] mobile:text-[2.791vw]  py-[1.111vh] mobile:py-[0.858vh] text-[0.938vw]  ${
                  ele.name === branchName ? "activeCity" : "inActiveCity"
                }`}
                key={index}
              >
                {ele.name}
              </button>
            ))}
          </div>
        </div>
        <section className="flex mobile:flex-col sm:gap-5 ">
          <div className="sm:w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar mobile:hidden">
            {selectedCity &&
              selectedCity?.courses?.map((item, index) => (
                <section className="mobile:mb-[1.717vh] mobileCentre">
                  <div
                    onClick={() =>
                      router.push(
                        `/offlineBranches/${branchName},${branchcountry}/${item.courseId}`
                      )
                    }
                    key={index}
                    className={`w-full sm:pr-6 sm:pl-4 sm:py-2.5 flex items-center gap-2.5 cursor-pointer mb-3 ${
                      String(item.courseId) === String(courseId)
                        ? "courseName"
                        : "bg-white rounded-md"
                    }`}
                  >
                    <img
                      src={item.courseIcon}
                      alt={item.courseName}
                      className="h-6 w-6 mobile:h-[3.863vh] mobile:w-[8.372vw]"
                    />
                    <h3
                      className={`text-[0.75rem] mobile:text-[2.791vw] font-medium ${
                        String(item.courseId) === String(courseId)
                          ? "text-white"
                          : "text-[#454545] "
                      }`}
                    >
                      {item.courseName}
                    </h3>
                  </div>
                  <div className="sm:hidden mobile:text-[2.558vw] mobile:pt-[1.931vh]">
                    {truncateText(item.courseDescription, 10)}
                  </div>
                </section>
              ))}
          </div>
          <div className="sm:hidden text-[#454545] text-[2.791vw] font-medium my-[2.575vh]">
            {selectedId?.courseName}
          </div>
          <CommonBranch selectedId={selectedId} page="NotofflineBranches" />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
