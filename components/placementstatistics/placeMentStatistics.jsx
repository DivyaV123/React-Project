import React, { useContext, useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';
import { PLACEMENT_PATH } from '@/lib/RouteConstants';
import { GlobalContext } from '../Context/GlobalContext';
import Image from 'next/image';

function PlaceMentStatistics({ className, path, statistics }) {
    const [isloading, setisLoading] = useState(true)
    const { setPlacementParam, setNonItCheckedIcon, setThroughCheckedIcon, setPlacedCheckedIcon, setLessCheckedIcon, setItCheckedIcon } = useContext(GlobalContext)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1000);
    }, [])
    const handleState = (state) => {
        switch (state) {
            case "lessthansixty":
                setNonItCheckedIcon(false);
                setThroughCheckedIcon(false);
                setPlacedCheckedIcon(false);
                setLessCheckedIcon(true);
                setItCheckedIcon(false);
                break;
            case "nonit":
                setNonItCheckedIcon(true);
                setThroughCheckedIcon(false);
                setPlacedCheckedIcon(false);
                setLessCheckedIcon(false);
                setItCheckedIcon(false);
                break;
            case "it":
                setNonItCheckedIcon(false);
                setThroughCheckedIcon(false);
                setPlacedCheckedIcon(false);
                setLessCheckedIcon(false);
                setItCheckedIcon(true);
                break;
            case "throughoutsixty":
                setNonItCheckedIcon(false);
                setThroughCheckedIcon(true);
                setPlacedCheckedIcon(false);
                setLessCheckedIcon(false);
                setItCheckedIcon(false);
                break;
            default:
                break;
        }
    }
    
    return (
        <div className={`${className} flex flex-col gap-6`}>
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
                            }} className='flex  jutsify-center cursor-pointer  hover:bg-white hover:rounded-xl sm:w-[24.531vw]'>
                                <figure>
                                    {item.icon &&
                                        <Image
                                            src={item.icon}
                                            width={200}
                                            height={250}
                                        />
                                    }
                                </figure>
                                <div className='py-[1.944vh] px-[0.938vw] mobile:px-[2.791vw] mobile:py-[1.502vh]'>
                                    <h1 className='font-bold text-[2.813vw] mobile:text-[8.372vw]'>{item.count}</h1>
                                    <p className='text-[#454545] text-[1.094vw] mobile:text-[3.721vw]' dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>
                        </Link>
                )
            })}
        </div >
    )
}

export default PlaceMentStatistics