import React, { useState } from 'react'
import TrainingCard from './trainingCard'
import Slide from "react-reveal/Slide";
import { Fade } from 'react-reveal';
import { useSearchParams } from 'next/navigation';

function TrainingMode() {
    const [hover, setHover] = useState(false)
    const trainingDetails = [
        {
            mode: "Offline Classes",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_ofline_classes.png",
            hoverLogo:'./hoverOfflineClassesIcon.svg'
        }, {
            mode: "Online Live classes",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_online_live_courses.png",
            hoverLogo:'./hoverOfflineClassesIcon.svg'
        }, {
            mode: "Experiential Learning",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_experiential_learning.png",
            hoverLogo:'./hoverOfflineClassesIcon.svg'
        }, {
            mode: "Self paced",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_self_paced.png",
            hoverLogo:'./hoverOfflineClassesIcon.svg'
        },
    ]
    return (
        <article onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className='mb-6'>
            <header>
                <Slide top cascade>
                    <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5'>Modes We Train</h1>
                </Slide>
            </header>
            <Fade bottom duration={1000} delay={0}>
            <article className='grid grid-cols-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5'>
                {trainingDetails.map((element) => {
                    return (
                        <TrainingCard cardDetails={element} setHover={setHover} hover={hover} />
                    )
                })}
            </article>
          </Fade>
        </article>
    )
}

export default TrainingMode