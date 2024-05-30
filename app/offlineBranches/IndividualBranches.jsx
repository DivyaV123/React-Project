"use client";
import React, { useContext } from "react";
import "./IndividualBranches.scss";
import { GlobalContext } from "@/components/Context/GlobalContext";
import { useRouter } from "next/navigation";
import { OFFLINE_CENTRES } from "@/lib/RouteConstants";
import Svg from "@/components/commonComponents/Svg/Svg";
import { svgicons } from "@/components/assets/icons/svgassets";
const IndividualBranches = () => {
  const router = useRouter();
  const { selectedBranch, setSelectedBranch, setSelectedCourseId } =
    useContext(GlobalContext);
  const navCities = [
    {
      city: "Bengalore",
      sublist: [
        {
          id: 1,
          image: "../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 2,
          image: "../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 3,
          image: "../../uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 4,
          image: "../../testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 5,
          image: "../../performanceTest.svg",
          title: "Performance Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 6,
          image: "../../cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 7,
          image: "../../cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 8,
          image: "../../cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 9,
          image: "../../cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 10,
          image: "../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 11,
          image: "../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 12,
          image: "../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 13,
          image: "../../advanceDevops.svg",
          title: "Advance Devops course for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 14,
          image: "../../securityTechArchitect.svg",
          title: "Security Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 15,
          image: "../../advanceDataStructure.svg",
          title: "Advance Data Structure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 16,
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
          id: 1,
          image: "../../systemDesign.svg",
          title: "System Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 2,
          image: "../../advanceSystemDesign.svg",
          title: "Advance System Design for Senior Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 3,
          image: "../../uiDesign.svg",
          title: "ui Design for Architects",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 4,
          image: "../../testAutomation.svg",
          title: "Test Automation Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 5,
          image: "../../performanceTest.svg",
          title: "Performance Test Architect",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 6,
          image: "../../cloudPlatform.svg",
          title: "Cloud Platform/Infra Architect-AWS,GCP & Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 7,
          image: "../../cloudSolutionAWS.svg",
          title: "Cloud Solution Architect-AWS",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 8,
          image: "../../cloudSolutionGCP.svg",
          title: "Cloud Solution Architect-GCP",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 9,
          image: "../../cloudSolutionArchitect.svg",
          title: "Cloud Solution Architect-Azure",
          description:
            "Software testing course is more of job oriented training which is designed",
        },
        {
          id: 10,
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
  const selectedCity = navCities.find((city) => city.city === selectedBranch);
  const handleCourseRoute = (e, course) => {
    e.preventDefault();
    router.push(`${OFFLINE_CENTRES}`);
    setSelectedCourseId(course);
  };
  return (
    <div className="w-full">
      <header className="offlineHeader">Our Offline Centres</header>
      <section className="citySection w-[87.5vw] m-auto pt-[1.667vh] pb-[8.889vh] ">
        <div className="flex items-center">

          {navCities.map((ele, index) => (
            <div
              onClick={() => setSelectedBranch(ele.city)}
              className={`cityNavbar flex justify-center items-center w-[8.359vw] py-[1.111vh]  text-[0.938vw] ${ele.city === selectedBranch ? "activeCity" : ""
                }`}
            >
              <button key={index}>{ele.city}</button>
            </div>
          ))}

        </div>

        <div className="pt-[3.333vh]">
          <p className="font-medium text-[0.938vw] text-[#4987CE]">
            Select Course to View our offline Centres
          </p>
        </div>
        <section className="w-[80vw] m-auto pt-[1.667vh] flex flex-wrap gap-4">
          {selectedCity &&
            selectedCity?.sublist?.map((course, index) => (
              <div
                onClick={(e) => handleCourseRoute(e, course.id)}
                key={index}
                className="courseCard  py-[1.111vh] px-[0.625vw] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[3.333vh] w-[1.875vw]"
                  />
                  <h3 className="text-[0.938vw] text-[#454545] font-bold">
                    {course.title}
                  </h3>
                </div>
                <div>
                  <article className="text-[#575757] text-[0.866vw] pt-[2.222vh]">
                    {course.description}
                  </article>
                </div>
              </div>
            ))}
        </section>
      </section>
    </div>
  );
};

export default IndividualBranches;
