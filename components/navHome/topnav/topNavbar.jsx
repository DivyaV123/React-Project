'use client'
import CommonIconsComponent from '@/components/commonComponents/commoniconcomponent/commonIconsComponent'
import React from 'react'
import './topnav.scss'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth';
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '../../assets/icons/svgassets'

function TopNavbar() {
    return (
        <MaxWebWidth sectionStyling={`topnavbar flex`} articalStyling={"flex justify-between text-center items-center"}>
            <aside className='flex space-x-3 '>
                <div className='flex item-between space-x-2'>
                    <Svg
                        width={svgicons.phoneIcon[0]}
                        height={svgicons.phoneIcon[1]}
                        viewBox={svgicons.phoneIcon[2]}
                        icon={svgicons.phoneIcon[3]}
                    />
                    <span>+91 8265-569-845 | +91 7654-821-598</span>
                </div>
                <div className='flex item-between space-x-2'>
                    <Svg
                        width={svgicons.emailIcon[0]}
                        height={svgicons.emailIcon[1]}
                        viewBox={svgicons.emailIcon[2]}
                        icon={svgicons.emailIcon[3]}
                    />
                    <span>info.hire@qspider.com</span>
                </div>
            </aside>
            <aside >
                <CommonIconsComponent lite={false} />
            </aside>
        </MaxWebWidth>
    )
}

export default TopNavbar;