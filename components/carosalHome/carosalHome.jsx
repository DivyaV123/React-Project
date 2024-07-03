'use client'
import React, { useContext } from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarosalFooter from './carosalFooter/CarosalFooter'
import { Fade } from 'react-reveal'
import LandingCarosal from './corosalSections/LandingCarosal'
import Button from '../commonComponents/button/Button'
import { GlobalContext } from '../Context/GlobalContext'



function CarosalHome() {
  const { domainVariable } = useContext(GlobalContext)
  const imgarray = [
    {
      imgSrc: '../images/j.png',
      address: "http://testjsp.jspiders.com/"
    },
    {
      imgSrc: '../images/q.png',
      address: "http://testqsp.qspiders.com/"
    },
    {
      imgSrc: '../images/py.png',
      address: "http://testpysp.pyspiders.com/"
    },
    {
      imgSrc: '../images/b.png',
      address: "http://bspiders.com/"
    },
  ]

  let logo = () => {
    console.log(domainVariable, "domainVariable")
    if (domainVariable === "Qspiders") {
      return (
        <article className='mobile:hidden'>
          <figure className='absolute right-[-8.9%] top-[2.5%] hover:right-[-9%] cursor-pointer '>
            <a href='http://testjsp.jspiders.com/' target='_blank'>
              <img className='w-[78%] hover:w-[79%]' src='../images/j.png' alt="riteJspidersStickyLogo"></img>
            </a>
          </figure>
          <figure className='absolute right-[-9%] top-[10%] hover:right-[-9%] cursor-pointer '>
            <a href='http://testpysp.pyspiders.com/' target='_blank'>
              <img className='w-[78%] hover:w-[79%]' src='../images/py.png' alt="riteJspidersStickyLogo"></img>
            </a>
          </figure>
          <figure className='absolute right-[-9%] top-[18%] hover:right-[-9%] cursor-pointer '>
            <a href='http://bspiders.com/' target='_blank'>
              <img className='w-[78%] hover:w-[79%]' src='../images/b.png' alt="riteJspidersStickyLogo"></img>
            </a>
          </figure>
        </article>
      )
    } else if (domainVariable === "Jspiders") {
      return (<article className='mobile:hidden'>
        <figure className='absolute right-[-8.9%] top-[2.5%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testqsp.qspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/q.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[10%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testpysp.pyspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/py.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[18%] hover:right-[-9%] cursor-pointer '>
          <a href='http://bspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/b.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
      </article>)
    } else if (domainVariable === "pypiders") {
      return (<article className='mobile:hidden'>
        <figure className='absolute right-[-8.9%] top-[2.5%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testqsp.qspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/q.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[10%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testjsp.jspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/j.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[18%] hover:right-[-9%] cursor-pointer '>
          <a href='http://bspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/b.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
      </article>)
    } else if (domainVariable === "Bspiders") {
      return (<article className='mobile:hidden'>
        <figure className='absolute right-[-8.9%] top-[2.5%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testqsp.qspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/q.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[10%] hover:right-[-9%] cursor-pointer '>
          <a href='http://testjsp.jspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/j.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
        <figure className='absolute right-[-9%] top-[18%] hover:right-[-9%] cursor-pointer '>
          <a href='http://bspiders.com/' target='_blank'>
            <img className='w-[78%] hover:w-[79%]' src='../images/py.png' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
      </article>)
    }

  }

  return (
    <>
      <MaxWebWidth
        sectionStyling="bg-[url('/BackgroundWave.png')] bg-no-repeat bg-left bg-contain bg-cover max-w-full overflow-hidden"
        articalStyling='relative'
        logo={logo}
      >
        {logo()}
        <LandingCarosal />
      </MaxWebWidth>
      <MaxWebWidth sectionStyling='bg-white' articalStyling='flex justify-center'>
      </MaxWebWidth>
    </>
  )
}

export default CarosalHome