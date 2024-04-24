'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import Button from '@/components/commonComponents/button/Button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function StudentsTestimonialsHome() {
    return (
        <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
            <article className=''>
                <header>
                    <h1 className='font-bold text-[1.5rem] py-5 w-[51.56vw]'>
                        StudentsTestimonialsHome
                    </h1>
                </header>
                <article className='w-[51.56vw] overflow-hide'>
                    <Carousel>
                        <CarouselContent className='bg-[#F9F9F9]'>
                            {Array.from({ length: 4 }, (value, index) => (
                                <CarouselItem className="basis-[57%]">
                                    <article className='pb-3'>
                                    < TestimonialsCard />
                                    </article>
                                    < TestimonialsCard />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </article>
                <article className='flex justify-center mt-3 w-[51.56vw] pb-5'>
                    <Button
                        className='bg-gradient h-[2.656vw] w-[9.375vw] text-[0.75rem] text-white rounded-md'
                        title="View More"
                        onClick={() => { }}
                    />
                </article>
            </article>
        </MaxWebWidth>
    )
}

export default StudentsTestimonialsHome