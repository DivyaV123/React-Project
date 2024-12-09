import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const CardSkeleton = () => {
  return (
    <>
    <div className="flex flex-col gap-2  justify-around w-[17.969vw] mobile:w-[39.256vw] mobile:h-[12.876vh]  h-[9.897vw] border rounded-2xl mt-3 mobile:ml-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-7 w-[7vw] mobile:w-[19vw] ml-2 mt-2" />
          <Skeleton className="h-10 w-[10vw] mobile:w-[15vw] ml-2 mt-3" />
        </div>
        <Skeleton className="h-[8vw] mobile:h-[23vw] w-[25%] mr-2" />
      </div>
    </div>
    </>
  );
};

export default CardSkeleton;
