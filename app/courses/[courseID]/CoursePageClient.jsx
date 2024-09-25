"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CourseLanding from "../CourseLanding";
import { useGetAllCourseDetailsQuery } from "@/redux/queries/getCoursedetails";
import { useGetAllPlacementCountQuery } from "@/redux/queries/getAllPlacementCount";
import WebLayout from "@/components/commonComponents/webLayout/WebLayout";
import CourseContent from "../CourseContent";
import UpComingBranches from "../UpComingBranches";
import HiringPartnersHome from "../HiringPartnersHome";
import StudentsPlacedHome from "../StudentsPlacedHome";
import CoursesFaq from "../CoursesFaq";
import Loading from "@/lib/Loading";
import AccordionComponen from "../AccordionComponen";

const CoursePageClient = () => {
  const pathname = usePathname();
  const courseID = pathname.split("/").pop(); // Extract the courseID from the URL
  const extractModeFromPathname = (pathname) => {
    const parts = pathname.split('&&');
    if (parts.length === 2) {
      return parts[1];
    }
    return null;
  };
  const mode = extractModeFromPathname(pathname);  
  const { data: countDetails, isLoading: countLoading } =
    useGetAllPlacementCountQuery();
  const {
    data: courseDetails,
    error,
    isLoading,
  } = useGetAllCourseDetailsQuery(courseID, {
    skip: !courseID, // Skip query until courseID is available
  });

  const [typeOfLearning, setTypeOfLearning] = useState(null);

  useEffect(() => {
    if (courseDetails?.data?.mode) {
      if (mode==="Online") {
        setTypeOfLearning("ONLINE_CLASSES");
      } else {
        setTypeOfLearning(courseDetails.data.mode[0]);
      }
    }
  }, [courseDetails]);

  if (isLoading || countLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!courseDetails) return <div className="flex justify-center items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">No course details found.</div>;

  return (
    <WebLayout page="course" courseDetails={courseDetails.data}>
      <CourseLanding
        courseDetails={courseDetails.data}
        countDetails={countDetails}
        setTypeOfLearning={setTypeOfLearning}
        typeOfLearning={typeOfLearning}
      />
      {/* <CourseContent
        courseDetails={courseDetails}
        typeOfLearning={typeOfLearning}
      /> */}
      <AccordionComponen data={courseDetails?.data} typeOfLearning={typeOfLearning}/>
      <UpComingBranches courseDetails={courseDetails.data} />
      {/* <div className='mb-9'>
        <PlacementStatisticsHome page="course" courseDetails={courseDetails} />
      </div> */}
      <div className="mb-9">
        <HiringPartnersHome courseDetails={courseDetails} />
      </div>
      <StudentsPlacedHome page="branch" courseDetails={courseDetails} />
      <CoursesFaq courseDetails={courseDetails.data} />
    </WebLayout>
  );
};

export default CoursePageClient;
