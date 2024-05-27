'use client'
import React, { useEffect, useState } from 'react'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'
import { Button } from '@/components/ui/button'
import { SectionIcon } from '@radix-ui/react-icons'
import './CourseLanding.scss';

function StudentsPlacedCard({ studentsInfo, page }) {
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])

    return (
        <section className={`flex flex-wrap gap-y-[1.25vw]  ${page==='branch'?"justify-between":"px-[1.25vw] py-[2.222vh] gap-x-[2.222vh]"}`}>
            {studentsInfo.map((element) => (
                isloading ? <TrainingCardSkeleton /> : <section className={`flex testinomialShadow ${page==='branch'?"w-[20.469vw]":" w-[14.688vw]"}`}>
                    <article className={page !== 'branch' ? 'bg-white py-[1.667vh] px-[0.859vw] w-full rounded-lg' : 'bg-white pb-[7.639vh] pt-[3.75vh] px-[3.75vw] rounded-lg '} >
                        <figure className='flex justify-center pb-[2.222vh]'>
                            <img src={element.image} />
                        </figure>
                        <header>
                            <h1 className={`flex justify-center  font-semibold text-dark-gray text-[1.563vw] ${page !== 'branch' ?"pb-[3.333vh]" : "pb-[2.222vh] "}`}>
                                {element.name}
                            </h1>
                            <article className='flex justify-center'>
                                <div>
                                    <p className='flex justify-center text-dark-gray pb-[0.556vh] text-[1.094vw]'>{element.batch}</p>
                                    <p className='flex justify-center text-dark-gray text-[1.094vw]'>{element.course}</p>
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