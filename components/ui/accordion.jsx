import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={
        cn(
          "flex flex-1 rounded-lg min-h-11 text-dark-gray text-[1.25vw] font-medium rounded-b-none items-center justify-between py-[2.222vh] transition-all bg-white px-[1.25vw] [&[data-state=open]>svg]:rotate-180",
          className
        )
      }
      {...props}>
      {children}
      < ChevronDown className="h-[2.778vh] w-[1.25vw] shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger >
  </AccordionPrimitive.Header >
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="text-ash font-normal rounded-lg rounded-t-none overflow-hidden bg-white py-[1.111vh]  px-[1.25vw] text-[0.938vw] transition-all "
    {...props}>
    <div className={cn("pb-[2.222vh] pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
