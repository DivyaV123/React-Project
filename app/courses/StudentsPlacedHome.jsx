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


function StudentsPlacedHome({ page }) {
    let bodyData = { branchType: ["Jspiders", "Qspiders"] }
    const { data: studentsList, error, isLoading } = useFetchCounsellorsQuery({ pageSize: 15, bodyData: bodyData })
    console.log(studentsList, "studentsListstudentsList")
    const studentsInfo = [
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
        {
            image: '../images/user_profile.png',
            name: 'Rahul Kumar',
            batch: 'BSC (64%) - 2018',
            course: 'Computer Science (CS)'
        },
    ]

    return (
        <>
            <CoursePageContainer className={page === 'branch' ? '!w-full !p-0 ' : 'bg-[#F9F9F9] pb-5'}>
                <article className={page === 'branch' ? '' : 'w-[51.56vw]'}>
                    <header>
                        <h1 className={`${page === 'branch' ? "text-[2.5vw] py-[1.563vw]" : "text-[1.875vw] pt-[3.611vh] pb-[3.056vh]"} font-bold`}>
                            {`${page === 'branch' ? "Students placed through this branch" : "Students placed through this course"}`}
                        </h1>
                    </header>
                    <StudentsPlacedCard page={page} studentsInfo={studentsList?.response.candidates.content} />
                    <article className={`flex justify-center  ${page === 'branch' ? 'mt-[5.278vh] pb-[1.111vh]' : 'mt-[1.667vh] pb-[1.667vh]'}`}>
                        <Button
                            className='bg-gradient py-[1.111vh] px-[1.406vw] text-[0.938vw] text-white font-medium rounded-md'
                            title="View More"
                            onClick={() => { }}
                        />
                    </article>
                </article>
            </CoursePageContainer>
            <CourseHighlites />
            <StudentsTestimonialsHome testimonialsData={studentsList?.response.candidates.content} />
        </>
    )
}

export default StudentsPlacedHome