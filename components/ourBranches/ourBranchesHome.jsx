'use client'
import React, { useState } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import TrainingMode from './trainingMode/trainingMode'

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
    }
    ]

    return (
        <MaxWebWidth sectionStyling='bg-backgroundBlue pb-8' >
            <section>
                <header>
                    <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5 '>
                        Our Branches
                    </h1>
                </header>
                <article className='flex flex-wrap justify-center gap-4  '>
                    {branches.map((elements) => {
                        const stylingImgHover = {
                            ...stylingImg,
                            opacity: '0.8',
                        };
                        return (
                            <div  key={elements.id} className='bg-no-repeat bg-cover hover:shadow-xl sm:flex-basis-[100%] md:flex-basis-[33.3%] lg:flex-basis-[23%] 2xl:[24%]' style={{...stylingImg, backgroundImage: `url(${elements.immage})`}}
                                onMouseEnter={() => setStyling(stylingImgHover)}
                                onMouseLeave={() => setStyling(stylingImg)}>
                                <article className='min-h-24 flex justify-center items-center flex-wrap'>
                                    <article>
                                        <header>
                                            <h1 className='text-xl font-bold  hover:max-w-lg text-white flex justify-center align-center'>{elements.name}</h1>
                                        </header>
                                        <p className='text-white flex justify-center align-center'>{elements.number} Branches</p>
                                    </article>
                                </article>
                            </div>
                        )
                    })}
                </article>

            </section>
            <section className='flex justify-center mt-8 mb-8'>
                <TrainingMode />
            </section>
        </MaxWebWidth>
    )
}

export default OurBranchesHome