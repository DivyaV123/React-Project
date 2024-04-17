'use client'
import React, { useState } from 'react'
import './ourCourses.scss'
import CourseCard from '../commonComponents/courseCard/courseCard'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import '../ui/button.scss'
import Button from '../commonComponents/button/Button'
import Slide from "react-reveal/Slide";
import { Fade } from 'react-reveal'
import Svg from '../commonComponents/Svg/Svg'
import { svgicons } from '../assets/icons/svgassets'


function OurCourse() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [viewAllCoursesHover, setviewAllCoursesHover] = useState(false);
    let btnNames = ['Offline Classes', 'Online Live Classes', 'Experiential Learning', 'Self Paced']

    const courses = [
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
            icon: "cloudComputingIcon",
            iconlite: 'DevOpsLite',
            title: "Devops",
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
                        {console.log(hoveredIndex !== null, "bool")}
                        {courses.map((item, itemIndex) => {
                            { console.log(svgicons[item?.iconlite], "svgicons[item?.icon]s", item?.iconlite) }
                            return (<div onMouseEnter={() => setHoveredIndex(itemIndex)} onMouseLeave={() => setHoveredIndex(null)}
                                className='h-10 bg-orange p-2 hover:text-white hover:rounded gradient-bg cursor-pointer'>
                                <div className='flex justify-between'>
                                    <picture className='flex justify-start hover:text-white'>
                                        {/* <img src={(hoveredIndex !== null && hoveredIndex === itemIndex) ? item.iconlite : item.icon} alt='logo' /> */}
                                        {(hoveredIndex === itemIndex) ?
                                            <Svg
                                                width={svgicons[item?.iconlite][0]}
                                                height={svgicons[item?.iconlite][1]}
                                                viewBox={svgicons[item?.iconlite][2]}
                                                icon={svgicons[item?.iconlite][3]}
                                                color={svgicons[item?.iconlite][4]}
                                            /> :
                                            <Svg
                                                width={svgicons[item?.icon][0]}
                                                height={svgicons[item?.icon][1]}
                                                viewBox={svgicons[item?.icon][2]}
                                                icon={svgicons[item?.icon][3]}
                                            />
                                        }
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