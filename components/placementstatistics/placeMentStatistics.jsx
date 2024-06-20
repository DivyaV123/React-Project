import React, { useContext, useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';
import { PLACEMENT_PATH } from '@/lib/RouteConstants';
import { GlobalContext } from '../Context/GlobalContext';

function PlaceMentStatistics({ className, path, statistics }) {
    const [isloading, setisLoading] = useState(true)
    const { setPlacementParam, setNonItCheckedIcon, setThroughCheckedIcon, setPlacedCheckedIcon, setLessCheckedIcon, setItCheckedIcon } = useContext(GlobalContext)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1000);
    }, [])
    const handleState = (state) => {
        if (state === "lessthansixty") {
            setNonItCheckedIcon(false);
            setThroughCheckedIcon(false);
            setPlacedCheckedIcon(false);
            setLessCheckedIcon(true);
            setItCheckedIcon(false);
        } else if (state == "nonit") {
            setNonItCheckedIcon(true);
            setThroughCheckedIcon(false);
            setPlacedCheckedIcon(false);
            setLessCheckedIcon(false);
            setItCheckedIcon(false);
        } else if (state === "it") {
            setNonItCheckedIcon(false);
            setThroughCheckedIcon(false);
            setPlacedCheckedIcon(false);
            setLessCheckedIcon(false);
            setItCheckedIcon(true);
        } else if (state === "throughoutsixty") {
            setNonItCheckedIcon(false);
            setThroughCheckedIcon(true);
            setPlacedCheckedIcon(false);
            setLessCheckedIcon(false);
            setItCheckedIcon(false);
        }
    }
    return (
        <div className={className}>
            {statistics.map((item, index) => {
                if (path === "fromPage") {
                    item.icon = '.' + item.icon;
                }
                let content = item.info.replace(/#/g, "<br/>")
                return (
                    isloading ?
                        <>
                            <div className="flex items-center h-[9vw] space-x-4">
                                <Skeleton className="h-[0.972vh] w-[7vw] rounded-md" />
                                <div className="space-y-2">
                                    <Skeleton className="h-[2.222vh] w-[19.531vw]" />
                                    <Skeleton className="h-[2.222vh] w-[19.531vw]" />
                                    <Skeleton className="h-[2.222vh] w-[19.531vw]" />
                                </div>
                            </div >
                        </>

                        :
                        <Link href={PLACEMENT_PATH}>
                            <div onClick={() => {
                                setPlacementParam(item.key);
                                handleState(item.key)
                            }} className='flex aligen-items jutsify-center cursor-pointer  hover:bg-white hover:rounded-xl w-[24.531vw]'>
                                <figure>
                                    <img className='h-full' src={item.icon}></img>
                                </figure>
                                <div className='py-[1.944vh] px-[0.938vw]'>
                                    <h1 className='font-bold text-[2.813vw]'>{item.count}</h1>
                                    <p className='text-dark-gray text-[1.094vw]' dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </Link>
                )
            })}
        </div >
    )
}

export default PlaceMentStatistics