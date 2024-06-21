'use client'
import Button from '@/components/commonComponents/button/Button'
import CourseCard from '@/components/commonComponents/courseCard/courseCard'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
import './branchesCourseCard.scss'
import CourseCardSkeleton from '@/components/commonComponents/courseCard/CourseCardSkeleton'

function BranchesCourse() {
    const [isloading, setisLoading] = useState(true)
    const courseCard = [
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage.png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(1).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/Courseimage(2).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(3).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(4).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(5).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(6).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(8).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: '../images/courseCardImages.png',
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage.png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/courseimage(1).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "../images/Courseimage(2).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            <MaxWebWidth>
                <header>
                    <h1 className='font-bold text-[2.5vw] mobile:text-[4.651vw] pt-4 pb-4'>
                        Courses
                    </h1>
                </header>
            </MaxWebWidth>
            <MaxWebWidth articalStyling='flex sm:flex-wrap sm:justify-around gap-3 mobile:overflow-x-scroll mobile:offlineScrollbar'>
                {courseCard.map((element) => {
                    return (<div className='courseCard'>
                        <article className='w-full '>
                            {isloading ? <CourseCardSkeleton /> : <CourseCard cardData={element} />}
                            <div className='viewmore'></div>
                        </article>
                    </div>)
                })}
            </MaxWebWidth>
            <MaxWebWidth articalStyling='flex justify-end pb-5'>
                <article className='flex justify-center mt-2'>
                    <Button
                        className='bg-gradient w-[9.375vw] h-[5.694vh] text-[0.938vw] text-white rounded-md'
                        title="View More"
                        onClick={() => { }}
                    />
                </article>
            </MaxWebWidth>
        </>
    )
}

export default BranchesCourse