'use client'
import React, { useState } from 'react';
import "./HirefromusLanding.scss";
import HiringModal from './Modal/HiringModal';

const FindingCandidates = () => {
  const cities = [
    { name: 'Bangalore', image: '../../Icon_bangalore.png' },
    { name: 'Hyderabad', image:  '../../Icon_hydrebad.png' },
    { name: 'Chennai', image:  '../../Icon_chennai.png' },
    { name: 'Mumbai', image: '../../Icon_mumbai.png' },
    { name: 'New Delhi', image: '../../Icon_newdelhi.png' },
    { name: 'Noida', image: '../../Icon_noida.png' },
    { name: 'Gurugram', image: '../../Icon_gurugram.png'},
    { name: 'Pune', image: '../../Icon_pune.svg'},
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('Hire From Us');

  const handleCardClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
    setActiveTab('Hire From Us');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  return (
    <section className="findingCandidate">
      <div className="city-selector container mx-auto p-4">
        <h2 className="text-center mt-8 mb-8">Hire Talents From Any Location</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 mobile:ml-0  card_candidate justify-items-center">
          {cities.map((city) => (
            <div
              key={city.name}
              className="city-card p-4 rounded text-center h-[200px] w-[180px] hover:bg-gray-200 cursor-pointer mobile:w-auto mobile:h-auto"
              onClick={() => handleCardClick(city)}
            >
              <div className="image mb-2 flex justify-center">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-[120px] mt-1 w-[120px] object-cover rounded"
                />
              </div>
              <div className="cityName">{city.name}</div>
            </div>
          ))}
        </div>
      </div>

      <HiringModal
        isModalOpen={isModalOpen}
        selectedCity={selectedCity}
        activeTab={activeTab}
        handleCloseModal={handleCloseModal}
        setActiveTab={setActiveTab}
      />
    </section>
  );
};

export default FindingCandidates;
