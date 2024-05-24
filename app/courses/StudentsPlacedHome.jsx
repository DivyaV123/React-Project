'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
import StudentsPlacedCard from './StudentsPlacedCard'
import Button from '@/components/commonComponents/button/Button'
import CoursePageContainer from './CoursePageContainer'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'


function StudentsPlacedHome({ page }) {
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
        <CoursePageContainer className={page === 'branch' ? '!w-full !p-0 ' : 'bg-[#F9F9F9] pb-5'}>
            <article className={page === 'branch' ? '' : 'w-[51.56vw]'}>
                <header>
                    <h1 className='font-bold text-[2.5vw] py-[1.563vw]'>
                        Students placed through this course
                    </h1>
                </header>
                <StudentsPlacedCard page={page} studentsInfo={studentsInfo} />
                <article className='flex justify-center mt-5'>
                    <Button
                        className='bg-gradient py-[1.111vh] px-[1.406vw] text-[0.75rem] text-white font-medium rounded-md'
                        title="View More"
                        onClick={() => { }}
                    />
                </article>
            </article>
        </CoursePageContainer>
    )
}

export default StudentsPlacedHome