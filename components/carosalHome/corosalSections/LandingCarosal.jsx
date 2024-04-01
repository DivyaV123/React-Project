'use client'
import CarosalSection from '@/components/commonComponents/carosalSection/carosalSection'
import React from 'react'
import './sections.scss'
import Button from '@/components/commonComponents/button/Button'
import Fade from 'react-reveal/Fade'

function LandingCarosal() {
    return (
        <div className='h-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 h-{1000px}'>
            <Fade left delay={0} duration={1000}>
                <aside className='flex items-center'>
                    <article className='headerArticle'>
                        <h1 className='mainHead pb-2 text-dark-gray font-extra-bold font-2xl opacity-100'>Largest Software <br /> Training <br /> organization</h1>
                        {/* <h1 className=' text-xl gradient-text  text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>TRAINING ORGANIZATION</h1> */}
                        <p className='paragraph font-medium mb-3  pb-4 text-ash'>
                            Innovating methodologies and tools to ensure flawless software <br /> performance. Your partner in achieving unparalleled quality <br /> assurance standards
                        </p>
                        <article>
                            <Button
                                className='primary'
                                title="Get Started"
                            />
                        </article>
                    </article>
                </aside>
            </Fade>
            <Fade right delay={0} duration={1000}>
                <aside className='flex items-center justify-end relative'>
                    <article className='flex rounded-md gap-3 absolute h-16  bg-primary-300 justify-around border-solid border-2 top-[18%] left-[23%] border-dark-gray-600 w-40 items-center'>
                        <figure >
                            <img src='./coursesMainPage.svg' />
                        </figure>
                        <div>
                            <h1 className='text-dark-gray font-extra-bold'>
                                40+
                            </h1>
                            <h2 className='font-medium text-dark-gray font-large '>
                                Courses
                            </h2>
                        </div>
                    </article>
                    <article className='flex rounded-md gap-3 absolute h-16  bg-primary-300 justify-around border-solid border-2 top-[24%] left-[84%] border-dark-gray-600 w-40 items-center'>
                        <figure >
                            <img src='./companiesMainPage.svg' />
                        </figure>
                        <div>
                            <h1 className='text-dark-gray font-extra-bold'>
                                3.000+
                            </h1>
                            <h2 className='font-medium text-dark-gray font-large '>
                                Companies
                            </h2>
                        </div>
                    </article>
                    <article className='flex rounded-md gap-3 absolute h-16 z-1  bg-white justify-around border-solid border-2 top-[63%] left-[69%]   border-dark-gray-600 w-40 items-center'>
                        <figure >
                            <img src='./trainersMainPage.svg' />
                        </figure>
                        <div>
                            <h1 className='text-dark-gray font-extra-bold'>
                                500+
                            </h1>
                            <h2 className='font-medium text-dark-gray font-large '>
                                Trainers
                            </h2>
                        </div>
                    </article>
                    <article className='flex rounded-md gap-3 absolute h-16  bg-primary-300 justify-around border-solid border-2 top-[75%] left-[6%] border-dark-gray-600 w-40 items-center'>
                        <figure >
                            <img src='./stuedntsMainPage.svg' />
                        </figure>
                        <div>
                            <h1 className='text-dark-gray font-extra-bold'>
                                4,00,000+
                            </h1>
                            <h2 className='text-dark-gray font-medium'>
                                Students
                            </h2>
                        </div>
                    </article>

                    <figure className='w-[70%]'>
                        <img src='./landScreenpicture.png' alt='pic001'></img>
                    </figure>
                </aside>
            </Fade>
        </div>

    )
}

export default LandingCarosal