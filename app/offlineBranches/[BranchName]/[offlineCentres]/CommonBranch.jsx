'use client'
import React, { useEffect } from 'react'
import './IndividualCentres.scss'
const CommonBranch = ({ selectedId, page }) => {
  useEffect(() => {
  }, [selectedId])
  function removeSpacesFromNumbers(phoneNumbers) {
    return phoneNumbers.split(',')
      .map(number => number.replace(/\s+/g, '').trim())
      .join(', ');
  }
  return (
    <section className={`${page === 'offlineBranches' ? ' w-full pl-[6%] py-2  mobile:hidden overflow-x-scroll offlineScrollbar' : "sm:w-[73.656vw] overflow-y-scroll myscrollbar h-full flex-wrap mobile:px-[1.395vw] sm:mt-6 courseSidebar  flex mobile:flex-col sm:gap-4"}`}>
      {selectedId &&
        selectedId?.branches?.map((branch, branchIndex) => (
          <div
            key={branchIndex}
            className={` sm:w-[20.469vw] mobile:mt-[1.717vh]  p-2  rounded-md ${page === 'offlineBranches' ? "flex-shrink-0 h-[58vh] flex-wrap" : "courseSidebar"} `}
          >
            <img
              src={branch.branchImage ? branch.branchImage : "../../../../Frame 41334.png"}
              alt="Branch"
              className="w-full h-[9.688vw] mobile:h-[15.451vh] object-cover"
            />
            <header className="text-[1.25rem] font-bold pt-3 mobile:pt-[1.288vh] mobile:text-[4.651vw]">
              {branch.branchName}
            </header>
            <div className="flex gap-3 pt-3 mobile:pt-[1.288vh]">
              <img
                src="../../../../icon_outline_location.svg"
                alt="Location"
              />
              <p className="text-[0.625rem] text-[#575757] mobile:text-[2.326vw]">
                {[
                  branch?.street,
                  branch?.city,
                  branch?.state,
                  branch?.pincode
                ].filter(Boolean).join(' ')}
              </p>
            </div>
            <div className="flex gap-3 pt-3 mobile:pt-[1.288vh]">
              <img src="../../../../icon_call.svg" alt="Phone" />
              <p className="text-[0.75rem] text-[#107BD4] font-medium mobile:text-[2.791vw]">
                {removeSpacesFromNumbers(branch.phoneNumber)}
              </p>
            </div>
            <div className="flex gap-3 pt-3 mobile:pt-[1.288vh]">
              <img src="../../../../Icon_time2.svg" alt="Upcoming" />
              <p className="text-[0.75rem] text-[#454545] font-medium mobile:text-[2.791vw]">
                {branch.upcomingBatches} Upcoming Batches
              </p>
            </div>
            <div className="flex gap-3 pt-3 mobile:pt-[1.288vh]">
              <img src="../../../../Icon_time2.svg" alt="Ongoing" />
              <p className="text-[0.75rem] text-[#454545] font-medium mobile:text-[2.791vw]">
                {branch.ongoingBatches} Ongoing Batches
              </p>
            </div>
          </div>
        ))}
    </section>

  )
}

export default CommonBranch