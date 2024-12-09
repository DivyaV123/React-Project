"use client";
import React, { useState } from "react";
import "./HirefromusLanding.scss";
import HiringModal from "./Modal/HiringModal";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
const FindingCandidates = () => {
  const { toast } = useToast();
  const cities = [
    { name: "Bangalore", image: "../../Icon_bangalore.png" },
    { name: "Hyderabad", image: "../../Icon_hydrebad.png" },
    { name: "Chennai", image: "../../Icon_chennai.svg" },
    { name: "Gurugram", image: "../../Icon_gurugram.png" },
    { name: "Mumbai", image: "../../Icon_mumbai.png" },
    { name: "New Delhi", image: "../../Icon_newdelhi.png" },
    { name: "Noida", image: "../../Icon_noida.png" },
    { name: "Pune", image: "../../Icon_pune.svg" },
    { name: "Bhubaneswar", image: "../../Icon_bhubaneswar.svg" },
    { name: "Kolkata", image: "../../Icon_kolkata.svg" },
    { name: "Ahmedabad", image: "../../Icon_ahmedabad.svg" },
    { name: "Chandigarh", image: "../../icon_chandiharh.svg" },
    { name: "Tirupati", image: "../../Icon_tirupati.svg" },
    { name: "Kochi", image: "../../Icon_kochi.svg" },
    { name: "Mysore", image: "../../Icon_mysore.svg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState("Hire From Us");

  const handleCardClick = (city) => {
    setSelectedCity(city);
    setIsModalOpen(true);
    setActiveTab("Hire From Us");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCity(null);
  };

  return (
    <section className="findingCandidate">
      <div className="city-selector container mx-auto p-4">
        <h2 className="text-center mt-8 mb-8">
          Hire Talents From Any Location
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 mobile:ml-0  card_candidate justify-items-center">
          {cities.map((city) => (
            <div
              key={city.name}
              className="city-card p-4 rounded text-center h-[200px] w-[180px] hover:bg-gray-200 cursor-pointer mobile:w-auto mobile:h-auto"
              onClick={() => handleCardClick(city)}
            >
              <div className="image mb-4 flex justify-center">
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
        toast={toast}
      />
          <Toaster/>
    </section>
  );
};

export default FindingCandidates;
