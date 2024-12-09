'use client'
import React from 'react'
import Image from 'next/image';

const CoveredSkills = () => {
    const skills = [
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Data Analysis"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "User-Centered Design"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Interaction Design"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Usability Testing"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Cognitive Psychology"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Accessibility"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Visual Design"
        },
        {
          icon: '../illustrate_tickmark.svg',
          skill: "Prototyping and Wireframing"
        }
      ];
      
  return (
    <article className="coveredSkills w-full">
    <section className='mobile:w-[92.558vw] m-auto  w-[87.5vw]'>
    <h2 className=" font-bold text-[1.406vw] border-l-4 border-orange-500 pl-[1vw] h-[34px] flex items-center mt-[6vh] mb-[4vh]" >Skills Covered</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image src={item.icon} alt={item.skill} width={24} height={24} />
            <span className=" text-[1.2vw] text-[#000000] font-normal ">{item.skill}</span>
          </div>
        ))}
      </section>
    </section>

    </article>
  )
}

export default CoveredSkills