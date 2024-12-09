import React from "react";
import { Skeleton } from "../ui/skeleton";
const FilterSkeleton = () => {
  return (
    <div className="px-[1.875vw] pt-[2.778vh]">
      <Skeleton className="h-[2.5vh] w-[15.625vw] bg-white" />
      <div className="flex items-center py-[2.778vh] gap-6">
        <Skeleton className="h-[5vh] w-[8.75vw] bg-white" />
        <Skeleton className="h-[5vh] w-[8.75vw] bg-white" />
      </div>
      <div className="flex items-center space-x-2 pb-[2.222vh]">
        {/* <Skeleton className="w-[1.016vw] h-[1.806vh] bg-white" /> */}
        <Skeleton className="h-[2.5vh] w-[15.625vw] bg-white" />
      </div>
      <div className="flex items-center space-x-2 pb-[2.222vh]">
        {/* <Skeleton className="w-[1.016vw] h-[1.806vh] bg-white" /> */}
        <Skeleton className="h-[2.5vh] w-[15.625vw] bg-white" />
      </div>
      <div className="flex items-center space-x-2 pb-[2.222vh]">
        {/* <Skeleton className="w-[1.016vw] h-[1.806vh] bg-white" /> */}
        <Skeleton className="h-[2.5vh] w-[15.625vw] bg-white" />
      </div>
      <div className="flex items-center space-x-2 pb-[2.222vh]">
        {/* <Skeleton className="w-[1.016vw] h-[1.806vh] bg-white" /> */}
        <Skeleton className="h-[2.5vh] w-[15.625vw] bg-white" />
      </div>
    </div>
  );
};

export default FilterSkeleton;
