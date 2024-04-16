import React from 'react'
import './trainingCard.scss'

function TrainingCard({ cardDetails, hover }) {
    return (
        <section className='relative flex rounded-sm cardStyle cursor-pointer border-b-4 border-orange-500 row-span-4 w-60 m-4 trainingContainer'>
            <div className="animationBackground">
                
            </div>
            <div className='z-10'>
                <figure className='flex justify-center aligen-center '>
                    <img className='trainingLogo' src={cardDetails.cardlogo} alt='logo'></img>
                </figure>
                <header>
                    <h1 className='flex justify-center aligen-center text-dark-gray pt-5 text-xl font-bold mt-32 cardHeader'>
                        {cardDetails.mode}
                    </h1>
                </header>
                <p className='text-sm flex justify-center text-center p-4 text-dark-gray font-lean mt-6 cardDetail'>
                    {cardDetails.detail}
                </p>
            </div>
        </section>
    )
}

export default TrainingCard;