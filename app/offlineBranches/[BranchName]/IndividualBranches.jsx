"use client";
import React, { useContext, useState, useEffect } from "react";
import "../IndividualBranches.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useRouter } from "next/navigation";
import {  OFFLINE_BRANCHES } from "@/lib/RouteConstants";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { truncateText } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { toProperCase } from "@/lib/utils";
const IndividualBranches = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [branchPath] = pathname.split("/").slice(2);
  const [branchName, branchcountry] = branchPath.split(",");
  const decodeCountry = decodeURIComponent(branchcountry);

  
  const [countryTab, setCountryTab] = useState("india");
  const [activeTab, setActiveTab] = useState(true);
  const { setSelectedCourseId ,domainVariable} = useContext(GlobalContext);
    let domain = domainVariable === "Qspiders" ? "qspiders" : domainVariable === "Jspiders" ? "jspiders" : domainVariable === "Pyspiders" ? "pyspiders" : "bspiders"
  const { data: homeBranchData, error, isLoading } = useGetAllBranchesQuery(domain);

  const filterCountryObj = homeBranchData?.data?.filter(
    (ele) => ele?.countryName === countryTab
  );

  let newNavCities = filterCountryObj?.[0]?.cities?.map((element) => {
    return {
      name: element.cityName,
      course: element.courses,
    };
  });

  const selectedCity = newNavCities?.find((city) => city.name === branchName);

  const handleCourseRoute = (e, course) => {
    e.preventDefault();
    router.push(`/courses/${course}`);
    setSelectedCourseId(course);
  };

  useEffect(() => {
    setCountryTab(decodeCountry);
  }, [decodeCountry]);

  const handleCountryTab = (country, ele) => {
    const cityTab = ele.cities[0].cityName;
    router.push(`${OFFLINE_BRANCHES}/${cityTab},${country}`);
    if (country === countryTab) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  };

  const handleBranchClick = (cityName) => {
    router.push(`${OFFLINE_BRANCHES}/${cityName},${countryTab}`);
  };

  return (
    <div className="w-full cityNavbar">
      <header className="offlineHeader w-[87.5vw] m-auto">
        Our Offline Branches
      </header>
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
              {toProperCase(countryName)}
            </button>
          );
        })}
      </section>
      <section className="justify-center citySection w-[87.5vw]  mobile:w-[92.558vw] m-auto pt-[1.667vh] pb-[8.889vh]">
        <div className="flex justify-between items-center gap-1 ">
          <div className="flex  items-center  sm:flex-wrap sm:gap-2 w-full">
            {newNavCities?.map((ele, index) => (
              <button
                onClick={() => handleBranchClick(ele.name)}
                className={`rounded-lg flex justify-center sm:px-[1.25vw] items-center mobile:w-[25vw] mobile:text-[2.791vw]  py-[1.111vh] mobile:py-[0.858vh] text-[0.938vw]  ${
                  ele.name === branchName ? "activeCity" : "inActiveCity"
                }`}
                key={index}
              >
                {toProperCase(ele.name)}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:pt-[3.333vh] mobile:py-[2.575vh]">
          <p className="font-medium text-[0.938vw] text-[#4987CE] mobile:text-[2.791vw]">
            Select Course to View our offline Centres
          </p>
        </div>
        <section className="w-[87.5vw] m-auto pt-[1.667vh] flex flex-wrap mobile:flex-col gap-6">
          {selectedCity &&
            selectedCity?.course?.map((course, index) => (
              <div
                onClick={(e) => handleCourseRoute(e, course.courseId)}
                key={index}
                className="BranchCard  py-[1.111vh] px-[0.625vw] mobile:px-[2.326vw] mobile:py-[1.073vh] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={course.courseIcon}
                    alt={course.courseName}
                    className="h-[3.333vh] w-[1.875vw] mobile:w-[8.372vw] mobile:h-[3.863vh]"
                  />
                  <h3 className="text-[0.938vw] text-[#454545] font-bold mobile:text-[2.791vw] p-1">
                    {course.courseName}
                  </h3>
                </div>
                <div>
                  <article
                    title={course.courseDescription}
                    className="text-[#575757] text-[0.866vw] pt-[2.222vh] mobile:text-[2.558vw] mobile:pt-[0.858vh]"
                  >
                    {truncateText(course.courseDescription, 75)}
                  </article>
                </div>
              </div>
            ))}
        </section>
      </section>
    </div>
  );
};

export default IndividualBranches;
