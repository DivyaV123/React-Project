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
                    <h1 className={page === 'branch' ? 'flex justify-start font-bold text-[2rem] py-5 ' : 'font-bold text-[1.5rem] py-5 w-[51.56vw]'}>
                        Students Testimonials

                    </h1>
                </header>
                <article className={page === "branch" ? '' : 'w-[93%] overflow-hide'}>
                    <Carousel>
                        <CarouselContent className='bg-[#F9F9F9]'>
                            {testimonialsData?.map((element, index) => {
                                const firstCardData = testimonialsData[index * 2];
                                const secondCardData = testimonialsData[index * 2 + 1];

                                return (
                                    <CarouselItem className={page === 'branch' ? 'basis-[33%]' : 'basis-[57%]'} key={index}>
                                        <article className='flex gap-4 pb-3'>
                                            {isloading && index % 2 === 0 ? (
                                                <TestimonialsSkeletonCard />
                                            ) : (
                                                firstCardData && <TestimonialsCard testimonialsData={firstCardData} compleateData={testimonialsData} />
                                            )}
                                        </article>
                                        <article className='flex gap-4'>
                                            {isloading && index % 2 !== 0 ? (
                                                <TestimonialsSkeletonCard />
                                            ) : (
                                                secondCardData && <TestimonialsCard testimonialsData={secondCardData} compleateData={testimonialsData} />
                                            )}
                                        </article>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </article>
                <Link href={PLACEMENT_PATH}>
                    <article className={page === "branch" ? 'flex justify-center mt-[4.444vh] pb-[4.444vh]' : 'flex justify-center mt-[2.778vh] w-[51.56vw] pb-[2.778vh]'}>
                        <Button
                            className='bg-gradient h-[2.656vw] font-medium w-[9.375vw] text-[0.75rem] text-white rounded-md'
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