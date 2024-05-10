"use client";
import React, { useContext } from "react";
import "./IndividualBranches.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import { GlobalContext } from "@/components/Context/GlobalContext";
const IndividualBranches = () => {
  const { selectedBranch, setSelectedBranch } = useContext(GlobalContext);
  const params = useParams();
  const paramCity = params.offline;
  const navCities = [
    {
      city: "Bengalore",
      sublist: [
        {
          id:1,
          image: "../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:2,
          image: "../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:3,
          image: "../../uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:4,
          image: "../../testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:5,
          image: "../../performanceTest.svg",
          title: "Performance Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:6,
          image: "../../cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:7,
          image: "../../cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:8,
          image: "../../cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:9,
          image: "../../cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:10,
          image: "../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:11,
          image: "../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:12,
          image: "../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:13,
          image: "../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:14,
          image: "../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:15,
          image: "../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:16,
          image: "../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
      ],
    },
    {
      city: "Hyderabad",
      sublist: [
        {
          id:1,
          image: "../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:2,
          image: "../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:3,
          image: "../../uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:4,
          image: "../../testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:5,
          image: "../../performanceTest.svg",
          title: "Performance Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:6,
          image: "../../cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:7,
          image: "../../cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:8,
          image: "../../cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:9,
          image: "../../cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:10,
          image: "../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
      ],
    },
    { city: "Chennai" },
    { city: "Pune" },
    { city: "Mumbai" },
    { city: "Noida" },
    { city: "Gurugram" },
    { city: "NewDelhi" },
    { city: "Bhuvaneshwar" },
    { city: "Kolkata" },
    { city: "Ahmedabad" },
    { city: "Chandigarh" },
    { city: "Tirupati" },
    // { "city": "Kochi" },
    // { "city": "Mysore" },
    // { "city": "AllCities" }
  ];
  const selectedCity = navCities.find((city) => city.city === paramCity);
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[87.5vw] m-auto pt-3 pb-16">
        <div className="h-[2.65vw] flex cityNavbar">
          {navCities.map((ele, index) => (
            <Link
              href={{
                pathname: `/offlineBranches/${ele.city}`,
                query: { city: ele.city },
              }}
              replace
              className={`flex justify-center items-center w-[8.359vw] py-2  text-[0.75rem] ${
                ele.city === paramCity ? "activeCity" : ""
              }`}
            >
              <button key={index}>{ele.city}</button>
            </Link>
          ))}
        </div>
        <div className="pt-6">
          <p className="font-medium text-[0.75rem] text-[#4987CE]">
            Select Course to View our offline Centres
          </p>
        </div>
        <section className="w-[80vw] m-auto pt-3 flex flex-wrap gap-4">
          {selectedCity &&
            selectedCity?.sublist?.map((item, index) => (
              <Link href={{
                pathname: `/offlineBranches/${selectedCity.city}/offlineCentres/${item.id}`,
                query: { city: selectedCity.city },
              }} key={index} className="courseCard p-2">
                <div className="flex items-center gap-2">
                  <img src={item.image} alt={item.title} className="h-6 w-6" />
                  <h3 className="text-[0.75rem] text-[#454545] font-bold">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <article className="text-[#575757] text-[0.688rem] pt-4">
                    {item.description}
                  </article>
                </div>
              </Link>
            ))}
        </section>
      </section>
    </div>
  );
};

export default IndividualBranches;
