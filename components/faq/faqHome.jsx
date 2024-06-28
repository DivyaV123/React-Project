'use client'
import { WidthIcon } from '@radix-ui/react-icons'
import React, { useCallback, useContext } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'

function FaqHome({ page, questions, courseDetails, faqData, mainfaqData }) {
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
        <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
            <header className={`sm:mt-[4.444vh] sm:px-[1.563vw] sm:py-[2.778vh] mobile:pt-[2.575vh] mobile:pb-[3.433vh] `}>
                <h1 className={`font-bold text-[2rem] mobile:text-[5.581vw] justify-center flex  align-center`}>
                    {'FAQ’s'}
                </h1>
                {/* {page !== 'course' && page !== 'branch' && ( */}
                <span className='text-[0.875rem] mobile:text-[3.256vw] text-dark-gray font-normal flex justify-center items-center'>
                    Often asked questions from our wonderful partners
                </span>
                {/* )} */}
            </header>
            <article className={`pb-[4.444vh]`}>
                <Qaccordion qaList={courseDetails?.faqs.length > 0 ? courseDetails?.faqs : faqData ? faqData : mainfaqData} />
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome