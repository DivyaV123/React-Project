"use client";
import React, { useContext, useState } from "react";
import "./navitems.scss";
import { svgicons } from "@/components/assets/icons/svgassets";
import Svg from "@/components/commonComponents/Svg/Svg";
import { BRANCH_PATH } from "@/lib/RouteConstants";
import Link from "next/link";
import { GlobalContext } from "@/components/Context/GlobalContext";
const Branches = ({ BranchResponse }) => {
  const { setOnGoingBatches, setupComingBatches } = useContext(GlobalContext)
  const Branches = [
    {
      icon: "bengaloreIcon",
      title: "Bangalore",
      arrow: "/arrowIconDark.svg",
      list: [
        { icon: "", title: "Java Full Stack", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "Python Full Stack", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "MERN Stach", arrow: "/arrowIconDark.svg" },
        {
          icon: "",
          title: "Data Science and Python",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Web Development with React",
          arrow: "/arrowIconDark.svg",
        },
        { icon: "", title: "Java Backend", arrow: "/arrowIconDark.svg" },
        { icon: "", title: "Python Backend", arrow: "/arrowIconDark.svg" },
        {
          icon: "",
          title: "Software Testing Master Course with Java selenium",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Software Testing Master Course with Python selenium",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "Advance Java selenium Test Automation",
          arrow: "/arrowIconDark.svg",
        },
        {
          icon: "",
          title: "API/Webservice Automation Testing",
          arrow: "/arrowIconDark.svg",
        },
      ],
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "hydrabadIcon",
      title: "Hyderabad",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "chennaiIcon",
      title: "Chennai",
      arrow: "/arrowIconDark.svg",
      sublist: [
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Hebbal",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "BTM Layout",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Basavangudi",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Old Airport Road",

          mobile: "+91-5986586254 | +91-5986586254",
        },
        {
          image: "/branch.png",
          title: "Rajajinagar",

          mobile: "+91-5986586254 | +91-5986586254",
        },
      ],
    },
    {
      icon: "puneIcon",
      title: "Pune",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "mumbaiIcon",
      title: "Mumbai",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "noidaIcon",
      title: "Noida",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "gurugramIcon",
      title: "Gurugram",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "newDelhiIcon",
      title: "New Delhi",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "bhubaneshwarIcon",
      title: "Bhubaneswar",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "kolkataIcon",
      title: "Kolkata",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "ahmedabadIcon",
      title: "Ahmedabad",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "chandigarhIcon",
      title: "Chandigarh",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "tirupatiIcon",
      title: "Tirupati",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "kochiIcon",
      title: "Kochi",
      arrow: "/arrowIconDark.svg",
    },
    {
      icon: "mysoreIcon",
      title: "Mysore",
      arrow: "/arrowIconDark.svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(0);
  const cityData = BranchResponse?.data[0]?.cities;
  const courseData = BranchResponse?.data[0]?.cities[hoveredIndex].courses;
  const finalContent = BranchResponse?.data[0]?.cities[hoveredIndex].courses[hoveredItemIndex]?.branches
  const getContact = (data) => {
    let numbersList = data.split(', ');
    let result = numbersList.slice(0, 2).join(' | ');
    return result
  }
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] overflow-auto myscrollbar">
      <div
        className={`menuSidebar  pt-2 xl:w-[18.75vw] 2xl:w-[13.75vw]  3xl:w-[10.75vw]`}
      >
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
          <div className="xl:w-[18.75vw] 2xl:w-[17.75vw]  3xl:w-[12.75vw] pt-2 menuSidebar ">
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
                  <button className="p-2 text-sm text-left">
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
            ? "branchlist pl-4 pt-2"
            : "coursefull p-3"
            }   flex flex-wrap  h-fit gap-4`}
        >
          {finalContent?.length > 0 &&
            finalContent?.map
              (
                (content, index) => {
                  setOnGoingBatches(content.ongoingBatches)
                  setupComingBatches(content.upcomingBatches)
                  return (
                    <Link href={`/branches/${content.branchId}-branchId,${BranchResponse?.data[0]?.cities[hoveredIndex].courses[hoveredItemIndex].courseId}-courseId`}>
                      <div
                        key={index}
                        className={`${hoveredIndex !== null && finalContent
                          ? "branchMedium"
                          : "branchinitial"
                          } p-2 branchOverlay h-fit`}
                      >
                        <div className="flex h-10 gap-x-2.5">
                          <img className="h-9 w-9" src={content.branchImage} />
                          <div>
                            <h3 className="text-left h-5 text-sm font-bold">
                              {content.branchName}
                            </h3>
                            <p className="text-left h-5 text-xs text-amber-800">
                              {getContact(content.phoneNumber)}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm p-1 titleText">
                            <p>{content.upcomingBatches} Upcoming Batches</p>
                            <p>{content.ongoingBatches} Ongoing Batches</p>
                          </div>
                          <div className=" flex gap-1 text-xs directions p-2">
                            <p>Get Directions</p>
                            <img src="/DirectionIcon.svg" className="h-4 w-4" />
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
