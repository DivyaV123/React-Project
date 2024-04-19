'use client'
import React, { useState } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import TrainingMode from './trainingMode/trainingMode'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'

function OurBranchesHome() {
    const [stylingImg, setStyling] = useState({
        borderRadius: "7px",
        width: '23%',
        transition: 'opacity 0.3s ease-in-out', // Add transition for opacity
    })

    const branches = [{
        name: 'Bengaluru',
        number: '12',
        immage: './bngBranch.png'
    },
    {
        name: 'Hyderabad',
        number: '12',
        immage: './hydrabadBranch.png'
    },
    {
        name: 'Chennai',
        number: '12',
        immage: './chennaiBranch.png'
    },
    {
        name: 'Pune',
        number: '12',
        immage: './puneBranch.png'
    },
    {
        name: 'Mumbai',
        number: '12',
        immage: './mumbaiBranch.png'
    },
    {
        name: 'Noida',
        number: '12',
        immage: './noidaBranch.png'
    },
    {
        name: 'Gurugram',
        number: '12',
        immage: './gurugramBranch.png'
    },
    {
        name: 'New Delhi',
        number: '12',
        immage: './newDelhiBranch.png'
    },
    {
        name: 'Bhubaneswar',
        number: '12',
        immage: './bhubaneswarBranch.png'
    },
    {
        name: 'Kolkata',
        number: '12',
        immage: './kolkataBranchA.png'
    },
    {
        name: 'Ahmedabad',
        number: '12',
        immage: './ahmedabadBranch.png'
    },
    {
        name: 'Chandigarh',
        number: '12',
        immage: './chandigarhBranch.png'
    },
    {
        name: 'Tirupati',
        number: '12',
        immage: './tirupatiBranch.png'
    },
    {
        name: 'Kochi',
        number: '12',
        immage: './kochiBranch.png'
    },
    {
        name: 'Mysore',
        number: '12',
        immage: './mysoreBranch.png'
    },
    {
        name: 'View all Cities',
        number: '',
        immage: './mysoreBranch.png'
    }
    ]

    const branchCards = [
        './images/Bengalore.png', './images/HydrabadCard.png', './images/ChennaiCard.png',
        './images/puneCard.png', './images/MumbaiCard.png', './images/NoidaCard.png', './images/gurugramCard.png',
        './images/NewDelhiCard.png', './images/BuvaneshwarCard.png', './images/KolkataCard.png', './images/AmehabadCard.png',
        './images/ChandigarhCard.png', './images/TirupatiCard.png', './images/KochiCard.png', './images/MysoreCard.png',
        './images/AllCitiesCard.png'
    ]

    return (
        <>
            <MaxWebWidth sectionStyling='pb-8' >
                <section>
                    <header>
                        <Slide top cascade>
                            <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5'>
                                Our Offline Branches
                            </h1>
                        </Slide>
                    </header>

                    <article className='flex flex-wrap justify-center gap-4  '>
                        {branchCards.map((elements) => {
                            return (
                                <>
                                    <figure className='hover:-translate-y-1 delay-300 duration-300'>
                                        <img src={elements} alt='imgcard' />
                                    </figure>

                                </>
                            )
                        })}
                    </article>
                </section>
            </MaxWebWidth>
            <MaxWebWidth sectionStyling="bg-backgroundBlue h-[50%] bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain min-h-80 bg-cover">
                <section className="flex justify-center mt-8 mb-8">
                    <TrainingMode />
                </section>
            </MaxWebWidth>
        </>
    )
}

export default OurBranchesHome