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
import { usePathname } from 'next/navigation'

function StudentsPlacedHome({ page, courseDetails }) {
    const pathName=usePathname()
    let bodyData = { branchType: ["Jspiders", "Qspiders"] }
    const { data: studentsList, error, isLoading } = useFetchCounsellorsQuery({ pageSize: 16, bodyData: bodyData })
    const pathname = usePathname()
    return (
        <>
            <section className='w-full sm:bg-[#F6F6F6] '>
                <article className={page === 'branch' ? 'sm:w-[87.5vw] sm:m-auto' : 'w-[51.56vw]'}>
                    <header>
                        <h1 className={`${page === 'branch' ? "text-[2.5vw] py-[1.563vw] mobile:pb-[1.717vh] mobile:text-[4.651vw]" : "text-[1.875vw] pt-[3.611vh] pb-[3.056vh]"} font-bold`}>
                            {`${pathName.includes('courses') ? "Students placed through this course" : "Students placed through this branch"}`}
                        </h1>
                    </header>
                    <StudentsPlacedCard page={page} studentsInfo={studentsList?.response.candidates.content} />
                    <Link href={PLACEMENT_PATH} >
                        <article className={`flex justify-center  ${page === 'branch' ? 'sm:mt-[5.278vh] pb-[4.444vh] mobile:pb-[1.717vh]' : 'mt-[1.667vh] pb-[1.667vh]'}`}>
                            <Button
                                className='bg-gradient h-[2.656vw] font-medium w-[9.375vw] text-[0.75rem] mobile:w-[27.907vw] mobile:h-[3.648vh] mobile:text-[2.791vw] text-white rounded-md'
                                title="View More"
                                onClick={() => { }}
                            />
                        </article>
                    </Link>
                </article>
            </section>
            {pathname.includes("courses") ?
                <>
                    <CourseHighlites courseDetails={courseDetails} />
                    <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
                        <StudentsTestimonialsHome page='branch' testimonialsData={studentsList?.response?.candidates?.content} />
                    </MaxWebWidth>

                </>
                :
                <>
                    <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
                        <StudentsTestimonialsHome page='branch' testimonialsData={studentsList?.response?.candidates?.content} />
                    </MaxWebWidth>

                </>
            }

        </>
    )
}

export default StudentsPlacedHome