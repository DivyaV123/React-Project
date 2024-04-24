'use client'
import React, { useState } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import TrainingMode from './trainingMode/trainingMode'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'
import Button from '../commonComponents/button/Button';

function OurBranchesHome({ page }) {
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
    if (page === 'course') {
        branchCards.splice(-1, 1)
    }
    return (
        <>
            <MaxWebWidth sectionStyling='pb-8' >
                <section >
                    <header>
                        {page === 'course' ?
                            (
                                <article className='flex justify-between w-[51.56vw]'>
                                    <h1 className='flex justify-start text-2xl m-2 font-extra-bold py-5'>
                                        Upcoming Batches
                                    </h1>
                                    <article className='flex bg-white m-2 py-5'>
                                        <Button
                                            className='w-[9.609vw] rounded-s h-[2.656vw] bg-[#F9F9F9] text-[0.75rem] hover:font-semibold hover:bg-orange-500 hover:bg-gradient hover:text-white hover:rounded'
                                            title='Offline Classes'
                                        >

                                        </Button>
                                        <Button
                                            className='w-[11.484vw] rounded-e h-[2.656vw] bg-[#F9F9F9] text-[0.75rem] hover:font-semibold hover:bg-orange-500 hover:text-white hover:rounded'
                                            title='Online Live Classes'
                                        >

                                        </Button>
                                    </article>
                                </article>
                            ) :
                            (
                                <Slide top cascade>
                                    <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5'>
                                        Our Offline Branches
                                    </h1>
                                </Slide>
                            )
                        }


                    </header>

                    <article className={`${page === 'course' ? 'flex flex-wrap justify-center gap-4 w-[51.56vw]' : 'flex flex-wrap justify-center gap-4'}`}>
                        {branchCards.map((elements) => {
                            if (page === "course") {
                                elements = '.' + elements;
                            }
                            return (
                                <>
                                    <figure className={page === 'course' ? 'w-[31%] hover:-translate-y-1 delay-300 duration-300' : 'hover:-translate-y-1 delay-300 duration-300'}>
                                        <img src={elements} alt='imgcard' />
                                    </figure>

                                </>
                            )
                        })}
                    </article>
                </section>
            </MaxWebWidth>
            {page !== "course" && (
                <MaxWebWidth sectionStyling="bg-backgroundBlue h-[50%] bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain min-h-80 bg-cover">
                    <section className="flex justify-center mt-8 mb-8">
                        <TrainingMode />
                    </section>
                </MaxWebWidth>
            )}

        </>
    )
}

export default OurBranchesHome