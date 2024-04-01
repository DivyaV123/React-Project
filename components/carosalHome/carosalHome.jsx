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
import LandingCarosal from './corosalSections/LandingCarosal'
import CarosalFooter from './carosalFooter/CarosalFooter'



function CarosalHome() {
  // let corosalsections = [
  //   { section: <Section1 /> },
  //   { section: <Section2 /> },
  //   { section: <Section3 /> },
  //   { section: <Section4 /> },
  // ]
  let logo = () => {
    return (
      <figure>
        <img src='./riteJspidersStickyLogo.png' alt="riteJspidersStickyLogo"></img>
      </figure>
    )
  }
  return (
    <MaxWebWidth
      logo='true'
    >
      {/* <Carousel className="w-full ">
        <CarouselContent>
          {corosalsections.map((ele, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CarosalSection className="flex justify-center">
                  <>
                    {ele.section}
                  </>
                </CarosalSection>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      <LandingCarosal />
      <CarosalFooter/>
    </MaxWebWidth>
  )
}

export default CarosalHome