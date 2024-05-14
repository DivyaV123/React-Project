import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

function PlaceMentStatistics({ className, path, statistics }) {
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1000);
    }, [])
    return (
        <div className={className}>
            {statistics.map((item, index) => {
                if (path === "fromPage" ) {
                    item.icon = '.' + item.icon;
                }
                let content = item.info.replace(/#/g, "<br/>")
                return (
                    isloading ?
                        <>
                            <div className="flex items-center h-[9vw] space-x-4">
                                <Skeleton className="h-[7vw] w-[7vw] rounded-md" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div >
                        </>

                        :
                        <>
                            <div className='flex aligen-items jutsify-center cursor-pointer  hover:bg-white hover:rounded-xl'>
                                <figure>
                                    <img src={item.icon}></img>
                                </figure>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[2.25rem]'>{item.count}</h1>
                                    <p className='text-dark-gray text-[0.875rem] 3xl:text-[1.2rem]' dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </>
                )
            })}
        </div >
    )
}

export default PlaceMentStatistics