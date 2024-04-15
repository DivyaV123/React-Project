'use client'
import React from 'react'
import MaxWebWidth from '../commonComponents/maxwebWidth/maxWebWidth'
import { Slide } from 'react-reveal'

function HiringPartners() {
  const logos = [
    './compLogo01.svg', './compLogo02.svg', './compLogo03.svg', './compLogo-04.svg', './compLogo06.svg', './compLogo05.svg', './compLogo07.svg', './compLogo01.svg', './compLogo02.svg', './compLogo03.svg', , './compLogo03.svg', './compLogo-04.svg', './compLogo06.svg', './compLogo05.svg', './compLogo07.svg',
  ]

  const oddLogos = logos.filter((_, index) => index % 2 === 0); // Array of odd-indexed logos
  const evenLogos = logos.filter((_, index) => index % 2 !== 0);

  return (
    <MaxWebWidth sectionStyling='bg-[#FEF2E7] overflow-hidden w-full'>
      <header>
        <h1 className='flex justify-center aligen-center font-bold text-2xl pt-4'>
          Our Hiring Pertners
        </h1>
      </header>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-center">
          {/* Display odd-indexed logos in the first line */}
          {oddLogos.map((logo, index) => (
            <figure key={index} className="flex-shrink-0 m-3">
              <img src={logo} alt={`logo-${index}`} />
            </figure>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {/* Display even-indexed logos in the second line */}
          {evenLogos.map((logo, index) => (
            <figure key={index} className="flex-shrink-0 m-3">
              <img src={logo} alt={`logo-${index}`} />
            </figure>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {/* Display odd-indexed logos in the first line */}
          {logos.map((logo, index) => (
            <figure key={index} className="flex-shrink-0 m-3">
              <img src={logo} alt={`logo-${index}`} />
            </figure>
          ))}
        </div>
      </div>
    </MaxWebWidth>
  )
}

export default HiringPartners