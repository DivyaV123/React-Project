'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Slide from "react-reveal/Slide";

function PlacementStatisticsHome() {
    const statistics = [
        {
            count: '94,860',
            info: 'Students who have throughout # 60% Aggregate'
        },
        {
            count: '42,992',
            info: 'Students who have graduated # in Non - IT'
        },
        {
            count: '68,481',
            info: 'Students who have graduated # in IT / CS / IS'
        },
        {
            count: '15,024',
            info: 'Students who have less than # 60% Aggregate'
        },
    ]
    return (
        <MaxWebWidth sectionStyling="bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain min-h-80 bg-cover flex align-ceneter mt-8" >
            <header>
                <Slide top cascade>
                    <h1 className='font-extra-bold text-2xl flex justify-center align-center mb-8 mt-8 h-20'>
                        Our Placement Statistics
                    </h1>
                </Slide>
            </header>
            <article className='flex justify-between items-center mt-8'>
                {statistics.map((element) => {
                    let content = element.info.replace("#", "<br/>")
                    return (
                        <div>
                            <h1 className='font-extra-bold text-3xl text-dark-gray flex justify-center'>
                                {element.count}
                            </h1>
                            <p className='text-dark-gray text-sm  flex justify-center text-center' dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    )
                })}
            </article>
        </MaxWebWidth>
    )
}

export default PlacementStatisticsHome