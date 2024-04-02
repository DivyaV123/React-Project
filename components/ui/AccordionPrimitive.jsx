import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const Accordion = ({ defaultIndex = 0, children }) => {
  return (
    <AccordionPrimitive.Root defaultIndex={defaultIndex}>
      {children}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
