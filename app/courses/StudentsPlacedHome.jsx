'use client'
import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import React, { useEffect, useState } from 'react'
import StudentsPlacedCard from './StudentsPlacedCard'
import Button from '@/components/commonComponents/button/Button'
import CoursePageContainer from './CoursePageContainer'
import TrainingCardSkeleton from '@/components/ourBranches/trainingMode/TrainingCardSkeleton'

import CourseHighlites from './CourseHighlites'
import StudentsTestimonialsHome from './StudentsTestimonialsHome'
import Link from 'next/link'
import { PLACEMENT_PATH } from '@/lib/RouteConstants'
import { usePathname, useSearchParams } from 'next/navigation'
import { useGetAllPlacementListQuery } from '@/redux/queries/getPlacementsList'
function StudentsPlacedHome({ page, courseDetails, branchName }) {

    let organisation = courseDetails?.data?.branchType.map((element) => {
        if (element === "JSP") {
            return "Jspiders"
        } else if (element === "QSP") {
            return "Qspiders"
        } else if (element === "PYSP") {
            return "Pyspiders"
        } else if (element === "BSP") {
            return "Bspiders"
        } else {
            return "Qspiders"
        }
    })
    let organisationID = courseDetails?.data?.branchType.map((element) => {
        if (element === "JSP") {
            return "1"
        } else if (element === "QSP") {
            return "2"
        } else if (element === "PYSP") {
            return "3"
        } else if (element === "PSpy") {
            return "4"
        } else {
            return "1"
        }
    })
   
    const pathname = usePathname()
    const searchParams = useSearchParams();
    // const branchId = searchParams.get('course');
    const params = pathname?.split('/').pop();
    const digitIds = params?.match(/\b\d+\b/g);
   

    const fullUrl = `${pathname}?${searchParams.toString()}`
   
    
    function extractValues(pathname) {
      const branchIdMatch = pathname.match(/(\d+)-branchId/);
      const courseIdMatch = pathname.match(/(\d+)-courseId/);
     
      const branchId = branchIdMatch ? branchIdMatch[1] : null;
      const courseId = courseIdMatch ? courseIdMatch[1] : null;
  
      return { branchId, courseId };
  }
  const { branchId, courseId } = extractValues( fullUrl);
    // const branchId = digitIds[0];
    const bodyData = pathname.includes('branches') ? { branchLocation: [branchName] } : { branchType: organisation }
  
    const { data: studentsList, isLoading: studentsListLoading } = useGetAllPlacementListQuery(
        pathname.includes('branches') ? { placement_branch_id: branchId } : { stud_org_id: Number(organisationID) }
       
      );
      
   
    return (
        <>
            <section className='w-full sm:bg-[#F6F6F6] '>
                <article className={page === 'branch' ? 'sm:w-[87.5vw] sm:m-auto' : 'w-[51.56vw]'}>
                    <header>
                        <h1 className={`${page === 'branch' ? "text-[2.5vw] py-[1.563vw] mobile:pb-[1.717vh] mobile:text-[4.651vw]  mobile:ml-[5.581vw]" : "text-[1.875vw] pt-[3.611vh] pb-[3.056vh]"} font-bold`}>
                            {`${pathname.includes('courses') ? "Students placed through this course" : "Students placed through this branch"}`}
                        </h1>
                    </header>
                    <StudentsPlacedCard page={page} studentsInfo={studentsList?.results} />
                    <Link href={PLACEMENT_PATH} >
                        <article className={`flex justify-center  ${page === 'branch' ? 'sm:mt-[5.278vh] pb-[4.444vh] mobile:pb-[1.717vh]' : 'mt-[1.667vh] pb-[1.667vh]'}`}>
                            <Button
                                className='bg-gradient h-[2.656vw] font-medium w-[9.375vw] text-[0.75rem] mobile:w-[27.907vw] mobile:h-[3.648vh] mobile:text-[2.791vw] text-white rounded-md tabView:py-[5.389vh] tabView:px-[4.875vw] tabView:w-auto tabView:h-auto'
                                title="View more"
                                onClick={() => { }}
                            />
                        </article>
                    </Link>
                </article>
            </section>
            {pathname.includes("courses") ?
                <>
                    <CourseHighlites courseDetails={courseDetails} />
                    {/* <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
                        <StudentsTestimonialsHome page='branch' testimonialsData={studentsList?.response?.candidates?.content} />
                    </MaxWebWidth> */}

                </>
                :
                <>
                    {/* <MaxWebWidth sectionStyling='bg-[#F9F9F9]'>
                        <StudentsTestimonialsHome page='branch' testimonialsData={studentsList?.response?.candidates?.content} />
                    </MaxWebWidth> */}

                </>
            }

        </>
    )
}

export default StudentsPlacedHome