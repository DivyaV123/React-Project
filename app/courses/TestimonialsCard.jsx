import { svgicons } from '@/components/assets/icons/svgassets'
import Svg from '@/components/commonComponents/Svg/Svg'
import React from 'react'

function TestimonialsCard({ testimonialsData }) {
    return (
        <article className='flex justify-around w-[28.906vw] bg-white rounded-xl py-3 px-1 overflow-hide'>
            <article className='base-[35%]'>
                <figure className='p-1 w-full'>
                    <img className='w-full' src='../images/Testimonialsimage1.png' />
                </figure>
                <figure className='p-1 w-full'>
                    <img className='w-full' src='../images/TestimonialImage2.png' />
                </figure>
            </article>
            <article className='basis-[65%]'>
                <header>
                    <h1 className='font-bold pb-1 text-dark-gray'>
                        {testimonialsData?.name}
                    </h1>
                    <p className='text-[0.75rem] text-ash'>
                        {testimonialsData?.testimonial?.writtenTestimonial.length > 150 ? testimonialsData?.testimonial?.writtenTestimonial.substring(0, 150) + "..." : testimonialsData?.testimonial?.writtenTestimonial}
                    </p>
                </header>
                <p>
                    <span className='flex text-[0.875rem] gap-1 font-bold justify-end items-baseline'><span className='font-bold'>4.5</span> <Svg
                        className='mt-[0.15rem]'
                        width={svgicons.ratingStar[0]}
                        height={svgicons.ratingStar[1]}
                        viewBox={svgicons.ratingStar[2]}
                        icon={svgicons.ratingStar[3]}
                        color={svgicons.ratingStar[4]}
                    /></span>
                </p>
            </article>
        </article>
    )
}

export default TestimonialsCard