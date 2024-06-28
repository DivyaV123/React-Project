'use client'
import React, { useEffect, useState } from 'react'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'
import './CourseLanding.scss';

function StudentsPlacedCard({ studentsInfo, page }) {
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])

    return (
        <section className={`flex flex-wrap sm:gap-y-[1.25vw] mobile:gap-4 mobile:py-[1.717vh] mobile:mx-[4.651vw] ${page === 'branch' ? "justify-between" : "px-[1.25vw] py-[2.222vh] gap-x-[2.222vh]"}`}>
            {studentsInfo?.map((element) => {
                let detail = `${element.degree.degreeName}(${element.degree.degreeAggregate}%)- ${element.degree.degreeYop}`
                return (
                    isloading ? <TrainingCardSkeleton /> : <section className="flex testinomialShadow w-[20.469vw] mobile:w-[42.558vw]" >
                        <article className="bg-white pb-[7.639vh] mobile:pb-[4.292vh] mobile:pt-[0.966vh] mobile:px-[4.419vw] pt-[3.75vh] px-[3.75vw] rounded-lg w-full" >
                            <figure className='flex justify-center pb-[2.222vh] mobile:pb-[1.717vh]'>
                                <img className='w-20 h-20 mobile:w-[18.605vw] mobile:h-[8.584vh]  rounded-full' src={element.photoLink.length ? element.photoLink : '../../images/user.jpg'} alt='no image' />
                            </figure>
                            <header>
                                <h1 title={element.name} className={`flex justify-center  font-medium text-dark-gray text-[1vw] mobile:text-[3.721vw]  text-center ${page !== 'branch' ? "pb-[3.333vh] " : "pb-[2.222vh] mobile:pb-[2.361vh]"}`}>
                                    {element.name.length > 11 ? element.name.substring(0, 11) + '...' : element.name}
                                </h1>
                                <article className='flex justify-center'>
                                    <div>
                                        <p className='flex justify-center text-dark-gray pb-[0.556vh] text-[1.094vw] mobile:text-[2.791vw] mobile:pb-[0.751vh]'>{detail}</p>
                                        <p title={element.degree.degreeStream} className='flex justify-center text-dark-gray text-[1.094vw] mobile:text-[2.791vw]'>{element.degree.degreeStream.length > 18 ? element.degree.degreeStream.substring(0, 18) + '...' : element.degree.degreeStream}</p>
                                    </div>
                                </article>
                            </header>
                        </article>
                    </section>

                )
            })}
        </section>
    )
}

export default StudentsPlacedCard