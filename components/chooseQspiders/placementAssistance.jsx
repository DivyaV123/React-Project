'use client'
import React, { useContext } from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";
import Counter from '../commonComponents/counterAnimation/Counter';
import './chooseUs.scss'
import { GlobalContext } from '../Context/GlobalContext';
import Link from 'next/link';
import { PLACEMENT_PATH } from '@/lib/RouteConstants';
import Image from 'next/image';


function PlacementAssistance() {
    const { domainVariable } = useContext(GlobalContext)
    return (
        <section className='mt-[3.333vh] mobile:mt-[3.219vh] mobile:hidden'>
            <header>
                <Slide top cascade>
                    <p className='font-bold text-[2rem] mobile:text-[5.581vw] text-black flex justify-center align-center sm:mb-8 sm:mt-8 mobile:mb-[1.717vh]'>
                        Why Choose {domainVariable}
                    </p>
                </Slide>
            </header>
            <article className='sm:grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse'>
                <Fade left delay={0} duration={1000}>
                    <aside className='mt-[3.333vh] animate-slide-from-left'>
                        <header className='font-bold text-black  text-[1.75rem] mobile:text-[6.512vw]  flex justify-center tabView:text-[2.688vw]'>
                            <p >Placement Assistance</p>
                        </header>
                        <p id="tagline tabView:choose_para_tab" className='text-[#454545] fulljustify text-[1.406vw]  mobile:text-[4.186vw] mt-[3.333vh] mobile:mt-[2.575vh] tabView:text-[1.613vw]'>
                            Our dedicated placement cell works tirelessly to connect our students with leading IT companies for job opportunities. With a strong network of corporate partners and frequent recruitment drives to ensure maximum exposure for our students, we achieve outstanding placement success.
                        </p>
                        <article className='flex justify-center align-center mt-[3.333vh] mobile:mt-[2.575vh]'>
                            <aside className='w-[100%]'>
                                <h1 style={{
                                    backGround: "-webkit-linear-gradient(#eee, #333)",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                }} className='gradient-text font-extra-bold text-medium text-[1.875vw] mobile:text-[5.581vw] opacity-100 flex justify-center tabView:text-[2.688vw]'>
                                    <Counter initialValue={0} targetValue={5000} label='2.5Lac+' /><br />
                                </h1>
                                <p className='text-brown text-normal text-[1.25vw] mobile:text-[3.721vw] flex justify-center  text-center tabView:text-[1.882vw]'>Students Placed <br /> in Total</p>
                            </aside>
                            <aside className='w-[100%]'>
                                <h1 className='gradient-text mobile:text-[5.581vw] font-extra-bold text-[1.875vw] opacity-100 flex justify-center tabView:text-[2.688vw]'>
                                    <Counter initialValue={0} targetValue={5000} label='4,100+' /><br />
                                </h1>
                                <p className='text-brown text-normal text-[1.25vw] flex justify-center mobile:text-[3.721vw]  text-center tabView:text-[1.882vw]'>Multinational <br /> companies hire from us</p>
                            </aside>
                        </article>
                        <Link href={PLACEMENT_PATH}>
                            <article className='flex justify-center mobile:mt-[2.575vh]'>
                                <Button
                                    className='bg-gradient text-[1.25vw] text-white h-[3.75vw] rounded mt-8  w-[14.844vw] mobile:h-[5.15vh] mobile:w-[44.186vw] tabView:px-5 tabView:py-4 tabView:flex tabView:items-center tabView:w-auto tabView:h-auto'
                                    title="View Placements"
                                    onClick={() => { }}
                                />
                            </article>
                        </Link>
                    </aside>
                </Fade>
                <Fade right delay={0} duration={1000}>
                    <aside className='flex justify-center align-end animate-slide-from-right tabView:mt-16'>
                        <figure className='sm:w-[78%]'>
                            <Image
                                src="/images/Placement assistance_image (4).png"
                                alt="platformAssociateImage"
                                width={800}
                                height={500}
                                className="w-[80.465vw]"
                            />
                            {/* <img src='./images/Placement assistance_image (4).png' className='w-[80.465vw]' alt='platformAssociateImage'></img> */}
                        </figure>

                    </aside>
                </Fade>
            </article >
        </section>
    )
}

export default PlacementAssistance