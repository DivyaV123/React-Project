'use client'
import React, { useEffect, useState } from 'react';
import TrainingCard from './trainingCard';
import Slide from "react-reveal/Slide";
import { Fade } from 'react-reveal';
import { useSearchParams } from 'next/navigation';
import TrainingCardSkeleton from './TrainingCardSkeleton';
import './trainingCard.scss'

function TrainingMode() {
    const [hover, setHover] = useState(false)
    const [isloading, setisLoading] = useState(true)
    const trainingDetails = [
        {
            mode: "Offline Classes",
            detail: "Offline classes involve face-to-face interaction, structured schedules, hands-on learning.",
            cardlogo: "./icon_filled_ofline_classes.svg",
            hoverLogo: 'hoverOfflineClassesIcon',
            mobileLogo: "./mobile_offline.svg"
        }, {
            mode: "Online Live classes",
            detail: "Online classes provide remote learning flexibility through digital platforms.",
            cardlogo: "./icon_filled_online_live_classes.svg",
            hoverLogo: 'hoverOfflineClassesIcon',
            mobileLogo: "./mobile_online.svg"
        }, {
            mode: "Experiential Learning",
            detail: "Advance topics through hands-on learning, active , critical thinking, which masters skills.",
            cardlogo: "./icon_filled_experiential_learning.svg",
            hoverLogo: 'hoverOfflineClassesIcon',
            mobileLogo: "./mobile_experiment.svg"
        }, {
            mode: "Self paced",
            detail: "Learn at your own speed, offering flexibility and independence in your learning journey.",
            cardlogo: "./icon_filled_self_paced.svg",
            hoverLogo: 'hoverOfflineClassesIcon',
            mobileLogo: "./mobile_self.svg"
        },
    ]
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])
    return (
        <article onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className='mb-6'>
            <header>
                <Slide top cascade>
                    <h1 className='flex justify-center text-[2.5vw] mobile:text-[5.581vw] mobile:py-[2.575vh]  font-bold sm:pt-[5.556vh] sm:pb-[3.333vh]'>Modes We Train</h1>
                </Slide>
            </header>
            <Fade bottom duration={1000} delay={0}>
                <article className='sm:grid grid-cols-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  sm:gap-5 mobile:flex mobile:flex-wrap mobile:mobileBackground mobile:pb-[3.219vh]'>
                    {trainingDetails.map((element) => {
                        return (isloading ?
                            <TrainingCardSkeleton />
                            :
                            <TrainingCard cardDetails={element} setHover={setHover} hover={hover} />
                        )
                    })}
                </article>
            </Fade>
        </article>
    )
}

export default TrainingMode