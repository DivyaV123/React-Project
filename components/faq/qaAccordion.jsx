"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Qaccordion() {

  const [openIndex, setOpenIndex] = useState(0);

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
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <>
      <Accordion defaultIndex={[0]} type="single" collapsible>
        {
          qaList.map((element, index) => {
            return (
              <article className={'m-2 rounded-lg'}>
                <AccordionItem value={index + 1}>
                  <AccordionTrigger onClick={() => handleAccordionToggle(index)}>{element.questuin}</AccordionTrigger>
                  <AccordionContent>
                    {element.answer}
                  </AccordionContent>
                </AccordionItem>
              </article>
            )
          })
        }

      </Accordion>
    </>
  )
}

export default Qaccordion