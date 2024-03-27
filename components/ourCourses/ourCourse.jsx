'use client'
import React from 'react'
import './ourCourses.scss'
import CourseCard from '../commonComponents/courseCard/courseCard'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import '../ui/button.scss'
import Button from '../commonComponents/button/Button'

function OurCourse() {
    let btnNames = ['Offline Classes', 'Online Live Classes', 'Experiential Learning', 'Self Paced']
    const sideBarItem = ["Popular Courses", 'Software Architecture', 'Software Development', 'Software Testing', 'DevOps', 'Cyber Security', 'Data Science', 'AI / ML', 'Cloud Computing', 'Banking', 'Project Management', 'Agile Scurm', 'Support', 'Aboard Studies', 'HR', 'SAP', 'Salesforce']
    return (
        <MaxWebWidth>
            <aside className='flex justify-center align-center mb-8 mt-8' >
                <h1 className='font-bold text-2xl header'>Explore our Courses</h1>
            </aside>
            <article className='flex space-x-3 justify-end m-2 mb-5'>
                {btnNames.map((element, index) => {
                    console.log(element, "element")
                    return <Button
                        className='primaryAnimated'
                        title={element}
                    />
                })}
            </article>
            <aside className='grid grid-rows-1 grid-flow-col gap-4'>
                <article className='justify-start flex basis-3/20' >
                    <div>
                        {sideBarItem.map((item) => {
                            return (<div className=''>
                                <span>{item}</span>
                            </div>)
                        })}
                    </div>
                </article>
                <article className='flex'>
                    <div className='grid grid-rows-2 grid-flow-col gap-4'>
                        {Array.from({ length: 6 }).map((index) => {
                            return (<div className=''>
                                <CourseCard />
                            </div>)
                        })}
                    </div>
                </article>
            </aside>
        </MaxWebWidth>
    )
}

export default OurCourse