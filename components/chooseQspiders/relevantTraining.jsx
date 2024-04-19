'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'


function RelevantTraining() {
    return (
        <section className='grid grid-cols-2 gap-4 mt-6 mb-8'>
            <Fade left duration={1000} delay={0}>
                <aside className='flex items-center'>
                    <div>
                        <header>
                            <h1 className='font-extra-bold text-dark-gray text-2xl flex justify-start mb-6'>
                                Industry-Relevant Training
                            </h1>
                            <p className='text-dark-gray text-normal mt-6'>
                            At QSpiders, we are committed to providing industry-relevant training that aligns with the current trends and technologies in the IT sector.
                            </p>
                        </header>
                        <article className='flex justify-start align-start mt-6'>
                            <aside className='w-[100%]'>
                                <h1 style={{
                                    backGround: "-webkit-linear-gradient(#eee, #333)",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                }} className='pl-5 gradient-text font-extra-bold text-medium text-xl opacity-100 flex justify-start'>
                                    2.5Lac+
                                </h1>
                                <p className='text-brown txet-normal flex justify-start  text-center'>Total no of <br/> students placed</p>
                            </aside>
                            <aside className='w-[100%]'>
                                <h1 className='pl-5 gradient-text text-base font-extra-bold text-xl opacity-100 flex justify-start'>
                                    4,100+
                                </h1>
                                <p className='text-brown text-normal flex justify-start  text-center'>MNC Companies <br/> hire from us</p>
                            </aside>
                        </article>
                        <article className='flex justify-start mt-6'>
                            <Button
                                className='primary'
                                title="Enquire now"
                                onClick={() => { }}
                            />
                        </article>
                    </div>
                </aside>
            </Fade>
            <Fade right duration={1000} delay={0}>
                <aside className='flex justify-center align-end'>
                    <figure className='w-[85%]'>
                        <img src='./releventTraining.png' alt='facultyImage'></img>
                    </figure>
                </aside>
            </Fade>
        </section>
    )
}

export default RelevantTraining