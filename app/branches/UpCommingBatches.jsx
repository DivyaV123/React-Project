import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import OnlineLiveClasses from "@/components/ourBranches/OnlineLiveClasses";
import React, { useState } from "react";
import Button from "@/components/commonComponents/button/Button";
function UpCommingBatches({ branchesData, branchName }) {
  const [visibleCards, setVisibleCards] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const showViewMoreButton =
    branchesData.length % 4 !== 0 && visibleCards < branchesData.length;

  const handleViewToggle = () => {
    if (showAll) {
      setVisibleCards(4);
    } else {
      setVisibleCards(branchesData.length);
    }
    setShowAll(!showAll);
  };

  const cardsToDisplay = branchesData.slice(0, visibleCards);

  return (
    <>
      <MaxWebWidth>
        <header>
          <h1 className="font-bold text-[2rem] mobile:text-[4.651vw] sm:pb-5 mobile:pb-[3.433vh]">
            Upcoming Batches
          </h1>
        </header>
      </MaxWebWidth>
      <MaxWebWidth
        sectionStyling="sm:pb-5"
        articalStyling="flex sm:flex-wrap sm:gap-y-[16px] gap-x-[1.65vw]  mobile:overflow-x-scroll mobile:offlineScrollbar "
      >
        <OnlineLiveClasses
          branchName={branchName}
          branchesData={cardsToDisplay}
          page="course"
          className="border mobile:m-2 rounded shadow shadow-gray-500/50"
        />
      </MaxWebWidth>
      {(showViewMoreButton || showAll) &&  (
        <MaxWebWidth sectionStyling="mobile:hidden">
          <div className="flex justify-end pt-4">
            <Button
              className="bg-gradient w-[9.375vw] h-[5.694vh] text-[0.938vw] text-white rounded-md"
              title={showAll ? "View Less" : "View more"}
              onClick={handleViewToggle}
            />
          </div>
        </MaxWebWidth>
      )}
    </>
  );
}

export default UpCommingBatches;
