import React from 'react'
import './topNav.scss'
import CommonIconsComponent from '../commonComponents/commoniconcomponent/commonIconsComponent'


function TopNav() {
    return (
        <section className='topnavbar w-full justify-center'>
            <article className='flex justify-between text-center item-center'>
                <aside className='flex space-x-3'>
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
                    <CommonIconsComponent />
                </aside>
            </article>
        </section>
    )
}

export default TopNav