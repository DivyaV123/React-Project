import { WidthIcon } from '@radix-ui/react-icons'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'

function FaqHome() {
    return (
        <MaxWebWidth sectionStyling='bg-backgroundBlue'>
            <header>
                <h1 className='font-extra-bold text-2xl flex justify-center align-center mt-8 '>
                    FAQ’s
                </h1>
                <span className='text-sm flex justify-center align-center mb-8 min-h-10'>
                    often asked questions from our wonderful partners
                </span>
            </header>
            <article className='pb-8'>
                <Qaccordion/>
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome