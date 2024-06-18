import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import { List } from 'lucide-react'
import React, { useContext } from 'react'
import './CourseHighlites.scss'
import CoursePageContainer from './CoursePageContainer'
import { GlobalContext } from '@/components/Context/GlobalContext'

function CourseHighlites({ courseDetails }) {
    const courseContent = [
        {
            question: 'Who this course is for?',
            bulletPoints: [
                ' This package is designed for any undergraduates or job seekers and laterals to enhance their technical knowledge with BE/ BTech, B.Sc, BCA, MCA, M.Tech/ ME, M.Sc and other technical graduations.',
                ' Manual testers, Non-programming aware testers interested in learning Automation',
                'Any Software engineer who are interested in Mobile Technologies',
                'Freshers/Graduates/ Software Testers'
            ]
        },
        {
            question: 'Why take this course?',
            bulletPoints: [
                ' This course is blended with IT industry experience where even a fresher can start working on project in IT industry easily. ',
                ' This package gives desired knowledge on testing which is the entry level criteria for any interview. ',
                'This package gives confidence to a fresher to start working on a testing project from the day of joining.',
            ]
        },
        {
            question: 'What you will learn?',
            bulletPoints: [
                ' In this Course you will understand software testing from basics to advance level.',
                ' You will understand on how to test any application from the scratch ',
                'You will also understand how agile works. ',
                'Software testing course is also designed for automating any web application or project from scratch with in-depth knowledge in Java & Selenium tool. ',
                'You will understand the complete life cycle of software testing with 2 projects on manual, Database and automation. ',
                'Your performance will increase by activities like presentations, Assignments, Mock Interviews & mock tests which will run regularly.',
                'You need NOT have java coding experience to start this course. Even non Programming candidates can follow this course comfortably',
                'All Installation setup including Java knowledge is taken care as part of course',
                '100% JOB ASSISTANCE after completion of course to make your Profile reach to Hundreds of Recruiters in our network.'
            ]
        }
    ]
    const inputText = courseDetails?.data?.courseHighlight;

    const sections = inputText?.split(';'); // Splits sections at semicolons
    const courseContents = sections?.map(section => {
        const [question, ...bulletParts] = section.split(':');
        const bulletPoints = bulletParts.join(':').split('.').filter(Boolean).map(point => point.trim());
        return {
            question: question.trim(),
            bulletPoints: bulletPoints
        };
    });
    return (
        <MaxWebWidth sectionStyling='bg-[#FFFCF9]'>
            <header>
                <h1 className='font-bold text-black text-[1.5rem] py-5'>Highlights about the Course</h1>
            </header>
            {courseContents?.map((element) => (
                <article className=' px-5 pointsList mb-3 rounded-xl'>
                    <header className='py-5 font-bold text-xl text-dark-gray'>
                        {element.question}
                    </header>
                    {element.bulletPoints.map((points) => (
                        <ul className={"list-disc list-inside w-[91%] pb-[3.333vh]"}>
                            <li>
                                <span className='text-ash text-base'>
                                    {points}
                                </span>
                            </li>
                        </ul>
                    ))}

                </article>
            ))}
        </MaxWebWidth>
    )
}

export default CourseHighlites