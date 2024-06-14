'use client'
import React from 'react'
import "./HirefromusLanding.scss";

const FindingCandidates = () => {
  const cities = [
    { name: 'Bangalore', image: '../../Icon_bangalore.png' },
    { name: 'Hyderabad', image:  '../../Icon_hydrebad.png' },
    { name: 'Chennai', image:  '../../Icon_chennai.png' },
    { name: 'Mumbai', image: '../../Icon_mumbai.png' },
    { name: 'New Delhi', image: '../../Icon_newdelhi.png' },
    { name: 'Noida', image: '../../Icon_noida.png' },
    { name: 'Gurugram', image: '../../Icon_gurugram.png'},
  ];

  return (
    <section className="findingCandidate">
    <div className="city-selector container mx-auto  p-4">
      <h2 className="text-center  mt-8 mb-8">Find Candidates In Your Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4  ml-[130px] card_candidate">
        {cities.map((city) => (
          <div key={city.name} className="city-card p-4  rounded text-center h-[200px] w-[180px] hover:bg-gray-200 cursor-pointer">
          <div className="image mb-2 flex justify-center" >
                <img src={city.image} alt={city.name} className="h-[120px] mt-1 w-[120px] object-cover rounded" />
              </div>
              <div className="cityName">{city.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FindingCandidates