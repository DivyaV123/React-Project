import React from 'react'
import { Button } from '../ui/button'
import './ourCourses.scss'
import CourseCard from '../commonComponents/courseCard/courseCard'

function OurCourse() {
    const sideBarItem = ["Popular Courses", 'Software Architecture', 'Software Development', 'Software Testing', 'DevOps', 'Cyber Security', 'Data Science', 'AI / ML', 'Cloud Computing', 'Banking', 'Project Management', 'Agile Scurm', 'Support', 'Aboard Studies', 'HR', 'SAP', 'Salesforce']
    return (
        <section className='OurCourse'>
            <aside className='mb-4 w-19/12'>
                <h1 className='flex justify-ceneter text-bold text-xl header'>Explore our Courses</h1>
            </aside>
            <article className='flex space-x-3 justify-end m-2 w-11/12'>
                <aside>
                    <Button className='topbtns '>
                        Offline Classes
                    </Button>
                </aside>
                <aside>
                    <Button className='topbtns'>
                        Online Live Classes
                    </Button>
                </aside>
                <aside>
                    <Button className='topbtns'>
                        Experiential Learning
                    </Button>
                </aside>
                <aside>
                    <Button className='topbtns'>
                        Self Paced
                    </Button>
                </aside>
            </article>
            <aside className='flex'>
                <article className='justify-start flex basis-3/20' >
                    <div>
                        {sideBarItem.map((item) => {
                            return (<div className=''>
                                <span>{item}</span>
                            </div>)
                        })}
                    </div>
                </article>
                <article className='justify-end flex basis-17/20'>
                    <div className=''>
                        {Array.from({ length: 9 }).map((index) => {
                            return (<div>
                                <CourseCard />
                            </div>)
                        })}
                    </div>
                </article>
            </aside>
        </section>
    )
}

export default OurCourse