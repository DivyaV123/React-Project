'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'


function RelevantTraining() {
    return (
        <section className='grid grid-cols-2 gap-4 mt-6 mb-8'>
            <aside className='flex items-center'>
                <div>
                    <header>
                        <h1 className='font-extra-bold text-dark-gray text-2xl flex justify-start mb-6'>
                            Industry-Relevant Training
                        </h1>
                        <p className='text-dark-gray text-normal mt-6'>
                            At QSpiders, we are committed to providing industry- <br />
                            relevant training that aligns with the current trends and <br />
                            technologies in the IT sector.
                        </p>
                    </header>
                    <article className='flex justify-center mt-6'>
                        <Button
                            className='primary'
                            title="Enquire now"
                            onClick={() => { }}
                        />
                    </article>
                </div>
            </aside>
            <aside className='flex justify-center align-end'>
                <figure className='w-[85%]'>
                    <img src='./releventTraining.png' alt='facultyImage'></img>
                </figure>
            </aside>
        </section>
    )
}

export default RelevantTraining