"use client";
import React, { useState } from "react";
import "./IndividualCentres.scss";
import "../../IndividualBranches.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import CommonBranch from "./CommonBranch";
import { navCities } from "@/lib/jsonutil";
const IndividualCentres = () => {
  const params = useParams();
  const paramCity = params.offline;
  const paramId = params.centre;
  const selectedCity = navCities?.find((city) => city.city === paramCity);
  const selectedId = selectedCity?.sublist?.find(
    (item) => String(item.id) === String(paramId)
  );
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[95vw] m-auto pt-3 pb-16">
        <div className="h-[2.65vw] flex cityNavbar">
          {navCities.map((ele, index) => (
            <Link
              href={{
                pathname: `/offlineBranches/${ele.city}/offlineCentres/${1}`,
                query: { city: ele.city },
              }}
              replace
              className={`flex justify-center items-center w-[8.359vw] py-2  text-[0.75rem] 
              ${ele.city === paramCity ? "activeCity" : ""}`}
            >
              <button key={index}>{ele.city}</button>
            </Link>
          ))}
        </div>
        <section className="flex gap-5 h-[609px]">
          <div className="w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar">
            {selectedCity &&
              selectedCity?.sublist?.map((item, index) => (
                <Link
                  href={{
                    pathname: `/offlineBranches/${selectedCity.city}/offlineCentres/${item.id}`,
                    query: { city: selectedCity.city },
                  }}
                  replace
                  key={index}
                  className={`w-full pr-6 pl-4 py-3 flex items-center gap-2 ${
                    String(item.id) === String(paramId) ? "courseName" : ""
                  }`}
                >
                  <img src={item.image} alt={item.title} className="h-6 w-6" />
                  <h3
                    className={`text-[0.75rem] font-medium ${
                      String(item.id) === String(paramId)
                        ? "text-white"
                        : "text-[#454545]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </Link>
              ))}
          </div>          
          <CommonBranch selectedId={selectedId} />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
