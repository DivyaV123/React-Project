'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import CarosalSection from '../commonComponents/carosalSection/carosalSection'
import './carosalHome.scss'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Section1 from './corosalSections/section1'
import Section2 from './corosalSections/section2'
import Section3 from './corosalSections/section3'
import Section4 from './corosalSections/section4'



function CarosalHome() {
  let corosalsections = [
    { section: <Section1 /> },
    { section: <Section2 /> },
    { section: <Section3 /> },
    { section: <Section4 /> },
  ]
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
      <Carousel className="w-full ">
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
      </Carousel>
    </MaxWebWidth>
  )
}

export default CarosalHome