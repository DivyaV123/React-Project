import MaxWebWidth from '@/components/commonComponents/maxwebWidth/maxWebWidth'
import OnlineLiveClasses from '@/components/ourBranches/OnlineLiveClasses'
import React from 'react'

function UpCommingBatches() {
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
                <OnlineLiveClasses page='course' className='border m-2 rounded shadow shadow-gray-500/50' />
            </MaxWebWidth>
            <MaxWebWidth>
                <div className="flex justify-end pt-4">
                    <button className="w-[9.37vw] bg-gradient rounded text-white py-2 px-4.5 text-sm font-semibold EnrollButton">
                        View More
                    </button>
                </div>
            </MaxWebWidth>
        </>
    )
}

export default UpCommingBatches