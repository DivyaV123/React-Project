'use client'
import CommonIconsComponent from '@/components/commonComponents/commoniconcomponent/commonIconsComponent'
import React from 'react'
import './topnav.scss'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth';
import Svg from '@/components/commonComponents/Svg/Svg';
import { svgicons } from '../../assets/icons/svgassets'

function TopNavbar() {
    return (
        <MaxWebWidth sectionStyling={`topnavbar py-[0.556vh] mobile:text-[2.791vw] text-[0.938vw] mobile:text-[2.093vw] mobile:py-[0.429vh] flex `} articalStyling={"flex justify-between text-center items-center"}>
            <aside className='flex gap-2 '>
                <div className='flex item-between gap-1.5 items-center'>
                    <Svg
                        className={`mobile:w-[3.721vw] mobile:h-[1.717vh]`}
                        width={svgicons.phone1Icon[0]}
                        height={svgicons.phone1Icon[1]}
                        viewBox={svgicons.phone1Icon[2]}
                        icon={svgicons.phone1Icon[3]}
                        color={svgicons.phone1Icon[4]}
                    />
                    <span>+91 8265-569-845</span>
                </div>
                <div className='flex item-between gap-1.5 items-center'>
                    <Svg
                    className={`mobile:w-[3.721vw] mobile:h-[1.717vh]`}
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