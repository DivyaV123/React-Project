"use client";
import Button from "@/components/commonComponents/button/Button";
import CourseCard from "@/components/commonComponents/courseCard/courseCard";
import MaxWebWidth from "@/components/commonComponents/maxwebWidth/maxWebWidth";
import React, { useEffect, useState } from "react";
import "./branchesCourseCard.scss";
import CourseCardSkeleton from "@/components/commonComponents/courseCard/CourseCardSkeleton";
import { usePathname, useSearchParams } from 'next/navigation'
function BranchesCourse({ branchCourseData }) {
  const pathname = usePathname();
  const params = pathname.split('/').pop();
  const digitIds = params.match(/\b\d+\b/g);
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}?${searchParams.toString()}`
 
  
  function extractValues(pathname) {
    const branchIdMatch = pathname.match(/(\d+)-branchId/);
    const courseIdMatch = pathname.match(/(\d+)-courseId/);
   
    const branchId = branchIdMatch ? branchIdMatch[1] : null;
    const courseId = courseIdMatch ? courseIdMatch[1] : null;

    return { branchId, courseId };
}
const { branchId, courseId } = extractValues( fullUrl);
  
  
  const [visibleCards, setVisibleCards] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const showViewMoreButton =
    branchCourseData?.length % 4 !== 0 && visibleCards < branchCourseData?.length;

  const handleViewToggle = () => {
    if (showAll) {
      setVisibleCards(4);
    } else {
      setVisibleCards(branchCourseData.length);
    }
    setShowAll(!showAll);
  };

  const cardsToDisplay = branchCourseData?.slice(0, visibleCards);
 

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="sm:mb-8 ">
      <p className="w-[87.5vw] mobile:w-[92.558vw] m-auto font-bold mobile:text-[4.651vw] text-[2.5vw] pb-[3.333vh] mobile:pb-[1.717vh]">
        Courses
      </p>
      <section className="flex sm:flex-wrap mobile:gap-6 sm:w-[87.5vw] mobile:pl-[5.581vw] mobile:py-[1.717vh]   sm:m-auto 2xl:sm:gap-x-[17px] sm:gap-y-[16px] xl:gap-x-[14.5px] 3xl:gap-x-[22px]  mobile:overflow-x-scroll mobile:offlineScrollbar mobile:mb-[2vh]">
        {cardsToDisplay?.length > 0
          && cardsToDisplay?.map((element) => {
              return (
                <div className="branches courseCard" key={element.id}>
                  <article className="w-full h-full">
                    {isloading ? (
                      <CourseCardSkeleton />
                    ) : (
                      <CourseCard cardData={element} branchId={branchId}/>
                    )}
                    <div className="viewmore"></div>
                  </article>
                </div>
              );
            })
          // : courseCard?.map((element) => {
          //     return (
          //       <div className="branches courseCard" key={element.id}>
          //         <article className="w-full h-full">
          //           {isloading ? (
          //             <CourseCardSkeleton />
          //           ) : (
          //             <CourseCard cardData={element} />
          //           )}
          //           <div className="viewmore"></div>
          //         </article>
          //       </div>
          //     );
          //   }
          //   )
            }
      </section>
      {(showViewMoreButton || showAll) && (
        <MaxWebWidth articalStyling="flex justify-end pb-5 mobile:hidden pt-6">
          <article className="flex justify-center mt-2">
            <Button
              className="bg-gradient w-[9.375vw] h-[5.694vh] text-[0.938vw] text-white rounded-md"
              title={showAll ? "View less" : "View more"}
              onClick={handleViewToggle}
            />
          </article>
        </MaxWebWidth>
      )}
    </div>
  );
}

export default BranchesCourse;
