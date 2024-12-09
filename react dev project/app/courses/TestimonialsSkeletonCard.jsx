import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function TestimonialsSkeletonCard() {
    return (
        <>
            <div className="flex justify-between gap-4">
                <div>
                    <Skeleton className="h-[4vw] w-[4vw] rounded-xl mb-3" />
                    <Skeleton className="h-[4vw] w-[4vw] rounded-xl" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[10vw]" />
                    <Skeleton className="h-4 w-[13vw]" />
                    <Skeleton className="h-4 w-[13vw]" />
                    <Skeleton className="h-4 w-[13vw]" />
                    <Skeleton className="h-4 w-[13vw]" />
                </div>
            </div>
        </>
    )
}

export default TestimonialsSkeletonCard