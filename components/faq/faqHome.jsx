'use client'
import { WidthIcon } from '@radix-ui/react-icons'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'
import { Slide } from 'react-reveal'

function FaqHome({ page, questions }) {

    const qaList = [
        {
            question: 'How do I create an employer account with Qspiders hiring?',
            answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
        },
        {
            question: 'How do I create an employer account with Qspiders hiring?',
            answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
        },
        {
            question: 'How do I create an employer account with Qspiders hiring?',
            answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
        },
        {
            question: 'How do I create an employer account with Qspiders hiring?',
            answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
        }
    ]
    return (
        <MaxWebWidth sectionStyling={`${page === 'course' ? '' : 'bg-backgroundBlue'}`}>
            <header className={`${page === 'course' ? 'w-[51.56vw] mt-8 p-5' : 'mt-8 p-5'}`}>
                <h1 className='font-bold text-3xl flex justify-center align-center '>
                    {page === 'course' ? 'Frequently Asked Questions' : 'FAQ’s'}
                </h1>
                {page !== 'course' && (
                    <span className='text-sm font-normal flex justify-center align-center'>
                        Often asked questions from our wonderful partners
                    </span>
                )}
            </header>
            <article className={`${page === 'course' ? 'w-[51.56vw]' : 'pb-8'}`}>
                <Qaccordion qaList={qaList} />
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome