'use client'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Slide from "react-reveal/Slide";
import './PlacementStatisticsHome.scss'
import { Badge } from "@/components/ui/badge"
import { Fade } from 'react-reveal';
import { Skeleton } from "@/components/ui/skeleton"
import Counter from '../commonComponents/counterAnimation/Counter';
import PlaceMentStatistics from './placeMentStatistics';

function PlacementStatisticsHome() {
    const degrees = [
        'BE/BTech', 'BCA/Bsc', 'MCA', 'B.Com', 'ME/M.Tech', 'MBA', 'Msc', 'More'
    ]
    const branches = [
        'CSE', 'ISE', 'ECE', 'Civil', 'EEE', 'Mech', "More"
    ]

    return (
        <MaxWebWidth sectionStyling=" flex align-ceneter mt-8" >
            <header>
                <Slide top cascade>
                    <h1 className='font-extra-bold text-4xl text-black flex justify-center  mb-8 mt-8 h-12'>
                        Our Placement Statistics
                    </h1>
                </Slide>
            </header>
            <article className='bg-Pinkgradient rounded-b-2xl relative rounded-r-2xl flex justify-between rounded-tl-[120px] mt-8 p-[5%]'>
                <aside className='p-2'>
                    <Fade left duration={1000} deley={0}>
                        <figure className='absolute top-[-4%] left-[-6.5%]'>
                            <img className='w-[75%]' src='./graduationCapIcon.svg'></img>
                        </figure>
                    </Fade>
                    <PlaceMentStatistics />
                </aside>
                <asides className='relative p-2'>
                    <Fade right duration={1000} delay={0}>
                        <figure className='absolute top-[-18%] left-[50%]'>
                            <img className='w-[90%]' src='./graduationReportIcon.svg'></img>
                        </figure>
                    </Fade>
                    <aside className='p-7'>
                        <h1 className='font-bold text-xl pb-5'>
                            From Various Degree
                        </h1>
                        <div className='grid grid-cols-3 gap-4'>
                            {degrees.map((element) => {
                                return (
                                    <Badge variant="" className='font-bold text-xl'>{element}</Badge>
                                )
                            })
                            }
                        </div>
                    </aside>
                    <aside className='p-7 mt-12'>
                        <h1 className='font-bold text-xl pb-5'>
                            From Various Branches
                        </h1>
                        <div className='grid grid-cols-3 gap-4'>
                            {branches.map((element) => {
                                return (
                                    <Badge variant="" className='font-bold text-xl'>{element}</Badge>
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