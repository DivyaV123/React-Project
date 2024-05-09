import React from 'react'
import './IndividualCentres.scss'
const CommonBranch = ({selectedId}) => {
  return (
    <section className="w-[73.656vw] mt-6  flex flex-wrap gap-4 h-full overflow-y-scroll myscrollbar">
    {selectedId &&
      selectedId?.branchCentre?.map((branch, branchIndex) => (
        <div
          key={branchIndex}
          className="branchCard w-[23.438vw] h-[344px] p-2 courseSidebar rounded-md"
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