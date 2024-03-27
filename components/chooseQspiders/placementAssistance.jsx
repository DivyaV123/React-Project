'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'


function PlacementAssistance() {
    return (
        <section className='mt-6'>
            <header>
                <h1 className='font-extra-bold text-2xl flex justify-center align-center mb-8 mt-8'>
                    Why choose QSpiders
                </h1>
            </header>
            <article className='grid grid-cols-2 gap-4'>
                <aside className='mt-6'>
                    <header className='font-extra-bold text-dark-gray text-2xl flex justify-start'>
                        <h1 >Placement Assistance</h1>
                    </header>
                    <p className='text-dark-gray text-normal mt-6'>
                        Our dedicated placement cell works tirelessly to connect <br />
                        our students with leading IT companies for job<br />
                        opportunities. With a strong network of corporate partners<br />
                        and recruitment drives to ensure maximum exposure for<br />
                        our students.
                    </p>
                    <article className='flex justify-center align-center mt-6'>
                        <aside className='w-[100%]'>
                            <h1 style={{
                                backGround: "-webkit-linear-gradient(#eee, #333)",
                                webkitBackgroundClip: "text",
                                webkitTextFillColor: "transparent",
                            }} className='text-orange-600 font-extra-bold text-medium text-xl opacity-100 flex justify-center'>2.5+Lac</h1>
                            <p className='text-brown txet-normal flex justify-center  text-center'>Students Placed <br /> in Total</p>
                        </aside>
                        <aside className='w-[100%]'>
                            <h1 className='text-orange-600 text-base font-extra-bold text-xl opacity-100 flex justify-center'>4,100+</h1>
                            <p className='text-brown text-normal flex justify-center  text-center'>Multinational <br /> companies hire from us</p>
                        </aside>
                    </article>
                    <article className='flex justify-center mt-6'>
                        <Button
                            className='primaryAnimated'
                            title="View Placement"
                            onClick={() => { }}
                        />
                    </article>
                </aside>
                <aside className='flex justify-center align-end'>
                    <figure className='w-[78%]'>
                        <img src='./platformAssociateImage.png' alt='platformAssociateImage'></img>
                    </figure>

                </aside>
            </article >
        </section >
    )
}

export default PlacementAssistance