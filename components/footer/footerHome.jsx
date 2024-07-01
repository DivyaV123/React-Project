'use client'
import React, { useContext } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import CommonIconsComponent from '../commonComponents/commoniconcomponent/commonIconsComponent'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'
import { GlobalContext } from '../Context/GlobalContext';

function FooterHome() {
    const { domainVariable } = useContext(GlobalContext)
    const footerContent = {
        Company: ['About Us', 'News', 'Partners', 'Statistics'],
        Resources: ['Case Study', 'E - Books', 'Blogs', 'Events'],
        'Service & Support': ['Training', 'Learning', 'Hiring', 'Hackathons', 'Events'],
        ContactUs: ['Demos', 'Branches', 'Units']
    }
    return (
        <MaxWebWidth sectionStyling='bg-footer-blue min-h-80 flex justify-center'>
            <footer>
                <Fade left duration={1000} delay={0}>
                    <article className='flex justify-around pt-8 mobile:grid mobile:grid-cols-2 mobile:grid-rows-1 mobile:gap-x-28'>
                        {Object.entries(footerContent).map(([header, subHeaders], index) => (
                            <div key={index} className="mobile:col-span-1 mobile:row-span-1">
                                <h3 className='text-white mobile:w-[100vw] font-bold pb-2 text-base mobile:text-[4.999vw]'> {/* Add mobile class here */}
                                    {header}
                                </h3>
                                <ul className=' mobile:pb-[3.541vh]'>
                                    {subHeaders.map((subHeader, subIndex) => (
                                        <li className='text-white pr-2 pb-2 pt-2 text-sm font-normal cursor-pointer mobile:text-[3.956vw]' key={subIndex}>{subHeader}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </article>


                </Fade>
                <Fade bottom duration={1000} delay={0}>
                    <article className='relative b-0 p-8'>
                        <span className='flex justify-center mobile:relative mobile:bottom-[3.863vh]'>
                            <CommonIconsComponent lite={true} />
                        </span>
                        <span className='text-white text-xs flex justify-center mobile:relative mobile:bottom-[2.79vh] mobile:text-[3.721vw] mobile:w-[73vw]'>© 2023 {domainVariable} All Rights Reserved</span>
                    </article>
                </Fade>
            </footer>
        </MaxWebWidth >
    )
}

export default FooterHome