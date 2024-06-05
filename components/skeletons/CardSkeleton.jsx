import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 justify-around w-[17.969vw]  h-[9.897vw] border rounded-2xl mt-3">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-7 w-[7vw] ml-2 mt-2" />
          <Skeleton className="h-10 w-[10vw] ml-2 mt-3" />
        </div>
        <Skeleton className="h-[8vw] w-[25%] mr-2" />
      </div>
    </div>
  );
};

export default CardSkeleton;
