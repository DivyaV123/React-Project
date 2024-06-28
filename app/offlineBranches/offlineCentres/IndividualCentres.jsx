"use client";
import React, { useContext } from "react";
import "./IndividualCentres.scss";
import "../IndividualBranches.scss";
import CommonBranch from "./CommonBranch"
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { truncateText } from "@/lib/utils";
const IndividualCentres = () => {
  const {
    selectedBranch,
    setSelectedBranch,
    selectedCourseId,
    setSelectedCourseId,
  } = useContext(GlobalContext);
  const { data: homeBranchData, error, isLoading } = useGetAllBranchesQuery();
  let navCities = homeBranchData?.data[0]?.cities
  const selectedCity = navCities?.find((city) => city.cityName === selectedBranch);
  const selectedId = selectedCity?.courses?.find(
    (item) => String(item.courseId) === String(selectedCourseId)
  );
  console.log(selectedId, "navCities in...")
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[95vw] m-auto pt-3 pb-16">
        <div className="h-[2.65vw] flex cityNavbar">
          {navCities?.map((ele, index) => (
            <div
              onClick={() => setSelectedBranch(ele.cityName)}
              className={`flex justify-center items-center w-[8.359vw] py-2  text-[0.938vw] 
              ${ele.cityName === selectedBranch ? "activeCity" : ""}`}
            >
              <button key={index}>{ele.cityName}</button>
            </div>
          ))}
        </div>
        <section className="flex gap-5 h-[609px]">
          <div className="w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar">
            {selectedCity &&
              selectedCity?.courses?.map((item, index) => (
                <section className="mobile:mb-[1.717vh] mobileCentre">
                  {console.log(item, "itemitem")}
                  <div
                    onClick={() => setSelectedCourseId(item.courseId)}
                    key={index}
                    className={`w-full sm:pr-6 sm:pl-4 sm:py-3 flex items-center gap-2 cursor-pointer ${String(item.courseId) === String(selectedCourseId)
                      ? "sm:courseName"
                      : ""
                      }`}
                  >
                    <img src={item.courseIcon} alt={item.courseName} className="h-6 w-6 mobile:h-[3.863vh] mobile:w-[8.372vw]" />
                    <h3
                      className={`text-[0.75rem] mobile:text-[2.791vw] font-medium ${String(item.courseId) === String(selectedCourseId)
                        ? "text-white"
                        : "text-[#454545]"
                        }`}
                    >
                      {item.courseName}
                    </h3>
                  </div>
                  <div className="sm:hidden mobile:text-[2.558vw] mobile:pt-[1.931vh]">{truncateText(item.courseDescription, 10)}</div>
                </section>
              ))}
          </div>
          <CommonBranch selectedId={selectedId} page='NotofflineBranches' />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
