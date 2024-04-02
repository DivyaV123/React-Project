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
import AllTestimonial from './allTestimonial'
import { Slide } from 'react-reveal'

function TestimonialsHome() {
    return (
        <MaxWebWidth>
            <header>
                <Slide top cascade>
                    <h1 className='font-extra-bold text-2xl flex justify-center align-center mb-3 mt-8 h-18'>
                        Students Testimonials
                    </h1>
                </Slide>
                <article>
                    <AllTestimonial />
                </article>
            </header>
            <article className='flex justify-end items-cenetr mb-8 mt-8 h-10'>
                <Button
                    className='primary'
                    title="View more"
                />
            </article>
        </MaxWebWidth>
    )
}

export default TestimonialsHome