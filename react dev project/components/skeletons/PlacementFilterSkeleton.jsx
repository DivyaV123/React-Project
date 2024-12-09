import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";
const PlacementFilterSkeleton = () => {
  return (
    <div className='flex ml-8 rounded-2xl  gap-4 sm:hidden'>
<Skeleton className="w-[25.744vw] h-[3.219vh]"></Skeleton>
<Skeleton className="w-[25.744vw] h-[3.219vh]"></Skeleton>
<Skeleton className="w-[25.744vw] h-[3.219vh]"></Skeleton>
    </div>
  )
}

export default PlacementFilterSkeleton