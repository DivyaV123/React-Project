import React from 'react'
import TrainingCard from './trainingCard'

function TrainingMode() {
    const trainingDetails = [
        {
            mode: "Offline Classes",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_ofline_classes.png"
        }, {
            mode: "Online Live classes",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_online_live_courses.png"
        }, {
            mode: "Experiential Learning",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_experiential_learning.png"
        }, {
            mode: "Self paced",
            detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            cardlogo: "./icon_self_paced.png"
        },
    ]
    return (
        <article className='mb-6'>
            <header>
                <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5'>Modes We Train</h1>
            </header>
            <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-6'>
                {trainingDetails.map((element) => {
                    return (
                        <TrainingCard cardDetails={element} />
                    )
                })}
            </article>
        </article>
    )
}

export default TrainingMode