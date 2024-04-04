import CommonIconsComponent from '@/components/commonComponents/commoniconcomponent/commonIconsComponent'
import React from 'react'
import './topnav.scss'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth';

function TopNavbar() {
    return (
        <MaxWebWidth sectionStyling={`topnavbar flex`} articalStyling={"flex justify-between text-center items-center"}>
            <aside className='flex space-x-3 '>
                <div className='flex item-between space-x-2'>
                    <img src="/phone.svg" alt="Phone Logo" />
                    <span>+91 8265-569-845 | +91 7654-821-598</span>
                </div>
                <div className='flex item-between space-x-2'>
                    <img src="/email.svg" alt="Phone Logo" />
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