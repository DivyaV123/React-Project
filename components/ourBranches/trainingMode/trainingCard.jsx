import React from 'react'
import './trainingCard.scss'

function TrainingCard({ cardDetails }) {
    return (
        <section className='flex rounded-sm cardStyle row-span-4 w-60' style={{ backgroundImage: "url('./backgroundWave.svg')"}}>
            <div >
                <figure className='flex justify-center aligen-center p-5 mt-3'>
                    <img className='h-16 w-16' src={cardDetails.cardlogo} alt='logo'></img>
                </figure>
                <header>
                    <h1 className='flex justify-center aligen-center text-dark-gray pt-5 text-xl font-bold'>
                        {cardDetails.mode}
                    </h1>
                </header>
                <p className='text-sm flex justify-center text-center p-4 text-dark-gray font-lean mt-6'>
                    {cardDetails.detail}
                </p>
            </div>
        </section>
    )
}

export default TrainingCard;