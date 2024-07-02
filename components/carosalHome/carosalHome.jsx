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
  // let corosalsections = [
  //   { section: <Section1 /> },
  //   { section: <Section2 /> },
  //   { section: <Section3 /> },
  //   { section: <Section4 /> },
  // ]
  let logo = () => {
    return (
      <article className='mobile:hidden'>
        {domainVariable === "Qspiders" ?
          <figure className='absolute right-[-11%] hover:right-[-10.5%] cursor-pointer'>
            <a href='https://testjsp.jspiders.com/' target='_blank'>
              <img className='w-[71%] hover:w-[73%]' src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
            </a>
          </figure> :
          <>
            <figure className='absolute right-[-11%] hover:right-[-10.5%] cursor-pointer'>
              <img className='w-[71%] hover:w-[73%]' src='../images/Variant3.png' alt="riteJspidersStickyLogo"></img>
            </figure>
          </>
        }
        {domainVariable === "Pyspiders" ?
          <figure className='absolute right-[-11%] hover:right-[-10.5%] cursor-pointer'>
            <img className='w-[71%] hover:w-[73%]' src='../images/Variant3.png' alt="riteJspidersStickyLogo"></img>
          </figure> :
          <figure className='absolute right-[-9.5%] top-[10.5%] hover:right-[-9%] cursor-pointer '>
            <a href='http://testpysp.pyspiders.com/' target='blank'>
              <img className='w-[75%] hover:w-[77%]' src='./pyside (1).svg' alt="riteJspidersStickyLogo"></img>
            </a>
          </figure>
        }
        <figure className='absolute right-[-9.5%] top-[18%] hover:right-[-9%] cursor-pointer '>
          <a>
            <img className='w-[75%] hover:w-[77%]' src='./proside (1).svg' alt="riteJspidersStickyLogo"></img>
          </a>
        </figure>
      </article>
    )
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