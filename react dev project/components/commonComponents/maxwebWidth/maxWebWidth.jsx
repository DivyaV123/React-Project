import { cn } from "@/lib/utils";
import React from "react";

function MaxWebWidth({ children, sectionStyling, articalStyling, logo }) {
  return (
    <section className={cn(`w-full  ${sectionStyling}`)}>
      <article className={cn(`w-[87.5vw] mobile:w-[92.558vw] m-auto ${articalStyling}`)}>{children}</article>
    </section>
  );
}

export default MaxWebWidth;