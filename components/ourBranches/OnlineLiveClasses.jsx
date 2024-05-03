import React from "react";

const OnlineLiveClasses = ({ className, page }) => {
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
  const enrollEnquire = "py-2.5 px-2.5 w-[8.359375vw] text-[0.875rem] font-semibold";
  const dateAndTime="flex text-[0.75rem] font-medium text-dark-gray gap-1.5 items-center"
  return (
    <>
      {upcomingBatchesData.map((batch, index) => (
        <section
          className={`${page === "course" ? className : ""} flex flex-wrap`}
          key={index}
        >
          <div className="w-[20.46vw] upcomingBatches p-3">
            <header className="font-bold text-base py-2">{batch.course}</header>
            <p className="font-normal text-[0.75rem] text-ash py-1">By: {batch.trainer}</p>
            <div className="flex py-4 gap-1.5 items-center  justify-between">
              <div className={`${dateAndTime}`}>
                <img src="../Icon_calendar.svg" alt="calendar icon" />
                <div>{batch.date}</div>
              </div>
              <div className={`${dateAndTime}`}>
                <img src="../Icon_time.svg" alt="time icon" />
                <div>{batch.time}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <button className={`${enrollEnquire} EnrollButton`}>
                Demo Class
              </button>
              <button className={`${enrollEnquire} EnquireButton`}>
                Enquiry
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default OnlineLiveClasses;
