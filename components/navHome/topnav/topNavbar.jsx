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
                        width={svgicons.phone1Icon[0]}
                        height={svgicons.phone1Icon[1]}
                        viewBox={svgicons.phone1Icon[2]}
                        icon={svgicons.phone1Icon[3]}
                        color={svgicons.phone1Icon[4]}
                    />
                    <span>+91 8265-569-845 | +91 7654-821-598</span>
                </div>
                <div className='flex item-between space-x-2'>
                    <Svg
                        width={svgicons.gmail1Icon[0]}
                        height={svgicons.gmail1Icon[1]}
                        viewBox={svgicons.gmail1Icon[2]}
                        icon={svgicons.gmail1Icon[3]}
                        color={svgicons.gmail1Icon[4]}
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