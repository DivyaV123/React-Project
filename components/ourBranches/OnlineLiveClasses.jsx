import React from 'react'

const OnlineLiveClasses = () => {
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
  return (
    <>
    {upcomingBatchesData.map((batch, index) => (
              <section className="flex flex-wrap" key={index}>
                <div className="w-[20.46vw] upcomingBatches p-4">
                  <header className="font-bold text-base py-2">
                    {batch.course}
                  </header>
                  <p className="font-normal text-xs py-1">
                    By: {batch.trainer}
                  </p>
                  <div className="flex py-4 gap-1.5 items-center justify-between">
                    <div className="flex text-xs gap-1.5 items-center">
                      <img src="../Icon_calendar.svg" alt="calendar icon" />
                      <div>{batch.date}</div>
                    </div>
                    <div className="flex text-xs gap-1.5 items-center">
                      <img src="../Icon_time.svg" alt="time icon" />
                      <div>{batch.time}</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button className="py-2.5 px-3 w-[8.35vw] text-sm font-semibold EnrollButton">
                      Demo Class
                    </button>
                    <button className="w-[8.35vw] py-2.5 px-3 text-sm font-semibold EnquireButton">
                      Enquiry
                    </button>
                  </div>
                </div>
              </section>
            ))}
    </>
  )
}

export default OnlineLiveClasses