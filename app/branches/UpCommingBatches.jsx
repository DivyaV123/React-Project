import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import OnlineLiveClasses from '@/components/ourBranches/OnlineLiveClasses'
import React from 'react'

function UpCommingBatches({ branchesData, branchName }) {
    return (
        <>
            <MaxWebWidth>
                <header>
                    <h1 className='font-bold text-[2rem] pb-5'>
                        Upcoming Batches
                    </h1>
                </header>
            </MaxWebWidth>
            <MaxWebWidth sectionStyling='pb-5' articalStyling='flex flex-wrap'>
                <OnlineLiveClasses branchName={branchName} branchesData={branchesData} page='course' className='border m-2 rounded shadow shadow-gray-500/50' />
            </MaxWebWidth>
            <MaxWebWidth>
                <div className="flex justify-end pt-4">
                    <button className=" bg-gradient rounded text-white py-[1.111vh] px-[1.406vw] text-sm font-semibold EnrollButton">
                        View More
                    </button>
                </div>
            </MaxWebWidth>
        </>
    )
}

export default UpCommingBatches