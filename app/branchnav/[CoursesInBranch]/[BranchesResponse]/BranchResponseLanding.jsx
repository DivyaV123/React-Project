"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useGetAllBranchesQuery } from "@/redux/queries/getAllBranchData";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import "../../BranchPopup.scss";
const BranchResponseLanding = () => {
  const {
    data: BranchResponse,
    error: branchError,
    isLoading: branchIsLoading,
  } = useGetAllBranchesQuery();
  const pathname = usePathname();
  const [branchName, branchId] = pathname.split("/").slice(2, 4);

  const filterBranchByCourse = useMemo(() => {
    if (!BranchResponse?.data) return [];
    const course = BranchResponse.data?.[0]?.cities?.find(
      (branch) => String(branch.cityName) === String(branchName)
    );
    const branches = course?.courses?.find(
      (sub) => String(sub.courseId) === String(branchId)
    );
    return branches ? [branches] : [];
  }, [BranchResponse, branchName, branchId]);
  const getBranchResponse = filterBranchByCourse?.[0]?.branches || [];
  const getCourseId= filterBranchByCourse?.[0]?.courseId || "";
  const getBranchCourseTitle = filterBranchByCourse?.[0]?.courseName || "";
  const getContact = (data) => {
    let numbersList = data.split(", ");
    let result = numbersList.slice(0, 2).join(" | ");
    return result;
  };
  return (
    <section className="my-[1.717vh]">
      <Link
        className="flex gap-2.5 pl-[1.628vw] bg-[#F9F9F9] py-[1.502vh] items-center"
        href={`/branchnav/${branchName}`}
      >
        <img src="/icon_arrow_left.svg" />
        <div className="text-[3.256vw] font-semibold text-[#454545]">
          {getBranchCourseTitle}
        </div>
      </Link>
      <section className="mx-[3.721vw] my-[0.858vh]">
        {getBranchResponse?.length > 0 &&
          getBranchResponse?.map((branch) => (
            <Link
              key={branch?.branchId}
              href={`/branches/${branch.branchId},${getCourseId}`}
              className="px-[2.326vw] py-[1.073vh] flex gap-4 branchMobileCard my-[1.717vh]"
            >
              <div>
                <img
                  className="w-[8.372vw] h-[3.863vh]"
                  src={branch?.branchImage}
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between pb-[0.858vh] items-center ">
                  <p className="text-[2.791vw] font-bold text-[#454545]">
                    {branch?.branchName}
                  </p>
                  <button className="flex gap-2 items-center">
                    <p className="text-[#7298FF] text-[2.093vw]">
                      Get Directions
                    </p>
                    <img src="/DirectionIcon.svg" className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-[2.326vw] pb-[0.858vh] text-[#575757]">
                  {getContact(branch?.phoneNumber)}
                </p>
                <div className="flex  pb-[0.858vh] gap-4 items-center">
                  <div className="flex gap-1.5 items-center">
                    <Svg
                      className="pr-[0.469vw] w-[4.186vw] h-[1.931vh]"
                      width={svgicons.calender[0]}
                      height={svgicons.calender[1]}
                      viewBox={svgicons.calender[2]}
                      icon={svgicons.calender[3]}
                      color={svgicons.calender[4]}
                    />
                    <p className="text-[2.326vw] text-[#575757] font-medium">
                      {branch?.upcomingBatches} Upcoming Batches
                    </p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Svg
                      className="w-[4.186vw] h-[1.931vh]"
                      width={svgicons.icontime[0]}
                      height={svgicons.icontime[1]}
                      viewBox={svgicons.icontime[2]}
                      icon={svgicons.icontime[3]}
                      color={svgicons.icontime[4]}
                    />
                    <p className="text-[2.326vw] text-[#575757] font-medium">
                      {branch?.ongoingBatches} Ongoing Batches
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </section>
  );
};

export default BranchResponseLanding;
