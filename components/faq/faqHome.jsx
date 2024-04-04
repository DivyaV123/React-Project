'use client'
import { WidthIcon } from '@radix-ui/react-icons'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'
import { Slide } from 'react-reveal'

function FaqHome() {
    return (
        <MaxWebWidth sectionStyling='bg-backgroundBlue'>
            <header className='mt-8 p-5'>
                <h1 className='font-bold text-3xl flex justify-center align-center '>
                    FAQ’s
                </h1>
                <span className='text-sm font-normal flex justify-center align-center'>
                    often asked questions from our wonderful partners
                </span>
            </header>
            <article className='pb-8'>
                <Qaccordion />
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome