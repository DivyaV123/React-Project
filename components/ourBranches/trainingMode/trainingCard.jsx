import React from 'react'
import './trainingCard.scss'
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '@/components/assets/icons/svgassets';

function TrainingCard({ cardDetails, hover,page }) {
    return (
        <>
        <section className={`${page === "corporateTraining" ? 'place-self-center sm:mx-4 sm:mb-4' : "sm:m-4"} relative flex rounded-sm cardStyle cursor-pointer border-b-4 border-orange-500 row-span-4 w-[15.63rem]  trainingContainer mobile:hidden`}>
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
                    <h1 className='flex justify-center aligen-center text-[#454545] pt-5 text-xl font-bold mt-32 cardHeader'>
                        {cardDetails.mode}
                    </h1>
                </header>
                <p className='text-[0.875rem] sm:h-[116px] flex justify-center text-center p-4 text-[#454545] font-lean mt-6 cardDetail'>
                    {cardDetails.detail}
                </p>
            </div>
        </section>
        <section className='relative flex   cursor-pointer  w-[39.07vw]  overflow-hidden sm:hidden'>
        <div className=''>
            <figure className='flex justify-center  pt-[3.97vh] pb-[2.575vh]'>
                <img  src={cardDetails.mobileLogo} alt='logo'></img>
            </figure>
            <header className='pb-[0.644vh]'>
                <h1 className='flex justify-center  text-[#454545]  text-[2.791vw] font-bold  cardHeader'>
                    {cardDetails.mode}
                </h1>
            </header>
            <p className='text-[2.558vw] flex justify-center text-center  text-[#454545] font-lean  cardDetail'>
                {cardDetails.detail}
            </p>
        </div>
    </section>
    </>
    )
}

export default TrainingCard;