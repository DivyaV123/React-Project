import React from 'react';
import Image from 'next/image';

const EligibilityCriteria = () => {
 const criteria= [
    {
      "text": "Must hold a Bachelor's degree with an average of 50% or higher marks",
      "icon": "../illustrate_tickmark.svg"
    },
    {
      "text": "Don't need to have prior work experience in any domain",
      "icon": "../illustrate_tickmark.svg"
    },
    {
      "text": "Don't need prior coding experience or technology foundation",
      "icon": "../illustrate_tickmark.svg"
    }
  ]
  
  return (
    <div className='eligibilityCriteria w-full '>
    <section className='mobile:w-[92.558vw] m-auto  w-[87.5vw]'>

    <div className="container mx-auto p-4">
            <h1 className="text-[2.3vw] font-bold mb-8">Eligibility Criteria</h1>
            <div className="criteriacontainer h-[38.889vh] bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-lg shadow-lg">
        <p className="mb-4 mt-[2vh] px-[1vw] text-[#575757]  font-medium">
          To be eligible for this Master's in Computer Science program, candidates:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[83vw] mt-[6vh] px-[1vw]">
          {criteria.map((item, index) => (
            <div
              key={index}
              className='flex items-center'
            >
              <Image src={item.icon} alt={item.icon} width={24} height={24} />
              <p className=' leading-[3vh] text-[1.07vw] text-[#575757] font-normal pl-[1vw] text-nowrap'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
          </div>
    </section>
    </div>
  )
}

export default EligibilityCriteria