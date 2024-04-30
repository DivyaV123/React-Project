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
    console.log(index, "indexindex")
    setOpenIndex(index === openIndex ? -1 : index);

  };

  return (
    <>
      {
        qaList.map((element, index) => {
          return (
            <Fade top duration={1000} delay={0}>
              <article className={'m-2 rounded-lg'}>
                <Accordion defaultIndex={[0]} type="single" collapsible>
                  <AccordionItem value={index + 1}>
                    <AccordionTrigger onClick={() => handleAccordionToggle(index)}>{element.question}</AccordionTrigger>
                    <AccordionContent>
                      {element.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </article>
            </Fade>

          )
        })
      }


    </>
  )
}

export default Qaccordion