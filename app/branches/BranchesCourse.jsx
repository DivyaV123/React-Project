'use client'
import Button from '@/components/commonComponents/button/Button'
import CourseCard from '@/components/commonComponents/courseCard/courseCard'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
import './branchesCourseCard.scss'
import CourseCardSkeleton from '@/components/commonComponents/courseCard/CourseCardSkeleton'

function BranchesCourse({ branchCourseData }) {
    const [visibleCards, setVisibleCards] = useState(4);
    const [showAll, setShowAll] = useState(false);
    const [isloading, setisLoading] = useState(false);
    const showViewMoreButton = branchCourseData.length % 4 !== 0 || visibleCards < branchCourseData.length;

    const handleViewToggle = () => {
        if (showAll) {
            setVisibleCards(4);
        } else {
            setVisibleCards(branchCourseData.length);
        }
        setShowAll(!showAll);
    };

    const cardsToDisplay = branchCourseData.slice(0, visibleCards);

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 2000);
    }, [])

    return (
        <div className='mb-8'>
            <MaxWebWidth articalStyling='flex sm:flex-wrap sm:justify-around gap-3 mobile:overflow-x-scroll mobile:offlineScrollbar mobile:mb-[3.97vh] mobile:mt-[1.717vh]'>
                {cardsToDisplay.length > 0 ? cardsToDisplay.map((element) => {
                    return (
                        <div className='branches courseCard' key={element.id}>
                            <article className='w-full'>
                                {isloading ? <CourseCardSkeleton /> : <CourseCard cardData={element} />}
                                <div className='viewmore'></div>
                            </article>
                        </div>
                    );
                }) : courseCard.map((element) => {
                    return (
                        <div className='branches courseCard' key={element.id}>
                            <article className='w-full'>
                                {isloading ? <CourseCardSkeleton /> : <CourseCard cardData={element} />}
                                <div className='viewmore'></div>
                            </article>
                        </div>
                    );
                })}
            </MaxWebWidth>
            {showViewMoreButton && (
                <MaxWebWidth articalStyling='flex justify-end pb-5 mobile:hidden'>
                    <article className='flex justify-center mt-2'>
                        <Button
                            className='bg-gradient w-[9.375vw] h-[5.694vh] text-[0.938vw] text-white rounded-md'
                            title={showAll ? "View Less" : "View More"}
                            onClick={handleViewToggle}
                        />
                    </article>
                </MaxWebWidth>
            )}
        </div>
    )
}

export default BranchesCourse