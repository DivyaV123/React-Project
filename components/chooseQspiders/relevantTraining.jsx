'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import './chooseUs.scss'


function RelevantTraining() {
    return (
        <section className='grid grid-cols-2 gap-4 mt-6 mb-8'>
            <Fade left duration={1000} delay={0}>
                <aside className='flex items-center'>
                    <div>
                        <header>
                            <h1 className='font-bold text-black text-header flex justify-center mb-6'>
                                Industry-Relevant Training
                            </h1>
                            <p id="tagline" className='text-dark-gray flex-col item-center fulljustify text-[18px] mt-6'>
                                At QSpiders, we are committed to providing industry-relevant training that aligns with the current trends and technologies in the IT sector.
                            </p>
                        </header>
                        <article className='flex justify-start align-start mt-6'>
                            <aside className='w-[100%]'>
                                <h1 style={{
                                    backGround: "-webkit-linear-gradient(#eee, #333)",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                }} className='gradient-text font-extra-bold text-medium text-xl opacity-100 flex justify-center'>
                                    2.5Lac+
                                </h1>
                                <p className='text-brown txet-normal flex justify-center  text-center'>Total no of <br /> students placed</p>
                            </aside>
                            <aside className='w-[100%]'>
                                <h1 className='gradient-text text-base font-extra-bold text-xl opacity-100 flex justify-center'>
                                    4,100+
                                </h1>
                                <p className='text-brown text-normal flex justify-center  text-center'>MNC Companies <br /> hire from us</p>
                            </aside>
                        </article>
                        <article className='flex justify-center mt-6'>
                            <Button
                                className='bg-gradient text-white rounded w-[11.719vw] h-[3.75vw]'
                                title="Know more"
                                onClick={() => { }}
                            />
                        </article>
                    </div>
                </aside>
            </Fade>
            <Fade right duration={1000} delay={0}>
                <aside className='flex justify-center align-end'>
                    <figure className='w-[95%]'>
                        <img src='./images/PlacementAssistance_image(5).png' alt='facultyImage'></img>
                    </figure>
                </aside>
            </Fade>
        </section>
    )
}

export default RelevantTraining