'use client'
import React, { useState } from 'react'
import "./HirefromusLanding.scss";
import HiringModal from './Modal/HiringModal';
const domains = [
  { name: 'Software Developer', image: '../../developer.svg' },
  { name: 'UI/UX Designer', image: '../../designer.svg' },
  { name: 'DevOps', image: '../../devops.svg' }, 
  { name: 'Data Science', image: '../../data_science.svg' },
  { name: 'Project Management', image: '../../project-management.svg' },
  { name: 'Cyber Security', image: '../../cyber-security.svg' },
  { name: 'Support', image: '../../support_hire.svg' },
  { name: 'AI/ML', image: '../../AiML.svg' },
];
const DomainContainer = () => {
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
    <section className="domainContainer">
      <div className="domain-selector container mx-auto  p-4">
        <h2 className="text-center  mt-8 mb-8">Find our talents in different Domains</h2>
        <div className="grid grid-cols-2 md:grid-cols-4   domain_candidate">
          {domains.map((domain) => (
            <div onClick={() => handleCardClick(domain)} key={domain.name} className="domain-card p-4  rounded text-center h-[160px] w-[auto] hover:bg-gray-200 cursor-pointer">
              <div className="image mb-2 flex justify-center" >
                <img src={domain.image} alt={domain.name} className="h-[36px] mt-1 w-[36px] object-cover rounded" />
              </div>
              <div className="domainName relative top-7">{domain.name}</div>
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
  )
}

export default DomainContainer;