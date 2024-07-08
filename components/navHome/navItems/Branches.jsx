"use client";
import React, { useContext, useState } from "react";
import "./navitems.scss";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import Link from "next/link";
import { GlobalContext } from "@/components/Context/GlobalContext";

const Branches = ({ BranchResponse }) => {
  const { setOnGoingBatches, setupComingBatches, setHomeBranchData } = useContext(GlobalContext)
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(0);
  const [countryTab, setCountryTab] = useState("India");
  const [activeTab, setActiveTab] = useState(true);
  const countryNames = ["India", "USA", "UK"];
  const cityData = BranchResponse?.data[0]?.cities;
  const courseData = BranchResponse?.data[0]?.cities[hoveredIndex].courses;
  const finalContent = BranchResponse?.data[0]?.cities[hoveredIndex].courses[hoveredItemIndex]?.branches
  const getContact = (data) => {
    let numbersList = data.split(', ');
    let result = numbersList.slice(0, 2).join(' | ');
    return result
  }
  const handleCountryTab = (country) => {
    setCountryTab(country);
    if (country === countryTab) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  };
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar">
      <div
        className={`menuSidebar  pt-2 xl:w-[18.75vw] 2xl:w-[13.75vw]  3xl:w-[10.75vw] lg:h-[500px] overflow-auto branchesScroll`}
       >
        <section className="flex gap-6 pl-4 pt-[1.389vh] pb-[1.667vh]">
            {countryNames.map((ele) => (
              <button
                className={`text-[0.938vw] font-bold ${
                  countryTab === ele ? "activecountry" : ""
                } `}
                onClick={() => handleCountryTab(ele)}
              >
                {ele}
              </button>
            ))}
          </section>
        {cityData?.map((courseItem, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => {
                setHoveredIndex(index)
                setHoveredItemIndex(0)
              }}
              className={`flex ${hoveredIndex === index ? "menuItem" : "menuItemdisable"
                }  pl-4 pr-2 items-center`}
            // onMouseLeave={() => setHoveredIndex()}
            >
              <img src={courseItem.cityIcon} />
              <div className="flex justify-between grow">
                <button className="p-2 text-sm">{courseItem.cityName}</button>
                <img
                  src="/arrowIconDark.svg"
                  className={`${hoveredIndex === index ? "visible" : "invisible"
                    } w-4`}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="xl:w-[64.34vw] 2xl:w-[67.34vw] 3xl:w-[70.34vw] flex ">
        {hoveredIndex !== null && cityData?.[hoveredIndex]?.courses?.length > 0 && (
          <div className="xl:w-[23.25vw] 2xl:w-[20.5vw]  3xl:w-[17.75vw] pt-2 menuSidebar ">
            {courseData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex justify-between grow pl-2 ${hoveredItemIndex === itemIndex
                  ? "menuItem"
                  : "menuItemdisable"
                  } pr-2 items-center`}
                onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                onMouseLeave={() => { }}
              >
                <div className="flex justify-between grow ">
                  <button className="p-2 text-[#454545] text-bold text-sm text-left">
                    {item.courseName}
                  </button>
                  <img
                    src="/arrowIconDark.svg"
                    className={`${hoveredItemIndex === itemIndex ? "visible" : "invisible"
                      } w-4`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${hoveredIndex !== null && courseData
            ? "branchlist "
            : "coursefull "
            }   flex flex-wrap  h-fit gap-4 py-[2.222vh] px-[1.25vw]`}
        >
          {finalContent?.length > 0 &&
            finalContent?.map
              (
                (content, index) => {
                  setOnGoingBatches(content.ongoingBatches)
                  setupComingBatches(content.upcomingBatches)
                  return (
                    <Link className="" href={`/branches/${content.branchId}-branchId,${BranchResponse?.data[0]?.cities[hoveredIndex].courses[hoveredItemIndex].courseId}-courseId`}>
                      <div className="flex branchMenuCard bg-[#FFFFFF] xl:w-[19.922vw] 2xl:w-[22.73vw] 3xl:w-[25.2vw]  rounded-xl px-[1.389vh] py-[0.781vw]" key={index}>
                        <div>
                          {content.branchImage &&
                            <Image
                              src={content.branchImage}
                              alt="branch"
                              width={36}
                              height={36}
                              style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                              sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
                              className="rounded"
                            />
                          }


                          {/* <img className="rounded h-[2.813vw] object-cover w-[2.813vw]" src={content.branchImage} alt="" /> */}
                        </div>
                        <div className="pl-[0.781vw]">
                          <div className="flex justify-between pb-[1.111vh]">
                            <h3 className="text-left h-5 text-[0.938vw] font-bold">
                              {content.branchName}
                            </h3>
                            <button onClick={() => window.open(content.location, "_blank")} className="flex gap-1 text-xs text z-1">
                              <p className="text-orange-500 text-[0.703vw] p-[0.156vw]">Get Directions</p>
                              <Svg
                                className="pr-[0.469vw]"
                                width={svgicons.navigationIcon[0]}
                                height={svgicons.navigationIcon[1]}
                                viewBox={svgicons.navigationIcon[2]}
                                icon={svgicons.navigationIcon[3]}
                                color={svgicons.navigationIcon[4]}
                              />
                            </button>
                          </div>
                          <p className="text-[0.781vw] text-[#575757] pb-[1.094vw] flex-col align-center">
                            {getContact(content.phoneNumber)}
                          </p>
                          <div className="flex pb-[0.556vh] 3xl:items-center 3xl:gap-4">
                            <div className="flex gap-1.5 justify-center">
                              <Svg
                                className="pr-[0.469vw]"
                                width={svgicons.calender[0]}
                                height={svgicons.calender[1]}
                                viewBox={svgicons.calender[2]}
                                icon={svgicons.calender[3]}
                                color={svgicons.calender[4]}
                              />
                              <p className="text-[0.781vw]">{content.upcomingBatches} Upcoming Batches</p>
                            </div>
                            <div className="flex gap-1.5 justify-center">
                              <Svg
                                className=''
                                width={svgicons.icontime[0]}
                                height={svgicons.icontime[1]}
                                viewBox={svgicons.icontime[2]}
                                icon={svgicons.icontime[3]}
                                color={svgicons.icontime[4]}
                              />
                              <p className="text-[0.781vw] pl-[0.469vw]">{content.ongoingBatches} Ongoing Batches</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                }
              )}
        </div>
      </div>
    </div>
  );
};

export default Branches;
