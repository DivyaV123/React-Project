import React from 'react'
import './programDescription.scss'
const ProgramFees = () => {
    const programFeesData  ={
        "onlineFee": {
          "duration": "8 month Online fee",
          "amount": "INR 4,50,000"
        },
        "onCampusFee": {
          "duration": "12 months On-campus fee (in USD)",
          "amount": "USD 22,228"
        },
        "note": "Subject to advance exchange rate changes and university fees"
      }
      const ProgramFees = ({ onlineFee, onCampusFee, note }) => {
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-[2.3vw] font-bold mb-8">Program Fees</h1>
            <div className="border-2 h-[19.444vh] mobile:block mobile:h-auto bg-[#F9F9F9] border-orange-500 rounded-lg p-6 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex mb-4">
                  <div className="flex-1">
                    <p className=" font-bold">{onlineFee.duration}</p>
                    <p className="text-gray-700">{onlineFee.amount}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">{onCampusFee.duration}</p>
                    <p className="text-gray-700">{onCampusFee.amount}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{note}</p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold">Apply now</button>
                <button className="border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg font-semibold">Contact us</button>
              </div>
            </div>
          </div>
        );
      };
      
      
  return (
    <div className='programFees w-full'>
    <section className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
    <ProgramFees 
      onlineFee={programFeesData.onlineFee} 
      onCampusFee={programFeesData.onCampusFee} 
      note={programFeesData.note} 
    />
    <div className="container mx-auto p-4 ">
            <h1 className="text-[2.3vw] font-bold mb-8">Batch Start date</h1>
            <div className="batchContainer mobile:flex-col  p-6 flex items-center justify-between">
              <div className="flex-1">
                <p className="flex text-[1.8vw] text-[#000000] font-bold">
                September 2024
                </p>
                
              </div>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold">Apply now</button>
                <button className="border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg font-semibold">Contact us</button>
              </div>
            </div>
          </div>
    </section>

  </div>
  )
}

export default ProgramFees