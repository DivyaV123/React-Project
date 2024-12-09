'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'
import { Fade } from 'react-awesome-reveal'
import Counter from '../commonComponents/counterAnimation/Counter'
import './chooseUs.scss'
import Image from 'next/image'

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
        <selection className='sm:grid grid-cols-2 gap-4 mt-[3.333vh]  mobile:flex-col mobile:hidden'>
            <Fade direction="left" delay={0} duration={1000}>
                <figure className='sm:w-[85%] tabView:mt-16 tabView:w-full relative bottom-[7vh]'>
                    <Image
                        src="/images/Placement assistance_image (02).png"
                        alt="platformAssociateImage"
                        width={800}
                        height={500}
                        className="w-[80.465vw] tabView:w-full"
                    />
                    {/* <img className='mobile:w-[94.419vw]' src='./images/Placement assistance_image (02).png' alt='facultyImage'></img> */}
                </figure>
            </Fade>
            <Fade direction="right" duration={1000} delay={0} >
                <aside className='animate-slide-from-right'>
                    <h1 className='font-bold text-black text-[2.188vw] mobile:text-[6.512vw] text-center flex justify-center mb-6 mobile:mb-[2.575vh] tabView:text-[2.688vw]'>
                        Get Experienced Faculty <br /> Guidance
                    </h1>
                    <p id="tagline tabView:choose_para_tab" className='text-[#454545] fulljustify text-[1.406vw]  mobile:text-[4.186vw] mt-[3.333vh] mobile:mt-[2.575vh] tabView:text-[1.882vw]'>
                        Discover our team of experienced faculty who bring a wealth of teaching expertise and real-world knowledge to every classroom. With qualifications, teaching evaluations, and industry experience, they ensure effective instruction and mentorship for your academic journey.
                    </p>
                    <article className='sm:grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-auto gap-2 mt-[3.333vh] w-full mobile:flex mobile:mt-[2.575vh] mobile:gap-6 tabView:flex tabView:gap-6'>
                        {
                            content.map((element) => {
                                let detail = element.info.replace(/#/g, "<br/>")
                                return (
                                    <aside>
                                        <h1 className='gradient-text  font-extra-bold opacity-100 flex justify-center text-[1.875vw] mobile:text-[5.581vw]'>
                                            <Counter initialValue={0} targetValue={500} label={element.count} />
                                        </h1>
                                        <p className='text-brown text-[1.25vw] text-normal flex justify-center mobile:text-[3.721vw] text-center tabView:text-[1.882vw]' dangerouslySetInnerHTML={{ __html: detail }} />
                                    </aside>
                                )
                            })
                        }
                    </article>
                    <article className='flex justify-center items-cenetr mb-8 mt-8 sm:h-10 mobile:mb-[1.073vh] mobile:mt-[4.292vh]'>
                        <Button
                            className='bg-gradient rounded text-[1.25vw] text-white w-[10.469vw] h-[3.75vw] mobile:h-[5.15vh] mobile:w-[31.628vw] mobile:text-[3.721vw] tabView:px-7 tabView:py-6 tabView:flex tabView:items-center tabView:w-auto tabView:h-auto'
                            title="View more"
                        />
                    </article>
                </aside>
            </Fade>
        </selection>
    )
}

export default ExperiencedFaculty