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
import CoursePageContainer from './CoursePageContainer'

function StudentsTestimonialsHome({ page }) {
    return (
        <CoursePageContainer className={page === 'branch' ? '!w-full !p-0' : 'bg-[#F9F9F9]'}>
            <article className=''>
                <header>
                    <h1 className={page === 'branch' ? 'flex justify-center font-bold text-[1.5rem] py-5 w-[51.56vw]' : 'font-bold text-[1.5rem] py-5 w-[51.56vw]'}>
                        StudentsTestimonialsHome
                    </h1>
                </header>
                <article className={page === "branch" ? '' : 'w-[51.56vw] overflow-hide'}>
                    <Carousel>
                        <CarouselContent className='bg-[#F9F9F9]'>
                            {Array.from({ length: 4 }, (value, index) => (
                                <CarouselItem className={page === 'branch' ? 'basis-[33%]' : "basis-[57%]"} >
                                    <article className='pb-3'>
                                        < TestimonialsCard />
                                    </article>
                                    < TestimonialsCard />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </article>
                <article className={page === "branch" ? 'flex justify-center mt-3 pb-5' : 'flex justify-center mt-3 w-[51.56vw] pb-5'}>
                    <Button
                        className='bg-gradient h-[2.656vw] w-[9.375vw] text-[0.75rem] text-white rounded-md'
                        title="View More"
                        onClick={() => { }}
                    />
                </article>
            </article>
        </CoursePageContainer>
    )
}

export default StudentsTestimonialsHome