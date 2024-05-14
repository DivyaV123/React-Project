'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'
import { Button } from '@/components/ui/button'
import { SectionIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'

function StudentsPlacedCard({ studentsInfo, page }) {
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])

    return (
        <section className='flex flex-wrap gap-4 justify-between'>
            {studentsInfo.map((element) => (
                isloading ? <TrainingCardSkeleton /> : <section className='flex justify content center '>
                    <article className={page !== 'branch' ? 'bg-white p-4 rounded-lg' : 'bg-white p-10 rounded-lg w-[20.469vw]'} >
                        <figure className='flex justify-center pb-4'>
                            <img src={element.image} />
                        </figure>
                        <header>
                            <h1 className='flex justify-center pb-5 font-semibold text-[1.25rem] text-dark-gray'>
                                {element.name}
                            </h1>
                            <article className='flex justify-center'>
                                <div>
                                    <p className='flex justify-center text-dark-gray pb-1 text-[0.875rem]'>{element.batch}</p>
                                    <p className='flex justify-center text-dark-gray text-sm'>{element.course}</p>
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