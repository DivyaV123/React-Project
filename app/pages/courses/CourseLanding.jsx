import React from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
const CourseLanding = () => {
  return (
    <MaxWebWidth
    sectionStyling=" bg-coursegradient max-w-full overflow-hidden"
      articalStyling="relative"
    >
<aside className="flex">
  <article className="w-[52.5vw]">

  </article>
  <figure className="w-[35vw]" >
    <img className="w-full" src='../courseLanding.png' alt="courseLanding"></img>
  </figure>
</aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
