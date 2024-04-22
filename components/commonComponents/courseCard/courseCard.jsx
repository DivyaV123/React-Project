import React from 'react'
import './courseCard.scss'
import Button from '../button/Button'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'


function CourseCard({ cardData }) {
    console.log(cardData,"cardDatacardData")
    return (
        <>
            <section className='cardStyle justify-center p-4 grid justify-items-stretch'>
                <picture className='flex justify-self-center p-1 w-full '>
                    <img className='p-1 w-full' src={cardData.image} alt='image'></img>
                </picture>
                <div>
                </div>
                <aside className=''>
                    <h3 className='font-bold text-base px-3 2xl:text-2xl'>Test Architect</h3>
                    <p className='flex headerText 2xl:text-base justify-start mt-2 leading-4 text-xs xl:text:sm 2xl:text-normal text-ash px-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.
                    </p>
                    <div className='flex mt-2 px-3'>
                        <span className='flex text-xs font-bold'><span className='font-bold'>4.5</span> <Svg
                            width={svgicons.ratingStar[0]}
                            height={svgicons.ratingStar[1]}
                            viewBox={svgicons.ratingStar[2]}
                            icon={svgicons.ratingStar[3]}
                            color={svgicons.ratingStar[4]}
                        /></span>
                        <span className='text-xs'>{`6,256`}</span>
                    </div>
                    <div className='flex space-x-3 m-2  justify-center mt-6'>
                        <aside>
                            <Button className="courseCardBtn text-xs xl:p-2 xl:w-full 2xl:p-4 2xl:w-full font-medium text-white bg-gradient rounded-md" title='Enroll now' size='lg' />
                        </aside>
                        <aside>
                            <Button className="courseCardBtn xl:p-2 xl:w-full 2xl:p-4 2xl:w-full  text-xs text-orange-500 font-medium border border-orange-500 rounded-md" title='Request call' />
                        </aside>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default CourseCard