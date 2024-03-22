import React from 'react';
import NavItems from '../navItems/navItems';
import NavAuthButtons from '../authButtons/navAuthButtons';
import './navbar.scss'
import TopNav from '../topNav/topNav';
import OurCourse from '../ourCourses/ourCourse';

const Navbar = () => {
  return (
    <section id='navbar'>
      <div>
        <TopNav />
      </div>
      <article>
        <aside className='justify-start flex basis-3/20'>
          <picture>
            <img className="QspidersLogos" src="/QspidersLogo.svg" alt="QspidersLogo Logo" />
          </picture>
        </aside>

        <aside className='justify-center flex basis-3/4'>
          <NavItems />
        </aside>

        <aside className='justify-end flex basis-3/20'>
          <NavAuthButtons />
        </aside>
      </article>
    </section>
  )
}

export default Navbar
