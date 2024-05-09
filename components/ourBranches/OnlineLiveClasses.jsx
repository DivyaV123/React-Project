import React from "react";
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
const OnlineLiveClasses = ({ className, page, branchCard, cardSize }) => {
  const upcomingBatchesData = [
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
    {
      course: "Advanced React",
      trainer: "shashi kunal",
      date: "02 Jan - 30 Mar",
      time: "10am - 12pm",
    },
  ];
  const enrollEnquire = "py-2.5 px-2.5 w-[8.359375vw] text-[0.875rem] font-semibold"
  const dateAndTime = "flex text-[0.75rem] font-medium text-dark-gray gap-1.5 items-center"
  return (
    <>
      {upcomingBatchesData.map((batch, index) => (
        <section
          className={`${page === "course" ? className : branchCard} flex flex-wrap`}
          key={index}
        >
          <div className={page === 'branch' ? { cardSize } : "w-[20.46vw] upcomingBatches p-3"}>
            <header className="font-bold text-base py-2">{batch.course}</header>
            <p className="font-normal text-[0.75rem] text-ash py-1">By: {batch.trainer}</p>
            <div className="flex py-4 gap-1.5 items-center  justify-between">
              <div className={`${dateAndTime}`}>
                <Svg
                  className='p-1'
                  width={svgicons.calender[0]}
                  height={svgicons.calender[1]}
                  viewBox={svgicons.calender[2]}
                  icon={svgicons.calender[3]}
                  color={svgicons.calender[4]}
                />
                <div>{batch.date}</div>
              </div>
              <div className={`${dateAndTime}`}>
                <Svg
                  width={svgicons.icontime[0]}
                  height={svgicons.icontime[1]}
                  viewBox={svgicons.icontime[2]}
                  icon={svgicons.icontime[3]}
                  color={svgicons.icontime[4]}
                />
                <div>{batch.time}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className={`${enrollEnquire} EnrollButton bg-gradient rounded text-white`}>
                Demo Class
              </button>
              <button className={`${enrollEnquire} EnquireButton rounded border border-orange-500 text-orange-500`}>
                Enquiry
              </button>
            </div>
          </div>
        </section >
      ))}
    </>
  );
};


export default OnlineLiveClasses;
