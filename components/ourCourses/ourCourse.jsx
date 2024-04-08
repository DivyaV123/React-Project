'use client'
import React, { useState } from 'react'
import './ourCourses.scss'
import CourseCard from '../commonComponents/courseCard/courseCard'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import '../ui/button.scss'
import Button from '../commonComponents/button/Button'
import Slide from "react-reveal/Slide";
import { Fade } from 'react-reveal'


function OurCourse() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [viewAllCoursesHover, setviewAllCoursesHover] = useState(false);
    let btnNames = ['Offline Classes', 'Online Live Classes', 'Experiential Learning', 'Self Paced']
    const courses = [
        {
            icon: "/softwareArchIcon.svg",
            iconlite: '/SoftwareArchitectureLote.svg',
            title: "Software Architecture",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/softwaredevicon.svg",
            iconlite: '/SoftwareDevelopmentLite.svg',
            title: "Software Development",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/softwareTestingIcon.svg",
            title: "Software Testing",
            iconlite: '/SoftwareTestingLite.svg',
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/cloudComputingIcon.svg",
            iconlite: '/DevopsLite.svg',
            title: "Devops",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/dataScienceIcon.svg",
            iconlite: '/DevOpsLite.svg',
            title: "DevOps",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/aimlIcon.svg",
            iconlite: '/CloudComputingLite.svg',
            title: "Cloud Computing",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/cyberSecurityIcon.svg",
            iconlite: '/DataScienceLite.svg',
            title: "Data Science",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/bankingIcon.svg",
            iconlite: '/AiMllite.svg',
            title: "AI/ML",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/projectManagementIcon.svg",
            iconlite: '/CyberSecurityLite.svg',
            title: "Cyber Security",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/agileScrumIcon.svg",
            iconlite: '/BankingLite.svg',
            title: "Banking",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/supportIcon.svg",
            iconlite: '/ProjectManagemenLite.svg',
            title: "Project Management",
            arrow: "./arrowIconDark.svg",
        },
        {
            icon: "/abroadStudiesICon.svg",
            iconlite: '/AgileScrumLite.svg',
            title: "Agile Scrum",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "/supportIcon.svg",
            iconlite: '/ProjectManagemenLite.svg',
            title: "Support",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "/abroadStudiesICon.svg",
            iconlite: '/AgileScrumLite.svg',
            title: "Abroad Studies",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "/supportIcon.svg",
            iconlite: '/ProjectManagemenLite.svg',
            title: "HR",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "/supportIcon.svg",
            iconlite: '/ProjectManagemenLite.svg',
            title: "SAP",
            arrow: "./arrowIconDark.svg",
        }, {
            icon: "/supportIcon.svg",
            iconlite: '/ProjectManagemenLite.svg',
            title: "Salesforce",
            arrow: "./arrowIconDark.svg",
        },
    ];


    const sideBarItem = ["Popular Courses", 'Software Architecture', 'Software Development', 'Software Testing', 'DevOps', 'Cyber Security', 'Data Science', 'AI / ML', 'Cloud Computing', 'Banking', 'Project Management', 'Agile Scurm', 'Support', 'Aboard Studies', 'HR', 'SAP', 'Salesforce']
    return (
        <MaxWebWidth>
            <aside className='flex justify-center align-center mb-8 mt-8' >
                <Slide top cascade>
                    <h1 className='font-bold text-2xl header'>Explore our Courses</h1>
                </Slide>
            </aside>

            <article className='flex space-x-3 justify-end m-2 mb-5'>
                {btnNames.map((element, index) => {
                    console.log(element, "element")
                    return (
                        <>
                            <Button
                                className={index === 0 ? 'primary' : 'primaryPlain'}
                                title={element}
                            />
                        </>
                    )
                })}
            </article>
            <aside className='md:flex gap-3 sm:block'>
                <article className='justify-start' >
                    <div>
                        {courses.map((item, itemIndex) => {
                            return (<div onMouseEnter={() => setHoveredIndex(itemIndex)}
                                className='h-10 bg-orange p-2 hover:text-white hover:rounded gradient-bg cursor-pointer'>
                                <div className='flex justify-between'>
                                    <picture className='flex justify-start hover:text-white'>
                                        <img src={(hoveredIndex !== null && hoveredIndex === itemIndex) ? item.iconlite : item.icon} alt='logo' />
                                    </picture>
                                    <aside className='w-60 pl-2'>
                                        <h1>
                                            {item.title}
                                        </h1>
                                    </aside>
                                    <picture className='flex justify-start '>
                                        <img className='w-auto' src={(hoveredIndex !== null && hoveredIndex === itemIndex) ? './arrowIcon.svg' : './arrowIconDark.svg'} alt='icon' />
                                    </picture>
                                </div>
                            </div>)
                        })}
                    </div>
                </article>
                <article >
                    <div className='grid xs:grid-cols-2 md:grid-cols-3 gap-4'>
                        {Array.from({ length: 6 }).map((index) => {
                            return (<div className=''>
                                <CourseCard />
                            </div>)
                        })}
                    </div>
                </article>
            </aside>
            <Fade bottom duration={1000} delay={0} >
                <article on className='flex justify-end mt-8 mb-8'>
                    <Button
                        className='primaryAnimated '
                        title='View All Courses'
                        icon={viewAllCoursesHover ? './arrowIcon.svg' : './arrowIconOrange.svg'}
                        iconPosition='right'
                        onMouseEnter={() => { setviewAllCoursesHover(true) }}
                        onMouseLeave={() => { setviewAllCoursesHover(false) }}
                    />
                </article>
            </Fade>
        </MaxWebWidth >
    )
}

export default OurCourse