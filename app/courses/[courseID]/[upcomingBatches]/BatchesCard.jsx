"use client";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import "./upComingBranches.scss";
import "../../CourseLanding.scss";

function BatchesCard() {
  const [isloading, setisLoading] = useState(true);
  const upcomingBatchesData = [
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
      place: "Basavangudi",
      day: "Weekdays",
    },
  ];
  const enrollEnquire =
    "py-[1.389vh] px-[0.781vw] w-[8.359375vw] text-[1.094vw] font-semibold";
  const dateAndTime =
    "flex text-[0.938vw] font-medium text-dark-gray gap-y-[0.469vw] items-center";
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {upcomingBatchesData.map((batch, index) => {
        return isloading ? (
          <>
            <div
              className={
                "h-[13.672vw] w-[20.469vw]  upcomingBatches py-[2.222vh] px-[1.25vw]"
              }
            >
              <Skeleton className="h-4 w-[70%] mb-3" />
              <Skeleton className="h-3 w-[30%] mb-5" />
              <Skeleton className="w-[20%]" />
              <Skeleton className="w-[20%]" />
              <div className="flex gap-2 mt-7">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="flex gap-2 mt-8">
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-8 w-[200px]" />
              </div>
            </div>
          </>
        ) : (
          <section className={`flex flex-wrap`} key={index}>
            <div
              className={
                "w-[22.109vw] mobile:px-[3.721vw] mobile:w-[92.558vw] mobile:my-2 upcomingBatches py-[2.222vh] px-[1.25vw]"
              }
            >
              <header className="font-bold text-[1.25vw] pb-[0.833vh] mobile:text-[3.721vw]">
                {batch.course}
              </header>
              <p className="font-normal text-[0.938vw] text-ash pb-[2.778vh] mobile:text-[2.791vw]">
                By: {batch.trainer}
              </p>
              <div className="flex mobile:block pb-[1.389vh] gap-y-[0.469vw] items-center  justify-between">
                <div className={`${dateAndTime}`}>
                  <Svg
                    className=" pr-[0.469vw] mobile:w-[4.186vw]"
                    width={svgicons.calender[0]}
                    height={svgicons.calender[1]}
                    viewBox={svgicons.calender[2]}
                    icon={svgicons.calender[3]}
                    color={svgicons.calender[4]}
                  />
                  <div className="mobile:text-[2.791vw] mobile:mx-1">{batch.date}</div>
                </div>
                <div className={`${dateAndTime} mobile:mt-1`}>
                  <Svg
                  className="pr-[0.469vw] mobile:w-[4.186vw]"
                    width={svgicons.icontime[0]}
                    height={svgicons.icontime[1]}
                    viewBox={svgicons.icontime[2]}
                    icon={svgicons.icontime[3]}
                    color={svgicons.icontime[4]}
                  />
                  <div className="mobile:text-[2.791vw] mobile:mx-1">{batch.time}</div>
                </div>
              </div>
              <div className={`${dateAndTime} pb-[1.389vh] `}>
                <Svg
                  className=" pr-[0.469vw] mobile:w-[4.186vw]"
                  width={svgicons.branchLocation[0]}
                  height={svgicons.branchLocation[1]}
                  viewBox={svgicons.branchLocation[2]}
                  icon={svgicons.branchLocation[3]}
                  color={svgicons.branchLocation[4]}
                />
                <div className="mobile:text-[2.791vw] mobile:mx-1">{batch.place}</div>
              </div>
              <div className={`${dateAndTime} pb-[1.389vh] mobile:hidden`}>
                <Svg
                  className=" pr-[0.469vw] mobile:w-[4.186vw]"
                  width={svgicons.calender[0]}
                  height={svgicons.calender[1]}
                  viewBox={svgicons.calender[2]}
                  icon={svgicons.calender[3]}
                  color={svgicons.calender[4]}
                />
                <div className="mobile:text-[2.791vw]">{batch.day}</div>
              </div>
              <div className="flex justify-between">
                <button
                  className={`${enrollEnquire} mobile:text-[3.721vw] mobile:flex mobile:justify-center mobile:items-center mobile:w-[39.535vw] mobile:h-[4.731vh] EnrollButton bg-gradient rounded text-white`}
                >
                  Demo class
                </button>
                <button
                  className={`${enrollEnquire} mobile:text-[3.721vw] mobile:flex mobile:justify-center mobile:items-center mobile:w-[39.535vw] mobile:h-[4.731vh] EnquireButton rounded border border-orange-500 text-orange-500`}
                >
                  Know more
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default BatchesCard;
