'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import Counter from '../commonComponents/counterAnimation/Counter'
import './chooseUS.scss'

function ExperiencedFaculty() {
    const content = [
        {
            count: '500+',
            info: 'Experienced # Trainers'
        },
        {
            count: '4.3/5',
            info: 'Average Support # Rating'
        },
        {
            count: '1:1',
            info: 'Support # Program'
        }
    ]
    return (
        <selection className='grid grid-cols-2 gap-4 mt-6'>
            <Fade left delay={0} duration={1000}>
                <figure className='w-[85%]'>
                    <img src='./images/Placement assistance_image (02).png' alt='facultyImage'></img>
                </figure>
            </Fade>
            <Fade right duration={1000} delay={0} >
                <aside className='animate-slide-from-right'>
                    <h1 className='font-bold text-black text-2xl text-center flex justify-center mb-6'>
                        Get Experienced Faculty <br /> Guidance
                    </h1>
                    <p id="tagline" className='text-dark-gray fulljustify text-[18px] mt-6'>
                        Our dedicated placement cell works tirelessly to connect our students with leading IT companies for job opportunities. With a strong network of corporate partners and recruitment drives to ensure maximum exposure for our students.
                    </p>
                    <article className='grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-auto gap-2 mt-6 w-full'>
                        {
                            content.map((element) => {
                                let detail = element.info.replace(/#/g, "<br/>")
                                return (
                                    <aside>
                                        <h1 className='gradient-text text-base font-extra-bold opacity-100 flex justify-center text-xl'>
                                            <Counter initialValue={0} targetValue={500} label={element.count} />
                                        </h1>
                                        <p className='text-brown text-normal flex justify-center  text-center' dangerouslySetInnerHTML={{ __html: detail }} />
                                    </aside>
                                )
                            })
                        }
                    </article>
                    <article className='flex justify-center items-cenetr mb-8 mt-8 h-10'>
                        <Button
                            className='bg-gradient rounded text-white w-[10.469vw] h-[3.75vw]'
                            title="View More"
                        />
                    </article>
                </aside>
            </Fade>
        </selection>
    )
}

export default ExperiencedFaculty