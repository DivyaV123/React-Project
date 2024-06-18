'use client'
import { WidthIcon } from '@radix-ui/react-icons'
import React, { useCallback, useContext } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'

function FaqHome({ page, questions, courseDetails }) {
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
        <MaxWebWidth sectionStyling='bg-[#F6F6F6]'>
            <header className={`mt-[4.444vh] px-[1.563vw] py-[2.778vh]`}>
                <h1 className={`font-bold text-[2rem] justify-center flex  align-center`}>
                    {'FAQ’s'}
                </h1>
                {/* {page !== 'course' && page !== 'branch' && ( */}
                <span className='text-[0.875rem] text-dark-gray font-normal flex justify-center items-center'>
                    Often asked questions from our wonderful partners
                </span>
                {/* )} */}
            </header>
            <article className={`pb-[4.444vh]`}>
                <Qaccordion qaList={courseDetails?.faqs.length > 0 ? courseDetails?.faqs : qaList} />
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome