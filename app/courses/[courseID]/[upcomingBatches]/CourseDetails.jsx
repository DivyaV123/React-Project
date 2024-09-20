"use client";
import React, { useState } from "react";
import Button from "@/components/commonComponents/button/Button";
import EnrollPopUp from "@/components/commonComponents/courseCard/EnrollPopUp";
const CourseDetails = ({selecteCourseDetails}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="px-[1.25vw] pt-[2.222vh] w-full bg-white h-[7.813vw] rounded-lg flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
          <p className="font-semibold text-[1.25vw]">
            {selecteCourseDetails?.courseName}
          </p>
          <section className="flex gap-10 pt-[2.222vh] pb-[3.611vh]">
          <div className="flex gap-1.5 items-center">
            <img src="../../icon_outline.png" />
            <p className="text-[#454545] font-medium text-[0.938vw]">Online</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="../../icon_user.svg" />
            <p className="text-[#454545] font-medium text-[0.938vw]">
              Rahul sing
            </p>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="../../Icon_cal.svg" />
            <p className="text-[#454545] font-medium text-[0.938vw]">
              Weekdays
            </p>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="../../Icon_ti.svg" />
            <p className="text-[#454545] font-medium text-[0.938vw]">
              10am - 12am
            </p>
          </div>
          <div className="flex gap-1.5 items-center">
            <img src="../../Icon_cal.svg" />
            <p className="text-[#454545] font-medium text-[0.938vw]">
              02 Jan - 30 Mar
            </p>
          </div>
        </section>
          </div>
          <Button
            title="Enroll now"
            onClick={() => handleClick()}
            className="courseCardBtn   text-[1.094vw] mobile:text-[2.791vw] text-[#f96900] font-semibold border border-orange-500 rounded-md"
          />
        </div>
       
      </section>
      <EnrollPopUp
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        cardData={selecteCourseDetails}
      />
    </>
  );
};

export default CourseDetails;
