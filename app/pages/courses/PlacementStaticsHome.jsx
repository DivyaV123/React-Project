import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import PlaceMentStatistics from '@/components/placementstatistics/placeMentStatistics'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import HiringPartners from '@/components/hiringPartners/hiringPartners'
import CoursePageContainer from './CoursePageContainer'

function PlacementStaticsHome({ path }) {
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
            info: 'Students who have # throughout 60% # Aggregate',
            icon: './placementIcon1.svg'
        },
        {
            count: '42,992',
            info: 'Students who have # graduated in Non - IT',
            icon: './staticsIcon02.svg'
        },
        {
            count: '68,481',
            info: 'Students who have # graduated in IT /# / CS /IS',
            icon: './placementIcon03.svg'
        },
        {
            count: '15,024',
            info: 'Students who have #  less than 60%  #  Aggregate',
            icon: './placementIcon04.svg'
        },
    ]
    return (
        <CoursePageContainer className='bg-Pinkgradient'>
            <article className='w-[51.56vw]'>
                <h1 className='font-extra-bold text-4xl text-black flex justicy-start  mb-8 mt-8 h-12'>
                    Our Placement Statistics
                </h1>
                <PlaceMentStatistics
                    statistics={statistics}
                    className='flex flex-wrap'
                    path='course'
                />
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
                    <aside className='mt-12'>
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
                </aside>
            </article>
        </CoursePageContainer>
    )
}

export default PlacementStaticsHome