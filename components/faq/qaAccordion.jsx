"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Fade, Slide } from 'react-reveal';


function Qaccordion() {

  const [openIndex, setOpenIndex] = useState(-1);

  const qaList = [
    {
      questuin: 'How do I create an employer account with Qspiders hiring?',
      answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
    },
    {
      questuin: 'How do I create an employer account with Qspiders hiring?',
      answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
    },
    {
      questuin: 'How do I create an employer account with Qspiders hiring?',
      answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
    },
    {
      questuin: 'How do I create an employer account with Qspiders hiring?',
      answer: 'Creating an account with Qspiders hiring is simple. You can start by posting your first job and authenticate your mobile number using OTP.'
    }
  ]

  const handleAccordionToggle = (index) => {
    
    // if (index === 0) {
    //   console.log(index,"index")
    //   setOpenIndex(-1)
    // } else {
      setOpenIndex(index === openIndex ? -1 : index);
    // }

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
                    <AccordionTrigger  onClick={() => handleAccordionToggle(index)}>{element.questuin}</AccordionTrigger>
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