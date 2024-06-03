"use client";
import React, { useContext } from "react";
import "./IndividualCentres.scss";
import "../IndividualBranches.scss";
import CommonBranch from "./CommonBranch";
import { navCities } from "@/lib/jsonutil";
import { GlobalContext } from "@/components/Context/GlobalContext";
const IndividualCentres = () => {
  const {
    selectedBranch,
    setSelectedBranch,
    selectedCourseId,
    setSelectedCourseId,
  } = useContext(GlobalContext);
  const selectedCity = navCities?.find((city) => city.city === selectedBranch);
  const selectedId = selectedCity?.sublist?.find(
    (item) => String(item.id) === String(selectedCourseId)
  );
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[95vw] m-auto pt-3 pb-16">
        <div className="h-[2.65vw] flex cityNavbar">
          {navCities.map((ele, index) => (
            <div
              onClick={() => setSelectedBranch(ele.city)}
              className={`flex justify-center items-center w-[8.359vw] py-2  text-[0.938vw] 
              ${ele.city === selectedBranch ? "activeCity" : ""}`}
            >
              <button key={index}>{ele.city}</button>
            </div>
          ))}
        </div>
        <section className="flex gap-5 h-[609px]">
          <div className="w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar">
            {selectedCity &&
              selectedCity?.sublist?.map((item, index) => (
                <div
                  onClick={() => setSelectedCourseId(item.id)}
                  key={index}
                  className={`w-full pr-6 pl-4 py-3 flex items-center gap-2 cursor-pointer ${String(item.id) === String(selectedCourseId)
                      ? "courseName"
                      : ""
                    }`}
                >
                  <img src={item.image} alt={item.title} className="h-6 w-6" />
                  <h3
                    className={`text-[0.75rem] font-medium ${String(item.id) === String(selectedCourseId)
                        ? "text-white"
                        : "text-[#454545]"
                      }`}
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>
          <CommonBranch selectedId={selectedId} />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
