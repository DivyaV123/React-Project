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
  const detail = [
    {
      count: 'No.1',
      details: 'Training Institue in  the World and also  the Largest.'
    },
    {
      count: '2.51L',
      details: 'Students have been  Placed, and still  counting!'
    },
    {
      count: '4180+',
      details: 'Multinational  companies hire from  us, and the list is still  growing.'
    },
    {
      count: '19+',
      details: 'Companies conduct  interviews every  working day.'
    },
    {
      count: '1300+',
      details: 'Students attend  interviews every day  across companies.'
    },
    {
      count: '3800+',
      details: 'Students get placed  in a Month across  the Globe.'
    },
  ]
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
        <section className='z-100 flex justify-center'>
          <article className='rounded-lg w-[85%] bg-footer-blue flex justify-between justify-center bg-cover items-between'>
            <figure>
              <img className='h-auto' src='./illustrate_gloabImage.svg' alt='illustrate_gloabImage' />
            </figure>
            <aside className='flex justify-end items-center'>
              <div className='grid grid-cols-1  md:grid-cols-6 lg:grid-cols-6 gap-5'>
                {
                  detail.map((element) => {
                    let content = element.details.replace(/#/g, "<br/>")
                    console.log(content, "content")
                    return (
                      <div className='p-2'>
                        <h1 className=' gradient-text text-3xl text-orange-600 subHead text-header-orange font-extra-bold flex justify-center'>
                          {element.count}
                        </h1>
                        <p className='text-white text-xs/[16px] font-thin flex justify-center text-center ' dangerouslySetInnerHTML={{ __html: content }} />
                      </div>
                    )
                  })
                }
              </div>
            </aside>
          </article>
        </section>
      </Carousel> */}
      <Section1/>
    </MaxWebWidth>
  )
}

export default CarosalHome