'use client'
import Button from '@/components/commonComponents/button/Button'
import React from 'react'
import './sections.scss'
import CarosalSection from '@/components/commonComponents/carosalSection/carosalSection'

function Section2() {
    return (
        <CarosalSection sectionStyle="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 mt-5">
            <aside className='flex items-center'>
                <article>
                    <p className='headerArticle mb-6'>
                        <span className='text-xl text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>2.52L </span> <span className='mainHead text-brown'> Students have</span><br />
                        <span className='mainHead text-brown'> Students have </span> <span className='text-xl text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>3100+ </span> <span className='mainHead text-brown'>Companies</span>
                    </p>
                    <article>
                        <Button
                            className='primaryAnimated'
                            title="Enquire now"
                        />
                    </article>
                </article>
            </aside>
            <aside className='flex items-center justify-center'>
                <article>
                    <article className='flex justify-between w-full'>
                        <aside>
                            <figure className='w-[75%]'>
                                <img src='./samsungimage.png' alt='samsungimage'></img>
                            </figure>
                        </aside>
                        <aside>
                            <figure className='w-[75%]'>
                                <img src='./bingimage.png' alt='bingimage'></img>
                            </figure>
                        </aside>
                    </article>
                    <article className='flex justify-center'>
                        <figure className='w-[24%]'>
                            <img src='./huawfiimage.png' alt='huawfiimage'></img>
                        </figure>
                    </article>
                    <article className='flex justify-start'>
                        <figure className='w-[35%]'>
                            <img src='./stripeimage.png' alt='stripeimage'></img>
                        </figure>
                    </article>
                    <article className='flex justify-end'>
                        <figure className='w-[44%]'>
                            <img src='./amazonPay.png' alt='amazonPay'></img>
                        </figure>
                    </article>
                </article>
            </aside>
        </CarosalSection>
    )
}

export default Section2