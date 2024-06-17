'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
import StudentsPlacedCard from './StudentsPlacedCard'
import Button from '@/components/commonComponents/button/Button'
import CoursePageContainer from './CoursePageContainer'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'
import { useFetchCounsellorsQuery } from '@/redux/queries/counsellorsApi'
import CourseHighlites from './CourseHighlites'
import StudentsTestimonialsHome from './StudentsTestimonialsHome'
import Link from 'next/link'
import { PLACEMENT_PATH } from '@/lib/RouteConstants'


function StudentsPlacedHome({ page, courseDetails }) {
    let bodyData = { branchType: ["Jspiders", "Qspiders"] }
    const { data: studentsList, error, isLoading } = useFetchCounsellorsQuery({ pageSize: 16, bodyData: bodyData })
   

    return (
        <>
            <section className='w-full bg-[#F6F6F6]'>
                <article className={page === 'branch' ? 'w-[87.5vw] m-auto' : 'w-[51.56vw]'}>
                    <header>
                        <h1 className={`${page === 'branch' ? "text-[2.5vw] py-[1.563vw]" : "text-[1.875vw] pt-[3.611vh] pb-[3.056vh]"} font-bold`}>
                            {`${page === 'branch' ? "Students placed through this branch" : "Students placed through this course"}`}
                        </h1>
                    </header>
                    <StudentsPlacedCard page={page} studentsInfo={studentsList?.response.candidates.content} />
                    <Link href={PLACEMENT_PATH} >
                        <article className={`flex justify-center  ${page === 'branch' ? 'mt-[5.278vh] pb-[1.111vh]' : 'mt-[1.667vh] pb-[1.667vh]'}`}>
                            <Button
                                className='bg-gradient py-[1.111vh] px-[1.406vw] text-[0.938vw] text-white font-medium rounded-md'
                                title="View More"
                                onClick={() => { }}
                            />
                        </article>
                    </Link>
                </article>
            </section>
            {page === "course" &&
                <>
                    <CourseHighlites courseDetails={courseDetails} />
                    <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
                        <StudentsTestimonialsHome page='branch' testimonialsData={studentsList?.response.candidates.content} />
                    </MaxWebWidth>

                </>
            }

        </>
    )
}

export default StudentsPlacedHome