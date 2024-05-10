'use client'
import React from 'react'
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



function CarosalHome() {
  // let corosalsections = [
  //   { section: <Section1 /> },
  //   { section: <Section2 /> },
  //   { section: <Section3 /> },
  //   { section: <Section4 /> },
  // ]
  let logo = () => {
    return (
      <article >
        <figure className='absolute right-[-11%] hover:right-[-10.5%] cursor-pointer'>
          <img className='w-[71%] hover:w-[73%]' src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
        </figure>
        <figure className='absolute right-[-9.5%] top-[10.5%] hover:right-[-9%] cursor-pointer '>
          <img className='w-[75%] hover:w-[77%]' src='./pyside (1).svg' alt="riteJspidersStickyLogo"></img>
        </figure>
        <figure className='absolute right-[-9.5%] top-[18%] hover:right-[-9%] cursor-pointer '>
          <img className='w-[75%] hover:w-[77%]' src='./proside (1).svg' alt="riteJspidersStickyLogo"></img>
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
        <CarosalFooter />
      </MaxWebWidth>
      <MaxWebWidth sectionStyling='bg-white' articalStyling='flex justify-center'>
      </MaxWebWidth>
    </>
  )
}

export default CarosalHome