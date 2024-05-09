'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import { Checkbox } from "@/components/ui/checkbox"
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import './upCommingBranches.scss'

import React, { useState } from 'react'
import BatchesCard from './BatchesCard'

function UpCommingBranches() {
  const [openIndex, setOpenIndex] = useState(-1);
  const branchesList = [
    { Bangalore: ['Basavanagudi', 'Old Airport Road', 'Rajajinagar', 'Hebbal', 'BTM Layout'] },
    { Hyderabad: [] },
    { Chennai: [] },
    { Pune: [] },
    { Mumbai: [] },
    { Noida: [] },
    { Gurugram: [] },
    { 'New Delhi': [] },
    { Bhubaneswar: [] },
    { Kolkata: [] },
    { Ahmedabad: [] },
    { Chandigarh: [] },
    { Tirupati: [] },
    { Kochi: [] },
    { Mysore: [] },
    { 'View all Cities': [] }
  ]

  const handleAccordionToggle = (index) => {
    console.log(index, "indexindex")
    setOpenIndex(index === openIndex ? -1 : index);

  };
  return (
    <WebLayout>
      <MaxWebWidth sectionStyling='bg-[#F9F9F9]' articalStyling='!w-[94.5vw] pb-6' >
        <header className='font-bold text-[1.5rem] p-8 pl-0'>
          Upcomming Batches
        </header>
        <section className='flex gap-2'>
          <aside className='basis-[22%]'>
            <article className='w-[18.75vw] h-[40.781vw] bg-[#FFFFFF] rounded overflow-y-scroll courseScroll'>
              <header className='font-bold p-3'>
                Filter
              </header>
              <h1 className='font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex' >
                Mode of class
              </h1>
              <RadioGroup className='flex justify-around p-4' defaultValue="Offline">
                <div className='flex'>
                  <RadioGroupItem className='' value="Online" />
                  <h1 className='text-[#454545] font-medium text-[0.875rem] pl-1'>Online</h1>
                </div>
                <div className='flex'>
                  <RadioGroupItem value="Offline" />
                  <h1 className='text-[#454545] font-medium text-[0.875rem] pl-1'>Offline</h1>
                </div>
              </RadioGroup>
              <h1 className='font-semibold text-black text-[0.875rem] bg-[#FFF9F4] w-full p-3 flex' >
                City
              </h1>
              <Accordion type="single" collapsible className="w-full ">
                {branchesList.map((cityObj, index) => {
                  const cityName = Object.keys(cityObj)[0];
                  const branches = cityObj[cityName];
                  return (
                    <AccordionItem className='!border-none' key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger className='p-2' onClick={() => handleAccordionToggle(index)}>
                        <div className='p-2' key={index}>
                          <div className="flex items-center space-x-2">
                            <Checkbox id={cityName} />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              <span className='text-gray font-medium text-[0.875]'>{cityName}</span>
                            </label>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='pl-3'>
                        {branches.map((branch, branchIndex) => (
                          <div className='p-2' key={branchIndex}>
                            <div className="flex items-center space-x-2">
                              <Checkbox id={branch} />
                              <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {branch}
                              </label>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </article>
            <article>
            </article>
          </aside>
          <aside className='basis-[80%] max-h-[62.969vw] overflow-hidden'>
            <div className='flex flex-wrap gap-3 w-full h-full overflow-y-scroll courseScroll'>
              {Array.from({ length: 15 }, (value, index) => (
                <BatchesCard />
              ))}
            </div>
          </aside>
        </section>
      </MaxWebWidth>
    </WebLayout>
  )
}

export default UpCommingBranches