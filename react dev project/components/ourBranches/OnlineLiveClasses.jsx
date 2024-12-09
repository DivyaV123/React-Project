import React, { useEffect, useState } from "react";
import Svg from "../commonComponents/Svg/Svg";
import { svgicons } from "../assets/icons/svgassets";
import { Skeleton } from "../ui/skeleton";
import { truncateText } from "@/lib/utils";
import EnrollPopUp from "../commonComponents/courseCard/EnrollPopUp";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { usePathname ,useSearchParams} from "next/navigation";
const OnlineLiveClasses = ({
  className,
  page,
  branchCard,
  cardSize,
  branchesData,
  branchName,
  branchCourseData,
  branchId,
}) => {
  const [isloading, setisLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({});
  const pathname = usePathname();
  const params = pathname.split("/").pop();
  const digitIds = params.match(/\b\d+\b/g);

  
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}?${searchParams.toString()}`
 
  
  function extractValues(pathname) {
    const branchIdMatch = pathname.match(/(\d+)-branchId/);
    const courseIdMatch = pathname.match(/(\d+)-courseId/);
   
   
    const courseID = courseIdMatch ? courseIdMatch[1] : null;

    return {  courseID };
}
const { courseID } = extractValues( fullUrl);


  const { toast } = useToast();
  const upcomingBatchesData =
    branchesData?.length > 0
      ? branchesData
      : [
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
    "flex text-[0.938vw] font-medium text-[#454545] gap-x-[0.469vw] items-center";

  function convertToIST(timeString) {
    let [hours, minutes] = timeString?.split(":")?.map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let formattedTime = hours?.toString()?.padStart(2, "0");
    return `${formattedTime} ${period}`;
  }

  function convertDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
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
  function extractCourseName(branchCourseData, courseID) {
    const foundCourse = branchCourseData.find(
      (course) => course.courseId == courseID
    );
    return foundCourse?.courseName || null;
  }
  const handleCardClick = (data) => {
    const courseName = extractCourseName(branchCourseData, courseID);

    setCardDetails({ ...data, courseName, courseId: Number(courseID) });
    // setCardDetails(data)
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {upcomingBatchesData.map((batch, index) => {
        let formattedStartDate = null;
        let formattedStartTime = null;
        let formattedEndTime = null;

        if (batch.startingDatetime) {
          const startDate = new Date(batch.startingDatetime);
          const endDate = new Date(startDate);
          endDate.setMonth(endDate.getMonth() + 2);
          const endTime = new Date(endDate);
          endTime.setHours(endTime.getHours() + 2);

          formattedStartDate = startDate.toISOString().split("T")[0];
          formattedStartTime = startDate
            .toTimeString()
            .split(" ")[0]
            .slice(0, 5);
          formattedEndTime = endTime.toTimeString().split(" ")[0].slice(0, 5);
        }

        const renderBatchCard = () => (
          <div
            className={
              page === "branch"
                ? { cardSize }
                : "w-[20.46vw] mobile:w-[60.93vw] upcomingBatches py-[2.222vh] px-[1.25vw] mobile:px-[3.488vw] mobile:py-[1.717vh]"
            }
          >
            <header
              title={batch.course ? batch.course : batch.batchName}
              className="font-bold text-[1.25vw] pb-[0.833vh] mobile:text-[3.721vw] mobile:pb-[0.644vh]"
            >
              {batch.course
                ? truncateText(batch.course, 22)
                : truncateText(batch.batchName, 22)}
            </header>
            <p className="font-normal text-[0.938vw] text-ash pb-[2.778vh] mobile:text-[2.791vw] mobile:pb-[2.146vh]">
              By: {batch.trainer ? batch.trainer : batch.trainerName}
            </p>
            {formattedStartDate && (
              <div className="flex mobile:pb-[1.073vh] pb-[1.389vh] gap-x-[0.469vw] items-center justify-between">
                <div className={`${dateAndTime}`}>
                  <Svg
                    className="pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                    width={svgicons.calender[0]}
                    height={svgicons.calender[1]}
                    viewBox={svgicons.calender[2]}
                    icon={svgicons.calender[3]}
                    color={svgicons.calender[4]}
                  />
                  <div className="mobile:text-[2.791vw]">
                    {formattedStartDate}
                  </div>
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
                  <div className="mobile:text-[2.791vw]">{`${formattedStartTime}-${formattedEndTime}`}</div>
                </div>
              </div>
            )}
            <div className={`${dateAndTime} pb-[1.389vh] mobile:pb-[1.073vh]`}>
              <Svg
                className="pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                width={svgicons.branchLocation[0]}
                height={svgicons.branchLocation[1]}
                viewBox={svgicons.branchLocation[2]}
                icon={svgicons.branchLocation[3]}
                color={svgicons.branchLocation[4]}
              />
              <div className="mobile:text-[2.791vw]">
                {batch.place ? batch.place : branchName}
              </div>
            </div>
            <div className={`${dateAndTime} pb-[1.389vh] mobile:pb-[1.073vh]`}>
              <Svg
                className="pr-[0.469vw] mobile:pr-[1.395vw] mobile:w-[4.186vw] mobile:height-[1.931vh]"
                width={svgicons.calender[0]}
                height={svgicons.calender[1]}
                viewBox={svgicons.calender[2]}
                icon={svgicons.calender[3]}
                color={svgicons.calender[4]}
              />
              <div className="mobile:text-[2.791vw]">
                {batch.day ? batch.day : batch.batchType}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleCardClick(batch)}
                className={`${enrollEnquire} EnrollButton bg-gradient rounded text-white`}
              >
                Enroll now
              </button>
              <button
                className={`${enrollEnquire} EnquireButton rounded border border-orange-500 text-orange-500`}
              >
                Know more
              </button>
            </div>
          </div>
        );


        return (
          <section
            className={`${
              page === "course" ? className : branchCard
            } flex flex-wrap`}
            key={index}
          >
            {renderBatchCard()}
          </section>
        );
      })}

      <EnrollPopUp
        isModalOpen={isModalOpen}
        branchId={branchId}
        toast={toast}
        cardData={cardDetails}
        handleCloseModal={handleCloseModal}
      />
      <Toaster />
    </>
  );
};

export default OnlineLiveClasses;
