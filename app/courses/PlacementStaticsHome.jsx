'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import PlaceMentStatistics from '@/components/placementstatistics/placeMentStatistics'
import React, { useContext, useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import CoursePageContainer from './CoursePageContainer'
import { Skeleton } from "@/components/ui/skeleton"
import { useGetAllPlacementCountQuery } from '@/redux/queries/getAllPlacementCount'
import { GlobalContext } from '@/components/Context/GlobalContext'
import Link from 'next/link'
import { PLACEMENT_PATH } from '@/lib/RouteConstants'

function PlacementStaticsHome({ path }) {
    const { setAllStaticsCount, setPlacementParam, setLessCheckedIcon, setNonItCheckedIcon } = useContext(GlobalContext)
    const { data: countDetails, error, isLoading } = useGetAllPlacementCountQuery()
    setAllStaticsCount(countDetails)
    const [isloading, setisLoading] = useState(true)
    const svgPath = [
        { src: "../compLogo01.svg" },
        { src: "../compLogo02.svg" },
        { src: "../compLogo03.svg" },
        { src: "../compLogo-04.svg" },
        { src: "../compLogo05.svg" },
        { src: "../compLogo06.svg" },
        { src: "../compLogo07.svg" },
        { src: "../compLogo01.svg" },
        { src: "../compLogo02.svg" },
        { src: "../compLogo03.svg" },
        { src: "../compLogo-04.svg" },
        { src: "../compLogo05.svg" },
        { src: "../compLogo06.svg" },
        { src: "../compLogo07.svg" },
        { src: "../compLogo01.svg" },
        { src: "../compLogo02.svg" },
        { src: "../compLogo03.svg" },
        { src: "../compLogo-04.svg" },
    ];
    const degrees = [
        'BE', 'BCA', 'B.Com', 'MCA', 'M.Tech', 'MBA', 'Msc', 'MS', 'More...'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', 'AE', 'CH', "More..."
    ]
    const statistics = [
        {
            count: `${countDetails?.response?.allPlacedCount}`,
            info: 'Students who have throughout 60% Aggregate',
            icon: '../placementIcon1.svg',
            key: "throughoutsixty",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${countDetails?.response?.nonItCount}`,
            info: 'Students who have graduated in Non - IT',
            icon: '../staticsIcon02.svglx',
            key: "nonit",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${countDetails?.response?.itCount}`,
            info: 'Students who have graduated in IT/CS/IS',
            icon: '../placementIcon03.svg',
            key: "it",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${countDetails?.response?.lessThanSixtyPercent}`,
            info: 'Students who have less than 60% Aggregate',
            icon: '../placementIcon04.svg',
            key: "lessthansixty",
            toSet: setLessCheckedIcon
        },
    ]
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])
    return (
        <MaxWebWidth sectionStyling='bg-Pinkgradient'>
            <article className='w-[51.56vw]'>
                <h1 className='font-bold text-[1.875vw] text-black flex justicy-start pb-[4.167vh] pt-[3.611vh] '>
                    Our Placement Statistics
                </h1>

                <PlaceMentStatistics path='branch' statistics={statistics} />

                <aside className='pr-[2.188vw] pb-[5.556vh] pt-[8.333vh]'>
                    <h1 className='font-bold text-[1.563vw] pb-[4.861vh]'>
                        From Various Degree
                    </h1>
                    <div className='flex flex-wrap  gap-[1.125rem] w-[37.094vw]'>
                        {degrees.map((element) => {
                            return (
                                <Link href={PLACEMENT_PATH}>
                                    <Badge variant="" className='font-bold text-[1.563vw]'>{element}</Badge>
                                </Link>
                            )
                        })
                        }
                    </div>
                    <aside className='pt-[8.333vh]'>
                        <h1 className='font-bold text-[1.563vw] pb-[4.861vh]'>
                            From Various Branches
                        </h1>
                        <div className='flex flex-wrap  gap-[1.125rem] w-[37.094vw]'>
                            {branches.map((element) => {
                                return (
                                    <Link href={PLACEMENT_PATH}>
                                        <Badge variant="" className='font-bold text-[1.563vw]'>{element}</Badge>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </aside>
                </aside>
            </article>
        </MaxWebWidth>
    )
}

export default PlacementStaticsHome