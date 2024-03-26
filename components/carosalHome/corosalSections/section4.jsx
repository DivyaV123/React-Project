import Button from '@/components/commonComponents/button/Button'
import CarosalSection from '@/components/commonComponents/carosalSection/carosalSection'
import React from 'react'

function Section4() {
    return (
        <CarosalSection sectionStyle="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 mt-5">
            <aside className='flex items-center'>
                <article>
                    <header className='headerArticle mb-6'>
                        <p>
                            <span className='mainHead text-brown'>Our </span><span className='text-xl text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-3 mt-2'> Students Review </span><br />
                            <span className='mainHead text-brown'>Who got placed in </span> <br />
                            <span className='text-xl text-primary-600 subHead pb-4 text-header-orange font-extra-bold mb-3 mt-2'>Top Companies</span>
                        </p>
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
                    <img src='./carouselSection4.png' alt='pic001'></img>
                </figure>
            </aside>
        </CarosalSection>
    )
}

export default Section4