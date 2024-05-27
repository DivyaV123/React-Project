'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import PlaceMentStatistics from '@/components/placementstatistics/placeMentStatistics'
import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import CoursePageContainer from './CoursePageContainer'
import { Skeleton } from "@/components/ui/skeleton"

function PlacementStaticsHome({ path }) {
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
        'BE/BTech', 'BCA/Bsc', 'B.Com', 'MCA', 'ME/M.Tech', 'MBA', 'Msc', 'MS', 'More...'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', 'AE', 'CH', "More..."
    ]
    const statistics = [
        {
            count: '94,860',
            info: 'Students who have throughout 60% Aggregate',
            icon: './placementIcon1.svg'
        },
        {
            count: '42,992',
            info: 'Students who have graduated in Non - IT',
            icon: './staticsIcon02.svg'
        },
        {
            count: '68,481',
            info: 'Students who have graduated in IT/CS/IS',
            icon: './placementIcon03.svg'
        },
        {
            count: '15,024',
            info: 'Students who have less than 60% Aggregate',
            icon: './placementIcon04.svg'
        },
    ]
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])
    return (
        <CoursePageContainer className='bg-Pinkgradient'>
            <article className='w-[51.56vw]'>
                <h1 className='font-bold text-[1.875vw] text-black flex justicy-start pb-[4.167vh] pt-[3.611vh] '>
                    Our Placement Statistics
                </h1>

                <PlaceMentStatistics
                    statistics={statistics}
                    className='flex flex-wrap'
                    path='course'
                />

                <aside className='pr-[2.188vw] pb-[5.556vh] pt-[8.333vh]'>
                    <h1 className='font-bold text-[1.563vw] pb-[4.861vh]'>
                        From Various Degree
                    </h1>
                    <div className='flex flex-wrap  gap-[1.125rem] w-[37.094vw]'>
                        {degrees.map((element) => {
                            return (
                                <Badge variant="" className='font-bold text-[1.563vw]'>{element}</Badge>
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
                                    <Badge variant="" className='font-bold text-[1.563vw]'>{element}</Badge>
                                )
                            })
                            }
                        </div>
                    </aside>
                </aside>
            </article>
        </CoursePageContainer>
    )
}

export default PlacementStaticsHome