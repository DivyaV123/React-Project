'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import PlaceMentStatistics from '@/components/placementstatistics/placeMentStatistics'
import React, { useContext, useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { useGetAllPlacementCountQuery } from '@/redux/queries/getAllPlacementCount'
import { GlobalContext } from '@/components/Context/GlobalContext'
import Link from 'next/link'
import { PLACEMENT_PATH } from '@/lib/RouteConstants'
import { formatToIndianCurrency } from '@/lib/utils'
function PlacementStaticsHome() {
    const { setAllStaticsCount, setLessCheckedIcon, setNonItCheckedIcon } = useContext(GlobalContext)
    const { data: countDetails, error, isLoading } = useGetAllPlacementCountQuery()
    setAllStaticsCount(countDetails)
    const degrees = [
        'BE', 'BCA', 'B.Com', 'MCA', 'M.Tech', 'MBA', 'Msc', 'MS', 'More...'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', 'AE', 'CH', "More..."
    ]
    const statistics = [
        {
            count: `${formatToIndianCurrency(countDetails?.response?.throughOutSixtyPercent)}`,
            info: 'Students who have throughout 60% Aggregate',
            icon: '/placementIcon1.svg',
            key: "throughoutsixty",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${formatToIndianCurrency(countDetails?.response?.nonItCount)}`,
            info: 'Students who have graduated in Non - IT',
            icon: '/staticsIcon02.svglx',
            key: "nonit",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${formatToIndianCurrency(countDetails?.response?.itCount)}`,
            info: 'Students who have graduated in IT/CS/IS',
            icon: '/placementIcon03.svg',
            key: "it",
            toSet: setNonItCheckedIcon
        },
        {
            count: `${formatToIndianCurrency(countDetails?.response?.lessThanSixtyPercent)}`,
            info: 'Students who have less than 60% Aggregate',
            icon: '/placementIcon04.svg',
            key: "lessthansixty",
            toSet: setLessCheckedIcon
        },
    ]
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