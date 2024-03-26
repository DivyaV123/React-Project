import CarosalSection from '@/components/commonComponents/carosalSection/carosalSection'
import React from 'react'
import './sections.scss'
import Button from '@/components/commonComponents/button/Button'

function Section3() {
    return (
        <CarosalSection sectionStyle="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 mt-5">
            <aside className='flex items-center'>
                <article>
                    <header className='headerArticle mb-6'>
                        <h1 className='mainHead text-brown'>Learn form our</h1>
                        <p className='text-xl text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-3 mt-2'>Expert</p>
                        <p className='paragraph font-medium mb-3  pb-4 text-ash'>With centers across the Globe, the institute is a platform <br />
                            where young minds are given the opportunity to build <br />
                            successful careers.</p>
                    </header>
                    <article>
                        <Button
                            className='primaryAnimated'
                            title="Enquire now"
                        />
                    </article>
                </article>
            </aside>
            <aside className='flex items-center justify-end'>
                <figure className='w-[90%]'>
                    <img src='./carousellSection3.png' alt='pic001'></img>
                </figure>
            </aside>
        </CarosalSection>
    )
}

export default Section3