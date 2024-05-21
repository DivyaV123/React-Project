"use client";
import React, { useState, useContext, useEffect } from "react";
import MaxWebWidth from "../commonComponents/maxwebWidth/maxWebWidth";
import TrainingMode from "./trainingMode/trainingMode";
import Slide from "react-reveal/Slide";
import Button from "../commonComponents/button/Button";
import OnlineLiveClasses from "./OnlineLiveClasses";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../Context/GlobalContext";
import { OFFLINE_BRANCHES, UPCOMING_BATCHES, COMBINED_BRANCHES } from "@/lib/RouteConstants";
import { Skeleton } from "@/components/ui/skeleton"
import './ourBranchesHome.scss'
import Link from "next/link";
function OurBranchesHome({ page }) {
  const router = useRouter();
  const [isloading, setisLoading] = useState(true)
  const { setSelectedBranch } = useContext(GlobalContext);
  const branchCards = [
    { path: "./images/bengaloreBg-Image.png", city: "Bengalore", branchCount: 12 },
    { path: "./images/hydrabadBg-Image.png", city: "Hyderabad", branchCount: 12 },
    { path: "./images/chennaiBg-Images.png", city: "Chennai", branchCount: 12 },
    { path: "./images/puneBg-Image.png", city: "Pune", branchCount: 12 },
    { path: "./images/mumbaiBg-Image.png", city: "Mumbai", branchCount: 12 },
    { path: "./images/noidaBg-Image.png", city: "Noida", branchCount: 12 },
    { path: "./images/gurugramBg-Image.png", city: "Gurugram", branchCount: 12 },
    { path: "./images/newDelhiBg-Image.png", city: "NewDelhi", branchCount: 12 },
    { path: "./images/BhubaneshwariBg-Image.png", city: "Bhuvaneshwar", branchCount: 12 },
    { path: "./images/KolkataBg-Image.png", city: "Kolkata", branchCount: 12 },
    { path: "./images/ahmedabadBg-Image.png", city: "Ahmedaabad", branchCount: 12 },
    { path: "./images/chandhigarBg-image.png", city: "Chandigarh", branchCount: 12 },
    { path: "./images/tirupatiBg-Image.png", city: "Tirupati", branchCount: 12 },
    { path: "./images/kochiBg-Image.png", city: "Kochi", branchCount: 12 },
    { path: "./images/mysoreBg-Image.png", city: "Mysore", branchCount: 12 },
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
      setSelectedBranch(city);
      router.push(`${OFFLINE_BRANCHES}`);
    } else if (page === "course") {
      router.push(`${UPCOMING_BATCHES}`);
    } else if (page !== "course" && city === "AllCities") {
      router.push(`${COMBINED_BRANCHES}`);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 500);
  }, [])
  return (
    <>
      <MaxWebWidth sectionStyling="pb-8">
        <section>
          <header>
            {page === "course" ? (
              <article className="flex justify-between w-[51.56vw]">
                <h1 className="flex justify-start text-[1.5rem] items-center font-bold py-5">
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
            className={`${page === "course"
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
                          : "w-[31.33%] ")
                      }
                    >
                      {isloading ?
                        <Skeleton className="h-[7.813vw] w-[20.469vw]" />
                        :
                        page === "course" ?
                          <div
                            onClick={(e) => handleImageRoute(e, elements.city)}
                            className={`${elements.city !== "AllCities" ? " imgstyling" : ""} w-full h-[7.813vw] w-[20.469vw] rounded-lg flex flex-col justify-center items-center cursor-pointer`}
                            style={{
                              backgroundImage: `url(${elements.path})`,
                              backgroundRepeat: "no-repeat"
                            }}
                          >
                            {elements.city !== "AllCities" &&
                              <p>
                                <h1 className="font-bold text-white text-[1.5rem] flex flex-col justify-center items-center">
                                  {elements.city}
                                </h1>
                                <h1 className='text-white text-[1rem] flex flex-col justify-center items-center'>
                                  {elements.branchCount}{" "}Branches
                                </h1>
                              </p>
                            }
                          </div>
                          :
                          <div
                            onClick={(e) => handleImageRoute(e, elements.city)}
                            className={`${elements.city !== "AllCities" ? " imgstyling" : ""} w-full h-[7.813vw] !w-[20.469vw] rounded-lg flex flex-col justify-center items-center`}
                            style={{
                              backgroundImage: `url(${elements.path})`,
                              backgroundRepeat: 'no-repeat',
                            }}
                          >
                            {elements.city !== "AllCities" &&
                              <p>
                                <h1 className="font-bold text-white text-[1.5rem] flex flex-col justify-center items-center">
                                  {elements.city}
                                </h1>
                                <h1 className='text-white text-[1rem] flex flex-col justify-center items-center'>
                                  {elements.branchCount}{" "}Branches
                                </h1>
                              </p>
                            }
                          </div>
                      }
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <OnlineLiveClasses page="course" className="" />
                <div className="w-[42.03vw] flex justify-end pt-4">
                  <button className="w-[9.37vw] py-2 px-4.5 text-[0.875rem] font-semibold EnrollButton">
                    View More
                  </button>
                </div>
              </>
            )}
          </article>
        </section >
      </MaxWebWidth >
      {page !== "course" && (
        <MaxWebWidth sectionStyling="bg-backgroundBlue h-[50%] bg-[url('/illustrate_wave.svg')] bg-no-repeat bg-left bg-contain min-h-80 bg-cover">
          <section className="flex justify-center mt-8 mb-8">
            <TrainingMode />
          </section>
        </MaxWebWidth>
      )
      }
    </>
  );
}

export default OurBranchesHome;
