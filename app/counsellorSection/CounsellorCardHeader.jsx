import React from "react";
import TotalPlacedCard from "../placements/TotalPlacedCard";
import DegreeCard from "../placements/DegreeCard";
import OverviewCard from "../placements/OverviewCard";
import PlacementContent from "../placements/PlacementContent";
const CounsellorCardHeader = () => {
  return (
    <>
        <section className="px-[6.641vw] flex gap-6 pb-[3.333vh] items-center">
      <TotalPlacedCard />
      <DegreeCard />
      <OverviewCard />
    </section>
    <div className="h-[58.889vh] overflow-auto myscrollbar">

    <PlacementContent/>
    </div>
    </>
  );
};

export default CounsellorCardHeader;
