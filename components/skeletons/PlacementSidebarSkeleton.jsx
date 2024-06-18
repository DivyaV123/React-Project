import React from "react";
import { Skeleton } from "../ui/skeleton";
const PlacementSidebarSkeleton = () => {
  return (
    <section className="flex flex-col justify-start items-end pt-[4.444vh] w-[18.203vw] gap-3 mb-[4.444vh] h-[58.889vh]  border rounded-xl">
      <Skeleton className="h-[5vh]  w-full" />
      <Skeleton className="h-[5vh] w-full" />
      <Skeleton className="h-[5vh] w-full" />
      <Skeleton className="h-[5vh]  w-full" />
      <Skeleton className="h-[5vh]  w-full" />
      <Skeleton className="h-[5vh]  w-full" />
    </section>
  );
};

export default PlacementSidebarSkeleton;
