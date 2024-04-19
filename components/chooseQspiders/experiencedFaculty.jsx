'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import Counter from '../commonComponents/counterAnimation/Counter'

function ExperiencedFaculty() {
    const content = [
        {
            count: '500+',
            info: 'Experienced # Trainers'
        },
        {
            count: '4.3/5',
            info: 'EAverage Support # Rating'
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
                    <h1 className='font-extra-bold text-dark-gray text-2xl flex justify-start mb-6'>
                        Get Experienced Faculty <br /> Guidance
                    </h1>
                    <p className='text-dark-gray text-normal mt-6'>
                        Our dedicated placement cell works tirelessly to connect our students with leading IT companies for job opportunities. With a strong network of corporate partners and recruitment drives to ensure maximum exposure for our students.
                    </p>
                    <article className='grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-auto gap-2 mt-6'>
                        {
                            content.map((element) => {
                                let detail = element.info.replace(/#/g, "<br/>")
                                return (
                                    <aside>
                                        <h1 className='gradient-text text-base font-extra-bold opacity-100 flex justify-start pl-5 text-xl'>
                                            <Counter initialValue={0} targetValue={500} label={element.count} />
                                        </h1>
                                        <p className='text-brown text-normal flex justify-start  text-center' dangerouslySetInnerHTML={{ __html: detail }} />
                                    </aside>
                                )
                            })
                        }
                    </article>
                    <article className='flex justify-start mt-6'>
                        <Button
                            className='primary'
                            title="View more"
                            onClick={() => { }}
                        />
                    </article>
                </aside>
            </Fade>
        </selection>
    )
}

export default ExperiencedFaculty