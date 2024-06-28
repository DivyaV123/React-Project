'use client'
import React, { useEffect } from 'react'
import './IndividualCentres.scss'
const CommonBranch = ({ selectedId, page }) => {
  console.log(selectedId, page, "selectedIdselectedId")
  useEffect(() => {
  }, [selectedId])
  function removeSpacesFromNumbers(phoneNumbers) {
    return phoneNumbers.split(',')
      .map(number => number.replace(/\s+/g, '').trim())
      .join(', ');
  }
  return (
    <section className={` mt-6 mobile:hidden  flex  gap-4  ${page === 'offlineBranches' ? ' w-full pl-[6%] py-2 h-full overflow-x-scroll offlineScrollbar' : "w-[73.656vw] overflow-y-scroll myscrollbar h-full flex-wrap"}`}>
      {selectedId &&
        selectedId?.branches?.map((branch, branchIndex) => (
          <div
            key={branchIndex}
            className={` w-[23.438vw] h-[26.875vw] p-2 courseSidebar rounded-md ${page === 'offlineBranches' ? "flex-shrink-0" : ""} `}
          >
            <img
              src={branch.branchImage ? branch.branchImage : "../../../../Frame 41334.png"}
              alt="Branch"
              className="w-full h-[17.222vh] object-cover"
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
                {[
                  branch?.street,
                  branch?.city,
                  branch?.state,
                  branch?.pincode
                ].filter(Boolean).join(' ')}
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../icon_call.svg" alt="Phone" />
              <p className="text-[0.75rem] text-[#107BD4] font-medium">
                {removeSpacesFromNumbers(branch.phoneNumber)}
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../Icon_time2.svg" alt="Upcoming" />
              <p className="text-[0.75rem] text-[#454545] font-medium">
                {branch.upcomingBatches} Upcoming Batches
              </p>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="../../../../Icon_time2.svg" alt="Ongoing" />
              <p className="text-[0.75rem] text-[#454545] font-medium">
                {branch.ongoingBatches} Ongoing Batches
              </p>
            </div>
          </div>
        ))}
    </section>
  )
}

export default CommonBranch