'use client'
import React, { useEffect } from 'react'
import './IndividualCentres.scss'
const CommonBranch = ({ selectedId, page }) => {
  useEffect(() => {
  }, [selectedId])

  return (
    <section className={` mt-6  flex  gap-4  ${page === 'offlineBranches' ? ' w-full pl-[6%] py-2 h-full overflow-x-scroll offlineScrollbar' : "w-[73.656vw] overflow-y-scroll myscrollbar h-full flex-wrap"}`}>
      {selectedId &&
        selectedId?.branchCentre?.map((branch, branchIndex) => (
          <div
            key={branchIndex}
            className={` w-[23.438vw] h-[26.875vw] p-2 courseSidebar rounded-md ${page === 'offlineBranches' ? "flex-shrink-0" : ""} `}
          >
            <img
              src="../../../../Frame 41334.png"
              alt="Branch"
              className="w-full"
            />
            <header className="text-[1.25rem] font-bold pt-3">
              {branch.branchName}
            </header>
            <div className="flex gap-3 pt-3">
              <img
                src="../../../../icon_outline_location.svg"
                alt="Location"
              />
              <p className="text-[0.625rem] text-[#575757]">
                {branch.description}
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../icon_call.svg" alt="Phone" />
              <p className="text-[0.75rem] text-[#107BD4] font-medium">
                {branch.phone}
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../Icon_time2.svg" alt="Upcoming" />
              <p className="text-[0.75rem] text-[#454545] font-medium">
                {branch.upComing} Upcoming Batches
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../Icon_time2.svg" alt="Ongoing" />
              <p className="text-[0.75rem] text-[#454545] font-medium">
                {branch.onGoing} Ongoing Batches
              </p>
            </div>
          </div>
        ))}
    </section>
  )
}

export default CommonBranch