'use client'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Slide from "react-reveal/Slide";
import './PlacementStatisticsHome.scss'
import { Badge } from "@/components/ui/badge"
import { Fade } from 'react-reveal';
import { Skeleton } from "@/components/ui/skeleton"
import Counter from '../commonComponents/counterAnimation/Counter';
import PlaceMentStatistics from './placeMentStatistics';
import { useEffect, useState } from 'react';

function PlacementStatisticsHome({ page }) {
    const [isloading, setisLoading] = useState(true)
    const degrees = [
        'BE/BTech', 'BCA/Bsc', 'B.Com', 'MCA', 'ME/M.Tech', 'MBA', 'Msc', 'MS', 'More...'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', 'AE', 'CH', "More..."
    ]
    const statistics = [
        {
            count: '94,860',
            info: 'Students who have throughout # 60% Aggregate',
            icon: './placementIcon1.svg'
        },
        {
            count: '42,992',
            info: 'Students who have graduated # in Non - IT',
            icon: './staticsIcon02.svg'
        },
        {
            count: '68,481',
            info: 'Students who have graduated # in IT / CS / IS',
            icon: './placementIcon03.svg'
        },
        {
            count: '15,024',
            info: 'Students who have less than # 60% Aggregate',
            icon: './placementIcon04.svg'
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
                            <img className='w-[75%]' src={page === "branch" ? '../graduationCapIcon.svg' : './graduationCapIcon.svg'}></img>
                        </figure>
                    </Fade>

                
                        <PlaceMentStatistics path='branch' statistics={statistics} />
                    
                </aside>
                <asides className='relative p-2'>
                    <Fade right duration={1000} delay={0}>
                        <figure className='absolute top-[-18%] left-[50%]'>
                            <img className='w-[90%]' src={page === "branch" ? '../graduationReportIcon.svg' : './graduationReportIcon.svg'}></img>
                        </figure>
                    </Fade>
                    <aside className='p-7'>
                        <h1 className='font-bold text-xl pb-5'>
                            From Various Degree
                        </h1>
                        <div className='grid grid-cols-3 gap-4'>
                            {degrees.map((element) => {
                                return (
                                    <Badge variant="" className='font-bold text-[1.125rem]'>{element}</Badge>
                                )
                            })
                            }
                        </div>
                    </aside>
                    <aside className='p-7 '>
                        <h1 className='font-bold text-xl pb-5'>
                            From Various Branches
                        </h1>
                        <div className='grid grid-cols-3 gap-4'>
                            {branches.map((element) => {
                                return (
                                    <Badge variant="" className='font-bold text-[1.125rem]'>{element}</Badge>
                                )
                            })
                            }
                        </div>
                    </aside>
                </asides>
            </article>

        </MaxWebWidth>
    )
}

export default PlacementStatisticsHome