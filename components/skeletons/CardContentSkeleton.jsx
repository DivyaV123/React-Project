import React from "react";
import { Skeleton } from "../ui/skeleton";
const CardContentSkeleton = () => {
  return (
    <section className="ml-6 w-[71.641vw] h-full flex overflow-y-scroll myscrollbar rounded border ">
      <div className="w-[15.547vw] flex m-3">
        <Skeleton className="h-[15vw] w-[71vw]" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <Skeleton className="h-4 w-[45vw]" />
        <Skeleton className="h-4 w-[45vw]" />
        <Skeleton className="h-4 w-[30vw]" />
        <Skeleton className="h-4 w-[25vw]" />
        <Skeleton className="h-4 w-[25vw]" />
        <Skeleton className="h-4 w-[25vw]" />
        <Skeleton className="h-4 w-[25vw]" />
      </div>
      <div className="flex flex-col ml-4 gap-3 mt-5">
        <Skeleton className="w-[7vw] h-[5vw] mb-5" />
        <Skeleton className="w-[7vw] h-[5vw]" />
      </div>
    </section>
  );
};

export default CardContentSkeleton;
