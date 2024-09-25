'use client'
import React, { useEffect } from 'react'
import './IndividualCentres.scss'
import Image from 'next/image'
import Link from 'next/link'
const CommonBranch = ({ selectedId, page ,courseId}) => {
 
  useEffect(() => {
  }, [selectedId])
  function removeSpacesFromNumbers(phoneNumbers) {
    return phoneNumbers?.split(',')
      .map(number => number.replace(/\s+/g, '').trim())
      .join(', ');
  }
  return (
    <section className={` ${page === 'offlineBranches' ? ' w-full pl-[6%] py-2 pr-[2%] pt-[2%]  mobile:hidden overflow-x-scroll offlineScrollbar gap-6 flex' : "sm:w-[73.656vw] overflow-y-scroll myscrollbar flex  flex-wrap mobile:px-[1.395vw] sm:mt-6    mobile:flex-col sm:gap-4"}`}>
      {selectedId &&
        (selectedId?.branchDtos || selectedId?.branches)?.map((branch, branchIndex) => (
          <Link href={page === 'offlineBranches' ? `/branches/${branch.branchId}-branchId` : `/branches/${content.branchId}-branchId,${courseId}-courseId`}
            key={branchIndex}
            className={`cursor-pointer sm:w-[23.438vw] mobile:mt-[1.717vh] sm:h-[28.969vw] cardShawdow  p-3 flex flex-col justify-evenly  rounded-md ${page === 'offlineBranches' ? "flex-shrink-0 flex-wrap" : ""} `}
            
          >
            <Image
              src={branch.branchImage ? branch.branchImage : "/Frame 41334.png"}
              alt="Branch"
              height={400}
              width={500}
              style={{ height: "9.688vw", objectFit: "cover" }}
              className="object-cover"
            />
            <header className="text-[1.25rem] font-bold pt-3 mobile:pt-[1.288vh] mobile:text-[4.651vw]">
              {branch.branchName}
            </header>
            <div className="flex gap-3 pt-3 mobile:pt-[1.288vh]">
              <img
                src="../../../../icon_outline_location.svg"
                alt="Location"
              />
              <p className="text-[0.859vw] text-[#575757] mobile:text-[2.326vw]">
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
          </Link>
        ))}
    </section>

  )
}

export default CommonBranch