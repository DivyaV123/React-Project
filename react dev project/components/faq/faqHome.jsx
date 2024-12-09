'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import Qaccordion from './qaAccordion'


function FaqHome({ page, questions, courseDetails, faqData, mainfaqData }) {

    
    return (
        <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
            <header className={`sm:mt-[4.444vh] sm:py-[2.778vh] mobile:pt-[2.575vh] mobile:pb-[3.433vh] `}>
                <h1 className={`font-bold text-[2rem] mobile:text-[5.581vw]  flex  `}>
                    {'Frequently Asked Questions'}
                </h1>
                {/* {page !== 'course' && page !== 'branch' && ( */}
                <span className='text-[0.875rem] mobile:text-[3.256vw] text-[#454545] font-normal flex '>
                    Often asked questions from our wonderful partners
                </span>
                {/* )} */}
            </header>
            <article className={`pb-[4.444vh]`}>
                <Qaccordion qaList={courseDetails?.faqs?.length > 0 ? courseDetails?.faqs : faqData ? faqData : mainfaqData} />
            </article>
        </MaxWebWidth>
    )
}

export default FaqHome