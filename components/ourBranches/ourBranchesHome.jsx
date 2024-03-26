import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import TrainingMode from './trainingMode/trainingMode'

function OurBranchesHome() {
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
                    <h1 className='flex justify-center text-2xl m-2 font-extra-bold p-5'>
                        Our Branches
                    </h1>
                </header>
                <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 mt-5'>
                    {branches.map((elements) => {
                        const stylingImg = {
                            backgroundImage: `url('${elements.immage}')`,
                            borderRadius: "7px !important"
                        }
                        return (
                            <div key={elements.id} className='bg-no-repeat bg-cover' style={stylingImg}>
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
            <section className='mb-6'>
                <TrainingMode />
            </section>
        </MaxWebWidth>
    )
}

export default OurBranchesHome