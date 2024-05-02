import React from 'react'
import './trainingCard.scss'
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';

function TrainingCard({ cardDetails, hover }) {
    return (
        <section className='relative flex rounded-sm cardStyle cursor-pointer border-b-4 border-orange-500 row-span-4 w-[15.63rem] m-4 trainingContainer'>
            <div className="animationBackground">
            </div>
            <div className='z-10'>
                <figure className='flex justify-center aligen-center '>
                    <img className='trainingLogo' src={cardDetails.cardlogo} alt='logo'></img>
                    {/* <Svg
                        className='trainingLogo'
                        width={svgicons[cardDetails?.cardlogo][0]}
                        height={svgicons[cardDetails?.cardlogo][1]}
                        viewBox={svgicons[cardDetails?.cardlogo][2]}
                        icon={svgicons[cardDetails?.cardlogo][3]}
                        color={svgicons[cardDetails?.cardlogo][4]}
                    /> */}
                </figure>
                <header>
                    <h1 className='flex justify-center aligen-center text-dark-gray pt-5 text-xl font-bold mt-32 cardHeader'>
                        {cardDetails.mode}
                    </h1>
                </header>
                <p className='text-[0.875rem] flex justify-center text-center p-4 text-dark-gray font-lean mt-6 cardDetail'>
                    {cardDetails.detail}
                </p>
            </div>
        </section>
    )
}

export default TrainingCard;