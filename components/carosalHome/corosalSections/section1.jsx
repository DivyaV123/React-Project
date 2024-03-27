'use client'
import CarosalSection from '@/components/commonComponents/carosalSection/carosalSection'
import React from 'react'
import './sections.scss'
import Button from '@/components/commonComponents/button/Button'

function Section1() {
    return (
        <CarosalSection sectionStyle="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 mt-5">
            <aside className='flex items-center'>
                <article className='headerArticle'>
                    <h1 className='font-bold  mainHead pb-4 text-dark-gray font-light opacity-100'>Largest Software</h1>
                    <h1 className='text-xl  text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-2 mt-2'>TRAINING ORGANIZATION</h1>
                    <p className='paragraph font-medium mb-3  pb-4 text-ash'>
                        With centers across the Globe, the institute is a platform
                        where young minds are given the opportunity to build
                        successful careers.
                    </p>
                    <article>
                        <Button
                            className='primaryAnimated'
                            title="Enquire now"
                        />
                    </article>
                </article>
            </aside>
            <aside className='flex items-center justify-end'>
                <figure className='w-[70%]'>
                    <img src='./carouselSection1.png' alt='pic001'></img>
                </figure>
            </aside>
        </CarosalSection>
    )
}

export default Section1