"use client";
import React, { useState } from "react";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import TrainingMode from "./trainingMode/trainingMode";
import Slide from "react-reveal/Slide";
import Button from "../commonComponents/button/Button";
import OnlineLiveClasses from "./OnlineLiveClasses";
import Link from "next/link";
import { useRouter } from "next/navigation";
function OurBranchesHome({ page }) {
  const router = useRouter();
  const branchCards = [
    { path: "./images/Bengalore.png", city: "Bengalore" },
    { path: "./images/HydrabadCard.png", city: "Hyderabad" },
    { path: "./images/ChennaiCard.png", city: "Chennai" },
    { path: "./images/puneCard.png", city: "Pune" },
    { path: "./images/MumbaiCard.png", city: "Mumbai" },
    { path: "./images/NoidaCard.png", city: "Noida" },
    { path: "./images/gurugramCard.png", city: "Gurugram" },
    { path: "./images/NewDelhiCard.png", city: "NewDelhi" },
    { path: "./images/BuvaneshwarCard.png", city: "Bhuvaneshwar" },
    { path: "./images/KolkataCard.png", city: "Kolkata" },
    { path: "./images/AmehabadCard.png", city: "Ahmedaabad" },
    { path: "./images/ChandigarhCard.png", city: "Chandigarh" },
    { path: "./images/TirupatiCard.png", city: "Tirupati" },
    { path: "./images/KochiCard.png", city: "Kochi" },
    { path: "./images/MysoreCard.png", city: "Mysore" },
    { path: "./images/AllCitiesCard.png", city: "AllCities" },
  ];

  const [btnState, setBtnState] = useState("OfflineClasses");
  const btnHoverClass =
    "font-semibold bg-orange-500 bg-gradient text-white rounded";

  if (page === "course") {
    branchCards.pop();
  }
  const handleImageRoute = (e, city) => {
    e.preventDefault();
    if (page !== "course" && city !== "AllCities") {
      router.push(`/offlineBranches/${city}`);
    } else if (page === "course") {
      router.push("/courses/upcommingBatches");
    } else if (page !== "course" && city === "AllCities") {
      router.push("/combinedBranches");
    }
  };
  return (
    <>
      <MaxWebWidth sectionStyling="pb-8">
        <section>
          <header>
            {page === "course" ? (
              <article className="flex justify-between w-[51.56vw]">
                <h1 className="flex justify-start text-[1.5rem] m-2 font-bold py-5">
                  Upcoming Batches
                </h1>
                <article className="flex bg-white m-2 py-5">
                  <Button
                    className={
                      btnState === "OfflineClasses"
                        ? "font-semibold bg-orange-500 bg-gradient text-white w-[9.609vw] rounded h-[2.656vw] bg-[#F9F9F9] text-[0.75rem]"
                        : "w-[9.609vw] rounded-s h-[2.656vw] bg-[#F9F9F9] text-[0.75rem] text-dark-gray font-medium"
                    }
                    onClick={() => {
                      setBtnState("OfflineClasses");
                    }}
                    title="Offline Classes"
                  ></Button>
                  <Button
                    onClick={() => {
                      setBtnState("OnlineLiveClasses");
                    }}
                    className={
                      btnState === "OnlineLiveClasses"
                        ? "font-semibold bg-orange-500 text-white w-[11.484vw] rounded h-[2.656vw] bg-[#F9F9F9] text-[0.75rem]"
                        : "w-[11.484vw] rounded-e h-[2.656vw] bg-[#F9F9F9] text-[0.75rem] text-dark-gray font-medium"
                    }
                    title="Online Live Classes"
                  ></Button>
                </article>
              </article>
            ) : (
              <Slide top cascade>
                <h1 className="flex justify-center text-[2rem] m-2 font-bold p-5">
                  Our Offline Branches
                </h1>
              </Slide>
            )}
          </header>

          <article
            className={`${
              page === "course"
                ? "flex flex-wrap  gap-4 w-[51.56vw]"
                : "flex flex-wrap  gap-4 justify-center"
            }`}
          >
            {btnState === "OfflineClasses" ? (
              branchCards.map((elements) => {
                if (page === "course") {
                  elements.path = "." + elements.path;
                }
                return (
                  <>
                    <div
                      className={
                        "hover:-translate-y-1 delay-300 duration-300 " +
                        (page !== "course"
                          ? "cursor-pointer"
                          : "w-[30.33%] h-[5.81vw]")
                      }
                    >
                      <figure
                        onClick={(e) => handleImageRoute(e, elements.city)}
                      >
                        <img
                          src={elements.path}
                          className="h-full"
                          alt="imgcard"
                        />
                      </figure>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <OnlineLiveClasses page="course" className="" />
                <div className="w-[42.03vw] flex justify-end pt-4">
                  <button className="w-[9.37vw] py-2 px-4.5 text-[0.75rem] font-medium EnrollButton">
                    View More
                  </button>
                </div>
              </>
            )}
          </article>
        </section>
      </MaxWebWidth>
      {page !== "course" && (
        <MaxWebWidth sectionStyling="bg-backgroundBlue h-[50%] bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain min-h-80 bg-cover">
          <section className="flex justify-center mt-8 mb-8">
            <TrainingMode />
          </section>
        </MaxWebWidth>
      )}
    </>
  );
}

export default OurBranchesHome;
