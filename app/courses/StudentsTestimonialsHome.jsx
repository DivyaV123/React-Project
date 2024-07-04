'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
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
import TestimonialsSkeletonCard from './TestimonialsSkeletonCard'
import Link from 'next/link'
import { PLACEMENT_PATH } from '@/lib/RouteConstants'

function StudentsTestimonialsHome({ page, testimonialsData }) {
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])
    return (
        <CoursePageContainer className={page === 'branch' ? '!w-full !p-0' : 'bg-[#F9F9F9]'}>
            <article className=''>
                <header>
                    <h1 className={page === 'branch' ? 'flex justify-start font-bold mobile:text-[4.651vw] text-[2rem] py-5 ' : 'font-bold text-[1.5rem] mobile:text-[4.651vw] py-5 w-[51.56vw]'}>
                        Students Testimonials

                    </h1>
                </header>
                <article className={page === "branch" ? '' : 'w-[93%] overflow-hide'}>
                    <Carousel>
                        <CarouselContent className='bg-[#F9F9F9]'>
                            {testimonialsData?.map((element, index) => {
                                // Calculate the index for the first and second card
                                const firstCardIndex = index * 2;
                                const secondCardIndex = firstCardIndex + 1;

                                // Check if there is data for the first and second card
                                const firstCardData = testimonialsData[firstCardIndex];
                                const secondCardData = testimonialsData[secondCardIndex];

                                // Only render a CarouselItem if there is data for at least one of the cards
                                if (!firstCardData && !secondCardData) {
                                    return null;
                                }

                                return (
                                    <CarouselItem
                                        className={page === 'branch' ? 'sm:basis-[33%] mobile:w-[86.047vw] mobile:mr-[8.372vw]' : 'basis-[57%]'}
                                        key={index}
                                    >
                                        {firstCardData && (
                                            <article className='flex gap-4 sm:pb-3 mobile:w-[86.047vw] mobile:h-[20.386vh] mobile:bg-white mobile:mb-[2.575vh] mobile:pl-[3.721vw] rounded-xl'>
                                                {isloading && index % 2 === 0 ? (
                                                    <TestimonialsSkeletonCard />
                                                ) : (
                                                    <TestimonialsCard testimonialsData={firstCardData} compleateData={testimonialsData} />
                                                )}
                                            </article>
                                        )}
                                        {secondCardData && (
                                            <article className='flex gap-4 mobile:w-[86.047vw] mobile:h-[20.386vh] mobile:bg-white mobile:mb-[2.575vh] mobile:pl-[3.721vw] rounded-xl'>
                                                {isloading && index % 2 !== 0 ? (
                                                    <TestimonialsSkeletonCard />
                                                ) : (
                                                    <TestimonialsCard testimonialsData={secondCardData} compleateData={testimonialsData} />
                                                )}
                                            </article>
                                        )}
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>

                        <div className='mobile:hidden'>
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </article>
                <Link href={PLACEMENT_PATH}>
                    <article className={page === "branch" ? 'flex justify-center mt-[4.444vh] sm:pb-[4.444vh] mobile:mt-[1.824vh] ' : 'flex justify-center mt-[2.778vh] w-[51.56vw] pb-[2.778vh]'}>
                        <Button
                            className='bg-gradient h-[2.656vw] font-medium w-[9.375vw] text-[0.75rem] text-white rounded-md mobile:w-[27.907vw] mobile:h-[3.648vh] mobile:text-[2.791vw]'
                            title="View More"
                            onClick={() => { }}
                        />
                    </article>
                </Link>
            </article>
        </CoursePageContainer >
    )
}

export default StudentsTestimonialsHome