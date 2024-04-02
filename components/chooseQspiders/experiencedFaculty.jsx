'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import Counter from '../commonComponents/counterAnimation/Counter'

function ExperiencedFaculty() {
    const content = [
        {
            count: '500+',
            info: 'Experienced # trainers'
        },
        {
            count: '1:1',
            info: 'Experienced trainers'
        },
        {
            count: '4,100+',
            info: 'Average Support # Rating'
        }
    ]
    return (
        <selection className='grid grid-cols-2 gap-4 mt-6'>
            <Fade left delay={0} duration={1000}>
                <figure className='w-[85%]'>
                    <img src='./facultyImage.png' alt='facultyImage'></img>
                </figure>
            </Fade>
            <Fade right duration={1000} delay={0} >
                <aside className='animate-slide-from-right'>
                    <h1 className='font-extra-bold text-dark-gray text-2xl flex justify-start mb-6'>
                        Get Experienced Faculty <br /> Guidance
                    </h1>
                    <p className='text-dark-gray text-normal mt-6'>
                        Our team of experienced and knowledgeable faculty <br />
                        members are industry experts who are passionate about <br />
                        grooming the next generation of IT professionals.
                    </p>
                    <article className='grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-auto gap-2 mt-6'>
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
                    <article className='flex justify-center mt-6'>
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