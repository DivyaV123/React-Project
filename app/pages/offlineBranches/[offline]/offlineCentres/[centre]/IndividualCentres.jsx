"use client";
import React, { useState } from "react";
import "./IndividualCentres.scss";
import "../../IndividualBranches.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import CommonBranch from "./CommonBranch";
const IndividualCentres = () => {
  const params = useParams();
  const paramCity = params.offline;
  const paramId = params.centre;
  const navCities = [
    {
      city: "Bengalore",
      sublist: [
        {
          id: 1,
          image: "../../../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
          branchCentre: [
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
          ],
        },
        {
          id: 2,
          image: "../../../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
          branchCentre: [
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
          ],
        },
        {
          id: 3,
          image: "../../../../uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 4,
          image: "../../../../testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:5,
          image: "../../../../performanceTest.svg",
          title: "Performance Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:6,
          image: "../../../../cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:7,
          image: "../../../../cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:8,
          image: "../../../../cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:9,
          image: "../../../../cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:10,
          image: "../../../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:11,
          image: "../../../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:12,
          image: "../../../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:13,
          image: "../../../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:14,
          image: "../../../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:15,
          image: "../../../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id:16,
          image: "../../../../advanceDataStructure.svg",
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
          id: 1,
          image: "../../../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
          branchCentre: [
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
            {
              branchName: "Basavangudi",
              description:
                "Lorem ipsum dolor sit amet consectetur. In a fermentum quis scelerisque id erat. Donec eu.",
              phone: "+91 86594 57896   |  +91 76592 78594",
              upComing: "5",
              onGoing: "5",
            },
          ],
        },
        {
          id: 2,
          image: "../../../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 3,
          image: "../../../../uiDesign.svg",
          title: "ui Design for Architects",
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
  ];

  const selectedCity = navCities?.find((city) => city.city === paramCity);
  const selectedId = selectedCity?.sublist?.find(
    (item) => String(item.id) === String(paramId)
  );
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[95vw] m-auto pt-3 pb-16">
        <div className="h-[2.65vw] flex cityNavbar">
          {navCities.map((ele, index) => (
            <Link
              href={{
                pathname: `/pages/offlineBranches/${ele.city}/offlineCentres/${1}`,
                query: { city: ele.city },
              }}
              replace
              className={`flex justify-center items-center w-[8.359vw] py-2  text-[0.75rem] 
              ${ele.city === paramCity ? "activeCity" : ""}`}
            >
              <button key={index}>{ele.city}</button>
            </Link>
          ))}
        </div>
        <section className="flex gap-5 h-[609px]">
          <div className="w-[20vw] mt-6  p-1 h-full overflow-y-scroll myscrollbar">
            {selectedCity &&
              selectedCity?.sublist?.map((item, index) => (
                <Link
                  href={{
                    pathname: `/pages/offlineBranches/${selectedCity.city}/offlineCentres/${item.id}`,
                    query: { city: selectedCity.city },
                  }}
                  replace
                  key={index}
                  className={`w-full pr-6 pl-4 py-3 flex items-center gap-2 ${
                    String(item.id) === String(paramId) ? "courseName" : ""
                  }`}
                >
                  <img src={item.image} alt={item.title} className="h-6 w-6" />
                  <h3
                    className={`text-[0.75rem] font-medium ${
                      String(item.id) === String(paramId)
                        ? "text-white"
                        : "text-[#454545]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </Link>
              ))}
          </div>          
          <CommonBranch selectedId={selectedId} />
        </section>
      </section>
    </div>
  );
};

export default IndividualCentres;
