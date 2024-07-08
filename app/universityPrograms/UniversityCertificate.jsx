'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const UniversityCertificate = () => {
    
    const data = [
        {
          title: "Master's in Human Computer Interaction",
          description: "Master of Science in Computer Science. Upon completion of this program, you are universally rewarded with this prestigious degree.",
          certificates: [
            {
              image: '/dummyCertificate.png ',
              text: "Harvard Business School reported that 95% of its MBA graduates received job offers within three months of graduation in 2023"
            },
            {
              image: '/dummyCertificate.png ',
              text: "The median starting salary for Harvard MBA graduates in 2023 was $150,000"
            }
          ]
        }
      ];
      
  return (
    <div className="UniversityCertificate w-full">
        <section className="mobile:w-[92.558vw] m-auto  w-[87.5vw]">
        <header className="text-[2.5vw]  flex font-bold  justify-start mt-[6.111vh]">Master’s in Human Computer Interaction</header>
        <section className="p-8 certificateContainer">
      {data.map((item, index) => (
        <section key={index} className="mb-2.5">
          
          <span className="text-[1.094vw] text-[#575757] font-medium relative top-2 mb-6">{item.description}</span>
          <section className="flex justify-center gap-8">
            {item.certificates.map((certificate, certIndex) => (
              <section key={certIndex} className="w-full  flex flex-col items-center">
                <Image
                  src={certificate.image}
                  alt={`Certificate ${certIndex + 1}`}
                  width={427}
                  height={302}
                  className="mb-4 rounded-lg shadow-lg mt-[5.944vh]"
                />
                <span className="text-[1.094vw] text-[#575757] font-medium  text-center mt-[2vh]">{certificate.text}</span>
              </section>
            ))}
          </section>
        </section>
      ))}
    </section>
        </section>
    </div>
  )
}

export default UniversityCertificate