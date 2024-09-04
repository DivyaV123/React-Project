import React from "react";
import { Skeleton } from "../ui/skeleton";
const MobileCardContentSkeleton = () => {
  return (
    <>
    <section className="w-[92.558vw] h-[20.386vh] ml-8 sm:hidden mt-6 flex gap-4">
      <div className="ml-4 mt-4 flex flex-col gap-4">
        <Skeleton className="w-[13.953vw] h-[6.438vh]"></Skeleton>
        <Skeleton className="w-[13.953vw] h-[6.438vh]"></Skeleton>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <Skeleton className="w-[20.698vw] h-[2.575vh]"></Skeleton>
        <Skeleton className="w-[36.744vw] h-[2.575vh]"></Skeleton>
        <Skeleton className="w-[60.93vw] h-[2.575vh]"></Skeleton>
      </div>

    </section>
    <section className="w-[92.558vw] h-[20.386vh] ml-8 sm:hidden mt-2 flex gap-4">
      <div className="ml-4 mt-4 flex flex-col gap-4">
        <Skeleton className="w-[13.953vw] h-[6.438vh]"></Skeleton>
        <Skeleton className="w-[13.953vw] h-[6.438vh]"></Skeleton>
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <Skeleton className="w-[20.698vw] h-[2.575vh]"></Skeleton>
        <Skeleton className="w-[36.744vw] h-[2.575vh]"></Skeleton>
        <Skeleton className="w-[60.93vw] h-[2.575vh]"></Skeleton>
      </div>

    </section>
    </>
  );
};

export default MobileCardContentSkeleton;
