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



function CarosalHome() {
  // let corosalsections = [
  //   { section: <Section1 /> },
  //   { section: <Section2 /> },
  //   { section: <Section3 /> },
  //   { section: <Section4 /> },
  // ]
  let logo = () => {
    return (
      <>
        <figure className='absolute right-[-8%]'>
          <img src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
        </figure>
        <figure className='absolute right-[-8%] top-[12%]'>
          <img src='./pyside (1).svg' alt="riteJspidersStickyLogo"></img>
        </figure>
        <figure className='absolute right-[-8%] top-[20%]'>
          <img src='./proside (1).svg' alt="riteJspidersStickyLogo"></img>
        </figure>
      </>
    )
  }
  return (
    <MaxWebWidth
      sectionStyling="bg-[url('/BackgroundWave.png')] bg-no-repeat bg-left bg-contain bg-cover max-w-full overflow-hidden"
      articalStyling='relative'
      // logo={logo}
    >
      {/* {logo()} */}
      <LandingCarosal />
      <CarosalFooter />
    </MaxWebWidth>  

  )
}

export default CarosalHome