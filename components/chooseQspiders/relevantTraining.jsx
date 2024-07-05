'use client'
import React, { useContext, useState } from 'react'
import Button from '../commonComponents/button/Button'
import Fade from 'react-reveal/Fade'
import './chooseUs.scss'
import { GlobalContext } from '../Context/GlobalContext'
import HiringModal from '@/app/hireFromUs/Modal/HiringModal'
import Image from 'next/image'


function RelevantTraining() {
    const { domainVariable } = useContext(GlobalContext)
    const [active, setActive] = useState(false)
    const [activeTab, setActiveTab] = useState("Corporate Training")
    const handleCardClick = () => {
        setActive(true);
        setActiveTab('Corporate Training');
    };

    const handleCloseModal = () => {
        setActive(false);
    };
    return (
        <section className='sm:grid grid-cols-2 gap-4 mt-6 mb-8 mobile:flex mobile:flex-col-reverse'>
            <Fade left duration={1000} delay={0}>
                <aside className='flex items-center'>
                    <div>
                        <header>
                            <h1 className='font-bold text-black text-header flex justify-center mb-6 mobile:text-[6.512vw] mobile:mb-[2.575vh]'>
                                Industry-Relevant Training
                            </h1>
                            <p id="tagline" className='text-dark-gray flex-col item-center fulljustify text-[18px] mt-6 mobile:mt-[2.575vh] mobile:text-[4.186vw]'>
                                At {domainVariable}, we are committed to providing industry-relevant training that aligns with the current trends and technologies in the IT sector. Our expert-led courses ensure that students gain the practical, in-demand skills needed to excel in today's competitive job market.
                            </p>
                        </header>
                        <article className='flex justify-start align-start mt-6 mobile:mt-[2.575vh]'>
                            <aside className='w-[100%]'>
                                <h1 style={{
                                    backGround: "-webkit-linear-gradient(#eee, #333)",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                }} className='gradient-text font-extra-bold text-medium text-xl opacity-100 flex justify-center mobile:text-[5.581vw] mobile:pb-[0.644vh]'>
                                    2.5Lac+
                                </h1>
                                <p className='text-brown txet-normal flex justify-center  text-center mobile:text-[3.721vw]'>Total no of <br /> students placed</p>
                            </aside>
                            <aside className='w-[100%]'>
                                <h1 className='gradient-text  font-extra-bold text-xl opacity-100 flex justify-center mobile:text-[5.581vw] mobile:pb-[0.644vh]'>
                                    4,100+
                                </h1>
                                <p className='text-brown text-normal flex justify-center  text-center mobile:text-[3.721vw]'>MNC Companies <br /> hire from us</p>
                            </aside>
                        </article>
                        <article className='flex justify-center mt-6 mobile:mt-[2.575vh]'>
                            <Button
                                className='bg-gradient text-white rounded w-[11.719vw] h-[3.75vw] mobile:h-[5.15vh] mobile:w-[31.628vw] mobile:text-[3.721vw]'
                                title="Enquiry Now"
                                onClick={handleCardClick}
                            />
                        </article>
                    </div>
                </aside>
            </Fade>
            <Fade right duration={1000} delay={0}>
                <aside className='flex justify-center align-end'>
                    <figure className='sm:w-[95%]'>
                        <Image
                            src="/images/PlacementAssistance_image(5).png"
                            alt="platformAssociateImage"
                            width={800}  // replace with actual width
                            height={500} // replace with actual height
                            className="w-[80.465vw]"
                        />
                        {/* <img src='./images/PlacementAssistance_image(5).png' alt='facultyImage'></img> */}
                    </figure>
                </aside>
            </Fade>
            {active && (
                <HiringModal
                    isModalOpen={active}
                    activeTab={activeTab}
                    handleCloseModal={handleCloseModal}
                    setActiveTab={setActiveTab}
                />
            )}
        </section>
    )
}

export default RelevantTraining