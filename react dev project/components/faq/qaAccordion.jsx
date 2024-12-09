"use client"
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Fade } from 'react-awesome-reveal'


function Qaccordion({ qaList }) {

  const [openIndex, setOpenIndex] = useState(-1);

  const handleAccordionToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
 

  return (
    <>
      <Fade direction="top" duration={1000} delay={0}>
        <Accordion defaultValue="hello" className="w-full" type="single" collapsible>
          {qaList?.map((element, index) => (
            <AccordionItem className="pb-2 min-h-[4.375vw]" key={index} value={index === 0 ? "hello" : index}>
              <AccordionTrigger onClick={() => handleAccordionToggle(index)}>{element.question}</AccordionTrigger>
              <AccordionContent>{element.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Fade>
    </>
  )
}

export default Qaccordion