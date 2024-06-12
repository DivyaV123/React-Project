import React from "react";
import { Skeleton } from "../ui/skeleton";
const BarSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[44.219vw] h-[2.65vw] mt-5" />
      <Skeleton className="w-[29.453vw] h-[2.65vw] mt-5" />
      <Skeleton className="w-[20.313vw] h-[2.65vw] mt-5" />
    </>
  );
};

export default BarSkeleton;
