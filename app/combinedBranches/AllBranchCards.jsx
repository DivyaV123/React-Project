"use client";
import React from "react";
import { AllBranches } from "@/lib/jsonutil";
import CommonBranch from "../offlineBranches/offlineCentres/CommonBranch";
import "./AllBranchCard.scss";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBranchCourseQuery } from "@/redux/queries/getBranchCourseApi";

const AllBranchCards = () => {
  const BranchNames = [
    "Basavangudi",
    "Old Airport Road",
    "Rajajinagar",
    "Hebbal",
    "BTM Layout",
  ];
  const { data: branchData, error, isLoading } = useGetAllBranchCourseQuery();
  console.log(branchData, "branchData");
  const AllBranchCourse = branchData?.data;

  return (
    <>
      <section className="w-[87.5vw] m-auto mobile:w-[92.558vw]">
        <header className="pt-10 sm:pb-8 font-bold text-[1.875vw] mobile:text-[5.581vw] mobile:pb-[4.292vh] mobile:pt-[2.575vh]">
          Our Offline branches
        </header>
      </section>
      {AllBranchCourse?.length > 0 &&
        AllBranchCourse.map((ele) => (
          <section key={ele.cityName} className="w-full pb-16 mobile:pb-[1.717vh] cardBackground myscrollbar">
            <div className="flex gap-2.5 pt-8 pl-[6%] mobile:pt-[1.717vh] mobile:pb-[2.575vh]">
              <img src="../icon_fill_location.svg" alt="location icon" />
              <header className="text-[1.25rem] mobile:text-[3.721vw] text-[#454545]">
                {ele.cityName}
              </header>
            </div>
            <section className=" sm:hidden flex flex-wrap gap-6 pl-[5.581vw]">
              {ele?.branches?.map((branch, branchIndex) => (
                <button
                  key={branchIndex}
                  className="w-[41.628vw] h-[7.296vh] text-[3.721vw] bg-[#ffffff] text-center"
                >
                  {branch?.branchName}
                </button>
              ))}
            </section>
            <CommonBranch selectedId={ele} page="offlineBranches" />
          </section>
        ))}
    </>
  );
};

export default AllBranchCards;
