'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Button from '../commonComponents/button/Button'

function TestimonialsHome() {
    return (
        <MaxWebWidth>
            <header>
                <h1 className='font-extra-bold text-2xl flex justify-center align-center mb-8 mt-8 h-20'>
                    Students Testimonials
                </h1>
                <article>
                    <Carousel className="w-full ">
                        <CarouselContent>
                            {Array.from({ length: 2 }, (_, index) => (
                                <CarouselItem key={index}>
                                    <div className='h-40' key={index}>Iteration {index + 1}</div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </article>
            </header>
            <article className='flex justify-center items-cenetr mb-8 mt-8'>
                <Button
                    className='primaryAnimated'
                    title="View more"
                />
            </article>
        </MaxWebWidth>
    )
}

export default TestimonialsHome