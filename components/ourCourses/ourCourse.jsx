'use client'
import React, { useEffect, useState } from 'react'
import './ourCourses.scss'
import CourseCard from '../commonComponents/courseCard/courseCard'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import '../ui/button.scss'
import Button from '../commonComponents/button/Button'
import Slide from "react-reveal/Slide";
import { Fade } from 'react-reveal'
import Svg from '../commonComponents/Svg/Svg'
import { svgicons } from '../assets/icons/svgassets'
import Link from 'next/link'
import Input from '../commonComponents/input/Input'
import { Skeleton } from "@/components/ui/skeleton"
import CourseCardSkeleton from '../commonComponents/courseCard/CourseCardSkeleton'


function OurCourse({ page }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [viewAllCoursesHover, setviewAllCoursesHover] = useState(false);
    const [isloading, setisLoading] = useState(true)
    const typesOfClasses = [
        {
            title: "Offline Classes",
        },
        {
            title: "Online Live Classes",
        },
        {
            title: "Experiential Learning",
        },
        {
            title: "Self Paced",
        },
    ];
    const [btnState, setBtnState] = useState(
        page === "tution" ? "Experiential Learning" : "Offline Classes"
    );
    const courseCard = [
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage.png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(1).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/Courseimage(2).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(3).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(4).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(5).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(6).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(8).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: './images/courseCardImages.png',
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage.png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/courseimage(1).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
        {
            name: 'Cloud Solution  Architect - Azure',
            image: "./images/Courseimage(2).png",
            deytail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. as per current industry standards.',
        },
    ]

    const courses = [
        {
            icon: "popularCourseIcon",
            iconlite: 'popularCourseIconLite',
            title: "Popular Courses",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "softwareArchIcon",
            iconlite: 'SoftwareArchitectureLote',
            title: "Software Architecture",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "softwaredevicon",
            iconlite: 'SoftwareDevelopmentLite',
            title: "Software Development",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "softwareTestingIcon",
            title: "Software Testing",
            iconlite: 'SoftwareTestingLite',
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "dataScienceIcon",
            iconlite: 'DevOpsLite',
            title: "DevOps",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "aimlIcon",
            iconlite: 'CloudComputingLite',
            title: "Cloud Computing",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "cyberSecurityIcon",
            iconlite: 'DataScienceLite',
            title: "Data Science",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "bankingIcon",
            iconlite: 'AiMllite',
            title: "AI/ML",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "projectManagementIcon",
            iconlite: 'CyberSecurityLite',
            title: "Cyber Security",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "agileScrumIcon",
            iconlite: 'BankingLite',
            title: "Banking",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "supportIcon",
            iconlite: 'ProjectManagemenLite',
            title: "Project Management",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "abroadStudiesICon",
            iconlite: 'AgileScrumLite',
            title: "Agile Scrum",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "supportIcon",
            iconlite: 'ProjectManagemenLite',
            title: "Support",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "abroadStudiesICon",
            iconlite: 'AgileScrumLite',
            title: "Abroad Studies",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "supportIcon",
            iconlite: 'ProjectManagemenLite',
            title: "HR",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "supportIcon",
            iconlite: 'ProjectManagemenLite',
            title: "SAP",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "supportIcon",
            iconlite: 'ProjectManagemenLite',
            title: "Salesforce",
            arrow: "./arrowIconDark.svg",
        },
    ];

    const tutionClasses =
        page === "tution" ? typesOfClasses.slice(2, 4) : typesOfClasses;
    const statisticsData = [
        { number: "25,000+", text: "Students placed" },
        { number: "180+", text: "Hiring Companies" },
        { number: "10,000+", text: "Non IT Students placed" },
        { number: "15,000+", text: "IT Students placed" },
    ];

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 500);
    }, [])

    return (
        <MaxWebWidth>
            {page !== "explore" &&
                <aside className='flex justify-center align-center mb-8 mt-8' >
                    <Slide top cascade>
                        <h1 className='font-bold text-[2rem] header text-black'>Explore Our Courses</h1>
                    </Slide>
                </aside>
            }
            <article className={page === 'explore' ? 'flex justify-between  mb-8 mt-8' : "flex justify-end mb-3"}>
                {page === 'explore' &&
                    <div>
                        <header className='' >
                            <h1 className='font-bold text-[1.5rem] header text-black '>Explore Our Courses</h1>
                        </header>
                    </div>
                }
                <div className='flex'>
                    {page === 'explore' &&
                        <article className='pr-2 pt-[1px]'>
                            <Input
                                inputStyle='searchField p-2 text-sm'
                                placeholder='Search'
                                iconPath='../images/shape.png'
                            />
                        </article>
                    }

                    <div className="bg-white border border-gray-300 flex rounded">
                        {tutionClasses.map((classItem, index) => (
                            <button
                                key={index}
                                className={`flex justify-center items-center px-4 py-2 font-medium text-[0.75rem] text-dark-gray ${classItem.title === btnState ? "bg-gradient text-white rounded p-2" : ""
                                    } `}
                                onClick={() => {
                                    setBtnState(classItem.title);
                                }}
                            >
                                {classItem.title}
                            </button>
                        ))}
                    </div>
                </div>
            </article>
            <aside className='flex'>
                <article className='justify-start' >
                    <div>
                        {courses.map((item, itemIndex) => {
                            return (
                                isloading ?
                                    <div className={`bg-orange hover:font-semibold hover:text-white w-[20.70vw] flex justify-center gradient-bg cursor-pointer py-3 px-2 ${hoveredIndex === itemIndex ? 'hovered' : ''}`}>
                                        <div className="flex items-center space-x-4">
                                            <Skeleton className="h-7 w-7 rounded-full" />
                                            <div className="space-y-1">
                                                <Skeleton className="h-3 w-[12.5rem]" />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div
                                        key={itemIndex} // Don't forget to add a unique key
                                        onMouseEnter={() => setHoveredIndex(itemIndex)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`bg-orange hover:font-semibold hover:text-white w-[20.70vw] flex justify-center gradient-bg cursor-pointer py-3 px-2 ${hoveredIndex === itemIndex ? 'hovered' : ''}`}
                                    >
                                        <div className='flex justify-between items-center'>
                                            <picture className='flex justify-start'>
                                                <Svg
                                                    width={hoveredIndex === itemIndex ? svgicons[item?.iconlite][0] : svgicons[item?.icon][0]}
                                                    height={hoveredIndex === itemIndex ? svgicons[item?.iconlite][1] : svgicons[item?.icon][1]}
                                                    viewBox={hoveredIndex === itemIndex ? svgicons[item?.iconlite][2] : svgicons[item?.icon][2]}
                                                    icon={hoveredIndex === itemIndex ? svgicons[item?.iconlite][3] : svgicons[item?.icon][3]}
                                                    color={hoveredIndex === itemIndex ? svgicons[item?.iconlite][4] : svgicons[item?.icon][4]}
                                                />
                                            </picture>
                                            <aside className={`w-[12.5rem] pl-[1rem] text-[0.875rem] text-dark-gray 2xl:text-base ${hoveredIndex === itemIndex ? 'text-white' : 'text-black'}`}>
                                                <h1>{item.title}</h1>
                                            </aside>
                                            <picture className='flex justify-start'>
                                                <Svg
                                                    width={hoveredIndex === itemIndex ? svgicons.arrowIconLite[0] : svgicons.arrowIcon[0]}
                                                    height={hoveredIndex === itemIndex ? svgicons.arrowIconLite[1] : svgicons.arrowIcon[1]}
                                                    viewBox={hoveredIndex === itemIndex ? svgicons.arrowIconLite[2] : svgicons.arrowIcon[2]}
                                                    icon={hoveredIndex === itemIndex ? svgicons.arrowIconLite[3] : svgicons.arrowIcon[3]}
                                                    color={hoveredIndex === itemIndex ? svgicons.arrowIconLite[4] : svgicons.arrowIcon[4]}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </article>
                <article className='max-h-[64.69vw] 2xl:h-[62vw] 3xl:h-[49.69vw]  2xl:w-full overflow-hidden py-1 pl-1'>
                    <div className='flex flex-wrap justify-end gap-3 w-full h-full overflow-y-scroll courseScroll'>
                        {courseCard.map((element) => {
                            return (<div className='courseCard'>
                                {isloading ? <CourseCardSkeleton /> : <CourseCard cardData={element} />}
                            </div>)
                        })}
                    </div>
                </article>
            </aside >
            {
                page !== "explore" &&
                <Link
                    href='./exploreCourses'
                >
                    <article on className='flex justify-end mt-8 mb-8'>
                        <Button
                            className='border border-orange-500 rounded text-orange-500 p-2 hover:bg-gradient '
                            title='View All Courses'
                            icon={viewAllCoursesHover ? './arrowIcon.svg' : './arrowIconOrange.svg'}
                            iconPosition='right'
                        // onMouseEnter={() => { setviewAllCoursesHover(true) }}
                        // onMouseLeave={() => { setviewAllCoursesHover(false) }}
                        />
                    </article>
                </Link>
            }

        </MaxWebWidth >
    )
}

export default OurCourse