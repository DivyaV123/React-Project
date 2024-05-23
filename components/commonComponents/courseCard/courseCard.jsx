import React from 'react'
import './courseCard.scss'
import Button from '../button/Button'
import Svg from '../Svg/Svg'
import { svgicons } from '@/components/assets/icons/svgassets'


function CourseCard({ cardData }) {
    return (
        <>
            <section className='cardStyle justify-center p-4 grid justify-items-stretch mt-[1px] mb-[1px]'>
                <picture className='flex justify-self-center px-[0.556vh] py-[0.556vh] w-full '>
                    <img className='px-[2.222vh] py-[0.556vh] w-full' src={cardData.image} alt='image'></img>
                </picture>
                <div>
                </div>
                <aside className=''>
                    <h3 className='font-bold text-[1.094vw] px-[1.25vw]'>Test Architect</h3>
                    <p className='flex headerText justify-start mt-2 leading-4 text-[0.938vw] xl:text-sm text-ash leading-[1.234rem] px-[1.25vw]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.
                    </p>
                    <div className='flex mt-2 px-[1.25vw]'>
                        <span className='flex text-[0.938vw] font-bold items-baseline'><span className='font-bold'>4.5</span> <Svg
                            width={svgicons.ratingStar[0]}
                            height={svgicons.ratingStar[1]}
                            viewBox={svgicons.ratingStar[2]}
                            icon={svgicons.ratingStar[3]}
                            color={svgicons.ratingStar[4]}
                        /></span>
                        <span className='flex text-[0.938vw] items-baseline'>{`6,256`}</span>
                    </div>
                    <div className='flex justify-center gap-2 py-[2.222vh] px-[1.25vw] '>
                        <aside>
                            <Button className="courseCardBtn text-[1.094vw]  font-semibold text-white bg-gradient rounded-md" title='Enroll now' />
                        </aside>
                        <aside>
                            <Button className="courseCardBtn buttonTextColour  text-[1.094vw]  font-semiboldF border border-orange-500 rounded-md" title='Request call' />
                        </aside>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default CourseCard