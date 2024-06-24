import React, { useEffect, useState } from "react";
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
import { Skeleton } from "../ui/skeleton";
const OnlineLiveClasses = ({ className, page, branchCard, cardSize, branchesData, branchName }) => {
  const [isloading, setisLoading] = useState(true);
  const upcomingBatchesData = branchesData.length > 0 ? branchesData : [
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
    "py-[1.389vh] px-[0.781vw] mobile:px-[2.791vw] mobile:py-[1.073vh] mobile:w-[24.884vw] mobile:text-[3.256vw] w-[8.359375vw] text-[1.094vw] font-semibold";
  const dateAndTime =
    "flex text-[0.938vw] font-medium text-dark-gray gap-y-[0.469vw] items-center";

  function convertToIST(timeString) {
    let [hours, minutes] = timeString.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    let formattedTime = hours.toString().padStart(2, '0');
    return `${formattedTime} ${period}`;
  }

  function convertDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  }

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
                page === "branch"
                  ? { cardSize }
                  : "h-[13.672vw] w-[20.469vw] mobile:w-[60.93vw] upcomingBatches py-[2.222vh] px-[1.25vw]"
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
          <section
            className={`${page === "course" ? className : branchCard
              } flex flex-wrap`}
            key={index}
          >
            <div
              className={
                page === "branch"
                  ? { cardSize }
                  : "w-[20.46vw] mobile:w-[60.93vw] upcomingBatches py-[2.222vh] px-[1.25vw] mobile:px-[3.488vw] mobile:py-[1.717vh]"
              }
            >
              <header className="font-bold text-[1.25vw] pb-[0.833vh] mobile:text-[3.721vw] mobile:pb-[0.644vh]">
                {batch.course ? batch.course : batch.batchName}
              </header>
              <p className="font-normal text-[0.938vw] text-ash pb-[2.778vh] mobile:text-[2.791vw] mobile:pb-[2.146vh]">
                By: {batch.trainer ? batch.trainer : batch.trainerName}
              </p>
              <div className="flex mobile:pb-[1.073vh] pb-[1.389vh] gap-y-[0.469vw] items-center  justify-between">
                <div className={`${dateAndTime}`}>
                  <Svg
                    className=" pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                    width={svgicons.calender[0]}
                    height={svgicons.calender[1]}
                    viewBox={svgicons.calender[2]}
                    icon={svgicons.calender[3]}
                    color={svgicons.calender[4]}
                  />
                  <div className="mobile:text-[2.791vw]">{batch.date ? batch.date : `${convertDate(batch.startingDate)}-${convertDate(batch.endingDate)}`}</div>
                </div>
                <div className={`${dateAndTime}`}>
                  <Svg
                  className="mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                    width={svgicons.icontime[0]}
                    height={svgicons.icontime[1]}
                    viewBox={svgicons.icontime[2]}
                    icon={svgicons.icontime[3]}
                    color={svgicons.icontime[4]}
                  />
                  <div className="mobile:text-[2.791vw]">{batch.time ? batch.time : `${convertToIST(batch.startingTime)}-${convertToIST(batch.endingTime)}`}</div>
                </div>
              </div>
              <div className={`${dateAndTime} pb-[1.389vh] mobile:pb-[1.073vh]`}>
                <Svg
                  className=" pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                  width={svgicons.branchLocation[0]}
                  height={svgicons.branchLocation[1]}
                  viewBox={svgicons.branchLocation[2]}
                  icon={svgicons.branchLocation[3]}
                  color={svgicons.branchLocation[4]}
                />
                <div className="mobile:text-[2.791vw]">{batch.place ? batch.place : branchName}</div>
              </div>
              <div className={`${dateAndTime} pb-[1.389vh] mobile:pb-[1.073vh]`}>
                <Svg
                  className=" pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                  width={svgicons.calender[0]}
                  height={svgicons.calender[1]}
                  viewBox={svgicons.calender[2]}
                  icon={svgicons.calender[3]}
                  color={svgicons.calender[4]}
                />
                <div className="mobile:text-[2.791vw]">{batch.day ? batch.day : batch.batchType}</div>
              </div>
              <div className="flex justify-between">
                <button
                  className={`${enrollEnquire} EnrollButton bg-gradient rounded text-white`}
                >
                  Enroll Now
                </button>
                <button
                  className={`${enrollEnquire} EnquireButton rounded border border-orange-500 text-orange-500`}
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
};

export default OnlineLiveClasses;
