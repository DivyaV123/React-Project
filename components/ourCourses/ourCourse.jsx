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

    return (
        <MaxWebWidth>
            <aside className='flex justify-center align-center mb-8 mt-8' >
                <Slide top cascade>
                    <h1 className='font-bold text-4xl header text-black'>Explore our Courses</h1>
                </Slide>
            </aside>
            {/* <article className='flex space-x-3 justify-end m-2 mb-5'>
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
            </article> */}
            <aside className='flex'>
                <article className='justify-start' >
                    <div>
                        {courses.map((item, itemIndex) => {
                            return (<div onMouseEnter={() => setHoveredIndex(itemIndex)} onMouseLeave={() => setHoveredIndex(null)}
                                className='bg-orange hover:font-semibold hover:text-white w=[45.29vw] flex justify-center  gradient-bg cursor-pointer py-4 px-2'
                            >
                                <div className='flex justify-between align-center'>
                                    <picture className='flex justify-start hover:text-white'>
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
                                                color={svgicons[item?.iconlite][4]}
                                            />
                                        }
                                    </picture>
                                    <aside className='w-60 pl-[1rem] 2xl:text-base'>
                                        <h1>
                                            {item.title}
                                        </h1>
                                    </aside>
                                    <picture className='flex justify-start '>
                                        {(hoveredIndex === itemIndex) ?
                                            <Svg
                                                width={svgicons.arrowIconLite[0]}
                                                height={svgicons.arrowIconLite[1]}
                                                viewBox={svgicons.arrowIconLite[2]}
                                                icon={svgicons.arrowIconLite[3]}
                                                color={svgicons.arrowIconLite[4]}
                                            />
                                            :
                                            <Svg
                                                width={svgicons.arrowIcon[0]}
                                                height={svgicons.arrowIcon[1]}
                                                viewBox={svgicons.arrowIcon[2]}
                                                icon={svgicons.arrowIcon[3]}
                                                color={svgicons.arrowIcon[4]}
                                            />
                                        }
                                    </picture>
                                </div>
                            </div>)
                        })}
                    </div>
                </article>
                <article className='max-h-[73.69vw] 2xl:h-[62vw] 3xl:h-[49.69vw]  2xl:w-full overflow-hidden py-1 pl-1'>
                    <div className='flex flex-wrap justify-end gap-3 w-full h-full overflow-y-scroll courseScroll'>
                        {courseCard.map((element) => {
                            return (<div className='courseCard'>
                                <CourseCard cardData={element} />
                            </div>)
                        })}
                    </div>
                </article>
            </aside>
            {/* <Fade bottom duration={1000} delay={0} >
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
            </Fade> */}
        </MaxWebWidth >
    )
}

export default OurCourse