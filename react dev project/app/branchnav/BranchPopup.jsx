"use client";
import React, { useState,useContext } from "react";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/lib/Loading";
import { NAV_BAR, HOME_PATH } from "@/lib/RouteConstants";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import "./BranchPopup.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { toProperCase } from "@/lib/utils";
const BranchPopup = () => {
     const { domainVariable } = useContext(GlobalContext);
      let domain = domainVariable === "Qspiders" ? "qspiders" : domainVariable === "Jspiders" ? "jspiders" : domainVariable === "Pyspiders" ? "pyspiders" : "bspiders"
  const router = useRouter();
  const [countryTab, setCountryTab] = useState("india");
  const [activeTab, setActiveTab] = useState(true);
  const {
    data: BranchResponse,
    error: branchError,
    isLoading: branchIsLoading,
  } = useGetAllBranchesQuery(domain);
  const getAllBranches = BranchResponse?.data;
  // const countryNames = ["india", "USA", "UK"];
  const countryNames = ["india"];
  const handleGetAllBranches = (city) => {
    router.push(`/branchnav/${city}`);
  };
  const handleCountryTab = (country) => {
    setCountryTab(country);
    if (country === countryTab) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  };
  return (
    <section className="w-full h-full block">
      {branchIsLoading ? (
        <Loading />
      ) : (
        <>
          <section className="flex justify-between my-[2.575vh] mx-[3.721vw] items-center">
            <Link className="flex items-center" href={NAV_BAR}>
              <img className="" src="/icon_arrow_left.svg" />
              <div className="font-bold text-[3.256vw]">Branches</div>
            </Link>
            <Link className="border-none hover:bg-white p-0" href={HOME_PATH}>
              <Svg
                className="w-[6.512vw] h-[3.004vh] outline-none"
                width={svgicons.cancelButtonIcon[0]}
                height={svgicons.cancelButtonIcon[1]}
                viewBox={svgicons.cancelButtonIcon[2]}
                icon={svgicons.cancelButtonIcon[3]}
                color={svgicons.cancelButtonIcon[4]}
              />
            </Link>
          </section>
          <section className="flex gap-6 ">
            {countryNames.map((ele) => (
              <button
                className={`px-[3.721vw] py-[1.395vh] text-[2.791vw] font-bold ${
                  countryTab === ele ? "activecountry" : ""
                } `}
                onClick={() => handleCountryTab(ele)}
              >
                {toProperCase(ele)}
              </button>
            ))}
          </section>
          <section className=" mx-[3.721vw] my-[0.858vh]">
            {getAllBranches?.[0]?.cities?.map((branch) => (
              <div
                className="flex justify-between py-[1.073vh]"
                onClick={() => handleGetAllBranches(branch.cityName)}
              >
                <div className="flex gap-4">
                  <img src={branch.cityIcon} />
                  <div className="text-[2.791vw] text-[#454545] font-semibold">
                    {toProperCase(branch.cityName)}
                  </div>
                </div>
                <div>
                  <img src="/arrow_right.svg" />
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default BranchPopup;
