"use client"
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Fade, Slide } from 'react-reveal';


function Qaccordion({ qaList }) {

  const [openIndex, setOpenIndex] = useState(-1);

  const handleAccordionToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);

  };

  return (
    <>
      <Fade top duration={1000} delay={0}>
        <Accordion className='w-full' defaultIndex={[0]} type="single" collapsible>
          {qaList.map((element, index) => (
            <AccordionItem className='pb-2 min-h-[4.375vw]' key={index} value={index + 1}>
              <AccordionTrigger onClick={() => handleAccordionToggle(index)}>{element.question}</AccordionTrigger>
              <AccordionContent>
                {element.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Fade>
    </>
  )
}

export default Qaccordion