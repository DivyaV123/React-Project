
import React from 'react'
import NavItems from '../navItems/navItems'
import NavAuthButtons from '../authButtons/navAuthButtons'
import './mainNavBar.scss'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'


function MainNavbar() {
    return (
        <>
            <MaxWebWidth sectionStyling={`_navbarBlock flex`} articalStyling={"flex items-center justify-between h-full"}>
                <aside className=''>
                    <figure>
                        <picture>
                            <img className="QspidersLogos" src="/QspidersLogo.svg" alt="QspidersLogo Logo" />
                        </picture>
                    </figure>
                </aside>

                <aside className=''>
                    <NavItems />
                </aside>

                <aside className=''>
                    <NavAuthButtons />
                </aside>
            </MaxWebWidth>
            <article >
                <figure className="absolute top-40 right-0 flex justify-end z-10">
                    <img className='w-[73%] hover:w-[80%] hover:translate-y-3 duration-300' src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
                </figure>
            </article></>
    )
}

export default MainNavbar