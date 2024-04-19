import React from 'react'
import './courseCard.scss'
import Button from '../button/Button'


function CourseCard(props) {
    return (
        <>
            <section className='cardStyle justify-center p-4 grid justify-items-stretch'>
                <picture className='flex justify-self-center p-1'>
                    <img className='p-1' src='./images/courseCardImages.png' alt='image'></img>
                </picture>
                <div>

                </div>
                <aside className='p-2 '>
                    <h3 className='font-bold'>Test Architect</h3>
                    <p className='flex headerText justify-start mt-2 leading-4 text-[0.75rem]'>
                        Software testing course is more of job oriented training which is designed as per current industry standards.
                    </p>
                    <div className='flex mt-2'>
                        <span className='flex text-sm'><span className='font-bold'>4.5</span><img className='text-xs' src='./icon_rating.png' alt='Star icon'></img></span>
                        <span className='text-sm'>{`(6,256)`}</span>
                    </div>
                    <div className='flex space-x-3 m-2  justify-center mt-6'>
                        <aside>
                            <Button className="primary h-9" title='Enroll now' size='lg'/> 
                        </aside>
                        <aside>
                            <Button className="plainBtn" title='Request call'/>
                        </aside>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default CourseCard