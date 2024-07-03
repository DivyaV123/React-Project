'use client'
import React, {useState } from 'react'
import './courseCard.scss'
import Button from '../button/Button'
import Svg from '../Svg/Svg'
import { truncateText } from '@/lib/utils'
import { svgicons } from '@/components/assets/icons/svgassets'
import EnrollPopUp from './EnrollPopUp'
import { useRouter } from 'next/navigation'
function CourseCard({ cardData }) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCardClick = () => {

        setIsModalOpen(true);

    };

    const handleCloseModal = () => {
        setIsModalOpen(false);

    };
    const handleKnowMore=(id)=>{
        router.push(`/courses/${id}`)
    }
    return (
        <>
            <section className='cardStyle justify-center  justify-items-stretch'>
                <picture className='flex justify-gf-center w-full'>
                    <img className='px-[0.781vw] pt-[1.389vh] pb-[1.111vh] w-full  mobile:p-0 mobile:h-[17.167vh]' src={cardData.image ? cardData.image : cardData.homePageCourseImage} alt='image'></img>
                </picture>
                <div>
                </div>
                <aside className='sm:px-[0.781vw] pt-[1.389vh] mobile:pt-[1.717vh] mobile:pl-[3.721vw] mobile:pr-[3.721vw]'>
                    <h3 title={cardData.courseName ? cardData.courseName : cardData.name} className='font-bold text-[1.25vw] mobile:text-[3.721vw]'>{cardData.courseName ? truncateText(cardData.courseName, 25) : cardData.name ? truncateText(cardData.name, 25) : "Test Architect"}</h3>
                    <p title={cardData.courseDescription ? cardData.courseDescription : cardData.detail} className='flex headerText justify-start pt-[0.833vh]  text-[0.938vw] mobile:text-[3.256vw] mobile:pt-[0.858vh] text-ash  '>
                        {cardData.courseDescription ? truncateText(cardData.courseDescription, 68) : cardData.detail ? truncateText(cardData.detail, 68) : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards."}
                    </p>
                    <div className='flex gap-1 pt-[0.833vh] mobile:pt-[0.644vh]'>
                        <span className='flex text-[0.938vw] mobile:text-[3.256vw] font-bold items-baseline'>4.5</span>
                        <span className='flex text-[0.938vw] mobile:text-[3.256vw] font-bold pt-0.5 items-baseline'>
                            <Svg
                                width={svgicons.ratingStar[0]}
                                height={svgicons.ratingStar[1]}
                                viewBox={svgicons.ratingStar[2]}
                                icon={svgicons.ratingStar[3]}
                                color={svgicons.ratingStar[4]}
                            /></span>
                        <span className='flex text-[0.938vw] mobile:text-[2.791vw] items-baseline'>{`6,256`}</span>
                    </div>

                    <div className='flex justify-center gap-2 py-[1.389vh]  '>
                        <aside>

                            <Button onClick={() => handleCardClick()} className="courseCardBtn text-[1.094vw] mobile:text-[2.791vw]  font-semibold text-white bg-gradient rounded-md" title='Enroll now' />

                        </aside>
                        <aside>
                            <Button onClick={() => handleKnowMore(cardData?.courseId)} className="courseCardBtn buttonTextColour  text-[1.094vw] mobile:text-[2.791vw]  font-semibold border border-orange-500 rounded-md" title='Know More' />
                        </aside>
                    </div>
                </aside>



            </section>
            <EnrollPopUp isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />

        </>
    )
}

export default CourseCard