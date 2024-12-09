"use client";
import React from "react";
import WebLayout from "@/components/commonComponents/webLayout/WebLayout";
import BranchesLandingPage from "../BranchesLandingPage";
import BranchesCourse from "../BranchesCourse";
import UpCommingBatches from "../UpCommingBatches";
import PlacementStatisticsHome from "@/components/placementstatistics/placementStatisticsHome";
import HiringPartners from "@/components/hiringPartners/hiringPartners";
import StidentsPlaced from "../StidentsPlaced";
import Testimonials from "../Testimonials";
import FaqHome from "@/components/faq/faqHome";
import { usePathname, useSearchParams } from "next/navigation";
import { useGetAllBranchDetailsQuery } from "@/redux/queries/getBranchDetails";
import Loading from "@/lib/Loading";

function BatchCourseAPiById() {
  const pathname = usePathname();
  const params = pathname.split("/").pop();
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

  // const branchId = digitIds?.[0] || null;
  // const courseID = digitIds?.[1] || null;
  const {
    data: BranchDetails,
    error,
    isLoading,
  } = useGetAllBranchDetailsQuery({ branchId: branchId, courseId: courseId });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!BranchDetails)
    return (
      <div className="flex justify-center items-center absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        No Branch details found.
      </div>
    );
  const { courses, name, batches, faqs } = BranchDetails?.data;

  return (
    <WebLayout>
      <BranchesLandingPage BranchDetails={BranchDetails} />
      <BranchesCourse branchCourseData={courses} />
      <UpCommingBatches
        branchCourseData={courses}
        branchName={name}
        branchesData={batches}
        branchId={branchId}
      />
      <PlacementStatisticsHome page="branch" />
      <section className="mb-4 mt-5">
        <HiringPartners page="branch" />
      </section>
      <StidentsPlaced branchName={name} />
      {/* <Testimonials /> */}
      <FaqHome page="branch" faqData={faqs} />
    </WebLayout>
  );
}

export default BatchCourseAPiById;
