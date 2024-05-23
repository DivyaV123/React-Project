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
                    <article className={page !== 'branch' ? 'bg-white py-[2.222vh] px-[1.25vw] rounded-lg' : 'bg-white px-[5.556vh] py-[3.125vw] rounded-lg w-[20.469vw]'} >
                        <figure className='flex justify-center pb-[3.125vw]'>
                            <img src={element.image} />
                        </figure>
                        <header>
                            <h1 className='flex justify-center pb-[2.778vh] font-semibold text-[1.563vw] text-dark-gray'>
                                {element.name}
                            </h1>
                            <article className='flex justify-center'>
                                <div>
                                    <p className='flex justify-center text-dark-gray pb-1 text-[1.094vw]'>{element.batch}</p>
                                    <p className='flex justify-center text-dark-gray text-[0.938vw]'>{element.course}</p>
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