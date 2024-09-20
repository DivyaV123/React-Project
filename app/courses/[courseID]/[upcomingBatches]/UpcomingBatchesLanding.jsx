"use client";
import React, { useContext, useState } from "react";
import Dropdown from "@/components/commonComponents/dropdown/Dropdown";
import "./upComingBranches.scss";
import SendRequestForm from "./SendRequestForm";
import CourseDetails from "./CourseDetails";
import BranchWithFilter from "./BranchWithFilter";
import { GlobalContext } from "@/components/Context/GlobalContext";
const UpcomingBatchesLanding = () => {
  const [modeOfClass, setModeOfClass] = useState("Online");
  const upComingSchedule = ["Weekday", "Weekend", "Online", "Offline"];
  const {selecteCourseDetails} =
  useContext(GlobalContext);
 
  return (
    <>
      <section className="w-[87.5vw] m-auto mobile:w-[92.558vw]">
        <article className="font-bold text-[1.875vw] sm:pt-[4.444vh] sm:pb-[2.222vh] mobile:text-[3.721vw] ">
          Schedule for {selecteCourseDetails.courseName}
        </article>
        <section className="flex gap-3 py-[2.222vh]">
          {upComingSchedule.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  onClick={() => setModeOfClass(item)}
                  className={`px-[1.25vw] text-[1.094vw] font-semibold  py-[1.667vh] border border-[#D9D9D9] rounded-lg ${modeOfClass===item ? "selectedType" : "text-[#454545]"}`}
                >
                  {item}
                </button>
              </>
            );
          })}

          <Dropdown
            className="border border-[#D9D9D9] rounded-lg py-[1.667vh] "
            placeholder="Time Slots"
            value=""
            sectionStyle="dropdowns text-[1.094vw] font-semibold text-[#454545]"
          />
          <Dropdown
            className="border border-[#D9D9D9] rounded-lg py-[1.667vh] "
            placeholder="July"
            value=""
            sectionStyle="dropdowns text-[1.094vw] font-semibold text-[#454545]"
          />
        </section>
      </section>
      <section className="bg-[#F9F9F9]">
        <div className="w-[87.5vw] m-auto py-[3.333vh] flex gap-6">
          {modeOfClass === "Online" ? (
            <>
              <SendRequestForm />
            </>
          ) : (
            <>
              <BranchWithFilter />
            </>
          )}

          <CourseDetails selecteCourseDetails={selecteCourseDetails}/>
        </div>
      </section>
    </>
  );
};

export default UpcomingBatchesLanding;
