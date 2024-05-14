import React from "react";
import { AllBranches } from "@/lib/jsonutil";
import CommonBranch from "../offlineBranches/offlineCentres/CommonBranch";
import './AllBranchCard.scss';
import { Skeleton } from "@/components/ui/skeleton"
const AllBranchCards = () => {
  return (
    <>
      <section className="w-[87.5vw] m-auto">
        <header className="pt-10 pb-8 font-bold text-[1.5rem] ">
          Our Offline branches
        </header>
      </section>
      {AllBranches.map((ele) => (
        <section className="w-full pb-16 cardBackground myscrollbar">
          <div className="flex gap-2.5 pt-8 pl-[6%]">
            <img src="../icon_fill_location.svg" />
            <header className="text-[1.25rem] text-[#454545]">{ele.city}</header>
          </div>
          <CommonBranch selectedId={ele} page='offlineBranches'/>
        </section>
      ))}
    </>
  );
};

export default AllBranchCards;
