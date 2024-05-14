import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function TrainingCardSkeleton() {
    return (
        <div className="flex flex-col space-y-3 p-5 w-[15.63rem] bg-white rounded-xl h-[23vw]">
            <div className='flex justify-center w-full'>
                <Skeleton className="h-[8vw] w-[8vw] rounded-full  mb-8 w-[50%]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[12rem]" />
                <Skeleton className="h-4 w-[13rem]" />
                <Skeleton className="h-4 w-[12rem]" />
                <Skeleton className="h-4 w-[13rem]" />
            </div>
        </div>
    )
}

export default TrainingCardSkeleton