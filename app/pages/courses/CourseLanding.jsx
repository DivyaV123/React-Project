import React from "react";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
const CourseLanding = () => {
  return (
    <MaxWebWidth
      sectionStyling=" bg-coursegradient max-w-full overflow-hidden"
      articalStyling="relative"
    >
      <aside className="flex py-8">
        <article className="w-[51.56vw]">
          
        </article>
        <figure className="w-[35.93vw]">
          <img
            className="w-[77%] float-right"
            src="../courseLanding.png"
            alt="courseLanding"
          ></img>
        </figure>
      </aside>
    </MaxWebWidth>
  );
};

export default CourseLanding;
