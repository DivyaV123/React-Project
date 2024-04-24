'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import { Button } from '@/components/ui/button'
import { SectionIcon } from '@radix-ui/react-icons'
import React from 'react'

function StudentsPlacedCard({ studentsInfo }) {
    return (
        <section className='flex flex-wrap gap-3 justify-center'>
            {studentsInfo.map((element) => (
                <section className='flex justify content center'>
                    <article className='bg-white p-4 rounded-lg' >
                        <figure className='flex justify-center pb-4'>
                            <img src={element.image} />
                        </figure>
                        <header>
                            <h1 className='flex justify-center pb-5 font-bold text-[0.875~rem]'>
                                {element.name}
                            </h1>
                            <article className='flex justify-center'>
                                <div>
                                    <p className='flex justify-center text-[#454545] pb-1 text-sm'>{element.batch}</p>
                                    <p className='flex justify-center text-[#454545] text-sm'>{element.course}</p>
                                </div>
                            </article>
                        </header>
                    </article>
                </section>
            ))}
        </section>
    )
}

export default StudentsPlacedCard