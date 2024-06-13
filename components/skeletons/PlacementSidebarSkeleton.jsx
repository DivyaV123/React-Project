import React from "react";
import { Skeleton } from "../ui/skeleton";
const PlacementSidebarSkeleton = () => {
  return (
    <section className="flex flex-col justify-start items-end pt-8 w-[15%] gap-3 mb-8 h-[58.889vh]  border rounded-xl">
      <Skeleton className="h-9  w-full" />
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-9  w-full" />
      <Skeleton className="h-9  w-full" />
      <Skeleton className="h-9  w-full" />
    </section>
  );
};

export default PlacementSidebarSkeleton;
