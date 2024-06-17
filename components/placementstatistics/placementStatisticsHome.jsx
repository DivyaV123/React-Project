'use client'
import { useEffect, useState,useContext } from 'react';
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Slide from "react-reveal/Slide";
import './PlacementStatisticsHome.scss'
import { Badge } from "@/components/ui/badge"
import { Fade } from 'react-reveal';
import { Skeleton } from "@/components/ui/skeleton"
import Counter from '../commonComponents/counterAnimation/Counter'; 
import PlaceMentStatistics from './placeMentStatistics';
import Link from 'next/link';
import { useGetAllPlacementCountQuery } from '@/redux/queries/getAllPlacementCount'
import { GlobalContext } from '@/components/Context/GlobalContext'
import { PLACEMENT_PATH } from '@/lib/RouteConstants';

function PlacementStatisticsHome({ page }) {
    const { setAllStaticsCount } = useContext(GlobalContext)
    const { data: countDetails, error, isLoading } = useGetAllPlacementCountQuery()
    setAllStaticsCount(countDetails)
    const [isloading, setisLoading] = useState(true)
    const degrees = [
        'BE/BTech', 'BCA/Bsc', 'B.Com', 'MCA', 'ME/M.Tech', 'MBA', 'Msc', 'MS', 'More...'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', 'AE', 'CH', "More..."
    ]
    const statistics = [
        {
            count: `${countDetails?.response?.allPlacedCount}`,
            info: 'Students who have throughout # 60% Aggregate',
            icon: '../placementIcon1.svg'
        },
        {
            count: `${countDetails?.response?.nonItCount}`,
            info: 'Students who have graduated # in Non - IT',
            icon: '../staticsIcon02.svg'
        },
        {
            count: `${countDetails?.response?.itCount}`,
            info: 'Students who have graduated # in IT / CS / IS',
            icon: '../placementIcon03.svg'
        },
        {
            count: `${countDetails?.response?.lessThanSixtyPercent}`,
            info: 'Students who have less than # 60% Aggregate',
            icon: '../placementIcon04.svg'
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])

    return (
        <MaxWebWidth sectionStyling=" flex align-ceneter mt-8" >
            <header>
                <Slide top cascade>
                    <h1 className='font-bold text-[2rem] text-black flex justify-start  mb-8 mt-8 h-12'>
                        Our Placement Statistics
                    </h1>
                </Slide>
            </header>
            <article className='bg-Pinkgradient rounded-b-2xl relative rounded-r-2xl flex justify-between rounded-tl-[120px] mt-8 p-[5%]'>
                <aside className='p-2'>
                    <Fade left duration={1000} deley={0}>
                        <figure className='absolute top-[-4%] left-[-6.5%]'>
                            <img className='w-[75%]' src={page === "branch" || page === "course" ? '../graduationCapIcon.svg' : './graduationCapIcon.svg'}></img>
                        </figure>
                    </Fade>


                    <PlaceMentStatistics path={page} statistics={statistics} />

                </aside>
                <aside className='pr-[2.188vw] pb-[5.556vh]'>
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

export default PlacementStatisticsHome