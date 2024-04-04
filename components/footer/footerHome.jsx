'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import CommonIconsComponent from '../commonComponents/commoniconcomponent/commonIconsComponent'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'

function FooterHome() {
    const footerContent = {
        Company: ['About Us', 'News', 'Partners', 'Statistics'],
        Resources: ['Case Study', 'E - Books', 'Blogs', 'Events'],
        ServiceAndSupport: ['Training', 'Learning', 'Hiring', 'Hackathons', 'Events', 'Customer Support'],
        ContactUs: ['Demos', 'Branches', 'Units']
    }
    return (
        <MaxWebWidth sectionStyling='bg-footer-blue min-h-80 flex justify-center'>
            <footer>
                <Fade left duration={1000} delay={0}>
                    <article className='flex justify-around pt-8 '>
                        {Object.entries(footerContent).map(([header, subHeaders], index) => (
                            <div key={index}>
                                <h3 className='text-white  font-bold pb-2 text-base'>{header}</h3>
                                <ul>
                                    {subHeaders.map((subHeader, subIndex) => (
                                        <li className='text-white pr-2 pb-2 pt-2 text-sm font-normal cursor-pointer' key={subIndex}>{subHeader}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </article>
                </Fade>
                <Fade bottom duration={1000} delay={0}>
                    <article className='relative b-0 p-8'>
                        <span className='flex justify-center'>
                            <CommonIconsComponent lite={true} />
                        </span>
                        <span className='text-white text-xs flex justify-center'>© 2023 Qspiders All Rights Reserved</span>
                    </article>
                </Fade>
            </footer>
        </MaxWebWidth >
    )
}

export default FooterHome