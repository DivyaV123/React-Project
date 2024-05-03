'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";
import Counter from '../commonComponents/counterAnimation/Counter';


function PlacementAssistance() {
    return (
        <section className='mt-6'>
            <header>
                <Slide top cascade>
                    <p className='font-bold text-[2rem] text-black flex justify-center align-center mb-8 mt-8'>
                        Why Choose Qspiders
                    </p>
                </Slide>
            </header>
            <article className='grid grid-cols-2 gap-4'>
                <Fade left delay={0} duration={1000}>
                    <aside className='mt-6 animate-slide-from-left'>
                        <header className='font-bold text-black  text-[1.75rem]  flex justify-center'>
                            <p >Placement Assistance</p>
                        </header>
                        <p className='text-dark-gray text-center text-[18px] mt-6'>
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
                                }} className='gradient-text font-extra-bold text-medium text-xl opacity-100 flex justify-center'>
                                    <Counter initialValue={0} targetValue={5000} label='2.5+Lac' /><br />
                                </h1>
                                <p className='text-brown txet-normal flex justify-center  text-center'>Students Placed <br /> in Total</p>
                            </aside>
                            <aside className='w-[100%]'>
                                <h1 className='gradient-text text-base font-extra-bold text-xl opacity-100 flex justify-center'>
                                    <Counter initialValue={0} targetValue={5000} label='4,100+' /><br />
                                </h1>
                                <p className='text-brown text-normal flex justify-center  text-center'>Multinational <br /> companies hire from us</p>
                            </aside>
                        </article>
                        <article className='flex justify-center mt-6'>
                            <Button
                                className='bg-gradient text-white h-[3.75vw] rounded  w-[14.844vw]'
                                title="View Placements"
                                onClick={() => { }}
                            />
                        </article>
                    </aside>
                </Fade>
                <Fade right delay={0} duration={1000}>
                    <aside className='flex justify-center align-end animate-slide-from-right'>
                        <figure className='w-[78%]'>
                            <img src='./images/Placement assistance_image (4).png' alt='platformAssociateImage'></img>
                        </figure>

                    </aside>
                </Fade>
            </article >
        </section>
    )
}

export default PlacementAssistance