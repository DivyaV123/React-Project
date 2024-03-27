'use client'
import React from 'react'
import Button from '../commonComponents/button/Button'

function ExperiencedFaculty() {
    return (
        <selection className='grid grid-cols-2 gap-4 mt-6'>
            <aside>
                <figure className='w-[85%]'>
                    <img src='./facultyImage.png' alt='facultyImage'></img>
                </figure>
            </aside>
            <aside>
                <h1 className='font-extra-bold text-dark-gray text-2xl flex justify-start mb-6'>
                    Get Experienced Faculty <br /> Guidance
                </h1>
                <p className='text-dark-gray text-normal mt-6'>
                    Our team of experienced and knowledgeable faculty <br />
                    members are industry experts who are passionate about <br />
                    grooming the next generation of IT professionals.
                </p>
                <article className='grid grid-cols-3 gap-2 mt-6'>
                    <aside>
                        <h1 className='text-orange-600 text-base font-extra-bold opacity-100 flex justify-center text-xl'>500+</h1>
                        <p className='text-brown text-normal flex justify-center  text-center'>Experienced <br /> trainers</p>
                    </aside>
                    <aside>
                        <h1 className='text-orange-600 text-base font-extra-bold opacity-100 flex justify-center text-xl'>1:1</h1>
                        <p className='text-brown text-normal flex justify-center  text-center'> Experienced trainers</p>
                    </aside>
                    <aside>
                        <h1 className='text-orange-600 text-base font-extra-bold opacity-100 flex justify-center text-xl'>4,100+</h1>
                        <p className='text-brown text-normal flex justify-center  text-center'>Average Support <br /> Rating</p>
                    </aside>
                </article>
                <article className='flex justify-center mt-6'>
                    <Button
                        className='primaryAnimated'
                        title="View more"
                        onClick={() => { }}
                    />
                </article>
            </aside>
        </selection>
    )
}

export default ExperiencedFaculty