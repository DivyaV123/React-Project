import { Skeleton } from "@/components/ui/skeleton"
import React from 'react'

function LandingCarosalSkeleton() {
    return (
        <div className='flex h-[84vh]'>
            <div>
                <Skeleton className='h-[11.25vw] w-[45.078vw] bg-litePink flex flex-col justify-center mt-[4.25rem] gap-4'>
                    <Skeleton className='w-[29vw] h-10  bg-yellow-50 ml-4 rounded-full' />
                    <Skeleton className='w-[38vw] h-10 bg-yellow-50 ml-4 rounded-full' />
                </Skeleton>

                <div className="mt-4 ">
                    <Skeleton className='w-[48vw] h-5 mb-3 bg-litePink   rounded-full' />
                    <Skeleton className='w-[38vw] mb-3 h-5 bg-litePink   rounded-full' />
                </div>
                <Skeleton className='w-[12.5vw] h-[3.281vw]  bg-litePink   rounded-md mt-4' />

                <Skeleton />
            </div>
            <div className="flex flex-col ">
                <Skeleton className='w-[40vw] bg-litePink h-[54vh] mt-[2rem]' />
            </div>
        </div>
    )
}

export default LandingCarosalSkeleton